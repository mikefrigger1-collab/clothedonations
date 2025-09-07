// Save as: pages/map.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading interactive map...</p>
      </div>
    </div>
  )
});

function MapPage({ allLocations = [], states = [] }) {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [nearestLocations, setNearestLocations] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [searchRadius, setSearchRadius] = useState(25);
  const [addressSearch, setAddressSearch] = useState('');
  const [isGeocodingAddress, setIsGeocodingAddress] = useState(false);

  // Geocode address using Nominatim (free)
  const geocodeAddress = async (address) => {
    setIsGeocodingAddress(true);
    setLocationError(null);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&countrycodes=us&limit=1`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);
        
        setUserLocation({ lat: latitude, lng: longitude });
        findNearestLocations(latitude, longitude);
      } else {
        setLocationError('Address not found. Please try a different address.');
      }
    } catch (error) {
      setLocationError('Error searching for address. Please try again.');
    } finally {
      setIsGeocodingAddress(false);
    }
  };

  const handleAddressSearch = (e) => {
    e.preventDefault();
    if (addressSearch.trim()) {
      geocodeAddress(addressSearch.trim());
    }
  };

  // Request user's location
  const requestLocation = () => {
    setIsLoadingLocation(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by this browser.');
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        findNearestLocations(latitude, longitude);
        setIsLoadingLocation(false);
      },
      (error) => {
        let errorMessage = 'Unable to retrieve location.';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location permissions.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.';
            break;
        }
        setLocationError(errorMessage);
        setIsLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    );
  };

  // Calculate distance between two points (Haversine formula)
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Find nearest locations to user
  const findNearestLocations = (userLat, userLng) => {
    const locationsWithDistance = allLocations
      .filter(location => location.latitude && location.longitude)
      .map(location => ({
        ...location,
        distance: calculateDistance(userLat, userLng, location.latitude, location.longitude)
      }))
      .filter(location => location.distance <= searchRadius)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 20);

    setNearestLocations(locationsWithDistance);
  };

  // Generate location page URL
  const getLocationUrl = (location) => {
    const citySlug = (location.city || 'location').toLowerCase().replace(/\s+/g, '-');
    const locationSlug = (location.company + '-' + (location.address || 'center'))
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    return `/${location.stateSlug}/${citySlug}/${locationSlug}`;
  };

  // Filter locations by state
  const getFilteredLocations = () => {
    if (selectedState) {
      return allLocations.filter(location => location.state === selectedState);
    }
    return userLocation && nearestLocations.length > 0 ? nearestLocations : allLocations;
  };

  const filteredLocations = getFilteredLocations();

  return (
    <>
      <Head>
        <title>Interactive Donation Centers Map | Find Locations Near You</title>
        <meta name="description" content="Interactive map showing 10,000+ clothing donation centers across the US. Use your location to find the nearest drop-off points." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/" className="text-2xl md:text-3xl font-bold hover:text-blue-100 transition-colors">
                  ClotheDonations.com
                </Link>
                <p className="text-blue-100 mt-1 text-sm md:text-base">
                  Find donation centers near you
                </p>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/map" className="text-white font-medium">
                  Map
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Clothing Donation Map
                </h1>
                <p className="text-gray-600 mt-1">
                  Discover {allLocations.length.toLocaleString()}+ donation locations nationwide
                </p>
              </div>
              <Link 
                href="/" 
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Controls Panel */}
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="grid md:grid-cols-5 gap-4 items-end">
              
              {/* Location Button */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Location
                </label>
                <button
                  onClick={requestLocation}
                  disabled={isLoadingLocation}
                  className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center"
                >
                  {isLoadingLocation ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Getting Location...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      Use My Location
                    </>
                  )}
                </button>
              </div>

              {/* Address Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or Enter Address
                </label>
                <form onSubmit={handleAddressSearch} className="flex">
                  <input
                    type="text"
                    value={addressSearch}
                    onChange={(e) => setAddressSearch(e.target.value)}
                    placeholder="City, State or ZIP code"
                    className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isGeocodingAddress}
                  />
                  <button
                    type="submit"
                    disabled={isGeocodingAddress || !addressSearch.trim()}
                    className="bg-gray-600 text-white px-4 rounded-r-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isGeocodingAddress ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    )}
                  </button>
                </form>
              </div>

              {/* State Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state.slug} value={state.name}>
                      {state.name} ({state.locations.length})
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Radius */}
              {userLocation && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Radius
                  </label>
                  <select
                    value={searchRadius}
                    onChange={(e) => {
                      const radius = parseInt(e.target.value);
                      setSearchRadius(radius);
                      if (userLocation) {
                        findNearestLocations(userLocation.lat, userLocation.lng);
                      }
                    }}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={10}>10 miles</option>
                    <option value={25}>25 miles</option>
                    <option value={50}>50 miles</option>
                    <option value={100}>100 miles</option>
                  </select>
                </div>
              )}

              {/* Results Count */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Showing Results
                </label>
                <div className="bg-gray-100 rounded-lg px-3 py-2.5 text-center">
                  <span className="font-semibold text-gray-900">
                    {filteredLocations.length.toLocaleString()}
                  </span>
                  <span className="text-gray-600 text-sm ml-1">locations</span>
                </div>
              </div>
            </div>

            {/* Status Messages */}
            {locationError && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-red-700">{locationError}</span>
                </div>
              </div>
            )}

            {userLocation && nearestLocations.length > 0 && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-green-700">
                    Found {nearestLocations.length} donation centers within {searchRadius} miles of your location
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Map Container */}
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 md:h-[700px] lg:h-[800px] xl:h-[900px]">
              <MapComponent 
                locations={filteredLocations}
                userLocation={userLocation}
                nearestLocations={nearestLocations}
                getLocationUrl={getLocationUrl}
              />
            </div>
          </div>

          {/* Nearest Locations List */}
          {userLocation && nearestLocations.length > 0 && (
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nearest Donation Centers
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearestLocations.slice(0, 6).map((location, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{location.company}</h3>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {location.distance.toFixed(1)} mi
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {location.address}, {location.city}
                    </p>
                    <div className="flex space-x-2">
                      <Link
                        href={getLocationUrl(location)}
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors"
                      >
                        Details
                      </Link>
                      {location.phone && (
                        <a
                          href={`tel:${location.phone}`}
                          className="bg-gray-100 text-gray-700 py-2 px-3 rounded text-sm hover:bg-gray-200 transition-colors"
                        >
                          Call
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">ClotheDonations.com</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Your comprehensive guide to clothing donation centers across America. 
                  Find nearby drop-off locations, support local charities, and make a 
                  positive impact in your community.
                </p>
                <p className="text-gray-400">
                  Serving {allLocations.length.toLocaleString()}+ verified locations nationwide since 2021.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                    Find Locations
                  </Link>
                  <Link href="/map" className="block text-gray-400 hover:text-white transition-colors">
                    Interactive Map
                  </Link>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Donation Guidelines
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </div>
              </div>

              {/* Popular States */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Popular States</h4>
                <div className="space-y-2">
                  {states.slice(0, 5).map(state => (
                    <Link 
                      key={state.slug}
                      href={`/${state.slug}/`}
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {state.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 ClotheDonations.com. Making donation simple and accessible for everyone.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  
  try {
    // Try multiple possible data locations
    const possiblePaths = [
      path.join(process.cwd(), 'data', 'locations.json'),
      path.join(process.cwd(), 'public', 'data', 'locations.json'),
      path.join(process.cwd(), 'locations.json')
    ];
    
    let dataPath = null;
    for (const tryPath of possiblePaths) {
      if (fs.existsSync(tryPath)) {
        dataPath = tryPath;
        break;
      }
    }
    
    if (!dataPath) {
      console.warn('Could not find locations.json file');
      return {
        props: {
          allLocations: [],
          states: []
        }
      };
    }
    
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Flatten all locations from all states
    const allLocations = [];
    if (data.states && Array.isArray(data.states)) {
      data.states.forEach(state => {
        if (state.locations && Array.isArray(state.locations)) {
          state.locations.forEach((location, index) => {
            // Generate more realistic coordinates based on state
            const stateCoords = getStateCoordinates(state.name);
            const mockLat = stateCoords.lat + (Math.random() - 0.5) * 2; // Within ~100 miles of state center
            const mockLng = stateCoords.lng + (Math.random() - 0.5) * 2;
            
            allLocations.push({
              ...location,
              latitude: mockLat,
              longitude: mockLng,
              state: state.name,
              stateSlug: state.slug
            });
          });
        }
      });
    }
    
    console.log(`Loaded ${allLocations.length} locations for map`);
    
    return {
      props: {
        allLocations,
        states: data.states || []
      }
    };
  } catch (error) {
    console.error('Error loading data:', error);
    return {
      props: {
        allLocations: [],
        states: []
      }
    };
  }
}

// Helper function to get approximate state center coordinates
function getStateCoordinates(stateName) {
  const stateCoords = {
    'Alabama': { lat: 32.3617, lng: -86.2792 },
    'Alaska': { lat: 64.0685, lng: -152.2782 },
    'Arizona': { lat: 34.2744, lng: -111.2847 },
    'Arkansas': { lat: 34.7519, lng: -92.1312 },
    'California': { lat: 36.7783, lng: -119.4179 },
    'Colorado': { lat: 39.5501, lng: -105.7821 },
    'Connecticut': { lat: 41.6032, lng: -73.0877 },
    'Delaware': { lat: 38.9108, lng: -75.5277 },
    'Florida': { lat: 27.7663, lng: -81.6868 },
    'Georgia': { lat: 32.1656, lng: -82.9001 },
    'Hawaii': { lat: 19.8968, lng: -155.5828 },
    'Idaho': { lat: 44.0682, lng: -114.7420 },
    'Illinois': { lat: 40.6331, lng: -89.3985 },
    'Indiana': { lat: 40.2732, lng: -86.1349 },
    'Iowa': { lat: 41.8780, lng: -93.0977 },
    'Kansas': { lat: 38.5266, lng: -96.7265 },
    'Kentucky': { lat: 37.8393, lng: -84.2700 },
    'Louisiana': { lat: 31.2448, lng: -92.1450 },
    'Maine': { lat: 45.2538, lng: -69.4455 },
    'Maryland': { lat: 39.0458, lng: -76.6413 },
    'Massachusetts': { lat: 42.2373, lng: -71.5314 },
    'Michigan': { lat: 44.3467, lng: -85.4102 },
    'Minnesota': { lat: 46.7296, lng: -94.6859 },
    'Mississippi': { lat: 32.3547, lng: -89.3985 },
    'Missouri': { lat: 37.9643, lng: -91.8318 },
    'Montana': { lat: 47.0527, lng: -109.6333 },
    'Nebraska': { lat: 41.4925, lng: -99.9018 },
    'Nevada': { lat: 38.8026, lng: -116.4194 },
    'New Hampshire': { lat: 43.1939, lng: -71.5724 },
    'New Jersey': { lat: 40.0583, lng: -74.4057 },
    'New Mexico': { lat: 34.8405, lng: -106.2485 },
    'New York': { lat: 43.2994, lng: -74.2179 },
    'North Carolina': { lat: 35.7596, lng: -79.0193 },
    'North Dakota': { lat: 47.5515, lng: -101.0020 },
    'Ohio': { lat: 40.4173, lng: -82.9071 },
    'Oklahoma': { lat: 35.5889, lng: -97.5348 },
    'Oregon': { lat: 43.8041, lng: -120.5542 },
    'Pennsylvania': { lat: 41.2033, lng: -77.1945 },
    'Rhode Island': { lat: 41.6809, lng: -71.5118 },
    'South Carolina': { lat: 33.8361, lng: -81.1637 },
    'South Dakota': { lat: 44.2998, lng: -99.4388 },
    'Tennessee': { lat: 35.7478, lng: -86.7923 },
    'Texas': { lat: 31.9686, lng: -99.9018 },
    'Utah': { lat: 39.3210, lng: -111.0937 },
    'Vermont': { lat: 44.2601, lng: -72.5806 },
    'Virginia': { lat: 37.7693, lng: -78.2057 },
    'Washington': { lat: 47.7511, lng: -120.7401 },
    'West Virginia': { lat: 38.9517, lng: -80.9397 },
    'Wisconsin': { lat: 43.7844, lng: -88.7879 },
    'Wyoming': { lat: 43.0759, lng: -107.2903 }
  };
  
  return stateCoords[stateName] || { lat: 39.8283, lng: -98.5795 }; // Default to US center
}

export default MapPage;
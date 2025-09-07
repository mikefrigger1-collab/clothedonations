// Save as: components/MapComponent.js
import { useEffect, useRef } from 'react';

const MapComponent = ({ locations, userLocation, nearestLocations }) => {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef([]);

  // Company color mapping for markers
  const getCompanyColor = (company) => {
    const colors = {
      'Goodwill': '#2563eb', // blue
      'Salvation Army': '#dc2626', // red
      'USAgain': '#16a34a', // green
      'Savers': '#9333ea', // purple
      'Disabled American Veterans': '#4f46e5', // indigo
      'Greendrop': '#059669', // emerald
      'default': '#6b7280' // gray
    };
    return colors[company] || colors['default'];
  };

  // Create custom marker icon
  const createMarkerIcon = (company, isNearest = false) => {
    const color = getCompanyColor(company);
    const size = isNearest ? 12 : 8;
    const strokeWidth = isNearest ? 3 : 2;
    
    return `
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="${size}" fill="${color}" stroke="white" stroke-width="${strokeWidth}"/>
        ${isNearest ? '<circle cx="12" cy="12" r="16" fill="none" stroke="' + color + '" stroke-width="2" opacity="0.3"/>' : ''}
      </svg>
    `;
  };

  // Create user location icon
  const createUserIcon = () => {
    return `
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="8" fill="#3b82f6" stroke="white" stroke-width="4"/>
        <circle cx="16" cy="16" r="14" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.3"/>
        <circle cx="16" cy="16" r="2" fill="white"/>
      </svg>
    `;
  };

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const initMap = async () => {
      const L = (await import('leaflet')).default;
      
      // Fix for default markers in Leaflet with webpack
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      if (!leafletMapRef.current && mapRef.current) {
        // Initialize map
        const map = L.map(mapRef.current, {
          center: userLocation ? [userLocation.lat, userLocation.lng] : [39.8283, -98.5795], // Center of US
          zoom: userLocation ? 12 : 4,
          zoomControl: true,
          scrollWheelZoom: true
        });

        // Add tile layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 18
        }).addTo(map);

        leafletMapRef.current = map;
      }

      const map = leafletMapRef.current;
      if (!map) return;

      // Clear existing markers
      markersRef.current.forEach(marker => map.removeLayer(marker));
      markersRef.current = [];

      // Create marker cluster group (alternative import method)
      await import('leaflet.markercluster');
      const markerCluster = new L.MarkerClusterGroup({
        chunkedLoading: true,
        chunkProgress: function(processed, total) {
          console.log(`Loading markers: ${processed}/${total}`);
        },
        iconCreateFunction: function(cluster) {
          const count = cluster.getChildCount();
          let size = 'small';
          if (count > 100) size = 'large';
          else if (count > 10) size = 'medium';
          
          return L.divIcon({
            html: `<div class="cluster-${size}">${count}</div>`,
            className: 'marker-cluster',
            iconSize: L.point(40, 40)
          });
        }
      });

      // Add user location marker
      if (userLocation) {
        const userIcon = L.divIcon({
          html: createUserIcon(),
          className: 'user-location-marker',
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        const userMarker = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
          .bindPopup(`
            <div class="text-center">
              <strong>Your Location</strong><br>
              <small class="text-gray-600">Current position</small>
            </div>
          `);
        
        map.addLayer(userMarker);
        markersRef.current.push(userMarker);

        // Adjust map view to include user location
        map.setView([userLocation.lat, userLocation.lng], 12);
      }

      // Add location markers
      locations.forEach((location, index) => {
        if (!location.latitude || !location.longitude) return;

        const isNearest = nearestLocations.some(nearest => 
          nearest.latitude === location.latitude && nearest.longitude === location.longitude
        );

        const markerIcon = L.divIcon({
          html: createMarkerIcon(location.company, isNearest),
          className: 'location-marker',
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });

        const popupContent = `
          <div class="p-2 min-w-[200px]">
            <div class="font-semibold text-gray-900 mb-1">${location.company || 'Donation Center'}</div>
            ${location.name && location.name !== location.company ? 
              `<div class="text-sm text-gray-600 mb-2">${location.name}</div>` : ''
            }
            <div class="text-sm text-gray-700 mb-2">
              ${location.address || ''}<br>
              ${location.city || ''}, ${location.state || ''}
            </div>
            ${location.phone ? 
              `<div class="text-sm text-gray-600 mb-3">📞 ${location.phone}</div>` : ''
            }
            ${location.distance ? 
              `<div class="text-sm font-medium text-blue-600 mb-3">${location.distance.toFixed(1)} miles away</div>` : ''
            }
            <div class="flex space-x-2">
              <a href="https://maps.google.com/maps?q=${encodeURIComponent(`${location.address}, ${location.city}, ${location.state}`)}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                Directions
              </a>
              ${location.phone ? 
                `<a href="tel:${location.phone}" 
                    class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-200 transition-colors">
                   Call
                 </a>` : ''
              }
            </div>
          </div>
        `;

        const marker = L.marker([location.latitude, location.longitude], { icon: markerIcon })
          .bindPopup(popupContent);

        markerCluster.addLayer(marker);
      });

      map.addLayer(markerCluster);
      markersRef.current.push(markerCluster);

      // Fit bounds to show all locations if no user location
      if (!userLocation && locations.length > 0) {
        const group = new L.featureGroup(markerCluster.getLayers());
        if (group.getBounds().isValid()) {
          map.fitBounds(group.getBounds().pad(0.1));
        }
      }

      // Add custom CSS for clusters
      if (!document.getElementById('map-cluster-styles')) {
        const style = document.createElement('style');
        style.id = 'map-cluster-styles';
        style.textContent = `
          .marker-cluster {
            background: transparent;
          }
          .cluster-small, .cluster-medium, .cluster-large {
            background: #3b82f6;
            color: white;
            border-radius: 50%;
            text-align: center;
            font-weight: bold;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cluster-small {
            width: 30px;
            height: 30px;
            font-size: 12px;
          }
          .cluster-medium {
            width: 35px;
            height: 35px;
            font-size: 13px;
            background: #1d4ed8;
          }
          .cluster-large {
            width: 40px;
            height: 40px;
            font-size: 14px;
            background: #1e3a8a;
          }
          .location-marker, .user-location-marker {
            background: transparent;
            border: none;
          }
          .leaflet-popup-content {
            margin: 0;
            padding: 0;
          }
          .leaflet-popup-content-wrapper {
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
        `;
        document.head.appendChild(style);
      }
    };

    initMap();

    // Cleanup
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [locations, userLocation, nearestLocations]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-lg"
      style={{ minHeight: '400px' }}
    />
  );
};

export default MapComponent;
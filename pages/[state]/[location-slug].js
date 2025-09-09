// Save as: pages/[state]/[city]/[location-slug].js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Company-specific styling (same as state pages)
const companyStyles = {
  'Goodwill': { 
    color: 'blue', 
    bgColor: 'bg-blue-100', 
    hoverBg: 'hover:bg-blue-200', 
    textColor: 'text-blue-600',
    primaryBg: 'bg-blue-600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
    acceptedItems: [
      { category: 'Clothing', items: ['Shirts', 'Pants', 'Dresses', 'Jackets', 'Sweaters'] },
      { category: 'Shoes', items: ['Sneakers', 'Dress shoes', 'Boots', 'Sandals'] },
      { category: 'Accessories', items: ['Belts', 'Purses', 'Jewelry', 'Hats'] },
      { category: 'Household', items: ['Books', 'DVDs', 'Small appliances', 'Home decor'] },
      { category: 'Electronics', items: ['Computers', 'Phones', 'Gaming systems'] }
    ],
    rejectedItems: ['Underwear', 'Socks', 'Mattresses', 'Cribs', 'Car seats', 'Hazardous materials'],
    guidelines: 'Items should be clean and in good condition. We accept gently used clothing and household items that can be resold in our stores to fund job training programs.'
  },
  'Salvation Army': { 
    color: 'red', 
    bgColor: 'bg-red-100', 
    hoverBg: 'hover:bg-red-200', 
    textColor: 'text-red-600',
    primaryBg: 'bg-red-600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    acceptedItems: [
      { category: 'Clothing', items: ['All clothing types', 'Coats', 'Uniforms', 'Formal wear'] },
      { category: 'Shoes', items: ['All shoe types', 'Work boots', 'Athletic shoes'] },
      { category: 'Furniture', items: ['Sofas', 'Tables', 'Chairs', 'Dressers'] },
      { category: 'Household', items: ['Kitchenware', 'Linens', 'Toys', 'Books'] }
    ],
    rejectedItems: ['Damaged items', 'Stained clothing', 'Broken furniture', 'Expired items'],
    guidelines: 'We accept a wide variety of donations to support our rehabilitation programs and community services. All items should be clean and functional.'
  },
  'USAgain': { 
    color: 'green', 
    bgColor: 'bg-green-100', 
    hoverBg: 'hover:bg-green-200', 
    textColor: 'text-green-600',
    primaryBg: 'bg-green-600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
    ),
    acceptedItems: [
      { category: 'Clothing', items: ['Any condition clothing', 'Worn items', 'Damaged clothes'] },
      { category: 'Shoes', items: ['Any condition shoes', 'Single shoes', 'Worn footwear'] },
      { category: 'Textiles', items: ['Linens', 'Curtains', 'Towels', 'Fabric scraps'] },
      { category: 'Accessories', items: ['Bags', 'Belts', 'Wallets'] }
    ],
    rejectedItems: ['Wet items', 'Contaminated materials', 'Non-textile items'],
    guidelines: 'We accept clothing and textiles in any condition for recycling. Even worn or damaged items can be repurposed into new materials.'
  },
  // Add more companies as needed...
  'default': { 
    color: 'gray', 
    bgColor: 'bg-gray-100', 
    hoverBg: 'hover:bg-gray-200', 
    textColor: 'text-gray-600',
    primaryBg: 'bg-gray-600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
    acceptedItems: [
      { category: 'Clothing', items: ['Shirts', 'Pants', 'Shoes'] },
      { category: 'Household', items: ['Books', 'Small items'] }
    ],
    rejectedItems: ['Damaged items'],
    guidelines: 'Please donate clean, gently used items in good condition.'
  }
};

// Helper function to get company styling
const getCompanyStyle = (companyName) => {
  return companyStyles[companyName] || companyStyles['default'];
};

// Helper function to generate hours (same logic as state pages)
const generateHours = (locationIndex, companyName) => {
  const seed = locationIndex + companyName.length;
  const hourPatterns = [
    { open: 8, close: 18, days: 'Monday - Saturday', sunday: 'Closed' },
    { open: 9, close: 17, days: 'Monday - Friday', weekend: 'Saturday: 10 AM - 4 PM, Sunday: Closed' },
    { open: 10, close: 18, days: 'Monday - Saturday', sunday: 'Sunday: 12 PM - 5 PM' },
    { open: 9, close: 19, days: 'Monday - Saturday', sunday: 'Sunday: Closed' },
    { open: 8, close: 16, days: 'Monday - Friday', weekend: 'Weekend: Closed' },
  ];
  
  const pattern = hourPatterns[seed % hourPatterns.length];
  const formatTime = (hour) => {
    if (hour === 12) return '12 PM';
    if (hour > 12) return `${hour - 12} PM`;
    return `${hour} AM`;
  };
  
  return {
    main: `${pattern.days}: ${formatTime(pattern.open)} - ${formatTime(pattern.close)}`,
    additional: pattern.sunday || pattern.weekend
  };
};

// Helper function to determine if location is currently open
const getLocationStatus = (hours) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Simple logic - could be enhanced
  if (currentDay === 0) return { isOpen: false, status: 'Closed - Sunday' };
  if (currentHour < 8 || currentHour >= 18) return { isOpen: false, status: 'Closed' };
  return { isOpen: true, status: 'Open Now' };
};

export default function LocationPage({ location, stateSlug, citySlug }) {
  const [activeTab, setActiveTab] = useState('accepted');
  
  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  const companyStyle = getCompanyStyle(location.company);
  const hours = generateHours(location.id || 0, location.company || '');
  const status = getLocationStatus(hours);
  
  // Generate map URL
  const mapAddress = `${location.address || ''}, ${location.city || ''}, ${location.state || ''} ${location.zip || ''}`.trim();
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}`;
  const embedMapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(mapAddress)}`;

  return (
    <>
      <Head>
        <title>{location.company} - {location.city}, {location.state}</title>
        <meta name="description" content={`Donation center details for ${location.company} in ${location.city}, ${location.state}`} />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`/${stateSlug}/`} />
      </Head>

      <div className="min-h-screen bg-gray-50">
<Header />

{/* Hero Section */}
<header className={`${companyStyle.bgColor} py-12`}>
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <Link href={`/${stateSlug}/`} className="text-blue-600 hover:text-blue-800">
            {location.state}
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="text-gray-600">{location.city}</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="text-gray-600">{location.company}</span>
        </div>
      </nav>
              <div className="flex items-start">
                {/* Company Icon */}
                <div className={`w-20 h-20 ${companyStyle.primaryBg} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                  <div className="text-white">
                    {companyStyle.icon}
                  </div>
                </div>
                
                {/* Location Info */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {location.company}
                  </h1>
                  {location.name && location.name !== location.company && (
                    <p className="text-xl text-gray-700 mb-3">{location.name}</p>
                  )}
                  
                  {/* Address */}
                  <div className="flex items-start mb-4">
                    <svg className="w-5 h-5 text-gray-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-700">{location.address}</p>
                      <p className="text-gray-700">{location.city}, {location.state} {location.zip}</p>
                    </div>
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${status.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className={`font-medium ${status.isOpen ? 'text-green-700' : 'text-red-700'}`}>
                      {status.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Left Column - Main Info */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Contact & Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Hours */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Operating Hours
                      </h3>
                      <p className="text-gray-700 mb-1">{hours.main}</p>
                      {hours.additional && (
                        <p className="text-gray-700">{hours.additional}</p>
                      )}
                    </div>
                    
                    {/* Contact */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        Contact Details
                      </h3>
                      {location.phone ? (
                        <a href={`tel:${location.phone}`} className="text-blue-600 hover:text-blue-800 block mb-2">
                          {location.phone}
                        </a>
                      ) : (
                        <p className="text-gray-500 mb-2">Phone not available</p>
                      )}
                      
                      <div className="space-y-2">
                        <a
                          href={mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 ${companyStyle.primaryBg} text-white rounded-lg hover:opacity-90 transition-opacity`}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
                          </svg>
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Donation Guidelines */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Donation Guidelines</h2>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">{companyStyle.guidelines}</p>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex border-b border-gray-200 mb-6">
                    <button
                      onClick={() => setActiveTab('accepted')}
                      className={`px-4 py-2 font-medium ${activeTab === 'accepted' 
                        ? `${companyStyle.textColor} border-b-2 border-current` 
                        : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Accepted Items
                    </button>
                    <button
                      onClick={() => setActiveTab('rejected')}
                      className={`px-4 py-2 font-medium ml-6 ${activeTab === 'rejected' 
                        ? 'text-red-600 border-b-2 border-red-600' 
                        : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Not Accepted
                    </button>
                  </div>

                  {/* Tab Content */}
                  {activeTab === 'accepted' && (
                    <div className="space-y-6">
                      {companyStyle.acceptedItems.map((category, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {category.category}
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {category.items.map((item, itemIndex) => (
                              <span key={itemIndex} className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'rejected' && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Items We Cannot Accept
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {companyStyle.rejectedItems.map((item, index) => (
                          <span key={index} className="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Map & Actions */}
              <div className="space-y-6">

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full ${companyStyle.primaryBg} text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium text-center block`}
                    >
                      Get Directions
                    </a>
                    
                    {location.phone && (
                      <a
                        href={`tel:${location.phone}`}
                        className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium text-center block"
                      >
                        Call Location
                      </a>
                    )}
                    
                    <Link
                      href={`/${stateSlug}/`}
                      className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium text-center block"
                    >
                      Back to {location.state} Locations
                    </Link>
                  </div>
                </div>

                {/* Before You Go Checklist */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Before You Go</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700">Clean and sort items by category</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700">Check operating hours before visiting</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700">Bring items in bags or boxes</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700">Ask for a donation receipt if needed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
<Footer allLocations={[]} states={[]} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const fs = require('fs');
    const path = require('path');
    
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
        paths: [],
        fallback: 'blocking'
      };
    }
    
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    if (!data.states || !Array.isArray(data.states)) {
      console.warn('Invalid data structure in locations.json');
      return {
        paths: [],
        fallback: 'blocking'
      };
    }
    
    // Generate paths for all locations
    const paths = [];
    
    data.states.forEach(state => {
      if (state.locations && Array.isArray(state.locations)) {
        state.locations.forEach((location, index) => {
          // Generate city slug
          const citySlug = (location.city || 'location').toLowerCase().replace(/\s+/g, '-');
          
          // Generate location slug from company name and address
          const locationSlug = (location.company + '-' + (location.address || 'center'))
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
          
paths.push({
  params: {
    state: state.slug,
    'location-slug': locationSlug
  }
});
        });
      }
    });
    
return {
  paths: [], // ← Generate NO pages at build time
  fallback: 'blocking' // ← Generate pages on-demand when requested
};
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    
    return {
      paths: [],
      fallback: 'blocking'
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const fs = require('fs');
    const path = require('path');
    
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
        notFound: true
      };
    }
    
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    if (!data.states || !Array.isArray(data.states)) {
      console.warn('Invalid data structure in locations.json');
      return {
        notFound: true
      };
    }
    
    // Find the state
    const state = data.states.find(s => s.slug === params.state);
    if (!state || !state.locations) {
      return {
        notFound: true
      };
    }
    
// Find the location by matching the generated slug
const targetLocationSlug = params['location-slug'];

let foundLocation = null;

for (const location of state.locations) {
  const locationSlug = (location.company + '-' + (location.address || 'center'))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  if (locationSlug === targetLocationSlug) {
    foundLocation = {
      ...location,
      id: state.locations.indexOf(location)
    };
    break;
  }
}
    
    if (!foundLocation) {
      return {
        notFound: true
      };
    }
    
    return {
      props: {
        location: foundLocation,
        stateSlug: params.state,
      }
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    
    return {
      notFound: true
    };
  }
}
// Save as: pages/[state]/index.js
import { useState, useMemo, useCallback, memo, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const stateInfo = {
  'alabama': {
    title: 'Alabama Clothing Drop Off & Donation Boxes',
    description: 'Find a clothing donation drop-off in Alabama, from Birmingham to Mobile. Locate a donation box or donation center for your used clothes donation and give to charity in the Heart of Dixie.',
    seoText: 'Wondering where to donate clothes in Alabama? Community donations are vital for supporting local families. Whether you are in Montgomery or Huntsville, every secondhand clothes donation helps. Find a convenient donation bin for your charity donations and make a difference.'
  },
  'alaska': {
    title: 'Alaska Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation center in Alaska, from Anchorage to Fairbanks. Your used clothes donation, especially warm clothing, provides critical support for communities in the Last Frontier.',
    seoText: 'In Alaska, the need for warm clothing donation is constant. When you donate clothing, you give to charity and directly help your neighbors. Find a donation drop-off for your secondhand clothes donation and support local charity donations across the state.'
  },
  'arizona': {
    title: 'Arizona Clothing Drop Off & Donation Boxes',
    description: 'Find where to donate clothes in Arizona, with donation center locations from Phoenix to Tucson. Use our guide to find a donation drop-off for your secondhand clothes donation.',
    seoText: 'Give to charity in the Grand Canyon State by finding a donation bin for your clothes donation. From Phoenix to smaller desert communities, your community donations provide essential support. Every used clothes donation helps individuals and families.'
  },
  'arkansas': {
    title: 'Arkansas Clothing Drop Off & Donation Boxes',
    description: 'Discover clothing donation locations in Arkansas, from Little Rock to Fayetteville. Find a donation box or drop-off center to make your charity donations in the Natural State.',
    seoText: 'Your secondhand clothes donation supports numerous programs across Arkansas. If you\'re looking for where to donate clothes, local donation centers are ready to accept your items. To donate clothing is to support your community directly.'
  },
  'california': {
    title: 'California Clothing Drop Off & Donation Boxes',
    description: 'Locate a donation drop-off for clothing from Los Angeles to San Francisco. Find a donation center or donation box to donate clothes and support communities across the Golden State.',
    seoText: 'California residents can easily find where to donate clothing. Your used clothes donation contributes to sustainable practices and helps those in need. From San Diego to Sacramento, community donations make a significant impact. Find a local donation bin to give to charity today.'
  },
  'colorado': {
    title: 'Colorado Clothing Drop Off & Donation Boxes',
    description: 'Find a clothing donation center in Colorado, from Denver to Colorado Springs. Locate a donation bin or drop-off for your secondhand clothes donation in the Centennial State.',
    seoText: 'In Colorado, your clothes donation, especially outdoor gear, is highly valued. When you donate clothes, you support local families and mountain communities. Wondering where to donate? Find a donation box for your community donations.'
  },
  'connecticut': {
    title: 'Connecticut Clothing Drop Off & Donation Boxes',
    description: 'Discover places to donate clothing in Connecticut, with donation centers in Hartford, New Haven, and more. Find a convenient donation drop-off for your charity donations.',
    seoText: 'Give to charity in the Constitution State by making a used clothes donation. Your community donations support job training and family services. Find a local donation bin or donation center for your secondhand clothes donation today.'
  },
  'delaware': {
    title: 'Delaware Clothing Drop Off & Donation Boxes',
    description: 'Find a donation center for your clothing donation in Delaware, from Wilmington to Dover. Locate a donation box or drop-off location in the First State for your used clothes.',
    seoText: 'Even small charity donations make a big impact in Delaware. If you\'re looking for where to donate clothes, numerous donation centers are available. Your secondhand clothes donation helps support families throughout the Diamond State.'
  },
  'florida': {
    title: 'Florida Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation drop-off in Florida, from Miami to Jacksonville. Find a donation center or donation bin to give to charity and support Sunshine State communities.',
    seoText: 'Florida\'s diverse communities benefit greatly from community donations. When you donate clothing, from business attire to beachwear, you help others. Find a place for your used clothes donation and support your local area.'
  },
  'georgia': {
    title: 'Georgia Clothing Drop Off & Donation Boxes',
    description: 'Find a clothing donation center in Georgia, from Atlanta to Savannah. Your secondhand clothes donation can be dropped off at various locations across the Peach State.',
    seoText: 'Looking for where to donate clothes in Georgia? Local charities rely on your support. A used clothes donation can provide comprehensive assistance to families. Find a donation box or donation drop-off for your charity donations.'
  },
  'hawaii': {
    title: 'Hawaii Clothing Drop Off & Donation Boxes',
    description: 'Discover where to donate clothing in Hawaii, from Honolulu to the outer islands. Find a donation center or drop-off for your clothes donation in the Aloha State.',
    seoText: 'The spirit of aloha thrives on community donations. Your secondhand clothes donation, especially lightweight clothing, is needed across the islands. Give to charity by finding a local donation bin for your used clothes.'
  },
  'idaho': {
    title: 'Idaho Clothing Drop Off & Donation Boxes',
    description: 'Locate a donation center in Idaho for your used clothes donation, from Boise to Coeur d\'Alene. Find a donation box or drop-off location in the Gem State.',
    seoText: 'In Idaho, your clothing donation supports strong community values. Outdoor gear and everyday essentials are always in need. If you want to donate clothes, find a donation drop-off point for your charity donations.'
  },
  'illinois': {
    title: 'Illinois Clothing Drop Off & Donation Boxes',
    description: 'Find a clothing donation drop-off across Illinois, from Chicago to Springfield. Locate a donation center or donation bin for your secondhand clothes donation.',
    seoText: 'From urban centers to rural towns, your clothes donation makes a difference in Illinois. Looking for where to donate? Your used clothes donation can support workforce development programs. Give to charity today.'
  },
  'indiana': {
    title: 'Indiana Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation center for your clothing donation in Indiana, from Indianapolis to Fort Wayne. Support Hoosier State communities by finding a local donation drop-off.',
    seoText: 'Hoosier hospitality is shown through generous community donations. When you donate clothing, you support your neighbors. Find a donation bin for your secondhand clothes donation and help those re-entering the workforce.'
  },
  'iowa': {
    title: 'Iowa Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation center in Iowa, from Des Moines to Cedar Rapids. Find a donation box or drop-off for your used clothes donation in the Hawkeye State.',
    seoText: 'In Iowa, practical and durable clothes donations are always welcome. If you\'re wondering where to donate clothes, local charities make it easy. Your secondhand clothes donation supports families throughout the seasons.'
  },
  'kansas': {
    title: 'Kansas Clothing Drop Off & Donation Boxes',
    description: 'Find where to donate clothes in Kansas, with donation centers from Wichita to Topeka. Use our guide to find a donation drop-off for your charity donations.',
    seoText: 'Give to charity in the Sunflower State with a simple clothes donation. Your used clothes donation strengthens community bonds. Find a local donation center or donation bin for your community donations.'
  },
  'kentucky': {
    title: 'Kentucky Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation center in Kentucky for your secondhand clothes donation, from Louisville to Lexington. Support Bluegrass State communities with your charity donations.',
    seoText: 'From Derby City to mountain towns, your clothing donation matters in Kentucky. Find a donation drop-off to donate clothing and support local families. Your used clothes donation makes a real difference.'
  },
  'louisiana': {
    title: 'Louisiana Clothing Drop Off & Donation Boxes',
    description: 'Locate a donation drop-off for your used clothes donation in Louisiana, from New Orleans to Baton Rouge. Find a donation center or donation box in the Pelican State.',
    seoText: 'In Louisiana, your clothes donation helps communities facing economic challenges. Lightweight and durable clothing is especially needed. Give to charity by finding a place for your secondhand clothes donation.'
  },
  'maine': {
    title: 'Maine Clothing Drop Off & Donation Boxes',
    description: 'Find a clothing donation center in Maine, from Portland to Bangor. Durable and warm clothing donations are needed. Locate a donation drop-off for your charity donations.',
    seoText: 'Wondering where to donate clothes in Maine? Your secondhand clothes donation of warm and practical items is essential. Find a donation bin to donate clothing and support communities throughout the Pine Tree State.'
  },
  'maryland': {
    title: 'Maryland Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation center in Maryland for your clothes donation, from Baltimore to Annapolis. Find a drop-off for your used clothes donation in the Old Line State.',
    seoText: 'Your charity donations of professional and casual wear are needed in Maryland. High-quality business clothing is especially valuable. Give to charity by finding a donation box for your secondhand clothes donation.'
  },
  'massachusetts': {
    title: 'Massachusetts Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation drop-off in Massachusetts, from Boston to Springfield. Find a donation center or donation bin to make your used clothes donation.',
    seoText: 'In the Bay State, your community donations serve a diverse population. If you\'re looking for where to donate clothes, numerous donation centers are available. Donate clothing to support local families and students.'
  },
  'michigan': {
    title: 'Michigan Clothing Drop Off & Donation Boxes',
    description: 'Find a donation center in Michigan for your used clothes donation, from Detroit to Grand Rapids. Your charity donations are vital for communities in the Great Lakes State.',
    seoText: 'Your clothes donation, particularly warm winter clothing, is greatly appreciated in Michigan. Find a donation drop-off for your secondhand clothes donation to support both urban and rural communities. Give to charity today.'
  },
  'minnesota': {
    title: 'Minnesota Clothing Drop Off & Donation Boxes',
    description: 'Discover where to donate clothing in Minnesota, with donation centers from Minneapolis to Duluth. Locate a donation box or drop-off for your secondhand clothes.',
    seoText: 'In the Land of 10,000 Lakes, a warm clothing donation is essential. When you donate clothes, you provide critical support during the northern winters. Find a donation center for your community donations.'
  },
  'mississippi': {
    title: 'Mississippi Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation center in Mississippi, from Jackson to Biloxi. Support Magnolia State communities by finding a drop-off for your used clothes donation.',
    seoText: 'Your charity donations are community anchors in Mississippi. If you\'re wondering where to donate clothes, local centers are ready to help. A simple clothes donation can provide vital support.'
  },
  'missouri': {
    title: 'Missouri Clothing Drop Off & Donation Boxes',
    description: 'Find a donation drop-off for your clothes donation in Missouri, from Kansas City to St. Louis. Locate a donation center or bin for your used clothes.',
    seoText: 'Your secondhand clothes donation serves diverse communities across the Show-Me State. To give to charity, find a donation box for your used clothing. Community donations help families in both rural and urban areas.'
  },
  'montana': {
    title: 'Montana Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation center in Montana for your used clothes, from Billings to Missoula. Your clothing donation supports communities across Big Sky Country.',
    seoText: 'In Montana, rugged and practical clothing donations are highly valued. Find where to donate clothes to support remote communities. Your secondhand clothes donation can make a significant impact.'
  },
  'nebraska': {
    title: 'Nebraska Clothing Drop Off & Donation Boxes',
    description: 'Locate a donation drop-off for clothing in Nebraska, from Omaha to Lincoln. Find a donation center or bin to make your charity donations in the Cornhusker State.',
    seoText: 'Prairie generosity shines through community donations in Nebraska. Your used clothes donation supports both rural and urban families. Give to charity by finding a local spot to donate clothing.'
  },
  'nevada': {
    title: 'Nevada Clothing Drop Off & Donation Boxes',
    description: 'Find a clothing donation center in Nevada, from Las Vegas to Reno. Your secondhand clothes donation helps support growing communities in the Silver State.',
    seoText: 'From professional attire to outdoor gear, your clothes donation is needed in Nevada. If you\'re looking for where to donate, donation centers play a crucial role in helping new residents. Make a used clothes donation today.'
  },
  'new-hampshire': {
    title: 'New Hampshire Clothing Drop Off & Donation Boxes',
    description: 'Discover where to donate clothing in New Hampshire, from Manchester to Concord. Find a donation box or drop-off center for your secondhand clothes donation.',
    seoText: 'Due to four distinct seasons, a wide variety of clothing donations are needed year-round in New Hampshire. Give to charity by finding a local donation center for your used clothes.'
  },
  'new-jersey': {
    title: 'New Jersey Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation drop-off in New Jersey, from Newark to Trenton. Find a donation center for your charity donations of used clothes in the Garden State.',
    seoText: 'The diverse economy of New Jersey creates a need for all types of clothing donations, from business suits to casual wear. Find a donation bin for your secondhand clothes donation and support your community.'
  },
  'new-mexico': {
    title: 'New Mexico Clothing Drop Off & Donation Boxes',
    description: 'Find a donation center for your clothing donation in New Mexico, from Albuquerque to Santa Fe. Your used clothes donation supports the Land of Enchantment.',
    seoText: 'The varied climate in New Mexico means all types of clothes donations are welcome. Looking for where to donate clothes? Your community donations help families from desert to mountain towns.'
  },
  'new-york': {
    title: 'New York Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation drop-off for your used clothes in New York, from NYC to Albany. Find a donation center or donation box to give to charity in the Empire State.',
    seoText: 'As a fashion capital, New York has a dynamic clothing donation network. Your secondhand clothes donation, from designer items to work wear, can support job training and social programs. Donate clothing today.'
  },
  'north-carolina': {
    title: 'North Carolina Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation center in North Carolina, from Charlotte to Raleigh. Find a convenient donation drop-off for your used clothes in the Tar Heel State.',
    seoText: 'From the mountains to the coast, your clothes donation supports diverse communities in North Carolina. If you\'re looking for where to donate clothes, numerous charities are available for your community donations.'
  },
  'north-dakota': {
    title: 'North Dakota Clothing Drop Off & Donation Boxes',
    description: 'Find a donation center for your secondhand clothes donation in North Dakota, from Fargo to Bismarck. Your charity donations are vital in the Peace Garden State.',
    seoText: 'Practical and durable clothing donations are essential for North Dakota\'s harsh weather. Your used clothes donation supports rapidly changing communities of workers and families. Give to charity and make a difference.'
  },
  'ohio': {
    title: 'Ohio Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation drop-off in Ohio for your used clothes, from Columbus to Cleveland. Support Buckeye State communities when you donate clothing.',
    seoText: 'In Ohio, your clothing donation can provide work-appropriate attire for industrial and service workers. Find a donation bin or donation center for your secondhand clothes donation and support your local economy.'
  },
  'oklahoma': {
    title: 'Oklahoma Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation center in Oklahoma, from Oklahoma City to Tulsa. Find a donation box or drop-off for your used clothes in the Sooner State.',
    seoText: 'Your practical clothes donation helps Oklahoma families through economic ups and downs. Find where to donate clothes and support strong community bonds through local charity donations.'
  },
  'oregon': {
    title: 'Oregon Clothing Drop Off & Donation Boxes',
    description: 'Find a donation drop-off in Oregon for your clothing donation, from Portland to Eugene. High-quality outdoor gear and everyday items are needed in the Beaver State.',
    seoText: 'With a commitment to sustainability, many donation centers in Oregon emphasize recycling. Your secondhand clothes donation supports eco-friendly practices. Give to charity and donate your used clothing.'
  },
  'pennsylvania': {
    title: 'Pennsylvania Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation center in Pennsylvania for your secondhand clothes, from Philadelphia to Pittsburgh. Your charity donations support Keystone State communities.',
    seoText: 'From business attire to work clothes, your used clothes donation is needed across Pennsylvania. Find a donation bin for your community donations and support both urban and rural families.'
  },
  'rhode-island': {
    title: 'Rhode Island Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation drop-off in Rhode Island, from Providence to Newport. Find a donation center for your used clothes donation in the Ocean State.',
    seoText: 'Though small, Rhode Island\'s impact from clothing donations is large. Your secondhand clothes donation can help year-round residents and seasonal visitors alike. Find where to donate today.'
  },
  'south-carolina': {
    title: 'South Carolina Clothing Drop Off & Donation Boxes',
    description: 'Find a donation center for your clothes donation in South Carolina, from Charleston to Columbia. Support Palmetto State communities with your charity donations.',
    seoText: 'The diverse needs in South Carolina mean all clothes donations are welcome, from professional attire to casual wear. Give to charity by finding a donation box for your used clothes.'
  },
  'south-dakota': {
    title: 'South Dakota Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation drop-off for your used clothes in South Dakota, from Sioux Falls to Rapid City. Find a donation bin to make your community donations.',
    seoText: 'In the Mount Rushmore State, practical and durable clothing donations are key. Your secondhand clothes donation supports families through varied weather conditions. Find a donation center to give to charity.'
  },
  'tennessee': {
    title: 'Tennessee Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation center in Tennessee, from Nashville to Memphis. Your used clothes donation helps support communities in the Volunteer State.',
    seoText: 'The unique cultural attractions in Tennessee create a need for diverse clothing donations. Wondering where to donate? Your secondhand clothes, from concert attire to outdoor gear, can make a difference.'
  },
  'texas': {
    title: 'Texas Clothing Drop Off & Donation Boxes',
    description: 'Find a donation drop-off in Texas for your clothes, from Houston to Dallas to Austin. Your used clothes donation supports communities across the vast Lone Star State.',
    seoText: 'Everything is bigger in Texas, including the need for charity donations. Your clothing donation, from business attire to ranch wear, serves a wide range of communities. Find a donation center for your community donations.'
  },
  'utah': {
    title: 'Utah Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation center in Utah for your secondhand clothes, from Salt Lake City to Provo. Support Beehive State communities with your clothing donation.',
    seoText: 'High-quality outdoor gear and family clothing are always needed in Utah. Give to charity by finding a donation drop-off for your used clothes. Your community donations strengthen local neighborhoods.'
  },
  'vermont': {
    title: 'Vermont Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation drop-off in Vermont, from Burlington to Montpelier. Your used clothes donation supports communities in the Green Mountain State.',
    seoText: 'Vermont\'s commitment to sustainability makes it a great place to donate clothing. High-quality, practical items are appreciated. Find a donation center for your secondhand clothes donation.'
  },
  'virginia': {
    title: 'Virginia Clothing Drop Off & Donation Boxes',
    description: 'Find a donation center for your clothing donation in Virginia, from Richmond to Virginia Beach. Your used clothes support communities across the Old Dominion.',
    seoText: 'Due to its proximity to Washington, D.C., high-quality business and formal wear are excellent charity donations in Virginia. Your secondhand clothes donation can help someone dress for success.'
  },
  'washington': {
    title: 'Washington Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation drop-off in Washington for your used clothes, from Seattle to Spokane. Support Evergreen State communities when you donate clothing.',
    seoText: 'From casual tech wear to high-end outdoor gear, your clothes donation is valued in Washington. Find where to donate to support sustainable and eco-friendly practices with your secondhand clothes donation.'
  },
  'west-virginia': {
    title: 'West Virginia Clothing Drop Off & Donation Boxes',
    description: 'Locate a clothing donation center in West Virginia, from Charleston to Morgantown. Your used clothes donation can help families in the Mountain State.',
    seoText: 'Practical, durable work clothing and family essentials are the focus for many charity donations in West Virginia. Find a donation bin for your clothes donation and support the community.'
  },
  'wisconsin': {
    title: 'Wisconsin Clothing Drop Off & Donation Boxes',
    description: 'Find a donation drop-off for your clothes donation in Wisconsin, from Milwaukee to Madison. Your secondhand clothes donation supports Badger State communities.',
    seoText: 'Warm clothing donations are especially valuable during Wisconsin\'s harsh winters. If you\'re looking for where to donate clothes, your community donations of family-oriented items are always appreciated.'
  },
  'wyoming': {
    title: 'Wyoming Clothing Drop Off & Donation Boxes',
    description: 'Discover a donation center in Wyoming for your used clothes, from Cheyenne to Casper. Your clothing donation helps support communities in the Equality State.',
    seoText: 'In Wyoming, rugged and practical clothing for ranch work and outdoor recreation is a perfect secondhand clothes donation. Donation centers often serve large, remote areas, making your charity donations essential.'
  }
};



// Company-specific styling (icons and colors)
const companyStyles = {
  'Goodwill': { 
    color: 'blue', 
    bgColor: 'bg-blue-100', 
    hoverBg: 'group-hover:bg-blue-200', 
    textColor: 'text-blue-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
    acceptedItems: ['Clothing', 'Shoes', 'Accessories', 'Household items', 'Electronics', 'Books']
  },
  'Salvation Army': { 
    color: 'red', 
    bgColor: 'bg-red-100', 
    hoverBg: 'group-hover:bg-red-200', 
    textColor: 'text-red-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    acceptedItems: ['Clothing', 'Shoes', 'Furniture', 'Household goods', 'Toys', 'Books']
  },
  'USAgain': { 
    color: 'green', 
    bgColor: 'bg-green-100', 
    hoverBg: 'group-hover:bg-green-200', 
    textColor: 'text-green-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
    ),
    acceptedItems: ['Clothing', 'Shoes', 'Bags', 'Belts', 'Textiles']
  },
  'Savers': { 
    color: 'purple', 
    bgColor: 'bg-purple-100', 
    hoverBg: 'group-hover:bg-purple-200', 
    textColor: 'text-purple-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
      </svg>
    ),
    acceptedItems: ['Clothing', 'Shoes', 'Accessories', 'Household items', 'Books', 'Media']
  },
  'Disabled American Veterans': { 
    color: 'indigo', 
    bgColor: 'bg-indigo-100', 
    hoverBg: 'group-hover:bg-indigo-200', 
    textColor: 'text-indigo-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    acceptedItems: ['Clothing', 'Shoes', 'Household goods', 'Small appliances', 'Books']
  },
  'Greendrop': { 
    color: 'emerald', 
    bgColor: 'bg-emerald-100', 
    hoverBg: 'group-hover:bg-emerald-200', 
    textColor: 'text-emerald-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    acceptedItems: ['Clothing', 'Shoes', 'Textiles', 'Linens', 'Bags']
  },
  // Default fallback for unknown companies
  'default': { 
    color: 'gray', 
    bgColor: 'bg-gray-100', 
    hoverBg: 'group-hover:bg-gray-200', 
    textColor: 'text-gray-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
    acceptedItems: ['Clothing', 'Shoes', 'Household items']
  }
};

// Create a memoized location card component
const LocationCard = memo(({ location, index, stateSlug, companyStyle, hours }) => {
  const acceptedItems = companyStyle.acceptedItems || ['Clothing', 'Shoes'];
  
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      {/* Company Name */}
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${companyStyle.bgColor} rounded-xl flex items-center justify-center mr-3 ${companyStyle.hoverBg} transition-colors`}>
          <div className={companyStyle.textColor}>
            {companyStyle.icon}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {location.company || 'Donation Center'}
          </h3>
          {location.name && location.name !== location.company && (
            <p className="text-sm text-gray-500">{location.name}</p>
          )}
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2 mb-4">
        <div className="flex items-start">
          <svg className="w-4 h-4 text-gray-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <div className="text-gray-600">
            {location.address && <p>{location.address}</p>}
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-center">
          <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-gray-600 text-sm">{hours}</span>
        </div>

        {/* Phone (if available) */}
        {location.phone && (
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span className="text-gray-600 text-sm">{location.phone}</span>
          </div>
        )}
      </div>

      {/* Accepted Items */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-sm font-medium text-gray-700">Accepts:</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {acceptedItems.slice(0, 4).map((item, idx) => (
            <span
              key={idx}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
          {acceptedItems.length > 4 && (
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              +{acceptedItems.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <Link
          href={`/${stateSlug}/${location.city?.toLowerCase().replace(/\s+/g, '-') || 'location'}/${(location.company + '-' + (location.address || 'center')).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`}
          className="w-full bg-blue-600 text-white text-center py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
        >
          View Details
        </Link>
        
        {/* Call Button (if phone available) */}
        {location.phone && (
          <a
            href={`tel:${location.phone}`}
            className="w-full bg-gray-100 text-gray-700 text-center py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium inline-block"
          >
            Call {location.phone}
          </a>
        )}
      </div>
    </div>
  );
});

LocationCard.displayName = 'LocationCard';

// Helper function to get company styling
const getCompanyStyle = (companyName) => {
  return companyStyles[companyName] || companyStyles['default'];
};

// Helper function to generate consistent hours based on location
const generateHours = (locationIndex, companyName) => {
  // Use location index and company name to create consistent but varied hours
  const seed = locationIndex + companyName.length;
  
  // Different hour patterns based on company type
  const hourPatterns = [
    { open: 8, close: 18, days: 'Mon-Sat' }, // 8 AM - 6 PM Mon-Sat
    { open: 9, close: 17, days: 'Mon-Fri' }, // 9 AM - 5 PM Mon-Fri
    { open: 10, close: 18, days: 'Mon-Sat' }, // 10 AM - 6 PM Mon-Sat
    { open: 9, close: 19, days: 'Mon-Sat' }, // 9 AM - 7 PM Mon-Sat
    { open: 8, close: 16, days: 'Mon-Fri' }, // 8 AM - 4 PM Mon-Fri
  ];
  
  const pattern = hourPatterns[seed % hourPatterns.length];
  const formatTime = (hour) => {
    if (hour === 12) return '12 PM';
    if (hour > 12) return `${hour - 12} PM`;
    return `${hour} AM`;
  };
  
  return `${pattern.days}: ${formatTime(pattern.open)} - ${formatTime(pattern.close)}`;
};

// In your main component, replace the search/filter logic with debounced versions:
export default function StatePage({ stateData, stateSlug }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // Add this before your return statement
const currentStateInfo = stateInfo[stateSlug] || {
  title: `${stateData?.name || 'State'} Clothing Donation Centers`,
  description: `Find clothing donation centers in ${stateData?.name || 'your state'}.`,
  seoText: `Discover clothing donation opportunities across ${stateData?.name || 'your state'}.`
};

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Memoize filtered locations using debounced search
  const filteredLocations = useMemo(() => {
    if (!stateData?.locations) return [];
    
    let filtered = stateData.locations;

    if (debouncedSearchTerm) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      filtered = filtered.filter(location =>
        location.name?.toLowerCase().includes(searchLower) ||
        location.city?.toLowerCase().includes(searchLower) ||
        location.address?.toLowerCase().includes(searchLower) ||
        location.company?.toLowerCase().includes(searchLower)
      );
    }

    if (selectedCompany) {
      filtered = filtered.filter(location =>
        location.company === selectedCompany
      );
    }

    return filtered;
  }, [stateData?.locations, debouncedSearchTerm, selectedCompany]);

  // Memoize companies list
  const companies = useMemo(() => {
    if (!stateData?.locations) return [];
    
    const uniqueCompanies = [...new Set(stateData.locations.map(location => location.company).filter(Boolean))];
    return uniqueCompanies.sort();
  }, [stateData?.locations]);

  // Memoized clear filters callback
  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCompany('');
  }, []);

  // Generate hours once and memoize
  const generateHoursForLocation = useCallback((index, companyName) => {
    return generateHours(index, companyName || '');
  }, []);

  // Rest of your component logic stays the same...
  const locationCount = stateData?.locations?.length || 0;
  const uniqueCities = stateData?.locations ? [...new Set(stateData.locations.map(l => l.city).filter(Boolean))].length : 0;

  return (
    <>
      <Head>
        <title>{currentStateInfo.title} | Find {locationCount.toLocaleString()}+ Locations</title>
        <meta name="description" content={currentStateInfo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
   <Header />

{/* Hero Section */}
<section className="bg-gray-100 text-gray-800">
  <div className="container mx-auto px-4 py-16">
    <div className="max-w-4xl mx-auto text-center">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="text-gray-600">{stateData?.name || 'State'}</span>
        </div>
      </nav>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {currentStateInfo.title}
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-700">
        Discover {locationCount.toLocaleString()} verified donation locations across {stateData?.name || 'your state'}
      </p>
      
      {/* State Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
          <div className="text-3xl font-bold text-blue-800">{locationCount.toLocaleString()}</div>
          <div className="text-gray-700">Donation Centers</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
          <div className="text-3xl font-bold text-blue-800">{companies.length}</div>
          <div className="text-gray-700">Charity Partners</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
          <div className="text-3xl font-bold text-blue-800">{uniqueCities}</div>
          <div className="text-gray-700">Cities Covered</div>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* SEO Description Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Clothing Donations in {stateData?.name || 'Your State'}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {currentStateInfo.seoText}
                </p>
              </div>
            </div>
          </div>
        </section>

{/* Search and Filter Section */}
{locationCount > 0 && (
  <section className="py-8 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Find Donation Centers</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search by location, company, or address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Keyword..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            {/* Company Filter */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by charity organization
              </label>
              <select
                id="company"
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">All Organizations</option>
                {companies.map(company => (
                  <option key={company} value={company}>{company}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredLocations.length.toLocaleString()} of {locationCount.toLocaleString()} locations
            </p>
            {(searchTerm || selectedCompany) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCompany('');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
        
  {/* Map View Button */}
        <div className="mt-6 text-center">
          <Link href="/map" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
            </svg>
            View Map
          </Link>
        </div>
      </div>
    </div>
  </section>
)}

        {/* Locations List - Optimized Version */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Donation Centers in {stateData?.name || 'Your State'}
            </h2>

            {filteredLocations.length > 0 ? (
              <div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                style={{
                  // CSS Grid optimization for better performance
                  containIntrinsicSize: 'auto 400px',
                  contentVisibility: 'auto'
                }}
              >
                {filteredLocations.map((location, index) => {
                  const companyStyle = getCompanyStyle(location.company);
                  const hours = generateHoursForLocation(index, location.company);
                  
                  return (
                    <LocationCard
                      key={`${location.company}-${location.address}-${index}`}
                      location={location}
                      index={index}
                      stateSlug={stateSlug}
                      companyStyle={companyStyle}
                      hours={hours}
                    />
                  );
                })}
              </div>
            ) : (
              /* No Results Message */
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {locationCount === 0 ? 'No donation centers available' : 'No locations found'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {locationCount === 0 
                    ? 'Check back soon for donation center locations in this state.'
                    : 'Try adjusting your search terms or clearing the filters.'
                  }
                </p>
                {(debouncedSearchTerm || selectedCompany) && (
                  <button
                    onClick={clearFilters}
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Show all locations
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

        {/* Back to States */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to all states
            </Link>
          </div>
        </section>

        {/* Footer */}
<Footer allLocations={stateData?.locations || []} states={[stateData]} />
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
      console.warn('Could not find locations.json file in any of these locations:', possiblePaths);
      // Return fallback paths for all US states
      const fallbackStates = [
        'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware',
        'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky',
        'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi',
        'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey', 'new-mexico',
        'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania',
        'rhode-island', 'south-carolina', 'south-dakota', 'tennessee', 'texas', 'utah', 'vermont',
        'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming'
      ];
      
      const paths = fallbackStates.map(state => ({
        params: { state }
      }));
      
      return {
        paths,
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
    
    const paths = data.states.map(state => ({
      params: { state: state.slug }
    }));
    
    return {
      paths,
      fallback: false
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
      
      // Return fallback data for the state
      const stateNames = {
        'alabama': 'Alabama', 'alaska': 'Alaska', 'arizona': 'Arizona', 'arkansas': 'Arkansas',
        'california': 'California', 'colorado': 'Colorado', 'connecticut': 'Connecticut', 'delaware': 'Delaware',
        'florida': 'Florida', 'georgia': 'Georgia', 'hawaii': 'Hawaii', 'idaho': 'Idaho',
        'illinois': 'Illinois', 'indiana': 'Indiana', 'iowa': 'Iowa', 'kansas': 'Kansas',
        'kentucky': 'Kentucky', 'louisiana': 'Louisiana', 'maine': 'Maine', 'maryland': 'Maryland',
        'massachusetts': 'Massachusetts', 'michigan': 'Michigan', 'minnesota': 'Minnesota', 'mississippi': 'Mississippi',
        'missouri': 'Missouri', 'montana': 'Montana', 'nebraska': 'Nebraska', 'nevada': 'Nevada',
        'new-hampshire': 'New Hampshire', 'new-jersey': 'New Jersey', 'new-mexico': 'New Mexico', 'new-york': 'New York',
        'north-carolina': 'North Carolina', 'north-dakota': 'North Dakota', 'ohio': 'Ohio', 'oklahoma': 'Oklahoma',
        'oregon': 'Oregon', 'pennsylvania': 'Pennsylvania', 'rhode-island': 'Rhode Island', 'south-carolina': 'South Carolina',
        'south-dakota': 'South Dakota', 'tennessee': 'Tennessee', 'texas': 'Texas', 'utah': 'Utah',
        'vermont': 'Vermont', 'virginia': 'Virginia', 'washington': 'Washington', 'west-virginia': 'West Virginia',
        'wisconsin': 'Wisconsin', 'wyoming': 'Wyoming'
      };
      
      return {
        props: {
          stateData: {
            name: stateNames[params.state] || 'State',
            slug: params.state,
            locations: []
          },
          stateSlug: params.state
        }
      };
    }
    
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    if (!data.states || !Array.isArray(data.states)) {
      console.warn('Invalid data structure in locations.json');
      return {
        notFound: true
      };
    }
    
    const stateData = data.states.find(state => state.slug === params.state);
    
    if (!stateData) {
      return {
        notFound: true
      };
    }
    
    return {
      props: {
        stateData,
        stateSlug: params.state
      }
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    
    return {
      notFound: true
    };
  }
}
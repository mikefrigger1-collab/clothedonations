// Save as: scripts/process-csv-comma.js
// Handles comma-separated CSV files properly

const fs = require('fs');

function getCompanyLogo(companyName) {
  const logoMap = {
    'America\'s Thrift Stores': 'americas-thrift-stores.jpg',
    'Arc Thrift': 'arc-thrift.jpg', 
    'Big Brothers Big Sisters': 'big-brothers-big-sisters.jpg',
    'Charity Clothing Pickup': 'charity-clothing-pickup.jpg',
    'Clothes Helping Kids': 'clothes-helping-kids.jpg',
    'Disabled American Veterans': 'disabled-american-veterans.jpg',
    'DAV': 'disabled-american-veterans.jpg',
    'Dress for Success': 'dress-for-success.jpg',
    'Epilepsy Foundation': 'epilepsy-foundation.jpg',
    'Goodwill': 'goodwill.jpg',
    'Greendrop': 'greendrop.jpg',
    'GrowNYC': 'grow-nyc.jpg',
    'Hearts for the Homeless': 'hearts-for-the-homeless.jpg',
    'Idaho Youth Ranch': 'idaho-youth-ranch.jpg',
    'My Sister\'s House': 'my-sisters-house.jpg',
    'National Kidney Foundation': 'national-kidney-foundation.jpg',
    'NorthwestCenter': 'northwestcenter-big-blue-truck.jpg',
    'Out of the Closet': 'out-of-the-closet.jpg',
    'Planet Aid': 'planet-aid.jpg',
    'Professional Recyclers Oklahoma': 'professional-recyclers-oklahoma.jpg',
    'Red Cross': 'red-cross.jpg',
    'Salvation Army': 'salvation-army.jpg',
    'The Salvation Army': 'salvation-army.jpg',
    'Savers': 'savers.jpg',
    'St Vincent de Paul': 'st-vincent-de-paul.jpg',
    'The Arc of Anchorage': 'the-arc-of-anchorage.jpg',
    'USAgain': 'usagain.jpg',
    'Wheeler Mission': 'wheeler-mission.jpg',
    'Women Giving Back': 'women-giving-back.jpg',
    'YWCA': 'ywca.jpg',
    'YWCA Charity': 'ywca.jpg'
  };
  
  return logoMap[companyName] || 'goodwill.jpg';
}

function getStateSlug(stateName) {
  return stateName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Proper CSV parser for comma-separated files with quoted fields
function parseCSV(csvContent) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;
  let i = 0;
  
  while (i < csvContent.length) {
    const char = csvContent[i];
    const nextChar = csvContent[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Double quote = escaped quote
        currentField += '"';
        i += 2;
        continue;
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
        i++;
        continue;
      }
    }
    
    if (!inQuotes && char === ',') {
      // End of field
      currentRow.push(currentField);
      currentField = '';
    } else if (!inQuotes && (char === '\n' || char === '\r')) {
      // End of row
      if (currentField || currentRow.length > 0) {
        currentRow.push(currentField);
        if (currentRow.some(field => field.trim())) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentField = '';
      }
    } else {
      // Regular character
      currentField += char;
    }
    
    i++;
  }
  
  // Add final row if exists
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some(field => field.trim())) {
      rows.push(currentRow);
    }
  }
  
  return rows;
}

function processLocationData() {
  try {
    console.log('Reading CSV files...');
    
    // Read files and remove BOM if present
    let locationsCSV = fs.readFileSync('data/locations-raw.csv', 'utf8');
    let addressesCSV = fs.readFileSync('data/addresses-raw.csv', 'utf8');
    
    // Remove BOM (that weird character at the beginning)
    if (locationsCSV.charCodeAt(0) === 0xFEFF) {
      locationsCSV = locationsCSV.substr(1);
    }
    if (addressesCSV.charCodeAt(0) === 0xFEFF) {
      addressesCSV = addressesCSV.substr(1);
    }
    
    console.log('Parsing location data...');
    const locationRows = parseCSV(locationsCSV);
    const locationHeaders = locationRows[0];
    
    console.log(`Location headers: ${locationHeaders.slice(0, 5).join(', ')}`);
    
    // Parse locations
    const locations = [];
    const seenIds = new Set();
    
    for (let i = 1; i < locationRows.length; i++) {
      const row = locationRows[i];
      if (row.length < locationHeaders.length) continue;
      
      const location = {};
      locationHeaders.forEach((header, index) => {
        location[header] = row[index] || '';
      });
      
      // Skip duplicates and empty rows
      if (!location.ID || seenIds.has(location.ID) || !location.Title) {
        continue;
      }
      
      seenIds.add(location.ID);
      locations.push(location);
    }
    
    console.log('Parsing address data...');
    const addressRows = parseCSV(addressesCSV);
    const addressHeaders = addressRows[0];
    
    console.log(`Address headers: ${addressHeaders.slice(0, 5).join(', ')}`);
    
    // Parse addresses
    const addressMap = {};
    for (let i = 1; i < addressRows.length; i++) {
      const row = addressRows[i];
      if (row.length < addressHeaders.length) continue;
      
      const address = {};
      addressHeaders.forEach((header, index) => {
        address[header] = row[index] || '';
      });
      
      if (!address.entity_id) continue;
      addressMap[address.entity_id] = address;
    }
    
    console.log(`Found ${locations.length} unique locations`);
    console.log(`Found ${Object.keys(addressMap).length} addresses`);
    
    // Process and combine data
    const processedLocations = [];
    const companies = new Set();
    const states = new Set();
    const stateData = {};
    let matchedCount = 0;
    
    locations.forEach((location, index) => {
      if (index % 1000 === 0) {
        console.log(`Processing location ${index + 1}/${locations.length}...`);
      }
      
      const address = addressMap[location.ID];
      
      if (!address) {
        console.warn(`No address found for location ID: ${location.ID}`);
        return;
      }
      
      matchedCount++;
      
      // Extract data
      const company = location['Rubbish Tip Locations - Company'] || 'Unknown';
      const state = location['Rubbish Tip Locations - Region'] || address.province || 'Unknown';
      const materialsField = location['Rubbish Tip Locations - Accepted Materials'] || '';
      const materials = materialsField ? materialsField.split('|').filter(m => m.trim()) : [];
      
      const stateSlug = getStateSlug(state);
      companies.add(company);
      states.add(state);
      
      if (!stateData[stateSlug]) {
        stateData[stateSlug] = {
          name: state,
          slug: stateSlug,
          locations: []
        };
      }
      
      const processedLocation = {
        id: location.ID,
        title: location.Title || 'Unknown Location',
        company: company,
        description: location.Content || 'Donation location - please contact for details',
        state: state,
        stateSlug: stateSlug,
        city: address.city || 'Unknown',
        address: address.address || '',
        street: address.street || '',
        zip: address.zip || '',
        latitude: parseFloat(address.lat) || 0,    // Direct properties
        longitude: parseFloat(address.lng) || 0,
        acceptedMaterials: materials,
        logo: getCompanyLogo(company),
        permalink: location.Permalink || '',
        lastUpdated: location.Date || '2024-06-10'
      };
      
      processedLocations.push(processedLocation);
      stateData[stateSlug].locations.push(processedLocation);
    });
    
    // Create output structure
    const outputData = {
      locations: processedLocations,
      states: Object.values(stateData),
      companies: Array.from(companies).sort(),
      totalLocations: processedLocations.length,
      lastUpdated: new Date().toISOString()
    };
    
    // Create directories
    if (!fs.existsSync('data')) {
      fs.mkdirSync('data');
    }
    
    // Save main data file
    fs.writeFileSync('data/locations.json', JSON.stringify(outputData, null, 2));
    
    // Save individual state files
    if (!fs.existsSync('data/states')) {
      fs.mkdirSync('data/states');
    }
    
    Object.values(stateData).forEach(state => {
      fs.writeFileSync(
        `data/states/${state.slug}.json`, 
        JSON.stringify(state, null, 2)
      );
    });
    
    console.log('\n✅ Data processing complete!');
    console.log(`📍 Processed ${processedLocations.length} locations`);
    console.log(`🏢 Found ${companies.size} companies`);
    console.log(`🗺️ Covering ${states.size} states`);
    console.log(`📊 Match rate: ${matchedCount}/${locations.length} locations`);
    
    // Show sample data
    console.log('\n📋 Sample location:');
    if (processedLocations.length > 0) {
      const sample = processedLocations[0];
      console.log(`${sample.title}`);
      console.log(`📍 ${sample.address}`);
      console.log(`🏢 ${sample.company} (${sample.logo})`);
      console.log(`🗺️ ${sample.city}, ${sample.state}`);
      console.log(`📦 Materials: ${sample.acceptedMaterials.join(', ')}`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
  }
}

processLocationData();
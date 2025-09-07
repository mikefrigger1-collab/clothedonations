const fs = require('fs');

function checkFiles() {
  console.log('🔍 Checking your data files...');
  
  // Read both files
  const locationsContent = fs.readFileSync('data/locations-raw.csv', 'utf8');
  const addressesContent = fs.readFileSync('data/addresses-raw.csv', 'utf8');
  
  // Count lines
  const locationLines = locationsContent.split('\n').length - 1; // -1 for header
  const addressLines = addressesContent.split('\n').length - 1;
  
  console.log(`📍 Location entries: ${locationLines}`);
  console.log(`🏠 Address entries: ${addressLines}`);
  
  // Show first few lines of each file
  console.log('\n📋 First location entry:');
  console.log(locationsContent.split('\n')[1]); // First data row
  
  console.log('\n🏠 First address entry:');
  console.log(addressesContent.split('\n')[1]); // First data row
  
  // Check for duplicate IDs in locations
  const locationIds = [];
  const locationLines2 = locationsContent.split('\n').slice(1);
  locationLines2.forEach(line => {
    const id = line.split('\t')[0]; // First column should be ID
    if (id) locationIds.push(id);
  });
  
  const uniqueLocationIds = new Set(locationIds);
  console.log(`\n🔢 Unique location IDs: ${uniqueLocationIds.size}`);
  console.log(`📊 Total location rows: ${locationIds.length}`);
  
  if (uniqueLocationIds.size !== locationIds.length) {
    console.log('⚠️  You have duplicate location IDs!');
  }
}

checkFiles();
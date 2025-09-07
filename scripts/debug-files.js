// Save as scripts/debug-files.js
const fs = require('fs');

console.log('=== LOCATION FILE ===');
const locationContent = fs.readFileSync('data/locations-raw.csv', 'utf8');
const locationLines = locationContent.split('\n');
console.log(`Total lines: ${locationLines.length}`);
console.log('First line (headers):', locationLines[0].substring(0, 200));
console.log('Second line (first data):', locationLines[1] ? locationLines[1].substring(0, 200) : 'MISSING');

console.log('\n=== ADDRESS FILE ===');
const addressContent = fs.readFileSync('data/addresses-raw.csv', 'utf8');
const addressLines = addressContent.split('\n');
console.log(`Total lines: ${addressLines.length}`);
console.log('First line (headers):', addressLines[0].substring(0, 200));
console.log('Second line (first data):', addressLines[1] ? addressLines[1].substring(0, 200) : 'MISSING');

// Check if files use tabs vs commas
console.log('\n=== SEPARATOR CHECK ===');
console.log('Location file has tabs:', locationLines[0].includes('\t'));
console.log('Location file has commas:', locationLines[0].includes(','));
console.log('Address file has tabs:', addressLines[0].includes('\t'));
console.log('Address file has commas:', addressLines[0].includes(','));
// Public fixtures from app/src/data/listings.js. Preserve user-supplied values.
const fs = require('node:fs');
const path = require('node:path');
const defaults = {
  guest_favourite_listing_title: 'Home in Noida',
  invalid_listing_id: 'kane-demo-listing-does-not-exist',
};
const directory = '.testmuai/variables';
const target = path.join(directory, 'assurance.json');
fs.mkdirSync(directory, { recursive: true });
const pool = fs.existsSync(target) ? JSON.parse(fs.readFileSync(target, 'utf8')) : {};
for (const [name, value] of Object.entries(defaults)) {
  if (!pool[name] || pool[name].value === undefined || pool[name].value === '') {
    pool[name] = { ...pool[name], value };
  }
}
fs.writeFileSync(target, JSON.stringify(pool, null, 2) + '\n');
console.log('Public demo fixtures prepared; existing values preserved.');

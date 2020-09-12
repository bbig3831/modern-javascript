// Maps - key-value pairs
const map1 = new Map();

// Set keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

console.log(map1.size);

// Iterating maps
// Using for...of
for(let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}
// Keys only
for(let key of map1.keys()) {
  console.log(`${key}`);
}
// Values
for (let val of map1.values()) {
  console.log(val);
}

// Convert to arrays
const keyValArr = Array.from(map1);
console.log(keyValArr);
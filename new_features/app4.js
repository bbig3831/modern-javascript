// Sets - list of unique values
const set1 = new Set();
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);

console.log(set1);

// Size/count
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has({name: 'John'}));

// Delete from set
set1.delete(100);
console.log(set1);

// Iterating
for (let item of set1) {
  console.log(item);
}

// ForEach loop
set1.forEach((value) => {
  console.log(value);
});

// Convert to array
const setArr = Array.from(set1);
console.log(setArr);
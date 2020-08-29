const numbers = [43, 52, 33, 23, 55, 6];
const numbers2 = new Array(22, 35, 78);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [2, 'test', 3, 'hello', true, null];

let val;

val = numbers.length;
val = Array.isArray('hello');
val = numbers[3];
val = numbers[0];
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(6);

// Mutating arrays
// numbers.push(250);
// numbers.unshift(120);
// numbers.pop();
// numbers.shift();

// Splice values
// numbers.splice(1,3);
// numbers.reverse();
val = fruit.sort();
val = numbers.sort();
val - numbers.sort(function(x, y) {
  return x-y;
});
val - numbers.sort(function(x, y) {
  return y-x;
});

// Find
function under50(num) {
  return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);

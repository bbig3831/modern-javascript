// Type Conversion
let val;

// Number to string
val = 5;
console.log(val);
console.log(typeof val);
val = String(55);
console.log(val.length);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val - Number(null);

// parseInt();
val = parseInt('100.30');
val = parseFloat('100.30');

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

// Type coercion
const val1 = 5;
const val2 = '6';
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
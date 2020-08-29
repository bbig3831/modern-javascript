const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Ben';
let val;

val = firstName + lastName;
// Concatenation
val = firstName + ' ' + lastName;
// Append
val = 'Brad';
val += 'Traversy';
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escapting
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[3];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);

// split()
val = str.split(' ');

// replace()
val = str.replace('Ben', 'Jack');

// includes()
val = str.includes('Ben');

console.log(val);
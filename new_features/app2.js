// Symbols
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym2);
console.log(Symbol() === Symbol());

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);
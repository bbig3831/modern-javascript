// Built in constructors
const name1 = 'Jeff';
const name2 = new String('Jeff');

// console.log(name2);
console.log(typeof name1);
console.log(typeof name2);

// Numbers
const num1 = 5;
const num2 = new Number(5);

// Functions
const getSum1 = function(x, y){
  return x + y;
}
const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Objects
const john = {
  name: 'John'
};
const john2 = new Object({name: 'John'});

// Regular expresssions
const rel = /\w+/;
const rel2 = new RegExp('\\w+');
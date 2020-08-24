// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');

console.timeEnd('Hello');

// var, let, const
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// Multi word vars
var firstName = 'John';
var first_name = 'Sara';
var FirstName = 'Tom';
var firstname;

// CONST
// const name = 'John';
console.log(name);
// Have to assign a value
// const greeting;

const person = {
  name: 'John'
};

console.log(person);
person.name = 'Sara';
person.age = 42;
console.log(person);
const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);

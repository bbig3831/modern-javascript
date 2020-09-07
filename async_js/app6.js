// const sayHello = function () {
//   console.log('Hello');
// }

// // Arrow function
// const sayHello = () => {
//   console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Return object
// const sayHello = () => ({msg: 'Hello'})

// Parameters
// Single param doesn't need parentheses
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Brad');

const users = ['Nathan', 'John', 'William'];

// Map
// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map(name) => {
//   return name.length;
// };

// Shortest
const nameLengths = users.map(name => name.length);


console.log(nameLengths)
// Functions
function greet(firstName = 'John'){
  // console.log('Hello');
  return 'Hello ' + firstName;
}

console.log(greet('John'));

// Function expressions
const square = function(x){
  return x*x;
};

console.log(square(8));

// IIFEs
(function(name){
  console.log('IIFE Ran...' + name);
})('yay');

// Property methods
const todo = {
  add: function(){
    console.log('Add todo..');
  }
};

todo.add();
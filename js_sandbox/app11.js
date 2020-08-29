// For loop
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;
  }

  if(i === 5){
    break;
  }
  console.log(i);
}

// While loop
// let i = 0;
// while (i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

// do while loop
let i = 100;
do {
  console.log('Number ' + i);
  i++;
} while (i < 10);

const cars = ['ford', 'chevy', 'honda', 'toyota'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
// forEach
cars.forEach(function(car){
  console.log(car);
})

// Map
const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sarah'},
  {id: 3, name: 'Dave'},
  {id: 4, name: 'Karen'},
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

// For-in loops
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
};

for(let x in user){
  console.log(x);
}
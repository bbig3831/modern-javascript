const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@mail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  }
};

let val;
val = person;
val = person.firstName;
val = person.age;
val = person.hobbies;
val = person.address.state;

console.log(val);
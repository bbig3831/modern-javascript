// Object.prototype
// Person.prototype

// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
};

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const john = new Person('John', '2000-08-12');
const john = new Person('Mary', '1999-07-12');

console.log(john.calculateAge());
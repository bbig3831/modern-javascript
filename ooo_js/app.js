// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
};
console.log(this);

// const brad = new Person('Brad');
// const john = new Person('John');

// console.log(brad);

const brad = new Person('Brad','1981-09-10');
console.log(brad.calculateAge());
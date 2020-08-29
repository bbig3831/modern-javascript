let val;

const today = new Date();
let birthday = new Date('1981-09-10 11:25:00');
birthday = new Date('September 10 1981')

val = birthday.getMonth();
val = birthday.getDate();
val = today.getFullYear();
val = today.getSeconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);

console.log(birthday);
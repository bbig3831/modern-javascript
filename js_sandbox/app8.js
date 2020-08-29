const id = 100;

if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if(id != 100){
  console.log('CORRERCT');
} else {
  console.log('incorrect');
}

// Test val and type
if(id === 100){
  console.log('CORRERCT');
} else {
  console.log('incorrect');
}

if(id !== 100){
  console.log('CORRERCT');
} else {
  console.log('incorrect');
}

// Test if undefined
if(typeof id !== undefined){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// Ternary operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

try {
  // Produce a ReferenceError
  // myFunction();
  // Produce a TypeError
  null.myFunction();
} catch(e) {
  console.log(e);
  console.log(e.message);
  console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result.')
}

console.log('Program continues...')
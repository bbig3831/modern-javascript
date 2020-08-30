// Event listeners
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello world');

//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  let val;
  val = e;
  val = e.target;
  val = e.target.classList;

  val = e.type;

  val = e.timeStamp;

  val = e.clientY;

  console.log(val);
};
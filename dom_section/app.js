
let val;

val = document;
val = document.all;
val = document.all[0];
val = document.forms;
val = document.links[0];
val = document.scripts;

let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);
// By class name
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// items[0].style.color = 'red';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// By tag name
let lis = document.getElementsByTagName('li');
console.log(lis);
// to array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li){
  console.log(li);
  li.textContext = `${index}: Hello`;
});

console.log(lis);

// querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
});
const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

console.log(items);
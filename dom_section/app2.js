// DOM selectors
console.log(document.getElementById('task-title'));

// Get from element
console.log(document.getElementById('task-title').id);

const taskTitle = document.getElementById('task-title');

// Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// query selector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li:last-child').style.color = 'red';
// Mouse events
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Double click
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// Mouse up
// clearBtn.addEventListener('mouseup', runEvent);

// Mouse enter
// clearBtn.addEventListener('mouseenter', runEvent);

// Mouse leave
// clearBtn.addEventListener('mouseleave', runEvent);

// Mouse over
// clearBtn.addEventListener('mouseover', runEvent);

// Mouse out
// clearBtn.addEventListener('mouseout', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);


// Event handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}
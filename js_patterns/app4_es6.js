// Observer pattern
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed to ${fn.name}`)
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}


const click = new EventObserver();

// Event listeners
// Milliseconds
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});
// Seconds
document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});
// Fire
document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click handler
const getCurMilliseconds = function() {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`)
}
const getCurSeconds = function() {
  console.log(`Current seconds: ${new Date().getSeconds()}`)
}
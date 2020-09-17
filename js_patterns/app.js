// Module patterns
// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// Standard module pattern
const UICtrl = (function() {
  // Private
  let text = 'Hello world';

  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  // Public
  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();

// Revealing module pattern
const ItemCtrl = (function() {
  // Private
  let data = [];
  
  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  // Public
  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});

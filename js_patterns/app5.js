// Mediator pattern
class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`)
  }
}

// Chatroom class
class Chatroom {
  constructor () {
    let users = {};

    return {
      register: function(user) {
        users[user.name] = user;
        user.chatroom = this;
      },
      send: function(message, from, to) {
        if(to) {
          // Single user message
          to.receive(message, from);
        } else {
          // Mass message
          for(key in users) {
            if(users[key] !== from) {
              users[key].receive(message, from);
            }
          }
        }
      }
    }
  }
}

// Create users
const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();

// Register users
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

// Send messages
brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best dev ever!', brad);
jeff.send('Hello everyone');
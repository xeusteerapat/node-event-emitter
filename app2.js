const EventEmitter = require('events');

class Greeter extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello World';
  }

  greet(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
  }
}

const greeter1 = new Greeter();
greeter1.on('greet', function (data) {
  console.log('Someone say hi to ' + data);
});

greeter1.greet('Teerapat');

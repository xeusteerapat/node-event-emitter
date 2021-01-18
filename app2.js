const EventEmitter = require('events');
const util = require('util');

function Greeter() {
  this.greeting = 'Hello World';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function (data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
};

const greeter1 = new Greeter();
greeter1.on('greet', function (data) {
  console.log('Someone say hi to ' + data);
});

greeter1.greet('Teerapat');

const Emitter = require('events');
const config = require('./config');

const myEmitter = new Emitter();

myEmitter.on(config.GREET, function () {
  console.log('Someone said hello');
});

myEmitter.on(config.GREET, function () {
  console.log('A greeting occurs');
});

console.log('Hello');
myEmitter.emit(config.GREET);

// all above are working the same way

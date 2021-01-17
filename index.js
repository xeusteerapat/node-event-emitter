const Emitter = require('./emitter');

const myEmitter = new Emitter();

myEmitter.on('greet', function () {
  console.log('Someone said hello');
});

myEmitter.on('greet', function () {
  console.log('A greeting occurs');
});

console.log('Hello');
myEmitter.emit('greet');

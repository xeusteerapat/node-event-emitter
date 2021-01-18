// call and apply
const obj = {
  name: 'John Doe',
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greet();
obj.greet.call({ name: 'Jane Doe' }); // "this" keyword will point to name Jane
obj.greet.apply({ name: 'Jane Doe' }); // parameters as array

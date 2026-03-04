const person = {
  name: 'Anuj',
  age: 19,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
  // greet: function() {
  //   console.log('Hi, I am ' + this.name);
  // }
};

person.greet();

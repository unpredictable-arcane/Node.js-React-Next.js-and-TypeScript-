const person = {
  name: 'Anuj',
  age: 19,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
const copiedArray = [...hobbies];

console.log(copiedArray);

const toArray = (...args) => {
  return args;
};


console.log(toArray(1, 2, 3, 4));


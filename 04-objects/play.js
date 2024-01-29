
let  name  = 'toto :)';
const person = {
  name: 'Phillipe',
  age: 29,
  greet :  () => {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();

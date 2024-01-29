
const  name  = 'toto :)';
const person = {
  name: 'Phillipe',
  age: 29,
  greet :  function() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();

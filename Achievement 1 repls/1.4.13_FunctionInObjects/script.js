// in the example below, a function is assigned to an object's property. the object property, speak, is being assigned to the function () {console.log('wooff)!'};

let dog = {
  type: 'pug',
  age: 3,
  name: 'Margot',
  speak: function() {
    console.log('Wooff!');
  }
};

dog.speak();

// when dog.speak() is called, it calls the function named speak and runs the code inside the speak property. 
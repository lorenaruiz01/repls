var dog = {
  type: 'pug',
  age: 3,
  name: 'Margot',
  speak: function() {
    console.log('Wooff!');
  }
};

dog.speak();

// The [this] keyword refers to an object, that object which is executing the current bit of javascript code. In other words, the [this] keyword can be used inside an object to refer to the object itself. It is often used in methods to gain access to the object's properties. 
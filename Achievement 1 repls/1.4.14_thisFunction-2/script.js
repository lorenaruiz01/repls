let dog = {
  type: 'pug',
  age: 3,
  name: 'Margot',
  speak: function() {
    console.log('Wooff! I am ' + this.name);
  }
};

dog.speak();
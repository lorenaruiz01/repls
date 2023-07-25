let dog = {
  type: 'pug',
  age: 3,
  name: 'Margot',
  speak: function() {
    console.log('Wooff! I am ' + this.name);
  }
};

dog.speak();

// The [this] keyword refers to an object, that object which is executing the current bit of javascript code. In other words, the [this] keyword can be used inside an object to refer to the object itself. It is often used in methods to gain access to the object's properties. 

//here is another example of when we might use this: 

const square = {
  side: 4, 
  length: 5, 
  perimeter: 20, 
  area: 25
}


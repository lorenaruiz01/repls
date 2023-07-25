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

// the problem with this object is that all the information about the square is hard-cded as properties. This isn't necessary since we can use methods to calculate the perimeter and area based on the values of the sides and length properties. We can use this to gain acces to those properties. 

// here is the example above, re-written using the this keyword: 

const square = {
  sides: 4, 
  length: 5,
  perimeter() { return this.sides * this.length },
  area() { return this.length * this.length }
}


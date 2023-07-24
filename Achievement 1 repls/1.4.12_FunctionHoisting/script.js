// When it comes to scope, functions act a bit differently than variables: it doesn’t actually matter where you declare them in your code. This is because of a feature called hoisting. When a program goes to run a JavaScript file, before it executes any of the code, it moves all functions that have been declared using the function keyword to the top of the code—just as if they’d been defined at the beginning of your code file all along.

//----------------------------


// function is called AFTER its declaration
function displayHello(){
  console.log("Hello World");
}

displayHello();


//----------------------------


// function is called BEFORE its declaration
displayHi();

function displayHi(){
  console.log("Hi There");
}


//----------------------------


// Hoisting only works if you declare functions by starting with the [function] keyword. This style of function creation is called function declaration.

// A FUNCTION DECLARATION starts with the [function] keyword, then the name of the function, followed by () parentheses, either empty or with parameters. Then curly braces {} with code inside the curly braces:

function hello(){
  alert('Hello World!');
}   // function declarations don't need semi-colons after the closing curly brace!

// However, simply declaring the function doesn't do anything. In order to run the code inside the function, you have to call it. Calling a function will run the block of code inside the functions body. to call the function hello(), type hello(); and press enter. This produces an alert box with the message 'Hello World!'

hello();    // alert box with Hello World! message



// With FUNCTION EXPRESSIONS, functions are assigned directly to the variables rather than being declared using the function keyword. In these cases, you don't need a function name, just function(). But you do need a semi-colon after the closing curly brace!

// A function expression assigns an "anonymous function" to a variable. An anonymous function is created using the same function declaration we used earlier but it doesn't have a name assigned to it. Instead, the function is assigned to a variable that is used to refer to the function. 

const goodbye = function(){
  alert('Goodbye, World!');
};

// the function declaration version of this would be:

function goodbye(){
  alert('Goodbye, World!');
}


// you can call a function expression just like you call a function declaration, by using the name of the variable the function is assigned to: 

goodbye();



// Here is another example of a function expression, this time using parameters: 

let addTwoNums = function(num1, num2) {
  return num1 + num2
};

addTwoNums(3,8);


// Here is an example of a function expression in which a function is assigned to an object property.
let person = {};

person.tellMyAge = function() {
  return 42
};


// Keep in mind that in function expressions, since you are declaring a variable, you need to use a semi-colon to end the assignment statement code. 

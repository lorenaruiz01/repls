// When it comes to scope, functions act a bit differently than variables: it doesn’t actually matter where you declare them in your code. This is because of a feature called hoisting. When a program goes to run a JavaScript file, before it executes any of the code, it moves all functions that have been declared using the function keyword to the top of the code—just as if they’d been defined at the beginning of your code file all along.


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

// Hoisting only works if you declare functions by starting with the [function] keyword. This style of function creation is called function declaration.

// A function declaration starts with the [function] keyword, then the name of the function, followed by () parentheses, either empty or with parameters. Then curly braces {} with code inside the curly braces:

function hello(){
  alert('Hello World!');
}

// However, simply declaring the function doesn't do anything. In order to run the code inside the function, you have to call it. Calling a function will run the block of code inside the functions body. to call the function hello(), type hello(); and press enter. This produces an alert box with the message 'Hello World!'

hello();


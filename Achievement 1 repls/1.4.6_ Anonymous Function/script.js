let message = function (){
    console.log("Hello World!");
};

message();

// In the example above, function () does not have any parameters. Its code is stored in the variable called message. 


let sayHello = function (firstName) {
    console.log("Hello " + firstName);
};

sayHello("Bobby");
sayHello();

// In the example above, function has one parameter, firstName. When the function is called, The parameter is added to the string hello and logged to the console. 

// The argurment "Bobby" is passed to the function when sayHello variable is called. "Hello Bobby" is then logged to the console. 

// When the sayHello variable is called without any arguments, "Hello undefined" is logged to the console. The code runs and logs "Hello" but since there is no argument passed to the firstName parameter, the program logs, "undefined". There is no default value assigned to firstName which is why the string "firstName" is not logged.

// *If firstName is assigned a default value, the argument that is passed will be printed and the default value will print if there is no argument passed: 

let sayHello = function (firstName="friend") {
    console.log("Hello " + firstName);
};

sayHello("Bobby");
sayHello();
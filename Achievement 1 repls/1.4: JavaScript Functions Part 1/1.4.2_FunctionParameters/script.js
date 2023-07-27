function greetingMessage(firstName, lastName) {
    console.log("Hello, My name is " + firstName + " " + lastName);
    document.write("Hello, My name is  " + firstName + " " + lastName + '<br>')
}

greetingMessage("Brad", "Pitt");
greetingMessage("Nelson", "Mandela");

// Inputs that go inside parentheses of functions are called parameters when the function is declared, and arguments when it’s called. Since JavaScript is a dynamic type scripting language, a function parameter can have value of any data type. 

// Here, the function “greetingMessage” has two parameters: firstName and lastName.

// At the bottom of the code snippet, some values are passed while calling the functions. These are the arguments. 

// You can pass less or more arguments than the function is defined with when calling the function—if you pass less, then any parameters you don’t pass will be undefined. If you pass more, then the excess arguments will be ignored.
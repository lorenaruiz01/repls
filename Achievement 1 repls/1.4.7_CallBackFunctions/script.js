function functionOne(x) { 
  return x; 
  };

function functionTwo(variable1) {
    // some code
   return  variable1 + 2;
}
console.log(functionOne(2));
console.log(functionTwo(functionOne(2)));

// You can chain functions together by using functions as a parameter. Using this method of passing one function’s results to another as parameters is called a callback.

// In the example above, the number 2 gets passed onto the x parameter in functionOne and the number 2 is returned. The return value, 2 in this case, is then logged to the console. 


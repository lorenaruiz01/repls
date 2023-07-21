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

// In the second function, functionTwo, the sum of  variable1 + 2 is returned. 

// functionTwo() and functionOne() are chained together and the value is logged to the console. Here, functionOne() receives an argument of 2, the number 2 is returned as the value of functionOne(), which then is passed to functionTwo() as the argument for the variable1 parameter. So, functionTwo(2) returns 2 + 2 and the number 4 is logged to the console.
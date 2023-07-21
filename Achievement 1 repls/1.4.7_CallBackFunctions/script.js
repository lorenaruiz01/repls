function functionOne(x) { 
  return x; 
  };

function functionTwo(variable1) {
    // some code
   return  variable1 + 2;
}
console.log(functionOne(2));
console.log(functionTwo(functionOne(2)));
let age = 10; // value of "age" is 10
// The function "getNewAgeImpure" is not an example of pure function as the value of "age" changed from 10 to 11 after the execution of the function.

console.log('===Not Pure Function===');
console.log('Value of "age" before function execution:' + ' ' + age);//returns 10
function getNewAgeImpure() {
  age = age + 1;
  return age;
}
getNewAgeImpure();
console.log('Value of "age" after function execution:' + ' ' + age);//returns 11

// Now, comment out the code from line 4 to line 12

// The function "get" is an example of pure function as the value of "age" changed from 10 to 11 after the execution of the function.

/*
console.log('===Pure Function===');
console.log('Value of "age" before function execution:' + ' ' + age);//returns 10
function getNewAgePure(age) {
  age = age + 1;
  return age;
}
console.log('The output of "getNewAgePure" function:'+ ' ' + (getNewAgePure(age))); //return 11
console.log('Value of "age" after function execution:' + ' ' + age); //returns  10
*/



// ALTERNATE EXPLANATION -------------- 

// Avoiding Side Effects:

let age = 10;

// a function without a return statement
function add(number1, number2) {
  console.log(number1 + number2);
}
let result = add(1, 2); // add(1, 2) will log 3 because of the console.log statement in the function itself
console.log(result); // this will log `undefined` since `result` is assigned what is returned by `add(1, 2)`, which is `undefined` (default return value)

// ----------------------------------------------------


// a function with return statement
function multiply(number1, number2) {
  return number1 * number2;
}
let result2 = multiply(3, 5);
console.log(result2); // this will log 15 because result2 is assigned what is returned by `mutliply(3, 5)`, which is 15
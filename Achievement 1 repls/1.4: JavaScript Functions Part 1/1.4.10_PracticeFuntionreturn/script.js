function divideAnyValue(dividend, divisor){
    if (divisor === 0) {
        return "you're trying to divide by zero."
    }  else { 
        let result = dividend / divisor;
          return result
      }
    }

console.log(divideAnyValue(4, 2));      // returns 2
console.log(divideAnyValue(7, 0));      // returns "you're trying.."
console.log(divideAnyValue(1, 4));      // returns 0.25
console.log(divideAnyValue(12, -3));    // returns -4
function divideAnyValue(dividend, divisor){
    if (divisor === 0) {
        return "you're trying to divide by zero."
    }  else { 
        let result = dividend / divisor;
          return result
      }
    }

console.log(divide(4, 2));
console.log(divide(7, 0));

let add = function sum(val1, val2) {
    return val1 + val2;
};

let result1 = add(100,200); //returns 300
console.log(result1);

let result2 = sum(100,200); // not valid

// In this case, result1 returns 300 as add() is recognized as a function; while result2 returns an error or undefined because sum() isn’t recognized as a function.

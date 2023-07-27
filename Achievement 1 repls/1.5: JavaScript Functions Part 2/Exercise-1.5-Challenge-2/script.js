// Challenge 2

// Instructions: Rewrite this code as an IIFE so that FOO is equal to the return value. Hit Run to check your work in the console.


// Write your code below this line
const FOO = (function () {
  
	return "I am the return value and I am a string"
	
})
// Write your code above this line












// DO NOT LOOK BELOW THIS LINE
if (!FOO) {
console.log('FOO is undefined!')
} else if (typeof FOO === 'function') {
console.log('FOO is equal to the function itself -- not the return value!')
}else {
console.log(`Congratulations! Foo has a value of '${FOO}' and is of datatype ${typeof FOO}!`)
}
  
  
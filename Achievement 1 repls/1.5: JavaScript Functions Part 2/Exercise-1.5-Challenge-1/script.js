// Exercise 1.5: Challenge 1
//
// Instructions: In the space indicated, write code that will make sure the variable FOO is of datatype object. Hit the green Run button to check your work in the console.

 
const FOO = (function () {
	// Write your code below this line
  return {
    // returns object
  }
	// Write your code above this line
})()
  

// running the above code will log the following to the console: 

'Yes!  Go you!  FOO is of datatype object!'














  // DO NOT LOOK BELOW THIS LINE
  if (!FOO) {
	console.log('FOO is undefined!')
  } else if (Array.isArray(FOO)){
	console.log('FOO has a value, but it is not an object, FOO is an array.')
  } else if (typeof FOO !== 'object'){
	console.log('FOO has a value, but it is not an object, FOO is a', typeof FOO, '.')
  }else if (typeof FOO === 'object') {
	console.log('Yes!  Go you!  FOO is of datatype object!')
  }
  
  
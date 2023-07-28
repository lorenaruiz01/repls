// Challenge 3
//
// Instructions: Attach a method to a return object. Hit "Run" to check your work in the console.

const FOO = (function () {
	
	function internalMethod () {
	  console.log('InternalMethod called! Victory!')
	}
	// Write your code below this line
	return {
		internalMethod: internalMethod
		// name of function : value of function
	}
	// Write your code above this line
	
  })()

// added:  internalMethod: internalMethod to line 12. This is a key-value pair that uses the function as a key to access the value of the named function. in this case, the key is internalMethod (to the left of :) which then is able to access the function internalMethod(). The value of the function is then the internalMethod to the right of the :, which pulls in the value of the named function.  










// DO NOT LOOK BELOW THIS LINE
if (!FOO) {
	console.log('FOO is undefined!')
} else if (Array.isArray(FOO)){
	console.log('FOO is an array, not an object!')
} else if (typeof FOO !== 'object'){
	console.log('FOO is not an object, that is a', typeof FOO, '.')
} else if (typeof FOO === 'object') {
	console.log('FOO is an object!  Woo hoo! But does it have InternalMethod attached to it?')
	if (!Object.keys(FOO).length ) {
		console.log('FOO is an object but has neither properties nor methods attached to it')
	} else if (!FOO.internalMethod) {
		console.log('InternalMethod is undefined!')
	} else if (typeof FOO.internalMethod !== 'function') {
		console.log('InternalMethod is defined but is not a function!  It is of type: ', typeof FOO.internalMethod, '.')
	} else {
		console.log('InternalMethod is defined and is a', typeof FOO.internalMethod)
		FOO.internalMethod();
	}
}
  
  
  
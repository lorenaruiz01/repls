// Challenge 3
//
// Instructions: Attach a method to a return object. Hit "Run" to check your work in the console.

const FOO = (function () {
	
	function internalMethod () {
	  console.log('InternalMethod called! Victory!')
	}
	// Write your code below this line
	return {}
	// Write your code above this line
	
  })()













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
  
  
  
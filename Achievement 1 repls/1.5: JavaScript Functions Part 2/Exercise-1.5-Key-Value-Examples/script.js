// REVIEW


const FunctionOne = (function () {
  
	function internalFunctionValue(){
	  console.log('function one internal function called' )
	}
  
	return {
	  internalFunctionKey: internalFunctionValue
	}
	
	
  })()
  FunctionOne.internalFunctionKey()
  
  
  const FunctionTwo = (function () {
	
	function internalFunction(){
	   console.log('function two internal function called' )
	}
  
	return {
	  internalFunction: internalFunction
	}
	
	
  })()
  FunctionTwo.internalFunction()
  
  const FunctionThree = (function () {
	
	function internalFunction(){
	   console.log('function three internal function called' )
	}
  
	return {
	  internalFunction
	}
	
	
  })()
  FunctionThree.internalFunction()
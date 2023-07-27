// De-mystifying the IIFE

// spoiler alert: an IIFE is just a function that calls itself.

// let's start with just a function, and a function call!

const LOG = false;

function FunctionOne () {}
FunctionOne();
if (LOG) console.log("function one's datatype is", typeof FunctionOne)

let FunctionTwo = function(){}
FunctionTwo();
if (LOG) console.log("function two's datatype is", typeof FunctionTwo)

let FunctionThree = function() {}();
if (LOG) console.log("function three's datatype is", typeof FunctionThree)

let FunctionFour = function() { return "hello!" }();
if (LOG) console.log("function four's datatype is", typeof FunctionFour)

let FunctionFive = function() {return {}}();
if (LOG) console.log("function five's datatype is", typeof FunctionFive)

let FunctionSix = (function() { return {}})();
if (LOG) console.log("function six's datatype is", typeof FunctionSix)

let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i ++) {
	buttons[i].addEventListener('click', e => {
		let sib = e.target.nextElementSibling;
		if (sib.classList.contains('show')) {
			sib.classList.remove('show')
		} else {
			sib.classList.add('show')
		}
		
	})
}
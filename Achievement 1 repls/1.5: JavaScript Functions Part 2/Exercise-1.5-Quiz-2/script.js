// REVIEW


const LOG = false;
let answer1 = (function(){
	return 1 + 1
  })()
  
let answer2 = (function(){
	1 + 1
})()
  
if (LOG) console.log(answer1, answer2);

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
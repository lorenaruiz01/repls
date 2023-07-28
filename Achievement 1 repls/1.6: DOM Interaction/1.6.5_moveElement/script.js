// The appendChild() method has another use, as well, which is to move elements from one element to another (the one appendChild() is called on). This is only possible if the element passed through appendChild() already exists and is attached to the DOM.

let paragraph = document.querySelector('p');
let container2 = document.querySelector('#container2');

//Uncomment the following line to move the paragraph using appendChild method
container2.appendChild(paragraph);


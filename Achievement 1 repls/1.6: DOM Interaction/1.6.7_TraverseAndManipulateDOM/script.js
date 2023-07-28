let mainTitle = document.querySelector('h1');
console.log(mainTitle.innerText);
mainTitle.innerText ="Hello world";
console.log(mainTitle.innerText);

let container = document.querySelector('.container');
container.innerHTML = '<button>Click me</button>';



let button = document.createElement('button');
button.innerText = 'Click me';
container.appendChild(button);

let elementToRemove = document.querySelector('p');
elementToRemove.parentElement.removeChild
(elementToRemove);

































// let mainTitle = document.querySelector('h1');
// console.log(mainTitle.innerText); 
// mainTitle.innerText = 'THIS IS EPIC';
// console.log(mainTitle.innerText); 

// let container = document.querySelector('.container');
// container.innerHTML = '<button>Click Me</button>';
// console.log(container.innerHTML);

// let button = document.createElement('button');
// button.innerText = "Click Me";
// container.appendChild(button);

// let elementToRemove = document.querySelector('p');
// elementToRemove.parentElement.removeChild(elementToRemove);
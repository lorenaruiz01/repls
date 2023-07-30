// for an element's attributes, there are a number of different functions you can use:

let container = document.querySelector('.container');

console.log(container.getAttribute('id')); // "main-section"
console.log(container.hasAttribute('value')); // false
container.setAttribute('id', 'new-id'); // replaces "main-section" with "new-id"
console.log(container.getAttribute('id')); // "new-id"

console.log(container.classList.contains('container'));
// for an element's attributes, there are a number of different functions you can use:

// 1. getAttribute(attributeName) returns the value assigned to the passed attribute (it will return null if the attribute is absent)
// 2. hasAttribute(attributeName) returns true or false depending on whether the element has an attribute that matches the passed attribute name
// 3. setAttribute(attributeName, newValue) assigns what’s passed in newValue to the specified attribute name (if the attribute doesn't exist, it will be added along with the new value)




let container = document.querySelector('.container');

console.log(container.getAttribute('id')); // "main-section"
console.log(container.hasAttribute('value')); // false
container.setAttribute('id', 'new-id'); // replaces "main-section" with "new-id"
console.log(container.getAttribute('id')); // "new-id"

console.log(container.classList.contains('container'));
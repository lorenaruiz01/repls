
let element = document.querySelector('.bob');

//uncomment the lines one by one to check the console output. Make sure only one line is uncommented at one time

//console.log(element.nextElementSibling.innerText); // Get the next sibling element, or null if it’s the last one
//console.log(element.previousElementSibling.innerText); // Get the previous sibling element, or null if it’s the first one
//console.log(element.firstElementChild); // The first child of the element
//console.log(element.lastElementChild); // The last child of the element
//console.log(element.childElementCount); // The number of children this element has

// element.children; // (IMPORTANT: Not recommended) The direct children of this element
// To get the direct children of element in the above example, you can utilize a CSS trick using the `>` selector with the `querySelectorAll()` function, like this:

// `document.querySelectorAll('.bob > *')`


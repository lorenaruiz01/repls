// Take a look at the code below, where the removeChild() function is being used to remove the <p> element from the HTML code section:



// Uncomment the following lines to remove the paragraph element

let elementToRemove = document.querySelector('p');
elementToRemove.parentElement.removeChild(elementToRemove);

// You’ll notice that using the removeChild() function is a bit more complicated than the three functions you learned before: this is because you can’t simply remove a node (the function is removeChild() rather than simply remove). Let’s walk through it step-by-step.

// First, you select the element you want to remove (assigned to elementToRemove above). Then, you traverse up to select its parent element. Finally, you call the removeChild() function on the parent element to remove its child (which is the element you originally selected). Complicated? Unfortunately, yes. This is just one of the many quirks of JavaScript. Don’t worry, though—throughout this course, you’ll learn ways of simplifying these kinds of actions.
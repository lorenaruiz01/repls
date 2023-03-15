// Want to create completely new elements? The document.createElement() function is perfect for this:

// let newElement = document.createElement('button');
// Pretty cool, right? And it can be more than a button, too—you can specify any HTML tag name you want.

// If you were to look for this button on your page, however, you wouldn’t find it. That’s because, while the button has been created, it’s still detached, meaning it only exists virtually. You can still do everything with it that JavaScript allows, but it’s not actually present on the page. For that, you need to append it to an element on the page.

// One of the methods for properly appending HTML elements is appendChild(). 


let container = document.querySelector('.container');

let button = document.createElement('button');
button.innerText = "Test";
container.appendChild(button);


// Unlike querySelector() and appendChild(), the createElement() method can only be called on the document object. 

// Another thing to be aware of when using the appendChild() function is that it will add the passed element as the last child of the targeted element.
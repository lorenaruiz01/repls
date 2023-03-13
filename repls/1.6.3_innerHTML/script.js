
let container = document.querySelector('.container');
container.innerHTML = '<button class="button">Click Me</button>';
console.log(container.innerHTML);

// Although it’s fine to use innerHTML to retrieve the content of the selected element, it’s generally not recommended for HTML content for the following reasons:

// 1. Setting the innerHTML property will tear down all of the current content of the element and rebuild it from scratch. This can be memory-intensive, which will slow down the browser, especially if there’s a lot of content.

// 2. Since innerHTML isn’t validated, you could possibly include invalid HTML by accident, inadvertently breaking your page. For example, you can include something like this: element.innerHTML= '<p>test</h1>'. Even though this isn’t valid HTML code, it would still be inserted.
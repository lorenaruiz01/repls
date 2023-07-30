let container = document.querySelector('.container');

console.log(container.classList.contains('selected')); // false

// uncomment the following code line to add `selected` class notice that there is a css rule that targets `.selected` element and gives them a special style, which means once the class is added, it will be applied
container.classList.add('selected');

// uncomment the following line to revert the style, "simulating the effect of unselecting the element visually"
container.classList.remove('selected');

// to toggle the class on again
container.classList.toggle('selected');

// to toggle the class off
container.classList.toggle('selected');
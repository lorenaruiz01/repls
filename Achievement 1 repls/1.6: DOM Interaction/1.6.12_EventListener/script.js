// Check out this Event Listener repl for some hands-on practice with event listeners! In the example, the button click will toggle between two colors. Try to change the innerText of the button element on-click.

// let button = document.querySelector('button');

// button.addEventListener('click', function (event) {
//   let target = event.target;
//   target.classList.toggle('button--red');
//   target.classList.toggle('button--green');
  // attempts: 

// button.innerText = 'now i\'m green!';
// button.innerText = 'now i\'m red!';

// });

// attempts: 

// button.innerText = 'now i\'m green!';
// button.innerText = 'now i\'m red!';


// SOLUTION 

// explanation from chatgpt:
// Sure, I see what you're trying to achieve. The issue you're facing is that you're toggling the 'button--red' and 'button--green' classes simultaneously, which leads to unexpected behavior. To make the text correspond to the color of the button, you need to toggle the classes and set the text accordingly in the event listener. Here's the corrected JavaScript code:

let button = document.querySelector('button');

button.addEventListener('click', function (event) {
  let target = event.target;
  
  if (target.classList.contains('button--green')) {
    target.classList.remove('button--green');
    target.classList.add('button--red');
    button.innerText = "now I'm red!";
  } else if (target.classList.contains('button--red')) {
    target.classList.remove('button--red');
    target.classList.add('button--green');
    button.innerText = "now I'm green!";
  }
});

// With this code, we're checking the current class of the button and toggling it accordingly, and at the same time, updating the inner text of the button to match the color. This way, the text will change along with the color of the button when you click it.
// Check out this Event Listener repl for some hands-on practice with event listeners! In the example, the button click will toggle between two colors. Try to change the innerText of the button element on-click.

let button = document.querySelector('button');

button.addEventListener('click', function (event) {
  let target = event.target;
  target.classList.toggle('button--red');
  target.classList.toggle('button--green');
  // attempts: 

// button.innerText = 'now i\'m green!';
// button.innerText = 'now i\'m red!';

});

// attempts: 

// button.innerText = 'now i\'m green!';
// button.innerText = 'now i\'m red!';

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
    button.innerText = "now I'm green";
  }
});
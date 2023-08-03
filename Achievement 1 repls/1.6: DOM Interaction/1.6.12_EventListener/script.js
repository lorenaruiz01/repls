let button = document.querySelector('button');

button.addEventListener('click', function (event) {
  let target = event.target;
  target.classList.toggle('button--red');
  target.classList.toggle('button--green');
});

// attempts: 

// button.innerText = 'now i\'m green!';
// button.innerText = 'now i\'m red!';
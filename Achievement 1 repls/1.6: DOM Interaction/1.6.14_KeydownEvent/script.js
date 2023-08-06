window.addEventListener('keydown', function(event){
  let survey_form = document.querySelector('#survey_form');
  let isFormHidden = survey_form.classList.contains('hidden');
  if( !isFormHidden && event.key === 'Escape'){
    survey_form.classList.add('hidden');   
  }
});

// explanation by chatgpt:
// This code snippet is written in JavaScript and adds an event listener to the window object. The event being listened for is the "keydown" event, which occurs when a key on the keyboard is pressed down. Let's break down what this code does step by step:




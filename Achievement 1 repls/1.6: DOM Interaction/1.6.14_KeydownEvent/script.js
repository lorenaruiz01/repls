window.addEventListener('keydown', function(event){
  let survey_form = document.querySelector('#survey_form');
  let isFormHidden = survey_form.classList.contains('hidden');
  if( !isFormHidden && event.key === 'Escape'){
    survey_form.classList.add('hidden');   
  }
});

// explanation by chatgpt:
// This code snippet is written in JavaScript and adds an event listener to the window object. The event being listened for is the "keydown" event, which occurs when a key on the keyboard is pressed down. Let's break down what this code does step by step:

window.addEventListener('keydown', function(event) { ... });
// This line of code attaches an event listener to the window object. It listens for the "keydown" event, which is triggered when any key on the keyboard is pressed. When this event occurs, the provided function is executed.

let survey_form = document.querySelector('#survey_form');
// This line of code uses the document.querySelector() method to select an HTML element with the ID "survey_form". The selected element is assigned to the variable survey_form. This assumes that there is an HTML element with the ID "survey_form" in the document.

let isFormHidden = survey_form.classList.contains('hidden');
// This line of code checks whether the survey_form element has a CSS class named "hidden". The .classList.contains() method is used to determine if the class is present on the element. The result (true or false) is stored in the variable isFormHidden.
window.addEventListener('keydown', function(event){
  let survey_form = document.querySelector('#survey_form');
  let isFormHidden = survey_form.classList.contains('hidden');
  if( !isFormHidden && event.key === 'Escape'){
    survey_form.classList.add('hidden');   
  }
});

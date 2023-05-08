(function() {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');

}
  
  function showErrorMessage(input, message) {
    let container = input.parentElement; //The .input-wrapper

    //Check and remove any existing errors 
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    // Now add the error if the message isn’t empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }


  function validateEmail() {
    let value = emailInput.value;
      if (!value) {
        showErrorMessage(emailInput, 'Email is a requried field.');
        return false;
      }
    
      if (value.indexOf('@') === -1){
        showErrorMessage(emailInput. 'You must enter a valid email address.');
      }
  }
  
  function validatePassword() {
    let value = passwordInput.value;
    return value && value.length >= 8;
  }
  
  function validateForm() {
    return validateEmail() && validatePassword();
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  })

  // THE RETURN STATEMENT HERE
})();

// let hasAtSign = value.indexOf('@') > -1;
// let hasDot = value.indexOf('.') > - 1;
// return value && hasAtSign && hasDot;
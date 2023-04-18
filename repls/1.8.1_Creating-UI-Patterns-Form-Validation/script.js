(function() {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');
  
  function showErrorMessage(input, message){
    let container = input.parentElement; //The .input-wrapper

    //Check and remove any existing errors 
    let error = container.querySelector('.error-message');
    if (error){
      container.removeChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;
    let hasAtSign = value.indexOf('@') > -1;
    let hasDot = value.indexOf('.') > - 1;
    return value && hasAtSign && hasDot;
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
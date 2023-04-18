(function() {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');
  
  function validateEmail() {
    let value = emailInput.value;
    return false;
  }
  
  function validatePassword() {
    
    return false;
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
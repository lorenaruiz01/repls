(function() {
  let modalContainer = document.querySelector('#modal-container');
  
  // REST OF CODE
  
  function showModal(title, text) {
    // Clear all existing modal content
    modalContainer.innerHTML = '';
    
    let modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
    
    let contentElement = document.createElement('p');
    contentElement.innerText = text;
    
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
    
    modalContainer.classList.add('is-visible');
  }
  
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  
function showDialog (title, text) {
  showModal (title, text);

  // Define modalContainer here
  let modalContainer = document.querySelector('#modal-container');
  
  // Add a confirm and cancel button to the modal
  let modal = modalContainer.querySelector('.modal');
  let confirmButton = document.createElement('button');
  confirmButton.classList.add('modal-confirm');
  confirmButton.innerText = 'Confirm';
  let cancelButton = document.createElement('button');
  cancelButton.classList.add('modal-cancel');
  cancelButton.innerText = 'Cancel';
  modal.appendChild(confirmButton);
  modal.appendChild(cancelButton);
  
  // Focus on the confirmButton so taht the user can simply press Enter
  confirmButton.focus();
}


  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });
  
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
  
  document.querySelector('#show-dialog').addEventListener('click', () => {
    showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
      alert('confirmed!');
    });
  });


  // THE RETURN STATEMENT HERE
  
})();
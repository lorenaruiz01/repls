function showModal () {
    let modalContainer = document.querySelector ('#modal-container');
    modalContainer.classList.add('is-visible');
}

document.querySelector ('#show-modal').addEventListener('click', () => {
    showModal();
});

function showModal (title, text) {
    let modalContainer = document.querySelector('#modal-container');
}

// Clear all existing modal content
modalContainer.innerHTML = '';

let modal = document.createElement('div');
modal.classList.add ('modal');

// Add the new modal content
let closeButtonElement = document.createElement('button');
closeButtonElement.classList.add('modal-close');
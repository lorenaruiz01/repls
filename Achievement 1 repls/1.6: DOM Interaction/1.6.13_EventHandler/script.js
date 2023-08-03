let extraContent = document.querySelector('.extra-content');

let showMoreButton = document.querySelector('.show-more-button');

let showLessButton = document.querySelector('.show-less-button');

showMoreButton.addEventListener('click', function(event){
  // Reveal the extra content
  extraContent.classList.add('visible');
  // Hide `Show More` button
  event.target.classList.remove('visible');
  // Show `Show Less` button
  showLessButton.classList.add('visible');
});

showLessButton.addEventListener('click', function(){
  // Hide the extra content
  extraContent.classList.remove('visible');
  // Hide `Show Less` button
  event.target.classList.remove('visible');
  // Show `Show More` button
  showMoreButton.classList.add('visible');
});



// NOTES AND TASK:



let pokemonList = [
  {
    name: 'bulbasaur', 
    height: 0.7, 
    types: ['grass', 'poison'],
  }, 
  {
    name: 'charizard', 
    height: 1.7, 
    types: ['fire', 'flying'],
  }, 
  {
    name: 'squirtle', 
    height: 1, 
    types: ['water'],
  }
];

for (let i = 0; i <= pokemonList.length; i++) {
  if (pokemonList[i].height > 1) {  //check condition of each pokemon height 
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ')' + ' - wow, that\'s a big Pokemon!' + '<br>'); // loops over each pokemon and if true, prints name, height, and message. with line break
  } else {  
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ')' + '<br>'); // loops over each pokemon and prints name and heigh. with line break
  }
};


// Exercise 1.4 changes the name of pokemonList to repository. 

// Code with new name for pokemonList: 

let repository = [
  {
    name: 'bulbasaur', 
    height: 0.7, 
    types: ['grass', 'poison'],
  }, 
  {
    name: 'charizard', 
    height: 1.7, 
    types: ['fire', 'flying'],
  }, 
  {
    name: 'squirtle', 
    height: 1, 
    types: ['water'],
  }
];


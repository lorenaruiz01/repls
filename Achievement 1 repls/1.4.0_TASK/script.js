
// // NOTES AND TASK:



// let pokemonList = [
//   {
//     name: 'bulbasaur', 
//     height: 0.7, 
//     types: ['grass', 'poison'],
//   }, 
//   {
//     name: 'charizard', 
//     height: 1.7, 
//     types: ['fire', 'flying'],
//   }, 
//   {
//     name: 'squirtle', 
//     height: 1, 
//     types: ['water'],
//   }
// ];

// for (let i = 0; i <= pokemonList.length; i++) {
//   if (pokemonList[i].height > 1) {  //check condition of each pokemon height 
//     document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ')' + ' - wow, that\'s a big Pokemon!' + '<br>'); // loops over each pokemon and if true, prints name, height, and message. with line break
//   } else {  
//     document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ')' + '<br>'); // loops over each pokemon and prints name and heigh. with line break
//   }
// };


// Exercise 1.4 changes the name of pokemonList to repository. from pokemonList to repository

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

// printArrayDetails function declaration
function printArrayDetails(){
  for (let i = 0; i < repository.length; i++){
    if (pokemonList[i].height > 1) {  //check condition of each pokemon height 
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ')' + ' - wow, that\'s a big Pokemon!' + '<br>'); // loops over each pokemon and if true, prints name, height, and message. with line break
    } else {  
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ')' + '<br>'); // loops over each pokemon and prints name and heigh. with line break
    }
  }
}

// FUNCTION PARAMETERS AND ARGUMENTS: 
// What if you had another Pokémon array called repository2, and this array contained a different set of Pokémon than the original repository array?

let repository = [
  // pokemon objects
];

let repository2 = [
  // different set of pokemon objects
];

//  to print this second list you'd assume that you could use the same function you wrote for printing the first list. The logic behind it would be the same
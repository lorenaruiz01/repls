let pokemonRepository = (function () {    // wrapping pokemonList array inside of an IIFE (Immediately Invoked Function Expression)
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


  function getAll () {    // this function returns all items in the pokemonList array
    return pokemonList;
  }

  function add (pokemon) {    // this function adds the selected pokemon to the array
    if (typeof pokemon === 'object' &&    // checks whether pokemon is an object
      Object.keys(pokemon).includes('name') &&      // checks that pokemon object includes name key
      Object.keys(pokemon).includes('height') &&    // checks that pokemon object includes height key
      Object.keys(pokemon).includes('types')        // checks that pokemon object includes types key
  ) {
    pokemonList.push(pokemon)
  } else {
    console.log('pokemon cannot be pushed to pokemonList')
  }  
}

// Might try to implement this as a seach feature later
// function searchByName(name) {
//   name = name.toLowerCase();
//   return pokemonList.filter(function (pokemon){
//     return pokemon.name.toLowerCase() === name;
//   });
// }


  return {    // this returns an object with the value of the getAll and the add function
    getAll: getAll,   // getAll: is the key that calls the function and returns the value of the same name (key : value)
    add:add,       // add: is the key that calls the function and returns the value of the same name (key : value)
    searchByName: searchByName // Adding the searchByName function to the returned object
  }
}) ();        // the (); makes this a self-executing function


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonList = document.querySelector('ul');

  // create an li element
  let listItem = document.createElement('li');

  // create a button element
  let button = document.createElement('button').innerText.pokemon

});

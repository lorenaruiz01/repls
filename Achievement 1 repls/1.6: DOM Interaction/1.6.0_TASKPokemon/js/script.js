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

  let pokemonList2 = [
    {
      name: 'weedle',
      height: 3,
      types: ['bug', 'poison'],
    },
    {
      name: 'pikachu',
      height: 4,
      types: ['electric'],
    },
    {
      name: 'jigglypuff',
      height: 5,
      types:['normal','fairy'],
    }
  ]

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

  return {    // this returns an object with the value of the getAll and the add function
    getAll: getAll,   // getAll: is the key that calls the function and returns the value of the same name (key : value)
    add:add       // add: is the key that calls the function and returns the value of the same name (key : value)
  }
}) ();        // the (); makes this a self-executing function


pokemonRepository.getAll().forEach(function (pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + ' feet tall.');
});


// not sure if this is correct
function searchByName (pokemon) {
  pokemonRepository.filter(function (pokemon) {
  document.getElementById('input').toLowerCase.value; 
  });
  if (value === Object.keys(pokemon).includes('name')){
    return pokemon.name;
  } else{
    console.log('pokemon could not be found')
  }; 
}

// Or

// not sure if this is correct
// let pokemonList = [];
let searchByName = pokemonList.filter(pokemon => pokemon.name);
console.log(searchByName);
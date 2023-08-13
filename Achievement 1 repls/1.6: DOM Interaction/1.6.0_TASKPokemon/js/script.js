let pokemonRepository = (function () {    // wrapping pokemonList array inside of an IIFE (Immediately Invoked Function Expression)
  let pokemonList = [                     // an array of objects
    {
      name: 'bulbasaur', height: 0.7, types: ['grass', 'poison'],
    }, 
    {
      name: 'charizard', height: 1.7, types: ['fire', 'flying'],
    }, 
    {
      name: 'squirtle', height: 1, types: ['water'],
    }
  ];

  function add (pokemon) {    // the add function adds the selected pokemon to the array
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

  function getAll () {    // the getAll function returns all items in the pokemonList array
    return pokemonList;
  }

  
  function addListItem(pokemon) {       // the addListItem function adds a pokemon as a list item and button
    // assign ul element to pokemonList variable
    let pokemonList = document.querySelector('ul');

    // create an li element
    let listItem = document.createElement('li');
    
    // create a button element
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    
    // add button to listItem
    listItem.appendChild(button);

    // add listItem to pokemonList
    pokemonList.appendChild(listItem);

  }

  return {    // this returns an object with the value of the getAll and the add function
    getAll: getAll,   // getAll: is the key that calls the function and returns the value of the same name (key : value)
    add:add,       // add: is the key that calls the function and returns the value of the same name (key : value)
    addListItem: addListItem
  }
}) ();        // the (); makes this a self-executing function




pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

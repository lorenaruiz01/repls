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

  
  function printArrayDetails(list){
    
    pokemonList.forEach(function (pokemon) {
      document.write(pokemon.name + ' is ' + pokemon.height + ' feet tall.');
    });

  }
  
  
  printArrayDetails(pokemonList);


  // for (let i = 0; i < list.length; i++){
  //   if (list[i].height > 3) {  //check condition of each pokemon height 
  //     document.write(list[i].name + " (height: " + list[i].height + ')' + ' - wow, that\'s a big Pokemon!' + '<br>'); // loops over each pokemon and if true, prints name, height, and message. with line break
  //   } else {  
  //     document.write(list[i].name + " (height: " + list[i].height + ')' + '<br>'); // loops over each pokemon and prints name and height. with line break
  //   }
  // }

//  TASK Directions:

// Part 1: forEach() Loops
// Use a forEach() function instead of the for loop you have to iterate over the Pokémon in your pokemonList array in order to print the details of each one. We recommend revisiting and carefully studying the userList example in this Exercise before doing this part of the task. Commit and push the changes to your GitHub repository.




// Part 2: IIFE
// 1. In the “scripts.js” file of your project, wrap your pokemonList array in an IIFE to avoid accidentally accessing the global state.

// 2. Before anything else, create a new pokemonRepository variable to hold what your IIFE will return, then assign the IIFE to that variable.


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


// 3. The IIFE should return an object with the following public functions assigned as keys:
// getAll: return all items (pokemonRepository.getAll(); should return the pokemonList array)
// add: add a single item to the pokemonList array (calling pokemonRepository.add(item); should add the Pokémon referred to with item to the pokemonList array)

// 4. Make sure both functions are defined separately with the function keyword. Also, the IIFE returns only an object with the same names for keys as values (see the last paragraph of the Exercise)

  function getAll () {    // this function returns all items in the pokemonList array
    return pokemonList;
  }

  function add (pokemon) {    // this function adds the selected pokemon to the array
    pokemonList.push(pokemon);
  }

  return {    // this returns an object with the value of the getAll and the add function
    getAll: getAll,   // getAll: is the key that calls the function and returns the value of the same name (key : value)
    add:add       // add: is the key that calls the function and returns the value of the same name (key : value)
  }
}) ();        // the (); makes this a self-executing function


// 5. Outside of and below the IIFE, you should already have a forEach() loop that iterates over each Pokémon in the repository. But since you’ve limited access to the pokemonList array that’s inside the IIFE (so that it’s only accessible through one of the two functions returned by the IIFE), you need to update the loop code to cope with the new changes. Essentially, you need to use one of the two functions returned by the IIFE in order to retrieve the pokemonList array.

pokemonRepository.getAll().forEach(function (pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + ' feet tall.');
});

// Bonus Task: 
// 1. You may have noticed that the add() function lets you add anything to pokemonList within the repository. You can even add strings or numbers. That’s not good. In a real application, you’d want to make sure pokemonList can only be modified with the correct type of data. Inside the addv function, you can check if the typeof parameter is an object. In combination with a conditional, make sure you can only add the passed argument of the function to pokemonList if it’s an object.
// 2. In addition to the type, you can also validate whether all Object.keys() of the parameter are equal to the specific keys you expect.

function add (pokemon) {
  if (typeof pokemon === 'object' && 
      Object.keys(pokemon).includes('name') &&
      Object.keys(pokemon).includes('height') &&
      Object.keys(pokemon).includes('types')
  ) {
    pokemonList.push(pokemon)
  } else {
    console.log('pokemon cannot be pushed to pokemonList')
  }  
}


// 3. take a look at how the filter() function works and create a whole new public function for pokemonRepository that allows you to find specific Pokémon only by name.

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
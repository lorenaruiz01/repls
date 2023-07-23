
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

//  to print this second list you'd assume that you could use the same function you wrote for printing the first list. The logic behind it would be the same.

    // printArrayDetails();
    // printArrayDetails();

// however, the printArrayDetails() function is hardcoded to work on the repository array: (for (let i = 0; i < repository.length; i++)). So no matter how many times you run the function, it will always print the repository array, not the repository2 array. If you want to run this function on repository2 array, you'd need to replace repository with repository2. But this is not sustainable if you have multiple arrays that use the same function logic. 

// A better way is through FUNCTION INPUTS. You can write a function in such as way as to expect an input. Then, when the function is callled, it will place whatever input it's given into its code. For printArrayDetails(), the input would be the name of the array. 

// You can then call the function together with the name of the array you want to run it on, and it would print that array. To allow a function to take an input, you add input variables between the parentheses of the function declaration: 

function printArrayDetails(list){
  for (let i = 0; i < list.length; i++){
    if (list[i].height > 1) {  //check condition of each pokemon height 
      document.write(list[i].name + " (height: " + list[i].height + ')' + ' - wow, that\'s a big Pokemon!' + '<br>'); // loops over each pokemon and if true, prints name, height, and message. with line break
    } else {  
      document.write(list[i].name + " (height: " + list[i].height + ')' + '<br>'); // loops over each pokemon and prints name and heigh. with line break
    }
  }
}

// notice the addition of LIST. list is a placeholder for the name of the array you decide to input into the function. 
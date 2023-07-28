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
  ];
  
  function printArrayDetails(list){
    for (let i = 0; i < list.length; i++){
      if (list[i].height > 3) {  //check condition of each pokemon height 
        document.write(list[i].name + " (height: " + list[i].height + ')' + ' - wow, that\'s a big Pokemon!' + '<br>'); // loops over each pokemon and if true, prints name, height, and message. with line break
      } else {  
        document.write(list[i].name + " (height: " + list[i].height + ')' + '<br>'); // loops over each pokemon and prints name and height. with line break
      }
    }
  }
  
  
  printArrayDetails(pokemonList);
  printArrayDetails(pokemonList2);


//  TASK Directions:
// Part 1: forEach() Loops

// Use a forEach() function instead of the for loop you have to iterate over the Pokémon in your pokemonList array in order to print the details of each one. We recommend revisiting and carefully studying the userList example in this Exercise before doing this part of the task. Commit and push the changes to your GitHub repository.

pokemonList.forEach(function (pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + ' feet tall.');
});


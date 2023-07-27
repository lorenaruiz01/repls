let add = (a,b) => a + b;
let mult = (a,b) => a*b;


console.log(add(2, mult(4,2)));

function getFullName(person){
  return(person.firstName + " " + person.lastName);
}

let Character = {firstName: 'Homer', lastName: "Simpson"}

let fullName = getFullName(Character);

console.log(fullName);


// function composition is the concept that each function should be as small as possible and that, instead of using one big function, it's better to have many small functions that you can use in combination to obtain the same outcome. 

// here, the function getPersonDescription() is a pure function and does what's expected.  

let anne = {
  name: 'Anne Smith',
  age: 38,
  hasChildren: false
};

function getPersonDescription(person) {
  let ageDescription = person.age + ' years old';
  let childrenDescription = person.hasChildren ? 'has children' : 'has no children';

  return person.name + ', ' + ageDescription + ', ' + childrenDescription;
}

console.log(getPersonDescription(anne));    // returns: Anne Smith, 38 years old, has no children

// However, there are many action being performed in the function which would be better split into multiple small functions. Doing so woudl make the code more composable, allowing for easy reuse and recombination of its functions:

let anne = {
  name: 'Anne Smith', 
  age: 38,
  hasChildren: false
};

function getAgeDescription(age) {
  return age + 'years old';
}

function getChildrenDescription(hasChildren) {
  return hasChildren ? 'has children' : 'has no children';
}

function getPersonDescription(person) {
  let ageDescription = getAgeDescription(person.age);
  let childrenDescription = getChildrenDescription(person.hasChildren);

  return person.name + ', ' + ageDescription + ', ' + childrenDescription;
}

console.log(getPersonDescription(anne));
// returns: Anne Smith, 38 years old, has no children



// the getPersonDescription() function has the same input and output as before, but in between, each specific functionality has been split into individual dedicated functions, which has some advantages: 

// First, the getPersonDescription() function is now much easier to read. The function names themselves are descriptive, allowing you to quickly grasp what each one of them does.

// Secondly, these new "sub-functions" can also be used by other functions. For instance, you may at some point write a getDogDescription() function where you could reuse some of the same sub-functions:

let pug = {
  age: 4,
  hasPups: false,
  name: 'Fred'
};

function getPupDescription(hasPups) {
  return hasPups ? 'has pups' : 'has no pups';
}

function getDogDescription(dog){
  let ageDescription = getAgeDescription(dog.age);
  let pupDescription = getPupDescription(dog.hasPups);

  return dog.name + ', ' + ageDescription + ', ' + pupDescription;
}
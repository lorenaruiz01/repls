let add = (a,b) => a + b;
let mult = (a,b) => a*b;


console.log(add(2, mult(4,2)));

function getFullName(person){
  return(person.firstName + " " + person.lastName);
}

let Character = {firstName: 'Homer', lastName: "Simpson"}

let fullName = getFullName(Character);

console.log(fullName);
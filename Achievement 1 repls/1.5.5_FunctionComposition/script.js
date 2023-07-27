const pug = {
  age: 4,
  hasPups: false,
  name: 'Fred'
};
// This code is missing a function. Can you identify the missing function and add it to get a console output?


function getPupDescription(hasPups) {
   return hasPups ? 'has pups' : 'has no pups';
}
function getDogDescription(dog) {
   let ageDescription = getAgeDescription(dog.age);
   let pupDescription = getPupDescription(dog.hasPups);

   return dog.name + ', ' + ageDescription + ', ' + pupDescription;
}

console.log(getDogDescription(pug));
let anne = {
  name: 'Anne',
  age: 38,
  children: []
};

Object.keys(anne).forEach(function(property) {
  document.write(property + ': ' + anne[property] + '<br>');
});

anne.children = [
  {
    name: 'Sam', 
    age: 12,
  },
  {
    name: 'Mary',
    age: 4,
  }, 
  {
    name: 'Max',
    age: 7
  }]

  console.log(anne.children);

  

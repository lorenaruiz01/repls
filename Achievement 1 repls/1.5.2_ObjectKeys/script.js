let anne = {
  name: 'Anne',
  age: 38,
  children: []
};

Object.keys(anne).forEach(function(property) {
  document.write(property + ': ' + anne[property] + '<br>');
});

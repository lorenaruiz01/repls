let foodList = ['tuna', 'cheese', 'salad'];

document.write('<h3>===for LOOP===</h3>');
for (let i = 0; i < foodList.length; i++) {
  document.write('<p>' + foodList[i] + '</p>');
}

document.write('<h3>===forEach LOOP===</h3>');
foodList.forEach(function (currentItem) {
  document.write('<p>' + currentItem + '</p>');
});
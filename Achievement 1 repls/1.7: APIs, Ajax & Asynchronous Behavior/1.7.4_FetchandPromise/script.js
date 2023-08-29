fetch('https://yesno.wtf/api', {
  method: 'GET'
}).then(function (response) {
  return response.json(); // This returns a promise!
}).then(function (json) {
  console.log(json); // The actual JSON response
}).catch(function () {
  // Error
});

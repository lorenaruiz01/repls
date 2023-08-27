let count = 1;
function increaseCount() {
   count = count + 1;
}

setTimeout(function () {
  console.log('first call', count);
  increaseCount();
}, 200);
setTimeout(function () {
  console.log('second call', count);
  increaseCount();
}, 100);
setTimeout(function () { 
  console.log('third call', count);
  increaseCount();
}, 500);
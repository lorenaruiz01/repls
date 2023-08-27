let examplePromise = new Promise(function (resolve, reject) {
  let sum;
  setTimeout(function(){
    sum = 5 + 6;
    if(sum > 10) {
      resolve(sum);
    }else{
      reject('The promise has been rejected');
    }     
  }, 2000);
});

console.log('some piece of code');
examplePromise.then(function(result){
  console.log(result);
}).catch(function(error){
  console.log(error);
});
console.log('another piece of code');
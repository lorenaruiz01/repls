/* COMPLETE THE CODE BELOW BY FOLLOWING THE INSTRUCTIONS */

// 1. Select and assign only the payments div:
let payments = document.querySelector('.payments')
    
// 2. Select and assign all divs with the class 'amount' INSIDE (!) the payments div
let amountsOfPayments = payments.querySelectorAll('.amount'); 
  
// 3. For each amount inside payments, log the element in the console.
amountsOfPayments.forEach(function(amount){
    console.log(amount);
  })
  
  
  // 4. Once you have a working result, double check your code with the solution below.
  
  
  
  
  
  
  
  
  
  // Don't cheat! Try to solve it first!
  
  
  
  
  
  
  
  
  
  /* SOLUTION 
  
  let payments = document.querySelector('.payments');
  let amountsOfPayments = payments.querySelectorAll('.amount');
    
  amountsOfPayments.forEach(function(amount){
    console.log(amount);
  })
  
  */
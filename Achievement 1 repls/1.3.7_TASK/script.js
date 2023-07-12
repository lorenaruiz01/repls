// Do loop: 
let text1 = "";
let i = 0;

do {
  text1 = text1 + " "+ i;
  i++;
}
while (i < 10);
console.log(text1);


// While loop:
let fruits = ["apple", "banana", "orange", "grape"]
let text2 = "";
let item = 0;

while (fruits[item]){
  text2 = text2 + " " + fruits[item];
  item++;
}

console.log(text2);

// For loop: 
let veggies = ["tomato", "cucumber", "potato"];
let text3 = "";
let a = 0;
for (;veggies[a];){
  text3 = text3 + " " + veggies[a];
  a++;
}
console.log(text3);

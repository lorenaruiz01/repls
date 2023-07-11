let person = [
  {name: "person1", age: 16},
  {name: "person2", age: 10},
  {name: "person3", age: 25}
  ];

for (let i=0; i < person.length; i++){
  if (person[i].age <19 && person[i].age >13){
    console.log(person[i].name + " is a teenager");
  }else if (person[i].age <13){
    console.log(person[i].name + " is a child");
  }else {
    console.log(person[i].name + " is an adult");
  }
}
const person = 
{

     name:"rushi",
     age: 21,
     gender: "male",
     hobbies: ["running","eating","swimming","talking"]
};

const person2  = { name:myvar,  age:myvar2}= person;
console.log(myvar);
console.log(myvar2);

for(let per in person){
     console.log(person[per]);   // always use for in loop for printing objects element
}

let number = Object.keys(person);   // gives keys of object

console.log(number);


let number2 = Object.values(person);   // gives values of object
console.log(number2);


let number3  = Object.entries(person);   // gives key values pair array
console.log(number3);
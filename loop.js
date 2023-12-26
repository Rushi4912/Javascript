let key = "email";
const person = { 

  name: "rushi",   // key value pairs
  age: 21,
  gender : "male",
  hobbies: ["playing","singing","riding"]
};

const person2 = {...person ,score:"zero"};  // adding key in object by using spread operator


let {myvar1,myvar2} = person;
console.log(myvar1,myvar2);


person.newHobbie = "gaming";
person[key] = "pawar@gmail.com";  // adding object key by using variable


for(let per in person){        // for in loop are use to iterate over object

  console.log(person[per]);
}

console.log(person2.hobbies);


const combineArray = {

  skills: ["java","javascript","python"],
   hobbies: ["running","reading"],
   newHobbies: ["playing","bowled"]
};


let number =  Object.keys(combineArray);   // gives array of keys

let number2 = Object.values(combineArray);  // gives array of values

let number3 = Object.entries(combineArray);  // gives array of key values pair
const person = {

  name: "Rushi",
  age: 23
}

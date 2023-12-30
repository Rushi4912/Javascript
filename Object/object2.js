  const about  = "i am software engineer"
let person3 = {
  // key :  values
     name: "pawar",
      age: 21,
     address: "Latur",
     email : "pawar@gmail.com",
     let : "use let",  // for an object property we can use javascript reserved syntax
     1 : "one",  // if we declare key by using number then javascript automatically convert number to string 
};

// objects key are by default in string 
// we can access object key value pair by using dot and square brackets
// by using square brackets we can add another variable value to object

console.log(typeof person3[1]);
console.log("age" in person3);  // we can use in syntax for ckecking whether property is present or not
console.log(person3["email"]);

person3["about"] = "i am software engineer from india";
  console.log(person3);
console.log(person3["about"]);


// using function 
function makeUser(name,age){

     return {
          name: name,
          age : age,    // shorthand property like name ,age,
     };
};

const myValue = makeUser("Rushikesh",22);

console.log(myValue.name);
console.log(myValue.age);


for(let key in person3){
 console.log(person3[key]);
}

let person6 = {
  name: "Rushikesh",
  age: 21,
  about: function( age ){

    return age <= 18;
  },

  moredetails: function(){


       if(age<10){
        console.log("You are to small ");
       }
       else{

        console.log("your are ready to go ");
       }
  }
}

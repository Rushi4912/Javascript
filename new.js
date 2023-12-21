const person = {
     name: "Rushikesh",
     age: 23,
     id: 23134,
     "more about" : "hi my name is rishi",
     hobby: function () {
          console.log("eating khati toffee");
     }
};

const arr = ["green", "yellow", "pink", "red"];

person.likeColor = "blue";

console.log(person.likeColor);
console.log(person["id"]);
console.log(person["more about"]);

for (element of arr) {
     
     console.log(element);
}

// arrow function
const myFunc = () => {
     
     console.log("hey my name is rushi");
}

const isEven = (num) => {
      
     if (num % 2 == 0) {
          console.log("number is even");
     } else {
          console.log("odd number");
     }
}
// function declaration
myFunc();

const sum = function () {
     
     console.log("i am a function declaration");
}

isEven(7);
     
const find = (myarray, target) => {
     
     for (let i = 0; i < myarray.length; i++) {

          if (myarray[i] === target) {
               return true;
          }

     }

     return false;
}
const ans = find([23, 45, 12, 56, 67, 567], 5);

console.log(ans);

const add = function (number1, number2) {
  return number1 + number2;
};

console.log(typeof add);
let fruits2 = ["apple", "orange", "plum"];
console.log(fruits2.at(-2));

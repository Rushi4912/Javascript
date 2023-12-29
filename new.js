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
     

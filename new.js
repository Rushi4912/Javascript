const person = {

     name: "Rushi",
     is: true,
     id: 2020,
     age: 22,
     eat: function () {
          
          console.log("he can eat too");
     },

     person2: {
          name: "pawar",
          class: "3rd year"
     }
};

person.isValid = true;
delete person.eat;

const arr = [

     {
          name: "Rushi",
          age: 21
     },
     {
          name: " Rohit",
          age: 32
     },
     {
          name: "mohit",
          age: 20
     }, {
          
          name: "unknown",
          age: 12
     }
];

// console.log(person.person2.name);
console.log(person);

const ans = arr.map((item, index) => {
     
     return item.name;
});

console.log(ans);

console.log(person['name']);
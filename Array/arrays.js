// empty array creating methods
// by using constructor
let arr = new Array();
arr[0] = 8; // adding element
arr[1] = 10; // adding element

console.log(arr);

let arr2 = []; // empty array
arr2[0] = "apple"; // assigning different values to exiting array
arr2[1] = "banana"; //add more elements in the array
console.log(arr2);

let arr3 = ["apple", "banaan", "mango", "plum"];
// console.log(arr3);
arr3[1] = "orange";
// console.log(arr3);
arr3[3] = "newFruit";
// console.log(arr3);
// by using length property we can calculate length of an array
console.log(arr3.length);

// we can store elemets of any type in the array
let arr4 = [
  "appple",
  true,
  null,
  { name: "Rushikesh" },
  function () {
    console.log("hello World");
  },
  8,
];
console.log(arr4[3].name); // object key access
arr4[4](); // function call

// We can explicitly calculate the last element index and then access it: fruits[fruits.length - 1].

let fruits = ["apple", "orange", "plum"];
console.log(fruits[fruits.length - 1]);

// same syntax for accessing last element of array
let fruits2 = ["apple", "orange", "plum"];
console.log(fruits2.at(-1));

//push :  adds an element to the end.
//shift :  get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
// pop :  takes an element from the end.

//
let fruits3 = ["apple", "banana", "mango"];
fruits3.pop(); // remove elements from last
fruits3.push("papaya"); // add elements from last
fruits3.shift(); //remove  elements from first
fruits3.unshift("soyabean"); // add elements from first

for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}

// clone array

const arr1 = ["apple", "banana", "grapes"];

const arr21 = [].concat(arr1, "almonds", "paneer"); // by using concat method
const arr5 = [...arr1, "item1", "item2"]; // by using spread operator

console.log(arr21);
console.log(arr5);

// destructuring of array

let [myVar1, myVar2, ...myNewArray] = arr1;
console.log(myVar1);
console.log(myVar2);
console.log(myNewArray);

// iteration of array by using various loops and additional modification

// traditional for loop
const newArray = [];
for (let i = 0; i < arr1.length; i++) {
  newArray.push(arr1[i].toUpperCase());
}
console.log(newArray);

// while loop
const newArray2 = [];
let i = 0;
const array = ["food", "eat", "green"];
console.log(array);
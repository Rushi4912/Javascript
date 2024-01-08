
// filter -> filter out specific elements of array
// The find method looks for a single (first) element that makes the function return true.
// If there may be many, we can use arr.filter(fn).

const user = [
  {
    firstName: "Rushikesh",
    lastName: "pawar",
    age: 21,
  },
  {
    firstName: "Rohit",
    lastName: "Sharma",
    age: 61,
  },

  {
    firstName: "suresh",
    lastName: "Kumar",
    age: 71,
  },

  {
    firstName: "aarushi",
    lastName: "pandey",
    age: 20,
  },
];
// filter method takes three arguments item,index and whole array
const ans = user.filter(function (item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
  return item.age < 25;
});

console.log(ans);

 

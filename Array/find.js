let arr = [
  { name: "Rushi", age: 22 },
  { name: "pawar", age: 20 },
  { name: "mohit", age: 12 },
];

const ans = arr.find(function (item, index, array) {
  //  if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
  return item.age === 20;
});
console.log(ans);

// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

console.log(user.name); // John
console.log("hi")

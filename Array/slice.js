// It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

let arr = ["name", "pawar", "nope", "hi"];
// slice method take starting and ending index and slice that array
// slice method exclude last index 
// it return new array
const ans = arr.slice(1, 2);
console.log(ans);

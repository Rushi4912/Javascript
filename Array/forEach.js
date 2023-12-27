// The arr.forEach method allows to run a function for every element of the array.
const arr = [12, 34, 56, 78, 122,56,23];

arr.forEach(function (number, index) {
   console.log(number,index);
});

// The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

   // arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.

  //  arr.includes(item, from) – looks for item starting from index from, returns true if found.


// The arr.map method is one of the most useful and often used.

// It calls the function for each element of the array and returns the array of results.
// map -> transform an array
// this method return new array
const user = [12, 1, 3, 4, 5];
const ans = user.map(function (item, index) {
     return item * 2;
});

console.log(ans);


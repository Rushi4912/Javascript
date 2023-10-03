// reduce method are used to calculate a single value based on the array.
// the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.

let arr = [1, 2, 3, 4, 5];

let ans = arr.reduce(function (acc, current) {
     return acc + current;
});
console.log(ans);
// in this method  result of the previous call becomes the first argument of the next one.
// setTimeout is an asynchronous function which will be run after all task done in call stack
// setTimeout takes multiple arguments like callback,minimal time delay and other arguments
console.log("Hi");
const id = setTimeout(function () {
     console.log("inside setTimeout");
}, 1000);
// console.log(id);
console.log("last one");

// callback: This is the function that you want to execute after the specified delay.
// delay: This is the time in milliseconds (ms) after which the callback function will be executed.

// arg1, arg2, ...: These are optional arguments that can be passed to the callback function when it is executed.
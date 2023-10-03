function myFunc(firstName, lastName) {
  return function () {
    console.log(firstName, lastName);
  };
}
// when function return another function with local memeory variable then it is called closure
// In this case firstname and lastname is local variable for inner returned function
// firstly javascript code get compiled
// in call stack firstly GEC ->global execution context takes place
// then it divided into two parts local memeory and execution contest
// all the variable and function are stored in the local memeory
// then FEC get in stack FEC -> function execution contest
// again FEC divided into two parts local memory and execution contest
// then function variables and other fuction inside function stored in memeory
// finaly inside function gets return with local variable that is closure
const newOne = myFunc("Rushikesh", "pawar");

newOne();

function myFunc2(power) {
  return function (number) {
    return number ** power;
  };
}

const cube = myFunc2(3);
const ans = cube(3);
console.log(ans);

function myFunc3() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("function called");
      counter++;
    } else {
      console.log("mai call ho chuka hue");
    }
  };
}

const ans2 = myFunc3();

ans2();
ans2();

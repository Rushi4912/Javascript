const array = [34,6,7,34,516];

const newOne = array.every((number)=>number<100);

// every method ckeck all the elements from array ,if all condition is true then it returns true otherwise false

console.log(newOne);



const newOne2 = array.some(function find(number){
     return number>100;
});


// some method check all elements from array,if at least one condition is true then it returns true otherwise false

console.log(newOne2);


const array2 = [356,78,34,67];

array2.sort((a,b)=>a-b);

// sort method treats array elements like string and sort them on basis of asci values 
// here a assign to first index and b assign to second index
//  if a-b is positive then we swap -> (b a)
// if a-b is negative then we do not swap -> (a,b)

console.log(array2);


const array3 = ["item1","item2","item3","item4"];

 const array4 = array3.splice(4,0,"item5");
// splice method are used to insert or delete specific elements in array
// The splice() method overwrites the original array.
// splice() method return deleted elements from array,if not then return empty array
// it takes three arguments (index,delete,insert)

console.log(array4);
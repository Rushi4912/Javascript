//The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

let myArray = ["Rushi", "Mohit", "Rohit", "Riya","pawar"];

const remove = myArray.splice(0, 1, "pawar");


// splice method takes starting index,delete element count
// adding element is optional
// splice method return an array of removed elements
console.log(myArray);
console.log(remove);

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

let arr = ["I", "study", "JavaScript", "react"];
let myArray3 = ["food", "newOne"];
let arra7 = [1, 56, 6, 7];
for (let i = 0; i <= 20; i++){
     console.log(i);
}

// from index 2
// delete 0
// then insert "complex" and "language
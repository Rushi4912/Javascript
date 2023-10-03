const number = [ 5,6,4,6,434];

const newOne = new Set(number);
newOne.add(90);
// set is iterable like array we can use for of loop
// set contain only unique elements
// set order may be different
// we cannot access set by using index like array and strings.
// set have has() property return true if value exits


// new Set()	Creates a new Set

// add()	Adds a new element to the Set

// delete()	Removes an element from a Set

// has()	Returns true if a value exists

// clear()	Removes all elements from a Set

// forEach()	Invokes a callback for each element

// values()	Returns an Iterator with all the values in a Set

// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set
console.log(newOne);

console.log(newOne.has(6));
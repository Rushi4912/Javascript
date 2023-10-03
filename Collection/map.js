const person = {
     id: 1,
     firstName : "rushi",
     age: 21
};


const newOne = new Map([['firstName','Rushi'],['age',21]]);
newOne.set('gender','male');
console.log(newOne.has('firstName','Rushi'));
console.log(typeof newOne);
// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// A Map has a property that represents the size of the map.

//  Map()	Creates a new Map object

// set()	Sets the value for a key in a Map

// get()	Gets the value for a key in a Map

// clear()	Removes all the elements from a Map

// delete()	Removes a Map element specified by a key

// has()	Returns true if a key exists in a Map

// forEach()	Invokes a callback for each key/value pair in a Map

// entries()	Returns an iterator object with the [key, value] pairs in a  Map

// keys()	Returns an iterator object with the keys in a Map

// values()	Returns an iterator object of the values in a Map

console.log(newOne);

console.log(newOne.get('gender'));
// Single and double quotes are essentially the same
let str3 = "rushi";

for(let i = 0 ; i<str3.length; i++){
    console.log(str3[i]);
}



let str = `Hello`;

// the first character
console.log( str[0] ); // H
console.log( str.at(0) ); // H

// the last character
console.log( str[str.length - 1] ); // o
console.log( str.at(-1) );


function sum(a, b) {
    return a + b;
  }
  // example of template sring 
  console.log(`1 + 2 = ${sum(1, 2)}.`);


 let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2); // true


// string in js are immutable
let str4 = 'Hi';

str4[0] = 'h'; // error
console.log( str[0] ); // doesn't 

let str5 = 'Widget with id';

console.log( str5.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str5.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( str5.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
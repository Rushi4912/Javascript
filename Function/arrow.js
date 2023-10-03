const add = (number1,number2) =>{
     return number1+number2;
}


// arrow function is just like a normal function 
// arrow function does not follow this keyword rule like normal function 

// this indicates current object
const hello = ()=>{

     console.log("hello world");
}


const isEven = (number)=>{

     if(number%2===0){

          return true;
     }
     else{
          return false;
     }
}


const find = (myArray,target) =>{

     for(let i = 0; i<myArray.length; i++){

          if(myArray[i]===target){
               return i;
          }
     }
     return -1;
}

const array = [12,5,6,15,100];

const divisible = (myArray,number)=>{

     let count = 0;
     for(let i = 0; i <myArray.length; i++){

           if(myArray[i]%2===0){
               count++;
           }
     }

     return count;
}

console.log(divisible(array,3));

// console.log(find([56,34,56,123,89],34));

// console.log(isEven(6));
// hello();
// console.log(add(9,6));
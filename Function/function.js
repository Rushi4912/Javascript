// function declaration syntax

function add(number1,number2){

     return number1+number2;
}


function helloWorld(){
     console.log("hello world");
}

function find(myArray,target){

     for(let i = 0 ; i<myArray.length; i++){

          if(myArray[i]===target){
               return i;
          }
     }
     return -1;
}


function isEven(number){

     if(number%2===0){
          return true;
     }
     return false;
}


console.log(isEven(4));
console.log(find([4,6,7,89,90,4],7));
console.log(add(5,7));
helloWorld();
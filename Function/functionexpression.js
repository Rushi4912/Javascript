

const add = function(number1,number2){
     return number1+number2;
}



const hello =  function(){

     console.log("hello world");
}


const isEven = function(number){

     if(number%2===0){

          return true;
     }
     return false;
}

const find = function(myArray,target){

     for(let i = 0; i<myArray.length; i++){

          if(myArray[i]===target){
               return i;

          }
     }

     return -1;
}

const array = [56,34,56,54,33];

console.log(find(array,33));
// console.log(isEven(9));
// hello();
// console.log(add(6,8));
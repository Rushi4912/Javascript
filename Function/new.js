



function print(){

     let myVariable = "to variable";
     console.log(myVariable);
}

// print();

// if we not passed all arguments then this will be undefined by default
// we assign new function to undefined arguments

function myFunc(value,text = newfunc()){
     console.log(value);

}

// myFunc(4);


function newfunc(){
     console.log("i am newfunc");
}

function showPrime(n){
     for(let i = 2 ; i < n ; i++){

          if(!isPrime()){
               continue;
          }
          else{
               console.log(i);
          }
     }
}

function isPrime(n){

     for(let i = 2; i < n ; i++){

          if(n%2===0){
               return false;
          }

          return true;
     }
}

// showPrime(20);

let age = 20;

if(age<18){
     print();
     function print(){
          console.log("under 18");
     }
}
else{
     print2();
     function print2(){
          console.log("above 18");
     }

}




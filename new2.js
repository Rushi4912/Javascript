const arr = [1, 3, 4, 55, 5, 6];

function large(arr) {
     
     let large = 0;

     for (let i = 0; i < arr.length; i++){

          if (large < arr[i]) {
               

               large = arr[i];
          }
     }

     return large;
}

let ans = large(arr);

console.log(ans);

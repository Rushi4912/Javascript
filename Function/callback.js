
  const hello = (name)=> {

     console.log("your name is ",name);
  }
function add (callback){    // A callback function is a function passed into another function as an argument

    console.log("inside function add");
    callback("Rushikesh");
}


add(hello);
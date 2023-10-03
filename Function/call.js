const user1 = {
     name: "Rushikesh",
     age: 21,
     email: "pawarrushikeshpawar@gmail.com",

     is18: function(){
          return this.age >= 18;
     }
};
// In normal function this points to window object , in other cases this points to object in that function
// call method are used for function borrowing
// call method takes first argument as a refrence of object and onwards takes normal arguments

// call and apply method work similar but in case of apply method we pass arguments in array list -> ["rushi","pawar"]
// bind also work similar to call and apply but bind mehod return a function or bind a function to another function

let about = function (){
     console.log(`user name is ${this.name} and age is ${this.age}`)

}

function createUser(name,age,email){

     const user = {};
     user.name = name;
     user.age = age;
     user.email = email;
     user.is18 = function(){
          return this.age >= 18 ;
     }

     return user;
}

const user2 = createUser("pawar",20,"pawar@gmail.com");
const user3 = createUser("mohit",23,"mohit@gmail.com");


about.call(user1);

about.call(user2);
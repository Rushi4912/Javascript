function createUser(firstName,lastName,email , age ){

       const user = Object.create(userMethods);
       // object.create empty object with proto
       // proto consits usermethods which we created in another object
       
     user.firstName = firstName ;
     user.lastName= lastName;
     user.email = email;
     user.age = age;
     return user;
};

const userMethods = {
     about: function(){
          return "i am about ";
     },
     is18: function (age){
          return age>=18;
     }
}

// In javascript we consider fuction as a object
// prototype is empty object present in function 
 createUser.prototype.about = function(){
     return 'i am passinate ';
 };
 createUser.prototype.is18 = function(age){

     return age >= 18 ;
 }

const user1 =  createUser("Rushikesh","pawar","pawar@gmail.com",21);

console.log(user1.about());
class animal {

     constructor(name ,age){
          this.name = name;
          this.age = age;
     }

     about(){
          return "animal is cute although";
     }
     bark(){
          return "animal is barking";
     }
};
// extends keyword are used to inheritance
// super are used invoke parent constructor for particular tasks
class dog extends animal{
     constructor(name,age,speed){
          super(name,age);
          this.speed = speed;
     }

     calculateSpeed(){
          return this.speed*2;
     }
}
// classes are same as c++
// class constructor cannot intialized without new keyword
// new keyworld create empty object and assign to this -> this = {}
// new keyword return that object

const obj = new animal("hunny",2);
const obj2 = new dog("sheru",5,25);

console.log(obj2.name);
console.log(obj2.calculateSpeed());
/*
Prototypes -> It is a mechanism using which JS objects inherits features from one another.

*/

function fun(n){
    this.name = n;
}
let animal = new fun("Tiger");

fun.prototype.display = function (){
    console.log("Entity name is ",this.name)
}

console.log(animal);
let person = new fun("Sachin");
console.log(fun.prototype.display === animal.display)
console.log(fun.prototype)

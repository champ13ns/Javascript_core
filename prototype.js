/*
Prototypes -> It is a mechanism using which JS objects inherits features from one another.

*/

function fun(n){
    this.name = n;

}

let person = new fun("Sachin");


//Function statement aka Function declaration
st();
// x(); -> error
function st(){
    console.log("fn statement");
}
//Function expression
var x = function(){
    console.log("fn expression");
}
// diff b/w statement and expression is hoisting (one is hoisted as fn and expression is hoisted as variable, so we caanot call that fn)
//Function decleration
//Anonymous function  -> functions with no name 
// function() {

// }
//Named function expression
var fn_exp = function xyz(){
    console.log("named fn expression");
}
// xyz() -> error -> Reference error , xyz is not defined 
fn_exp();
//Difference b/w parameters & arguments
function abc(param1,param2){
    console.log(param1 , param2);
}
abc(1,2); // the values passed to the function are argument(s).
//First Class Functions/Citizens -> ability of functions to be used as values and passed as a parameter or return as a function from function are known as first class functions.
// Functions are first class citizens in JS
//Arrow Functions




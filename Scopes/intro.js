/*
in simple words, scope is simply where to look for things
we are looking for variables and functions.
we have three(3) type of scopes in JS
a.Global Scope
b.Function Scope
c.block scope
*/
/*
Global Scope -> if the variable or function is present in a global scope,
then it is accessible everywhere in the JS file.
There are many ways to define global scope, there are many ways, but one way is 
to declare/define variable outside any function.
*/
/*
Function Scope -> The visibilty of a variable/function is just inside the outer function
*/

/*
Block Scope -> In JS we can use a pair of curly braces to declare a block.
if a variable/function is only accessible/visible inside a block then it will be a block scope.

*/

/*
var,let and const
var -> whenever we use a var inside a function, the variable gets function scope,if we use
it outside a function, no matter if it is enclosed in a block or not, it will give the variable
global scope 

*/
{
    var x = 10; // x -> has global scope.
    console.log(x);
}
console.log(x);

function fn(){
    var a = 9; // a -> has function scope.
    function g(){
        console.log(a)
    }
    g();
}
// fn();
// console.log(a);  // error -> a is not defined

/*
let -> whenever we intialise a varibale with let, it always get the scope of enclosing BLOCK.
redecleration of let is not allowed.
If we declare let outside any block, then also it will not be accessible in the
global scope, but with var it will be accessible in the global scope.
*/
{
    var r = 100;
    console.log(r);
}

// y()
console.log(r);

{
    console.log(z); // error -> TDZ
    let z = 8;
}

/*
const -> The const declaration creates block-scoped constants, much like variables declared using the let keyword. 
The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), 
and it can't be redeclared (i.e. through a variable declaration).
However, if a constant is an object or array its properties or items can be updated or removed. 
*/

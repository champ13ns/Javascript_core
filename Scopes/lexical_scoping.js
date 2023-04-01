/*
Phase 1-> Parsing -> Scope resolution
whenvever varibale is declared using var/let/const it is known as formal decleration
2. In the parsing phase, JS looks to formal decleration
*/

var teacher = 'sachin'
function fn(){
    var teacher = 'asdf'
    console.log(teacher);
}
fn();

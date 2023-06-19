function fun(){
    this.name = 'sachin'
    console.log(this);
}
fun() // in this case, this -> will be the global object
let fun_ob = new fun(); // in this case this will point to the newly created object.


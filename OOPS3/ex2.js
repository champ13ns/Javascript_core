console.log(this)
let person = {
    fname:"a",
    lname:"b",
    age:34,
    showDetails: () => {
        console.log(this)
        console.log(this.fname,this.lname,this.age)
    }
}

 function g() {
    console.log(this === globalThis)
}   

h = new g();

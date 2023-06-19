let obj = {
    name:"Sachin",
    age:23,
    displayDetails : function(){ 
        console.log(this.name, this.age)  
    }
}

obj.displayDetails();

function fun(){
    console.log(this.name)
    console.log(this.age)
    this.displayDetails()
}

let rf = fun.bind(obj);
rf()
function fun(n,a){
    this.name = n;
    this.age = a;
    // this.display = function()  {
    //     setTimeout(() => {
    //         console.log(n+" and "+a);
    //     },3000)
    // }
  this.display = function(){  
    console.log(n+" and "+a);
} 

}
var obj = {
    name:"Mansi",
    age:"19",
    display: () =>  {
        console.log(this);
    }
}

let obj2 = {
    name:"c",
    age:"9",
    display:() => {
        setTimeout(()=>{
            console.log(this.name,this.age);
        },3000)
    }
}

obj.display();
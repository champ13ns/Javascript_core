let player = {
    fname : "sachin",
    lname : "fuloria",
    sport : "football",
    disp : function (){
        setTimeout(() => {
            console.log(this.fname+" "+this.lname+" plays "+this.sport);            
        }, 2000);
    }
}

let obj = function(){
    a : 10
}

let x = obj.bind(player);
console.log(x)
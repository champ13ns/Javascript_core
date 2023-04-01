
function y(x){
    x();
}
// y over here is the higher order fn.
// x is the callback fn.

y(function x(){
    console.log("x");
});

let area = function(radius){
    return Math.PI * radius * radius
}

function calculate (radius , logic){
   return (logic(radius))
}
let radius = [2,1,3]
const output=[]
for(let i=0;i<radius.length;i++){
   output.push( calculate(radius[i] , area));
}
console.log(output)

// Array.prototype

let narr =  radius.map((val,idx) => val*2)
console.log(narr)

Array.prototype.myMap = function(arr , cb){
    let narr = [];
    for(let i=0;i<arr.length;i++)
    narr.push(cb(arr[i]));
    return narr;
}

function cb(val , idx){
    return val*3;
}

let newest_arr = narr.myMap((val,idx) => val*2);
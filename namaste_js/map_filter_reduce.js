const arr = [9,8,5,1 , 1313] ;

// filter odd values

let output = arr.filter((x => x % 2))
console.log(output);

output = arr.filter((x => ! (x%2)))
console.log(output);

// Reduce method

output = arr.reduce((acc,curr,idx) => {
    acc += curr;
    return acc;
} ) 
console.log(output);

// Array.prototype.myMap = function(function cb(){

// } , initialVal)

Array.prototype.myMap  = function(cb ){
    let narr = [];
    for(let i=0;i<this.length;i++){
        narr.push(cb(this[i]))
    }
    return narr;
}


Array.prototype.myReduce = function(cb , initialVal){
    let rVal = initialVal;
    for(let i=0;i<this.length;i++){
        rVal = cb(rVal , this[i] , i)
    }
    return rVal;
}

console.log(arr.myReduce((prev , curr , idx)=>{
    prev += curr;
    return prev;
} , 0))

console.log(arr.myReduce((prev , curr , idx) => {
    if(curr > prev)
    prev = curr;
    return prev;
},0))
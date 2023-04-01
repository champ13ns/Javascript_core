let arr = [1,4,234,12];
let narr = arr.map((val , index , arr)   => arr[index]  * 2)
console.log(narr);

Array.prototype.myMap = function(cb){
    let narr=[]
    for(let i=0;i<this.length;i++){
        narr.push(cb(this[i]))
    }
    return narr;
}



arr=[9,12,23];
narr=[]
narr = arr.myMap((ele,idx,arr) => {
    return ele * ele;
});

narr = arr.myMap((ele) => Math.sqrt(ele))

console.log(narr);
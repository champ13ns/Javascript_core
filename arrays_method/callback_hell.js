let arr=[1,232,1,23,14,123,12342]
Array.prototype.myMap = function(cb ){
    let narr = []
    for(let i=0;i<this.length;i++)
    narr.push(cb(this[i]))
    return narr;
}
let narr = arr.myMap((x => x *2));
console.log(narr)
console.log("aldsjfasf")
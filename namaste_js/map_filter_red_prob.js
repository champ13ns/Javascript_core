let users = [
    {
        firstName:"sachin",lastName:"fuloria",age:23
    },
    {
        firstName:"donald",lastName:"trump",age:23
    },
    {
        firstName:"elon",lastName:"musk",age:52
    }
]

Array.prototype.myMap  = function(cb ){
    let narr = [];
    for(let i=0;i<this.length;i++){
        narr.push(cb(this[i]))
    }
    return narr;
}

let nlist
nlist =  users.myMap((curr)=>{
    return (curr.firstName + " " + curr.lastName)
})

console.log(nlist)

const rVal = users.reduce((acc,curr)=>{
    // console.log(acc[curr.age])
    if(acc[curr.age] === undefined){
        // console.log("false")
        acc[curr.age] = 1;
    } else if(acc[curr.age]) {
        // console.log("true")
        acc[curr.age] =  ++acc[curr.age];
    }
    return acc;
} , {})

console.log(rVal)

// Array.prototype.myReduce = function (cb , intialValue){
//     for(let i=0;i<this.length;i++){

//     }
// }

// age is less than 30
console.log(users)
// let output = users.filter((val => val.age < 30)).map((x => x.firstName))
// try solving using reduce function
 
let output =  users.reduce((acc,curr)=>{
     if(curr.age < 30){
        acc.push(curr.firstName);
    } 
    return acc;
} , [])

console.log(output);
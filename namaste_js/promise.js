// const github_api = "https://api.github.com/users/champ13ns"

// const user = fetch(github_api)
// user cannot be mutate/changed  it
// promise is a placedholder for a period of time , until it will be filled
// promise is an object representing the eventual completion or failure of an asynchronous operation
 
// console.log(user)

// user.then(function (data){
//     console.log(data)
// })


// creating a promise 

// const cart = ["shoes" , "watches" , "tshirt"];

// const promise = createOrder(cart);
// // console.log(promise);
// promise.then(function (orderId){
//         console.log(orderId )
// }).catch(function (err){
//     console.log(err.message)
// })

createOrder().then((param) => {
    console.log(param);
    return orderRecieved()
}).then((param) => {
    console.log(param)
    return orderShipped()
}).then((param) => {
    console.log(param)
    return orderDelievered()
}).then((param) => {
    console.log(param)
}).catch((err) => {
    console.log(err)
    return orderRecieved()
}).then((param) => {
    console.log(param)
    return orderRecieved()
}).then((err) => {
    console.log(err)
})


function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        resolve(["123" , "456"])   
        // reject(new Error("Promise failed"))
    })
    return pr;
}

function orderRecieved(){
    return new Promise(function (resolve , reject){
        resolve("Order recieved")
    })
}

function orderShipped(){
    return new Promise((resolve,reject) => {
        // resolve("Order Shipped")
        reject("Order cannot be Shipped")
    })
}

function orderDelievered(){
    return new Promise((resolve,reject) => {
        resolve("Order Delievered")
    })
}


// createOrder.then(function cb(arr){
//     console.log(arr);
// })
// .then(function cb(status){
//     console.log(status)
// })

// orderRecieved().then(function cb(param){
//     console.log(param);
//     orderShipped().then(function cb(param){
//         console.log(param);
//     })
// })

// createOrder().then(function cb(param){
//     console.log(param)
//     let promise = orderRecieved()
//     console.log(promise)
// }).then(function cb(param){
//     console.log(param)
// })

// let promise = new Promise((resolve,reject) => {
//     let t = 'abc';
//     if(t === 'abcd'){
//         resolve('Promise 1 resolved');
//     } else {
//         reject('Promise 1 rejected')
//     }
// })

// let promise2 = new Promise((resolve , reject) =>{
//     let t = 'abc';
//     if(t === 'abc'){
//         resolve('Promise 2 resolved');
//     } else {
//         reject('Promise 2 rejected')
//     }
// })

// let promise3 = new Promise((resolve , reject) =>{
//     let t = 'abc';
//     if(t === 'abc'){
//         resolve('Promise 3 resolved');
//     } else {
//         reject('Promise 3 rejected')
//     }
// })

// promise.then(function cb(parameter){
//     console.log(parameter);
//     return promise2
// }).catch(function cb(err){
//     console.log(err)
//     return promise2
// }).then(function cb(param){
//     console.log(param)
// })


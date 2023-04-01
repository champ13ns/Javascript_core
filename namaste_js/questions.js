// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//   console.log('resolve')
// })
// console.log('end')
/*
  start
  end
  resolve
  setTimeout
*/


const promise = new Promise((resolve,reject)=>{
    console.log(1);
    setTimeout(function cb(){
        console.log("timerStart");
        resolve("success");
        console.log('timerEnd')
    },0)
    console.log(2)
})

promise.then((res) => console.log(res))

console.log(4)




//  const timer1 = setTimeout(() => {
//     console.log('timer1');
    
//     const promise1 = Promise.resolve().then(() => {
//       console.log('promise1')
//     })
//   }, 0)
  
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)

// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');

/*
start
end
promise1
timer1
promise2
timer2
*/
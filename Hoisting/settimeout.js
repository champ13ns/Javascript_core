// function x(){
//     let a=1;
//     for(var i=1;i<=5;i++){
//     setTimeout(function cb(){
//         console.log(a);
//         a++;
//     } , 1000)
// }
//     console.log("aljdlf")
// }

// x();

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 + i );
// } 


// function x(){
//     for(let i=1;i<=3;i++){
//         setTimeout(function cb(){
//             console.log(i);
//         } , i * 1000)
//     }
    
// }

// x();


// function outer(){
//     function inner(){
//         console.log(x);
//         // return inner;
//     }
//     let x=10;
//     x=190;
//     return inner;
// }

// outer()();
// var z=outer();
//  console.log(outer());

setTimeout(function a(){
    console.log("first")
} , 5000);

setTimeout(function b(){
    console.log("second")
} , 3000)
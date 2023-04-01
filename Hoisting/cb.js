// // Callback fn in js

// // function x(y){
// //     console.log("X");
// //     y();
// // }

// // x(function y(){
// //     // callback fn 
// //     console.log("Y");
// // }) // y is callback fn


// // setTimeout(function x(){
// //     console.log("Settimeout ")
// // } , 5000)

// // JS is a synchronous and single threaded language
//  //count clicks using CLOSURES

// function outer(){
//     var x=0;
//     return function inner(){
//         x++;
//         console.log("Button clicked ",x," times");
//     }
// }

// var ref_inner = outer();

// document.getElementById('clickMe').addEventListener('click' , outer())

function count_click_outer(){
    let count=0;
    document.getElementById('clickMe').addEventListener('click' , function x(){
      console.log("clicked ",++count," times");
    })

}
count_click_outer();

// // IIFE
// (function immediate())

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 + i);
//   }

// function closure() {
//     let counted = 0;
//     return {
//         count: function () {
//             counted++
//         },
//         getTheCount: function () {
//             console.log( "Counted till " + counted );
//         }
//     };
// }

// const closured = closure();

// closured.count()
// closured.count()
// closured.count()
// closured.count()
// closured.count()
// closured.count()

// closured.getTheCount();

// Outer function
// function adder(a) {
//     // Inner function/Closure
//     function add(b) {
//       console.log(a + b);
//     }
  
//     return add;
//   }
  
//   var add5 = adder(5);
//   var add10 = adder(10);
  
//   add5(10); 
//   add10(10); 


// function upper(){
//     var x=10;
//     function mid(){
//         var y=100;
//         function lower(){
//             var z=20;
//             console.log(x,y,z);
//             // return lower;

//         }
//         lower();
//         // return mid;
//     }
//     mid();
// }

// var ref_mid = upper();
// /*
// closures are used in:
//     Currying
//     Functions run once
//     memoize
//     manatining state in async world
//     setTimeouts
//     Iterators
//     any many more....

// */
// function a(){
//     const x=2;
//     function b(){
//         let y=21;
//         function c(){
//             var z=32;
//             console.log(x,y,z);
//             return 100;
//         }
//         return c;
//     }
//     return b;
// }

// var ref = a()();
// ref();
// console.log(ref());

// function x(){
//     var c=100;
// setTimeout(function(){
//     console.log("lasjdlf")
// } , 2000)
// }

function outest(){
    var c=20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        return inner;
    }
    // let a=100;
    return outer;
    // var b=43;
}
    let a=1000;
outest()("ajsldfj asldfj")();

// Data hiding using Closure
function counter(){
    var count = 0;
    return function setCounter(){
        count++;
        console.log(count);
    }
}

var counter1=counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();

// Disadvantage of closure ->  Excess memory usage , should be handled properly
// Garbage collector -> frees up the unutilized memory


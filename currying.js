//currying
// const add=(a) => {
//     return (b)=>{
//         return (c)=>{
//             return a+b+c
//         }
//     }
// }
// console.log(add(2)(3)(5))


//settimeout
// function x() {
//     var i=1;
//     setTimeout(function() {
//         console.log(i);
//     },3000);
//     console.log("ASPIRE");
// }
// x();


function x() {
    for(let i=1;i<=5;i++) {
    setTimeout(function() {
        console.log(i);
    },i*1000);
}
console.log("ASPIRE");
}
x();

// 1
// 2
// 3
// 4
// 5
// 6

function x() {
    for(var i=1;i<=5;i++) {
        function close(x) {
    setTimeout(function() {
        console.log(i);
    }, x*1000);
}
close(i);
    }
console.log("ASPIRE");
}
x();


//Function statement
a();
b();
function a() {
    console.log("a call");
}

//Function Expression
function b() {
    console.log("b call");
}

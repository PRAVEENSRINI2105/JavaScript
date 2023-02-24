
//Function along with the Lexical scope binding together is called a closure
function x() {
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z();




function a() {
    var x=7;
    function b(){
        console.log(x);
    }
    x = 20;
    return b;
}
var c = a();
console.log(c);
c();
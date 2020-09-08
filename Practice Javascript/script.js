var tinh_tong = function tinh_tong(a,b){
    return a + b;
}
var add = tinh_tong(9,7);
alert("a + b = " + add);


var tinh_hieu = function tinh_hieu(a,b){
    return a - b;
}
var minus = tinh_hieu(9,7);
alert("a - b = " + minus);


var tinh_tich = function tinh_tich(a,b){
    return a * b;
}
var multiply = tinh_tich(9,7);
alert("a * b =" + multiply);


var tinh_thuong = function tinh_thuong(a,b){
    return a / b;
}
var division = tinh_thuong(10,2);
alert("a / b =" + division);


var tinh_du = function tinh_du(a,b){
    return a % b;
}
var modulus = tinh_du(9,7);
alert("a % b = " + modulus);

//The second way
function tong(a,b) {
    return a + b;
}
var kq = tong(100,200);
console.log(kq);

function hieu(a,b) {
    var kq = a - b;
    console.log(kq);
}
hieu(500,100);
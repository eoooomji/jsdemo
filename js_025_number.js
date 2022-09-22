// js_025_number.js

/* 
표준 내장 객체


*/

let data = 10;
let fData = Number(data);
let nObj = new Number(data); // 내장객체, 내부객체
//  Number.prototype.toString = function () {};
console.log(`data=${typeof data}`); // number
console.log(`fData=${typeof fData}`); // number
console.log(`nObj=${typeof nObj}`); // object

// toString() : number, Number > string
console.log(typeof nObj.toString); // string 객체에서 사용하는 메소드는 함수로 뜬다.
console.log(typeof nObj.toString()); // string ()를 붙여주면 string으로 변한다.
console.log(typeof data.toString()); // 원시데이터타입에 '.' 을 붙이면 객체로 변한다.

console.log(data + fData); // number + number = 20;
console.log(data + nObj); // number + object = 20;

// valueof() : object > primitive
// Number(object) > number
console.log(typeof nObj.valueOf()); // number
console.log(typeof new String('javascript').valueOf()); // string

console.log(parseInt('10')); // 10
// parseInt : 실수를 정수로 바꿔줌
// let val = '10';
// let val = '10.0';
// let val = '10.3';
// let val = 'A';
// let val = '10A';
let val = 'A10';
console.log(val + val); // 1010 / 10.010.0 / 10.310.3 / AA / 10A10A / A10A10

// Number(), parseInt()
console.log(Number(val) + Number(val)); // 20 / 20 / 20.6 / NaN / NaN / NaN
console.log(parseInt(val) + parseInt(val)); // 20 / 20 / 20 / NaN / 20 / NaN
console.log(parseFloat(val) + parseFloat(val)); // 20 / 20 / 20.6 / NaN / 20 / NaN

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NaN); // NaN

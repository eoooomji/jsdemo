// js_031_spread_operator.js

// [1] 배열에서의 Spread Operator

// 1. 배열 복사(Array Copy)

let arr1 = [1, 2, 3];
let arr2 = arr1; // 얇은 복사(shallow copy) : 데이터값이 저장된 주소를 복사본이 같이 쓴다.
console.log(`arr1: ${arr1}`); // arr1 : 1,2,3
console.log(`arr2: ${arr2}`); // arr2 : 1,2,3 문자열 처럼 보이지만 배열(object)이다.

arr2.push(4);
console.log(`arr1: ${arr1}`); // arr1 : 1,2,3,4
console.log(`arr2: ${arr2}`); // arr2 : 1,2,3,4

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // 깊은 복사(deep copy)
console.log(`arr3: ${arr3}`); // arr3 : 1,2,3
console.log(`arr4: ${arr4}`); // arr4 : 1,2,3

arr4.push(4);
console.log(`arr3: ${arr3}`); // arr3 : 1,2,3
console.log(`arr4: ${arr4}`); // arr4 : 1,2,3,4

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5); // 10, 20,  1, 2, 3, 40, 50 ]

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7); // [ 1, 5, 6, [ 7, 8 ] ]

// 2. 배열 병합(Array Concatenation)

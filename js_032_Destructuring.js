// js_032_Destructuring.js

/* 

Destructuring (구조 분해 할당) 디스트럭쳐링
: Destructuring(비구조화)은 Structuring(구조화)된 데이터(배열 또는 객체)를 비구조화 하여 개별적으로 변수에 할당하는 개념이다.

*/

// 1. 배열 Desturcturing
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`); // a=5, b=10

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`); // c=5, d=10

let m, n;
[n, m] = [c, d];
console.log(`n=${n}, m=${m}`); // n=5, m=10

let k, p, next;
[k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}`); // k=1
console.log(`p=${p}`); // p=2
console.log(`next=${next}`); // next=3

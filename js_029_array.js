// js_029_array.js

let scores = [100, 90, 100];
console.log(scores); // [100, 90, 100] Array(3)

console.log(scores[0]); // 100
console.log(scores[1]); // 90
console.log(scores[2]); // 100
console.log(scores[3]); // undefined
console.log(scores.length); // 3

let person = ['John', 'Doe', 26, true];
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}
/* result : 
John string
Doe string
26 number
true boolean
*/

let student = ['홍길동', [100, 90, 20]];
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
  console.log(`${idx}`);
}
console.log(student);
/* result :
홍길동 string
[ 100, 90, 20 ] object
*/

let cars = new Array(); // cars = []
let Cars = new Array('Sasb', 'Volvo', 'Bmw'); // cars = []
for (let idx in Cars) {
  console.log(Cars[idx], typeof Cars[idx]);
}
/* result :
Sasb string
Volvo string
Bmw string
*/

let color = [];
console.log(color.length); // 0
color[0] = 'red';
console.log(color.length); // 1
color.push('green');
console.log(color.length); // 2
color.push(759);
console.log(color.length); // 3
color[8] = 'blue';
console.log(color.length); // 9
console.log(color); // [ 'red', 'green', 759, <5 empty items>, 'blue']
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}

// 3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`${point.length}`);

// 2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
console.log(shape.length);
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`);
}

shape[2] = 50; // 추가
console.log(shape[1]); // 요소 가져오기
console.log(shape.length); // 갯수 조회
// shape = [10, 20, 50]
/*
for()
for ~ in : index
for ~ of : element
*/

/* 
[] = 생략이 가능하다는 뜻
forEach() : 배열 전용 메소드
배열.forEach(function(element[, index]){수행할 문장})
*/
shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});

shape.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});

// 문자열은 forEach()를 제공하지 않으므로 사용할 수 없다.
/*
let choice = 'javascript';
choice.forEach(function (element, index) {
  console.log(`${index} : ${element}`); // TypeError: choice.forEach is not a function
});
*/

// 배열.map(callback);
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});
console.log(`res : ${res}`);
console.log(`typeof:${typeof res} ${res instanceof Array} `); // 8, 18, 32, 50

const sqt = numbers.map(Math.sqrt); // Math.sqrt 숫자의 제곱근 출력(리턴,반환)
console.log(`sqt : ${sqt}`); // 2, 3, 4, 5

function getSum(t, n) {
  // total : 누적 num : 요소
  console.log(`t:${t}, n:${n}, t+n:${t + n}`);
  return t + n;
}
// reduce 이전요소와 현재요소와의 관계를 어떻게 만들지 결정하는 메서드
const sum = numbers.reduce(getSum);
console.log(`sum : ${sum}`); // 54

// filter 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 10;
});
console.log(`per : ${per}`);

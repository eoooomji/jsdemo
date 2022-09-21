// js_021_for_in.js

// 배열로 값을 주면 값에 index가 주어진다.
// 배열에 있는 각각의 값을 element라 부른다.
let color = ['red', 'green', 'blue'];
console.log(color[0]); // red
console.log(color[1]); // green
console.log(color[2]); // blue
console.log(color[3]); // undefined

// legth : 요소의 개수 리턴
// legth() : method
// legth : keyword
console.log(color.length); // 3

for (let index = 0; index <= 2; index++) {
  console.log(color[index]);
}

// 배열에 'black' 값 추가
color[3] = 'black';
console.log(color.length); // 4

for (let index = 0; index < color.length; index++) {
  console.log(color[index]);
}

// 객체 리터널 : {propaerty:value, propaerty:value}
// java : element를 가져옴 for(String element : city)
// javascript : index를 가져옴 for(let idx in city){}
let city = ['서울', '부산', '대전'];
for (let idx in city) {
  console.log(city[idx]);
}

let obj = { a: 1, b: 2, c: 3 };
console.log(obj); // { a:1, b:2, c:3}
// console.log(obj[a]);
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

for (let prop in obj) {
  //console.log(prop);
  //console.log(`${prop}:${obj[prop]}`);
  //console.log(obj[prop]);
  console.log(`${prop}:${obj[prop]}`);
  console.log(`${prop}:${obj.prop}`); // a:Undefiend
}

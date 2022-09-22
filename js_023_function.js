// js_023_function.js
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions

/*
  함수(function) : 특정기능을 하는 구문을 독립된 부품으로 만들어 재사용하고자 할 때 사용하는 문법이다.
  전역 변수 : 함수의 외부에서 선언된 변수

  함수 정의
  (1) 함수 선언문
  function 함수명(매개변수) {
    실행문;
    return 값;
  }

  (2) 함수 표현식
  let test = function(매개변수){
    실행문;
    return 값;
  }

  (3) 즉시 실행(익명 함수)
  (function(param){
    console.log(`${param} run~~~`);
  })('test');

*/

let year = 2011;
let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
let yearData = leapYearCheck ? '윤년' : '평년';
if (leapYearCheck) {
  console.log(`${year}은 ${yearData}입니다.`);
}

// 함수 정의
function isLeapYear(year) {
  // year : parameter(매개변수)
  let check;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    check = true;
  } else {
    check = false;
  }
  return check;
}
// 함수 호출
year = 2013;
let result = isLeapYear(year); // year : arguement(인수)
console.log(result);
if (result) {
  console.log(`${year}은 윤년입니다. `);
} else {
  console.log(`${year}은 평년입니다.`);
}

// 함수 정의
function add(a, b) {
  console.log(`a=${a}, b=${b}`);
  return a + b;
}
// 원래는 함수를 정의할 때 숫자를 넣으면 안된다.
function add2(a, b, c) {
  return a + b + c;
}
//함수 호출
console.log(add(2, 3)); // 5
console.log(add2(2, 3, 4)); // 9
console.log(add()); // NaN
console.log(add(1)); // NaN
console.log(add(1, 'script')); // 1script (+ : 산술연산자 혹은 문자와 쓰이면 문자가 연결된다.)
console.log(add(1, null)); // 1
console.log(add(1, 2, 3, 4, 5)); // 3 : script는 유연하다. java나 C에서는 에러가 뜬다.
// console.log(add3()); //ReferenceError: add3 is not defined
add(5, 7);

function hello(name) {
  console.log(`${name}님 환영합니다.`);
}

hello('홍길동');
console.log(hello('고수')); // undefined

console.log(`====================================================`);

// 함수 표현식

// ES5 - 익명 함수
let sum = function (a, b) {
  return a + b;
};

console.log(sum); // [Function: sum]
console.log(sum(10, 20)); // 30

let hap = function (a, b) {
  console.log(a + b);
};
console.log(hap); // [Function: hap]
console.log(hap(10, 30)); // undefined
hap(10, 30); // 40

// ES6 - 화살표 함수
let sub = (a, b) => {
  return a + b;
};
console.log(sub); // [Function: sub]
console.log(sub(3, 5)); // 8

let call = (a, b) => {
  console.log(a + b);
};
console.log(call); // [Function: call]
console.log(call(3, 4)); // undefined
call(3, 4); // 7

// let call2 = (a) => {
//   return a;
// };

// parameter(매개 변수)가 하나일 때 소괄호()는 생략할 수 있다.
// return하는 문장만 실행문에 있으면 중괄호{}와 return을 생략할 수 있다.
let call2 = (a) => a;
console.log(call2); // [Function: call2]
console.log(call2(3)); // 3

let call3 = () => console.log(`로그인 해주세요.`);
console.log(call3); // [Function: call3]
console.log(call3()); // undefined
call3(); // 로그인 해주세요.

console.log(`====================================================`);

// 다양한 함수 구조

// 중첩 함수
function outer(a, b) {
  let result = inner(a, b);
  function inner(a, b) {
    return a + b;
  }
  return result;
}

console.log(outer(10, 3));

// 콜백 함수
// 1. 다른 함수의 인수(arguments)로 사용되는 함수
// 2. 어떤 이벤트에 의해 호출되는 함수 : btn.onclick=function(){}
function callback(a, b) {
  return a + b;
}

function getNumber(callFunc) {
  console.log(`== : ${callFunc}`);
  let result = callFunc(1, 6);
  return result;
}

console.log(getNumber(callback));

// 클로저(closure)
/*
    1) 중첩함수는 outer(외부)함수가 끝나면 외부에서 outer(외부)함수의 자원을 사용할 수 없다.
    2) 클로저는 outer(외부)함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명주기가 종료한 외부함수의 변수를 참조할 수 있다. 이러한 중첩함수가 클로저(closure)이다.
    3) 클로저는 변수가 의도치 않게 변경되지 않도록 안전하게 은닉(information hiding)하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.
*/
function outerFun() {
  let sum = 50;
  function innerFun(a) {
    return sum + a;
  }
  return innerFun;
}
console.log(outerFun()); //[Function: innerFun]

let outerCall = outerFun();
console.log(outerCall); // [Function: innerFun]
console.log(outerCall()); // NaN
console.log(outerCall(4)); // 54
console.log(outerCall(20)); // 70

console.log(`====================================================`);

// 재귀 함수
// 함수는 자기 자신을 호출할 수 있다. 허나, 사용하지 않는 것이 좋다. 메모리의 용량을 많이 차지한다.

function testA() {
  console.log('testA before');
  testB();
  console.log('testA after');
}

function testB() {
  console.log('testB before');
  testC();
  console.log('testB after');
}

function testC() {
  console.log('testC');
}
testA();

console.log(`====================================================`);

function display(a, b) {
  console.log(`a=${a}, b=${b}`);
}

display(1, 2); // a=1 b=2
display(1); // a=1 b=undefined
display(1, 2, 3, 4, 5); // a=1 b=2

console.log(`====================================================`);

// (1) 기본 파라미터(Deault Parameter) : ES6-2015
function display2(a = 0, b = 0) {
  console.log(`a=${a}, b=${b}`);
}

display2(1, 2); // a=1 b=2
display2(1); // a=1 b=0
display2(1, 2, 3, 4, 5); // a=1 b=2

// (2) 나머지 파라미터(Rest Parameter) : ES6-2015
// - 파라미터 갯수를 가변으로 사용할 수 있도록 제공해주는 연산자이다.
// - spread operator(점 3개(...))를 맨 마지막 파라미터로 사용해주면 된다.
// - 단독으로 사용됨.
// - 맨 마지막에 작성 해주어야 한다.
// - 한번만 사용해야 한다.

// spread operator를 단독으로 사용
function display3(...args) {
  console.log(args);
  console.log(typeof args, args instanceof Array);
}

display3(1, 2); // [ 1, 2 ] object true
display3(1); // [ 1 ] object true
display3(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ] object true

// spread operator를 고정 파라미터와 같이 사용할 때는 맨 마지막에 사용
function display4(num, ...args) {
  console.log(num);
  console.log(args);
}

display4(1, 2); // 1 [ 2 ]
display4(1); // 1 []
display4(1, 2, 3, 4, 5); // 1 [ 2, 3, 4, 5 ]

console.log(`====================================================`);

/*
 arguments 객체
 - 함수 안에서만 기본으로 사용할 수 있는 자바스크립트 객체이다.
 - 함수 런타임 시점에 자동으로 생성되는 객체이며, 함수 코드 및 파라미터는 무관하게 자동 생성된다.
 - 함수를 호출할 때 함수로 전달된 실제 인자들의 정보를 담고 있는 객체이다.
 - 함수 선언에서 파라미터로 정의한 변수 갯수보다 실제 함수를 호출할 때 전달하는 인수의 갯수가 다를 수 있는 자바스크립트의 특성을 고려해 만들어진 객체이다.
 - length : 함수에 전달된 인수의 수
*/
function display5() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log(typeof arguments, arguments instanceof Array, arguments.callee);
    console.log(arguments[i]);
  }
}

display5(1, 2);
// display5(1);
// display5(1, 2, 3, 4, 5);

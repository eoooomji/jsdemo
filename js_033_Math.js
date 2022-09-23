// js_033_Math.js

// 최대값
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// 최소값
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// 절대값
console.log(Math.abs(-10)); // 10

// 소수점 반올림 - 자릿수 지정할 수 없음
console.log(Math.round(25.5433)); // 26

// 소수점 올림
console.log(Math.ceil(23.344)); // 24

// 소수점 버림
console.log(Math.floor(23.56)); //23

// 난수 0.0이상 ~ 1.0 미만
console.log(Math.random());

// number - 반올림
console.log((25.523).toFixed(3)); // 25.523
console.log((25.526).toFixed(2)); // 25.53 반올림 되어서 출력
console.log((25.526).toFixed(3)); // 25.526 지정한 숫자까지 출력

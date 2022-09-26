// js_034_Date.js

let date = new Date();
console.log(date); // 2022-09-26T01:10:25.014Z

console.log(date.getFullYear()); // 년도

console.log(date.getMonth() + 1); // 9 월(달) (1월달을 0으로 값을 처리한다. 현재 월을 알기 위해서는 '+ 1'을 해주면 된다.)
console.log(date.getMonth()); // 8

console.log(date.getDate()); // 26 일

console.log(date.getDay()); // 1 요일 (0 : 일요일. 6 : 토요일)

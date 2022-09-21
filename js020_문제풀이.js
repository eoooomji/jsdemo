/*
[문제1]
  num변수의 값이 10의 배수이면 1을 아니면 0을 
   리턴하는 프로그램을 구현하시오.
  [실행결과]
   1 or 0
 */
console.log(`[문제1]`);
/* 내 풀이
let num = -10;
if (num % 10 == 0) {
  console.log(1);
} else {
  console.log(0);
}
*/
console.log(`[문제1:답]`);
let num = 11;
let bit = num % 10 == 0 ? 1 : 0;
console.log(bit);

/*
  [문제2]
1  사과를 담는데 필요한 바구니의 수를 구하는 코드이다. 
2  만일 사과의 수가 123개이고 하나의 바구니에는 10개의 사과를 담을 수 있다면,
   13개의 바구니가 필요하다
   
3  [실행결과]
    필요한 바구니의 수 : 13
 */

console.log(`[문제2]`);
/* 내 풀이
let a = 123;
let b = a / 10;
if (a % 10 == 0) {
  console.log(`필요한 바구니의 수:${b}`);
} else {
  console.log(`필요한 바구니의 수:${b + 1}`);
}
*/
console.log(`[문제2:답]`);
let numOfApple = 123; // 사과의 수
let sizeOfBucket = 10; // 하나의 바구니에 담는 사과수
let numOfBucket; // 필요한 바구니 수

numOfBucket =
  numOfApple % sizeOfBucket == 0
    ? parseInt(numOfApple / sizeOfBucket)
    : parseInt(numOfApple / sizeOfBucket) + 1;
console.log(`필요한 바구니의 수 : ${numOfBucket}`);

/*
  [문제3]
  switch~case문을 이용해서 차량5부제 프로그램을 구현하시오.
  
  1. 차량의 끝번호가 아래에 해당하면 해당 요일은 차량운행을 제한한다.
  
     1,6 = 월요일
     2,7 = 화요일
     3,8 = 수요일
     4,9 = 목요일
     5,0 = 금요일
     
  2. 출력결과
  	   차량번호의 끝자리가 5인 차량은 금요일 운행을 제한합니다.
  
 */

console.log(`[문제3]`);
/*
let car1 = 3;
let car2 = 8;
let d = '';
switch ((car1, car2)) {
  case (1, 6):
    d = '월요일';
    break;
  case (2, 7):
    d = '화요일';
    break;
  case (3, 8):
    d = '수요일';
    break;
  case (4, 9):
    d = '목요일';
    break;
  case (0, 5):
    d = '금요일';
    break;
}

console.log(
  `차량번호 끝자리가 ${car1},${car2}인 차량은 ${d}운행을 제한합니다. `
);
*/

console.log(`[문제3:답]`);
let carNumber = 5;
let day;
switch (carNumber) {
  case 1:
  case 6:
    day = '월요일';
    break;
  case 2:
  case 7:
    day = '화요일';
    break;
  case 3:
  case 8:
    day = '수요일';
    break;
  case 4:
  case 9:
    day = '목요일';
    break;
  case 5:
  case 0:
    day = '금요일';
    break;
}
console.log(
  `차량번호의 끝자리가 ${carNumber}인 차량은 ${day}운행을 제한합니다.`
);

/*
 [문제4] 
  2001부터 2012년사이에서 윤년을 구하시오.
  윤년의 조건
  1) 년도를 4로 나눈 나머지가 0이고 100로 나눈 나머지가 0이 아니다.
  2) 년도를 400로 나눈 나머지가 0이다.
 * 
  [출력결과]
   2004
  2008
  2012
 */

console.log(`[문제4]`);
/*
let year;
for (year = 2001; year <= 2012; year++) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year);
  }
}
*/

console.log(`[문제4:답]`);
// let year = 2012;
for (let year = 2001; year <= 2012; year++) {
  let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  // let yearData = leapYearCheck ? '윤년' : '평년';
  // console.log(`${year}은 ${yearData}입니다.`);
  if (leapYearCheck) {
    console.log(`${year}년`);
  }
}
/*  
 [문제5]
 * 1 10=2x+3y의 해를 구하시오.
 *   x와y의 범위 : 0<=x<=10,  0<=y<=10
 *   
 * 2 출력결과
 *  x=2, y=2
 *  x=5, y=0
 */
/*
console.log(`[문제5]`);
let x, y;
let r;
for (x = 0; x <= 10; x++) {
  for (y = 0; y <= 10; y++) {
    console.log(`x=${x} y=${y}`);
  }
}
*/

console.log(`[문제5:답]`);
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    if (10 == 2 * i + 3 * j) {
      // console.log(`x=${i}, y=${j}`);
      process.stderr.write(`x=${i}, y=${j}\n`);
    }
  }
}

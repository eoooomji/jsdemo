// js_016_if.js

/*
제어문(statement) :  프로그램의 흐름름을 제어할 수 있는 실행문이다.
    1. 조건문 : if~else
    2. 선택문 : swirch~case
    3. 반복문 : for, while, do~while, for~in, for~of
    4. label(임의의 이름을 정의해주어서 사용), continue, break

    조건문 : 조건식의 값이 참인지 아니면 거짓인지에 따라 실행문의 제어가 결정된다.

    [if문] 
    조건식이 만족(true)할 경우에만 실행문을 실행한다.
    
    조건문(if)식 예시)
    
    1.  if 기본 조건식
        if(조건식){
            실행문;
        }

    2.  if~else 조건식
        if(조건식){
            실행문;
        }else{
            실행문;
        };

    3.  여러 조건식이 필요할 때의 조건식
        if(조건식1){
            실행문1;
        }else if(조건식2){
            실행문2;
        }else if(조건식3){
           실행문3;
        }else{
            실행문4;
        }
*/

let data = 0;
if (data == 0) {
  console.log(`program end`);
}

if (10) {
  console.log(`10`);
}

// 숫자 0, ""/'' 빈 문자열, null, undefined, false => false
if (0) {
  console.log(`5`);
}

if (null) {
  console.log(`3`);
}

if (undefined) {
  console.log(`1`);
}

if ('') {
  console.log(`9`);
}

if (false) {
  console.log(`21`);
}

/*------------------------------------*/

let num = 8;
if (num % 2 == 0) {
  console.log(`${num}의 값은 짝수입니다.`);
} else {
  console.log(`${num}의 값은 홀수입니다.`);
}

if (num % 2 == 1) {
  console.log(`${num}의 값은 홀수입니다.`);
} else {
  console.log(`${num}의 값은 짝수입니다.`);
}

/*-------------------------------------*/

// >=이상, <=이하, <미만, >초과 유의해서 코드 작성
let jumsu = 79;
if (jumsu >= 90) {
  console.log(`A`);
} else if (jumsu >= 80) {
  // 90미만 80이상
  console.log(`B`);
} else if (jumsu >= 70) {
  // 80미만 70이상
  console.log(`c`);
} else if (jumsu >= 60) {
  // 70미만 60이상
  console.log(`D`);
} else {
  //60미만
  console.log(`F`);
}

/* 
check 변수의 값이 'D' => D는 대문자입니다.
                 'd' => d는 소문자입니다.
                 그 외 => ? 기타입니다.
*/

// 'A' : 65 'a' : 97, '0' : 48 - 유니코드
let x = 'A';
console.log(x >= 'A' && x <= 'Z');

let y = 'a';
console.log(y >= 'a' && y <= 'z');

let check = 'P';
if (check >= 'A' && check <= 'Z') {
  console.log(`${check}는 대문자입니다.`);
} else if (check >= 'a' && check <= 'z') {
  console.log(`${check}는 소문자입니다.`);
} else {
  console.log(`${check}는 기타입니다.`);
}

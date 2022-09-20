// js_018_for.js

/*
  반복문 - for문
  - 조건식을 만족할 때까지 특정 실행문을 반복해서 실행한다.

  반복문(for)식 예시)

  (1)
  for(초기값; 조건식; 증감식){
    실행문;
  }

  (2) 중첩반복문
  for(초기값; 조건식; 증감식){
    for(초기값; 조건식; 증감식){
      실행문;
    }
  }

  초기식 -> 조건식(true) -> 실행문 -> 증감식
         -> 조건식(true) ->실행문 -> 증감식
         -> 조건식(false) -> 반복문 빠져나감

  continue : 반복문에서 continue를 만나면 조건식으로 이동한다.(if문에서는 증감식을 걸쳐 조건식으로 이동한다.)
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/continue
  
  
  이스케이프 : 프로그램에서 주변 장치를 컨트롤 하기 위해서 사용되는 기능
  이스케이프 종류 : \n : 줄바꿈, \t : 탭, \", \', \b : 백스페이스, \v : 수직탭
  이스케이프 사용법 : preocess.stderr.write(`\n`);
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EA%B5%AC%EB%AC%B8
*/

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

console.log(`=====================`);

// for문에서 조건식을 생략하면 무한루프로 실행된다.
let i, sum;

for (i = 1, sum = 0; ; i++) {
  sum += i;
  if (sum >= 30) break;
}

console.log(`i=${i} sum=${sum}`);

console.log(`=====================`);

/* 
1~10 짝수와 홀수의 합을 구해서 출력하는 프로그램을 구현하세요.
[출력결과]
짝수 : ?
홀수 : ?
*/

let x = 0;
let y = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    x += i;
  } else if (i % 2 == 1) {
    y += i;
  }
}

console.log(`x=${x} 짝수의 합입니다.`);
console.log(`y=${y} 홀수의 합입니다.`);

console.log(`=====================`);

let odd = 0;
let even = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    odd += i;
  } else {
    even += i;
  }
}
console.log(`짝수:${even}`);
console.log(`홀수:${odd}`);

console.log(`=====================`);

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    continue;
    // continue는 값을 출력하지 않고 무조건 값을 조건식으로 이동시킨다.
  }
  console.log(i);
}

console.log(`=====================`);

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    // console.log(`i=${i}, j=${j}`);
    process.stderr.write(`i=${i} j=${j},`);
  }
  process.stderr.write(`\n`);
}

console.log(`=====================`);

// label 정의
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/label
movei: for (let i = 1; i <= 5; i++) {
  for (let j = 10; j <= 13; j++) {
    for (let k = 1; k <= 3; k++) {
      console.log(`i=${i} j=${j} k=${k}`);
      if (k == 2) break movei;
    }
  }
}

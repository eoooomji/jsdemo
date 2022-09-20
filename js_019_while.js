// js_019_while.js

/*
  
  while : 무한으로 값(파일 등)을 가져올 때 사용

  반복문(while)식 예시)

  while(조건식){
    실행문;
  }

  do(
    실행문;
  )while(조건식);

*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log(`=====================`);

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

console.log(`=====================`);

for (let i = 3; i <= 1; i++) {
  console.log(i);
}

let input = 'N';
do {
  console.log(`고객님 주문하시겠습니까?(Y/N)`);
  input = prompt(`입력`);
} while (input == 'N');

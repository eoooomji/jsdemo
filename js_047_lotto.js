// 1. 6개의 난수를 구하고 중복 체크

let lotto = [];
for (let i = 0; i <= 5; i++) {
  // random 0.0 이상 ~ 1.0 미만
  let ran = Math.random() * 45; // 0.0 이상 ~ 45 미만의 값 출력
  ran = Math.floor(ran) + 1;
  //   console.log(ran);
  lotto.push(ran);
  //   console.log(lotto);

  for (j = 0; j < i; j++) {
    if (lotto[j] == lotto[i]) {
      i--;
      break; // i값이 1개 줄어 들고 for문을 빠져나와 위의 for문으로 돌아간다.
    }
  }
}

// 2. 정렬

lotto.sort((a, b) => {
  return a - b; // 오름차순
});

// 3. 출력
// console.log(lotto);

let divList = document.querySelectorAll('div.wrap div');

divList.forEach((e, idx) => {
  e.innerText = lotto[idx];
});

// 45개의 숫자 리스트
window.onload = function () {
  let list = [];
  for (let i = 1; i <= 45; i++) {
    list.push(i);
  }
  console.log(list);

  // 45개의 숫자중 랜덤한 배열에서 배열에 해당하는 숫자를 추출
  let result = [];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * list.length);
    // console.log([index]);
    let num = list[index];
    // console.log(num);
    list.splice(index, 1); // 이해안감
    result.push(num);
  }
  // console.log('결과', result);

  for (let i = 0; i < 6; i++) {
    document.write(result[i]);
  }
};

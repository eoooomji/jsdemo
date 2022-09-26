// js_040_select.js

document.frm.onsubmit = () => {
  let optFruit = document.frm.fruit;
  console.log(optFruit);

  // selectedIndex : 선택된 데이터의 인덱스 값 표출
  //   let optSelect = optFruit.selectedIndex;
  let optSelect = optFruit.selectedIndex + ' ' + optFruit.value;
  console.log(optSelect);

  return false; // 서버로 데이터가 넘어가기 때문에 서버로 안넘어 가게 하기 위해서 false값 입력
};

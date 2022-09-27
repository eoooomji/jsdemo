// js_043_checked.js

let totalCar = document.getElementById('total');
// console.log(totalCar);

let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
// console.log(chbCnt); // NodeList

let myChb = [...chbCnt]; // NodeList를 Array로 변환
// console.log(myChb);

// checkbox에 onclick이벤트가 발생되었을 때 수행될 carCount()를 등록
myChb.map((element) => {
  // console.log(this); // window
  element.onclick = carCount;
});

function carCount() {
  // console.log(this); // this는 현재 이벤트가 발생된 checkbox객체를 나타냄
  console.log(this.id);

  // let basicCar = totalCar.defaultValue; // string
  // defaultValue는 input에 초기에 입력된 value의 값을 기억해 가져온다.
  let basicCar = Number(totalCar.defaultValue); // number

  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });
  totalCar.value = basicCar;
}

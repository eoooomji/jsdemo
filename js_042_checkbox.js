// js042_checkbox.js

// 약관 동의

// 논리값으로 출력 : checked, selected

document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    // ! : 부정의 의미. checked : 체크되어있다면
    alert('약관에 동의해야 합니다.');
    return false;
  }
};

// 전체 선택
document.frm.allCheck.onclick = function () {
  // console.log(this.checked);
  // this : 현재 발생될 객체를 선택할 때 사용
  // document.frm.subject1.checked = this.checked;
  // document.frm.subject2.checked = this.checked;
  // document.frm.subject3.checked = this.checked;
  // let checkgroup = document.querySelector('.checkgroup');
  // querySelector : 객체가 그룹 클래스로 묶여있어도 하나의 객체만 가져옴
  let checkgroup = document.querySelectorAll('.checkgroup');
  console.log(checkgroup.length);

  /* 
  // - Arrow Function
  checkgroup.forEach((element) => {
    // console.log(this);
    // this : checkgroup의 상위 객체인 docunment.frm.allCheck를 의미함
    // <input type="checkbox" name="allCheck" id="allCheck" />
    element.checked = this.checked;
  });
  */

  /////////////////////////////////////////////////////////////////
  let myThis = this; // document.frm.allCheck

  /*
  // - Anonymous Funcion(Callback Function)
  checkgroup.forEach(function (element) {
    console.log(this);
    // this는 Window 객체를 의미함
    element.checked = myThis.checked;
  });
  */

  //////////////////////////////////////////////////////////////////

  // Array.from() : NodeList를 Array로 변환
  console.log(`${checkgroup}`); // [object NodeList]

  let myArray = Array.from(checkgroup);
  console.log(`${myArray}`);
  // [object HTMLInputElement],[object HTMLInputElement],[object HTMLInputElement]

  myArray.map(function (element) {
    // console.log(this);
    element.checked = myThis.checked;
  });
};

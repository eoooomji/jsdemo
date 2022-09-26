// js_035_dom.js

/*
첫번째 방법
let hNode = document.getElementById('selector');
console.log(hNode);
*/

/* 
두번째 방법(옛날 방식)
window.onload = function () {
  let hNode = document.getElementById('selector');
  console.log(hNode);
};
*/

// Element요소의 Id선택자를 선택한다면 getElementById
let hNode = document.getElementById('selector');
console.log(hNode, typeof hNode);

/*
// style태그를 이용한 selector id 선택자 선택 방법
let hId = document.querySelector('#selector');
console.log(hId, typeof hId);

// style태그를 이용한 selector class 선택자 선택 방법
let hClass = document.querySelector('.choice');
console.log(hClass, typeof hClass);
*/

// 여러 요소의 태그를 선택한다면 getElementsByTagName
// HTMLCollection(4)
let pNode = document.getElementsByTagName('p');
console.log(pNode, typeof pNode);
console.log(pNode.length);
console.log(pNode[0], pNode.item(0)); // pNode[] = pNode.item()
console.log(pNode[0].innerText);

// 스크립트에서 스타일을 주고 싶을 때
// 변수 뒤에 꼭 style을 붙이고 코드작성을 해야한다.
pNode[0].style.backgroundColor = 'blue';

function process() {
  alert('dd');
  let fname = document.frm.fname;
  console.log(`fname:`, fname);
  //<input type="text" name="fname" placeholder="이름 입력" />
  console.log(fname.value);
  // value속성을 이용해 작성한 값을 가져온다.
  console.log(fname.defaultValue);
  // document.write(fname);
  // [object HTMLInputElement]
  return false;
}

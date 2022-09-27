// js_045_eventListener.js

let btn = document.querySelector('button');

// btn.onclick = () => {
//   alert('click1');
// };

// btn.onclick = () => {
//   alert('click2');
// };

function click1() {
  alert('click1');
}
function click2() {
  alert('click2');
}

// Node.addEventListener('이벤트', 함수, 이벤트전파)
// 이벤트 전파 => true : capturing, false : bubbling
// 코드 작성 순으로 부모와 자식이 결정된다.
btn.addEventListener('click', click1, false);
btn.addEventListener('click', click2, false);

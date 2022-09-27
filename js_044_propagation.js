// js_044_propagation.js

/*
[1] Event Propagation(이벤트 전파)
• 캡쳐링(capturing phase) : 부모요소에서 Target요소로 이벤트 전파
• 버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파
*/

// capturing : 부모에서 자식으로
// bubbling : 자식에서 부모로

document.querySelector('.red').onclick = (e) => {
  alert('red');
};

document.querySelector('.green').onclick = (e) => {
  alert('green');
  e.stopPropagation();
};

document.querySelector('.blue').onclick = (e) => {
  alert('blue');
  console.log(e);
  e.stopPropagation();
};

document.querySelector('a').onclick = (e) => {
  alert('안녕하세요');
  e.preventDefault();
  return false;
};

// blue 클릭 시 : blue > green > red 로 넘어감

/*
[2] 이벤트 차단
• stopPropagation.ion 
현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지한다. 
전파를 방지해도 이벤트의 기본 동작은 실행되므로, stopPropagation()이 링크나 버튼의 클릭을 막는 것은 아니다.
*/

/*
[3] stopPropagation()과 preventDefault() 비교
• stopPropagation : 이벤트 전파 차단 (return false(jQueryy))
• preventDefault : 디폴트 이벤트 차단 (return false (javascript, jQueryy))
• 참조 사이트 : https://www.w3.org/TR/DOM-Level-3-Events/

*/

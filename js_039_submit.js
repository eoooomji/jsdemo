// js_039_submit.js

// input type="submit" value="login" />

// document.log_f.onsubmit = function() {};
// alert :  확인 버튼을 가지며 메시지를 지정할 수 있는 경고 대화 상자를 띄운다.
// querySelector : 선택자와 일치하는 문서 내 첫 번째 Element를 반환한다. 일치하는 요소가 없으면 null을 반환합니다.
document.log_f.onsubmit = () => {
  let idNode = document.querySelector('#my_id');
  let passNode = document.querySelector('#my_pass');
  if (idNode.value == '') {
    alert('아이디를 입력하세요');
    return false;
  }
  if (passNode.value == '') {
    alert('비밀번호를 입력하세요');
    return false;
  }
};

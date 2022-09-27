// js_041_문제.js

let btn = document.getElementsByTagName('button')[0];
btn.onclick = () => {
  let pNode = document.getElementsByTagName('p')[0];

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hour = today.getHours(); // 24시로 표기됨
  // let hour = today.getHours() - 11; 11을 빼서 오전 오후 시간 나누어서 표기할 수 있음
  let minute = today.getMinutes();
  let second = today.getSeconds();

  pNode.innerText = `${year}-${month}-${date}-${hour}-${minute}-${second}`;
  return false;
};

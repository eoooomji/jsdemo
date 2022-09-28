// js_051_timer.js

function display() {
  for (let i = 0; i <= 5; i++) {
    console.log(`i=${i}`);
  }
}
console.log('start');
// 1000 = 1초
// setTimeout(실행함수, 시간)
setTimeout(display, 1000); // display는 콜백함수. 비동기로 실행된다.
console.log('end');

// 슬라이딩 구현

setInterval(function () {
  let tg = document.querySelector('.slide');
  tg.style.top = '-100%';
  tg.style.transition = '0.6s';
  // 대상의 top값이 -100%로 0.6초동안 transition을 주어 움직이도록 준다.

  setTimeout(function () {
    let first = tg.querySelectorAll('li')[0];
    tg.appendChild(first);
    tg.style.top = '0';
    tg.style.transition = 'none';
    // 대상의 top값이 0으로 변경하고 transition을 없앤다.
  }, 600); // 0.6초
}, 3000); // 3초
/* 
appendChild :  
한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다. 
만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 
appendChild() 메소드는 노드를 현재 위치에서 새로운 위치로 이동시킵니다.
*/

////////////////////////////////////

// 공지사항 및 갤러리 구분

function chgTab(i1, i2) {
  // i1 : class를 넣을 li순번
  // i2 : class를 뺄 li 순번

  let tm = document.querySelectorAll('.tm > li');
  let tc = document.querySelectorAll('.tc > li');

  // 클래스 넣기
  tm[i1].classList.add('on');
  tc[i1].classList.add('on');

  // 클래스 빼기
  tm[i2].classList.remove('on');
  tc[i2].classList.remove('on');
}

/////////////////////////////////////

// 팝업창 닫기

function popup(sts) {
  let pop = document.querySelector('.pop');
  pop.style.display = sts;
}

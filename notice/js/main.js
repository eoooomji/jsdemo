// 첫 번째 배너를 제외하고 숨김

let wrapList = document.querySelectorAll('#roll_banner_wrap dd');
// console.log(wrapList); // NodeList(4) [dd, dd, dd, dd]

// dd 값 숨기기
wrapList.forEach((element, index) => {
  element.style.display = 'none';
});

// 첫 번째 배너 출력
wrapList[0].style.display = 'block';

// 첫 번째 버튼의 <a>를 저장
let onBtn = document.querySelector('#roll_banner_wrap dt a');
console.log(onBtn);

// 1 ~ 4 버튼 클릭 시
let bannerList = document.querySelectorAll('#roll_banner_wrap dt a');
bannerList.forEach((element, index) => {
  // (1). <dd> 모두 감추기
  element.onclick = function () {
    let bannerSub = document.querySelectorAll('#roll_banner_wrap dd');
    // console.log(bannerSub.length); // 4
    bannerSub.forEach((element) => {
      element.style.display = 'none';
    });
    // (2) onBtn의 하위 요소 <img>에 'src'속성을 비활성화 이미지로 변경
    let srcOverOut = onBtn.querySelector('img').getAttribute('src');
    onBtn
      .querySelector('img')
      .setAttribute('src', srcOverOut.replace('over.gif', 'out.gif'));

    // (3) 클릭한 버튼에 해당하는 <dd>배너 요소만 보이기
    bannerSub[index].style.display = 'block';

    // (4) 클릭한 <a>의 하위 <img>에 있는 'src'속성의 값을 활성화 이미지로 변경
    let srcOutOver = element.querySelector('img').getAttribute('src');
    element
      .querySelector('img')
      .setAttribute('src', srcOutOver.replace('out.gif', 'over.gif'));

    // (5) 클릭 이벤트가 발생한 버튼 <a> 변수 onBtn에 할당
    onBtn = element;

    // <a>에 링크를 차단
    return false;
  };
});

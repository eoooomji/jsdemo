// js_036_dom.js

let myNode = document.getElementById('p2');
console.log(`${myNode}, ${myNode.innerText}`);
// <p id="p2">content2</p> 'content

// parentNode
let ptNode = myNode.parentNode;
//<div id="wrap"></div>
console.log(ptNode);

// parentNode: [object HTMLDivElement]
console.log(`parentNode: ${ptNode}`);
ptNode.style.color = 'blue';

////////////////////////////////////

// previousSibling : 앞에 이웃을 가져오기 위한 메서드
let prevNode = myNode.previousSibling;
console.log(`prevNode: ${prevNode}`);
// prevNode: [object Text] : 줄바꿈으로 인한 공백으로 인해 공백을 Text로 인식을 한다.

prevNode = prevNode.previousSibling;
console.log(`prevNode: ${prevNode}, ${prevNode.innerText}`);
// prevNode: [object HTMLParagraphElement], content1

////////////////////////////////////

// nextSibling : 뒤에 이웃을 가져오기 위한 메서드
let nextNode = myNode.nextSibling;
console.log(`nextNode: ${nextNode}`);
// nextNode: [object Text]

nextNode = nextNode.nextSibling;
console.log(`nextNode: ${nextNode}, ${nextNode.innerText}`);
// nextNode: [object HTMLParagraphElement], content3

////////////////////////////////////

// previousElementSibling : 앞에 이웃의 요소를 가져오기 위한 메서드
let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode: ${prevEleNode}, ${prevEleNode.innerText}`);
// prevEleNode: [object HTMLParagraphElement], content1

/////////////////////////////////////

// nextElementSibling : 뒤에 이웃의 요소를 가져오기 위한 메서드
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode: ${nextEleNode}, ${nextEleNode.innerText}`);
// nextEleNode: [object HTMLParagraphElement], content3

//////////////////////////////////////

// childNodes
let divNode = document.getElementById('wrap');
console.log(`divNode: ${divNode}`);
// divNode: [object HTMLDivElement]

let divChildesNode = divNode.childNodes;
console.log(`divChildesNode: ${divChildesNode}`);
// divChildesNode: [object NodeList] NodeList : 전부다 가져온다.
console.log(divChildesNode);
// NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text]

///////////////////////////////////////

// children
let divChildren = divNode.children;
console.log(`divChildren: ${divChildren}`);
// divChildren: [object HTMLCollection] HTMLCollection : 요소만 가져온다.
console.log(divChildren);
// HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]
console.log(divChildren[0]); // <p id="p1">content1</p>
console.log(divChildren.item(0)); // <p id="p1">content1</p>
console.log(divChildren.namedItem('p1')); // <p id="p1">content1</p>

////////////////////////////////////////

// firstChild, first.ElementChild
let pNode = document.getElementById('p4');
let aNode = pNode.firstChild;
console.log(aNode); // #text

aNode = pNode.firstElementChild;
console.log(aNode); // <img src="images/gosu.jpg" alt="영화배우 고수" />

/////////////////////////////

// 객체.getAttribute('속성명'), 객체.setAttribute('속성명',값)
// 객체.속성명, 객체.속성명="값"

// 속성 가져오기
let aAttrNode = aNode.getAttribute('src');
console.log(aAttrNode); // images/gosu.jpg

// src속성명을 입력하여 파일이 위치한 경로를 전부 가져온다.
aAttrNode = aNode.src;
console.log(aAttrNode); // http://127.0.0.1:5500/images/gosu.jpg

// setAttribute('속성명', 속성값);
aNode.setAttribute('title', '스타배우');
console.log(aNode.getAttribute('title')); // 스타배우

// id값을 줄때 변수.id = '속성명';
aNode.id = 'imgGosu';
console.log(aNode.id);

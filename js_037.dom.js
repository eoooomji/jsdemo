// js_037_dom.js

let pNode = document.getElementById('wrap');
console.log(`${pNode.nodeType}, ${pNode.nodeName}, ${pNode.nodeValue}`);
// 1, P, null

let pAttr = pNode.attributes;
console.log(pAttr); // NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

console.log(pAttr[0]); // id="wrap"
console.log(pAttr.id); // id="wrap"
console.log(pAttr.length); // 2
console.log(
  `${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`
); // 2, id, wrap

let pIdAttr = pNode.getAttribute('id');
console.log(pIdAttr); // wrap

let textNode = pNode.firstChild;
console.log(textNode); // "content"

console.log(
  `${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`
); // 3, #text, content

//////////////////////////////////////

// innerText, innerHTML : 요소의 컨텐츠를 가져온다.
// HTML태그는 여러 요소를 가져온다. 배열로 출력이 되니 인덱스 값을 입력해 가져온다.
let bodyNode = document.getElementsByTagName('body')[0];
// innerText : 텍스트 값만 가져온다.
console.log(bodyNode.innerText); // content
// innerHTML : 모든걸 가져온다.
console.log(bodyNode.innerHTML);

///////////////////////////////////////

// value
let fname = document.querySelector('#fname');
console.log(fname.value); // 홍길동

// js_026_string.js

let data = 'It`s alright';
console.log(data);

// length : 문자열의 길이. 띄어쓰기와 같은 공백 또한 포함한다.
console.log(data.length);

/*
  특정 범위의 데이터를 리턴해주는 3가지 메소드
  1. substring(star, end);
  2. substr(start, length);
  3. slice(start, end);
*/

data = 'Apple, Banana, Kiwi';
// Banana 꺼내오기
console.log(`substring: ${data.substring(7, 13)}`); // 7인덱스 부터 13 인덱스 미만
// substring()은 음수값을 지원하지 않는다.
console.log(`substring: ${data.substring(-12, -6)}`);

// Banana
console.log(`substr: ${data.substr(7, 6)}`);
console.log(`substr: ${data.substr(-12, 6)} `);

// Banana
console.log(`slice: ${data.slice(7, 13)}`);
console.log(`slice: ${data.slice(-12, -6)}`);

// replace('찾을 문자열', '바꿀 문자열');
// i : 대소문자 구분없음, g : 모든 문자열
console.log(`replace: ${data.replace('Banana', 'Grape')}`); // replace: Apple, Grape, Kiwi
console.log(data); // Apple, Banana, Kiwi 이유 : replace는 데이터 값을 완전히 바꾸는게 아닌 복사본을 만들어 바꾸는 방식이다.

// 정규 표현식
data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/, 'red')); // Mr Blue has a red house and a blue car
console.log(data.replace(/blue/g, 'red')); // Mr Blue has a red house and a red car
console.log(data.replace(/blue/i, 'red')); // Mr red has a blue house and a blue car
console.log(data.replace(/blue/gi, 'red')); // Mr red has a red house and a red car

data = 'Hello World';
console.log(`toUpperCase() : ${data.toUpperCase()}`); // HELLO WORLD 모두 대문자로 표기
console.log(`toLowerCase() : ${data.toLowerCase()}`); // hello world 모두 소문자로 표기

// concat() : + 와 비슷한 성질. 요소를 합쳐줌
let data2 = 'javascript';
console.log(`concat() : ${data.concat(data2)}`); // Hello Worldjavascript
console.log(`concat() : ${data.concat(' ', data2)}`); // Hello World javascript
console.log(`concat() : ${data.concat('_', data2)}`); // Hello World_javascript

console.log(`charAt() : ${data.charAt(0)}`); // H
console.log(`charAt() : ${data.charCodeAt(0)}`); // 72 (unicode value)

// split() : 문자열을 나눠 준다.
data = 'a,b,c,d,e';
let arr = data.split(',');
for (let i of arr) console.log(i);

// match() : 검색데이터와 일치하는 문자열이 있으면 문자열 모두를 찾아서 배열로 리턴하고 일치하는 문자열이 없으면 null로 리턴한다.
data = 'Mr Blue has a blue house and a blue car';
let res = data.match(/blue/g);
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`); // blue, blue object true
res = data.match(/red/g);
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`); // null object false

// search() : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고 일치하는 문자열이 없으면 -1을 리턴한다.
res = data.search(/blue/g);
console.log(`search() : ${res}`); // 14

res = data.search(/red/g);
console.log(`search() : ${res}`); // -1

// indexOf() : 문자열의 인덱스를 리턴
data = 'Mr Blue has a blue house and a blue car';
console.log(data.indexOf('M')); // 0
console.log(data.indexOf('B')); // 3
console.log(data.indexOf('blue')); // 14

let position = data.indexOf('blue');
console.log(data.indexOf('blue', position + 1)); // 31

data = 'Mr Blue has a blue house and a blue car';
let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf('blue', pos);
  if (pos != -1) console.log(pos); // 14 31
} while (pos != -1);

data = 'Mr Blue has a blue house and a blue car';
for (let i = 0; i < data.length; i++) {
  if (i == data.indexOf('blue')) {
    console.log(data.indexOf('blue', i + 1)); // 31
  }
}

// -1 값이 나오면 그 뒤의 인덱스에 위치한 데이터가 없다는 뜻이다.
data = 'Mr Blue has a blue house and a blue car';
for (let i = 0; i < data.length; i += 1) {
  i = data.indexOf('blue', i);
  if (i == -1) break;
  console.log(i); // 14 31
}

// repeat() : 문자를 반복해서 사용해야 할 때 쓰인다.
let text = 'korea';
console.log(text.repeat(10));

text = '*';
console.log(text.repeat(10));

let text2 = '  korea  ';
console.log(text2.length); // 9

// trim() : 문자열의 양쪽에 위치한 공백을 지워준다.
console.log(text2.trim().length); // 5

let text3 = '   korea  data   ';
console.log(text3.trim().length); // 11 이유 : trim은 문자열 사이의 공백은 지우지 않는다.

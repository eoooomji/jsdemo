// js_030_array,js

const fruits = ['Banana', 'Orane', 'Apple', 'Mango'];
console.log(fruits); // ['Banana', 'Orane', 'Apple', 'Mango']
let data = fruits.toString(); // 배열에 toString값을 주면 String으로 값으로 바뀐다.
console.log(`${data}`); // Banana,Orane,Apple,Mango
console.log(`${typeof data}`); // string

console.log(typeof fruits.join()); // string
console.log(fruits.join()); // Banana,Orane,Apple,Mango
console.log(fruits.join('*')); // Banana*Orane*Apple*Mango
console.log(fruits.join('_')); // Banana_Orane_Apple_Mango

// 배열의 끝에 요소 추가
fruits[4] = 'Kiwi';
console.log(fruits); // [ 'Banana', 'Orane', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits.push('Melon')); // 6
console.log(fruits); // [ 'Banana', 'Orane', 'Apple', 'Mango', 'Kiwi', 'Melon' ]

// 배열의 끝에 요소를 제거
console.log(fruits.pop()); // Melon
console.log(fruits); // [ 'Banana', 'Orane', 'Apple', 'Mango', 'Kiwi' ]

// 배열의 앞에 요소를 추가
console.log(fruits.unshift('Melon')); // 6
console.log(fruits); // [ 'Melon', 'Banana', 'Orane', 'Apple', 'Mango', 'Kiwi' ]

// 배열의 앞에 요소를 제거
console.log(fruits.shift()); // Melon
console.log(fruits); // [ 'Banana', 'Orane', 'Apple', 'Mango', 'Kiwi' ]

delete fruits[3]; // [ 'Banana', 'Orane', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits); // [ 'Banana', 'Orane', 'Apple', <1 empty item>, 'Kiwi' ]
console.log(fruits[3]); // undefined

fruits[3] = 'Mango';
console.log(fruits); // [ 'Banana', 'Orane', 'Apple', 'Mango', 'Kiwi' ]

// 특정 범위의 요소를 가져옴
console.log(fruits.slice(1, 3)); // [ 'Orane', 'Apple' ]
console.log(fruits); // [ 'Banana', 'Orane', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.slice(-4, -2)); // [ 'Orane', 'Apple' ]
console.log(fruits); // [ 'Banana', 'Orane', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.slice(1)); // [ 'Orane', 'Apple', 'Mango', 'Kiwi' ]

// 오름차순 정렬
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orane' ]
console.log(fruits); // [ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orane' ]

// 내림차순 정렬
console.log(fruits.sort().reverse()); // [ 'Orane', 'Mango', 'Kiwi', 'Banana', 'Apple' ]

// javascript에서 sort()는 Tim Sort 알고리즘을 사용한다.
// Tim Sort는 Insertion sort와 Merge Sort를 결합하여 만든 정렬이다.
// Tim Sort 알고리즘 : https://d2.naver.com/helloworld/0315536
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); // [ 1, 10, 100, 40, 5 ]

// 오름차순
// [ 1, 5, 10, 40, 100 ]
console.log(
  point.sort(function (a, b) {
    console.log(`a:${a}, b:${b}, a-b:${a - b}`);
    return a - b;
  })
);

// 내림차순
console.log(
  point.sort(function (a, b) {
    // console.log(`a:${a}, b:${b}, a-b:${a - b}`);
    return b - a;
  })
);

// concat : 다른 두 배열을 합칠 때 사용
let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length); // 6
console.log(zData); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let arr = [1, 3, [[[4, 5]], 6], [7, 8], [[9, 10], 11]];
console.log(arr.flat()); // [ 1, 3, [ [ 4, 5 ] ], 6, 7, 8, [ 9, 10 ], 11 ]
console.log(arr); // [ 1, 3, [ [ [Array] ], 6 ], [ 7, 8 ], [ [ 9, 10 ], 11 ] ]
console.log(arr.flat(0)); // [ 1, 3, [ [ [Array] ], 6 ], [ 7, 8 ], [ [ 9, 10 ], 11 ] ]
console.log(arr.flat(1)); // [ 1, 3, [ [ 4, 5 ] ], 6, 7, 8, [ 9, 10 ], 11 ]
console.log(arr.flat(2)); // [ 1, 3, [ 4, 5 ], 6, 7, 8, 9, 10, 11 ]
console.log(arr.flat(3)); // [1, 3, 4, 5, 6, 7, 8, 9, 10, 11]

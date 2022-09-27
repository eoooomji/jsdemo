// js_047_lotto_prac.js

let list = [];
for (let i = 1; i <= 45; i++) {
  list.push(i);
}
// console.log(list);

// let index = Math.floor(Math.random() * list.length);

// let num = list[index];

// list.splice(index, 1);

// console.log(num, list);
let num = document.querySelector('.wrap');
let lottoNum = num.children;
lottoNum = [...lottoNum];
lottoNum.map((e, idx) => {
  let ran = e.querySelector('div');
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * list.length);
    ran = list[index];
    list.splice(index, 1);
    console.log();
  }
});

// for (let i = 0; i < 6; i++) {
//   let index = Math.floor(Math.random() * list.length);
//   let num = list[index];
//   list.splice(index, 1);
//   console.log(num);
// }

// console.log(...lottoNum);

// lottoNum.map((e) => {
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * list.length);
//     let num = list[index];
//     num = list.splice(index, [i]);
//     console.log(num)
//   }
// });

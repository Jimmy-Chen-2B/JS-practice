// 公元年分非4的倍數，為平年。
// 公元年分為4的倍數但非100的倍數，為閏年。
// 公元年分為100的倍數但非400的倍數，為平年。
// 公元年分為400的倍數為閏年。

// let year = 1900

// if (!(year % 400) || (!(year % 4) && year % 100)) {
//   console.log('是閏年')
// } else {
//   console.log('不是閏年')
// }

// let a = [1, 2, 3, 4]

// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])

// for (let i = 0; i < a.length; i++) {
//   const element = a[i];
//   console.log(element)
// }

// a.unshift('hello')
// console.log(a)

// a.shift()
// console.log(a)

// 九九乘法練習

// for (let i = 1; i < 10; i += 2) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`)
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   if ( i == 4 || i == 6) {
//     continue
//   }
//   console.log(i)
// }

// let item = ['a', 'b', 'c', 'd'];

// for (let i = 0; i < item.length; i++) {
//   console.log(item[i]);
// }

// function c2f(t) {
//   return (9 / 5) * t + 32
// }

// console.log(c2f(85))

//BMI公式 = 體重（公斤）除以身高（公尺）的平方

// function bmiCalculator(height, weight) {
//   let bmi = weight / (height / 100) ** 2
//   return Math.floor(bmi * 10) / 10
// }

// 身高 170 公分、體重 65 公斤
// console.log(bmiCalculator(170, 65))  // 印出 22.4

// const str = "c g y";
// const regex = /[a|b]/g;
// const found = str.match(regex);

// console.log(found);

// const x = 3;
// console.log(typeof typeof x);

// if (x === 'number') {
//   console.log('yes');
// } else {
//   console.log('no');
// }
// console.log(banana);
// let apple = 'yellow'

// console.log(typeof banana);
// var banana = 'yellow';         //undefined

// function test() {
//   console.log(typeof apple);
//   let apple = 'red';
// }

// window = 'hi'
// a = {name: 'Bob'}

// console.log(typeof [1, 2, 3])
// console.log(typeof {})
// console.log(typeof null)
// console.log(a.name)

// 規則：
// // 如果是 3 的倍數，換成 'Fizz'
// // 如果是 5 的倍數，換成 'Buzz'
// // 如果是 3 而且也是 5 的倍數，換成 'FizzBuzz'

// var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (let i = 0; i < list.length; i++) {
//   if (list[i] % 3 == 0 && list[i] % 5 == 0) {
//     list[i] = 'FizzBuzz'
//   } else if (list[i] % 3 == 0) {
//     list[i] = 'Fizz'
//   } else if (list[i] % 5 == 0) {
//     list[i] = 'Buzz'
//   }
// }

// console.log(list);
// 印出 [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

// document.addEventListener("DOMContentLoaded", () => {
//     const btn = document.querySelector("#start-btn");
//     btn.addEventListener("click", () => {
//         setInterval(() => {
//             const sec = document.querySelector("#timer");
//             sec.innerHTML = Number(sec.innerHTML) + 1;
//         }, 1000);
//     });
// });

// -------------------
// Q1
// -------------------
// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// 上面這個迴圈會印出什麼？為什麼？

// -------------------
// Q2
// -------------------
// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());  // 會印出什麼？為什麼？

// -------------------
// Q3
// -------------------

// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);    // 會印出什麼？為什麼？
// console.log(typeof y);    // 會印出什麼？為什麼？

// const lists = [2, 4, 1, 8, 7, 3, 5]

// const result = lists.filter(element => element > 4)
// console.log(result)  // 印出 [ 8, 7, 5 ]

// const lists = [4, 2, 1, 4, 6, 8, 7]

// // let listsTwice = [];
// // for (let i = 0; i < lists.length; i++) {
// //   listsTwice.push(lists[i] * 2)
// // }

// console.log(listsTwice)

// const lists = [4, 2, 1, 4, 6, 8, 7]

// function double(n) {
//   return n * 2
// }

// const listsTwice = lists.map(double)
// const listsTwice = lists.map(element => element * 2)

// console.log(listsTwice)

// const lists = [4, 2, 1, 4, 6, 8, 7]

// const result = lists.map(function(x) {
//   if (x > 3) {
//     return x * 3
//   } else {
//     return x
//  }
// })

// console.log(result)

// // console.log(lists.map((x) => {return x > 3 ? x * 3 : x}))
// let total = 0

// lists.forEach((x) => {
//   total += x
// });

// console.log(total)

// const lists = [4, 2, 1, 4, 6, 8, 7]

// let total = lists.reduce((acc, currentValue) => acc + currentValue)
// console.log(total)

// const lists = [4, 2, 1, 4, 6, 8, 7]

// let greaterThan4 = lists.filter((x) => x > 4)

// let sqTotal = 0;
// greaterThan4.forEach((x) => {
//   sqTotal = sqTotal + (x * x)
// })

// console.log(sqTotal)

// console.log(2 ** 2)

// const heroes = [
//   { name: "悟空", power: 500 },
//   { name: "克林", power: 80 },
//   { name: "達爾", power: 450 },
//   { name: "18號", power: 700 }
// ]

// let topPower = heroes.reduce((max, hero) => {
//   return (max < hero.power ? hero.power : max)
// }, 0)

// console.log(topPower)

// let topPower = heroes.reduce((max, hero) => {
//   let r;
//   if (max > hero.power) {
//     r = max
//   } else {
//     r = hero.power
//   }
//   return r
// }, 0)

// console.log(topPower)

// const lists = [2, 4, 1, 8, 7, 3, 5];

// function greaterThan(n) {
//     return (element) => element > n;
// }

// const result = lists.filter(greaterThan(4));
// console.log(result); // 印出 [ 8, 7, 5 ]

// const heroAction = {
//     greeting: () => {
//         console.log("Hi");
//     },
//     attack: () => {
//         console.log("kicks!");
//     },
// };

// function heroCreator(name, action) {
//     const hero = Object.create(heroAction);

//     hero.name = name;
//     hero.action = action;

//     return hero;
// }

// const h1 = heroCreator("悟空", "龜派氣功");

// h1.attack();
// h1.greeting();

// construct 建構
// constructor 建構的傢伙 建構子
// class Hero {
//     constructor(name, action) {
//         this.name = name;
//         this.action = action;
//     }

//     attack() {
//         console.log(`${this.name}使用絕招${this.action}`);
//     }
// }

// let h = new Hero("悟空", "龜派氣功");
// h.attack(); // 印出 悟空使用絕招龜派氣功

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// const three = 3;

// let a = {
//     foo: "foo",
//     three: three,
// };

// console.log(a.three);

// const Shape = function () {};

// let circle = new Shape();

// console.log(circle.__proto__);

// Q1
// 請說明何謂「抽象類別」

// Q2;

// let r = [
//     [0, 1],
//     [2, 3],
// ].reduce(
//     (acc, cur) => {
//         return acc.concat(cur);
//     },
//     [1, 2]
// );

// console.log(r); //會印出什麼？為什麼？

// Q3
// function getInfo(member, year) {
//     member.name = "Lydia";
//     year = "1998";
// }

// const person = { name: "Sarah" };
// const birthYear = "1997";

// getInfo(person, birthYear);

// console.log(person, birthYear); // 會印出什麼？為什麼？

// Q4
// function sayHi(name) {
//     return `Hi there, ${name}`;
// }

// console.log(sayHi()); // 會印出什麼？為什麼？

const isValidPassword = (password) => {
    // 規則：
    // 1. 密碼至少要 8 個字
    // 2. 密碼裡至少要有 1 個數字以及 1 個大寫英文字母
    // 3. 密碼裡不能有 "password" 字樣
};

console.log(isValidPassword("12345")); // false
console.log(isValidPassword("123passwordxyz")); // false
console.log(isValidPassword("helloworld")); // false
console.log(isValidPassword("Helloworld")); // false
console.log(isValidPassword("helloWorld2")); // true

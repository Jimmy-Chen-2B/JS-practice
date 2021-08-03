// function displayName(firstName, lastName) {
//   if (!firstName && !lastName) {
//     console.log('請輸入名稱')
//   } else if (!lastName) {
//     console.log('Hello Kitty')
//   } else {
//     console.log(`${firstName} ${lastName}`)
//   }
// }

// displayName("Hello", "Kitty")   // 印出 "Hello Kitty"
// displayName("Hello", "天線寶寶") // 印出 "Hello 天線寶寶"
// displayName("Hello")            // 印出 "Hello Kitty"
// displayName()                   // 印出 請輸入名稱

// function c2f(t) {
//   return (9 / 5) * t + 32
// }

// const c2f = t => (9 / 5) * t + 32;

// console.log(c2f(85));

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(funtion() {console.log(i)}, 1);
// }

//Homework

// 檢查傳入的引數是否為某數的平方

// function isSquare(num) {
//     return Number.isInteger(Math.sqrt(num));
// }

// console.log(isSquare(0)); // 印出 true
// console.log(isSquare(4)); // 印出 true
// console.log(isSquare(5)); // 印出 false
// console.log(isSquare(25)); // 印出 true
// console.log(isSquare(26)); // 印出 false

// function printStars(n) {
//     let star = "";
//     for (let i = 0; i < n; i++) {
//         star = star + "*";
//         console.log(star);
//     }
// }

// printStars(6);

// const hi = () => {
//     console.log("Hi");
// };

// setTimeout(function () {
//     console.log("Hi");
// }, 2000);

function printStars(n) {
  for (let i = 1; i <= n; i++) {
    let blank = " ".repeat(n - i);
    let star = "*".repeat(i);
    console.log(blank + star);
  }
}

printStars(5);

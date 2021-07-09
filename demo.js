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

function bmiCalculator(height, weight) {
  let bmi = weight / (height / 100) ** 2
  return Math.floor(bmi * 10) / 10
}

// 身高 170 公分、體重 65 公斤
console.log(bmiCalculator(170, 65))  // 印出 22.4



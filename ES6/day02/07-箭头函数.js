// 箭头函数

// 没有形参 放一个()就可以
// let test = () => {}
// 等同于
// function test() {}

// 只有一个形参 可以省略() 直接设置形参
// let test = a => {}
// 等同于
// function test(a) {}

// 有两个或多个形参 ()不能省略 逗号隔开
// let test = (a, b) => {}
// 等同于
// function test(a, b) {}


// 箭头函数的返回值
// 函数代码块中有多行代码时 我们不能省略{} 
// let test = () => {
//   console.log('Hello World');
//   console.log('Hello ES6');
// }
// test()

// 函数代码块中只有一行代码 该代码为返回操作时 我们可以省略{}和return 
// const test = (num1, num2) => {
//   return num1 + num2
// }
// const test = (num1, num2) => num1 + num2
// console.log(test2(10, 20));


// 函数代码块中只有一行代码 我们可以省略{ } 
// const test = () => {
//   console.log('Hello World');
// }
// const test = () => console.log('Hello World')
// test()

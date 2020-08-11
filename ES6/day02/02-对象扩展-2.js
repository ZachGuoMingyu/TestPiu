// 属性表达式
// let test = 'hello'
// let obj = {
//   username: 'zhangsan',
//   test,
//   // 中括号内的是变量 是可以变化的 获取变量的值，当做属性名
//   [test]:'123'
// }
// console.log(obj);

// 数组里有10个对象，对象内的属性名不一样
// 例如，{username1: hello1},{username2: hello2},{username3: hello3}....

// let arr = []
// for (let i = 1; i < 11; i++) {
//   let obj = {
//     // 字面量定义对象时，可以把表达式放在方括号内
//     ['username'+i]: 'hello' + i
//   }
//   arr.push(obj)
// }
// console.log(arr);

// 获取函数名
function test1() {}
// 通过name属性获取函数名
console.log(test1.name);

// 在person对象中放一个sayName方法
let person = {
  sayName(){
  }
}
// 获取方法名
console.log(person.sayName.name);

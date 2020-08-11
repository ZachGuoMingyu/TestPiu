// 交换变量的值 注意 我们发现 这里不加分号 我们的代码会报错
// 有以下两种情况不加分号会报错小括号开头的前一条语句 和 中方括号开头的前一条语句
// let x = 1, y = 2;
// [x, y] = [y, x];
// console.log(x, y);

// 函数返回多个值
// 返回数据
// function test() {
//   return [1, 2, 3, 4]
// }
// let [a, b, c, d] = test()
// console.log(a,b,c,d);

// 返回对象
// function test() {
//   return {username: 'zhangsan', age: 12}
// }

// let {username, age} = test()
// console.log(username, age);

// 扩展运算符 可以将后面的值展开 可以逆向运算
// let arr = [...'hello']
// console.log(arr);

// ...复制数组 地址不一样
// let arr2 = [1, 2, 3, 4, 5]
// let arr3 = [...arr2]
// // 我们修改一下arr2的值 并不会影响arr3 因为不是同一个地址
// arr2[2] = 100
// console.log(arr2, arr3);
// console.log(arr2 === arr3);

// ...复制对象
let obj = {username: 'zhangsan', age: 12, gender:'男'}
let obj2 = {...obj}
// 修改obj的属性 也不会影响obj2 因为不是同一个地址
obj.username = 'lisi'
console.log(obj, obj2);
console.log(obj === obj2);
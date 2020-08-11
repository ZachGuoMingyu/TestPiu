// function test([a, b]) {
//   console.log(a, b);
// }
// // 当给函数传递参数的时候，我们要先看下形参的格式，再进行参数的传递 当前test函数的形参是数据解构，那么我们传递的参数就要是一个数组 转换过程相当于let [a, b] = [1, 2] 
// test([1, 2])

// 复杂一点
function test([a, b, c = 10, d = 'hello', {username}]) {
  console.log(a, b, c, d, username);  
}
// 我们根据之前的数组解构和对象解构传递参数 不传递显示默认值 没有默认值就是undefined
// test([1, 2, 3, 4, {username:'zhangsan'}])

// 实参传递一个空数组 其他的值是undefined 有默认值的显示默认值 但是报错Cannot read property 'username' of undefined
// test([])

//不传递实参 因为我们没有传参 所以解构的值是undefined 所以会报错undefined是不可迭代的
// test() 


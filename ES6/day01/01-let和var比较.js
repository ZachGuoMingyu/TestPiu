// 我们先输出一个 1 测试一下node环境
// console.log(1);

// // 使用let声明变量和使用var声明变量比较 在代码块里
// {
//   var a = 1
//   // 代码块内的局部变量
//   let b = 2
//   // 只能在代码块中使用let定义的变量
//   console.log(b);
// }

// console.log(a); //使用var定义的a可以在代码块外部获取到，因为变量声明提前
// console.log(b); //因为我们的let是局部变量，所以在代码块外面是获取不到的


// 使用for循环对比
// i可以全局访问 因为变量声明提前
// for(var i=0; i<10; i++){
//   console.log(i);
// }
// console.log('-----',i);

//使用let和上面同理 在代码块外获取不到 
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log('-----', i);

// 在arr中放置5个函数，函数打印数组索引

var arr = []

// 运行函数，打印数组索引 前两个使用var 最后一种情况使用let
// for (var i = 0; i < 5; i++) { 一开始使用var
for(let i=0; i<5; i++){
  // 如果我们使用var来for循环，这种情况我们发现在外界执行函数的时候，所有的打印的索引都为5 这是闭包导致的
  // arr[i] = function () {
  //   console.log(i);
  // }

  // 为了解决闭包问题 我们使用立即执行函数
  // arr[i] = (function (num) {
  //   return function () {
  //     console.log(num);
  //   }
  // })(i)

  // 但是如果我们for循环的条件直接使用let来声明变量，就不会有闭包问题 let声明的变量是没有闭包问题的
  arr[i] = function () {
    console.log(i);
  }
}
arr[0]()
arr[1]()
arr[2]()
arr[3]()
arr[4]()


//以上就是我们let的第一个特性
// let所声明的变量，只在let命令所在的代码块内有效


// 在之前 我们学过很多数组实例的方法 forEach,filter,slice,splice等
// 在ES6中 给我们提供了一些新的数组实例的方法
let arr = [1, 34, 5, 23, 6]

// 找出大于10的第一个数 使用find 返回元素或undefined
let result = arr.find((item) => item > 10)
console.log(result);

// 找出大于10的第一个数所在的位置 findIndex 返回位置或-1
let result2 = arr.findIndex((item) => item > 10)
console.log(result2);

// fill 填充数组
console.log('填充前',arr);
// 使用10来代替数组内的所有元素
arr.fill(10)
console.log('填充后',arr);

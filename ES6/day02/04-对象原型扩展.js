// 以前获取原型对象
// 1.Object.prototype
// 2.obj.__proto__

// 操作原型对象
let obj = {}
// 以前获取原型的方法
// console.log(Object.prototype);
// console.log(obj.__proto__);
// console.log(obj.__proto__ === Object.prototype);

// ES6中获取原型的方法
// console.log(Object.getPrototypeOf(obj));
// 和之前的比较
// console.log(Object.getPrototypeOf(obj) === Object.prototype);

// 我们再用数组来操作一下
// let arr = [1, 2, 3]
// console.log(Object.getPrototypeOf(arr));
// console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 那么以后在ES6中 我们就可以使用Object.getPrototypeOf 来获取原型对象


let arr = [1, 2, 3]
// 打印输出一下数组的slice方法 和数组原型对象中的方法进行一个比较 结果为true 证明这些方法都是从原型对象中获取到的
console.log(arr.slice);
console.log(arr.slice === Array.prototype.slice); //true

// 设置原型对象 Object. setPrototypeOf(obj,prototype)
// 以前
// arr.__proto__ = { test: 'hello' }
// ES6提供的 推荐使用
// Object.setPrototypeOf(arr, {test: 'hello'})

// 设置完以后 我们再来打印一下查看是否有变化
console.log(arr.test);
console.log(arr.slice);
console.log(arr.slice === Array.prototype.slice);

// 对象功能扩展
// // Object.is(value1,value2) 判断value1和value2是否全等
// console.log(Object.is(1, 1)); //true
// console.log(Object.is(1, '1')); //false
// // 对比+0 -0
// console.log(Object.is(+0, -0)); //false
// console.log(+0 === -0); //true
// // 对比NaN NaN 属性是代表非数字值的特殊值
// console.log(Object.is(NaN, NaN)); //true
// console.log(NaN === NaN); //false
// console.log(isNaN(NaN)); //true


// Object.assign(target,o1,o2…) 复制对象
// 将o1,o2,o3...对象中的属性和方法复制到target中
let obj1 = {age: 12}
let obj2 = {age: 14, gender: '男'}
let obj3 = {
  username: 'zhangsan', 
  sayName(){
    console.log('hello');
  }
}

// 将三个对象合并 我们先自己写一个方法来实现
// 调用时
let target = {}
let result = myAssign(target, obj1, obj2, obj3) 
// 输出结果result和target是一样的 因为target使我们传入的 可以直接输入 result的结果是返回的target
console.log(target);
console.log(result);

function myAssign(target, ...temp) {
  // target 目标对象
  // temp 源对象数组
  // 遍历temp数组
  temp.forEach(function (item) {
    // item --> obj1, obj2, obj3
    // 遍历对象 获取对象的属性 添加到目标对象中
    for(let key in item){
      target[key] = item[key]
    }
  })
  return target
}

// 使用Object.assign(target,o1,o2…)
console.log(Object.assign(target, obj1, obj2, obj3));

// 如果后面只有一个对象 那么就是对象的复制
// console.log(Object.assign(target, obj1));



// 对象的复制
// 1.for-in 遍历对象 手动操作
// 2.{...obj}
// Object.assign({}, obj) 传一个参数的时候复制对象

// 对象合并
// 1.遍历数组 获取到对象 for-in遍历对象 手动操作
// 2.Object.assign(target, obj1, obj2, obj3)



// 基本数据类型 string number boolean undefined null
// 引用数据类型 object

// Symbol 数据类型 ES6里新增的数据类型 类似于字符串的数据类型 没有重复的值
let s = Symbol()
let s2 = Symbol()
console.log(typeof s); //Symbol()
console.log(s, s2);
console.log(s === s2); //看起来上面的输出完全一样 但其实是不一样的 

// 新建对象 使用symbol
let obj = {
  // 使用属性名表达式 不仅可以放字符串 也可以放symbol类型的值 当做对象的属性名
  [s]: 'hello',
  [s2]: 'world'
}
console.log(obj);
// 通过属性名去获取数据
console.log(obj[s]);
console.log(obj[s2]);

// 使用symbol时还可以给其添加描述 注意 不是symbol的值 只是描述
let s3 = Symbol('第一个')
let s4 = Symbol('第二个')
console.log(s3, s4);

// 获取symbol的描述信息
console.log(s3.description);


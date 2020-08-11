// 使用数组解构来解构字符串，数值，布尔
// 字符串解构
// 我们可以使用数据解构的方式去解构字符串 那么会把hello 相对应的解构成 h e l l o
// let [a, b, c, d, e] = 'hello'
// 如果后面是number类型 不能使用数组解构的 因为number类型是不能迭代的
// let [a, b, c, d, e] = 123
// console.log(a, b, c, d, e);

// 如果后面是布尔类型的值 也是不能使用数组解构的 因为布尔类型也是不可迭代的
// let [a] = true
// console.log(a);

// 使用对象解构来解构字符串，数值，布尔
// 对象解构 解构字符串 如果我们使用对象解构来解构字符串 那么会将字符串转换成String()构造器类型 那么String()的一些属性和对象方法我们就可以使用了 length 正则里的match() split()切割成数据 charAt() substring() trim()等
// 使用length属性 字符串长度 其他的大家自己试一下
// let {length} = 'hello'
// console.log(length);

// let {trim} = 'hello'
// console.log(trim);
// // 这里的trim方法和我们String()包装器中的原型中的trim方法是一样的
// console.log(trim === String.prototype.trim);


// 使用对象解构number 
// let {valueOf} = 123
// console.log(valueOf);
// console.log(valueOf === Number.prototype.valueOf);

// 使用对象解构布尔类型
let {toString} = true
console.log(toString)
console.log(toString === Boolean.prototype.toString)

// string number boolean 基本数据类型 没有属性和方法只有值
// 在调用基本数据类型string number boolean的属性或者方法的时候，会隐式的将基本数据类型转换成包装器数据类型String,Number,Boolean对象

// str是基本数据类型
let str = 'hello'
// 可以使用str去调用一些属性和方法 这个时候str就会转换成包装器数据类型 这样就可以使用原型中的一些属性和方法
str.length  
String(str).length //包装过程 隐式操作 不需要我们去操作
str.trim()
String(str).trim() //包装过程 隐式操作 不需要我们去操作






// 声明变量使用let 声明常量使用const

// 将来不会发生改变的值 我们使用const来声明 使用const声明以后，也不允许常量再发生改变
// 在声明的时候需要立即初始化赋值 否则会报错
const PI = 3.14
// 那我们就改变一下PI的值 我们发现会报错 如果我们需要后期修改这个值 那就使用let来声明
// PI = 100
console.log(PI);

// 其他特性和let相同
// 代码块有效，不存在变量提升，暂时性死区，不可重复声明
// 导入第三方库 uniq 当引入第三方库的时候要放到最上面
let uniq = require('uniq')

// 将其他模块汇集到主模块
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

// 执行module1中的foo
module1.foo()

// 执行module2的方法
module2()

// 执行module3的foo方法 输出test
module3.foo()
console.log(module3.test); //输出玩查看结果 回到module3中新建一个数组 回来使用uniq

// 使用uniq 拿到数组 可以对数组进行一个排序 但是是根据编码排序的
let result = uniq(module3.arr)
console.log(result);

// 以上就是commonjs 我们 基于node的使用
// 形参没有默认值的函数 返回所有形参的个数
// function test(a, b, c) {}

// 形参有默认值的函数 函数的length属性，将返回没有指定默认值的参数个数
// function test(a, b, c = 1) {}

// 形参有默认值的函数 但是它不是函数的尾参数 那么它返回的参数个数是有默认值形参之前的个数 后面的形参个数获取不到
function test(a, b = 1, c) {}

// 获取函数名称
console.log(test.name);
// 获取形参个数
console.log(test.length);
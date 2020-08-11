// exports.xxx = value  这种写法可以写多个 后面的不会覆盖前面的
exports.foo = function () {
  console.log('foo() module3');
}

// 不断的往exports中添加
exports.test = 'test'

exports.arr = [5, 2, 2, 7, 1, 11]

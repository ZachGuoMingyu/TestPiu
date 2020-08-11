// 模块的学习
let a = 1
let obj = { name: 'zhangsan', age: 12 }
let test = () => {
  console.log(1);
}

// 如果其它的js文件想要使用当前js文件里的方法或者变量 那么就需要导出 别的模块导入就可以
// export 后面的 {} 不是对象 而是把要导出的变量写在里面
export { a, obj, test } //导出a, obj, test 可以只导出部分

// export 也可以多次导出
// export { a }
// export { obj }

// export default 默认导出 每一个js文件内 只能有一个 export default导出
// export default 后面的 {} 是对象 export default 后可以直接跟值 export不可以
// 默认导出一个对象
export default {a: 1, b: 2}
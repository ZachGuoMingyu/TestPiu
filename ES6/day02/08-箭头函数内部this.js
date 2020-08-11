// this
console.log(this); //指向当前js的模块对象 每一个js文件是一个模块
let say = () => console.log(this)

say() // 两次打印结果一样 都是指向当前js的模块对象

// 新建一个对象 对象里有say方法
let obj = {
  username:'zhangsan',
  // 属性简写 say: say 上面的say函数
  say,
  // 我们再自己定义个say方法
  objSay(){
    console.log(this);
  },
  //我们使用立即执行函数来看一下this的指向
  objSayLj:(function () {
    console.log(this); //指向global对象
    return () => console.log(this); //指向global对象
  })(),
  // 使用箭头函数实现立即执行函数
  objSayLj2: (() => {
    console.log('---',this); //指向当前js的模块对象
    return () => console.log('---',this); //指向当前js的模块对象
  })(),
}
// 我们调用对象里的say方法 看下this指向是谁 在之前 谁调用了这个方法this指向就是谁 但是在箭头函数中不一样 箭头函数中的this指向的是外部的this 当前的三个this都是指向当前js的模块对象
obj.say()
// 当在对象内部自定定义一个方法 而不引入箭头函数的方法时 我们发现 this指向的就是当前指向它的对象
obj.objSay()
// 在对象内部定义一个立即执行函数 因为立即执行函数不依赖任何东西 而是依赖global对象 所以 this指向了global对象 
obj.objSayLj()
// 在对象内部使用箭头函数定义一个立即执行函数 this指向当前js的模块对象 箭头函数的this是指向箭头函数外部的环境
obj.objSayLj2()
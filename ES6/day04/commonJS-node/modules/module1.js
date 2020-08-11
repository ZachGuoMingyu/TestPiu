// module.exports = value 暴露一个对象

module.exports = {
  msg: 'module1',
  foo(){
    console.log(this.msg);
  }
}

// module.exports这种写法 写在下面的module.exports 会覆盖上面的

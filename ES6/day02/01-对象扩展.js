// 属性扩展 声明对象的时候 可以简写
let age = 12
let gender = '男'
let obj = {
  // 等同于 age:age 注意 必须是同名才可以简写 如果不同名还是之前的写法 age:userage
  age, //等同于age:age
  gender, //等同于 gender:gender
  // 固定的值还是之前的写法
  username:'zhangsan',
  // 方法简写 等同于 sayName:function(){}
  sayName(a, b){
    console.log(this.username);
    console.log(a, b);
  }
}
console.log(obj);
obj.sayName(1, 2)

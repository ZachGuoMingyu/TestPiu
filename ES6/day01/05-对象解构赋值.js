// 对象解构赋值 解构对象 进行赋值 {}
// let { username, age } = { username: 'zhangsan', age: 12 }
// console.log(username, age);

// 我们前面多给一个gender属性 后面的对象里面没有匹配的属性 这时候gender就是 undefined
// let { username, age, gender } = { username: 'zhangsan', age: 12 }
// console.log(username, age, gender);

// 那我们给gender一个值 当后面对象没有匹配的属性时 gender就会输出默认值
// let { username, age, gender = '男' } = { username: 'zhangsan', age: 12 }
// console.log(username, age, gender);

// 如果我们需要给一个属性重命名，那么就使用这种形式 age:userage
// let { username, age: userage, gender = '男' } = { username: 'zhangsan', age: 12 }
// console.log(username, userage, gender);


// 嵌套结构
// 数组里嵌套对象 我们使用数组解构去解构数组 对象解构去解构对象
// let [a, {username}] = ['hello', {username: 'zhangsan'}]
// console.log(a, username);

// 对象里嵌套数组
// let {friends} = {friends:['fairy', 'tom']} //如果我们只解构对象 那么得到的就是friends数组[ 'fairy', 'tom' ]

let { friends:[a, b] } = { friends: ['fairy', 'tom'] } //在数组的基础上继续解构 a,b就对应数组里的值
console.log(a, b);
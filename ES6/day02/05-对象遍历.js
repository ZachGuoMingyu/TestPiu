// 对象遍历
let obj = {
  username: 'zhangsan',
  age: 12,
  gender: '女'
}

// Object.keys(obj) 返回对象所有属性名(key)组成的数组
let keys = Object.keys(obj)
console.log(keys);

// Object.values(obj) 返回对象所有属性值(value)组成的数组
let values = Object.values(obj)
console.log(values);

// Object.entries(obj) 返回对象所有键值对组成的数组
let entries = Object.entries(obj)
console.log(entries);

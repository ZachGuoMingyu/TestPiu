// Map集合
let map = new Map()

// 添加元素 set(key, value)
map.set('test', 'hello')
let obj = {name: 'zhangsan'}
map.set(obj, 'world')
// Map { 'test' => 'hello', { name: 'zhangsan' } => 'world' } map结构是一个key值指向一个value值 但是这里的 => 不是箭头函数 是map的一种表现形式

// 这里又放入一个值 但是key值和之前的key值一样 这个时候会覆盖原型的value值 进行更新
// 如果key已经有值，则键值会被更新，否则就新生成该键。
map.set('test', {})

// 获取value值 get(key)
// console.log(map.get('test'));

// 判断key是否存在 has(key)
// console.log(map.has('test'));

// 删除成员
// map.delete('test')

// 清空
// map.clear()

console.log(map);
// 获取元素个数
console.log(map.size);

// map遍历 使用for...of 遍历
// keys() ：返回键名的遍历器
let keys = map.keys()
// values() ：返回键值的遍历器
let values = map.values()
// entries() ：返回键值对的遍历器
let entries = map.entries()
console.log(keys, values, entries);

// 遍历
// keys() 
for (const key of keys) {
  console.log(key);
}

// values 
for (const value of values) {
  console.log(value);
}

// entries 
for (const [index, item] of entries) {
  console.log(index, item);
}

// 使用forEach遍历 set只有forEach的方法 没有其他数组方法 filter等
map.forEach(function (value, key, set) {
  console.log(value, key, set);
}) 


// 高级使用 将对象转成map
let obj2 = {name: 'zhangsan', age: 12, gender: 'male'}
// 在我们之前的对象遍历中我们学过 对象的entries就是一个二维数组 所以我们利用对象的entries来传递
let map2 = new Map(Object.entries(obj2))
console.log(map2);

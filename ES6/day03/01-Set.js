// 创建Set集合实例
// Set中没有重复数据
// 使用构造函数创建Set
let set = new Set()
// 添加数据
set.add(10)
set.add(20)
set.add('hello')
set.add('hello')

// 删除数据
// set.delete(10)

// 清空数据
// set.clear()

// 判断是否有某个元素
// let result = set.has(100)
// console.log(result);
console.log(set);

// set遍历 使用for...of 遍历
// set中没有索引 key和value是一样的
// keys() ：返回键名的遍历器
let keys = set.keys()
// values() ：返回键值的遍历器
let values = set.values()
// entries() ：返回键值对的遍历器
let entries = set.entries()
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
set.forEach(function (value, key, set) {
  console.log(value, key, set);
})

// 获取set的成员个数
console.log(set.size);


// 高级使用 数组的去重复 创建set时传递数组 会对当前数组去重
let arr = [30, 20, 20, 20, 30, 10]
let set2 = new Set(arr)
console.log(set2);

// 将set集合转成数组 使用扩展运算符
let setArr = [...set2]
console.log(setArr);

// 以上可以转换成一行代码
console.log([...new Set(arr)]);



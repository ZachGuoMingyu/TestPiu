// 数组的遍历
let arr = [23, 4, 56, 27]

// keys()
let keys = arr.keys()
// values()
let values = arr.values()
// entries()
let entries = arr.entries()

console.log(keys, values, entries); //打印出来的是数组的遍历器对象

// 使用for...of去遍历迭代器对象
// for...of的使用
var stus = [
  { name: 'nick', age: 18 },
  { name: 'freddy', age: 24 },
  { name: 'mike', age: 26 },
  { name: 'james', age: 34 }
];
for (var item of stus) {
  console.log(item.name, item.age);
}

// keys() keys()遍历器里存放的key
for (const key of keys) {
  console.log(key);
}

// values values遍历器里存放的元素
for (const value of values) {
  console.log(value);
}

// entries entries遍历器里存放的是键值对
for (const [index, item] of entries) {
  console.log(index, item);
}

// 一般这种我们很少使用 我们一般使用多的还是forEach


// includes() 该方法返回一个布尔值，表示某个数组是否包含给定的值
console.log(arr.includes(10));
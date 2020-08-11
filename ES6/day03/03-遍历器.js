// 遍历器/迭代器 主要供for...of去消费
// 之前的set和map 的keys，values，entries 以及数组的keys，values，entries也是迭代器对象 那我们用个set的迭代器对象
let set = new Set([10, 20, 20, 30])
console.log(set)

// 获取到一个遍历器对象 对遍历器进行操作
let values = set.values()
console.log(values);

// 看下values有没有next方法
console.log(values.next);

// 运行next方法 { value: 10, done: false } value是当前的值 done是否完成 false没完成
console.log(values.next()); //{ value: 10, done: false }
console.log(values.next()); //{ value: 20, done: false }
console.log(values.next()); //{ value: 30, done: false }
console.log(values.next()); //{ value: undefined, done: true }

// 我们使用的时候 直接使用for...of方法就可以  没有必要去调next()方法获取
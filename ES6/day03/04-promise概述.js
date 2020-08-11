// 在使用promise之前 我们先用ajax做一个分析 看一下1 2 3 谁先打印出来
$.ajax({
  url:'',
  method: '',
  data:{},
  success(res){
    console.log(1);
  },
  error(error){
    console.log(2);
  }
})
console.log(3);
// 这里面试3先打印出来 然后再打印1或者2 因为ajax内部是一个异步操作 js是自上而下运行的 所以ajax先执行网络请求(延时操作) 并不会阻拦js的执行 js继续往下执行 等ajax执行完毕后 才会输出1或2

// 再举一个例子 要获取年级数据 再根据年级数据获取第一个班级数据
$.ajax({
  url: 'xxx/grade',
  method: 'get',
  data: {},
  success(res) {
    // 加入res.data里面就是年级数组
    // 我们要根据年级id 获取班级数据
    $.ajax({
      url: 'xxx/class',
      method: 'post',
      // 参数
      data: {gradeId: res.data[0].id},
      success(res) {
        // res.data 就是第一个班级数据
        // 我们现在仅仅是请求两个数据 还没有做什么节点插入 就需要嵌套这么多代码 那如果还要根据班级id获取到学生数据呢？ 那这个嵌套是不是就越来越多 这种套娃我们是不推荐的 不易阅读也不易修改
      },
      error(error) {}
    })
  },
  error(error) {
    console.log(error);
  }
})

// 为了解决这种问题 ES6给我们提供了几个异步编程解决方案
// Promise 最基础的 掌握
// Generator函数 高级的 以Promise为基础  了解
// async函数 比Generator函数还要高级 以Promise为基础  了解

// 在vue中 我们会使用一个基于promise的网络工具 axios 内部封装了promise和http
// 先给大家演示一下这个东西的基本使用

// async 异步操作 直接使用这个关键字就可以 await 等待一下 等待这个网络请求执行完毕把结果返回给res 下面我们就可以拿到之前的数据进行操作了
async function test() {
  let res = await axios.get('xxxx/grade')
  let grades = await axios.get('xxxx/class',{params:{gradeId:res.data[0].id}})
  // let class = await...... 下面有多少请求 就这样继续往下写就可以 
}

// 接下来我们就看一下Promise的基本使用 知道了Promise

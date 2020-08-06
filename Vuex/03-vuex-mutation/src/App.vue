<template>
  <div id="app">
    <h2>--------------------Vuex基本使用-------------------------------</h2>
    <p>{{count}}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>--------------------mutation相关信息-------------------------</h2>
    <!-- 每次点击按钮的时候 上面的count  count+5 或 +10 这个时候我们该怎么实现呢？ -->
    <!-- 我们定义一个方法 addCount() 通过传递的参数来决定加几 -->
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <!-- 提交一个学生信息 我们一点击这个按钮 就向我们state中的students数组中添加一个学生 在下面methods中实现-->
    <!-- 添加学生之前 先把所有的学生信息都展示一下 -->
    <h2>{{$store.state.students}}</h2>
    <button @click="addStudent">添加学生</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  computed: {
    count(){
      // 通过this.$store.state.属性的方式来访问状态
      return this.$store.state.count
    },
  },
  methods: {
    increment(){
      // 通过this.$store.commit('mutation中方法')来修改状态
      // 通过mutation更新，commit里面的参数就是 事件类型
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },
    // 讲完状态更新 开始讲传递参数 回到 上面 开始+5方法的实现
    // 实现addCount()方法 1.先去mutation去定义一个方法 2.回来实现addCount
    // motation传递参数
    addCount(count){
      // 第一个参数 是我们的事件类型 第二个参数 我们称之为payload 载荷 是传给mutation->addCount的参数
      this.$store.commit('addCount', count)
    },
    // 假如我们有多个参数需要通过commit传递到mutation中呢？(回到上面 添加按钮 点击按钮添加一个学生)
    // 如果添加一个学生 我们需要传递一个对象
    addStudent(){
      const stu = {id: 5, name: 'zhangsan', age: 38}
      // this.$store.commit('addStudent', stu)
      // mutation提交风格 上面的是我们的普通提交风格
      // 2.特殊的提交风格
      this.$store.commit({
        // type就是对应的事件类型 就是我们在mutation中定义的名字
        type: 'addStudent',
        // ES6语法把参数传递进来 这个时候 我们在mutation中的参数就不一样了 要通过payload.stu去获取
        // stu:stu,
        stu
      })

    }
  },
}
</script>

<style>

</style>

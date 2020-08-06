<template>
  <div id="app">
    <h2>--------------------Vuex基本使用-------------------------------</h2>
    <p>{{count}}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>--------------------getters相关信息-------------------------</h2>
    <!-- 平方 按照我们以前的方式，可以这么取，但是其他组件在使用的时候 是不是还得这样写一遍 所以我们不这么做 可以导入HelloWorld组件 两个对比一下-->
    <!-- <h2>{{$store.state.count * $store.state.count}}</h2> -->

    <!-- 使用getters求平方 -->
    <h2>平方为：{{$store.getters.squareCount}}</h2>

    <!-- 先通过计算属性演示 筛选出年龄大于20岁的学生 看下面计算属性 这样做 如果我们在其他的vue组件里也需要筛选 那是不是要把我们的计算属性也给拷贝过去 拿HelloWorld举例子-->
    <!-- <h2>年龄大于20岁的学生有：{{more20Student}}</h2> -->

    <!-- 所以我们还是在getters中定义好 其他的组件通过getters拿来用就可以了 -->
    <h2>年龄大于20岁的学生有：{{$store.getters.more20Student}}</h2>

    <!-- 获取大于20岁学生的个数 -->
    <h2>年龄大于20岁的学生有：{{$store.getters.more20StudentCount}}个</h2>

    <!-- 获取大于age的学生 当前moreAgeStudent是一个计算属性 这个计算属性返回一个函数 所以$store.getters.moreAgeStudent当前就是这个函数 那我们执行这个函数的话 就是$store.getters.moreAgeStudent() 那这个函数是不是还需要一个参数 我们把参数传递进去就可以了$store.getters.moreAgeStudent(10)  -->
    <h2>{{$store.getters.moreAgeStudent(10)}}</h2>

    <h2>--------------------Hello Vuex-------------------------</h2>
    <HelloWorld/>
  </div>
</template>

<script>

// 引入HelloWorld组件
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // 注册组件
    HelloWorld
  },
  computed: {
    count(){
      // 通过this.$store.state.属性的方式来访问状态
      return this.$store.state.count
    },
    // 筛选年龄大于20岁的学生
    more20Student(){
      return this.$store.state.students.filter(s => s.age > 20)
    },
    
  },
  methods: {
    
    increment(){
      // 通过this.$store.commit('mutation中方法')来修改状态
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    }
  },
}
</script>

<style>

</style>

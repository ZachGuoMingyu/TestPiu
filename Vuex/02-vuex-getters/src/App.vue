<template>
  <div id="app">
    <h2>--------------------Vuex基本使用-------------------------------</h2>
    <p>{{count}}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>--------------------getters相关信息-------------------------</h2>
    <!-- 平方 按照我们以前的方式，可以这么取，但是其他组件再使用的时候 是不是还得这样写一遍 所以我们不这么做-->
    <!-- <h2>{{$store.state.count * $store.state.count}}</h2> -->
    <!-- 使用getters求平方 -->
    <h2>{{$store.getters.squareCount}}</h2>
    <!-- 先通过计算属性演示 筛选出年龄大于20岁的学生 看下面计算属性 这样做 如果我们在其他的vue组件里也需要筛选 那是不是要把我们的计算属性也给拷贝过去 拿HelloWorld举例子-->
    <!-- <h2>{{more20Student}}</h2> -->
    <!-- 所以我们还是在getters中定义好 其他的组件通过getters拿来用就可以了 -->
    <h2>{{$store.getters.more20Student}}</h2>
    <!-- 获取大于20岁学生的个数 -->
    <h2>{{$store.getters.more20StudentCount}}</h2>
    <!-- 获取大于age的学生 -->
    <h2>{{$store.getters.moreAgeStudent(10)}}</h2>
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

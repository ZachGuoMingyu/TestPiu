<template>
  <div id="app">
    <h2>--------------------Vuex基本使用-------------------------------</h2>
    <p>{{count}}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>--------------------actions相关信息-------------------------</h2>
    
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
      // 我们现在mutations中进行延时操作来看一下 为什么异步操作要放到actions中
      // 我们发现 devtools监测到的数据和我们实际的count不符 那么我们将延时操作放到actions中去处理
      // this.$store.commit('increment')

      // 去actions里新建方法
      // 使用action 这里我们要使用dispatch 可以回到ppt看之前的图 参数也是把我们action中的方法名传进去就可以
      // this.$store.dispatch('actionIncrement')
      // 传递payload
      this.$store.dispatch('actionIncrement',{count: 5})

      // 模拟网络操作 因为网络操作我们放在actions中实现 那么在外界传递参数是不现实的 所以我们在外面调用actions中的方法 actions中的方法内部也可以传递参数 也就是拿到请求数据后进行传递
      this.$store.dispatch('simulateNetWork')

    },
    decrement(){
      this.$store.commit('decrement')
    },
  },
}
</script>

<style>

</style>

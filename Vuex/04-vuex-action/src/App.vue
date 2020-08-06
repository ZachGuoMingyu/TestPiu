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
      // 使用action 这里我们要使用dispatch 可以回到ppt看之前的图 参数也是把我们action中的方法名传进去就可以
      this.$store.dispatch('actionIncrement')
      // 传递payload
      // this.$store.dispatch('actionIncrement',{count: 5})
    },
    decrement(){
      this.$store.commit('decrement')
    },
  },
}
</script>

<style>

</style>

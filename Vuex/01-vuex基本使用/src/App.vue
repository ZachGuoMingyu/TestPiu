<template>
  <div id="app">
    <p>{{count}}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
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
    }
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

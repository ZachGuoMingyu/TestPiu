<template>
  <div id="app">
    <!-- 可以直接通过$store.state.count拿到Vuex中state中的count -->
    <!-- <p>{{$store.state.count}}</p> -->
    <!-- 也可以通过计算属性来获取 -->
    <h2>----App的内容----</h2>
    <p>{{count}}</p>

    <!-- 可以在组件中使用state的count以后 我们还要实现加和减的方法 那我们怎么实现呢 -->
    <!-- 我们这里面可以直接通过$store.state.count++来实现点击方法 但是我们不推荐这么做 -->
    <!-- <button @click="$store.state.count++">+1</button> -->

    <!-- 那我们定义两个点击方法 看看在方法中我们怎么实现才可以满足我们的需求 去methods中 -->
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <!-- 这个计数器实现完毕以后再去HelloWorld中使用 -->
    <!--  使用HelloWorld组件 我们发现 在HelloWorld组件内通过Vuex拿到count 并且count是响应式的-->
    <h2>----Hello Vuex的内容----</h2>
    <HelloWorld />
  </div>
</template>

<script>

// 引入HelloWorld组件 引入后注册 演示一下使用vuex后在多个界面共享状态 也就是共享变量 count
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // 注册HelloWorld组件
    HelloWorld
  },
  computed: {
    count(){
      // 通过this.$store.state.属性 的方式来访问状态
      return this.$store.state.count
    }
  },
  methods: {
    
    increment(){
      // 以前我们怎么实现count++呢 直接在方法中使用this.count++即可 但是我们发现 我们现在用的count是保存在Vuex中的 而且还不推荐我们直接修改state中的属性 那么怎么做呢 ？ 用mutations来处理
      // 去vuex中处理mutations 然后再回来使用
      // 那我们怎么提交到mutations中进行操作呢
      // 通过this.$store.commit('mutation中方法')来修改状态
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    }
    // 那我们再在HelloWorld组件中 使用一下Vuex中的count 
  },
}
</script>

<style>

</style>

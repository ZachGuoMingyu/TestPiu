<template>
  <div id="app">

    <h2>--------------------Modules相关信息-------------------------</h2>
    <!-- 拿到Modules中a模块的内容 那么有的同学会有疑问了？ state里面哪有a a在Modules里 我们来到浏览器 通过vue工具查看 Base State结构 发现 a和b还是存在state中的 那就是Modules会把a b 放到state中 这样我们就可以通过a.name 直接拿到name了 -->
    <!-- a模块中的name -->
    <h2>{{$store.state.a.name}}</h2>

    <!-- 那我们再来看下mutations中的操作 改怎么处理呢 去mutations中模块A给一个新的方法-->
    <!-- 新建按钮 执行updateName方法-->
    <button @click="updateName">修改名字</button>

    <!-- 那么我们再看一下模块中的getters getters中定义的 我们也是和以前一样 直接使用 -->
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>

    <!-- 那再看一下actions怎么处理 -->
    <button @click="asyncUpdateName">异步修改名字</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  
  methods: {
    // 修改姓名
    updateName(){
      // 现在我们的updateName方法在a模块的mutations中 那我们怎么提交呢？
      // 还是直接commit的 Vuex中我们是统一处理的 但是要注意 mutations中的方法名
      // 注意 在其他模块中不要有重复的方法名 否则会一起执行
      this.$store.commit('updateName', 'lisi')
    },
    // 异步修改名字
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  },
}
</script>

<style>

</style>

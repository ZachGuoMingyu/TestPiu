<template>
  <div id="app">
    <!-- router-link 是vuerouter内置的组件 可以在全局使用 -->
    <!-- 这个到routerlink补充的时候再说 -->
    <!-- tag 设置什么标签 它就会以什么标签显示 -->
    <!-- reolace replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中 -->

    <!--1. 通过router-link进行跳转 -->
    <!-- <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about">关于</router-link> -->

    <!-- router-view不要忘记 -->
    <!-- <router-view></router-view> -->

    <!-- router-view 是vuerouter内置的组件 可以在全局使用 决定我们渲染出来的home和about组件的内容显示在什么位置 router-view放在哪 我们的路由就在哪显示-->

    <!-- 2.通过我们的代码去控制跳转 -->
    <button @click="homeBtn">首页</button>
    <button @click="aboutBtn">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  methods: {
    homeBtn(){
      // console.log('homeClick');
      // 通过代码的方式修改路由
      // $router 来源于我们安装的vuerouter插件，它会默认的在我们的所有组件里都添加一个$router属性，我们可以通过它的push或replace去实现我们路由的跳转
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutBtn(){
      // console.log('aboutClick');
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  },
}
</script>

<style>

</style>

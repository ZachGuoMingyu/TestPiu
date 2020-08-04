<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 我们怎么去拼接一个完整的user路径呢？ 去路由中配置动态路由拼接userID -->
    <!-- <router-link to="/user/123">用户</router-link> -->
    <!-- :to="'/user/'+userId" -->
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: '123456'
    }
  },
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

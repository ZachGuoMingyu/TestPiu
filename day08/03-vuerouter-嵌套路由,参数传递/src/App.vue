<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>

    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- 1.通过router-link传递参数 -->
    <!-- <router-link 
      :to="{
        //通过params 路由后拼接
        path: '/profile/' + 123,
        //通过query
        query: {name: 'zach', age:18}
      }"
    >档案</router-link> -->

    <!-- 如果只想通过query传递参数 去路由中把后面拼接的id去掉-->
    <!-- <router-link :to="{path:'/profile',query: {name: 'zach', age:18}}">跳转</router-link> -->

    <!-- 只想通过params传递参数 上面user -->

    <!-- 2.通过点击按钮传递参数 -->
    <button @click="toProfile">档案</button>
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
    toProfile(){
      this.$router.push({
        //通过params
        path: '/profile/' + 123,
        //通过query
        query: {name: 'zach', age:18}
      })

      // 只想通过query传参 去路由中把id去掉
      // this.$router.push({ path: '/profile', query: {name: 'zach', age:18}})

      // 补充 命名路由传参 需要给路由设置name属性 需要去掉id
      // this.$router.push({ name: 'profile', params: { height: 1.88 }})
    }
  },
}
</script>

<style>

</style>

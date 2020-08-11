<template>
  <div>
    <h2>我是用户的标题</h2>
    <p>我是用户的内容</p>
    <!-- 怎么获取到传递过来的userId呢？ -->
    <!-- 可以使用计算属性 -->
    <h2>{{userId}}</h2>
    <!-- 可以直接使用插值表达式 -->
    <h2>{{$route.params.userId}}</h2>
    
    
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
    };
  },
  computed: {
    userId(){
      // 要区分开$router和$route的区别
      // $route 当前哪一个路由处于活跃状态 它就代表哪一个路由
      // params 是一个参数 可以拿到之前动态路由传递过来的参数
      // 动态路由也是传递参数的一种方式
      return this.$route.params.userId
    }
  },
};
</script>
<style scoped>
</style>
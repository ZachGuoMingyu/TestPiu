<template>
  <div class="home">
    <h2>我是首页的标题</h2>
    <p>我是首页的内容</p>
    <!-- 嵌套路由的子路由 to后面的路径要全写 -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    };
  },
};
</script>
<style scoped>

</style>
<template>
  <div class="home">
    <router-view></router-view>
    <!-- 通过router-link来配置路由跳转 -->
    <!-- <div>
      <router-link to="/home/index">首页</router-link>
      <router-link to="/home/order">订单</router-link>
      <router-link to="/home/user">我的</router-link>
    </div> -->

    <!-- 使用vant组件 配置底部导航栏 配置路由 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home/index">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/home/order">订单</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/home/user">用户</van-tabbar-item>
    </van-tabbar>

    <!-- 配置完以后 我们去处理首页 -->
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<template>
  <div class="user">
    <!-- 我的界面头部 -->
    <div class="header">
      <!-- 头像 -->
      <div class="header_top">
        <!-- 动态绑定src设置头像 -->
        <img :src="infoAva" alt />
      </div>
      <!-- 设置用户名 -->
      <div class="header_bottom">
        你好
        <span style="color:coral;">{{userName}}</span>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <!-- 基础组件 cell单元格 如果要做页面跳转 比如说 加上url="/home/money" 自己创建页面 自己去配置路由 做跳转 -->
      <van-cell icon="shop-o" title="账户余额" is-link />
      <van-cell icon="shop-o" title="常用地址" is-link />
      <van-cell icon="shop-o" title="我的评论" is-link />
      <van-cell icon="phone-o" title="联系我们" is-link />
    </div>
    <van-button type="default" round block @click="toLogOut">退出</van-button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // 获取到用户信息
    ...mapState("login", ["userInfo","userName","infoId","infoAva"]),
  },
  methods: {
    // 退出
    toLogOut() {
      this.$router.push({ path: "/login" });
      // 退出把localStorage清空
      localStorage.clear()
    },
  },
};
</script>

<style scoped>
/* 头部样式 */
.header {
  width: 100%;
  height: 250px;
  /* background-color: pink; */
  overflow: hidden;
}
/* 头像区域样式 */
.header_top {
  margin: 0 auto;
  margin-top: 50px;
  width: 80px;
  height: 80px;
}
/* 头像样式 */
.header_top img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
/* 头部下方样式 */
.header_bottom {
  width: 180px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 10px;
  line-height: 40px;
  margin-top: 10px;
}
/* 中部区域样式 */
.content {
  margin-bottom: 20px;
}
</style>
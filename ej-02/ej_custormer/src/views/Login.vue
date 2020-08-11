<template>
  <div class="login">
    <!-- 头部 -->
    <div class="header">
      <!-- 头部logo样式 -->
      <div class="header_logo">家</div>
      <!-- 头部标题 -->
      <div class="header_title">
        <span>家政服务云平台</span>
        <span>顾客端</span>
      </div>
    </div>

    <!-- 登录部分 -->
    <div class="login">
      <!-- 去vant组件中 找到输入框 找到合适的 表单 基础用法 js部分也拷贝进来-->
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <!-- type换成default 内容换成登录 -->
          <van-button round block type="default" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// 导入辅助行数
import {mapState,mapActions} from 'vuex'
export default {
  // 登录界面配置完毕后 去vuex 配置 新建modules文件夹 在里面新建login.js 然后去index.js 中进行配置
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    // 使用辅助函数
    ...mapActions('login',['login']),
    onSubmit(values) {
      // 提交的时候调用登录方法
      // 整理参数
      let params = {
        username: this.username,
        password: this.password,
        // type固定 这个单词要写customer
        type: 'customer'
      }
      this.login(params)
      // 登录以后我们进行处理
      .then(r => {
        this.$router.push({path:'/home/index'})
      })
      // 处理完这里以后我们去home.vue 去配置底部导航
    },
  },
};
</script>

<style scoped>
/* 头部样式 */
.header {
  width: 100%;
  height: 250px;
  background-color: rgb(27, 91, 158);
  /* 防止外边距合并 */
  overflow: hidden;
}
/* 头部logo样式 */
.header_logo {
  width: 70px;
  height: 70px;
  border: 1px solid #fff;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  line-height: 70px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border-radius: 50%;
}
/* 头部标题样式 */
.header_title {
  text-align: center;
  margin-top: 10px;
}
/* 第一个span */
.header_title span:first-child {
  font-size: 25px;
  color: #fff;
  margin-right: 10px;
}
/* 第二个span */
.header_title span:last-child {
  font-size: 20px;
  color: #fff;
}
</style>
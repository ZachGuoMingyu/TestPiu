<template>
  <!-- 先去配置路由 -->
  <div class="custormerDetail">
    <!-- 使用element 图标按钮 设置plain size="mini" -->
    <el-button type="primary" icon="el-icon-arrow-left" @click="backToCustomer" size="mini" plain>顾客详情</el-button>
    <!-- 切换区域 -->
    <div class="tab">
      <!-- 去组件库中找el-tab组件 activeName也拷贝进来 把方法也拷贝进来 -->
      <!-- 加入stretch属性 可以设置统一分配tabs控件 -->
      <el-tabs stretch v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <!-- 用户头像 -->
          <div class="avatar">
            <!-- 头像地址使用我们接口的url拼接上图片的数据 -->
            <img class="avatarImg" :src="custormerDetail.imgPhoto" alt="" />
          </div>
          <!-- 用户姓名 -->
          <div class="userName">{{custormerDetail.realname}}</div>
          <!-- 说说 -->
          <div class="shuoshuo">海纳百川，有容乃大</div>
          <!-- 联系方式 -->
          <div class="tel">联系电话:{{custormerDetail.telephone}}</div>
          <!-- 状态 -->
          <div class="status">状态:{{custormerDetail.status}}</div>
          <!-- 地址 -->
          <div class="address">所在城市:{{custormerDetail.province + custormerDetail.city}}</div>
        </el-tab-pane>
        <el-tab-pane label="订单信息" name="second">
          <!-- 订单信息接口 订单管理中的 分页查询订单信息 -->
          <!-- 先找个表格放在这里 -->
          <!-- {{orderData}} -->
          <!-- 日期过滤器 -->
          <h2>{{orderData[0].orderTime | dateParse}}</h2>
          
          <!-- 数据拿到了 大家根据之前的做法自己完善这一个部分 下面服务地址一样 -->
        </el-tab-pane>
        <el-tab-pane label="服务地址" name="third">
          <!-- 服务地址接口 地址管理相关接口 通过顾客ID查询地址信息-->
          {{addressData}}
        </el-tab-pane>
      </el-tabs>
    </div>
    
  </div>
</template>

<script>
  // 导入辅助函数
  import { mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        // 进入界面后默认显示的位置
        activeName: 'first'
      }
    },
    created() {
      // 方法自执行
      this.loadCustormerDetail()
    },
    computed: {
      // 导入辅助函数 此时custormerDetail就是用户详细信息
      ...mapState('custormer',['custormerDetail','orderData','addressData'])
    },
    methods: {
      ...mapActions('custormer',['findCustomerById','findOrderByCustormerId','findAddressById']),
      // 加载顾客的详细信息
      loadCustormerDetail(){
        this.findCustomerById(this.$route.query.id)
        this.findOrderByCustormerId(this.$route.query.id)
        this.findAddressById(this.$route.query.id)
      },
      // 点击标签页时触发的方法
      handleClick(tab, event) {
        console.log(tab, event);
      },
      // 返回上一级路由
      backToCustomer(){
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>
/* 配置custormerDetail样式 直接去前面拷贝一下就可以 */
.custormerDetail{
  width: 99%;
  /* vh:相对于视框的高度：视框高度是100vh */
  min-height: calc(100vh - 70px);
  background-color: #fff;
  padding: 10px;
  overflow: hidden;
}
/* 设置返回按钮样式 */
.el-icon-back{
  color: rgb(57, 157, 254);
}
/* 头像样式 */
.avatar{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: gainsboro;
  /* 居中显示 */
  margin: 0 auto;
}
/* 用户头像图片 */
.avatar .avatarImg{
  width: 130px;
  height: 130px;
  margin: 10px 0 0 10px;
  border-radius: 50%;
}
/* 用户姓名 */
.userName{
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-top: 5px;
}
/* 说说样式 */
.shuoshuo{
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
}
/* 联系电话，状态，地址样式 */
.tel,.status,.address{
  text-align: center;
  margin-top:10px;
}
</style>
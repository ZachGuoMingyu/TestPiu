<template>
  <div class="index">
    <!-- vant插件安装 可按可不按 -->
    <!-- 吸顶效果 -->
    <van-sticky :offset-top="0">
      <!-- 首页顶部轮播图 -->
      <div class="header_swipper">
        <!-- 去组建库中找一个轮播图插件 展示组件 swipe -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../../assets/home.jpg" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/home1.jpg" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    </van-sticky>

    <!-- 栏目区域 -->
    <div class="category">
      <!-- 去组建库中寻找合适的组件 导航组件 宫格grid -->
      <van-grid :column-num="3">
        <!-- 没有拿到数据之前 是value in 5 动态绑定icon可以拿到数据中的icon 动态绑定拿到name  -->
        <!-- 给栏目绑定点击事件 跳转到详情界面 先去路由中配置详情页-->
        <!-- 这里的方法我们要进行参数传递 我们点击哪个进入哪个的详情 这里我们要加上index-->
        <!-- 我们要把当前点击的id 和 index全部传递 拿到id的作用是当我们点击进入详情页面的时候 要确保侧边菜单栏使我们点击的栏目 而且还要根据id拿到当前栏目的详情 -->
        <van-grid-item @click="toDetails(value.id, index)" v-for="(value, index) in fiveCategory" :key="value.id" :icon="value.icon" :text="value.name" />
        <!-- 因为原型图中 最后一个栏目有一个徽标提示 所以最后一个我们自己定义 去徽标提示中拷贝一个 上面的改成5个就可以了 -->
        <van-grid-item icon="home-o" text="文字" badge="更多" />
      </van-grid>
    </div>
    <!-- 配置完以后 开始获取栏目数据 -->

    <!-- 产品区域 -->
    <div class="product">
      <!-- 去vant组件库中找 宫格 有一个自定义内容 -->
      <van-grid :border="false" :column-num="3">
        <!-- 拿到产品的数据后开始处理 -->
        <van-grid-item v-for="item in fourProduct" :key="item.id">
          <!-- 显示图片 动态绑定src -->
          <van-image :src="item.photo" />
          <div style="margin-top:15px">{{item.name}}</div>
        </van-grid-item>
      </van-grid>
      <!-- 点击跳转大家自己实现 -->
      <!-- 接着去实现我的页面 -->
    </div>
  </div>
</template>

<script>
// 导入辅助函数
import { mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    created() {
      // 获取栏目自执行
      this.loadCategory()
      // 获取产品自执行
      this.loadProduct()
    },
    computed: {
      ...mapState('index',['fiveCategory', 'fourProduct'])
      // 拿到数据以后 去上面遍历
    },
    methods: {
      // 使用辅助函数
      ...mapActions('index',['toLoadCategory','toLoadProduct']),
      // 先去vuex中新建index.js
      // 查询产品
      loadProduct(){
        // 获取所需参数
        let params = {
          page: 0,
          pageSize: 4
        }
        this.toLoadProduct(params)
      },
      // 查询栏目 让他在created中自执行
      loadCategory(){
        // 获取所需参数
        let params = {
          page: 0,
          // 我们展示五条就可以
          pageSize: 5
        }
        this.toLoadCategory(params)
      },

      // 跳转到详情页
      toDetails(id, index){
        this.$router.push({path:'/home/details', query:{id: id, index: index}})
        // 然后去details中去处理
        // 接着可以去详情页中写了
      }
    },
  }
</script>

<style scoped>
/* 头部轮播图样式 */
.header_swipper{
  width: 100%;
  height: 250px;
  /* background-color: gray; */
}
/* 设置轮播图图片样式 */
.header_swipper img{
  width: 100%;
  height: 250px;
}
</style>
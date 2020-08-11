<template>
  <div class="details">
    <!-- 吸顶效果 -->
    <van-sticky :offset-top="0">
      <!-- 头部返回 -->
      <van-nav-bar title="详情" left-text="返回" left-arrow @click-left="toHomeList" />
    </van-sticky>
    <!-- 去vant组件库中找合适我们的布局 layout 基础用法 -->
    <van-row>
      <!-- 这是一个栅格布局方式 总共有24列 我们可以根据需求自行分割 -->
      <!-- 侧边导航区域 -->
      <van-col span="4">
        <!-- 去组件库中找一个侧边导航 导航组件 侧边导航 基础用法 js代码也拷贝过来 完事以后渲染数据 查询所有的栏目 因为查询所有栏目的接口有问题 所以我们还是使用分页查询所有栏目 pageSize给传个100 实际上应该使用查询所有 现在有问题 大家先用分页查询 -->
        <van-sidebar v-model="activeKey">
          <!-- 拿到数据以后进行绑定 但是我们发现 无论哪个栏目点击进来都是相同的结构 那么我们回到index.vue中进行处理 -->
          <!-- 新增toLoadProduct(item.id)方法  去下面处理 点击侧边栏 展示对应的信息 -->
          <van-sidebar-item @click="toLoadProduct(item.id)" v-for="item in allCategory" :key="item.id" :title="item.name" />
        </van-sidebar>
      </van-col>
      <!-- 解决van-card宽度太宽 -->
      <van-col span="2"></van-col>
      <!-- 产品详情 -->
      <van-col span="18">
        <!-- 去vue组件库中 业务组件 商品卡片 基础用法 -->
        <!-- 处理完全部数据后 开始绑定所有数据 -->
        <!-- 但是我们发现value绑定有问题 是不是一一对应绑定就可以了 -->
        <!-- 计算总价部分 稍后完善 -->
        <!-- 因为数据比较少 所有 arr 和 product大家可以自己选择 也可以选择去使用外卖那个接口 -->
        <!-- 为了处理总价 这里我们循环加上index -->
        <van-card v-for="(c, index) in arr" :key="c.id"
          :num="c.number"
          :price="c.price"
          :desc="c.description"
          :title="c.name"
          :thumb="c.photo"
        >
          <!-- 还有一个计数器 再去vant中找 自定义内容 -->
          <!-- 拷贝过来以后再去找一个步进器 表单组件 步进器 把里面的按钮替换成步进器 value也拷贝过来-->
          <!-- 再将上面的num和value绑定 -->
          <!-- van-card是一个单标签 打开 放到内部 -->
          <!-- 但是我们发现没有根据栏目id查询产品信息 那我们只能利用现有接口来处理 先去侧边导航区域给 van-sidebar-item加一个点击方法-->
          <template #footer>
            <!-- 自己加一个c.number 也就是每一个item新增一个number属性 这样就不会一个改变全部都变了 和 上面的num 对应 -->
            <!-- 处理总价的时候 给van-stepper加上@change 改变时触发 min设置最小数量 -->
            <van-stepper @change="change(c.number,c.price,index)" :min="0" v-model="c.number" />
          </template>
        </van-card>
      </van-col>
    </van-row>

    <!-- 计算总价区域 -->
    <div class="totalPrice">
      <van-row>
        <van-col span="12">
          金额:{{allTotal}}
        </van-col>
        <van-col span="7"></van-col>
        <van-col span="5">立即下单</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
// 导入辅助函数
import {mapActions, mapState} from 'vuex'
  export default {
    data() {
      return {
        // 因为activeKey是控制默认显示在第几个的 所以我们要对它进行一个设置 去loadAllCategory方法中设置
        activeKey: 0,
        value: 1,
        // 产品
        arr:[],
        // 每一件商品的价格数组
        total:[],
        // 总金额
        allTotal:0
      }
    },
    created() {
      // 自执行
      this.loadAllCategory()
    },
    computed: {
      ...mapState('details',['allCategory','productData'])
    },
    methods: {
      ...mapActions('details',['toLoadCategory','toLoadPc']),
      // 获取栏目
      loadAllCategory(){
        let params = {
          page: 0,
          pageSize: 100
        }
        this.toLoadCategory(params)
        // 设置activeKey 根据之前跳转的栏目 来准确定位到这个栏目
        .then(r=>{
          this.activeKey = this.$route.query.index
        })
      },
      // 根据id 配合查询所有产品接口 来进行筛选
      toLoadProduct(id){
        this.toLoadPc()
        // 我们传递过来的id就是栏目id
        // 拿到所有数据以后 我们可以根据栏目id进行一个过滤 categoryId
        let arr = this.productData.filter((item)=>{
          return id == item.categoryId
        })
        // arr 就是通过栏目过滤出来的产品
        this.arr = arr
        // 拿到数据以后 我们去van-card进行遍历
      },
      // 根据栏目加载产品 
      loadProduct(){
        // this.$route.query.id 因为没有根据栏目id获取对应的产品 我们大概处理一下就可以
      },
      // 计算总价
      change(number, price, index){
        // 通过索引来将每一件商品的价格存进total数组中 也就是我们点击的是哪个商品 我们是可以获取到其index的 当它的价格发生变化 我们就给它存到数组中 此时总价的索引便是商品的索引
        this.total[index] = Number(number * price)
        // 没触发一次我们要置零 否则每一次都会累加 
        this.allTotal = 0
        // 计算总价
        this.total.forEach((item, index)=>{
          this.allTotal = this.allTotal + item
        })
      },
      // 先新建vuex
      // 返回首页 返回上一级路由
      toHomeList() {
        this.$router.go(-1);
      },
    },
  }
</script>

<style scoped>
/* 计算总价区域样式 */
.totalPrice{
  width: 100%;
  height: 100px;
  background-color: #aaa;
  position: fixed;
  bottom: 0;
  padding-top: 10px;
  box-sizing: border-box;
  color: white;
}
</style>
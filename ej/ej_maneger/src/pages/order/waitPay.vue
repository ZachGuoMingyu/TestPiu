<template>
  <div>
    <!-- 我们可以在这里写表格 处理全部订单的信息 -->
    <!-- 然后通过Vuex拿到对应的state和actions -->
    <div>待支付订单</div>
    {{waitPayOrder}}
    <!-- 数据有了 我们再创建一个待支付组件 -->
  </div>
</template>

<script>
// 引入辅助函数
import { mapState,mapActions } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    created() {
      // 自执行
      this.loadAllOrder()
    },
    computed: {
      ...mapState('order',['waitPayOrder'])
    },
    methods: {
      ...mapActions('order',['toLoadWaitPayOrder']),
      // 获取全部订单
      loadAllOrder(){
        // 获取全部订单 我们不需要传入状态 参数
        // 分页大家自己处理
        let params = {
          page: 0,
          pageSize: 10,
          // 待支付我们就要传递参数了
          status: '待支付'
        }
        this.toLoadWaitPayOrder(params)
        // 然后去index.vue中引入并使用waitOrder组件
      }
    },
    
  }
</script>

<style scoped>

</style>
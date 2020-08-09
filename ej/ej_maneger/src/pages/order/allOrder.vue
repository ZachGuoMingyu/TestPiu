<template>
  <div>
    <!-- 我们可以在这里写表格 处理全部订单的信息 -->
    <!-- 然后通过Vuex拿到对应的state和actions -->
    <!-- <div>全部订单</div>
    {{allOrder}} -->
    <!-- 数据有了 我们再创建一个待支付组件 -->

    <!-- 去custormer中复制一个表格结构过来 -->
    <div class="custormer_table">
      <el-table :data="allOrder.list" style="width: 100%" size="small">
        <!-- 编号 -->
        <el-table-column prop="id" label="编号" align="center" width="180"></el-table-column>
        <!-- 下单时间 -->
        <el-table-column label="下单时间" align="center" width="180">
          <template slot-scope="scope">
            {{scope.row.orderTime | dateParse}}
          </template>
        </el-table-column>
        <!-- 总价 -->
        <el-table-column prop="total" label="总价" align="center"></el-table-column>
        <!-- 状态 -->
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <!-- 顾客id -->
        <el-table-column prop="customerId" label="顾客id" align="center"></el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <span class="setSpan">详情{{scope.row.id}}</span>
          </template>
        </el-table-column>
      </el-table> 

      <!-- 其他的界面是不是把这个结构放进去就可以了？ 是的 剩下的大家自己去操作 熟悉这个流程 -->
    </div>
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
      ...mapState('order',['allOrder'])
    },
    methods: {
      ...mapActions('order',['toLoadAllOrder']),
      // 获取全部订单
      loadAllOrder(){
        // 获取全部订单 我们不需要传入状态 参数
        // 分页大家自己处理
        let params = {
          page: 0,
          pageSize: 10
        }
        this.toLoadAllOrder(params)
        // 然后去index.vue中引入并使用allOrder组件
      }
    },
    
  }
</script>

<style scoped>

</style>
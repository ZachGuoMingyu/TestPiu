<template>
	<div class="comment">
		<!-- 评论管理title -->
    <div class="comment_title">评论管理</div>

		<!-- 表格区域 -->
    <div class="comment_table">
      <el-table :data="comment.list" style="width: 100%" size="small">
        <!-- 给prop赋值的时候 先去在data中声明一个数组 来接收辅助函数custormer 然后根据字段名进行赋值 -->
        <!-- 编号 -->
        <el-table-column prop="id" label="编号" align="center" width="180"></el-table-column>
        <!-- 评论内容 -->
        <el-table-column prop="content" label="评论内容" align="center" width="180"></el-table-column>
        <!-- 评论时间 -->
        <el-table-column label="评论时间" align="center">
					<template slot-scope="scope">
            {{scope.row.commentTime | dateParse}}
          </template>
				</el-table-column>
				<!-- 产品id -->
				<el-table-column prop="orderId" label="订单id" align="center"></el-table-column>
        <!-- 状态 -->
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
						<!-- 删除大家自己去实现 -->
            <span class="setSpan" @click="toDetails(scope.row)">删除</span>
						<!-- 我们主要来讲审核 -->
            <span v-if="scope.row.status == '审核不通过'" class="setSpan" @click="toPassChangeStatus(scope.row.id)">通过</span>
            <span v-if="scope.row.status == '审核通过'" class="setSpan">拒绝</span>
						<!-- 如果是未审核 那么就要加一个通过 或 拒绝 -->
						<span v-if="scope.row.status == '未审核'" class="setSpan">
							<!-- 同样的 直接把通过审核的放在这里就可以 -->
							<span @click="toPassChangeStatus(scope.row.id)">通过</span>
							<!-- 拒绝审核大家自己完成 然后再去app端讲解 首页点击等-->
							<span>拒绝</span>
						</span>
          </template>
        </el-table-column>
      </el-table> 
    </div>

	</div>
</template>

<script>
// 引入辅助函数
import {mapActions, mapState} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		created() {
			// 自执行
			this.loadComment()
		},
		computed: {
			...mapState('comment',['comment'])
		},
		methods: {
			...mapActions('comment',['toLoadComment', 'toPassStatus']),
			// 获取评论信息
			loadComment(){
				// 配置参数
				let params = {
					page: 0,
					pageSize: 100
				}
				this.toLoadComment(params)
			},

			// 审核通过
			toPassChangeStatus(id){
				this.toPassStatus(id).then(r => {
					this.loadComment()
				})
			}
		},

	}
</script>

<style scoped>
	/* 设置整体样式 */
.comment {
  width: 99%;
  /* vh:相对于视框的高度：视框高度是100vh */
  min-height: calc(100vh - 70px);
  background-color: #fff;
  padding: 10px;
  overflow: hidden;
}
/* 设置标题样式 */
.comment_title {
  border-bottom: 1px solid;
  padding-bottom: 10px;
}

/* 设置表格区域样式 */
.comment_table {
  max-height: 500px;
  overflow: auto;
  width: 100%;
  margin-bottom: 10px;
}
/* 设置操作span样式 */
.setSpan{
  color: rgb(92, 174, 252);
  cursor: pointer;
}
</style>
<template>
	<div>
		<!-- 需要用到的接口 订单管理 分页查询订单信息 -->
		<!-- 但是如果我们在这里做的话 代码会很多 我们可以把这里封装成一个组件 来到order文件夹下 新建一个allOrder组件 -->
		<el-tabs v-model="activeName">
			<el-tab-pane label="所有订单" name="allOrder">
				<!-- 使用所有订单组件 -->
				<allOrder></allOrder>
			</el-tab-pane>
			<el-tab-pane label="待支付" name="waitPay">
				<!-- 使用待支付组件 -->
				<waitPay></waitPay>
			</el-tab-pane>
			<el-tab-pane label="待派单" name="waitPd"></el-tab-pane>
			<el-tab-pane label="待接单" name="waitJd"></el-tab-pane>
			<el-tab-pane label="待服务" name="waitServer"></el-tab-pane>
			<el-tab-pane label="待确认" name="waitConfirm"></el-tab-pane>
			<el-tab-pane label="已完成" name="complete"></el-tab-pane>

		</el-tabs>
	</div>
</template>

<script>
// 引入全部订单组件
import allOrder from '@/pages/order/allOrder'
// 引入待支付组件
import waitPay from '@/pages/order/waitPay'
	export default {
		// 注册组件
		components:{
			// 全部订单组件
			allOrder,
			// 待支付组件
			waitPay
		},
		data() {
			return {
				activeName: 'allOrder'	
			}
		},
		methods: {
			// 我们可以利用这个接口 根据状态去查询 也就是发送七次请求 其实是六次 所有订单不用传状态 根据接口去讲解一下
			// 去新建属于order的vuex 然后做异步操作 拿到数据
			load(){
				// 在这里调用
				// 。。。
			},


			handleClick(tab, event){

			}
		},
	}
</script>

<style scoped>

</style>
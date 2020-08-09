// 既然我们要处理网络请求 那么就需要引入axios 去http下的axios.js进行配置
// @ 以根目录的方式定义相对路径 这里的@ 相当于src
import axios from '@/http/axios'

export default {
  // vuex中的store分模块管理，需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
  namespaced: true,
  state: {
    // 所有订单信息
    allOrder:[],
    // 待支付订单
    waitPayOrder:[],
    // ...
  },
  getters: {},
  mutations: {
    // 全部订单数据
    getAllOrder(state, data){
      state.allOrder = data
    },
    // 待支付订单
    getWaitPayOrder(state, data) {
      state.waitPayOrder = data
    },
  },
  actions: {
    // 我们可以在这里根据状态 分别去请求对应的信息 然后再对应的组件中调用对应的action就可以了
    // 加载所有订单
    async toLoadAllOrder(context, params){
      let res = await axios.post('/order/queryPage', params)
      // console.log(res.data);
      context.commit('getAllOrder', res.data.data)
      // 回到allOrder中去配置
    },
    // 加载待支付订单
    async toLoadWaitPayOrder(context, params){
      let res = await axios.post('/order/queryPage', params)
      // console.log(res.data);
      context.commit('getWaitPayOrder', res.data.data)
    },
    // ...剩下的大家自己去完善数据和样式
  }
}
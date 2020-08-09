// 既然我们要处理网络请求 那么就需要引入axios 去http下的axios.js进行配置
// @ 以根目录的方式定义相对路径 这里的@ 相当于src
import axios from '@/http/axios'

export default{
  // vuex中的store分模块管理，需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
  namespaced:true,
  state:{
    // 用户信息对象 用来接收用户信息的数组
    custormer:{},
    // 单个删除状态
    deleteData:{},
    // 用户详情基本信息
    custormerDetail:{},
    // 订单信息
    orderData:[],
    // 服务地址
    addressData:[]
  },
  getters:{},
  mutations:{
    // 顾客信息
    setCustormer(state, custormerData){
      // 将请求的数据赋值给state中的custormer 这样 在组件中我们就可以直接使用custormer来获取数据了 回到页面 使用辅助函数拿到custormer
      state.custormer = custormerData
    },
    // 接收删除信息
    deleteData(state, data){
      state.deleteData = data
    },
    // 用户详情基本信息
    custormerDetail(state, data){
      state.custormerDetail = data
    },
    // 获取订单信息
    getOrderData(state, data){
      state.orderData = data
    },
    // 获取服务地址
    getAddress(state, data){
      state.addressData = data
    }
  },
  actions:{
    // 异步操作我们放在actions中来处理
    // 加载顾客信息 因为我们使用了分页 所以接口使用分页查询顾客信息
    async toLoadCustormer(context, params){
      // 分页查询顾客信息 需要参数 所以把params传递进去
      let res = await axios.post('/customer/query', params)
      // 输出验证数据拿没拿到 保存后回到页面中 调用试一下
      // console.log(res.data.data);
      // 将我们拿到的数据传递给mutations mutations改变state中的属性
      context.commit('setCustormer', res.data.data)
    },

    // 删除顾客信息
    async deleteCustermer(context, id) {
      let res = await axios.get('/customer/deleteById?id=' + id)
      // console.log(res.data);
      context.commit('deleteData', res.data)
    },

    // 更新或保存
    async saveCategory(context, params) {
      let res = await axios.post('/customer/saveOrUpdate', params)
    },

    // 通过id查询顾客基本信息
    async findCustomerById(context, params) {
      // 这里通过拼接来处理
      let res = await axios.get('/customer/findCustomerById?id='+params)
      // console.log(res.data.data);
      context.commit('custormerDetail', res.data.data)
    },

    // 获取订单信息
    async findOrderByCustormerId(context, params){
      let res = await axios.get('/order/query?customerId=' + params)
      // console.log('---------',res.data.data);
      context.commit('getOrderData', res.data.data)
    },

    // 获取服务地址
    async findAddressById(context, params){
      let res = await axios.get('address/findByCustomerId?id=' + params)
      console.log('---------',res.data.data);
      context.commit('getAddress', res.data.data)
    }
  }
}
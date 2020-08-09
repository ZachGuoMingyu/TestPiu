// 去index.js中注册
// 既然要使用vuex 那么就要使用axios 接下来去配置axios
// 在src下新建 http文件夹 里面新建axios.js
// 引入axios
// 我们去看下登录接口 参数传递和我们之前不太一样 这里需要我们传递一个json格式的参数 那我们就导入post_json
import { post_json, get, post } from '../../http/axios'

// 设置默认导出
export default {
  // 开启命名空间
  namespaced: true,
  state: {
    // 栏目
    allCategory:[],
    // 产品
    productData:[]
  },
  mutations: {
    // 获取栏目
    getAllCategory(state, data){
      state.allCategory = data
    },
    // 获取产品
    getProduct(state, data){
      state.productData = data
    }
  },
  actions: {
    // 获取栏目 栏目管理 分页查询栏目信息接口 在上面把post引入
    async toLoadCategory(context, params) {
      let res = await post('/category/query', params)
      // console.log(res.data.list);
      context.commit('getAllCategory', res.data.list)
      // 去index.vue中使用
    },

    // 加载所有产品
    async toLoadPc(context, params) {
      let res = await get('/product/findAll')
      // console.log(res.data);
      context.commit('getProduct', res.data)
      // 去details.vue中使用
    },
  }
}
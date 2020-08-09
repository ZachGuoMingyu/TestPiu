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
    // 栏目区域展示数据 栏目的前五条
    fiveCategory:[],
    // 产品区域展示数据 要前四条
    fourProduct:[]
  },
  mutations: {
    // 获取栏目区域展示数据
    getFiveCategory(state, data){
      state.fiveCategory = data
    },
    // 获取产品展示数据
    getFourProduct(state, data){
      state.fourProduct = data
    }
  },
  actions: {
    // 获取栏目 栏目管理 分页查询栏目信息接口 在上面把post引入
    // 其实这里可以直接获取全部的栏目 筛选处理 大家自己下去试一下
    async toLoadCategory(context, params){
      let res = await post('/category/query', params)
      // console.log(res.data.list);
      context.commit('getFiveCategory', res.data.list)
      // 去index.vue中使用
    },

    // 获取产品信息 产品管理 分页查询产品信息接口
    async toLoadProduct(context, params) {
      let res = await post('/product/query', params)
      console.log(res.data.list)
      context.commit('getFourProduct', res.data.list)
      // 去index.vue中使用
    },
  }
}
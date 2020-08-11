// 既然我们要处理网络请求 那么就需要引入axios 去http下的axios.js进行配置
// @ 以根目录的方式定义相对路径 这里的@ 相当于src
import axios from '@/http/axios'

export default {
  // vuex中的store分模块管理，需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
  namespaced: true,
  state: {
    // 评论信息
    comment:{}
  },
  getters: {},
  mutations: {
    // 获取评论信息
    getComment(state, data){
      state.comment = data
    }
  },
  actions: {
    // 加载评论信息 评论管理 分页管理评论信息接口
    async toLoadComment(context, params) {
      let res = await axios.post('/comment/query', params)
      // console.log(res.data.data);
      context.commit('getComment', res.data.data)
    },

    // 通过审核
    async toPassStatus(context, params) {
      let res = await axios.get('/comment/commentExamine?commentid=' + params)
    },
    
  }
}
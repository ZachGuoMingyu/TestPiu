import Vue from 'vue'
import Vuex from 'vuex'
// 引入登录
import login from './modules/login'
// 引入首页
import index from './modules/index'
// 引入详情
import details from './modules/details'

Vue.use(Vuex)

export default new Vuex.Store({
  // 在模块中注册 接着去login.js中接着处理
  modules: {
    login,
    index,
    details
  }
})

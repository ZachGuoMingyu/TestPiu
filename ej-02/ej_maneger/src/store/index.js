import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
// 导入custormer的index.js
import custormer from './custormer/index'
// 导入order的index.js
import order from './order/index'
// 导入评论管理的index.js
import comment from './comment/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    // 注册custormer模块 注册完毕后 去配置
    custormer,
    // 注册order模块 注册完毕后 去配置
    order,
    // 注册comment模块 
    comment
  },
  getters
})

export default store

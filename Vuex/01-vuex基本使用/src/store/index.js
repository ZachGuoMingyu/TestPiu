// 导入我们需要的依赖
import Vuex from 'vuex'
import Vue from 'vue'
// 1.安装插件
Vue.use(Vuex)
// 提取出一个公共的store对象，用于保存在多个组件中共享的状态
// 创建对象
const store = new Vuex.Store({
  state:{
    count: 0
  },
  mutations:{
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    }
  },
})
// 导出store
export default store
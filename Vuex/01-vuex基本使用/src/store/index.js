// 导入我们需要的依赖
import Vuex from 'vuex'
import Vue from 'vue'
// 1.安装插件
Vue.use(Vuex)
// 提取出一个公共的store对象，用于保存在多个组件中共享的状态
// 2.创建对象 这里并不是创建一个Vuex实例 而是调用Vuex的一个属性 Store
const store = new Vuex.Store({
  // 在这里我们会设置一些Vuex需要的参数 主要有以下几个 我们后面会对每一个做详细讲解
  // 那在state中定义的count 我们在组件内如何使用呢？ 去App.vue使用一下
  // state是保存状态的 类似于我们的data 放在这里的属性就是我们要共享的状态 这里的属性我们可以通过Vuex在多个组件内使用 完成计数器后可以在HelloWorld中进行使用
  state:{
    count: 100
  },
  // 状态更新
  mutations:{
    // 在这里我们可以定义一些方法 定在在mutations中的方法 默认是有一个参数的 state 这个state就是我们上面的state对象 我们可以通过这个state拿到它里面的属性 进行操作 在这里对state中的count进行修改 那我们再这里定义了方法以后 怎么在组件中进行使用呢？
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    }
  },
  actions:{},
  getters:{},
  modules:{}
})
// 3.导出store 去mian.js中进行配置
export default store
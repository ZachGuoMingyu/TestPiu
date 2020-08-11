
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


// 1.将模块化抽离出来 然后再去Store中Mudules去赋值
const modulesA = {
  // 在里面我们还是可以定义Vuex中的属性
  state: {
    // 我们在模块A中给一个name属性 那我们在组件中怎么获取呢？
    name: 'zhangsan'
  },
  mutations: {
    // 根据组件传递进来的值更新name 去App.vue中做处理
    updateName(state, payload){
      state.name = payload
    }
  },
  getters: {
    // 简单定义一个计算属性 去App.vue中看下怎么处理
    fullName(state){
      return state.name + 'Vuex'
    },
    // getters也可以使用参数
    fullName2(state, getters){
      return getters.fullName + 'fullName2'
    },
    // 那我们有一个新的需求 我们现在想把根state中的count拿来使用 进行一个拼接 怎么做呢
    // 在模块的getters 允许有第三个参数 rootState 对应的是根的state 记得去App.vue中进行处理
    fullName3(state, getters, rootState){
      return getters.fullName2 + rootState.count
    }
  },
  actions: {
    // actions中的context参数时上下文 但是在模块中 它就不是store对象了 如果是store对象 调用的还是根的mutations
    // 当我们在模块里使用context.commit的时候 它只会commit到自己模块的mutations中 
    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000);
      // 我们在这里打印一下context 看下它的结构 我们发现里面有rootGetters和rootState 那就可以通过context去根getters和根state中获取属性和数据
      console.log(context); 
    }
    // 去App.vue 新建一个按钮 来执行它
  },
      // 还可以在嵌套模块 但是 一般不这么做 有一个modules就可以了
}
const modulesB = {
  state: {},
  mutations: {},
  getters: {},
  actions: {},
}

// 创建对象
const store = new Vuex.Store({
  state:{
    count: 888,
    students: [
      { id: 1, name: 'kobe', age: 22 },
      { id: 2, name: 'james', age: 30 },
      { id: 3, name: 'curry', age: 18 },
      { id: 4, name: 'wade', age: 15 }
    ]
  },
  
  // 2.使用Modules
  modules:{
    // a模块
    a:modulesA,
    // b模块
    b:modulesB
  }
})
// 导出store
export default store
// 导入我们需要的依赖
import Vuex from 'vuex'
import Vue from 'vue'
// 1.安装插件
Vue.use(Vuex)
// 提取出一个公共的store对象，用于保存在多个组件中共享的状态
// 创建对象
const store = new Vuex.Store({
  state:{
    count: 0,
    students: [
      { id: 1, name: 'kobe', age: 22 },
      { id: 2, name: 'james', age: 30 },
      { id: 3, name: 'curry', age: 18 },
      { id: 4, name: 'wade', age: 15 }
    ]
  },
  mutations:{
    // 这里先加上一个延时操作 演示一下为什么mutations里不能有异步操作 通过vuedevtools来查看
    // 其实我们通过异步操作 已经将我们的数据改变了 但是vuedevtools却没有改变 也就是我们在mutation中执行异步操作，那么devtools将不能很好的追踪这个操作什么时候会完成 所以官方不推荐我们在mutation中执行异步操作
    // 但是我们确实有异步操作的时候怎么办呢？我们使用action来替代我们的action
    increment(state){
      // 先演示延时操作 当action开始用的时候这里注释掉
      // setTimeout(() => {
        state.count++
      // }, 2000);
    },

    // action传递参数
    // increment(state, payload) {
    //   // 先演示延时操作 当action开始用的时候这里注释掉
    //   // setTimeout(() => {
    //   state.count += payload.count
    //   // }, 1000);
    // },
    decrement(state){
      state.count--
    },
    
  },
  actions:{
    // 我们可以把上面的延时操作放到我们action中来执行
    // 1.先定义方法 action中也有一个默认参数 但不是state 而是context 上下文(在不同的地方 有不同的含义 在这个地方 我们就把它理解为store对象)

    actionIncrement(context){
      // 进行异步操作
      setTimeout(() => {
        //因为在当前环境下context理解为store对象 所以我们通过用context.commit的方法获取到我们上面的increment方法 然后回到App.vue 把我们的increment方法的实现换成使用action
        context.commit('increment')
      }, 1000);
    },

    // action也支持传递payload 回到Vue.app传递参数 在这里用payload接收 然后再mutation中也要接收payload
    // actionIncrement(context, payload) {
    //   // 进行异步操作
    //   setTimeout(() => {
    //     //我们通过用context.commit的方法获取到我们上面的increment方法 然后回到App.vue 把我们的increment方法的实现换成使用action
    //     context.commit('increment', payload)
    //   }, 1000);
    // }
  },
  getters:{
    // 平方
    squareCount(state){
      return state.count * state.count
    },
    // 筛选大于20岁的学生
    more20Student(state){
      return state.students.filter(s => s.age > 20)
    },
    // getters还可以做为参数
    // 我们现在想要获取到大于20岁学生的个数 我们可以直接使用getters.more20Student.length
    // 如果我们的getters方法里有两个参数 无论叫什么名字 第一个都是state 第二个都是getters
    more20StudentCount(state, getters){
      return getters.more20Student.length
    },
    // getters 传递参数
    // 获取年龄大于age的学生 这个时候我们这个age就不能写死 这个age是别人用getters的时候动态传递进来的 但是我们getters默认是不能传递参数的 这个时候怎么做呢？
    // moreAgeStudent(state, getters, age) 这种事不允许的 最多只能接收两个参数
    moreAgeStudent(state) {
      // 如果要满足这个需求 我们要返回出去一个函数 在我们返回的函数里添加age参数(这样外接调用执行这个函数并且传参就可以了)
      return age => { //箭头函数一个参数不用加括号
        return state.students.filter(s => s.age > age)
      }
    }
  },
})
// 导出store
export default store
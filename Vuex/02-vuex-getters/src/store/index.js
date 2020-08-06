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
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    }
  },
  // getters类似我们的计算属性computed 比如说我们想获取一些经过计算的数据就可以在这里实现
  // 比如说 我们想要获取state中count的平方
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
  }
})
// 导出store
export default store
import Vue from 'vue'
import App from './App.vue'

// 补充 当我们执行npm run build打包的时候 会给我们提示一下信息 但是我们npm run serve的时候不需要这些生产信息 所以我们设置为false
Vue.config.productionTip = false

new Vue({
  // render函数是vue通过js渲染dom结构的函数createElement，约定可以简写为h
  // Vue在调用render方法时，会传入一个createElement函数作为参数，也就是这里的h的实参是createElement函数，然后createElement会以App为参数进行调用
  // render:function(creatElement){
  //   return creatElemnt(App);
  // }
  render: h => h(App),
}).$mount('#app')
// $mount('#app') 和 el:'#app' 一样 即使我们写的是el:'#app' vue执行的也是$mount('#app') 所以这里省略了el挂载 而是直接使用$mount

import Vue from 'vue'
import App from './App.vue'
// 1.导入我们配置的路由 导入路由的实例 
// import router from './router/index'
// 当我们导入一个东西的时候 如果这里导入的是一个目录 它会自动的去找里面的index文件 自动导入 所以我们可以把后面的index省略不写
import router from './router'

Vue.config.productionTip = false

new Vue({
  // 2.将router配置到vue实例中 才会生效
  // router: router
  router,
  render: h => h(App),
}).$mount('#app')

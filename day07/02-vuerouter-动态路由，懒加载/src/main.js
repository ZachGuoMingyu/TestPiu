import Vue from 'vue'
import App from './App.vue'
// 导入我们配置的路由 导入路由的实例
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

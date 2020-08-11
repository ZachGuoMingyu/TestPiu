import Vue from 'vue'
import App from './App.vue'
// 导入Vuex仓库
import store from './store/index'

Vue.config.productionTip = false
// 将store对象放置在new Vue实例对象中，这样可以保证在所有的组件中都可以使用$store来访问Vuex中的内容 类似于我们之前使用的$router和$route
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

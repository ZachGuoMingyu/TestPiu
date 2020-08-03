// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


// 阻止启动生产消息，常用作指令
// 没有Vue.config.productionTip = false这句代码，它会显示你生产模式的消息
// 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
// 而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
// 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
// (摘于官网说明)
// 大概意思应该就是，消息提示的环境配置，设置为开发环境或者生产环境
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // #app在index.html里
  el: '#app',
  // 加载App组件 ES6中的属性简写 扩展开来就是App: App
  components: { App },
  // template: '<App/>' 这里面也涉及到一个简写的处理，如果你不在组件上面添加属性或者指令的话，你就可以写成但标签的形式 <App/>其实就是 ‘ <App><App/>’
  // <App>标签又在哪里呢  <App>这样写就是代表APP这个组件 template: '<App/>'就是代表使用APP组件的模板
  template: '<App/>'
})

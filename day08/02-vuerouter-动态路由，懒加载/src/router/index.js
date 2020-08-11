// 1.需要导入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入Home和About组件
// import Home from '../views/Home'
// import About from '../views/About'
// import User from '../views/User'

// 路由的懒加载
const Home = () => import('../views/Home')
const About = () => import('../views/About')
const User = () => import('../views/User')

// 2.注入插件 通过Vue.use(VueRouter)
Vue.use(VueRouter)

// 3.定义路由 配置路由与组件之间的关系
const routes = [
  // 路由的重定向 用来加载我们默认要显示的页面
  {
    path: '/',
    redirect: '/home'
  },
  {
    // path 配置我们路由的路径，会自动的拼接到我们项目运行地址的url后面 
    path: '/home',
    // component 配置我们相对应的组件
    component: Home
    // 懒加载的使用方式，也可以直接这样写
    // component: () => import('../views/Home')
  },
  {
    path: '/about',
    component: About
  },
  {
    // 1.新建user组件 导入
    // 2.去App.vue中进行配置
    // 3.动态路由配置 后面加上要接收的参数
    path: '/user/:userId',
    component: User
  }
]

// 4.创建router实例
const router = new VueRouter({
  // 直接把我们的路由和组件之间的应用关系放在这里
  routes,
  // 切换history模式  默认是hash
  mode: 'history'
})

// 5.通过export导出 传到Vue实例中
export default router
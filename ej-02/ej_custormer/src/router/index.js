import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 登录界面
import Login from '../views/Login.vue'
// 首页
import Order from '../views/manager/order.vue'
// 订单界面
import Index from '../views/manager/index.vue'
// 我的界面
import User from '../views/manager/user.vue'
// 详情页面
import Details from '../views/manager/details.vue'


Vue.use(VueRouter)

  const routes = [
    // 默认界面
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // 配置子路由
      children:[
        // 首页
        {
          path:'index',
          component: Index
        },
        // 订单
        {
          path: 'order',
          component: Order
        },
        // 我的
        {
          path: 'user',
          component: User
        },
        // 详情页
        {
          path: 'details',
          component: Details
        },
      ]
    },
    // 登录
    {
      path:'/login',
      name:'login',
      component: Login
    }
    // 配置完以后 我们去home页面中进行配置
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

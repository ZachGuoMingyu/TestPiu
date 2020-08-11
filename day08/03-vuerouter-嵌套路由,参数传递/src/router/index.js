// 1.需要导入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

// 方法1：在项目目录下运行 npm i vue-router@3.0 -S 将vue-router改为3.0版本即可；
// 方法2：解决vue-router在3.0版本以上重复点击报错的问题 push
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// replace
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

// 导入Home和About组件
// import Home from '../views/Home'
// import About from '../views/About'
// import User from '../views/User'

// 路由的懒加载
const Home = () => import('../views/Home')
// 1.创建首页的子页面 然后导入
const HomeNews = () => import('../views/HomeNews')
const HomeMessage = () => import('../views/HomeMessage')

const About = () => import('../views/About')
const User = () => import('../views/User')
const Profile = () => import('../views/Profile')

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
    path: '/home',
    component: Home,
    // 设置元数据
    meta: {
      title: '首页'
    },
    // 2.配置子路由
    children:[
      // 子路由也可以设置默认路径
      {
        path: '/',
        redirect: 'news'
      },
      {
        // 配置子路由的时候 不需要加 / 会自动帮我们加上
        path: 'news',
        component: HomeNews
      },
      {
        // 配置子路由的时候 不需要加 / 会自动帮我们加上
        path: 'messages',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path:'/profile/:id',
    // 命名路由传参 设置name属性
    name:'profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

// 4.创建router实例
const router = new VueRouter({
  // 直接把我们的路由和组件之间的应用关系放在这里
  routes,
  // 切换history模式  默认是hash
  mode: 'history'
})

// 导航守卫 前置钩子函数
// 参数是一个函数 函数内有三个参数 分别是to from next
// to: 即将要进入的目标的路由对象.
// from: 当前导航即将要离开的路由对象.
// next: 调用该方法后, 才能进入下一个钩子
router.beforeEach((to, from, next) => {
  // from和to是什么东西呢？ 路由跳转时从from跳转到to
  console.log(to);
  // 设置title 先去每个路由中设置meta元数据
  // 为什么我们不使用to.meta而是使用to.matched[0]里 我们去打印里面看下to的输出 我们发现首页的meta为undefined 因为首页是个嵌套路由 所以我们去matched中找
  document.title = to.matched[0].meta.title
  // 在beforeEach中 必须要调用next() 如果我们不去配置导航守卫 默认的执行next() 
  next()
})

// 5.通过export导出 传到Vue实例中
export default router
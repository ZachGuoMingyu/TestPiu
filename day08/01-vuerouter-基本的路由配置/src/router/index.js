// 在这里配置路由信息
// 1.需要导入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入Home和About组件
import Home from '../views/Home'
import About from '../views/About'

// 2.注入插件 通过Vue.use(VueRouter)
Vue.use(VueRouter)

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

// 第三步之前先把第四步写好
// 3.定义路由 配置路由与组件之间的映射关系 将我们配置好的关系放到router实例中
const routes = [
  // 一开始先不配置 在main.js中设置完以后再回来配置
  
  // 9.路由的重定向 用来加载我们默认要显示的页面
  {
    path: '/',
    redirect: '/home'
  },
  // 6.新建Home.vue和About.vue组件  然后配置映射关系
  // 配置之前 先去上面导入组件
  // 7.一个映射关系就是一个对象 我们要通过路径跟我们组件进行映射 路径切换要显示出对应的组件
  {
    // path 配置我们路由的路径，会自动的拼接到我们项目运行地址的url后面 
    path: '/home',
    // component 配置我们相对应的组件
    component: Home
  },
  {
    path: '/about',
    component: About
  }
  // 8.配置好以后 我们去哪里使用 才可以进行一个页面的切换呢 去App.vue中进行设置 因为App.vue是我们默认加载的组件 我们可以在里面设置 控制路由的跳转
]

// 4.创建router实例
const router = new VueRouter({
  // router中最重要的属性 就是routes属性 我们抽出来放到上面来配置 推荐这样做
  // 直接把我们的路由和组件之间的映射关系放在这里
  // routes: routes
  routes,
  // 一开始先不配置 设置完映射关系再配置模式
  // 切换history模式  默认是hash
  mode: 'history'
})

// router对象创建完毕后我们通过模块化导出 传入到我们的vue实例中 这个时候才会生效 去main.js中配置
// 5.通过export导出 传到Vue实例中
export default router
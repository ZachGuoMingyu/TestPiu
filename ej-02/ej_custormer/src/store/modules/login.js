// 既然要使用vuex 那么就要使用axios 接下来去配置axios
// 在src下新建 http文件夹 里面新建axios.js
// 引入axios
// 我们去看下登录接口 参数传递和我们之前不太一样 这里需要我们传递一个json格式的参数 那我们就导入post_json
import { post_json, get } from '../../http/axios'

// 设置默认导出
export default {
  // 开启命名空间
  namespaced: true,
  state:{
    // 用户信息 因为这样刷新以后数据会丢失 所以我们存储在localStorage中
    userInfo:{},
    // 用户名
    userName:localStorage.getItem('infoName'),
    // id
    infoId: localStorage.getItem('infoId'),
    // 头像
    infoAva: localStorage.getItem('infoAva')
  },
  mutations:{
    // 获取用户信息
    setUserInfo(state, data){
      state.userInfo = data
    }
  },
  actions:{
    // 实现登录接口
    async login(context, params){
      let res = await post_json('/user/login', params)
      // 按照我们机制 我们登录以后获取到token 然后通过token去获取用户信息 因为获取用户信息请求方式为get 我们再导入一个get 见接口 
      // 获取token 去swagger接口中测试一下 看看token的数据结构 admin 123321
      let token = res.data.token
      // console.log(token);
      // 到login.vue 去处理参数传递

      // 将token传给getUserInfo 让其执行 使用dispatch
      await context.dispatch('getUserInfo', token)
    },

    //根据token获取用户信息
    async getUserInfo(context, params){
      let res = await get('/user/info', {token: params})
      // console.log(res.data,'-----------');
      // 我们这里使用localStorage将用户信息存储起来
      // 保存用户名
      localStorage.setItem('infoName', res.data.name)
      // 保存id
      localStorage.setItem('infoId', res.data.id)
      // 保存头像
      localStorage.setItem('infoAva', res.data.avatar)
      // 然后去state中设置
      // 把用户信息存储到Vuex中
      context.commit('setUserInfo', res.data)
      // 再回到login.vue中进行处理
    }
  }
}
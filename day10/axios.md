# axios

## 接口文档

|         接口名         | 请求方式 |     请求参数      |                           请求地址                           |
| :--------------------: | :------: | :---------------: | :----------------------------------------------------------: |
|    查询所有栏目信息    |   get    |       无参        | [href](http://47.106.244.1:8099/manager/category/findAllCategory) |
| 通过栏目名查询栏目信息 |   get    | name string(体育) | [href](http://47.106.244.1:8099/manager/category/findCategoryByCategoryname) |
|      查询订单信息      |   post   |    name object    | [href](http://134.175.100.63:5588/order/queryPage?page=0&pageSize=10) |
|          退出          |   post   |       无参        |     [href](http://47.106.244.1:8099/manager/user/logout)     |



## axios

```
axios是基于promise对ajax的一种封装
ajax mvc
axios mvvm
npm install axios --save
```



## axios的基本使用

> axios默认请求

```js
//使用默认方式发送无参请求
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios({
    url: 'http://47.106.244.1:8099/manager/category/findAllCategory'
  }).then(res => {
    console.log(res)
  })
</script>
//默认使用get方式进行请求
```

> axios发送get请求

```javascript
//指定方式为get的无参请求
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios({
    url: 'http://47.106.244.1:8099/manager/category/findAllCategory',
    method: 'get'
  }).then(res => {
    console.log(res)
  })
</script>
```

```javascript
//使用get方式发送带有参数的请求
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios({
      url: 'http://47.106.244.1:8099/manager/category/findCategoryByCategoryname?name=体育',
      method: 'get'
    }).then(res => {
      console.log(res)
    })
</script>
```

```javascript
//使用get方式发送有参请求其他形式
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios({
      url: 'http://47.106.244.1:8099/manager/category/findCategoryByCategoryname',
      params: {
        name: '体育'
      },
      method: 'get'
    }).then(res => {
      console.log(res)
    })
</script>
```

> axios发送post请求

```javascript
//使用post方式发送无参请求
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios({
      url: 'http://47.106.244.1:8099/manager/user/logout',
      method: 'post'
    }).then(res => {
      console.log(res)
    })
</script>
```

```javascript
//使用post方式发送带有参数的请求
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios({
      url: 'http://134.175.100.63:5588/order/queryPage',
      params: {
        page: 1,
        pageSize: 10 //url上拼接参数，明文拼接，不推荐使用
      },
      method: 'post'
    }).then(res => {
      console.log(res)
    })
</script>

//使用post方式发送带有参数的请求 使用data传递
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios({
      url: 'http://134.175.100.63:5588/order/queryPage',
      data: {
        page: 1,
        pageSize: 10 //后台接收为null
      },
      method: 'post'
    }).then(res => {
      console.log(res)
    })
</script>
//当使用data传递的时候，后台接收到的参数为null；axios使用post携带参数请求默认使用application/json格式

//解决方式1：使用params属性进行数据的传递
//解决方式2：axios.post 后携带参数 "page=1&pageSize=10"
//解决方式3：服务器端给接收的参数加上@requestBody
```



## axios请求方式

```js
//使用axios.get方式发送无参请求 .catch报错处理
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios.get('http://47.106.244.1:8099/manager/category/findAllCategory').then(res => {
    console.log(res)
  }).catch(error => {
    console.log('报错啦')
    console.log(error)
  })
</script>
```

```js
//使用axios.get发送有参请求
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios.get('http://47.106.244.1:8099/manager/category/findCategoryByCategoryname', 		     	 {params:{name:'体育'}}).then(res => {
        console.log(res)
      }).catch(error => {
        console.log('报错啦')
        console.log(error)
      })
</script>
```

```js
//使用axios.post发送无参请求
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios.post('http://47.106.244.1:8099/manager/user/logout').then(res => {
        console.log(res)
      }).catch(error => {
        console.log('报错啦')
        console.log(error)
      })
</script>
```

```js
//使用axios.post发送有参请求 
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios.post('http://134.175.100.63:5588/order/queryPage','page=1&pageSize=10')
    .then(res => {
      console.log(res)
    }).catch(error => {
      console.log('报错啦')
      console.log(error)
    })
</script>
//发送post请求携带参数，直接使用"page=1&pageSize=10"，只修改前端代码

//使用data传递数据，后台需要将axios自动转换的json数据转换为java对象，修改后台代码
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios.post('http://134.175.100.63:5588/order/queryPage',{page:1,pageSize:10})
    .then(res => {
      console.log(res)
    }).catch(error => {
      console.log('报错啦')
      console.log(error)
    })
</script>
//接收的参数添加@requestBody注解
```



## axios并发请求

```js
//axios的并发请求
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  // axios并发请求
  axios.all([
    axios.get('http://47.106.244.1:8099/manager/category/findAllCategory'),
    axios.get('http://47.106.244.1:8099/manager/category/findCategoryByCategoryname',         	  {params:{name:'体育'}})
  ]).then(res => {//请求成功响应的是一个数组
    console.log(res[0])    
    console.log(res[1])
  }).catch(err => {
    console.log(err)
  })
</script>
```

```js
//使用spread方法处理响应结果
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  // axios并发请求
  axios.all([
    axios.get('http://47.106.244.1:8099/manager/category/findAllCategory'),
    axios.get('http://47.106.244.1:8099/manager/category/findCategoryByCategoryname', 		  {params:{name:'体育'}})
  ]).then(
    axios.spread((res1, res2) => {
      console.log(res1)
      console.log(res2)
    })
  ).catch(err => {
    console.log(err)
  })
</script>
```



## axios的全局配置

```js
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
  <script>
    // 全局配置
    // 设置全局属性baseURL
    axios.defaults.baseURL = 'http://47.106.244.1:8099/manager';
    // 设置超时时间 不要设置的太低 比如设置5 5ms 一般都会报错 
    axios.defaults.timeout = 5000;

		//在全局配置的基础上请求
    axios.get('category/findAllCategory').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    axios.post('user/logout').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  </script>
```



## axios的实例

```js
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  let newVar = axios.create({
    baseURL:'http://47.106.244.1:8099/manager',
    timeout:5000
  });//创建axios的实例，只有在使用实例的时候才会生效
  let newVar1 = axios.create({
      baseURL: 'http://47.106.244.1:8099/manager',
      timeout: 5
    });//创建axios的实例，只有在使用实例的时候才会生效
  newVar({
    url:'category/findAllCategory'
  }).then(res => {
    console.log(res)
  })
  newVar1({
      url: 'category/findAllCategory'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
</script>
```



## axios的拦截器

> axios给我们提供了两大类拦截器
> 一种是请求方向的拦截（成功请求，失败请求）
> 另一种是响应方向的（成功响应，失败响应）



> 拦截器的作用：用于我们在网络请求的时候在发起请求或者响应时对操作进行相应的处理
>
> 例如：发起请求时可以添加网页加载的动画  强制登录
>
> ​            响应的时候可以进行相应的数据处理

```js
//请求方向拦截器
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  // 拦截器
  axios.interceptors.request.use(config => {
    console.log('进入请求拦截器')
    console.log(config)
    return config //记得return，放行请求
  },err => {
    console.log('请求方向失败')
    console.log(err)
  })

  axios.get('http://47.106.244.1:8099/manager/category/findAllCategory').then(res => {
    console.log(res)
  })
</script>
```

```js
//响应方向拦截器
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
  axios.interceptors.response.use(config => {
    console.log('进入响应拦截器')
    return config.data //只会返回data
  },err => {
    console.log('响应方向失败')
    console.log(err)
  })

  axios.get('http://47.106.244.1:8099/manager/category/findAllCategory').then(res => {
    console.log(res)
  })
</script>
```



## axios在vue中的模块封装

```js
// 因为本身axios就是promise机制
// 新建文件夹 network/http -> request.js -> import ->
export function request(config) {
  let newVar = axios.create({
    baseURL: "http://47.106.244.1:8099/manager",
    timeout: 5000
  })
  return newVar(config)
}
//使用的位置
import { request } from './network/request'
request({
  url: 'category/findAllCategory'
}).then(res => {
  console.log(res)
})
```




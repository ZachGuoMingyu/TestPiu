import axios from 'axios';
import qs from 'qs'


// 一个是类似于家政的接口
axios.defaults.baseURL = 'http://39.105.67.242:5588/'
// 一个是类似于外卖的接口
// axios.defaults.baseURL = 'http://134.175.100.63:5588/'
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
axios.interceptors.request.use((config)=>{
	if(config.method == 'post'){
		config.data = qs.stringify(config.data,{arrayFormat:'repeat'});
	}
	return config;
})

export default axios;
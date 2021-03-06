import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.prototype.$host = 'https://unidemo.dcloud.net.cn/';

Vue.use(VueResource);

//添加拦截器
Vue.http.interceptors.push((request,next)=>{
	var token = uni.getStorageSync("token");
	request.headers.set('X-Nideshop-Token',token);
	next(function(response){
		return response;
	});
})

App.mpType = 'app'

const app = new Vue({
	...App,
})

app.$mount()

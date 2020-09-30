import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.prototype.$host = 'https://unidemo.dcloud.net.cn/';

Vue.use(VueResource);

App.mpType = 'app'

const app = new Vue({
	...App,
})
app.$mount()

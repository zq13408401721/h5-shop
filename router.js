import Router from 'vue-router'
import BrandDetail from './pages/brand/brand-detail.vue'

const router = new Router({
	routes:[
		{
			path:'/brandDetail',
			name:'brand',
			component:()=>import('./pages/brand/brand-detail.vue')
			//component:BrandDetail
		}
	]
});

export default router

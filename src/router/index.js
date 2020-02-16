import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('Views/home/Home'),
		meta:{
			title: '首页'
		}
	},
	{
		path: '/category',
		component: () => import('Views/category/Category')
	},
	{
		path: '/cart',
		component: () => import('Views/cart/Cart')
	},
	{
		path: '/profile',
		component: () => import('Views/profile/Profile')
	},
	{
		path: '/detail',
		component: () => import('Views/detail/Detail'),
		meta:{
			title: '详情页'
		}
	}
]

export default new Router({
	routes,
	mode: 'history'


})

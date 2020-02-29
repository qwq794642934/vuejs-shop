import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 重写路由push 方法
// const originalPush = Router.prototype.push;

// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };
const oriPush = Router.prototype.push;
Router.prototype.push = function push(location) {
	return oriPush.call(this, location).catch(err => err);
}

const oriReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
	return oriReplace.call(this, location).catch(err => err);
}

// 重写路由replace方法,阻止重复点击报错
// const originalReplace = Router.prototype.replace;
// Router.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err);
// };

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
		component: () => import('Views/category/Category'),
		meta: {
			title: '分类'
		}

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
	},
	{
		path: '/login',
		component: () => import('Views/login/Login')
	},
	{
		path: '/register',
		component: () => import('Views/register/Register')
	}
]

export default new Router({
	routes,
	mode: 'history'


})

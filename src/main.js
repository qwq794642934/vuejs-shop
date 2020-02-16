import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import Vuelazyload from "vue-lazyload"
import fastClick from "fastclick"

fastClick.attach(document.body)
//导入自定义插件
import toast from "Components/common/toast"

Vue.config.productionTip = false
// 使用原型添加 事件总线    vue实列可以做事件总线
Vue.prototype.$bus = new Vue()
//安装toast 插件
Vue.use(toast)
//使用懒加加载图片
Vue.use(Vuelazyload,{
	preLoad: 1.3,
	loading: require('Img/common/placeholder.png'),
	attempt: 1
})

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')

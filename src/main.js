import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 使用原型添加 事件总线    vue实列可以做事件总线
Vue.prototype.$bus = new Vue()

new Vue({
	render: h => h(App),
	router
}).$mount('#app')

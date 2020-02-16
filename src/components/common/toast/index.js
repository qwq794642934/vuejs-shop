import Toast from "./Toast"
const component = {
}

component.install = function(Vue){
	// console.log('执行install')
	//1 创建组件构造器
	const toastContrustor = Vue.extend(Toast);
	//2 .new 方式 根据构造器 创建一个组件对象
	const toast = new toastContrustor();
	//3.手动挂载到某一元素
	toast.$mount(document.createElement('div'));
	//4.  toast.$el 对应就是div
	document.body.appendChild(toast.$el);

	Vue.prototype.$toast = toast;

}

export default component

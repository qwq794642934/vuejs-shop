import Vue from 'vue'
import Vuex from "vuex"
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"


// 使用vuex
Vue.use(Vuex)


//创建vuex对象

export default new Vuex.Store({
	state:{
		cartList:[]
	},
	mutations,
	actions,
	getters
})

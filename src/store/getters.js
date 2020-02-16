export default {
	cartLenght(state,getters){
		return getters.cartProduct.length
	},
	cartProduct(state,getters){
		return state.cartList.filter(item => item.price !== undefined)
	},
	totalPrice(state,getters){
		return getters.cartProduct.filter(item => item.checked).reduce((pre, item) => {
			return pre + item.price * item.count
		}, 0).toFixed(2)
	},
	totalSelect(state,getters){
		return getters.cartProduct.filter(item => item.checked).length
	},
	isAllSelect(state, getters){
		//方法1 find
		if(getters.cartLenght === 0) return false
		return !state.cartList.find(item => !item.checked)
		// 方法2 filter
		// return !state.cartList.filter(item => !item.checked).length
		// 方法3 普通遍历
		// for(let item of getters.cartProduct){
		// 	if(!item.checked){
		// 		return false
		// 	}
			// return true
		// }
	}
}
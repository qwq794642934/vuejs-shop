export default{
		addCart({state, commit},payload){
			return new Promise((resolve, reject) => {
				//1.查找数组中是否有该商品
				let oldProduct = state.cartList.find(item => item.iid === payload.iid)
				//2.判断oldproduct
				if(oldProduct){
					resolve('商品数量+1')
					commit('addCounter', oldProduct)
				}else{
					payload.count = 1
					payload.checked = true
					if(payload.price !== undefined){
						resolve('添加新商品')
						commit('addToCart', payload)
					}else{
						reject('此商品无效')
					}
				}
			})
		}
	}

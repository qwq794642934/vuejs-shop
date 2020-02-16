<template>
	<div class="cart-bottom-bar">
		<div class="select">
			<CheckButton :value="isAllSelect" @click.native="checkClick"/>
			<span class="text">全选</span>
		</div>
		<div class="price">
			<span>总计：￥<p>{{totalPrice}}</p></span>
		</div>
		<div class="calculate">
			<div>结算({{totalSelect}})</div>
		</div>
	</div>
</template>

<script>
	import CheckButton from "./CheckButton.vue"
	import {mapGetters} from "vuex"
	export default {
		name: 'cartbottombar',
		components:{
			CheckButton
		},
		computed:{
			...mapGetters(['totalPrice', 'totalSelect', 'isAllSelect', 'cartProduct'])
		},
		methods:{
			checkClick(){
				if(this.isAllSelect){ //全部选择中
					this.cartProduct.forEach(item => item.checked = false)
				}else{
					this.cartProduct.forEach(item => item.checked = true)
				}
				// this.this.cartProduct.forEach(item => item.checked = !this.isAllSelect)
			}
		}
	}
</script>

<style scoped>
.cart-bottom-bar{
	position: absolute;
	bottom: 49px;
	width: 100%;
	height: 49px;
	background-color: #F2F3F5;
	display: flex;
	align-items: center;
}
.select{
	display: flex;
	margin-left: 5px;
	font-size: 20px;
	font-weight: 600;
}
.select .text{
	margin-left: 10px;
}
.price{
	margin-left: 30px;
	flex: 1;
}
.price p{
	display: inline;
	color: red;
	font-size: 20px;
}
.calculate{
	width: 80px;
	height: 49px;
	line-height: 49px;
	text-align: center;
	background: red;
	color: #FFFFFF;

}
</style>

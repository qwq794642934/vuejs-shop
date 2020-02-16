<template>
	<div class="cart-item">
		<div class="item-select">
			<check-button :value="product.checked" @click.native="itemChecked" />
			</div>
		<div class="item-img"><img v-lazy="product.image"/></div>
		<div class="item-info">
			<div class="item-title">{{ product.title }}</div>
			<div class="item-desc">{{ product.desc }}</div>	
			<div class="item-bottom">
				<div class="item-price left">￥{{ product.price }}</div>
				<div class="item-count right">x{{ product.count }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CheckButton from "./CheckButton"
export default {
	name: 'CartItem',
	components:{CheckButton},
	props: {
		product: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	methods:{
		itemChecked(){
			this.product.checked = !this.product.checked
		}
	}
};
</script>

<style scoped>
.cart-item {
	display: flex;
}
.item-img {
	padding: 5px;
}
.item-img img {
	height: 100px;
	width: 80px;
	display: block;
	border-radius: 5px;
}
.item-info {
	font-size: 17px;
	color: #333;
	padding: 5px 10px;
	position: relative;
	overflow: hidden;
}
.item-info .item-desc {
	font-size: 14px;
	color: #666;
	margin-top: 15px;
}
.item-title,
.item-desc {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.item-bottom {
	margin-top: 10px;
	position: absolute;
	bottom: 10px;
	left: 10px;
	right: 10px;
}

.item-bottom .item-price {
	color: orangered;
}
.item-select{
	display: flex;
	width: 20px;
	justify-content: center;
	align-items: center;
	margin-left: 10px;
}
</style>

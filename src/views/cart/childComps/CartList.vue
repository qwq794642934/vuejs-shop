<template>
	<div id="cart-list">
		<scroll class="content" :click="true">
			<cart-list-item v-for="(item, index) in product" :key="index" :product="item"/>
		</scroll>
	</div>
</template>

<script>
	import Scroll from 'Components/common/scroll/Scroll';
	import CartListItem from "./CartListItem"
	import {mapGetters} from 'vuex'
	export default {
	name: 'cartlist',
	components:{
		Scroll,
		CartListItem
	},
	computed:{
		...mapGetters({
			product: 'cartProduct'
		})
	}
	}
</script>

<style scoped>
	#cart-list{
		position: absolute;
		top: 44px;
		left: 0;
		right: 0;
		bottom: 98px;
	}
	.content{
		height: 100%;
		overflow: hidden;
	}
</style>

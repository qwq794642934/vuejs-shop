<template>
	<div class="swiper">
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(item, index) in swiperList" :key="index">
				<van-image
				  fit="contain"
					:src="item.image"
					lazy-load
					width="100%"
				/>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from 'vant'
	export default {
		name: 'Swiper',
		props:{
			swiperList: {
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>

</style>

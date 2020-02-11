<template>
	<div>
		<swiper>
			<swiper-item 
			v-for="(item, index) in swiperList" 
			:key="index"><img 
			:src="item.image" 
			@load="swiperImgLoad" /></swiper-item>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperItem, MySwiper } from 'Components/common/swiper';
export default {
	name: 'homeswiper',
	components: {
		Swiper,
		SwiperItem
	},
	props: {
		swiperList: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {
		swiperImgLoad() {
			if(!this.isLoad){
				// this.$bus.$emit('swiperImgLoad');
				this.$emit('swiperImgLoad')
				console.log('swi')
				this.isLoad = true
			}

		}
	},
	data(){
		return {
			isLoad : false
		}
	}
};
</script>

<style scoped></style>

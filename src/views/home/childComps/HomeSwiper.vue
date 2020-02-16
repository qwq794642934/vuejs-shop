<template>
		<swiper ref="swiper" v-if="swiperList.length">
			<swiper-item v-for="(item, index) in swiperList" :key="index">
				<img :src="item.image" @load="swiperImgLoad"/>
			</swiper-item>
		</swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'Components/common/swiper';
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
			if (!this.isLoad) {
				// this.$bus.$emit('swiperImgLoad');
				this.$emit('swiperImgLoad');
				console.log('swi');
				this.isLoad = true;
			}
		},
		stopTimer() {
				    this.$refs.swiper.stopTimer()
		      },
		startTimer() {
				    if (this.$refs.swiper) {
		          this.$refs.swiper.startTimer()
		        }
		      }
		
	},
	data() {
		return {
			isLoad: false
		};
	}
};
</script>

<style scoped></style>

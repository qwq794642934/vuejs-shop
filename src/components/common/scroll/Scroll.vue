<template>
	<div class="wrapper" ref="wrapper">
		<div class="content"><slot></slot></div>
	</div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
	name: 'BScroll',
	props: {
		probeType: {
			type: Number,
			default: 0
		},
		pullUpLoad: {
			type: Boolean,
			default: false
		},
		click: {
			type: Boolean,
			default: false
		}
	},
	mounted() {
		// 1. 创建scroll对象
		this.scroll = new BScroll(this.$refs.wrapper, {
			click: this.click,
			probeType: this.probeType,
			pullUpLoad: this.pullUpLoad
		});
		//2. 监听滚动位置
		if (this.probeType === 2 || this.probeType === 3) {
			this.scroll.on('scroll', position => {
				this.$emit('scroll', position.y);
			});
		}

		// 3. 监听上拉加载
		if (this.pullUpLoad) {
			this.scroll.on('pullingUp', () => {
				// console.log('上拉加载更多')
				this.$emit('pullingUp');
				// this.finishPullUp()
			});
		}
	},
	methods: {
		scrollTo(x, y, time = 500) {
			// this.scroll.scrollTo(x, y, time)
			this.scroll && this.scroll.scrollTo(x, y, time);
		},
		finishPullUp(){
			this.scroll && this.scroll.finishPullUp()
		},
		refresh() {
			// this.scroll.refresh()
			console.log('图片监听');
			this.scroll && this.scroll.refresh();
		}
	},
	data() {
		return {
			scroll: null
		};
	}
};
</script>

<style scoped></style>

<template>
	<div id="swipe">
		<div class="swiper"><slot></slot></div>

		<slot name="indicator"></slot>

		<div class="indicator">
			<slot name="indicator" v-if="showIndicator && slideCount > 1">
				<div class="indi-item" v-for="(item, index) in slideCount" :key="index" :class="{ active: index === currentIndex - 1 }"></div>
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'swipe',
	props: {
		showIndicator: {
			type: Boolean,
			default: true
		},
		interval: {
			type: Number,
			default: 3000
		},
		animDuration: {
			type: Number,
			default: 300
		},
		moveRatio: {
			type: Number,
			default: 0.25
		}
	},
	data() {
		return {
			slideCount: 0, //图片数量
			totalWidth: 0, // swiper宽度
			swiperStyle: {}, //swiper样式
			currentIndex: 0, // 当前索引
			scrolling: false //是否滚动
		};
	},
	mounted() {},
	methods: {
		// *********
		// *定时器操作
		// *********
		startTimer(){
			this.playTimer = window.setInterval( () => {
				this.currentIndex++;
				this.scrollContent(-this.currentIndex * this.totalWidth)
			}, this.interval)
			
		},
		stopTimer(){
			window.clearInterval(this.playTimer)
		},
		// *********
		// *滚动到正确位置
		// *********
		scrollContent(){
			// 1设置正在滚动
			this.scrolling = true
			//2.开始滚动动画
			this.swiperStyle.transform = 'transform' + this.animDuration + 'ms';
			this.setTransform(currentPosition)
			
			//3 判断滚动位置
			this.checkPosition();
			
			//4 滚动完成
			this.scrolling = false
		},
		// *********
		// *校验正确位置
		// *********
		checkPosition(){
			window.setTimeout(() => {
				//1. 校正正确位置
				this.swiperStyle.transform = '0ms'
				if(this.currentIndex >= this.slideCount + 1){
					this.currentIndex = 1
					this.setTransform(-this.currentIndex * this.totalWidth)
				}else if(this.currentIndex <+ 0){
					this.currentIndex = this.slideCount
					this.setTransform(-this.currentIndex * this.totalWidth)
				}
				//2. 结束移动后的回调
				this.$emit('transitionEnd', this.currentIndex -1)
			}, this.animDuration)
		},
		/**
		 * 设置滚动的位置
		 */
		setTransform(position){
			this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`
			this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`
			this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
		},
		/**
		 * 操作DOM, 在DOM前后添加Slide
		 */
		handleDom(){
			//1获取要操作的元素
			let swiperEl = document.querySelector('.swiper')
			let slidesEls = swiperEl.getElementsByClassName('slide')
			
			//2 保存个数
			this.slideCount = slidesEls.length
			
			//3. 如果大于1 ，那么在前后分别添加一个slide
			if(this.slideCount > 1){
				let cloneFirst = slidesEls[0].cloneNode(true)
				let cloneLast = slidesEls[this.slideCount -1].cloneNode(true)
				swiperEl.insertBefore(cloneLast, slidesEls[0])
				swiperEl.appendChild(cloneFirst)
				
				// 4.让swiper元素， 显示第一个（目前是前面添加的最后一个元素）
				this.setTransform(-this.totalWidth)
			}
		},
		/**
		 * 拖动事件的处理
		 */
		touchStart(e){
			// 1. 如果滚动， 不可拖到
			if(this.scrolling) return;
			
			//2.停止定时器
			this.stopTimer()
			
			//3.保存开始滚动的位置
			this.startX = e.touches[0].pageX
			
		},
		touchMove(e){
			// 1 计算用户拖动距离
			this.currentX = e.touches[0].pageX
			this.distance = this.currentX - this.startX
			let currentPosition = -this.currentIndex * this.totalWidth
			let moveDistance = this.distance + currentPosition
			
			//2 设置当前位置
			this.setTransform(moveDistance)
		},
		touchEnd(e){
			// 1.获取移动距离
			let currentMove = Math.abs(this.distance)
			//2 判断最终距离
			if(this.distance === 0){
				return
			}else if(this.distance > 0 && currentMove > this.totalWidth * this.moveRatio){
				// 右边移动超过0。5
				this.currentIndex --
			}else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
				this.currentIndex ++ 
			}
			//3.移动到正确位置
			this.scrollContent(-this.currentIndex * this.totalWidth)
			
			// 4. 移动完成重新开始定时器
			this.startTimer()
		},
		/**
		 * 控制上一个, 下一个
		 */
		previous(){
			this.changeItem(-1)
		},
		next(){
			this.changeItem(1)
		},
		changeItem(){
			//1 移除定时器
			this.stopTimer()
			
			//2 修改index位置
			this.currentIndex += num
			this.scrollContent(-this.currentIndex * this.totalWidth)
			
			// 3.添加定时器
			this.startTimer();
		}
		
	}
};
</script>
<style scoped>
	#swipe{
		overflow: hidden;
		position: relative;
	}
	.swiper{
		display: flex;
	}
	.indicator{
		display: flex;
		justify-content:  center;
		position: absolute;
		width: 100%;
		bottom: 8px;
	}
	.indi-item {
		box-sizing: border-box;
		width: 8px;
		height: 8px;
		border-radius: 4px;
		background-color: #fff;
		line-height: 8px;
		text-align: center;
		font-size: 12px;
		margin: 0 5px;
	}
	
	.indi-item.active {
		background-color: rgba(212, 62, 46, 1);
	}
</style>

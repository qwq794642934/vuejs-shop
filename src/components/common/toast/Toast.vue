<template>
	<div class="toast" v-if="isShow">
		{{message}}
	</div>
</template>

<script>
	export default {
		name: 'toast',
		data(){
			return {
				isShow: false,
				message: ''
			}
		},
		methods:{
			showMSG(message, duration=2000){
				this.isShow = true
				this.message = message
				setTimeout(() => {
					this.isShow = false
					this.message = ''
				}, duration)
			}
		}
	}
</script>

<style scoped>
	.toast{
		/* / toast 是浮动在屏幕中央位置/ */
		transform: translate(-50%, -50%);
		position: fixed;
		z-index: 9;
		left: 50%;
		top: 50%;

		/* 对toast 样式大小进行调整 */
		background: rgba(0, 0, 0, .6);
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 20px;
		color: #FFFFFF;

	}
</style>

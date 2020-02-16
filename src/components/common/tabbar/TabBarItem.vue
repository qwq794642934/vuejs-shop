<template>
	<div class="tab-item" @click="itemClick">
		<div v-if="!isActive"><slot  name="item-icon"></slot></div>
		<div v-else><slot  name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		data(){
			return {
				// isActive: true
			}
		},
		props:{
			path: {
				type: String,
				default: '/home'
			},
			activeColor:{
				type: String,
        default: 'red'
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path)
			}
		},
		computed:{
			isActive(){
				// console.log(this.$route.path.indexOf(this.path) !== -1)
				return this.$route.path.indexOf(this.path) !== -1
			},
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
		}

	}
</script>

<style>
	.tab-item {
		padding: 5px 0 0 0;
		flex: 1;
		text-align: center;
		height: 49px;
		background-color: #ebe5e5f6;
		font-size: 14px
	}
	.tab-item img {
		width: 24px;
		height: 24px;
		/* margin-top: 3px; */
		vertical-align: middle;
	}
	.active{
		color: red;
	}
</style>

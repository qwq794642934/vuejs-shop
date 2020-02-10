<template>
	<div class="controlbar">
		<div class="controlbar-item"
		v-for="(item, index) in titles"
		:key="index"
		@click="itemClick(index)"
		:class="{active : currentIndex === index }">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'controlbar',
		props:{
			titles:{
				type: Array,
				default(){
					return ['新款', '热销', '流行']
				}
			}
		},
		data(){
			return {
				currentIndex : 0
			}
		},
		methods:{
			itemClick(index){
				// console.log('click')
				this.$emit('itemClick', index)
				this.currentIndex = index
			}
		}
	}
</script>

<style scoped>
	.controlbar{
		display: flex;
		text-align: center;
		background-color: #ffff7f;

	}
	.controlbar span{
		padding: 5px;
	}

	.controlbar-item{
		flex: 1;
		height: 40px;
		line-height: 40px;
		padding-bottom: 20px;
	}
	.active span{
		border-bottom: #FF8198 3px solid;
	}
</style>

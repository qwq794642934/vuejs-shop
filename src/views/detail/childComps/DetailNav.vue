<template>
		<nav-bar>
			<img slot="left" src="~Img/common/back.svg" @click="clickBack">
			<div slot="center" class="nav">
				<div class="nav-item"
				:class="{active : currentIndex === index}"
				v-for="(item, index) in titles"
				:key="index"
				@click="ItemClick(index)"
				>{{item}}</div>
			</div>
		</nav-bar>
</template>

<script>
	import NavBar from 'Components/common/navbar/NavBar'
	export default {
		name: 'detailnav',
		components:{
			NavBar
		},
		props:{
			titles: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currentIndex: 0
			}
		},
		methods:{
			ItemClick(index){
				this.currentIndex = index
				this.$emit('titleClick', index)
			},
			clickBack(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.nav{
		display: flex;
		text-align: center;
		font-size: 18px;
	}
	.nav-item{
		flex: 1;
	}
	.active{
		color: var(--color-tint);
	}
	img{
		margin-top: 12px;
	}
</style>

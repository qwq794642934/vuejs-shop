<template>
	<grid-view
	:cols="3"
	:lineSpace="10"
	:v-margin="20"
	v-if="subCategories.list">
		<div class="item"
		v-for="(item , index) in subCategories.list"
		:key="index">
			<img class="item-img" :src="item.image" alt="">
			<div class="item-text">{{item.title}}</div>
		</div>
	</grid-view>
</template>

<script>
	import GridView from "Components/common/gridview/GridView"
	export default {
		name: 'rcontent',
		components:{
			GridView
		},
		props:{
			subCategories:{
				type: Object,
				default(){
					return {}
				}
		}
	},
	}
</script>

<style scoped>
	.item{
		text-align: center;
		font-size: 12px;
	}
	.item-img{
		width: 80%;
	}

</style>

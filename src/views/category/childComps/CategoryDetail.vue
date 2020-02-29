<template>
	<grid-view>
		<good-list />
	</grid-view>
</template>

<script>
	import GridView from "Components/common/gridview/GridView"
	import GoodList from "Components/content/goods/GoodList"
	export default {
		name: 'categorydetail',
		components:	{
			GridView,
			GoodList
		},
		props:{
			
		}
}
</script>

<style scoped>

</style>

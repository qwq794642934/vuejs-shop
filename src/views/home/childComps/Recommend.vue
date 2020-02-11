<template>
	<div class="recommend"><!-- @load="reImgLoad" -->
		<div class="recommend-item" v-for="(item, index) in recommends" :key="index">
			<img :src="item.image" alt="" />
			<div class="text">{{ item.title }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'recommend',
	props: {
		recommends: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data(){
		return {
			isLoad : false
		}
	},
	methods:{
		// reImgLoad(){
		// 	if(!this.isLoad){
		// 		this.$bus.$emit('reImgLoad')
		// 		this.isLoad = true
		// 	}

		// }
	}
};
</script>

<style scoped>
.recommend {
	/* display: flex;
	width: 100%;
	margin-top: 0.625rem;
	font-size: 0.875rem;
	border-bottom: 10px solid #eee;
	margin-bottom: 5px;
	 */
	display: flex;
	margin-top: 10px;
	font-size: 14px;
	padding-bottom: 30px;
	border-bottom: 10px solid #eee;
}

.recommend-item {
	/* padding: 5px;
		text-align: center;
		flex: 1; */
	flex: 1;
	text-align: center;
}
.recommend img {
	width: 80px;
	height: 80px;
	margin-bottom: 10px;
}
</style>

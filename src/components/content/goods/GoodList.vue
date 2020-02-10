<template>
	<grid-view><good-item :goodItem="item" v-for="(item, index) in goods" :key="index" /></grid-view>
</template>

<script>
import GoodItem from './GoodItem';
import GridView from '../../common/gridview/GridView';
export default {
	name: 'goodlist',
	components: {
		GoodItem,
		GridView
	},
	props: {
		goods: {
			type: Array,
			default() {
				return [];
			}
		}
	}
};
</script>

<style scoped></style>

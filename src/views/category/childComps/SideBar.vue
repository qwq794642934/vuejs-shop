<template>
	<scroll class="side-bar" :click="true">
		<div class="title" :class="{ active: currtenIndex === index }" v-for="(item, index) in titles" :key="index" @click="titleClick(index)">{{ item.title }}</div>
	</scroll>
</template>

<script>
import Scroll from 'Components/common/scroll/Scroll';
export default {
	name: 'sidebar',
	components: {
		Scroll
	},
	props: {
		titles: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			currtenIndex: 0
		};
	},
	methods: {
		titleClick(index) {
			// console.log(index)
			this.currtenIndex = index;
			this.$emit('sideClick', index);
		}
	}
};
</script>

<style scoped>
.side-bar {
	height: 100%;
	width: 100px;

	background-color: #f2f3f5;
	box-sizing: border-box;
}
.title {
	height: 45px;
	line-height: 45px;
	text-align: center;
	font-size: 16px;
}
.active {
	font-weight: 700;
	color: var(--color-high-text);
	background-color: #fff;
	border-left: 3px solid var(--color-high-text);
}
</style>

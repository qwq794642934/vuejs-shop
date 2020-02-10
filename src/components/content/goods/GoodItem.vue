<template>
	<div class="goods">
		<img :src="getimg" alt="" @load="imgLoad" />
		<div class="goods-info">
			<p class="title">{{ goodItem.title }}</p>
			<span class="price">￥{{ goodItem.price }}</span>
			<span class="collect">{{ goodItem.cfav }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'gooditem',
	props: {
		goodItem: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	computed: {
		getimg() {
			return this.goodItem.show.img || this.goodItem.imge || this.goodItem.img;
		}
	},
	methods: {
		imgLoad() {
			// console.log('图片加载完成')
			this.$bus.$emit('itemImgLoad');
		}
	}
};
</script>

<style scoped>
.goods {
	padding-bottom: 40px;
	position: relative;
	width: 48%;
	margin-top: 10px;
}
.goods img {
	width: 100%;
	border-radius: 10px;
}
.goods-info {
	font-size: 12px;
	position: absolute;
	bottom: 5px;
	left: 0;
	right: 0;
	overflow: hidden;
	text-align: center;
}
.goods-info p {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom: 3px;
}
.goods-info .price {
	color: var(--color-high-text);
	margin-right: 20px;
}

.goods-info .collect {
	position: relative;
}

.goods-info .collect::before {
	content: '';
	position: absolute;
	left: -15px;
	top: 0;
	width: 14px;
	height: 14px;
	background: url('~Img/common/collect.svg') 0 0/14px 14px;
}
</style>

<template>
	<div v-if="Object.keys(paramsInfo).length !== 0" class="param-info">
		<table v-for="(table, x) in paramsInfo.size" :key="x" class="info-size">
			<tr v-for="(tr, y) in table" :key="y">
				<td v-for="(td, z) in tr" :key="z">{{ td }}</td>
			</tr>
		</table>

		<table class="info-param">
			<tr v-for="(info, index) in paramsInfo.infos" :key="index">
				<td class="info-param-key">{{ info.key }}</td>
				<td class="info-param-value">{{ info.value }}</td>
			</tr>
		</table>

		<div class="param-image" v-if="paramsInfo.images.length !== 0"><img :src="paramsInfo.image" alt="" /></div>
	</div>
</template>

<script>
export default {
	name: 'detailparamsInfo',
	props: {
		paramsInfo: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped>
.param-info {
	padding: 20px 15px;
	font-size: 14px;
	border-bottom: 5px solid #f2f5f8;
}
.param-info table {
	width: 100%;
	border-collapse: collapse;
}
.param-info table tr {
	height: 42px;
}

.param-info table tr td {
	border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
	/*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
	width: 95px;
}

.info-param {
	border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.info-param-value {
	color: #eb4868;
}

.info-img img {
	width: 100%;
}
</style>

<template>
	<div id="category">
		<category-nav class="nav"><div slot="center">分类</div></category-nav>
		<div class="content">
			<side-bar class="left" :titles="categories" @sideClick="sideClick" />
			<scroll id="tab-content" ref="scroll" :probe-type="3" :click="true" :pull-up-load="true" @scroll="contentScroll">
				<r-content :subCategories="showSubCategories" />
				<control-bar
				ref="controlBar"
				:titles="['综合', '新品', '销量']"
				@itemClick="tabClick" />
				<goods-list :goods="showCategoryDetail"/>
			</scroll>
			<back-top @click.native="topClick" v-if="isBack" />
		</div>
	</div>
</template>
<script>
import CategoryNav from 'Components/common/navbar/NavBar';
import Scroll from 'Components/common/scroll/Scroll';

import { getCategory, getSubCategory, getCategoryDetail } from 'Network/category';
import { itemListenerMixin, backTopMixin, controlBar, goodList, scroll } from 'Common/minxin';

import SideBar from './childComps/SideBar';
import RContent from './childComps/RConten';
import CategoryDetail from "./childComps/CategoryDetail"
export default {
	name: 'Category',
	mixins: [itemListenerMixin, backTopMixin, controlBar, goodList, scroll],
	components: {
		CategoryNav,
		Scroll,
		SideBar,
		RContent,
		CategoryDetail
	},
	data() {
		return {
			categories: [],
			categoryData: {},
			currentIndex: -1,
			tabOffsetTop: 0,
			saveY: 0,
		};
	},
	///------事件监听---------
	methods: {
		_getCategory() {
			getCategory().then(res => {
				// 1. 获取分类数据

				let data = res.data.category.list;
				this.categories = data;
				//2. 为每个子类数据初始化
				for (let i = 0; i < data.length; i++) {
					this.categoryData[i] = {
						subCategories: {},
						categoryDetail: {
							pop: [],
							new: [],
							sell: []
						}
					};
				}

				//3. 请求第一个分类数据
				this._getSubcategory(0);
			});
		},
		_getSubcategory(index) {
			this.currentIndex = index;
			const maitKey = this.categories[index].maitKey;
			// console.log(maitKey)
			getSubCategory(maitKey).then(res => {
				console.log(res);
				this.categoryData[index].subCategories = res.data;
				this.categoryData = { ...this.categoryData };
				this._getCategoryDetail('pop');
				this._getCategoryDetail('sell');
				this._getCategoryDetail('new');
			});
		},
		_getCategoryDetail(type) {
			// 1.获取请求的miniWallkey
			const miniWallkey = this.categories[this.currentIndex].miniWallkey;
			// 2.发送请求,传入miniWallkey和type
			getCategoryDetail(miniWallkey, type).then(res => {
				// 3.将获取的数据保存下来
				console.log(res)
				this.categoryData[this.currentIndex].categoryDetail[type] = res;
				this.categoryData = { ...this.categoryData };
			});
		},
		sideClick(index) {
			this._getSubcategory(index);
		},
		contentScroll(position) {
			this.listenShowBackTop(-position)
			this.isFixed = -position > this.tabOffsetTop;
		},
	},
	///--------网络请求----------------
	created() {
		this._getCategory();
	},

	computed: {
		showSubCategories() {
			if (this.currentIndex === -1) return {};
			return this.categoryData[this.currentIndex].subCategories;
		},
		showCategoryDetail(){
			if (this.currentIndex === -1)return []
			return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
		}
	}
};
</script>

<style scoped>
#category {
	height: 100vh;
	position: relative;
	overflow: hidden;
}

.nav {
	background-color: var(--color-tint);
	font-weight: 700;
	color: #fff;
}
.content {
	position: absolute;
	left: 0;
	right: 0;
	top: 44px;
	bottom: 49px;
	overflow: hidden;
	display: flex;
}

#tab-content {
	height: 100%;
	flex: 1;
}
</style>

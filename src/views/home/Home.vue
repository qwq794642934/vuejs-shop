<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<control-bar ref="topcontrolBar" v-show="isFixed" class="ontop" :titles="['流行', '新款', '精选']" @itemClick="tabClick" />
		<scroll ref="scroll" @pullingUp="loadMore" :probe-type="3" :click="true" :pull-up-load="true" @scroll="contentScroll">
			<!-- <h1>首页</h1> -->
			<!--  -->
			<home-swiper :swiper-list="banners" @swiperImgLoad="swiperImgLoad" />
			<recommend :recommends="recommends" />
			<feature />
			<control-bar ref="controlBar" :titles="['流行', '新款', '精选']" @itemClick="tabClick" />
			<goods-list :goods="showgoods" />
		</scroll>
		<back-top @click.native="topClick" v-if="isBack" />
	</div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper';
import Recommend from './childComps/Recommend';
import Feature from './childComps/Feature';

import ControlBar from 'Components/common/controlbar/ControlBar';
import NavBar from 'Components/common/navbar/NavBar';
import Scroll from 'Components/common/scroll/Scroll';

import GoodsList from 'Components/content/goods/GoodList';

// import { debounce } from 'Common/utils.js';
import { getHomeMultidata, getHomeGoods } from 'Network/home';
import {itemListenerMixin, backTopMixin} from "Common/minxin"

export default {
	name: 'Home',
	components: {
		HomeSwiper,
		Recommend,
		Feature,
		ControlBar,
		NavBar,
		Scroll,
		GoodsList
	},
	data() {
		return {
			banners: [],
			recommends: [],
			currentIndex: 0,
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] }
			},
			currentType: 'pop',
			tabOffsetTop: 0,
			isFixed: false,
			saveY: 0,

		};
	},
	mixins:[itemListenerMixin, backTopMixin],
	created() {
		// 1 请求多数据
		this.getHomeMultidata();
		//2.请求商品数据
		this.getHomeGoods('new');
		this.getHomeGoods('pop');
		this.getHomeGoods('sell');
	},
	mounted() {

	},
	activated() {
		console.log(this.saveY);
		this.$refs.scroll.refresh();
		this.$refs.scroll.scrollToY(this.saveY);
	},
	deactivated() {
		console.log(this.saveY, 'deactivated');
		this.saveY = this.$refs.scroll.getScrollY();

		this.$bus.$off('itemImgLoad', this.itemImagListener);
	},
	methods: {
		// ************
		// 	事件监听
		// ***********
		swiperImgLoad() {
			this.newRefresh()
			// this.$refs.scroll.refresh();
			console.log(this.$refs.controlBar.$el.offsetTop);
			if (this.$refs.controlBar.$el.offsetTop >= 637) {
				this.tabOffsetTop = this.$refs.controlBar.$el.offsetTop;
			} else {
				this.tabOffsetTop = 637;
			}
		},
		loadMore() {
			this.getHomeGoods(this.currentType);
		},
		contentScroll(position) {
			this.listenShowBackTop(-position)
			this.isFixed = -position > this.tabOffsetTop;
		},
		tabClick(index) {
			const type = ['pop', 'new', 'sell'];
			this.currentType = type[index];
			this.$refs.topcontrolBar.currentIndex = index;
			this.$refs.controlBar.currentIndex = index;
		},

		/*************************
		 *    网络请求           **
		 *************************/
		getHomeMultidata() {
			getHomeMultidata().then(res => {
				// console.log(res)
				this.banners = res && res.data && res.data.banner && res.data.banner.list;
				this.recommends = res && res.data && res.data.recommend && res.data.recommend.list;
			});
		},
		getHomeGoods(type) {
			const page = this.goods[type].page + 1;
			getHomeGoods(type, page).then(res => {
				const data = res && res.data && res.data.list;
				this.goods[type].list.push(...data);
				this.goods[type].page += 1;
				// 完成上拉加载更多
				this.$refs.scroll.finishPullUp();
			});
		}
	},
	computed: {
		showgoods() {
			return this.goods[this.currentType].list;
		}
	}
};
</script>

<style scoped>
#home {
	height: 100vh;
	position: relative;
}
.wrapper {
	position: absolute;
	top: 44px;
	left: 0;
	right: 0;
	bottom: 49px;
	overflow: hidden;
}
.home-nav {
	background-color: var(--color-tint);
	color: #ffffff;
}
.ontop {
	z-index: 9;
	position: relative;
}
</style>

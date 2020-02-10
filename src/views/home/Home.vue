<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<control-bar ref="controlBar" v-if="isFixed" class="ontop" :titles="['流行', '新款', '精选']" @itemClick="tabClick" />
		<scroll ref="scroll" @pullingUp="loadMore" :probe-type="3" :click="true" :pull-up-load="true" @scroll="contentScroll">
			<!-- <h1>首页</h1> -->
			<home-swiper :swiperList="banners" />
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
import BackTop from 'Components/common/backtop/BackTop';

import GoodsList from 'Components/content/goods/GoodList';

import { getHomeMultidata, getHomeGoods } from 'Network/home';
import { debounce } from 'Common/utils.js';
import BS from 'better-scroll';

export default {
	name: 'Home',
	components: {
		HomeSwiper,
		Recommend,
		Feature,
		ControlBar,
		NavBar,
		Scroll,
		BackTop,
		GoodsList
	},
	created() {
		// 1 请求多数据
		this.getHomeMultidata();
		//2.请求商品数据
		this.getHomeGoods('new');
		this.getHomeGoods('pop');
		this.getHomeGoods('sell');
	},
	mounted() {
		// 防抖函数使用
		const refresh = debounce(this.$refs.scroll.refresh, 500);
		//3.监听item图片加载完成
		this.$bus.$on('itemImgLoad', () => {
			// console.log('图片监听')
			refresh();
		});

		// 轮播图图片监听['swiperImgLoad','reImgLoad']
		this.$bus.$on(['swiperImgLoad','reImgLoad'], () => {
			this.tabOffsetTop = this.$refs.controlBar.$el.offsetTop
		
		});

	},
	methods: {
		// ************
		// 	事件监听
		// ***********
		loadMore() {
			console.log('上拉加载更多！');
			this.getHomeGoods(this.currentType);
		
		},
		contentScroll(position) {
			this.isBack = position < -1000;
			this.isFixed = -position > this.tabOffsetTop
		},
		tabClick(index) {
			const type = ['pop', 'new', 'sell'];
			this.currentType = type[index];
		},
		topClick() {
			// console.log(this.$refs.scroll)
			this.$refs.scroll.scrollTo(0, 0, 1000);
		},
		/*************************
		 *    网络请求           **
		 *************************/
		getHomeMultidata() {
			getHomeMultidata()
				.then(res => {
					// console.log(res)
					this.banners = res && res.data && res.data.banner && res.data.banner.list;
					this.recommends = res && res.data && res.data.recommend && res.data.recommend.list;
				})
				.catch(err => console.log(err));
		},
		getHomeGoods(type) {
			const page = this.goods[type].page + 1;
			getHomeGoods(type, page).then(res => {
				const data = res && res.data && res.data.list;
				this.goods[type].list.push(...data);
				this.goods[type].page += 1;
				// this.scroll.finishPullUp()
				// 完成上拉加载更多
				this.$refs.scroll.finishPullUp();
			});
		}
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
			isBack: false,
			tabOffsetTop: 0,
			isFixed: false
		};
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
.ontop{
	z-index: 9;
	position: relative;
}

</style>

<template>
	<div id="detail">
		<detail-nav :titles="titles" @titleClick="titleClick"  ref="nav"/>
		<scroll class="content" @scroll="contentScroll" ref="scroll" :probeType="3" :click="true" :pull-up-load="true">
			<detail-swiper :images="topImages" />
			<detail-base-info :goods="GoodInfo" />
			<detail-shop-info :shop="Shop" />
			<detail-show-info :detail-info="detailInfo" @imageLoad="showImageLoad" />
			<detail-params-info ref="param" :params-info="GoodParams" />
			<detail-comment-info ref="comment" :comment-info="commentInfo" />
			<goods-list ref="recommend" :goods="recommendList" />
		</scroll>
		<bottom-bar @addToCart="addToCart"/>
	</div>
</template>

<script>
import DetailNav from './childComps/DetailNav';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailShowInfo from './childComps/DetailShowInfo';
import DetailParamsInfo from './childComps/DetailParamsInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import BottomBar from "./childComps/BottomBar"

import GoodsList from 'Components/content/goods/GoodList';
import Scroll from 'Components/common/scroll/Scroll';

import { getDetail, GoodInfo, Shop, GoodParams, getRecommend } from 'Network/detail';
import { itemListenerMixin} from 'Common/minxin';
import { mapActions } from "vuex"
import { debounce } from 'Common/utils.js';
export default {
	name: 'Detail',
	components: {
		DetailNav,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo,
		DetailShowInfo,
		DetailParamsInfo,
		DetailCommentInfo,
		Scroll,
		GoodsList,
		BottomBar,
	},
	mixins: [itemListenerMixin],
	created() {
		this.iid = this.$route.query.iid;
		this._getDetail();
		this._getRecommend();
	},
	destroyed() {
		this.$bus.$off('itemImgLoad', this.itemImagListener);
	},
	mounted() {},
	methods: {
		...mapActions(['addCart']),
		_getDetail() {
			getDetail(this.iid).then(res => {
				const data = res && res.result;
				// 1. 获取详情轮播图
				this.topImages = data.itemInfo && data.itemInfo.topImages;
				// 2. 获取商品详情
				this.GoodInfo = new GoodInfo(data.itemInfo, data.columns, data.shopInfo.services);
				//3.获取店铺详情
				this.Shop = new Shop(data.shopInfo);
				// 4.获取商品细节数据
				this.detailInfo = data.detailInfo;
				//5.获取商品参数
				this.GoodParams = new GoodParams(data.itemParams.info, data.itemParams.rule);
				//6.请求评论数据
				if (data.rate.cRate !== 0) {
					this.commentInfo = data.rate.list[0];
				}
				this.getThemeTop = debounce(() => {
					this.scrollToYs.push(0);
					this.scrollToYs.push(this.$refs.param.$el.offsetTop);
					this.scrollToYs.push(this.$refs.comment.$el.offsetTop);
					this.scrollToYs.push(this.$refs.recommend.$el.offsetTop);
					this.scrollToYs.push(Number.MAX_VALUE)
					console.log(this.scrollToYs);
				},100)

			});
		},
		titleClick(index) {
			console.log(index);
			this.$refs.scroll.scrollToY(-this.scrollToYs[index], 500)
		},
		contentScroll(position){
			let p = -position
			// console.log(p)
			let length =this.scrollToYs.length
			for(let i =0; i< length; i++){
				// if(this.currentIndex !== i &&
				// ((i < length-1 && p >= this.scrollToYs[i] && p < this.scrollToYs[i+1])
				// ||(i === length -1 && p >= this.scrollToYs[i]))){
				// 	this.currentIndex = i
				// 	this.$refs.nav.currentIndex = this.currentIndex
				// }
				if(this.currentIndex != i && p >= this.scrollToYs[i] && p < this.scrollToYs[i+1]){
					this.currentIndex = i
					this.$refs.nav.currentIndex = this.currentIndex
				}
			}
		},
		showImageLoad() {
			console.log('图片加载完成待刷新');
			// this.$refs.scroll.refresh();
			this.newRefresh();
			this.getThemeTop()
			console.log('图片完成刷新');
		},
		_getRecommend() {
			getRecommend().then(res => {
				console.log(res);
				let data = res.data;
				this.recommendList = data.list;
			});
			},
			addToCart(){
				const product = {}
				product.iid = this.iid
				product.title = this.GoodInfo.title
				product.desc = this.GoodInfo.desc
				product.price = this.GoodInfo.realPrice
				product.image = this.topImages[0]
				console.log('购物车')
				//普通方法
				// this.$store.dispatch('addCart', product)
				// .then(res => this.$toast.showMSG(res))
				// .catch(err => this.$toast.showMSG(err))

				// // 使用 vuex 里的 mapActions 方法
				this.addCart(product)
				.then(res => this.$toast.showMSG(res))
				.catch(err => this.$toast.showMSG(err))
			}
		},
	data() {
		return {
			iid: null,
			titles: ['商品', '参数', '评论', '推荐'],
			topImages: [],
			GoodInfo: {},
			Shop: {},
			detailInfo: {},
			GoodParams: {},
			commentInfo: {},
			recommendList: [],
			scrollToYs: [],
			currentIndex: 0,
			getThemeTop: null
		};
	}
};
</script>

<style scoped>
#detail {
	height: 100vh;
	position: relative;
	z-index: 9;
	background-color: #ffffff;
}
.content {
	height: calc(100% - 44px);
	overflow: hidden;
}
</style>

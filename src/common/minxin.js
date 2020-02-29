import {
	debounce
} from 'Common/utils.js';
import BackTop from 'Components/common/backtop/BackTop';
import ControlBar from 'Components/common/controlbar/ControlBar';
import GoodsList from 'Components/content/goods/GoodList';
import Scroll from 'Components/common/scroll/Scroll';

export const itemListenerMixin = {
	data() {
		return {
			itemImagListener: null,
			newRefresh: null
		}
	},
	mounted() {
		// 防抖函数使用
		this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
		//3.监听item图片加载完成
		this.itemImagListener = () => {
			this.newRefresh()
		}
		this.$bus.$on('itemImgLoad', this.itemImagListener);
		console.log('我是混入的内容', this.$route.meta.title)
	}
}

export const backTopMixin = {
	components:{
		BackTop
	},
	data(){
		return{
			isBack: false,
		}
	},
	methods:{
		topClick() {
			this.$refs.scroll.scrollTo(0, 0, 1000);
		},
		listenShowBackTop(p){
			this.isBack = p > 1000;
		}
	}
}
export const scroll = {
	components:{
		Scroll
	},
	methods:{
		contentScroll(position) {
			this.listenShowBackTop(-position)
			this.isFixed = -position > this.tabOffsetTop;
		},
	}
}

export const controlBar = {
	components:{
		ControlBar
	},
	data(){
		return{
			currentType: 'pop',
			isFixed: false,
		}
	},
	methods:{
		tabClick(index) {
			const type = ['pop', 'new', 'sell'];
			this.currentType = type[index];
			if(this.$route.path === '/home'){
				this.$refs.topcontrolBar.currentIndex = index;
				this.$refs.controlBar.currentIndex = index;
			}
			
		}
	}
}

export const goodList = {
	components:{
		GoodsList
	}
}

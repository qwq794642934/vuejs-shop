import {
	debounce
} from 'Common/utils.js';
import BackTop from 'Components/common/backtop/BackTop';

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

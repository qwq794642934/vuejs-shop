<template>
	<div>
		<tab-bar>
			<tab-bar-item path="/home" activeColor="green">
				<img src="~Img/tabbar/home.png" alt="" slot="item-icon" />
				<img src="~Img/tabbar/home_active.png" alt="" slot="item-icon-active" />
				<div slot="item-text">首页</div>
			</tab-bar-item>
			<tab-bar-item path="/category" activeColor="gold">
				<img src="~Img/tabbar/category.png" alt="" slot="item-icon" />
				<img src="~Img/tabbar/category_active.png" alt="" slot="item-icon-active" />
				<div slot="item-text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="/cart" activeColor="pink">
				<img src="~Img/tabbar/cart.png" alt="" slot="item-icon" />
				<img src="~Img/tabbar/cart_active.png" alt="" slot="item-icon-active" />
				<div slot="item-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="/profile" activeColor="white">
				<img src="~Img/tabbar/profile.png" alt="" slot="item-icon" />
				<img src="~Img/tabbar/profile_active.png" alt="" slot="item-icon-active" />
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
import TabBar from 'Components/common/tabbar/TabBar';
import TabBarItem from 'Components/common/tabbar/TabBarItem';
export default {
	name: 'MainTabBar',
	components: {
		TabBar,
		TabBarItem
	}
};
</script>

<style scoped></style>

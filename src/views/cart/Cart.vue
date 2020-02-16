<template>
  <div id="cart">
		<cart-nav class="nav"/>
		<cart-list/>
		<bottom-bar/>
  </div>
</template>

<script>
	import CartNav from "./childComps/CartNav"
	import CartList from "./childComps/CartList"
	import BottomBar from "./childComps/CartBottomBar"
  export default {
    name:'Cart',
		components:{
			CartNav,
			CartList,
			BottomBar
		}
  }
</script>

<style scoped>
#cart{
	position: relative;
	height: 100vh;
}
.nav{
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
}

</style>

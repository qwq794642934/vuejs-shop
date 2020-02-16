<template>
	<nav-bar class="nav"><div slot="center" >购物车({{cartLenght}})</div></nav-bar>
</template>

<script>
	import NavBar from 'Components/common/navbar/NavBar'
	import {mapGetters} from 'vuex'
	export default {
		name: 'cartnav',
		components:{
			NavBar
		},
		computed:{
			...mapGetters(['cartLenght'])

			}
		}
</script>

<style scoped>
.nav{
		background-color: var(--color-tint);
		color: #ffff
	}
</style>

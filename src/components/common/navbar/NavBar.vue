<template>
	<div class="nav-bar">
		<div class="left"> <slot name="left"></slot> </div>
		<div class="center"> <slot name="center"></slot> </div>
		<div class="right"> <slot name="right"></slot> </div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar'
	}
</script>

<style scoped>
.nav-bar{
	display: flex;
	height: 44px;
	line-height: 44px;
	text-align: center;
	box-shadow: -1px 3px 1px rgba(134, 134, 134, .1);
}
.left,.right{
	width: 60px;

}
.center{
	flex: 1;
	font-weight: 900;
	font-size: 1.25rem;
}

</style>

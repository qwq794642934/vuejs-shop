<template>
	<div class="icon-selecte" :class="{'selector-active': checked }" >
			<img src="~Img/cart/tick.svg" alt="">
	</div>
</template>

<script>
	export default {
		name: 'checkbutton',
		props:{
			value: {
				type: Boolean,
				default: true
			}
		},
		data(){
			return{
				checked: this.value
			}
		},
		methods:{

		},
		watch:{
			value(nv){
				this.checked = nv
			}
		}
	}
</script>

<style scoped>
.icon-selecte{
	width: 22px;
	height: 22px;
	border: 1px gray solid;
	border-radius: 50%;
}
.selector-active{
	background-color: red;
	border: 1px red solid;
}
</style>

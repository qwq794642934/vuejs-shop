<template>
	<div id="user">
		<div class="user-info">
			<slot name="icon"><img class="user-icon" src="~Img/profile/icon.png" alt="" /></slot>
			<div class="login-info">
				<slot name="nickname"><span>登录/注册</span></slot>

				<div class="phone">
					<span class="iconfont icon-ad79"/>
					<slot name="iphone">暂无手机号</slot>
				</div>
			</div>
		</div>
		<span class="arrow iconfont icon-dayuhao" />
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
	@import url("https://at.alicdn.com/t/font_1647976_9rw0cuend5e.css");
	#user{
		display:flex;
		background-color: var(--color-tint);
		color: #FFFFFF;
		align-items: center;
		justify-content: space-between;
	}
	.user-info{
		padding: 15px 10px;
		display: flex;
		align-items: center;

	}
	.user-icon{
		width: 70px;
		height: 70px;
	}
	.login-info{
		margin-left: 10px;
		font-size: 15px;
	}
	.phone{
		margin-top: 5px;
	}
	.arrow{
		font-size: 15px;
		margin: 10px;
	}
</style>

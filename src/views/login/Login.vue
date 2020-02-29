<template>
	<div id="login">
		<!-- 状态栏 -->
		<nav-bar class="nav"><div slot="center">登录</div></nav-bar>
		<!-- 登录框 -->
		<div class="login-item">
			<label for="usrn" >用户名：</label>
			<input id="usrn" type="text" maxlength="11" placeholder="请输入用户名" v-model="formData.username">
		</div>

		<div class="login-item" :class="{ error: !formData.username }">
			<label for="pwd" >密码：</label>
			<input id="pwd" type="password" maxlength="18" placeholder="请输入密码" v-model="formData.passworld">
		</div>

		<div class="login-btn" :class="{ error: !formData.passworld }">
			<button type="button" @click="goLogin" class="btn-login btn">登录</button>
			<button type="button" class="btn-rigister btn">注册</button>
		</div>
	</div>
</template>

<script>
	import NavBar from "Components/common/navbar/NavBar"
	export default {
		name: 'login',
		components:{
			NavBar
		},
		data(){
			return {
				formData: {
					username: '',
					passworld: ''
				}
			}
		},
		methods:{
			goLogin(){
				console.log("用户名:" + this.formData.username, '密码:' + this.formData.passworld)
				if (!this.formData.username) {
				        this.$notify({
				          type: "danger",
				          message: "用户名不能为空"
				        });
				      } else if (!this.formData.password) {
				        this.$notify({
				          type: "danger",
				          message: "密码不能为空"
				     })
				}
			}
		}
	}
</script>

<style scoped>
	#login {
	  font-size: 14px;
	  width: 100%;
	  color: #333333;
	}
	.nav{
		background-color: var(--color-tint);
		color: #FFFFFF;
	}
	.login-item{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 340px;
		margin: 30px auto;
	}
	.login-item label {
	  font-size: 16px;
	  display: block;
	  width: 70px;
	}
	.login-item input{
		font-size: 14px;
		  line-height: 36px;
		  display: block;
		  width: 270px;
		  height: 36px;
		  padding-left: 10px;
		  border: 1px solid #cccccc;
		  border-radius: 5px;
		  outline: none;
		  background: none;
	}
	.login-item input:focus{
		border: 1px solid blue;
	}
	.login-item.error input:focus {
	  border: 1px solid red;
	}
	.login-btn {
	  display: flex;
	  justify-content: space-between;
	  width: 340px;
	  margin: 0 auto;
	}
	.btn{
		width: 70px;
		height: 30px;
		border-radius: 5px;
	}
	.btn-rigister{
		background-color: #FFFFFF;
		border: 1px solid #00aaff;
		color: #00aaff;
	}
	.btn-login{
	background-color: #FFFFFF;
	border: 1px solid #000000;
	color: #000000;
	}

</style>

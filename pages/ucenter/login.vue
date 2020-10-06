<template>
	<view>
		<view>
			<input placeholder="请输入用户名" v-model="username"/>
		</view>
		<view>
			<input placeholder="请输入密码" v-model="password" />
		</view>
		<view @click="login()">登录</view>
	</view>
</template>

<script>
	
	export default{
		data(){
			return {
				username:undefined,
				password:undefined,
			}
		},
		methods:{
			login:function(){
				if(this.username == undefined || this.password == undefined){
					console.log("请输入正确的用户和密码");
				}else{
					var url = "https://cdplay.cn/api/auth/login";
					this.$http.post(url,{username:this.username,password:this.password}).then((response)=>{
						//登录成功
						var token = response.body.data.token;
						if(token){
							uni.setStorage({
								key:"token",
								data:token,
								success() {
									console.log("登录成功："+token);
									var pages = getCurrentPages();
									var prevPage = pages[pages.length - 2]; //上一个页面
									//prevPage.onShow(token);
									uni.navigateBack();
								},
								fail() {
									console.log("登录失败");
								}
							})
						}
					},(error)=>{
						console.log(error);
					});
				}
			}
		}
	}
	
	
	
</script>

<style>
	
</style>

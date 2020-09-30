<template>
	<view>
		<!--标题-->
		<!-- <title :title="brandInfo.name"></title> -->
		<!--品牌信息-->
		<view class="box">
			<view class="top">
				<image :src="brandInfo.app_list_pic_url"></image>
				<text>{{brandInfo.name}}</text>
			</view>
			<text class="desc">{{brandInfo.simple_desc}}</text>
		</view>
		<view class="line"></view>
		<!--品牌列表-->
		<view class="grid">
			<view v-for="(item,index) in brandList">
				<view class="item">
					<image :src="item.app_list_pic_url"></image>
					<text>{{item.name}}</text>
					<text class="price">￥ {{item.floor_price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data(){
			return {
				brandList:[],
				brandId:String,
				brandInfo:Object
			}
		},
		props:{
			
		},
		onLoad(options) {
			console.log("onload");
			this.brandId = options.brandId;
			this.getBrandList();
			this.getBrandDetail();
		},
		methods:{
			
			//获取品牌列表数据
			getBrandList:function(){
				var url = "https://cdplay.cn/api/brand/list?page=1&size=1000"; 
				console.log("url:"+url);
				/* uni.request({
					url:url,
					success: (response) => {
						console.log("response:"+response);
					},
					fail: () => {
						uni.showModal({
							content:"请求失败，请重试!",
							showCancel:false
						})
					}
				}) */
				this.$http.get(url).then((response)=>{
					console.log("response:"+response);
					this.brandList = response.body.data.data;
				},(error)=>{
					console.log("error:"+error);
				});
			},
			//获取品牌详情数据
			getBrandDetail:function(){
				var url = "https://cdplay.cn/api/brand/detail?id="+this.brandId;
				this.$http.get(url).then((response)=>{
					this.brandInfo = response.body.data.brand;
				},(error)=>{
					console.log(error);
				});
			}
		},
		onShow:function() {
			console.log("onShow");
		}
	}
	
</script>

<style>
	.box{
		width: 100%;
	}
	.line{
		height: 20rpx;
		background-color: #F1F1F1;
	}
	.top{
		position: relative;
		height: 300rpx;
		line-height: 300rpx;
		background-color: #F1F1F1;
	}
	.top image{
		height: 300rpx;
		width: 100%;
	}
	.top text{
		position: absolute;
		left: 0rpx;
		margin: 0 auto;
		vertical-align: middle;
		text-align: center;
		height: 40rpx;
		width: 100%;
		color: #FFFFFF;
		text-shadow: 2rpx 0 0 #808080;
		text-decoration: underline;
	}
	.desc{
		min-height: 150rpx;
		text-align: center;
		padding:20rpx 0rpx;
		font-size: 28rpx;
		justify-content: center;
		vertical-align: middle;
		
	}
	.grid{
		display: grid;
		display: -webkit-grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 250rpx 250rpx;
		padding-top: 20rpx;
	}
	.grid .item{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.grid .item image{
		width: 200rpx;
		height: 150rpx;
		align-self: center;
		margin-bottom: 20rpx;
	}
	.grid .item text{
		font-size: 24rpx;
		text-align: center;
	}
	.grid .item .price{
		color: #A52A2A;
	}
	
</style>

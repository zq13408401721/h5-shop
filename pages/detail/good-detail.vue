<template>
	<view>
		<view>
			<!--轮播图-->
			<view></view>
			<!--信息-->
			<view></view>
			<!--评论-->
			<view></view>
			<!--参数-->
			<view></view>
			<!--详情-->
			<view v-html="this.goodInfo">
				
			</view>
		</view>
		
		<view class="dialog-box">
			<!--弹框-->
			<view class="dialog">
				<!--弹框内容区域-->
				<view class="dialog-area"></view>
			</view>
			<!--底部导航-->
			<view class="bottom">
				<view class="item">
					<image src="../../static/ic_collect.png"></image>
				</view>
				<view class="cart">
					<image src="../../static/img_cart.png"></image>
					<text class="number">1</text>
				</view>
				<view class="item">
					<text class="buy">立即购买</text>
				</view>
				<view class="item">
					<text class="add-cart">加入购物车</text>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return {
				goodInfo:"",
			}
		},
		onLoad(options) {
			this.getGoodInfo(1155000);
		},
		methods:{
			getGoodInfo:function(id){
				var url="https://cdplay.cn/api/goods/detail?id="+id;
				this.$http.get(url).then((response)=>{
					console.log("response:"+response);
					this.goodInfo = response.body.data.info.goods_desc;
				},(error)=>{
					console.log("error:"+error);
				});
			}
		}
	}
	
	
</script>

<style>
	
	html,body{
		padding: 0;
		margin: 0;
	}
	
	.dialog-box{
		width: 100%;
		height: 100%;
		display: flex;
		display: -webkit-flex;
		align-items: flex-end;
	}
	
	.dialog-box .dialog{
		width: 100%;
		height: 100%;
		background-color: #50555555;
		position: fixed;
		bottom: 100rpx;
		display: none;
	}
	
	.dialog-box .dialog .dialog-area{
		height: 500rpx;
		width: 100%;
		background-color: white;
		position: fixed;
		bottom: 100rpx;
	}
	
	/* 底部对齐 */
	.dialog-box .bottom{
		height: 100rpx;
		width: 100%;
		position: fixed;
		bottom: 0;
		border: 1rpx solid #F1F1F1;
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.dialog-box .bottom .item{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border: 1rpx solid #F1F1F1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dialog-box .bottom .item .number{
		width: 30rpx;
		height: 30rpx;
		border-radius: 30rpx;
		color: block;
		font-size: 10rpx;
		position: absolute;
	}
	.dialog-box .bottom .cart{
		width: 100%;
		height: 100rpx;
		border: 1rpx solid #F1F1F1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dialog-box .bottom .cart image{
		position: absolute;
	}
	.dialog-box .bottom .cart text{
		position: absolute;
		width: 30rpx;
		height: 30rpx;
		border-radius: 30rpx;
		color: block;
		font-size: 10rpx;
		background-color: #A52A2A;
		margin-top: -20rpx;
		margin-left: 20rpx;
		color: white;
	}
	.dialog-box .bottom image{
		width: 50rpx;
		height: 50rpx;
	}
	.dialog-box .bottom text{
		text-align: center;
		font-size: 28rpx;
	}
	.dialog-box .bottom .buy{
		
	}
	.dialog-box .bottom .add-cart{
		width: 100%;
		background-color: #A52A2A;
		color: white;
	}
</style>

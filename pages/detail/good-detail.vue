<template>
	<view>
		<view>
			<!--轮播图-->
			<view></view>
			<!--信息-->
			<view></view>
			<!--评论-->
			<view></view>
			<!--选择规格数量-->
			<view class="select-params" @click="openDialog()">
				<text>请选择规格数量</text>
				<image src="../../static/ic_arrow_right.png"></image>
			</view>
			<!--参数-->
			<view></view>
			<!--详情-->
			<view v-html="this.goodInfo">
				
			</view>
		</view>
		
		<view class="dialog-box">
			<!--弹框-->
			<view class="dialog" v-show="this.showDialog">
				<!--弹框内容区域-->
				<view class="dialog-area">
					<image class="dialog-close" src="../../static/ic_close.png"
					@click="closeDialog()"></image>
					<!--选择数量-->
					<view>
						<text class="number-title">选择数量：</text>
						<view class="number-box">
							<text @click="changeNumber(0)">-</text>
							<text>{{this.selectNumber}}</text>
							<text @click="changeNumber(1)">+</text>
						</view>
					</view>
				</view>
			</view>
			<!--底部导航-->
			<view class="bottom">
				<view class="item">
					<image src="../../static/ic_collect.png"></image>
				</view>
				<view class="cart">
					<image src="../../static/img_cart.png"></image>
					<text class="number">{{total}}</text>
				</view>
				<view class="item">
					<text class="buy">立即购买</text>
				</view>
				<view class="item" @click="addCart()">
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
				showDialog:false,
				goodInfo:"",
				selectNumber:1,
				token:"",  //默认不初始化
				goodsId:0,
				productId:0,
				total:0,
			}
		},
		onLoad(options) {
			//获取缓存数据
			/* uni.getStorage({
				key:"token",
				success:function(e){
					this.token = e.data;
					console.log(e.data);
				},
				fail(e) {
					console.log("没有token");
				}
			}); */
			this.token = uni.getStorageSync("token");
			this.setViewport("width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
			if(options.id != undefined){
				this.getGoodInfo(options.id);
			}
			
		},
		onShow(options){
			console.log("登录回传值："+options);
		},
		methods:{
			setViewport:function(content){
			    const meta = document.querySelector('meta[name=viewport]');
			    if (!meta) return;
			    meta.setAttribute('content', content);
			},
			getGoodInfo:function(id){
				var url="https://cdplay.cn/api/goods/detail?id="+id;
				this.$http.get(url).then((response)=>{
					console.log("response:"+response);
					this.goodInfo = response.body.data.info.goods_desc;
					this.goodsId = response.body.data.productList[0].goods_id;
					this.productId = response.body.data.productList[0].id;
				},(error)=>{
					console.log("error:"+error);
				});
			},
			openDialog:function(){
				this.showDialog = true;
			},
			closeDialog:function(){
				this.showDialog = false;
			},
			changeNumber:function(value){
				if(value == 0){
					this.selectNumber--;
					this.selectNumber = this.selectNumber < 1 ? 1 : this.selectNumber;
				}else{
					this.selectNumber++;
				}
			},
			addCart:function(){
				if(this.token.length == 0){
					console.log("去登陆");
					uni.navigateTo({
						url:"/pages/ucenter/login"
					})
				}else{
					var url="http://cdplay.cn/api/cart/add";
					this.$http.post(url,{goodsId:this.goodsId,number:this.selectNumber,productId:this.productId}).then((response)=>{
						console.log("response:"+response);
						if(response.body.data.errno == 400){
							console.log(response.body.data.errmsg);
						}else{
							this.total = response.body.data.cartTotal.goodsCount;
						}
					},(error)=>{
						console.log("error:"+error);
					});
				}
			}
		}
	}
	
	
</script>

<style>
	
	html,body{
		padding: 0;
		margin: 0;
	}
	p{
		margin: 0;
	}
	img{
	    width:100%;
	    height:auto;
	}
	      
	
	.select-params{
		height: 70rpx;
		width: 100%;
		line-height: 70rpx;
		display: flex;
		flex-direction: row;
		position: relative;
	}
	.select-params text{
		font-size: 24rpx;
		margin-left: 50rpx;
	}
	.select-params image{
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		right: 10rpx;
		align-self: center;
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
	}
	
	.dialog-box .dialog .dialog-area{
		height: 500rpx;
		width: 100%;
		background-color: white;
		position: fixed;
		bottom: 100rpx;
	}
	
	.dialog-close{
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		right:10rpx;
		top: 10rpx;
		
	}
	
	/*选择商品数量*/
	.number-title{
		font-size: 24rpx;
	}
	.number-box{
		width: 200rpx;
		height: 50rpx;
		line-height: 50rpx;
		display: flex;
		align-items: center;
		
	}
	.number-box text{
		width: 100%;
		height: 100%;
		border: 1rpx solid #F1F1F1;
		font-size: 24rpx;
		text-align: center;
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
		background-color: white;
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
		background-color: white;
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

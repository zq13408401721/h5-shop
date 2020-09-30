<template>
	<view>
		<view class="top"></view>
		<view class="title">人气推荐</view>
		<view class="grid-hot">
			<view v-for="(item,index) in renderList">
				<view class="item">
					<view class="line"></view>
					<view class="item-box">
						<image :src="item.list_pic_url"></image>
						<view class="txt-box">
							<text class="item-box name">{{item.name}}</text>
							<text class="item-box goodbrief">{{item.goods_brief}}</text>
							<text class="item-box price">￥ {{item.retail_price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"hotpage",
		data(){
			return {
				renderList:[]
			};
		},
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			listType:{
				type:String,
				default:'column'
			}
		},
		watch:{
			list(list){
				this.renderList = list;
			}
		},
		methods:{
			
		}
		
	}
</script>

<style>
	.top{
		height: 10rpx;
		background-color: #F1F1F1;
	}
	.title{
		text-align: center;
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 30rpx;
	}
	.grid-hot{
		
	}
	.item{
		height: 250rpx;
		display: inline;
		
	}
	.item .line{
		width: 100%;
		height: 1rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
		background-color: #F1F1F1;
	}
	.item-box{
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
		height: 200rpx;
	}
	.item-box image{
		width: 200rpx;
		height: 200rpx;
	}
	.item-box .txt-box{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		height: 100rpx;
		align-self: center;
	}
	.item-box .name{
		font-size: 24rpx;
		color: #333333;
	}
	.item-box .goodbrief{
		font-size: 16rpx;
		color: #999999;
	}
	.item-box .price{
		font-size: 20rpx;
		color: brown;
	}
</style>

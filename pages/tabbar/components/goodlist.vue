<template>
	<!--good list-->
	<view>
		<!--for list-->
		<view v-for="(item,index) in renderList">
			<!--grid item-->
			<view class="top"></view>
			<!-- title -->
			<view class="title">{{item.name}}</view>
			<!-- grid goods -->
			<view class="grid">
				<!-- for grid -->
				<view v-for="(good,num) in item.goodsList">
					<!-- good item -->
					<view class="item">
						<image :src="good.list_pic_url"></image>
						<text>{{good.name}}</text>
						<text class="price">￥ {{good.retail_price}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				renderList:[]
			}
		},
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		onLoad() {
			
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
		color: #333333;
		font-size: 30rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.grid{
		display: grid;
		display: -webkit-grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 10rpx;
		grid-row-gap: 10rpx;
		background-color: white;
		margin-bottom: 20rpx;
	}
	.grid .item{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		background-color: #F1F1F1;
	}
	.grid .item image{
		width: 200rpx;
		height: 200rpx;
		display: block;
		margin: 0 auto;
	}
	.grid .item text{
		text-align: center;
		font-size: 24rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.price{
		color:#A52A2A;
		margin-bottom: 20rpx;
	}
</style>

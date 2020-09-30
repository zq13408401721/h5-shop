<template>
	<view class="channel">
		<view v-for="(item,index) in renderList">
			<view class="channel-item">
				<image :src="item.icon_url"></image>
				<text>{{item.name}}</text>
				
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		name:'MixProductList',
		data() {
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
	.channel{
		width: 100%;
		height: 80rpx;
		display: flex;
		display: -webkit-flex;
		justify-content: space-around;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		
	}
	
	.channel-item{
		height: 80rpx;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
	
	}
	.channel-item image{
		width: 50rpx;
		height: 50rpx;
	}
	/*text-align横向居中*/
	.channel-item text{
		font-size: 14rpx;
		text-align: center;
		
	}
	
</style>

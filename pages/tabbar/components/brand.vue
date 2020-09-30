<template>
	<view>
		<view class="top"></view>
		<view class="title">品牌制造商直供</view>
		<view class="container">
			<view v-for="(item,index) in renderList">
				<view class="brand-item" @click="itemClick(item.id)">
					<image class="image" :src="item.new_pic_url"></image>
					<text class="text">{{item.name}}</text>
				</view>
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
			itemClick(id){
				uni.navigateTo({
					url: '/pages/brand/brand-detail?brandId='+encodeURIComponent(JSON.stringify(id))
				});
			}
		}
		
	}
</script>

<style>
	.top{
		height: 10rpx;
		background-color:#F1F1F1;
	}
	.title{
		text-align: center;
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 30rpx;
	}
	.container{
		display: grid;
		display: -webkit-grid;
		grid-template-columns: 50% 50%; 
		grid-template-rows: 150px 150px;
	}
	.brand-item{
		height: 150px;
		position: relative;
	}
	.image{
		height: 150px;
		width: 100%;
		position: absolute;
	}
	.text{
		position: absolute;
		top: 20px;
		left: 20px;
	}
</style>

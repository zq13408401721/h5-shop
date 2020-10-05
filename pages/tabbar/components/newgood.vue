<template>
	<view>
		<view class="title" @click="titleClick()">周一周四·新品首发</view>
		<view class="grid-newgood">
			<view v-for="(item,index) in renderList">
				<view class="item">
					<image :src="item.list_pic_url"></image>
					<text>{{item.name}}</text>
					<text class="price">￥{{item.retail_price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"newgood",
		data(){
			return{
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
			titleClick:function(){
				uni.navigateTo({
					url:"/pages/news/newsgood-page"
				})
			}
		}
	}
</script>

<style>
	.title{
		text-align: center;
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 30rpx;
	}
	.grid-newgood{
		display: grid;
		display: -webkit-grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 200px 200px;
	}
	.item{
		height: 200px;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
	}
	.item image{
		width: 100%;
		height:100%;
		object-fit: cover;
	}
	.item text{
		font-size: 14px;
		text-align: center;
	}
	.price{
		color: brown;
	}
</style>

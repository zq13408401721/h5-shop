<template>
	<view class="category-layout">
		<!--左边分类的列表-->
		<view class="list-left">
			<ul v-for="(item,index) in this.categoryData.categoryList">
				<li @click="onClickList(item.id)">{{item.name}}</li>
			</ul>
		</view>
		<!--右边的布局信息展示-->
		<view class="list-right">
			<!--顶部信息 图片+文字-->
			<view class="info-img">
				<image :src="this.listInfo.banner_url"></image>
				<text>{{this.listInfo.front_desc}}</text>
			</view>
			<!--标题-->
			<view class="title">
				<span>——{{this.listInfo.name}}——</span>
			</view>
			<!--分类商品列表 gridview-->
			<view class="grid">
				<!--商品列表item-->
				<view v-for="(item,index) in this.listInfo.subCategoryList">
					<view class="grid-item">
						<image :src="item.wap_banner_url"></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			
			</view>
		</view>
	</view>
</template>

<script>
	import $ from 'jquery'
	export default {
	
		/*定义数据变量*/
		data() {
			return {
				categoryData:Object,
				listInfo:Object
			}
		},
		/*页面加载完成*/
		onLoad(){
			this.loadData();
			$(function(){
				$("ul li").click(function(){
					$('li').removeClass("select");
					$(this).addClass('select');
				});
			});
		},
		methods: {
			loadData:function(){
				var url = "https://cdplay.cn/api/catalog/index";
				this.$http.get(url).then((response)=>{
					console.log(response);
					this.categoryData = response.body.data;
				},(error)=>{
					console.log(error);
				})
			},
			loadCagegoryList:function(categoryId){
				var url = "https://cdplay.cn/api/catalog/current?id="+categoryId;
				this.$http.get(url).then((response)=>{
					console.log(response);
					this.listInfo = response.body.data.currentCategory;
				},(error)=>{
					console.log(error);
				})
			},
			onClickList:function(categoryId){
				console.log(categoryId);
				this.loadCagegoryList(categoryId);
			}
		}
	}
</script>

<style>
	
	.category-layout{
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
	}
	.list-left{
		width: 200rpx;
		position: fixed;
		
	}
	.list-right{
		width: 100%;
		margin-left: 200rpx;
	}
	.title{
		height: 100rpx;
		text-align: center;
		margin-top: 20rpx;
	}
	.title span{
		font-size: 24rpx;
	}
	ul{
		list-style: none;
		padding: 0rpx;
		margin-left: 10rpx;
	}
	ul li{
		width: 150rpx;
		margin-top: 20rpx;
		text-align: center;
		font-size: 24rpx;
		color: #333333;
	}
	.select{
		font-size: 30rpx;
		color: brown;
	}
	
	.info-img{
		height: 150rpx;
		line-height: 150rpx;
		position: relative;
		margin-top: 20rpx;
	}
	.info-img image{
		height: 150rpx;
		width: 100%;
	}
	.info-img text{
		width: 100%;
		position:absolute;
		left: 0rpx;
		text-align: center; /*水平居中*/
		vertical-align: middle;  /*行级元素垂直居中*/
		display: inline;  /*设置成行级元素*/
		color: white;
		text-shadow: 2rpx 0 0 #808080;/*文字阴影*/
	}

	
	.grid{
		display: grid;
		display: -webkit-grid;
		grid-template-columns: 33.333% 33.333% 33.333%;
		grid-template-rows: 150rpx 150rpx 150rpx;
	}
	.grid-item{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
	}
	.grid-item image{
		width: auto;
		height: 120rpx;
		text-align: center;
	}
	.grid-item text{
		font-size: 24rpx;
		text-align: center;
	}

</style>

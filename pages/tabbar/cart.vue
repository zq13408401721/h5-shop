<template>
	<view class="page">
		<!--标题-->
		<view class="title">
			<text>·30天无忧退货</text>
			<text>·48小时快速退款</text>
			<text>·满88免邮</text>
		</view>
		<!--商品列表-->
		<view class="list">
			<ul>
				<li v-for="(item,index) in cartList">
					<view class="list-item">
						<!-- <input type="checkbox" class="checkbox" v-on:click="selectItem(item)"></input> -->
						<checkbox class="checkBox"></checkbox>
						<image :src="(item.list_pic_url == undefined || item.list_pic_url.length==0?'':item.list_pic_url)"></image>
						<view class="word">
							<text class="item-txt">{{item.goods_name}}</text>
							<text class="item-desc">xxx</text>
							<text class="item-txt">￥{{item.retail_price}}</text>
						</view>
						<text class="item-number">X{{item.number}}</text>
						<view class="line"></view>
					</view>
				</li>
			</ul>
		</view>
		<!--操作栏-->
		<view class="common">
			<checkbox v-on:click="selectAll()"></checkbox>
			<text class="txt_select_all">全选({{this.total_number}})</text>
			<text class="txt_total_price">￥{{this.total_price}}</text>
			<view class="common-btn">
				<text class="txt_editor" @click="editor()">编辑</text>
				<text class="txt_order" @click="order()">下单</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	/* import Checkbox from 'vant/lib/checkbox';
	import 'vant/lib/checkbox/style'; */
	
	import {Checkbox} from 'vant';
	
	export default{
		components:{
			ck:Checkbox,
		},
		data(){
			return{
				cartList:[],
				total_number:0,
				total_price:0,
				isSelectAll:0,
				checked:true,
			}
		},
		onLoad(){
			console.log("onload");
		},
		onShow(){
			var token = this.$route.params.token;
			console.log("onShow:"+token);
			this.loadCart();
		},
		methods:{
			loadCart:function(){
				var url="https://cdplay.cn/api/cart/index";
				this.$http.get(url).then((response)=>{
					console.log("response:"+response);
					this.cartList = response.body.data.cartList;
				},(error)=>{
					console.log("error:"+error);
				});
			},
			editor:function(){
				console.log("editor");
			},
			order:function(){
				console.log("order");
			},
			selectItem:function(item){
				if(item.select == undefined || item.select == 0){
					item.select = 1;
				}else{
					item.select = 0;
				}
			},
			selectAll:function(){
				if(this.isSelectAll == 0){
					this.isSelectAll = 1;
				}
			}
		}
	}
	
</script>

<style>
	.page{
		overflow-x: hidden;
		overflow-y: auto;
		scrollbar-width: none; /* firefox */
		-ms-overflow-style: none; /* IE 10+ */
	}
	.checkbox{
		
	}
	
	.title{
		height: 70rpx;
		line-height: 70rpx;
		background-color: #F1F1F1;
		display: flex;
		justify-content: space-around;
	}
	.title text{
		font-size: 24rpx;
		text-align: center;
	}
	.list{
		
	}
	.list ul{
		list-style: none;
		padding: 0 0 50px 0;
	}
	
	.list ul li checkbox{
		
	}
	
	.list ul li image{
		width: 180rpx;
		height: 180rpx;
		background-color: #F1F1F1;
		margin: 10rpx 0 10rpx 20rpx;
	}
	
	.list-item{
		height: 200rpx;
		line-height: 200rpx;
		display: flex;
		flex-direction: row;
		position: relative;
		padding-left: 20rpx;
	}
	
	.list-item .line{
		background-color: #F2F3F5;
		height: 1rpx;
		width: 100%;
		margin-left: 50rpx;
		position: absolute;
		bottom: 0;
	}
	
	.list-item .word{
		height: 200rpx;
		line-height: 200rpx;
		display: flex;
		flex-direction: column;
	}
	
	.list-item .item-number{
		position: absolute;
		right: 10rpx;
		top: -40rpx;
		font-size: 12rpx;
	}
	
	.list-item .word text{
		height: 30rpx;
		font-size: 20rpx;
		margin-top: -10rpx;
	}
	.common{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		position: fixed;
		flex-direction: row;
		bottom: 50px;
		background-color: white;
	}
	
	.common .common-btn{
		height: 100%;
		display: flex;
		flex-direction: row;
		position: absolute;
		right: 0;
	}
	
	.common text{
		font-size: 24rpx;
		height: 20rpx;
		vertical-align: middle;
	}
	
	.common .txt_select_all{
		flex-shrink: 0;
	}
	
	.common .txt_total_price{
		flex-shrink: 0;
	}
	
	.common .txt_editor{
		margin-right: 20rpx;
	}
	
	.common .txt_order{
		width: 150rpx;
		height: 100%;
		background-color: #A52A2A;
		text-align: center;
		vertical-align: middle;
		color: white;
	}
	
	
</style>

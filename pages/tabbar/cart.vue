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
						<checkbox class="checkBox" :checked="(item.select == undefined || item.select == 0 ? false : true)"
						@click="selectItem(item)"></checkbox>
						<image :src="(item.list_pic_url == undefined || item.list_pic_url.length==0?'':item.list_pic_url)"></image>
						<view class="word">
							<text class="item-txt">{{item.goods_name}}</text>
							<text class="item-desc">xxx</text>
							<text class="item-txt">￥{{item.retail_price}}</text>
						</view>
						<text class="item-number" v-show="(isEditor == 0 ? true : false)">X{{item.number}}</text>
						<!-- 编辑状态的显示内容 -->
						<view class="editor-box" v-show="(isEditor == 0 ? false : true)">
							<text class="editor-title">已选择 ></text>
							<view class="number-box">
								<text @click="changeNumber(0)">-</text>
								<text>{{item.number}}</text>
								<text @click="changeNumber(1)">+</text>
							</view>
						</view>
						<view class="line"></view>
					</view>
				</li>
			</ul>
		</view>
		<!--操作栏-->
		<view class="common">
			<checkbox v-on:click="selectAll()" :checked="(isSelectAll == 0 ? false : true)"></checkbox>
			<text class="txt_select_all">全选({{this.total_number}})</text>
			<text class="txt_total_price">￥{{this.total_price}}</text>
			<view class="common-btn">
				<text class="txt_editor" @click="editor()">{{txtEditor}}</text>
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
				total_number:0, //总数量
				total_price:0, //总价
				isSelectAll:0, //是否全选
				isEditor:0, //是否编辑状态
				txtEditor:"编辑",
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
				if(this.isEditor == 0){
					this.isEditor = 1;
					this.txtEditor = "完成";
				}else{
					this.isEditor = 0;
					this.txtEditor = "编辑";
				}
			},
			order:function(){
				console.log("order");
			},
			selectItem:function(item){
				if(item.select == undefined || item.select == 0){
					item.select = 1;
					this.isSelectAll = this.hasSelectAll();
				}else{
					item.select = 0;
					this.isSelectAll = 0;
				}
				//计算选中的商品价格
				this.countGoodPrice(false);
			},
			selectAll:function(){
				if(this.isSelectAll == 0){
					this.isSelectAll = 1;
				}else{
					this.isSelectAll = 0;
				}
				//计算选中的商品价格
				this.countGoodPrice(true);
			},
			//是否全选
			hasSelectAll:function(){
				var value = 1;
				this.cartList.map(function(item,index){
					if(item.select == undefined || item.select == 0){
						value = 0;
						return value;
					}
				});
				return value;
			},
			//计算商品的数量和价格，如果全选需要修改ischange
			countGoodPrice:function(ischange){
				var number=0,price = 0;
				var value = this.isSelectAll;
				this.cartList.map(function(item,index){
					if(ischange){
						item.select = value;
					}
					if(item.select == 1){
						number += item.number;
						price += item.number*item.retail_price;
					}
				});
				this.total_number = number;
				this.total_price = price;
			},
			changeNumber:function(value){
				if(value == 0){
					this.selectNumber--;
					this.selectNumber = this.selectNumber < 1 ? 1 : this.selectNumber;
				}else{
					this.selectNumber++;
				}
			},
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
		font-size: 26rpx;
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
		padding-left: 20rpx;
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
	.editor-box{
		display: flex;
		flex-direction: column;
		position: absolute;
		right: 0;
	}
	.editor-title{
		height: 30rpx;
		font-size: 26rpx;
		margin-top: -70rpx;
		position: absolute;
		right: 0rpx;
	}
	/* 编辑状态 */
	.number-box{
		width: 200rpx;
		height: 50rpx;
		line-height: 50rpx;
		display: flex;
		align-items: center;
		margin-top: 120rpx;
		
	}
	.number-box text{
		width: 100%;
		height: 100%;
		border: 1rpx solid #F1F1F1;
		font-size: 24rpx;
		text-align: center;
	}
	
	
</style>

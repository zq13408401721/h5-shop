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
								<text @click="changeNumber(0,item)">-</text>
								<text>{{item.number}}</text>
								<text @click="changeNumber(1,item)">+</text>
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
				<text class="txt_order" @click="order()">{{txtSubmit}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	/* import Checkbox from 'vant/lib/checkbox';
	import 'vant/lib/checkbox/style'; */
	
	export default{
		data(){
			return{
				cartList:[],
				total_number:0, //总数量
				total_price:0, //总价
				isSelectAll:0, //是否全选
				isEditor:0, //是否编辑状态
				txtEditor:"编辑", //编辑状态文字
				txtSubmit:"下单", //下单
			}
		},
		onLoad(){
			console.log("onload");
		},
		onShow(){
			//通过路由
			var token = this.$route.params.token;
			console.log("onShow:"+token);
			this.loadCart();
		},
		methods:{
			loadCart:function(){
				var url="https://cdplay.cn/api/cart/index";
				/* this.$http.get(url).then((response)=>{
					console.log("response:"+response);
					this.cartList = response.body.data.cartList;
				},(error)=>{
					console.log("error:"+error);
				}); */
				uni.request({
					url:url,
					success: (response) => {
						this.cartList = response.data.data.cartList;
					}
				})
			},
			editor:function(){
				console.log("editor");
				if(this.isEditor == 0){
					this.isEditor = 1;
					this.txtEditor = "完成";
					this.txtSubmit = "删除所选";
				}else{
					this.isEditor = 0;
					this.txtEditor = "编辑";
					this.txtSubmit = "下单";
				}
			},
			order:function(){
				console.log("order");
				if(this.txtSubmit === "下单"){
					//进入下单页面
				}else if(this.txtSubmit === "删除所选"){
					//提交删除商品的数据
					var ids = this.getDeleteProductId();
					var url = "https://cdplay.cn/api/cart/delete";
					/* this.$http.post(url,{productIds:ids}).then((response)=>{
						if(response.body.errno == 0){
							this.cartList = response.body.data.cartList;
							this.isEditor = 0;
							this.txtSubmit = "下单";
							this.txtEditor = "编辑";
						}
					},(error)=>{
						console.log("error:"+error);
					}); */
					uni.request({
						url:url,
						success: (response) => {
							this.cartList = response.data.data.cartList;
							this.isEditor = 0;
							this.txtSubmit = "下单";
							this.txtEditor = "编辑";
						}
					})
				}
			},
			updateGood:function(){
				//商品更新
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
			changeNumber:function(value,item){
				if(value == 0){
					item.number -= 1;
				}else{
					item.number += 1;
				}
				item.number = item.number <= 0 ? 1 : item.number;
				//更新商品信息
				var url = "https://cdplay.cn/api/cart/update";
				/* this.$http.post(url,{product_id:item.product_id,goodsId:item.goods_id,number:item.number,id:item.id}).then((response)=>{
					console.log("response:"+response);
					if(response.body.errno == 0){
						item.number = item.body.data.cartList[0].number;
					}
				},(error)=>{
					console.log("error:"+error);
				}); */
				uni.request({
					url:url,
					success: (response) => {
						if(response.data.errno == 0){
							item.number = item.data.data.cartList[0].number;
						}
					}
				})
			},
			//获取删除商品信息
			getDeleteProductId:function(){
				var ids = "";
				for(var i=0; i<this.cartList.length; i++){
					if(this.cartList[i].select != undefined && this.cartList[i].select == 1){
						ids += this.cartList[i].product_id+",";
					}
				}
				if(ids.length > 0){
					ids = ids.substring(0,ids.length-1);
				}
				return ids;
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

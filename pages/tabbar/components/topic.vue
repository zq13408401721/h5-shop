<template>
	<view>
		<view class="top"></view>
		<view class="title">专题精选</view>
		<div class="listbox">
			<ul>
				<view v-for="(item,index) in renderList">
					<li>
						<view class="topicitem">
							<image :src="item.item_pic_url"></image>
							<div class="info">{{item.title}}      <span class="price">￥{{item.price_info}}</span></div>
							<text class="desc">{{item.subtitle}}</text>
						</view>
					</li>
				</view>
			</ul>
		</div>
		
		
	</view>
</template>

<script>
	
	export default{
		name:"topic",
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
				default:''
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
	.listbox{
		width: 100%;
	}
	.listbox ul{
		padding: 0rpx 0rpx;
		display: flex;
		display: -webkit-flex;
		flex-flow: row nowrap;
		-webkit-flex-flow:row nowrap;
		overflow-x: auto;
		list-style: none;
	}
	.listbox ul li{
		margin-left: 20rpx;
	}
	
	.listbox ul li .topicitem{
		display: flex;
		flex-direction: column;
		font-size: 30rpx;
	}
	.listbox ul li .topicitem .info{
		margin-top: 10px;
	}
	.listbox ul li .topicitem .price{
		color: #A52A2A;
		margin-left: 20rpx;
	}
	
	.topicitem image{
		height: 300rpx;
	}
	.desc{
		width: 500rpx;
		font-size: 24rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		
	}
</style>

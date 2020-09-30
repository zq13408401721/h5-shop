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
							<span><text>{{item.title}}  ￥ {{item.price_info}}</text></span>
							<text>{{item.subtitle}}</text>
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
	ul{
		overflow-x: auto;
		
	}
	ul li{
		display: inline;
		white-space: nowrap;
	}
	
	ul li .topicitem{
		display: inline;
	}
	
	.item-box image{
		height: 150rpx;
		width: 100%;
	}
	
</style>

<template>
	<view class="app">
		
			<!--头部轮播图-->
			<banner :list="advertList"></banner>
			<channel :list="channelData"></channel>
			<brand :list="brandList"></brand>
			<newgood :list="newgoodList"></newgood>
			<hot :list="hotgoodList"></hot>
			<topic :list="topicgoodList"></topic>
			<goodlist :list="categoryList"></goodlist>
		
	</view>
</template>

<script>
	import banner from './components/banner.vue'
	import pageHeader from './components/page-header.vue'
	import channel from './components/channel.vue'
	import brand from './components/brand.vue'
	import newgood from './components/newgood.vue'
	import hot from './components/hot.vue'
	import topic from './components/topic.vue'
	import goodlist from './components/goodlist.vue'

	
	console.log("home");
	export default {
		components:{
			
			banner,
			channel,
			brand,
			newgood,
			hot,
			topic,
			goodlist,
		},
		data(){
			return{
				advertList:[], //广告列表
				channelData:[], //导航列表
				brandList:[], //品牌数据
				newgoodList:[], //新品发布数据
				hotgoodList:[], //人气推荐商品数据
				topicgoodList:[], //精品推荐
				categoryList:[], //商品列表数据
			}
		},
		onLoad(){
			this.loadData();
		},
		methods:{
			loadData:function(){
				var url = "https://cdplay.cn/api/index";
				uni.request({
					url:url,
					success: (response) => {
						this.advertList = response.data.data.banner;
						this.channelData = response.data.data.channel;
						this.brandList = response.data.data.brandList;
						this.newgoodList = response.data.data.newGoodsList;
						this.hotgoodList = response.data.data.hotGoodsList;
						this.topicgoodList = response.data.data.topicList;
						this.categoryList = response.data.data.categoryList;
						console.log("网络请求成功");
					}
				})
				/* this.$http.get(url).then((response)=>{
					advertList = response.body.data.banner;
					channelData = response.body.data.channel;
					brandList = response.body.data.brandList;
					newgoodList = response.body.data.newGoodsList;
					hotgoodList = response.body.data.hotGoodsList;
					topicgoodList = response.body.data.topicList;
					categoryList = response.body.data.categoryList;
				},(error)=>{
					console.log("请求错误："+error);
				}) */
			}
		}
	}
	
</script>

<style>
	.top{
		height: 10rpx;
		background-color: #F1F1F1;
	}
</style>

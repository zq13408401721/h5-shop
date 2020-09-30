<template>
	<view class="app">
		<mescroll-body ref="mescrollRef">
			<page-header :showFillView="true"></page-header>
			<!--头部轮播图-->
			<banner :list="banners"></banner>
			<channel :list="channelData"></channel>
			<brand :list="brandList"></brand>
			<newgood :list="newgoodList"></newgood>
			<hot :list="hotgoodList"></hot>
			<topic :list="topicgoodList"></topic>
			<goodlist :list="categoryList"></goodlist>
		</mescroll-body>
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
			pageHeader,
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
		computed:{
			midAdvert(){
				if(this.advertList.length === 0) return {};
				//const res = this.advertList.filter(item=>item.advertList)
			},
			banners(){
				return this.advertList;
			},
			channels(){
				return this.channelData;
			}
		},
		onLoad(){
			console.log("onLoad");
			this.loadData();
		},
		methods:{
			async loadHome(){
				console.log("loadHome--");
				const res = await this.uni.request({
					url: 'https://cdplay.cn/api/index',
					method: 'GET',
					data: {},
					success: res => {
						console.log("res:"+res);
					},
					fail: () => {
						console.log("load home fail");
					},
					complete: () => {
						console.log("load home complete");
					}
				});
				console.log("res:"+res);
			},
			loadData:function(){
				var url = "https://cdplay.cn/api/index";
				this.$http.get(url).then((response)=>{
					console.log("请求到数据："+response);
					this.advertList = response.body.data.banner;
					this.channelData = response.body.data.channel;
					this.brandList = response.body.data.brandList;
					this.newgoodList = response.body.data.newGoodsList;
					this.hotgoodList = response.body.data.hotGoodsList;
					this.topicgoodList = response.body.data.topicList;
					this.categoryList = response.body.data.categoryList;
				},(error)=>{
					console.log("请求错误："+error);
				})
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

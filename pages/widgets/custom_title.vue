<template>
	<view>
		<!--返回箭头-->
		<view>
			<image :src="static/arrow-left.png"></image>
		</view>
		<!--标题名称-->
		<text>{{this.title}}</text>
	</view>
</template>

<script>
	
	export default{
		data(){
			return {
				title:String
			}
		},
		onLoad() {
			
		},
		watch:{
			title(str){
				this.title = str;
			}
		},
		methods:{
			
		}
	}
	
</script>

<style>
</style>

<template>
	<view>
		<view>{{message}}</view>
		<input v-model="message" />
	</view>
	
</template>

<script>
	export default{
		name:'MixProductList',
		data() {
			return {
				message:"请输入信息",
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
			
		}
		
	}
</script>

<style>
</style>

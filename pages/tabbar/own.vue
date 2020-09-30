<template>
</template>

<script>
	
	import axios from 'axios'
	
	export default{
		onLoad(){
			  axios.get('https://cdplay.cn/api/index',{
			                            params:{
			                                name:'alice',
			                                age:19
			                            }
			                        })
			                        .then(resp => {
			                            console.log(resp.data);
			                        }).catch(err => {             //
			                            console.log('请求失败：'+err.status+','+err.statusText);
			                        });
		}
	}
	
</script>

<style>
</style>

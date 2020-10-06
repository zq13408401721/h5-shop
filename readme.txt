
在web项目中如何导入三方的库

1.先确认安装软件npm（安装nodejs）

2.切换到项目的根目录 cd 

3.通过npm安装三方的库jquery
	如：npm install jquery -S
	
4.安装成功以后可以在node_modules中查看对应的库


news项目框架介绍

1.在项目的根目录下有个pages.json 存放的是所有的页面文件路径

2.pages中的page数据存放文件路径，tabBar这个数组存放底部导航的按钮



/**************************************混合开发/小程序************************************/
混合开发：跨平台


小程序


uni-app：开发模板


xbuilder：ide 编写代码的工具


VUE/react: web前端框架

/***************************************学习的步骤***************************************/

界面
{
	css样式：<style></style>
	布局:<template><view></view></template>
	脚本:<scripte></scripte>
}

数据加载
{
	uni-app
	axios
	jquery
	ajax
	resource
}

1.style
	文档流
	
	布局：flex
	flex显示方向：flex-direction:row/column
	justify-content: 子布局显示的方式，权重平分/不平分/从左到右
	相对/绝对 :relative/absolute
	absolute：脱离文档流
	
	浮动：float——脱离文档流，在它的上一个非float标签的下边
	网格：grid
	grid-template-rows/grid-template-columns ：行高/列数
	grid-rows-gap/grid/columns-gap:行间距/列间距
	
	display：flex/relative/absolute/fiexd/


2.view
	v-for v-if v-show
	:class :src


3.scripte 脚本
	生命周期的钩子函数https://blog.csdn.net/qq_35585701/article/details/81216704
	
	data(){} 定义变量
	props(){}   https://cn.vuejs.org/v2/guide/components-props.html
	watch(){}和computed区别 https://www.cnblogs.com/jiajialove/p/11327945.html
	methods(){} 定义自定义函数
	








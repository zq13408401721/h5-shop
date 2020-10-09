
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabbar/home","pages/detail/detail","pages/tabbar/category","pages/tabbar/topic","pages/tabbar/cart","pages/tabbar/own","pages/brand/brand-detail","pages/news/newsgood-page","pages/detail/good-detail","pages/ucenter/login"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"电商","navigationBarBackgroundColor":"#2F85FC","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#2C405A","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/tabbar/home","iconPath":"static/tabbar/ic_menu_choice_nor.png","selectedIconPath":"static/tabbar/ic_menu_choice_pressed.png","text":"首页"},{"pagePath":"pages/tabbar/topic","iconPath":"static/tabbar/ic_menu_topic_nor.png","selectedIconPath":"static/tabbar/ic_menu_topic_pressed.png","text":"精选"},{"pagePath":"pages/tabbar/category","iconPath":"static/tabbar/ic_menu_sort_nor.png","selectedIconPath":"static/tabbar/ic_menu_sort_pressed.png","text":"分类"},{"pagePath":"pages/tabbar/cart","iconPath":"static/tabbar/ic_menu_shoping_nor.png","selectedIconPath":"static/tabbar/ic_menu_shoping_pressed.png","text":"商城"},{"pagePath":"pages/tabbar/own","iconPath":"static/tabbar/ic_menu_me_nor.png","selectedIconPath":"static/tabbar/ic_menu_me_pressed.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Shop","compilerVersion":"2.8.13","entryPagePath":"pages/tabbar/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabbar/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/detail/detail","meta":{"isNVue":true},"window":{"titleNView":{"type":"transparent"}}},{"path":"/pages/tabbar/category","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类"}},{"path":"/pages/tabbar/topic","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"精选"}},{"path":"/pages/tabbar/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商城"}},{"path":"/pages/tabbar/own","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/brand/brand-detail","meta":{},"window":{"navigationBarTitleText":"品牌制造商"}},{"path":"/pages/news/newsgood-page","meta":{"isNVue":true},"window":{"navigationBarTitleText":"新品"}},{"path":"/pages/detail/good-detail","meta":{},"window":{"navigationBarTitleText":"商品详情"}},{"path":"/pages/ucenter/login","meta":{},"window":{"navigationBarTitleText":"登录"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
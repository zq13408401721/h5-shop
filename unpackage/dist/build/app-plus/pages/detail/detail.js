!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=24)}([function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__64985DC"}},function(t,e){t.exports={}},function(t,e,n){"use strict";function i(t,e,n,i,a,r,o,s,u,c){var l,p="function"==typeof t?t.options:t;if(u){p.components||(p.components={});var f=Object.prototype.hasOwnProperty;for(var d in u)f.call(u,d)&&!f.call(p.components,d)&&(p.components[d]=u[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},p._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(p.functional){p._injectStyles=l;var h=p.render;p.render=function(t,e){return l.call(e),h(t,e)}}else{var g=p.beforeCreate;p.beforeCreate=g?[].concat(g,l):[l]}return{exports:t,options:p}}n.d(e,"a",(function(){return i}))},,function(t,e,n){"use strict";var i=n(12),a=n(8),r=n(2);var o=Object(r.a)(a.default,i.b,i.c,!1,null,null,"95789792",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(21).default,this.options.style):Object.assign(this.options.style,n(21).default)}).call(o),e.default=o.exports},,,,function(t,e,n){"use strict";var i=n(9),a=n.n(i);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=(i=n(25))&&i.__esModule?i:{default:i};var r={data:function(){return{banner:{},content:[]}},onShareAppMessage:function(){return{title:this.banner.title,path:"/pages/detail/detail?query="+JSON.stringify(this.banner)}},onLoad:function(t){try{this.banner=JSON.parse(decodeURIComponent(t.query))}catch(e){this.banner=JSON.parse(t.query)}uni.setNavigationBarTitle({title:this.banner.title}),this.getDetail()},methods:{getDetail:function(){var t=this;uni.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+this.banner.post_id,success:function(e){var n="<p>\u83b7\u53d6\u4fe1\u606f\u5931\u8d251</p>";200==e.statusCode&&(n=e.data.content);var i=(0,a.default)(n);!function t(e){return e.forEach((function(e){if("img"===e.name&&e.attrs&&e.attrs["data-img-size-val"]){var n=e.attrs["data-img-size-val"].split(","),i=uni.upx2px(648),a=parseInt(i*(n[1]/n[0]));e.attrs.style="width:".concat(i,";height:").concat(a,";")}Array.isArray(e.children)&&t(e.children)})),e}(i),t.content=i}})}}};e.default=r},function(t,e){t.exports={banner:{height:"360upx",position:"relative",backgroundColor:"#cccccc",flexDirection:"row",overflow:"hidden"},"banner-img":{flex:1},"title-area":{position:"absolute",left:"30upx",right:"30upx",bottom:"30upx",zIndex:11},"title-text":{fontSize:"32upx",fontWeight:"400",lineHeight:"42upx",lines:2,color:"#ffffff",overflow:"hidden"},"article-meta":{paddingTop:"20upx",paddingRight:"30upx",paddingBottom:"20upx",paddingLeft:"30upx",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},"article-meta-text":{color:"#808080"},"article-text":{fontSize:"26upx",lineHeight:"50upx",marginTop:0,marginRight:"20upx",marginBottom:0,marginLeft:"20upx"},"article-author":{fontSize:"30upx"},"article-time":{fontSize:"30upx"},"article-content":{fontSize:"30upx",paddingTop:0,paddingRight:"30upx",paddingBottom:0,paddingLeft:"30upx",marginBottom:"30upx",overflow:"hidden"}}},,function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",[n("view",{staticClass:["banner"],attrs:{autoFocus:!0}},[n("u-image",{staticClass:["banner-img"],attrs:{src:t.banner.image_url}}),n("view",{staticClass:["title-area"]},[n("u-text",{staticClass:["title-text"]},[t._v(t._s(t.banner.title))])])],1),n("view",{staticClass:["article-meta"]},[n("u-text",{staticClass:["article-meta-text","article-author"]},[t._v(t._s(t.banner.source))]),n("u-text",{staticClass:["article-meta-text","article-text"]},[t._v("\u53d1\u8868\u4e8e")]),n("u-text",{staticClass:["article-meta-text","article-time"]},[t._v(t._s(t.banner.datetime))])]),n("view",{staticClass:["article-content"]},[n("rich-text",{staticStyle:{fontSize:"14px"},attrs:{nodes:t.content}})],1),n("view",{staticClass:["comment-wrap"]})])])},a=[]},function(t,e,n){"use strict";function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=o(t);if(e){var a=o(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return r(this,n)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var l=n(14).version,p="https://tongji.dcloud.io/uni/stat",f=n(0).default||n(0);function d(){var t="";if("n"===g()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync("__DC_STAT_UUID")}catch(e){t="__DC_UUID_VALUE"}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync("__DC_STAT_UUID",t)}catch(t){uni.setStorageSync("__DC_STAT_UUID","__DC_UUID_VALUE")}}return t}var h=function(){return parseInt((new Date).getTime()/1e3)},g=function(){return"n"},_=0,v=0,y=function(){return _=h(),"n"===g()&&uni.setStorageSync("__page__residence__time",h()),_},m=0,S=0,b=function(){var t=(new Date).getTime();return m=t,S=0,t},D=function(){var t=(new Date).getTime();return S=t,t},x=function(t){var e=0;return 0!==m&&(e=S-m),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},w=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,i=t._query,a=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===g()?n.$mp&&n.$mp.page.is+a:n.$scope&&n.$scope.route+a||n.$mp&&n.$mp.page.route+a},T=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},k=function(t){var e={usv:l,conf:JSON.stringify({ak:f.appid})};uni.request({url:p,method:"GET",data:e,success:function(e){var n=e.data;0===n.ret&&"function"==typeof t&&t({enable:n.enable})},fail:function(e){var n=1;try{n=uni.getStorageSync("Report_Status")}catch(e){n=1}""===n&&(n=1),"function"==typeof t&&t({enable:n})}})},R=n(15).default,O=n(0).default||n(0),q=uni.getSystemInfoSync(),N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=a(n);function n(){var t;return s(this,n),(t=e.call(this)).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return c(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),c(n,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,y(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,T(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,T(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(n)}}]),n}(function(){function t(){var e,n;s(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:d(),ut:g(),mpn:(n="","wx"!==g()&&"qq"!==g()||uni.canIUse("getAccountInfoSync")&&(n=uni.getAccountInfoSync().miniProgram.appId||""),n),ak:O.appid,usv:l,v:"n"===g()?plus.runtime.version:"",ch:(e="","n"===g()&&(e=plus.runtime.channel),e),cn:"",pn:"",ct:"",t:h(),tt:"",p:"android"===q.platform?"a":"i",brand:q.brand||"",md:q.model,sv:q.system.replace(/(Android|iOS)\s/,""),mpsdk:q.SDKVersion||"",mpv:q.version||"",lang:q.language,pr:q.pixelRatio,ww:q.windowWidth,wh:q.windowHeight,sw:q.screenWidth,sh:q.screenHeight}}return c(t,[{key:"getIsReportData",value:function(){return new Promise((function(t,e){var n="",i=(new Date).getTime(),a=1;try{n=uni.getStorageSync("Report_Data_Time"),a=uni.getStorageSync("Report_Status")}catch(t){n="",a=1}""!==a?(1===a&&t(),n||(uni.setStorageSync("Report_Data_Time",i),n=i),i-n>864e5&&k((function(t){var e=t.enable;uni.setStorageSync("Report_Data_Time",i),uni.setStorageSync("Report_Status",e)}))):k((function(e){var n=e.enable;uni.setStorageSync("Report_Data_Time",i),uni.setStorageSync("Report_Status",n),1===n&&t()}))}))}},{key:"_applicationShow",value:function(){if(this.__licationHide){if(D(),x("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,D();var n=x();b();var i=w(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=w(this),i=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===g()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=R&&R.pages[i]&&R.pages[i].titleNView&&R.pages[i].titleNView.titleText||R&&R.pages[i]&&R.pages[i].navigationBarTitleText||"",this.__licationShow)return b(),this.__licationShow=!1,void(this._lastPageRoute=n);if(D(),this._lastPageRoute=n,x("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}b()}},{key:"_pageHide",value:function(){if(!this.__licationHide){D();var t=x("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,n,i=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+i||"",this.statData.t=h(),this.statData.sc=function(t){var e=g(),n="";return t||("wx"===e&&(n=uni.getLaunchOptionsSync().scene),n)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),n=0,e?n=e:(n=h(),uni.setStorageSync("First__Visit__Time",n),uni.removeStorageSync("Last__Visit__Time")),n),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",h()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===g()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,a=void 0===i?"":i,r=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:n,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:h(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;O.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var n=this,i=h(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var r=this._reportingRequestData;if("n"===g()&&(r=uni.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===g()&&uni.setStorageSync("__UNI__STAT__DATA",r),v=h(),"n"===g()&&(_=uni.getStorageSync("__page__residence__time")),!(v-_<10)||e){var o=this._reportingRequestData;"n"===g()&&(o=uni.getStorageSync("__UNI__STAT__DATA")),y();var s=[],u=[],c=[],p=function(t){o[t].forEach((function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?s.push(n):3===t?c.push(n):u.push(n)}))};for(var f in o)p(f);s.push.apply(s,u.concat(c));var d={usv:l,t:i,requests:JSON.stringify(s)};this._reportingRequestData={},"n"===g()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==g()||"a"!==this.statData.p?this._sendRequest(d):setTimeout((function(){n._sendRequest(d)}),200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(t){var e=this;this.getIsReportData().then((function(){uni.request({url:p,method:"POST",data:t,success:function(){},fail:function(n){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}))}},{key:"imageRequest",value:function(t){this.getIsReportData().then((function(){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},i="";for(var a in e)n[e[a]]=t[e[a]],i+=e[a]+"="+t[e[a]]+"&";return{sign:"",options:i.substr(0,i.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}))}},{key:"sendEvent",value:function(t,e){var n,i;(i=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] \u53c2\u6570\u7c7b\u578b\u9519\u8bef,\u53ea\u80fd\u4e3a String \u7c7b\u578b"),1):n.length>255?(console.error("uni.report [eventName] \u53c2\u6570\u957f\u5ea6\u4e0d\u80fd\u5927\u4e8e 255"),1):"string"!=typeof i&&"object"!=typeof i?(console.error("uni.report [options] \u53c2\u6570\u7c7b\u578b\u9519\u8bef,\u53ea\u80fd\u4e3a String \u6216 Object \u7c7b\u578b"),1):"string"==typeof i&&i.length>255?(console.error("uni.report [options] \u53c2\u6570\u957f\u5ea6\u4e0d\u80fd\u5927\u4e8e 255"),1):"title"===n&&"string"!=typeof i?(console.error("uni.report [eventName] \u53c2\u6570\u4e3a title \u65f6\uff0c[options] \u53c2\u6570\u53ea\u80fd\u4e3a String \u7c7b\u578b"),1):void 0:(console.error("uni.report \u7f3a\u5c11 [eventName] \u53c2\u6570"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}()).getInstance(),j=!1,C={onLaunch:function(t){N.report(t,this)},onReady:function(){N.ready(this)},onLoad:function(t){if(N.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return N.interceptShare(!1),e.call(this,t)}}},onShow:function(){j=!1,N.show(this)},onHide:function(){j=!0,N.hide(this)},onUnload:function(){j?j=!1:N.hide(this)},onError:function(t){N.error(t)}};!function(){var t=n(16);(t.default||t).mixin(C),uni.report=function(t,e){N.sendEvent(t,e)}}()},function(t){t.exports=JSON.parse('{"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-28920200923001","_inBundle":false,"_integrity":"sha512-VajbPlCUcWQNKT114irqeXzch1Q1huyENvkmXzwiS/U1K3B03/oia4YSbmCulMENX9Ykl+QkhdHzu2myEFkA1g==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-28920200923001.tgz","_shasum":"a40d5775c6635b8fcc14f2218b67c9471b6625f2","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"59d53ac1e48d8d2a3dd7c622e07f6553b8c8a0c6","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-28920200923001"}')},function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},function(t,e){t.exports=Vue},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(18).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=a.a},function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"==typeof __channelId__&&__channelId__}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)},e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var o=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),s="";if(o.length>1){var u=o.pop();s=o.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=o[0];console[r](s)}},,function(t,e,n){"use strict";n.r(e);var i=n(10),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=a.a},,,function(t,e,n){"use strict";n.r(e);n(13),n(17);var i=n(4);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),i.default.mpType="page",i.default.route="pages/detail/detail",i.default.el="#root",new Vue(i.default)},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,i=/^<\/([-A-Za-z0-9_]+)[^>]*>/,a=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,r=p("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),o=p("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),s=p("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),c=p("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),l=p("script,style");function p(t){for(var e={},n=t.split(","),i=0;i<n.length;i++)e[n[i]]=!0;return e}var f=function(e){e=function(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}(e);var p=[],f={node:"root",children:[]};return function(t,e){var p,f,d,h=[],g=t;for(h.last=function(){return this[this.length-1]};t;){if(f=!0,h.last()&&l[h.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+h.last()+"[^>]*>"),(function(t,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(n),""})),y("",h.last());else if(0==t.indexOf("\x3c!--")?(p=t.indexOf("--\x3e"))>=0&&(e.comment&&e.comment(t.substring(4,p)),t=t.substring(p+3),f=!1):0==t.indexOf("</")?(d=t.match(i))&&(t=t.substring(d[0].length),d[0].replace(i,y),f=!1):0==t.indexOf("<")&&(d=t.match(n))&&(t=t.substring(d[0].length),d[0].replace(n,v),f=!1),f){var _=(p=t.indexOf("<"))<0?t:t.substring(0,p);t=p<0?"":t.substring(p),e.chars&&e.chars(_)}if(t==g)throw"Parse Error: "+t;g=t}function v(t,n,i,l){if(n=n.toLowerCase(),o[n])for(;h.last()&&s[h.last()];)y("",h.last());if(u[n]&&h.last()==n&&y("",n),(l=r[n]||!!l)||h.push(n),e.start){var p=[];i.replace(a,(function(t,e){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:c[e]?e:"";p.push({name:e,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})})),e.start&&e.start(n,p,l)}}function y(t,n){if(n)for(i=h.length-1;i>=0&&h[i]!=n;i--);else var i=0;if(i>=0){for(var a=h.length-1;a>=i;a--)e.end&&e.end(h[a]);h.length=i}}y()}(e,{start:function(t,e,n){var i={name:t};if(0!==e.length&&(i.attrs=function(t){return t.reduce((function(t,e){var n=e.value,i=e.name;return t[i]?t[i]=t[i]+" "+n:t[i]=n,t}),{})}(e)),n){var a=p[0]||f;a.children||(a.children=[]),a.children.push(i)}else p.unshift(i)},end:function(e){var n=p.shift();if(n.name!==e&&t("error","invalid state: mismatch end tag"," at common/html-parser.js:303"),0===p.length)f.children.push(n);else{var i=p[0];i.children||(i.children=[]),i.children.push(n)}},chars:function(t){var e={type:"text",text:t};if(0===p.length)f.children.push(e);else{var n=p[0];n.children||(n.children=[]),n.children.push(e)}},comment:function(t){var e={node:"comment",text:t},n=p[0];n.children||(n.children=[]),n.children.push(e)}}),f.children};e.default=f}).call(this,n(19).default)}]);
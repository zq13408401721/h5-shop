(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/brand/brand-detail"],{"2b17":function(n,t,a){"use strict";(function(n){a("052d"),a("921b");o(a("66fd"));var t=o(a("e1c3"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,a("543d")["createPage"])},"49d4":function(n,t,a){"use strict";a.r(t);var o=a("9a59"),e=a.n(o);for(var r in o)"default"!==r&&function(n){a.d(t,n,(function(){return o[n]}))}(r);t["default"]=e.a},"87db":function(n,t,a){"use strict";var o=a("a484"),e=a.n(o);e.a},"9a59":function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{brandList:[],brandId:String,brandInfo:Object}},props:{},onLoad:function(n){console.log("onload"),this.brandId=n.brandId,this.getBrandList(),this.getBrandDetail()},methods:{getBrandList:function(){var n=this,t="https://cdplay.cn/api/brand/list?page=1&size=1000";console.log("url:"+t),this.$http.get(t).then((function(t){console.log("response:"+t),n.brandList=t.body.data.data}),(function(n){console.log("error:"+n)}))},getBrandDetail:function(){var n=this,t="https://cdplay.cn/api/brand/detail?id="+this.brandId;this.$http.get(t).then((function(t){n.brandInfo=t.body.data.brand}),(function(n){console.log(n)}))}},onShow:function(){console.log("onShow")}};t.default=o},a484:function(n,t,a){},b020:function(n,t,a){"use strict";var o;a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o}));var e=function(){var n=this,t=n.$createElement;n._self._c},r=[]},e1c3:function(n,t,a){"use strict";a.r(t);var o=a("b020"),e=a("49d4");for(var r in e)"default"!==r&&function(n){a.d(t,n,(function(){return e[n]}))}(r);a("87db");var d,i=a("f0c5"),c=Object(i["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],d);t["default"]=c.exports}},[["2b17","common/runtime","common/vendor"]]]);
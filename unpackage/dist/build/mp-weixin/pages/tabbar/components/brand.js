(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/components/brand"],{"2dbf":function(t,n,e){"use strict";var r=e("f8cd"),u=e.n(r);u.a},"3ece":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"6e15":function(t,n,e){"use strict";e.r(n);var r=e("7cec"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},"7cec":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"MixProductList",data:function(){return{renderList:[]}},props:{list:{type:Array,default:function(){return[]}},listType:{type:String,default:"column"}},watch:{list:function(t){this.renderList=t}},methods:{itemClick:function(n){t.navigateTo({url:"/pages/brand/brand-detail?brandId="+encodeURIComponent(JSON.stringify(n))})}}};n.default=e}).call(this,e("543d")["default"])},b9d2:function(t,n,e){"use strict";e.r(n);var r=e("3ece"),u=e("6e15");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("2dbf");var c,i=e("f0c5"),f=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);n["default"]=f.exports},f8cd:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/tabbar/components/brand-create-component',
    {
        'pages/tabbar/components/brand-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b9d2"))
        })
    },
    [['pages/tabbar/components/brand-create-component']]
]);

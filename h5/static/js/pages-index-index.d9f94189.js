(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0a75":function(t,a,e){"use strict";e.r(a);var n=e("1332"),i=e("6c18");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("43a3");var d,o=e("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6d06604a",null,!1,n["a"],d);a["default"]=c.exports},1332:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?e("v-uni-view",{staticClass:"uni-card__cover"},[e("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?e("v-uni-view",{staticClass:"uni-card__header"},[e("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("title")}}},[t.thumbnail?e("v-uni-view",{staticClass:"uni-card__header-avatar"},[e("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),e("v-uni-view",{staticClass:"uni-card__header-content"},[e("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?e("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),e("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("extra")}}},[e("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),e("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("content")}}},[t._t("default")],2),e("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},"3cd6":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};a.default=n},"43a3":function(t,a,e){"use strict";var n=e("f73a"),i=e.n(n);i.a},"4c46":function(t,a,e){"use strict";e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{token:"",wallet:20001111.01,tasks:[{id:"123",taskName:"test",taskDescription:"123123123123123123",image:"12312",status:"123123",type:"123123123",amount:0}]}},onLoad:function(){this.setToken(),this.loadTasks(),this.loadWallet()},methods:{setToken:function(){var t=this;uni.getStorage({key:"Authorization",success:function(a){t.token=a.data.data}})},loadTasks:function(){var t=this;uni.request({url:"http://zjhwork.xyz:9998/tasks/all?status=UNFINISHED",header:{Authorization:this.token},success:function(a){t.tasks=[],a.data.forEach((function(a){t.tasks.push(a)}))}})},completeTask:function(t){var a=this;uni.request({url:"http://zjhwork.xyz:9998/tasks/"+t+"/finished",method:"POST",header:{Authorization:this.token},success:function(t){a.loadTasks(),a.loadWallet(),uni.showToast({title:"完成任务!💰up!up!"})}})},loadWallet:function(t){var a=this;uni.request({url:"http://zjhwork.xyz:9998/wallets/me",method:"get",header:{Authorization:this.token},success:function(t){a.wallet=t.data.amount.toFixed(2)}})}}};a.default=n},"6c18":function(t,a,e){"use strict";e.r(a);var n=e("3cd6"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"6ff5":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={uniCard:e("0a75").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticStyle:{"text-align":"center"}},[e("v-uni-text",{staticStyle:{"font-weight":"700","font-size":"2rem","text-align":"center"},domProps:{textContent:t._s("💰"+t.wallet)}}),e("v-uni-text",{staticStyle:{color:"#B49950","margin-left":"10%","font-size":"2rem"},domProps:{textContent:t._s("¥")}})],1),e("v-uni-view",t._l(t.tasks,(function(a,n){return e("v-uni-view",{staticClass:"text-area"},[e("uni-card",{attrs:{title:a.taskName,"sub-title":a.type,extra:"+"+a.amount+"💰",thumbnail:a.image}},[e("v-uni-text",{domProps:{textContent:t._s(a.taskDescription)}}),e("v-uni-view",{},[e("v-uni-button",{staticStyle:{"margin-left":"70%"},attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.completeTask(a.id)}}},[t._v("完成")])],1)],1)],1)})),1)],1)},r=[]},"77a2":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #ebeef5}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=a},"799a":function(t,a,e){"use strict";e.r(a);var n=e("6ff5"),i=e("db4d");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);var d,o=e("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"92224a52",null,!1,n["a"],d);a["default"]=c.exports},db4d:function(t,a,e){"use strict";e.r(a);var n=e("4c46"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},f73a:function(t,a,e){var n=e("77a2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("70ffa8b5",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
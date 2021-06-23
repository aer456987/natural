(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51dc33bc"],{1593:function(t,e,a){"use strict";a.r(e);a("b0c0"),a("99af");var n=a("7a23"),c={class:"container pageContent py-5"},o=Object(n["f"])('<h1 class="text-center fw-bold m-0 pb-5">訂單管理</h1><div class="row justify-content-between pb-2"><span class="col-md-4 col-lg-2 pb-1"><select class="form-select" id="paySelect"><option selected disabled>選擇付款狀態</option><option value="全部">全部</option><option value="已付款">已付款</option><option value="未付款">未付款</option></select></span><span class="col-lg-2 text-end pb-1"><button class="btn btn-outline-brown"> 新增訂單 </button></span></div>',2),i={class:"table table-hover rounded overflow-hidden shadow-sm\n        text-break text-center"},r=Object(n["h"])("thead",{class:"table-dark align-middle"},[Object(n["h"])("tr",null,[Object(n["h"])("td",{width:"11%"},"建立時間"),Object(n["h"])("td",{width:"13%"},"訂單編號"),Object(n["h"])("td",{width:"10%"},"訂購人"),Object(n["h"])("td",{width:"10%"},"電話"),Object(n["h"])("td",{width:"13%"},"收件地址"),Object(n["h"])("td",{width:"15%"},"訂單內容"),Object(n["h"])("td",{width:"7%"},"總金額"),Object(n["h"])("td",{width:"7%"},"狀態"),Object(n["h"])("td",{width:"9%"},"操作"),Object(n["h"])("td",{width:"5%"},"刪除")])],-1),s={"data-title":"建立時間"},d={"data-title":"訂單編號",class:"text-warning"},l={"data-title":"訂購人"},u={"data-title":"電話"},b={"data-title":"收件地址"},h={"data-title":"訂單內容"},p={"data-title":"總金額"},g=Object(n["h"])("td",{"data-title":"操作"},[Object(n["h"])("button",{class:"btn btn-outline-brown p-1"}," 修改 ")],-1),O={"data-title":"刪除"};function j(t,e,a,j,f,v){var w=Object(n["y"])("Loading"),m=Object(n["y"])("Pagination");return Object(n["t"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(w,{status:f.loadingStatus},null,8,["status"]),Object(n["h"])("section",c,[o,Object(n["h"])("table",i,[r,Object(n["h"])("tbody",null,[(Object(n["t"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(f.orders,(function(e){return Object(n["t"])(),Object(n["d"])("tr",{key:e.id},[Object(n["h"])("td",s,Object(n["B"])(t.$filters.date(e.create_at)),1),Object(n["h"])("td",d,Object(n["B"])(e.id),1),Object(n["h"])("td",l,Object(n["B"])(e.user.name),1),Object(n["h"])("td",u,Object(n["B"])(e.user.tel),1),Object(n["h"])("td",b,Object(n["B"])(e.user.address),1),Object(n["h"])("td",h,[(Object(n["t"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(e.products,(function(t){return Object(n["t"])(),Object(n["d"])("p",{key:t.id,class:"m-0"},Object(n["B"])("".concat(t.product.title,", x ").concat(t.qty)),1)})),128))]),Object(n["h"])("td",p,Object(n["B"])(e.total),1),Object(n["h"])("td",{"data-title":"付款狀態",title:"付款日期： ".concat(t.$filters.date(e.paid_date)),class:{"text-gray":!e.is_paid}},Object(n["B"])(e.is_paid?"已付款":"未付款"),11,["title"]),g,Object(n["h"])("td",O,[Object(n["h"])("i",{class:"bi bi-trash-fill btn btn-outline-danger",onClick:function(t){return v.delOrderFn(e,"one")}},null,8,["onClick"])])])})),128))])]),Object(n["h"])(m,{"pagination-page":f.ordersPagination,onGetData:v.getOrders},null,8,["pagination-page","onGetData"])])],64)}var f=a("4897"),v=a("38b6"),w={name:"DashboardOrders",data:function(){return{loadingStatus:!1,select:"",ordersPagination:{},orders:{}}},components:{Pagination:v["a"]},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/orders?page=").concat(e);this.loadingStatus=!0,this.$http.get(a).then((function(e){e.data.success?(console.log("(成功-後台)取得訂單 res",e),t.orders=e.data.orders,t.ordersPagination=e.data.pagination,t.loadingStatus=!1,console.log("(成功-後台)取得訂單 vue",t.ordersPagination,t.orders)):(console.log("(錯誤-後台)取得訂單 res",e),t.loadingStatus=!1)})).catch((function(e){console.log("(失敗-後台)取得訂單 err"),console.dir(e),t.loadingStatus=!1}))},delOrder:function(t,e){var a=this,n="";this.loadingStatus=!0,"all"===e?(n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/order/all"),console.log("刪除全部",n)):"one"===e&&(n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/order/").concat(t)),this.$http.delete(n).then((function(t){t.data.success?(console.log("(成功-後台)取得訂單 res",t),Object(f["b"])(t.data.message,"success"),a.getOrders()):(console.log("(錯誤-後台)取得訂單 res",t),Object(f["b"])(t.data.message,"error"),a.loadingStatus=!1)})).catch((function(t){console.log("(失敗-後台)刪除訂單 err"),console.dir(t),a.loadingStatus=!1}))},delOrderFn:function(t,e){var a=t.id;Object(f["a"])(a,a,this.delOrder,e)}},mounted:function(){this.getOrders()}};w.render=j;e["default"]=w},"1dde":function(t,e,a){var n=a("d039"),c=a("b622"),o=a("2d00"),i=c("species");t.exports=function(t){return o>=51||!n((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"38b6":function(t,e,a){"use strict";var n=a("7a23"),c={"aria-label":"Page navigation"},o={class:"pagination justify-content-center pt-2"},i=Object(n["h"])("button",{type:"button",class:"page-link"},"«",-1),r={type:"button",class:"page-link"},s=Object(n["h"])("button",{type:"button",class:"page-link"},"»",-1);function d(t,e,a,d,l,u){return Object(n["t"])(),Object(n["d"])("nav",c,[Object(n["h"])("ul",o,[Object(n["h"])("li",{class:["page-item",{disabled:!l.pagesData.has_pre}],onClick:e[1]||(e[1]=function(e){return t.$emit("get-data",l.pagesData.current_page-1)})},[i],2),(Object(n["t"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(l.pagesData.total_pages,(function(e){return Object(n["t"])(),Object(n["d"])("li",{key:"分頁_".concat(e),class:["page-item",{active:l.pagesData.current_page===e}],onClick:function(a){return t.$emit("get-data",e)}},[Object(n["h"])("button",r,Object(n["B"])(e),1)],10,["onClick"])})),128)),Object(n["h"])("li",{class:["page-item",{disabled:!l.pagesData.has_next}],onClick:e[2]||(e[2]=function(e){return t.$emit("get-data",l.pagesData.current_page+1)})},[s],2)])])}var l={name:"DashboarPagination",props:["paginationPage"],data:function(){return{pagesData:{}}},watch:{paginationPage:{handler:function(t){this.pagesData=t}}},methods:{},created:function(){}};l.render=d;e["a"]=l},"65f0":function(t,e,a){var n=a("861d"),c=a("e8b5"),o=a("b622"),i=o("species");t.exports=function(t,e){var a;return c(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!c(a.prototype)?n(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var n=a("c04e"),c=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var i=n(e);i in t?c.f(t,i,o(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),c=a("d039"),o=a("e8b5"),i=a("861d"),r=a("7b0b"),s=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),b=a("b622"),h=a("2d00"),p=b("isConcatSpreadable"),g=9007199254740991,O="Maximum allowed index exceeded",j=h>=51||!c((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),f=u("concat"),v=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},w=!j||!f;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,n,c,o,i=r(this),u=l(i,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],v(o)){if(c=s(o.length),b+c>g)throw TypeError(O);for(a=0;a<c;a++,b++)a in o&&d(u,b,o[a])}else{if(b>=g)throw TypeError(O);d(u,b++,o)}return u.length=b,u}})},b0c0:function(t,e,a){var n=a("83ab"),c=a("9bf2").f,o=Function.prototype,i=o.toString,r=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&c(o,s,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(t){return""}}})},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-51dc33bc.c3585707.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9887ac8e"],{"1dde":function(t,e,s){var c=s("d039"),n=s("b622"),a=s("2d00"),r=n("species");t.exports=function(t){return a>=51||!c((function(){var e=[],s=e.constructor={};return s[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,s){var c=s("861d"),n=s("e8b5"),a=s("b622"),r=a("species");t.exports=function(t,e){var s;return n(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?c(s)&&(s=s[r],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},8418:function(t,e,s){"use strict";var c=s("c04e"),n=s("9bf2"),a=s("5c6c");t.exports=function(t,e,s){var r=c(e);r in t?n.f(t,r,a(0,s)):t[r]=s}},"99af":function(t,e,s){"use strict";var c=s("23e7"),n=s("d039"),a=s("e8b5"),r=s("861d"),o=s("7b0b"),i=s("50c4"),l=s("8418"),u=s("65f0"),d=s("1dde"),b=s("b622"),p=s("2d00"),h=b("isConcatSpreadable"),g=9007199254740991,j="Maximum allowed index exceeded",O=p>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),f=d("concat"),v=function(t){if(!r(t))return!1;var e=t[h];return void 0!==e?!!e:a(t)},y=!O||!f;c({target:"Array",proto:!0,forced:y},{concat:function(t){var e,s,c,n,a,r=o(this),d=u(r,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(a=-1===e?r:arguments[e],v(a)){if(n=i(a.length),b+n>g)throw TypeError(j);for(s=0;s<n;s++,b++)s in a&&l(d,b,a[s])}else{if(b>=g)throw TypeError(j);l(d,b++,a)}return d.length=b,d}})},ad18:function(t,e,s){"use strict";var c=s("7a23"),n={class:"px-lg-5 py-5"},a={class:"position-relative m-5"},r={class:"progress"},o=Object(c["h"])("i",{class:"bi bi-cart4"},null,-1),i=Object(c["h"])("i",{class:"bi bi-card-list"},null,-1),l=Object(c["h"])("i",{class:"bi bi-card-checklist"},null,-1),u=Object(c["h"])("i",{class:"bi bi-credit-card"},null,-1);function d(t,e,s,d,b,p){return Object(c["t"])(),Object(c["d"])("div",n,[Object(c["h"])("div",a,[Object(c["h"])("div",r,[Object(c["h"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:"width: ".concat(s.progress,"%"),"aria-valuenow":s.progress,"aria-valuemin":"0","aria-valuemax":"100"},null,12,["aria-valuenow"])]),Object(c["h"])("div",{class:["\n          position-absolute\n          top-0\n          start-0\n          translate-middle\n          progress_style\n        ",{progress_active:0===s.progress,"bg-primary":s.progress>1}]},[o],2),Object(c["h"])("div",{class:["\n          position-absolute\n          top-0\n          start-33\n          translate-middle\n          progress_style\n        ",{progress_active:33===s.progress,"bg-primary":s.progress>33}]},[i],2),Object(c["h"])("div",{class:["\n          position-absolute\n          top-0\n          start-66\n          translate-middle\n          progress_style\n        ",{progress_active:66===s.progress,"bg-primary":s.progress>66}]},[l],2),Object(c["h"])("div",{class:["\n          position-absolute\n          top-0\n          start-100\n          translate-middle\n          progress_style\n        ",{progress_active:100===s.progress}]},[u],2)])])}var b={props:["progress"]};b.render=d;e["a"]=b},b789:function(t,e,s){"use strict";s.r(e);var c=s("7a23"),n={class:"container pageContent"},a={class:"py-4"},r={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},o={class:"breadcrumb m-0"},i={class:"breadcrumb-item"},l=Object(c["g"])("線上商城"),u=Object(c["h"])("li",{class:"breadcrumb-item active","aria-current":"page"}," 購物車 ",-1),d=Object(c["h"])("h1",{class:"text-center fw-bold mb-4"},"購物車",-1),b={class:"container"},p={class:"row px-lg-0 px-xl-5 position-relative"},h={class:"\n              col-12\n              mb-5\n              p-5\n              table_style\n              text-center\n              bg-white\n              rounded-3\n              shadow"},g={key:0,class:"row justify-content-center py-4"},j={class:"col-12 col-md-5"},O=Object(c["h"])("h3",{class:"mb-3"},"購物車內沒有商品",-1),f=Object(c["g"])(" 前往選購 "),v={class:"table position-relative"},y=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("td",{width:"30%",class:"py-3 fs-5",scope:"col",colspan:"2"},"商品資訊"),Object(c["h"])("td",{width:"23%",class:"py-3 fs-5",scope:"col"},"數量"),Object(c["h"])("td",{width:"22%",class:"py-3 fs-5",scope:"col"},"金額"),Object(c["h"])("td",{width:"10%",class:"py-3 fs-5",scope:"col"})])],-1),m={style:{width:"70px",height:"70px",overflow:"hidden"}},w={scope:"row"},x={class:"d-flex justify-content-center"},_={class:"input-group",style:{"max-width":"180px"}},C={class:"\n                              form-control\n                              bg_transparent\n                              text-center\n                              border"},S=Object(c["h"])("span",null,"NT $",-1),k={class:"h5 text-end text-danger"},F={key:0,class:"col-12 d-flex justify-content-between mb-5"},A=Object(c["g"])(" ◁ 繼續購物 "),q=Object(c["g"])(" 填寫訂單 ▷ ");function B(t,e,s,B,$,I){var T=Object(c["y"])("Loading"),E=Object(c["y"])("router-link"),J=Object(c["y"])("Progress");return Object(c["t"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(T,{status:$.loadingStatus},null,8,["status"]),Object(c["h"])("section",n,[Object(c["h"])("main",a,[Object(c["h"])("nav",r,[Object(c["h"])("ol",o,[Object(c["h"])("li",i,[Object(c["h"])(E,{to:"/products",class:"link-secondary"},{default:Object(c["I"])((function(){return[l]})),_:1})]),u])]),Object(c["h"])(J,{progress:$.progress},null,8,["progress"]),d,Object(c["h"])("div",b,[Object(c["h"])("div",p,[Object(c["h"])("div",h,[$.btnStatus?(Object(c["t"])(),Object(c["d"])("div",g,[Object(c["h"])("span",j,[O,Object(c["h"])(E,{to:"/products",class:"btn btn_main w-100"},{default:Object(c["I"])((function(){return[f]})),_:1})])])):(Object(c["t"])(),Object(c["d"])(c["a"],{key:1},[Object(c["h"])("table",v,[y,Object(c["h"])("tbody",null,[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])($.carts.carts,(function(t){return Object(c["t"])(),Object(c["d"])("tr",{key:t.id},[Object(c["h"])("td",m,[Object(c["h"])("img",{src:t.product.imageUrl,alt:"預覽",class:"w-100"},null,8,["src"])]),Object(c["h"])("td",w,Object(c["B"])(t.product.title),1),Object(c["h"])("td",null,[Object(c["h"])("div",x,[Object(c["h"])("div",_,[Object(c["h"])("span",{class:"btn_light_green px-2",onClick:function(e){return I.putCart("reduce",t)}}," - ",8,["onClick"]),Object(c["h"])("div",C,Object(c["B"])(t.qty),1),Object(c["h"])("div",{class:"btn_light_green px-2",onClick:function(e){return I.putCart("add",t)}}," + ",8,["onClick"])])])]),Object(c["h"])("td",null,[S,Object(c["g"])(Object(c["B"])(t.final_total),1)]),Object(c["h"])("td",null,[Object(c["h"])("i",{class:"bi bi-x-lg btn_red",onClick:function(e){return I.delCart("one",t)}},null,8,["onClick"])])])})),128))])]),Object(c["h"])("p",k," 總金額NT $"+Object(c["B"])($.carts.total),1)],64))]),$.btnStatus?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])("div",F,[Object(c["h"])(E,{to:"/products",class:"btn btn_outline_green px-3 py-1"},{default:Object(c["I"])((function(){return[A]})),_:1}),Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger px-3 py-1",onClick:e[1]||(e[1]=function(t){return I.delCart("all")})}," 清空購物車 "),Object(c["h"])(E,{to:"/square/order",class:["btn btn_main px-3 py-1",{disabled:$.btnStatus}]},{default:Object(c["I"])((function(){return[q]})),_:1},8,["class"])]))])])])])],64)}s("99af");var $=s("ad18"),I=s("1940"),T=s.n(I),E={name:"Cart",data:function(){return{loadingStatus:!1,btnStatus:!0,progress:0,carts:{}}},components:{Progress:$["a"]},methods:{getCarts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.loadingStatus=!0,this.$http.get(e).then((function(e){e.data.success?(console.log("(成功-前台)取得購物車全部資料 res:",e),t.carts=e.data.data,e.data.data.carts.length>0?t.btnStatus=!1:t.btnStatus=!0,t.loadingStatus=!1,console.log("(成功-前台)取得購物車全部資料 vue:",t.carts)):(console.log("(錯誤-前台)取得購物車全部資料 res:",e),t.loadingStatus=!1)})).catch((function(e){console.log("(失敗-前台)取得購物車全部資料 err:"),console.dir(e),t.loadingStatus=!1}))},delCart:function(t,e){var s=this,c="",n="";this.loadingStatus=!0,"all"===t?(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/carts"),n="全部商品",console.log("刪除全部",c)):"one"===t&&(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart/").concat(e.id),n=e.product.title,console.log(e)),this.$http.delete(c).then((function(t){t.data.success?(console.log("(成功-前台)刪除購物車 res:",t),console.log("(成功-前台)刪除購物車 vue:",s.carts),s.swalFn("".concat(n," ").concat(t.data.message),"success"),s.getCarts()):(console.log("(錯誤-前台)刪除購物車 res:",t),s.swalFn(t.data.message,"error"),s.loadingStatus=!1)})).catch((function(t){console.log("(失敗-前台)刪除購物車 err:"),console.dir(t),s.swalFn(t.data.message,"error"),s.loadingStatus=!1}))},putCart:function(t,e){var s=this;this.loadingStatus=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart/").concat(e.id),n=e.qty;if("reduce"===t){if(e.qty<2)return this.swalFn("數量不可少於 1","error"),void(this.loadingStatus=!1);n-=1}else"add"===t&&(n+=1);var a={data:{product_id:e.product_id,qty:n}};this.$http.put(c,a).then((function(t){t.data.success?(console.log("(成功-前台)修改購物車 res:",t),s.swalFn(t.data.message,"success"),s.getCarts()):(console.log("(錯誤-前台)修改購物車 res:",t),s.swalFn(t.data.message,"error"),s.loadingStatus=!1)})).catch((function(t){console.log("(失敗-前台)修改購物車 err:"),console.dir(t),s.loadingStatus=!1}))},swalFn:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,c=arguments.length>3?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={title:t,text:c,icon:e,button:n,timer:s,closeOnClickOutside:!1};T()(a)}},mounted:function(){this.getCarts()}};E.render=B;e["default"]=E},e8b5:function(t,e,s){var c=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}}}]);
//# sourceMappingURL=chunk-9887ac8e.706e5aa0.js.map
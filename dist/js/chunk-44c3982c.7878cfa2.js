(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c3982c"],{"0b42":function(t,e,c){var a=c("861d"),o=c("e8b5"),r=c("b622"),s=r("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?a(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"0e54":function(t,e,c){"use strict";var a=c("7a23"),o={class:"px-lg-5 py-2 py-md-5"},r={class:"position-relative m-5"},s={class:"progress"},n=Object(a["createVNode"])("i",{class:"bi bi-cart4"},null,-1),i=Object(a["createVNode"])("i",{class:"bi bi-card-list"},null,-1),u=Object(a["createVNode"])("i",{class:"bi bi-card-checklist"},null,-1),l=Object(a["createVNode"])("i",{class:"bi bi-credit-card"},null,-1);function d(t,e,c,d,b,p){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:"width: ".concat(c.progressValue,"%"),"aria-valuenow":c.progressValue,"aria-valuemin":"0","aria-valuemax":"100"},null,12,["aria-valuenow"])]),Object(a["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-0 translate-middle",{"custom__progress--active":0===c.progressValue,"bg-primary":c.progressValue>1}]},[n],2),Object(a["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-33 translate-middle",{"custom__progress--active":33===c.progressValue,"bg-primary":c.progressValue>33}]},[i],2),Object(a["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-66 translate-middle",{"custom__progress--active":66===c.progressValue,"bg-primary":c.progressValue>66}]},[u],2),Object(a["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-100 translate-middle",{"custom__progress--active":100===c.progressValue}]},[l],2)])])}var b={name:"CartProgress",props:["progressValue"]};b.render=d;e["a"]=b},"159b":function(t,e,c){var a=c("da84"),o=c("fdbc"),r=c("17c2"),s=c("9112");for(var n in o){var i=a[n],u=i&&i.prototype;if(u&&u.forEach!==r)try{s(u,"forEach",r)}catch(l){u.forEach=r}}},"17c2":function(t,e,c){"use strict";var a=c("b727").forEach,o=c("a640"),r=o("forEach");t.exports=r?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,c){var a=c("d039"),o=c("b622"),r=c("2d00"),s=o("species");t.exports=function(t){return r>=51||!a((function(){var e=[],c=e.constructor={};return c[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2fbc":function(t,e,c){"use strict";var a=c("7a23"),o={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},r={class:"breadcrumb m-0"},s={class:"breadcrumb-item active","aria-current":"page"};function n(t,e,c,n,i,u){var l=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])("nav",o,[Object(a["createVNode"])("ul",r,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.breadcrumbData.previous,(function(t,e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:"麵包屑_".concat(e),class:"breadcrumb-item"},[Object(a["createVNode"])(l,{to:t.url,class:"link-success-light"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.title),1)]})),_:2},1032,["to"])])})),128)),Object(a["createVNode"])("li",s,Object(a["toDisplayString"])(c.breadcrumbData.purpose),1)])])])}var i={name:"Breadcrumb.vue",props:["breadcrumbData"]};i.render=n;e["a"]=i},"3a72":function(t,e,c){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,c){var a=t.get(e);a&&a.push(c)||t.set(e,[c])},off:function(e,c){var a=t.get(e);a&&a.splice(a.indexOf(c)>>>0,1)},emit:function(e,c){(t.get(e)||[]).slice().map((function(t){t(c)})),(t.get("*")||[]).slice().map((function(t){t(e,c)}))}}};e["a"]=a()},"62b3":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o={class:"container page-content userselect-none"},r={class:"py-4"},s=Object(a["createVNode"])("h2",{class:"h1 text-center fw-bold mb-4"}," 購物車 ",-1),n={class:"container"},i={class:"row px-lg-0 px-xl-5 position-relative"},u={class:"col-12 width-xl bg-white\n              mx-auto mb-5  py-5 px-2 px-md-5\n              text-center rounded-3 shadow"},l={key:0,class:"row justify-content-center py-4"},d={class:"col-12 col-md-5"},b=Object(a["createVNode"])("h3",{class:"mb-3"},"購物車內沒有商品",-1),p=Object(a["createTextVNode"])(" 前往選購 "),f={class:"table custom-cart-table position-relative"},m=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("td",{width:"40%",scope:"col",class:"py-3"}," 商品資訊 "),Object(a["createVNode"])("td",{width:"35%",scope:"col",class:"py-3"}," 數量 "),Object(a["createVNode"])("td",{width:"20%",scope:"col",class:"py-3"}," 金額 "),Object(a["createVNode"])("td",{width:"5%",scope:"col",class:"py-3"})])],-1),j={class:"align-middle"},O={class:"text-start"},g={class:"row align-items-center"},h={class:"col-4 d-none d-md-inline"},v={class:"col-md-8 px-sm-1 m-0"},N={class:"d-flex justify-content-center"},V={class:"input-group",style:{"max-width":"180px"}},y={class:"form-control text-center px-0 p-md-1 custom-style-text-2"},x={type:"button",class:"custom-btn-red fs-5 bg-transparent border-0"},k={class:"row justify-content-end"},C={class:"col-12 text-end mb-1"},w={class:"m-0"},_={class:"d-block text-gray"},S={key:0,class:"d-block"},B={class:"col-12 mb-3"},D={class:"h5 text-end text-danger"},T={class:"col-10 col-md-6 col-lg-5"},$={class:"input-group input-group-sm"},E={key:0,class:"d-flex justify-content-between mb-2 mb-md-5"},L=Object(a["createTextVNode"])(" ◁ 繼續購物 "),A=Object(a["createTextVNode"])(" 填寫訂單 ▷ ");function q(t,e,c,q,F,M){var P=Object(a["resolveComponent"])("Loading"),I=Object(a["resolveComponent"])("Breadcrumb"),J=Object(a["resolveComponent"])("CartProgress"),U=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(P,{status:F.loadingStatus},null,8,["status"]),Object(a["createVNode"])("section",o,[Object(a["createVNode"])("main",r,[Object(a["createVNode"])(I,{"breadcrumb-data":F.breadcrumbData},null,8,["breadcrumb-data"]),Object(a["createVNode"])(J,{"progress-value":F.progressNum},null,8,["progress-value"]),s,Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("section",u,[F.btnStatus?(Object(a["openBlock"])(),Object(a["createBlock"])("div",l,[Object(a["createVNode"])("div",d,[b,Object(a["createVNode"])(U,{to:"/products",class:"btn custom-btn-main w-100"},{default:Object(a["withCtx"])((function(){return[p]})),_:1})])])):(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:1},[Object(a["createVNode"])("table",f,[m,Object(a["createVNode"])("tbody",j,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(F.carts.carts,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("td",O,[Object(a["createVNode"])("div",g,[Object(a["createVNode"])("div",h,[Object(a["createVNode"])("img",{class:"width-sm",src:e.product.imageUrl,alt:"預覽"},null,8,["src"])]),Object(a["createVNode"])("p",v,Object(a["toDisplayString"])(e.product.title),1)])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",N,[Object(a["createVNode"])("div",V,[Object(a["createVNode"])("button",{type:"button",class:"custom-btn-light-green px-0 px-sm-1 px-md-1 border-0",onClick:function(t){return M.putCart("reduce",e)}}," - ",8,["onClick"]),Object(a["createVNode"])("span",y,Object(a["toDisplayString"])(e.qty),1),Object(a["createVNode"])("button",{type:"button",class:"custom-btn-light-green px-0 px-sm-1 px-md-1 border-0",onClick:function(t){return M.putCart("add",e)}}," + ",8,["onClick"])])])]),Object(a["createVNode"])("td",null," NT $"+Object(a["toDisplayString"])(t.$filters.currency(e.final_total)),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("button",x,[Object(a["createVNode"])("i",{class:"bi bi-x-lg",onClick:function(t){return M.delCart("one",e)}},null,8,["onClick"])])])])})),128))])]),Object(a["createVNode"])("div",k,[Object(a["createVNode"])("div",C,[Object(a["createVNode"])("p",w,[Object(a["createVNode"])("small",_," 商品金額NT $"+Object(a["toDisplayString"])(t.$filters.currency(F.carts.total)),1),F.isDiscount?(Object(a["openBlock"])(),Object(a["createBlock"])("small",S," - 使用優惠折扣NT $"+Object(a["toDisplayString"])(t.$filters.currency(F.carts.total-F.carts.final_total)),1)):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("div",B,[Object(a["createVNode"])("p",D," 總金額NT "+Object(a["toDisplayString"])(t.$filters.currency(F.carts.final_total)),1)]),Object(a["createVNode"])("div",T,[Object(a["createVNode"])("div",$,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入折扣碼","aria-label":"couponNum","aria-describedby":"basic-addon1","onUpdate:modelValue":e[1]||(e[1]=function(t){return F.couponNum.code=t})},null,512),[[a["vModelText"],F.couponNum.code]]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-success input-group-text",onClick:e[2]||(e[2]=function(){return M.useCoupon&&M.useCoupon.apply(M,arguments)})}," 套用優惠券 ")])])])],64))]),F.btnStatus?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",E,[Object(a["createVNode"])(U,{to:"/products",class:"btn btn-outline-custom-primary custom-style-text-3\n                px-1 px-sm-2 px-md-3 py-1"},{default:Object(a["withCtx"])((function(){return[L]})),_:1}),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger custom-style-text-3\n                px-1 px-sm-2 px-md-3 py-1",onClick:e[3]||(e[3]=function(t){return M.delCart("all")})}," 清空 "),Object(a["createVNode"])(U,{to:"/order",class:["btn custom-btn-main custom-btn\n                px-1 px-sm-2 px-md-3 py-1",{disabled:F.btnStatus}]},{default:Object(a["withCtx"])((function(){return[A]})),_:1},8,["class"])]))])])])])],64)}c("99af"),c("159b");var F=c("4897"),M=c("3a72"),P=c("2fbc"),I=c("0e54"),J={name:"Cart",data:function(){return{loadingStatus:!1,btnStatus:!0,progressNum:0,carts:{},couponNum:{code:"Y2021M03YIP"},isDiscount:!1,breadcrumbData:{previous:[{title:"線上商城",url:"/products"}],purpose:"購物車"}}},components:{CartProgress:I["a"],Breadcrumb:P["a"]},methods:{getCarts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.loadingStatus=!0,this.$http.get(e).then((function(e){e.data.success?(t.carts=e.data.data,e.data.data.carts.length>0?t.btnStatus=!1:t.btnStatus=!0,t.carts.total>t.carts.final_total&&(t.isDiscount=!0),t.loadingStatus=!1):(Object(F["d"])("購物車資料異常","請重新整理",!0,"top-end"),t.loadingStatus=!1)})).catch((function(){Object(F["d"])("購物車資料異常","請重新整理",!0,"top-end"),t.loadingStatus=!1}))},delCart:function(t,e){var c=this,a="",o="";this.loadingStatus=!0,"all"===t?(a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/carts"),o="全部商品"):"one"===t&&(a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart/").concat(e.id),o=e.product.title),this.$http.delete(a).then((function(t){t.data.success?(Object(F["f"])("".concat(o," ").concat(t.data.message),"success",!0,"top-end"),c.updateCartLength(),c.getCarts()):(Object(F["f"])(t.data.message,"error",!0,"top-end"),c.loadingStatus=!1)})).catch((function(t){Object(F["f"])(t.data.message,"error",!0,"top-end"),c.loadingStatus=!1}))},putCart:function(t,e){var c=this;this.loadingStatus=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart/").concat(e.id),o=e.qty;if("reduce"===t){if(e.qty<2)return Object(F["f"])("數量不可少於 1","error",!0,"top-end"),void(this.loadingStatus=!1);o-=1}else"add"===t&&(o+=1);var r={data:{product_id:e.product_id,qty:o}};this.$http.put(a,r).then((function(t){t.data.success?(Object(F["f"])(t.data.message,"success",!0,"top-end"),c.updateCartLength(),c.getCarts()):(Object(F["f"])(t.data.message,"error",!0,"top-end"),c.loadingStatus=!1)})).catch((function(){Object(F["d"])("操作出現異常","請稍後再試",!0,"top-end"),c.loadingStatus=!1}))},useCoupon:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/coupon");this.loadingStatus=!0,this.$http.post(e,{data:this.couponNum}).then((function(e){e.data.success?(Object(F["f"])(e.data.message,"success",!0,"top-end"),t.rederCode=t.couponNum.code,t.getCarts(),t.couponNum.code="",t.loadingStatus=!1):(Object(F["f"])(e.data.message,"error",!0,"top-end"),t.loadingStatus=!1)})).catch((function(){Object(F["d"])("操作出現異常","請稍後再試",!0,"top-end"),t.loadingStatus=!1}))},updateCartLength:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.$http.get(e).then((function(e){if(e.data.success){var c=0;t.cartsLength=e.data.data.carts.forEach((function(t){c+=t.qty})),t.cartsLength=c,M["a"].emit("cart-number",t.cartsLength)}else Object(F["d"])("購物車資料異常","請重新整理",!0,"top-end")})).catch((function(){Object(F["d"])("購物車資料異常","請重新整理",!0,"top-end")}))},backTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},mounted:function(){this.backTop(),this.getCarts(),this.isDiscount=!1}};J.render=q;e["default"]=J},"65f0":function(t,e,c){var a=c("0b42");t.exports=function(t,e){return new(a(t))(0===e?0:e)}},8418:function(t,e,c){"use strict";var a=c("a04b"),o=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var s=a(e);s in t?o.f(t,s,r(0,c)):t[s]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),o=c("d039"),r=c("e8b5"),s=c("861d"),n=c("7b0b"),i=c("50c4"),u=c("8418"),l=c("65f0"),d=c("1dde"),b=c("b622"),p=c("2d00"),f=b("isConcatSpreadable"),m=9007199254740991,j="Maximum allowed index exceeded",O=p>=51||!o((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=d("concat"),h=function(t){if(!s(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},v=!O||!g;a({target:"Array",proto:!0,forced:v},{concat:function(t){var e,c,a,o,r,s=n(this),d=l(s,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?s:arguments[e],h(r)){if(o=i(r.length),b+o>m)throw TypeError(j);for(c=0;c<o;c++,b++)c in r&&u(d,b,r[c])}else{if(b>=m)throw TypeError(j);u(d,b++,r)}return d.length=b,d}})},a640:function(t,e,c){"use strict";var a=c("d039");t.exports=function(t,e){var c=[][t];return!!c&&a((function(){c.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,c){var a=c("0366"),o=c("44ad"),r=c("7b0b"),s=c("50c4"),n=c("65f0"),i=[].push,u=function(t){var e=1==t,c=2==t,u=3==t,l=4==t,d=6==t,b=7==t,p=5==t||d;return function(f,m,j,O){for(var g,h,v=r(f),N=o(v),V=a(m,j,3),y=s(N.length),x=0,k=O||n,C=e?k(f,y):c||b?k(f,0):void 0;y>x;x++)if((p||x in N)&&(g=N[x],h=V(g,x,v),t))if(e)C[x]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:i.call(C,g)}else switch(t){case 4:return!1;case 7:i.call(C,g)}return d?-1:u||l?l:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},e8b5:function(t,e,c){var a=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-44c3982c.7878cfa2.js.map
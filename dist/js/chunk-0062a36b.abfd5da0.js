(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0062a36b"],{"0e54":function(t,e,c){"use strict";var a=c("7a23"),s={class:"px-lg-5 py-2 py-md-5"},r={class:"position-relative m-5"},o={class:"progress"},n=Object(a["h"])("i",{class:"bi bi-cart4"},null,-1),i=Object(a["h"])("i",{class:"bi bi-card-list"},null,-1),l=Object(a["h"])("i",{class:"bi bi-card-checklist"},null,-1),u=Object(a["h"])("i",{class:"bi bi-credit-card"},null,-1);function b(t,e,c,b,d,p){return Object(a["v"])(),Object(a["d"])("div",s,[Object(a["h"])("div",r,[Object(a["h"])("div",o,[Object(a["h"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:"width: ".concat(c.progressValue,"%"),"aria-valuenow":c.progressValue,"aria-valuemin":"0","aria-valuemax":"100"},null,12,["aria-valuenow"])]),Object(a["h"])("div",{class:["progress_style position-absolute top-0 start-0 translate-middle",{progress_active:0===c.progressValue,"bg-primary":c.progressValue>1}]},[n],2),Object(a["h"])("div",{class:["progress_style position-absolute top-0 start-33 translate-middle",{progress_active:33===c.progressValue,"bg-primary":c.progressValue>33}]},[i],2),Object(a["h"])("div",{class:["progress_style position-absolute top-0 start-66 translate-middle",{progress_active:66===c.progressValue,"bg-primary":c.progressValue>66}]},[l],2),Object(a["h"])("div",{class:["progress_style position-absolute top-0 start-100 translate-middle",{progress_active:100===c.progressValue}]},[u],2)])])}var d={name:"CartProgress",props:["progressValue"]};d.render=b;e["a"]=d},"1dde":function(t,e,c){var a=c("d039"),s=c("b622"),r=c("2d00"),o=s("species");t.exports=function(t){return r>=51||!a((function(){var e=[],c=e.constructor={};return c[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2fbc":function(t,e,c){"use strict";var a=c("7a23"),s={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},r={class:"breadcrumb m-0"},o={class:"breadcrumb-item active","aria-current":"page"};function n(t,e,c,n,i,l){var u=Object(a["A"])("router-link");return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("nav",s,[Object(a["h"])("ol",r,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(c.breadcrumbData.previous,(function(t,e){return Object(a["v"])(),Object(a["d"])("li",{key:"麵包屑_".concat(e),class:"breadcrumb-item"},[Object(a["h"])(u,{to:t.url,class:"link-secondary"},{default:Object(a["M"])((function(){return[Object(a["g"])(Object(a["D"])(t.title),1)]})),_:2},1032,["to"])])})),128)),Object(a["h"])("li",o,Object(a["D"])(c.breadcrumbData.purpose),1)])])])}var i={name:"Breadcrumb.vue",props:["breadcrumbData"]};i.render=n;e["a"]=i},"62b3":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),s={class:"container pageContent"},r={class:"py-4"},o=Object(a["h"])("h1",{class:"text-center fw-bold mb-4"}," 購物車 ",-1),n={class:"container"},i={class:"row px-lg-0 px-xl-5 position-relative"},l={class:"col-12 table_style bg-white\n              mb-5 py-5 px-2 px-md-5\n              text-center rounded-3 shadow"},u={key:0,class:"row justify-content-center py-4"},b={class:"col-12 col-md-5"},d=Object(a["h"])("h3",{class:"mb-3"},"購物車內沒有商品",-1),p=Object(a["g"])(" 前往選購 "),h={class:"table cart_table_style position-relative"},j=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("td",{width:"30%",scope:"col",class:"py-3"}," 商品資訊 "),Object(a["h"])("td",{width:"45%",scope:"col",class:"py-3"}," 數量 "),Object(a["h"])("td",{width:"20%",scope:"col",class:"py-3"}," 金額 "),Object(a["h"])("td",{width:"5%",scope:"col",class:"py-3"})])],-1),O={class:"align-middle"},g={class:"d-flex align-items-center border"},m={class:"d-none d-md-block"},f={class:"m-0 px-1 px-md-2 text-start"},v={class:"border"},y={class:"d-flex justify-content-center"},x={class:"input-group",style:{"max-width":"180px"}},_={class:"form-control text-center border px-0 p-md-1"},w={class:"border"},C={class:"border"},k={class:"row justify-content-end"},S={class:"col-12 text-end mb-1"},D={class:"d-block text-gray"},N={key:0,class:"d-block"},A={class:"col-12 mb-3"},V={class:"h5 text-end text-danger"},$={class:"col-10 col-md-6 col-lg-5"},M={class:"input-group input-group-sm"},T={key:0,class:"d-flex justify-content-between mb-2 mb-md-5"},q=Object(a["g"])(" ◁ 繼續購物 "),B=Object(a["g"])(" 填寫訂單 ▷ ");function P(t,e,c,P,J,z){var E=Object(a["A"])("Loading"),U=Object(a["A"])("Breadcrumb"),Y=Object(a["A"])("Progress"),I=Object(a["A"])("router-link");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(E,{status:J.loadingStatus},null,8,["status"]),Object(a["h"])("section",s,[Object(a["h"])("section",r,[Object(a["h"])(U,{"breadcrumb-data":J.breadcrumbData},null,8,["breadcrumb-data"]),Object(a["h"])(Y,{"progress-value":J.progressNum},null,8,["progress-value"]),o,Object(a["h"])("div",n,[Object(a["h"])("main",i,[Object(a["h"])("div",l,[J.btnStatus?(Object(a["v"])(),Object(a["d"])("div",u,[Object(a["h"])("span",b,[d,Object(a["h"])(I,{to:"/products",class:"btn btn_main w-100"},{default:Object(a["M"])((function(){return[p]})),_:1})])])):(Object(a["v"])(),Object(a["d"])(a["a"],{key:1},[Object(a["h"])("table",h,[j,Object(a["h"])("tbody",O,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(J.carts.carts,(function(e){return Object(a["v"])(),Object(a["d"])("tr",{key:e.id},[Object(a["h"])("td",g,[Object(a["h"])("span",m,[Object(a["h"])("img",{class:"width_sm w-100  d-none d-md-block",src:e.product.imageUrl,alt:"預覽"},null,8,["src"])]),Object(a["h"])("p",f,Object(a["D"])(e.product.title),1)]),Object(a["h"])("td",v,[Object(a["h"])("div",y,[Object(a["h"])("div",x,[Object(a["h"])("span",{class:"btn_light_green px-1 px-md-2",onClick:function(t){return z.putCart("reduce",e)}}," - ",8,["onClick"]),Object(a["h"])("div",_,Object(a["D"])(e.qty),1),Object(a["h"])("div",{class:"btn_light_green px-1 px-md-2",onClick:function(t){return z.putCart("add",e)}}," + ",8,["onClick"])])])]),Object(a["h"])("td",w," NT $"+Object(a["D"])(t.$filters.currency(e.final_total)),1),Object(a["h"])("td",C,[Object(a["h"])("i",{class:"bi bi-x-lg btn_red fs-6",onClick:function(t){return z.delCart("one",e)}},null,8,["onClick"])])])})),128))])]),Object(a["h"])("div",k,[Object(a["h"])("span",S,[Object(a["h"])("small",D," 商品金額NT $"+Object(a["D"])(t.$filters.currency(J.carts.total)),1),J.isDiscount?(Object(a["v"])(),Object(a["d"])("small",N," - 使用優惠折扣NT $"+Object(a["D"])(t.$filters.currency(J.carts.total-J.carts.final_total)),1)):Object(a["e"])("",!0)]),Object(a["h"])("span",A,[Object(a["h"])("p",V," 總金額NT "+Object(a["D"])(t.$filters.currency(J.carts.final_total)),1)]),Object(a["h"])("span",$,[Object(a["h"])("span",M,[Object(a["N"])(Object(a["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入折扣碼","aria-label":"couponNum","aria-describedby":"basic-addon1","onUpdate:modelValue":e[1]||(e[1]=function(t){return J.couponNum.code=t})},null,512),[[a["J"],J.couponNum.code]]),Object(a["h"])("button",{type:"button",class:"btn btn-outline-primary input-group-text",onClick:e[2]||(e[2]=function(){return z.useCoupon&&z.useCoupon.apply(z,arguments)})}," 套用優惠券 ")])])])],64))]),J.btnStatus?Object(a["e"])("",!0):(Object(a["v"])(),Object(a["d"])("div",T,[Object(a["h"])(I,{to:"/products",class:"btn btn-outline-custom-primary btn_style\n                px-1 px-sm-2 px-md-3 py-1"},{default:Object(a["M"])((function(){return[q]})),_:1}),Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger btn_style\n                px-1 px-sm-2 px-md-3 py-1",onClick:e[3]||(e[3]=function(t){return z.delCart("all")})}," 清空 "),Object(a["h"])(I,{to:"/order",class:["btn btn_main btn_style\n                px-1 px-sm-2 px-md-3 py-1",{disabled:J.btnStatus}]},{default:Object(a["M"])((function(){return[B]})),_:1},8,["class"])]))])])])])],64)}c("99af");var J=c("4897"),z=c("2fbc"),E=c("0e54"),U={name:"Cart",data:function(){return{loadingStatus:!1,btnStatus:!0,progressNum:0,carts:{},couponNum:{code:"Y2021M03YIP"},isDiscount:!1,breadcrumbData:{previous:[{title:"線上商城",url:"/products"}],purpose:"購物車"}}},components:{Progress:E["a"],Breadcrumb:z["a"]},methods:{getCarts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.loadingStatus=!0,this.$http.get(e).then((function(e){e.data.success?(t.carts=e.data.data,e.data.data.carts.length>0?t.btnStatus=!1:t.btnStatus=!0,t.carts.total>t.carts.final_total&&(t.isDiscount=!0),t.loadingStatus=!1):(console.log("(錯誤-前台)取得購物車全部資料 res:",e),t.loadingStatus=!1)})).catch((function(e){console.log("(失敗-前台)取得購物車全部資料 err:"),console.dir(e),t.loadingStatus=!1}))},delCart:function(t,e){var c=this,a="",s="";this.loadingStatus=!0,"all"===t?(a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/carts"),s="全部商品"):"one"===t&&(a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart/").concat(e.id),s=e.product.title),this.$http.delete(a).then((function(t){t.data.success?(Object(J["c"])("".concat(s," ").concat(t.data.message),"success"),c.getCarts()):(Object(J["c"])(t.data.message,"error"),c.loadingStatus=!1)})).catch((function(t){console.log("(失敗-前台)刪除購物車 err:"),console.dir(t),Object(J["c"])(t.data.message,"error"),c.loadingStatus=!1}))},putCart:function(t,e){var c=this;this.loadingStatus=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart/").concat(e.id),s=e.qty;if("reduce"===t){if(e.qty<2)return Object(J["c"])("數量不可少於 1","error"),void(this.loadingStatus=!1);s-=1}else"add"===t&&(s+=1);var r={data:{product_id:e.product_id,qty:s}};this.$http.put(a,r).then((function(t){t.data.success?(Object(J["c"])(t.data.message,"success"),c.getCarts()):(Object(J["c"])(t.data.message,"error"),c.loadingStatus=!1)})).catch((function(t){console.log("(失敗-前台)修改購物車 err:"),console.dir(t),c.loadingStatus=!1}))},useCoupon:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/coupon");this.loadingStatus=!0,this.$http.post(e,{data:this.couponNum}).then((function(e){e.data.success?(Object(J["c"])(e.data.message,"success"),t.rederCode=t.couponNum.code,t.getCarts(),t.couponNum.code="",t.loadingStatus=!1):(Object(J["c"])(e.data.message,"error"),t.loadingStatus=!1)})).catch((function(e){console.log("(失敗-前台)套用優惠券 err:"),console.dir(e),t.loadingStatus=!1}))}},mounted:function(){this.getCarts()}};c("8c31");U.render=P;e["default"]=U},"65f0":function(t,e,c){var a=c("861d"),s=c("e8b5"),r=c("b622"),o=r("species");t.exports=function(t,e){var c;return s(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!s(c.prototype)?a(c)&&(c=c[o],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},8418:function(t,e,c){"use strict";var a=c("c04e"),s=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var o=a(e);o in t?s.f(t,o,r(0,c)):t[o]=c}},"8c31":function(t,e,c){"use strict";c("ef95")},"99af":function(t,e,c){"use strict";var a=c("23e7"),s=c("d039"),r=c("e8b5"),o=c("861d"),n=c("7b0b"),i=c("50c4"),l=c("8418"),u=c("65f0"),b=c("1dde"),d=c("b622"),p=c("2d00"),h=d("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",g=p>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=b("concat"),f=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},v=!g||!m;a({target:"Array",proto:!0,forced:v},{concat:function(t){var e,c,a,s,r,o=n(this),b=u(o,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],f(r)){if(s=i(r.length),d+s>j)throw TypeError(O);for(c=0;c<s;c++,d++)c in r&&l(b,d,r[c])}else{if(d>=j)throw TypeError(O);l(b,d++,r)}return b.length=d,b}})},e8b5:function(t,e,c){var a=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},ef95:function(t,e,c){}}]);
//# sourceMappingURL=chunk-0062a36b.abfd5da0.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-341f4a2e"],{"0e54":function(e,t,r){"use strict";var a=r("7a23"),s={class:"px-lg-5 py-2 py-md-5"},c={class:"position-relative m-5"},n={class:"progress"},l=Object(a["h"])("i",{class:"bi bi-cart4"},null,-1),o=Object(a["h"])("i",{class:"bi bi-card-list"},null,-1),i=Object(a["h"])("i",{class:"bi bi-card-checklist"},null,-1),u=Object(a["h"])("i",{class:"bi bi-credit-card"},null,-1);function d(e,t,r,d,b,f){return Object(a["v"])(),Object(a["d"])("div",s,[Object(a["h"])("div",c,[Object(a["h"])("div",n,[Object(a["h"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:"width: ".concat(r.progressValue,"%"),"aria-valuenow":r.progressValue,"aria-valuemin":"0","aria-valuemax":"100"},null,12,["aria-valuenow"])]),Object(a["h"])("div",{class:["progress_style position-absolute top-0 start-0 translate-middle",{progress_active:0===r.progressValue,"bg-primary":r.progressValue>1}]},[l],2),Object(a["h"])("div",{class:["progress_style position-absolute top-0 start-33 translate-middle",{progress_active:33===r.progressValue,"bg-primary":r.progressValue>33}]},[o],2),Object(a["h"])("div",{class:["progress_style position-absolute top-0 start-66 translate-middle",{progress_active:66===r.progressValue,"bg-primary":r.progressValue>66}]},[i],2),Object(a["h"])("div",{class:["progress_style position-absolute top-0 start-100 translate-middle",{progress_active:100===r.progressValue}]},[u],2)])])}var b={name:"CartProgress",props:["progressValue"]};b.render=d;t["a"]=b},"159b":function(e,t,r){var a=r("da84"),s=r("fdbc"),c=r("17c2"),n=r("9112");for(var l in s){var o=a[l],i=o&&o.prototype;if(i&&i.forEach!==c)try{n(i,"forEach",c)}catch(u){i.forEach=c}}},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,s=r("a640"),c=s("forEach");e.exports=c?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,r){var a=r("d039"),s=r("b622"),c=r("2d00"),n=s("species");e.exports=function(e){return c>=51||!a((function(){var t=[],r=t.constructor={};return r[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,r){"use strict";var a=r("23e7"),s=r("5a34"),c=r("1d80"),n=r("ab13");a({target:"String",proto:!0,forced:!n("includes")},{includes:function(e){return!!~String(c(this)).indexOf(s(e),arguments.length>1?arguments[1]:void 0)}})},"2fbc":function(e,t,r){"use strict";var a=r("7a23"),s={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},c={class:"breadcrumb m-0"},n={class:"breadcrumb-item active","aria-current":"page"};function l(e,t,r,l,o,i){var u=Object(a["A"])("router-link");return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("nav",s,[Object(a["h"])("ol",c,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(r.breadcrumbData.previous,(function(e,t){return Object(a["v"])(),Object(a["d"])("li",{key:"麵包屑_".concat(t),class:"breadcrumb-item"},[Object(a["h"])(u,{to:e.url,class:"link-success-light"},{default:Object(a["M"])((function(){return[Object(a["g"])(Object(a["D"])(e.title),1)]})),_:2},1032,["to"])])})),128)),Object(a["h"])("li",n,Object(a["D"])(r.breadcrumbData.purpose),1)])])])}var o={name:"Breadcrumb.vue",props:["breadcrumbData"]};o.render=l;t["a"]=o},"44e7":function(e,t,r){var a=r("861d"),s=r("c6b6"),c=r("b622"),n=c("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==s(e))}},"4de4":function(e,t,r){"use strict";var a=r("23e7"),s=r("b727").filter,c=r("1dde"),n=c("filter");a({target:"Array",proto:!0,forced:!n},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,r){var a=r("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5fd6":function(e,t,r){"use strict";r.r(t);r("b0c0");var a=r("7a23"),s={class:"container pageContent user_select_none"},c={class:"py-4"},n=Object(a["h"])("h1",{class:"text-center fw-bold mb-4"},"訂購人資訊",-1),l={class:"container"},o={class:"row px-lg-0 px-xl-5\n            position-relative justify-content-center align-items-center"},i={class:"col-lg-6"},u={class:"table_style w-100 p-3 p-sm-5 mb-sm-5 rounded bg-white shadow-sm"},d=Object(a["h"])("h2",{class:"text-center mb-4 fs-5"}," 購物明細 ",-1),b={class:"table cart_table_style text-center mb-5"},f=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("td",{scope:"col",width:"40%"},"商品資訊"),Object(a["h"])("td",{scope:"col",width:"20%"},"數量"),Object(a["h"])("td",{scope:"col",width:"40%"},"金額")])],-1),h={scope:"row",class:"text-start"},p={class:"fs-5 mb-2 text-center"},m={class:"col-lg-6 mb-5"},O=Object(a["h"])("label",{for:"orderName",class:"form-label mt-3 mb-1"},[Object(a["g"])(" 訂購人姓名"),Object(a["h"])("span",{class:"text-danger fw-bold"},"*")],-1),j=Object(a["h"])("label",{for:"orderTel",class:"form-label mt-3 mb-1"},[Object(a["g"])(" 聯絡電話"),Object(a["h"])("span",{class:"text-danger fw-bold"},"*")],-1),v=Object(a["h"])("label",{for:"orderEmail",class:"form-label mt-3 mb-1"},[Object(a["g"])(" Email"),Object(a["h"])("span",{class:"text-danger fw-bold"},"*")],-1),g=Object(a["h"])("label",{for:"orderDelivery",class:"form-label mt-3 mb-1"},[Object(a["g"])(" 寄送方式"),Object(a["h"])("span",{class:"text-danger fw-bold"},"*")],-1),y=Object(a["h"])("option",{value:"",selected:"",disabled:""},"選擇寄送方式",-1),x=Object(a["h"])("option",{value:"宅配"},"宅配",-1),D=Object(a["h"])("option",{value:"全家超取"},"全家",-1),w=Object(a["h"])("option",{value:"7-11 超取"},"7-11",-1),V=Object(a["h"])("option",{value:"萊爾富超取"},"萊爾富",-1),_=Object(a["h"])("option",{value:"OK 超取"},"OK 超取",-1),S=Object(a["h"])("label",{for:"orderAddress",class:"form-label mt-3 mb-1"},[Object(a["g"])(" 收件地址(超取請填寫門市名稱)"),Object(a["h"])("span",{class:"text-danger fw-bold"},"*")],-1),A=Object(a["h"])("label",{for:"orderPayment",class:"form-label mt-3 mb-1"},[Object(a["g"])(" 付款方式"),Object(a["h"])("span",{class:"text-danger fw-bold"},"*")],-1),k=Object(a["h"])("option",{value:"",selected:"",disabled:""},"選擇付款方式",-1),E=Object(a["h"])("option",{value:"信用卡"},"信用卡",-1),M={key:0,value:"貨到付款"},F=Object(a["h"])("option",{value:"ATM 匯款"},"ATM 匯款",-1),T=Object(a["h"])("label",{for:"orderMsg",class:"form-label mt-3 mb-1"}," 備註 ",-1),U=Object(a["h"])("p",{class:"text-danger text-end fw-bold pt-1"},"* 為必填項目",-1),C={class:"col-12 d-flex justify-content-between mb-2 mb-md-5"},$=Object(a["g"])(" ◁ 返回購物車 ");function q(e,t,r,q,N,P){var B=Object(a["A"])("Loading"),z=Object(a["A"])("Breadcrumb"),I=Object(a["A"])("Progress"),J=Object(a["A"])("Field"),K=Object(a["A"])("ErrorMessage"),L=Object(a["A"])("Form"),R=Object(a["A"])("router-link");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(B,{status:N.loadingStatus},null,8,["status"]),Object(a["h"])("section",s,[Object(a["h"])("section",c,[Object(a["h"])(z,{"breadcrumb-data":N.breadcrumbData},null,8,["breadcrumb-data"]),Object(a["h"])(I,{"progress-value":N.progressNum},null,8,["progress-value"]),n,Object(a["h"])("section",l,[Object(a["h"])("section",o,[Object(a["h"])("div",i,[Object(a["h"])("div",u,[d,Object(a["h"])("table",b,[f,Object(a["h"])("tbody",null,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(N.carts.carts,(function(t){return Object(a["v"])(),Object(a["d"])("tr",{key:t.id},[Object(a["h"])("td",h,Object(a["D"])(t.product.title),1),Object(a["h"])("td",null,Object(a["D"])(t.qty),1),Object(a["h"])("td",null," NT $"+Object(a["D"])(e.$filters.currency(t.final_total)),1)])})),128))])]),Object(a["h"])("p",p," 總金額NT $"+Object(a["D"])(e.$filters.currency(N.carts.final_total)),1)])]),Object(a["h"])("main",m,[Object(a["h"])(L,{class:"px-3",onChange:P.checkUserDatas},{default:Object(a["M"])((function(e){var r=e.errors;return[O,Object(a["h"])(J,{type:"text",name:"姓名",id:"orderName",class:["form-control",{"is-invalid":r["姓名"]}],rules:"required",modelValue:N.userDatas.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return N.userDatas.user.name=e})},null,8,["class","modelValue"]),Object(a["h"])(K,{name:"姓名",class:"invalid-feedback mb-1"}),j,Object(a["h"])(J,{type:"tel",name:"電話",id:"orderTel",class:["form-control",{"is-invalid":r["電話"]}],rules:"required|numeric|min:10",modelValue:N.userDatas.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return N.userDatas.user.tel=e})},null,8,["class","modelValue"]),Object(a["h"])(K,{name:"電話",class:"invalid-feedback mb-1"}),v,Object(a["h"])(J,{type:"email",name:"Email",id:"orderEmail",class:["form-control",{"is-invalid":r["Email"]}],rules:"required|email",modelValue:N.userDatas.user.email,"onUpdate:modelValue":t[3]||(t[3]=function(e){return N.userDatas.user.email=e})},null,8,["class","modelValue"]),Object(a["h"])(K,{name:"Email",class:"invalid-feedback mb-1"}),N.isSend?(Object(a["v"])(),Object(a["d"])(a["a"],{key:0},[g,Object(a["h"])(J,{as:"select",name:"寄送方式",id:"orderDelivery",class:["form-select",{"is-invalid":r["寄送方式"]}],rules:"required",modelValue:N.userDatas.user.delivery,"onUpdate:modelValue":t[4]||(t[4]=function(e){return N.userDatas.user.delivery=e})},{default:Object(a["M"])((function(){return[y,x,D,w,V,_]})),_:2},1032,["class","modelValue"]),Object(a["h"])(K,{name:"寄送方式",class:"invalid-feedback mb-1"})],64)):Object(a["e"])("",!0),S,Object(a["h"])(J,{type:"text",name:"地址",id:"orderAddress",class:["form-control",{"is-invalid":r["地址"]}],rules:"required",modelValue:N.userDatas.user.address,"onUpdate:modelValue":t[5]||(t[5]=function(e){return N.userDatas.user.address=e}),readonly:!N.isSend},null,8,["class","modelValue","readonly"]),Object(a["h"])(K,{name:"地址",class:"invalid-feedback mb-1"}),A,Object(a["h"])(J,{as:"select",name:"付款方式",id:"orderPayment",class:["form-select",{"is-invalid":r["付款方式"]}],rules:"required",modelValue:N.userDatas.user.payment,"onUpdate:modelValue":t[6]||(t[6]=function(e){return N.userDatas.user.payment=e})},{default:Object(a["M"])((function(){return[k,E,N.isFundraising?(Object(a["v"])(),Object(a["d"])("option",M," 貨到付款 ")):Object(a["e"])("",!0),F]})),_:2},1032,["class","modelValue"]),Object(a["h"])(K,{name:"付款方式",class:"invalid-feedback mb-1"}),T,Object(a["h"])(J,{as:"textarea",name:"備註",id:"orderMsg",class:["form-control",{"is-invalid":r["備註"]}],modelValue:N.userDatas.message,"onUpdate:modelValue":t[7]||(t[7]=function(e){return N.userDatas.message=e})},null,8,["class","modelValue"]),U]})),_:1},8,["onChange"])]),Object(a["h"])("div",C,[Object(a["h"])(R,{to:"/cart",class:"btn btn-outline-custom-primary btn_style\n                px-1 px-sm-2 px-md-3 py-1"},{default:Object(a["M"])((function(){return[$]})),_:1}),Object(a["h"])("button",{class:"btn btn_main btn_style\n                px-1 px-sm-2 px-md-3 py-1",disabled:N.btnStatus,onClick:t[8]||(t[8]=function(){return P.postOrder&&P.postOrder.apply(P,arguments)})}," 送出訂單 ▷ ",8,["disabled"])])])])])])],64)}r("99af"),r("4de4"),r("159b"),r("caad"),r("2532");var N=r("4897"),P=r("2fbc"),B=r("0e54"),z={name:"Order",data:function(){return{loadingStatus:!1,btnStatus:!0,progressNum:33,carts:{},userDatas:{user:{}},isFundraising:!0,isSend:!0,isAll:!0,breadcrumbData:{previous:[{title:"線上商城",url:"/products"},{title:"購物車",url:"/cart"}],purpose:"填寫訂單資料"},tempData:[]}},components:{Progress:B["a"],Breadcrumb:P["a"]},methods:{getCarts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.loadingStatus=!0,this.$http.get(t).then((function(t){t.data.success?(e.carts=t.data.data,e.carts.carts.length<1&&e.$router.push("/cart"),e.filterFundraising(),e.loadingStatus=!1):(Object(N["c"])("資料取得失敗","error"),e.loadingStatus=!1)})).catch((function(){Object(N["c"])("資料取得失敗","error"),e.loadingStatus=!1}))},filterFundraising:function(){var e=this;this.tempData=this.carts.carts.filter((function(e){return"講座"===e.product.category||"募款專案"===e.product.category})),this.carts.carts.forEach((function(t){e.tempData.includes(t)&&(e.isFundraising=!1,e.isSend=!0)})),this.tempData.length===this.carts.carts.length?(this.isFundraising=!1,this.isSend=!1,this.userDatas.user.delivery="單純參加講座或捐款無需填寫",this.userDatas.user.address="單純參加講座或捐款無需填寫"):(this.isFundraising=!0,this.isSend=!0)},checkUserDatas:function(){var e=this.userDatas.user,t=e.name,r=e.email,a=e.tel,s=e.address;this.btnStatus=""===t||""===r||""===a||""===s},postOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/order");this.loadingStatus=!0,this.$http.post(t,{data:this.userDatas}).then((function(t){t.data.success?e.$router.push("/order/".concat(t.data.orderId)):(Object(N["c"])(t.data.message,"error"),e.loadingStatus=!1)})).catch((function(){Object(N["c"])("操作失敗","error"),e.loadingStatus=!1}))}},mounted:function(){this.getCarts()}};z.render=q;t["default"]=z},"65f0":function(e,t,r){var a=r("861d"),s=r("e8b5"),c=r("b622"),n=c("species");e.exports=function(e,t){var r;return s(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!s(r.prototype)?a(r)&&(r=r[n],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},8418:function(e,t,r){"use strict";var a=r("c04e"),s=r("9bf2"),c=r("5c6c");e.exports=function(e,t,r){var n=a(t);n in e?s.f(e,n,c(0,r)):e[n]=r}},"99af":function(e,t,r){"use strict";var a=r("23e7"),s=r("d039"),c=r("e8b5"),n=r("861d"),l=r("7b0b"),o=r("50c4"),i=r("8418"),u=r("65f0"),d=r("1dde"),b=r("b622"),f=r("2d00"),h=b("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",O=f>=51||!s((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),j=d("concat"),v=function(e){if(!n(e))return!1;var t=e[h];return void 0!==t?!!t:c(e)},g=!O||!j;a({target:"Array",proto:!0,forced:g},{concat:function(e){var t,r,a,s,c,n=l(this),d=u(n,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(c=-1===t?n:arguments[t],v(c)){if(s=o(c.length),b+s>p)throw TypeError(m);for(r=0;r<s;r++,b++)r in c&&i(d,b,c[r])}else{if(b>=p)throw TypeError(m);i(d,b++,c)}return d.length=b,d}})},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},ab13:function(e,t,r){var a=r("b622"),s=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[s]=!1,"/./"[e](t)}catch(a){}}return!1}},b0c0:function(e,t,r){var a=r("83ab"),s=r("9bf2").f,c=Function.prototype,n=c.toString,l=/^\s*function ([^ (]*)/,o="name";a&&!(o in c)&&s(c,o,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},b727:function(e,t,r){var a=r("0366"),s=r("44ad"),c=r("7b0b"),n=r("50c4"),l=r("65f0"),o=[].push,i=function(e){var t=1==e,r=2==e,i=3==e,u=4==e,d=6==e,b=7==e,f=5==e||d;return function(h,p,m,O){for(var j,v,g=c(h),y=s(g),x=a(p,m,3),D=n(y.length),w=0,V=O||l,_=t?V(h,D):r||b?V(h,0):void 0;D>w;w++)if((f||w in y)&&(j=y[w],v=x(j,w,g),e))if(t)_[w]=v;else if(v)switch(e){case 3:return!0;case 5:return j;case 6:return w;case 2:o.call(_,j)}else switch(e){case 4:return!1;case 7:o.call(_,j)}return d?-1:i||u?u:_}};e.exports={forEach:i(0),map:i(1),filter:i(2),some:i(3),every:i(4),find:i(5),findIndex:i(6),filterOut:i(7)}},caad:function(e,t,r){"use strict";var a=r("23e7"),s=r("4d64").includes,c=r("44d2");a({target:"Array",proto:!0},{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-341f4a2e.b8508286.js.map
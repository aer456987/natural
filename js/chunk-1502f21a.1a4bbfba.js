(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1502f21a"],{"0e54":function(e,t,c){"use strict";var r=c("7a23"),a={class:"px-lg-5 py-2 py-md-5"},s={class:"position-relative m-5"},o={class:"progress"},l=Object(r["createVNode"])("i",{class:"bi bi-cart4"},null,-1),n=Object(r["createVNode"])("i",{class:"bi bi-card-list"},null,-1),b=Object(r["createVNode"])("i",{class:"bi bi-card-checklist"},null,-1),d=Object(r["createVNode"])("i",{class:"bi bi-credit-card"},null,-1);function i(e,t,c,i,u,p){return Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[Object(r["createVNode"])("div",s,[Object(r["createVNode"])("div",o,[Object(r["createVNode"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:"width: ".concat(c.progressValue,"%"),"aria-valuenow":c.progressValue,"aria-valuemin":"0","aria-valuemax":"100"},null,12,["aria-valuenow"])]),Object(r["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-0 translate-middle",{"custom__progress--active":0===c.progressValue,"bg-primary":c.progressValue>1}]},[l],2),Object(r["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-33 translate-middle",{"custom__progress--active":33===c.progressValue,"bg-primary":c.progressValue>33}]},[n],2),Object(r["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-66 translate-middle",{"custom__progress--active":66===c.progressValue,"bg-primary":c.progressValue>66}]},[b],2),Object(r["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-100 translate-middle",{"custom__progress--active":100===c.progressValue}]},[d],2)])])}var u={props:["progressValue"]},p=c("d959"),m=c.n(p);const j=m()(u,[["render",i]]);t["a"]=j},"2fbc":function(e,t,c){"use strict";var r=c("7a23"),a={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},s={class:"breadcrumb m-0"},o={class:"breadcrumb-item active","aria-current":"page"};function l(e,t,c,l,n,b){var d=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("nav",a,[Object(r["createVNode"])("ul",s,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.breadcrumbData.previous,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:"麵包屑_".concat(t),class:"breadcrumb-item"},[Object(r["createVNode"])(d,{to:e.url,class:"link-success-light"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title),1)]})),_:2},1032,["to"])])})),128)),Object(r["createVNode"])("li",o,Object(r["toDisplayString"])(c.breadcrumbData.purpose),1)])])])}var n={props:["breadcrumbData"]},b=c("d959"),d=c.n(b);const i=d()(n,[["render",l]]);t["a"]=i},a5d5:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),a={class:"container page-content user-select-none"},s={class:"py-4"},o=Object(r["createVNode"])("h2",{class:"h1 pb-5 text-center fw-bold"}," 付款成功 ",-1),l={class:"container"},n={class:"row px-md-1 px-lg-5 justify-content-center"},b={class:"col-md-12 col-lg-9"},d={class:"px-3 px-md-5 py-5 mb-5 rounded\n              shadow text-center bg-white custom-style-text-2"},i=Object(r["createVNode"])("i",{class:"bi bi-emoji-smile display-3 text-warning"},null,-1),u=Object(r["createVNode"])("h3",{class:"h4 fw-bold mt-2 mb-5"},"感謝您的訂購！",-1),p={class:"px-xl-5 text-start"},m=Object(r["createVNode"])("li",null,[Object(r["createVNode"])("p",{class:"d-inline bg-gray-200 p-1 rounded-1"}," 訂單如含有「有機食品」、「環保商品」： ")],-1),j={class:"mt-2 mb-4"},O=Object(r["createVNode"])("p",{class:"m-0"}," 商品將在近期安排出貨，請留意簡訊通知或配送人員的電話。 ",-1),V={class:"m-0"},g=Object(r["createTextVNode"])(" 本平台之商品預設為電子發票，如需紙本發票可至 "),N=Object(r["createTextVNode"])(" 修改發票設定。 "),v=Object(r["createVNode"])("li",null,[Object(r["createVNode"])("p",{class:"d-inline bg-gray-200 p-1 rounded-1"}," 訂單如含有「公益活動」、「講座」： "),Object(r["createVNode"])("p",{class:"mt-2 mb-4"}," 我們將發送付款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。 ")],-1),f=Object(r["createVNode"])("li",null,[Object(r["createVNode"])("p",{class:"d-inline bg-gray-200 p-1 rounded-1"}," 訂單如含有「捐款專案」： "),Object(r["createVNode"])("p",{class:"mt-2 mb-4"}," 我們將發送付款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。 ")],-1),y=Object(r["createTextVNode"])(" 返回線上商城 ");function k(e,t,c,k,x,_){var w=Object(r["resolveComponent"])("Breadcrumb"),h=Object(r["resolveComponent"])("CartProgress"),B=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[Object(r["createVNode"])("div",s,[Object(r["createVNode"])(w,{"breadcrumb-data":x.breadcrumbData},null,8,["breadcrumb-data"]),Object(r["createVNode"])(h,{"progress-value":x.progressNum},null,8,["progress-value"]),o,Object(r["createVNode"])("main",l,[Object(r["createVNode"])("div",n,[Object(r["createVNode"])("div",b,[Object(r["createVNode"])("section",d,[i,u,Object(r["createVNode"])("ul",p,[m,Object(r["createVNode"])("li",j,[O,Object(r["createVNode"])("p",V,[g,Object(r["createVNode"])("a",{href:"#",class:"text-danger",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return _.backTop()}),["prevent"]))}," 會員中心 "),N])]),v,f]),Object(r["createVNode"])(B,{to:"/products",class:"btn btn-outline-custom-primary px-3 py-1 my-2"},{default:Object(r["withCtx"])((function(){return[y]})),_:1})])])])])])])}var x=c("4897"),_=c("2fbc"),w=c("0e54"),h={data:function(){return{progressNum:100,breadcrumbData:{previous:[{title:"線上商城",url:"/products"},{title:"購物車",url:"/cart"}],purpose:"付款完成"}}},components:{CartProgress:w["a"],Breadcrumb:_["a"]},methods:{backTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},created:function(){this.backTop(),Object(x["f"])("已完成付款","success",!0,"top-end")}},B=c("d959"),C=c.n(B);const T=C()(h,[["render",k]]);t["default"]=T}}]);
//# sourceMappingURL=chunk-1502f21a.1a4bbfba.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1502f21a"],{"0e54":function(e,t,r){"use strict";var c=r("7a23"),a={class:"px-lg-5 py-2 py-md-5"},s={class:"position-relative m-5"},o={class:"progress"},l=Object(c["createVNode"])("i",{class:"bi bi-cart4"},null,-1),b=Object(c["createVNode"])("i",{class:"bi bi-card-list"},null,-1),n=Object(c["createVNode"])("i",{class:"bi bi-card-checklist"},null,-1),d=Object(c["createVNode"])("i",{class:"bi bi-credit-card"},null,-1);function i(e,t,r,i,u,p){return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",o,[Object(c["createVNode"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:"width: ".concat(r.progressValue,"%"),"aria-valuenow":r.progressValue,"aria-valuemin":"0","aria-valuemax":"100"},null,12,["aria-valuenow"])]),Object(c["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-0 translate-middle",{"custom__progress--active":0===r.progressValue,"bg-primary":r.progressValue>1}]},[l],2),Object(c["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-33 translate-middle",{"custom__progress--active":33===r.progressValue,"bg-primary":r.progressValue>33}]},[b],2),Object(c["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-66 translate-middle",{"custom__progress--active":66===r.progressValue,"bg-primary":r.progressValue>66}]},[n],2),Object(c["createVNode"])("div",{class:["custom__progress position-absolute top-0 start-100 translate-middle",{"custom__progress--active":100===r.progressValue}]},[d],2)])])}var u={name:"CartProgress",props:["progressValue"]};u.render=i;t["a"]=u},"2fbc":function(e,t,r){"use strict";var c=r("7a23"),a={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},s={class:"breadcrumb m-0"},o={class:"breadcrumb-item active","aria-current":"page"};function l(e,t,r,l,b,n){var d=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])("nav",a,[Object(c["createVNode"])("ul",s,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.breadcrumbData.previous,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:"麵包屑_".concat(t),class:"breadcrumb-item"},[Object(c["createVNode"])(d,{to:e.url,class:"link-success-light"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.title),1)]})),_:2},1032,["to"])])})),128)),Object(c["createVNode"])("li",o,Object(c["toDisplayString"])(r.breadcrumbData.purpose),1)])])])}var b={name:"Breadcrumb.vue",props:["breadcrumbData"]};b.render=l;t["a"]=b},a5d5:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),a={class:"container page-content userselect-none"},s={class:"py-4"},o=Object(c["createVNode"])("h2",{class:"h1 pb-5 text-center fw-bold"}," 付款成功 ",-1),l={class:"container"},b={class:"row px-md-1 px-lg-5 justify-content-center"},n={class:"col-md-12 col-lg-9"},d={class:"px-3 px-md-5 py-5 mb-5 rounded\n              shadow text-center bg-white custom-style-text-2"},i=Object(c["createVNode"])("i",{class:"bi bi-emoji-smile display-3 text-warning"},null,-1),u=Object(c["createVNode"])("h3",{class:"h4 fw-bold mt-2 mb-5"},"感謝您的訂購！",-1),p={class:"px-xl-5 text-start"},m=Object(c["createVNode"])("li",null,[Object(c["createVNode"])("p",{class:"d-inline bg-gray-200 p-1 rounded-1"}," 訂單如含有「有機食品」、「環保商品」： ")],-1),j={class:"mt-2 mb-4"},O=Object(c["createVNode"])("p",{class:"m-0"}," 商品將在近期安排出貨，請留意簡訊通知或配送人員的電話。 ",-1),V={class:"m-0"},g=Object(c["createTextVNode"])(" 本平台之商品預設為電子發票，如需紙本發票可至 "),N=Object(c["createTextVNode"])(" 修改發票設定。 "),v=Object(c["createVNode"])("li",null,[Object(c["createVNode"])("p",{class:"d-inline bg-gray-200 p-1 rounded-1"}," 訂單如含有「公益活動」、「講座」： "),Object(c["createVNode"])("p",{class:"mt-2 mb-4"}," 我們將發送付款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。 ")],-1),f=Object(c["createVNode"])("li",null,[Object(c["createVNode"])("p",{class:"d-inline bg-gray-200 p-1 rounded-1"}," 訂單如含有「捐款專案」： "),Object(c["createVNode"])("p",{class:"mt-2 mb-4"}," 我們將發送付款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。 ")],-1),y=Object(c["createTextVNode"])(" 返回線上商城 ");function k(e,t,r,k,x,_){var w=Object(c["resolveComponent"])("Breadcrumb"),h=Object(c["resolveComponent"])("CartProgress"),B=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[Object(c["createVNode"])("div",s,[Object(c["createVNode"])(w,{"breadcrumb-data":x.breadcrumbData},null,8,["breadcrumb-data"]),Object(c["createVNode"])(h,{"progress-value":x.progressNum},null,8,["progress-value"]),o,Object(c["createVNode"])("main",l,[Object(c["createVNode"])("div",b,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])("section",d,[i,u,Object(c["createVNode"])("ul",p,[m,Object(c["createVNode"])("li",j,[O,Object(c["createVNode"])("p",V,[g,Object(c["createVNode"])("a",{href:"#",class:"text-danger",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return _.backTop()}),["prevent"]))}," 會員中心 "),N])]),v,f]),Object(c["createVNode"])(B,{to:"/products",class:"btn btn-outline-custom-primary px-3 py-1 my-2"},{default:Object(c["withCtx"])((function(){return[y]})),_:1})])])])])])])}var x=r("4897"),_=r("2fbc"),w=r("0e54"),h={name:"OrderPaid",data:function(){return{progressNum:100,breadcrumbData:{previous:[{title:"線上商城",url:"/products"},{title:"購物車",url:"/cart"}],purpose:"付款完成"}}},components:{CartProgress:w["a"],Breadcrumb:_["a"]},methods:{backTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},created:function(){this.backTop(),Object(x["f"])("已完成付款","success",!0,"top-end")}};h.render=k;t["default"]=h}}]);
//# sourceMappingURL=chunk-1502f21a.fc234eb3.js.map
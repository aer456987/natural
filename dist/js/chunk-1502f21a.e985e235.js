(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1502f21a"],{"0e54":function(e,t,r){"use strict";var s=r("7a23"),a={class:"px-lg-5 py-2 py-md-5"},c={class:"position-relative m-5"},l={class:"progress"},b=Object(s["h"])("i",{class:"bi bi-cart4"},null,-1),o=Object(s["h"])("i",{class:"bi bi-card-list"},null,-1),i=Object(s["h"])("i",{class:"bi bi-card-checklist"},null,-1),n=Object(s["h"])("i",{class:"bi bi-credit-card"},null,-1);function u(e,t,r,u,p,d){return Object(s["v"])(),Object(s["d"])("div",a,[Object(s["h"])("div",c,[Object(s["h"])("div",l,[Object(s["h"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:"width: ".concat(r.progressValue,"%"),"aria-valuenow":r.progressValue,"aria-valuemin":"0","aria-valuemax":"100"},null,12,["aria-valuenow"])]),Object(s["h"])("div",{class:["progress_style position-absolute top-0 start-0 translate-middle",{progress_active:0===r.progressValue,"bg-primary":r.progressValue>1}]},[b],2),Object(s["h"])("div",{class:["progress_style position-absolute top-0 start-33 translate-middle",{progress_active:33===r.progressValue,"bg-primary":r.progressValue>33}]},[o],2),Object(s["h"])("div",{class:["progress_style position-absolute top-0 start-66 translate-middle",{progress_active:66===r.progressValue,"bg-primary":r.progressValue>66}]},[i],2),Object(s["h"])("div",{class:["progress_style position-absolute top-0 start-100 translate-middle",{progress_active:100===r.progressValue}]},[n],2)])])}var p={name:"CartProgress",props:["progressValue"]};p.render=u;t["a"]=p},"2fbc":function(e,t,r){"use strict";var s=r("7a23"),a={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},c={class:"breadcrumb m-0"},l={class:"breadcrumb-item active","aria-current":"page"};function b(e,t,r,b,o,i){var n=Object(s["A"])("router-link");return Object(s["v"])(),Object(s["d"])("div",null,[Object(s["h"])("nav",a,[Object(s["h"])("ol",c,[(Object(s["v"])(!0),Object(s["d"])(s["a"],null,Object(s["z"])(r.breadcrumbData.previous,(function(e,t){return Object(s["v"])(),Object(s["d"])("li",{key:"麵包屑_".concat(t),class:"breadcrumb-item"},[Object(s["h"])(n,{to:e.url,class:"link-secondary"},{default:Object(s["M"])((function(){return[Object(s["g"])(Object(s["D"])(e.title),1)]})),_:2},1032,["to"])])})),128)),Object(s["h"])("li",l,Object(s["D"])(r.breadcrumbData.purpose),1)])])])}var o={name:"Breadcrumb.vue",props:["breadcrumbData"]};o.render=b;t["a"]=o},a5d5:function(e,t,r){"use strict";r.r(t);var s=r("7a23"),a={class:"container pageContent"},c={class:"py-4"},l=Object(s["h"])("h1",{class:"pb-5 text-center fw-bold"},"付款成功",-1),b={class:"container"},o={class:"row px-md-1 px-lg-5 justify-content-center"},i={class:"col-md-12 col-lg-9"},n={class:"px-3 px-md-5 py-5 mb-5 rounded\n              shadow text-center bg-white textStyle_rwd_2"},u=Object(s["h"])("h5",{class:"fw-bold mt-2 mb-4"},"感謝您的訂購！",-1),p=Object(s["h"])("p",null,"您訂購的商品將在近期安排出貨，請留意簡訊通知或配送人員的電話。",-1),d=Object(s["h"])("p",null," 如果您選擇的是捐款專案，我們將發送捐款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。 ",-1),j=Object(s["h"])("p",null,[Object(s["g"])(" 如需紙本收據或發票，可至"),Object(s["h"])("span",{class:"text-danger"},"會員中心"),Object(s["g"])("修改發票設定。 ")],-1),O=Object(s["g"])(" 返回線上商城 ");function m(e,t,r,m,g,v){var h=Object(s["A"])("Breadcrumb"),y=Object(s["A"])("Progress"),f=Object(s["A"])("router-link");return Object(s["v"])(),Object(s["d"])("section",a,[Object(s["h"])("section",c,[Object(s["h"])(h,{"breadcrumb-data":g.breadcrumbData},null,8,["breadcrumb-data"]),Object(s["h"])(y,{"progress-value":g.progressNum},null,8,["progress-value"]),l,Object(s["h"])("section",b,[Object(s["h"])("section",o,[Object(s["h"])("section",i,[Object(s["h"])("main",n,[u,p,d,j,Object(s["h"])(f,{to:"/products",class:"btn btn-outline-custom-primary px-3 py-1 my-2"},{default:Object(s["M"])((function(){return[O]})),_:1})])])])])])])}var g=r("4897"),v=r("2fbc"),h=r("0e54"),y={name:"OrderPaid",data:function(){return{progressNum:100,breadcrumbData:{previous:[{title:"線上商城",url:"/products"},{title:"購物車",url:"/cart"}],purpose:"付款完成"}}},components:{Progress:h["a"],Breadcrumb:v["a"]},created:function(){Object(g["c"])("已完成付款","success")}};y.render=m;t["default"]=y}}]);
//# sourceMappingURL=chunk-1502f21a.e985e235.js.map
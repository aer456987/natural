(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f0327a0"],{"0e54":function(e,s,t){"use strict";var r=t("7a23"),a={class:"px-lg-5 py-5"},c={class:"position-relative m-5"},l={class:"progress"},o=Object(r["g"])("i",{class:"bi bi-cart4"},null,-1),i=Object(r["g"])("i",{class:"bi bi-card-list"},null,-1),n=Object(r["g"])("i",{class:"bi bi-card-checklist"},null,-1),b=Object(r["g"])("i",{class:"bi bi-credit-card"},null,-1);function g(e,s,t,g,u,p){return Object(r["s"])(),Object(r["d"])("div",a,[Object(r["g"])("div",c,[Object(r["g"])("div",l,[Object(r["g"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:"width: ".concat(t.progressValue,"%"),"aria-valuenow":t.progressValue,"aria-valuemin":"0","aria-valuemax":"100"},null,12,["aria-valuenow"])]),Object(r["g"])("div",{class:["progress_style position-absolute top-0 start-0 translate-middle",{progress_active:0===t.progressValue,"bg-primary":t.progressValue>1}]},[o],2),Object(r["g"])("div",{class:["progress_style position-absolute top-0 start-33 translate-middle",{progress_active:33===t.progressValue,"bg-primary":t.progressValue>33}]},[i],2),Object(r["g"])("div",{class:["progress_style position-absolute top-0 start-66 translate-middle",{progress_active:66===t.progressValue,"bg-primary":t.progressValue>66}]},[n],2),Object(r["g"])("div",{class:["progress_style position-absolute top-0 start-100 translate-middle",{progress_active:100===t.progressValue}]},[b],2)])])}var u={name:"CartProgress",props:["progressValue"]};u.render=g;s["a"]=u},6793:function(e,s,t){"use strict";t.r(s);var r=t("7a23"),a={class:"container pageContent"},c={class:"py-4"},l={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},o={class:"breadcrumb m-0"},i={class:"breadcrumb-item"},n=Object(r["f"])("線上商城"),b={class:"breadcrumb-item"},g=Object(r["f"])("購物車"),u=Object(r["g"])("li",{class:"breadcrumb-item active","aria-current":"page"},"訂單確認",-1),p=Object(r["g"])("h1",{class:"pb-5 text-center fw-bold"},"付款成功",-1),d={class:"container"},j={class:"row px-md-1 px-lg-5 justify-content-center"},O={class:"col-md-12 col-lg-9"},m={class:"px-5 py-5 mb-5 rounded\n              shadow text-center bg-white"},v=Object(r["g"])("h5",{class:"fw-bold mt-2 mb-4"},"感謝您的訂購！",-1),f=Object(r["g"])("p",null,"您訂購的商品將在近期安排出貨，請留意簡訊通知或配送人員的電話。",-1),y=Object(r["g"])("p",null," 如果您選擇的是捐款專案，我們將發送捐款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。 ",-1),w=Object(r["g"])("p",null,[Object(r["f"])(" 如需紙本收據或發票，可至"),Object(r["g"])("span",{class:"text-danger"},"會員中心"),Object(r["f"])("修改發票設定。 ")],-1),x=Object(r["f"])("返回線上商城");function _(e,s,t,_,V,h){var k=Object(r["x"])("router-link"),P=Object(r["x"])("Progress");return Object(r["s"])(),Object(r["d"])("section",a,[Object(r["g"])("section",c,[Object(r["g"])("nav",l,[Object(r["g"])("ol",o,[Object(r["g"])("li",i,[Object(r["g"])(k,{to:"/products",class:"link-secondary"},{default:Object(r["I"])((function(){return[n]})),_:1})]),Object(r["g"])("li",b,[Object(r["g"])(k,{to:"/square/cart",class:"link-secondary"},{default:Object(r["I"])((function(){return[g]})),_:1})]),u])]),Object(r["g"])(P,{"progress-value":V.progressNum},null,8,["progress-value"]),p,Object(r["g"])("section",d,[Object(r["g"])("section",j,[Object(r["g"])("section",O,[Object(r["g"])("main",m,[v,f,y,w,Object(r["g"])(k,{to:"/products",class:"btn btn-outline-secondary px-3 py-1 my-2"},{default:Object(r["I"])((function(){return[x]})),_:1})])])])])])])}var V=t("4897"),h=t("0e54"),k={name:"OrderPaid",data:function(){return{progressNum:100}},components:{Progress:h["a"]},created:function(){Object(V["c"])("已完成付款","success")}};k.render=_;s["default"]=k}}]);
//# sourceMappingURL=chunk-8f0327a0.4788fac1.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-599b3e78"],{6793:function(e,t,s){"use strict";s.r(t);var r=s("7a23"),c={class:"container pageContent"},a={class:"py-4"},n={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},i={class:"breadcrumb m-0"},l={class:"breadcrumb-item"},o=Object(r["g"])("線上商城"),b={class:"breadcrumb-item"},d=Object(r["g"])("購物車"),p=Object(r["h"])("li",{class:"breadcrumb-item active","aria-current":"page"}," 訂單確認 ",-1),u=Object(r["h"])("h1",{class:"pb-5 text-center fw-bold"},"付款成功",-1),O={class:"container"},j={class:"row px-md-1 px-lg-5 justify-content-center"},g={class:"col-md-12 col-lg-9"},h={class:"px-5 py-5 mb-5 rounded\n              shadow text-center bg-white"},m=Object(r["h"])("h5",{class:"fw-bold mt-2 mb-4"},"感謝您的訂購！",-1),v=Object(r["h"])("p",null," 您訂購的商品將在近期安排出貨，請留意簡訊通知或配送人員的電話。 ",-1),y=Object(r["h"])("p",null," 如果您選擇的是捐款專案，我們將發送捐款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。 ",-1),f=Object(r["h"])("p",null,[Object(r["g"])(" 如需紙本收據或發票，可至"),Object(r["h"])("span",{class:"text-danger"},"會員中心"),Object(r["g"])("修改發票設定。 "),Object(r["h"])("br")],-1),w=Object(r["g"])(" 返回線上商城 ");function _(e,t,s,_,x,k){var I=Object(r["y"])("router-link"),P=Object(r["y"])("Progress");return Object(r["t"])(),Object(r["d"])("section",c,[Object(r["h"])("main",a,[Object(r["h"])("nav",n,[Object(r["h"])("ol",i,[Object(r["h"])("li",l,[Object(r["h"])(I,{to:"/products",class:"link-secondary"},{default:Object(r["I"])((function(){return[o]})),_:1})]),Object(r["h"])("li",b,[Object(r["h"])(I,{to:"/square/cart",class:"link-secondary"},{default:Object(r["I"])((function(){return[d]})),_:1})]),p])]),Object(r["h"])(P,{progress:x.progress},null,8,["progress"]),u,Object(r["h"])("section",O,[Object(r["h"])("div",j,[Object(r["h"])("section",g,[Object(r["h"])("div",h,[m,v,y,f,Object(r["h"])(I,{to:"/products",class:"btn btn-outline-secondary px-3 py-1 my-2"},{default:Object(r["I"])((function(){return[w]})),_:1})])])])])])])}var x=s("ad18"),k=s("1940"),I=s.n(k),P={name:"OrderPaid",data:function(){return{progress:100}},components:{Progress:x["a"]},methods:{swalFn:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,r=arguments.length>3?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={title:e,text:r,icon:t,button:c,timer:s,closeOnClickOutside:!1};I()(a)}},created:function(){this.swalFn("已完成付款","success")}};P.render=_;t["default"]=P},ad18:function(e,t,s){"use strict";var r=s("7a23"),c={class:"px-lg-5 py-5"},a={class:"position-relative m-5"},n={class:"progress"},i=Object(r["h"])("i",{class:"bi bi-cart4"},null,-1),l=Object(r["h"])("i",{class:"bi bi-card-list"},null,-1),o=Object(r["h"])("i",{class:"bi bi-card-checklist"},null,-1),b=Object(r["h"])("i",{class:"bi bi-credit-card"},null,-1);function d(e,t,s,d,p,u){return Object(r["t"])(),Object(r["d"])("div",c,[Object(r["h"])("div",a,[Object(r["h"])("div",n,[Object(r["h"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:"width: ".concat(s.progress,"%"),"aria-valuenow":s.progress,"aria-valuemin":"0","aria-valuemax":"100"},null,12,["aria-valuenow"])]),Object(r["h"])("div",{class:["\n          position-absolute\n          top-0\n          start-0\n          translate-middle\n          progress_style\n        ",{progress_active:0===s.progress,"bg-primary":s.progress>1}]},[i],2),Object(r["h"])("div",{class:["\n          position-absolute\n          top-0\n          start-33\n          translate-middle\n          progress_style\n        ",{progress_active:33===s.progress,"bg-primary":s.progress>33}]},[l],2),Object(r["h"])("div",{class:["\n          position-absolute\n          top-0\n          start-66\n          translate-middle\n          progress_style\n        ",{progress_active:66===s.progress,"bg-primary":s.progress>66}]},[o],2),Object(r["h"])("div",{class:["\n          position-absolute\n          top-0\n          start-100\n          translate-middle\n          progress_style\n        ",{progress_active:100===s.progress}]},[b],2)])])}var p={props:["progress"]};p.render=d;t["a"]=p}}]);
//# sourceMappingURL=chunk-599b3e78.b364d7e3.js.map
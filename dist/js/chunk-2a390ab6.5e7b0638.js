(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a390ab6"],{"0a6e":function(t,e,o){"use strict";o.r(e);var c=o("7a23");function n(t,e,o,n,a,s){var r=Object(c["A"])("DashboarNavbar"),l=Object(c["A"])("router-view"),i=Object(c["A"])("Footer");return Object(c["v"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(r),Object(c["h"])(l),Object(c["h"])(i,{bgColor:"bg-brown",textColor:"text-dark",moreMsg:!1})],64)}o("ac1f"),o("5319");var a=o("4897"),s={class:"navbar navbar-expand-lg navbar-dark bg-brown px-2 shadow-sm"},r={class:"container-fluid"},l=Object(c["g"])(" Natural "),i=Object(c["h"])("button",{type:"button",class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1),b={id:"navbarToggler",class:"collapse navbar-collapse flex justify-content-end"},u={class:"navbar-nav fs-5 text-center"},h={class:"nav-item"},d=Object(c["g"])(" 優惠券管理 "),j={class:"nav-item"},O=Object(c["g"])(" 商品管理 "),g={class:"nav-item"},f=Object(c["g"])(" 訂單管理 "),p={class:"nav-item"};function v(t,e,o,n,a,v){var m=Object(c["A"])("Font-awesome-icon"),k=Object(c["A"])("router-link");return Object(c["v"])(),Object(c["d"])("div",null,[Object(c["h"])("nav",s,[Object(c["h"])("div",r,[Object(c["h"])(k,{to:"/home",class:"nav-link logo_brown h3 mb-0 p-0"},{default:Object(c["M"])((function(){return[Object(c["h"])(m,{icon:"crow",class:"d-inline-block align-text-top"}),l]})),_:1}),i,Object(c["h"])("div",b,[Object(c["h"])("ul",u,[Object(c["h"])("li",h,[Object(c["h"])(k,{to:"/admin/coupon",class:"nav-link"},{default:Object(c["M"])((function(){return[d]})),_:1})]),Object(c["h"])("li",j,[Object(c["h"])(k,{to:"/admin/dashboardProducts",class:"nav-link"},{default:Object(c["M"])((function(){return[O]})),_:1})]),Object(c["h"])("li",g,[Object(c["h"])(k,{to:"/admin/dashboardOrders",class:"nav-link"},{default:Object(c["M"])((function(){return[f]})),_:1})]),Object(c["h"])("li",p,[Object(c["h"])("button",{type:"buttom",class:"nav-link btn fs-5 border-0 shadow-none",onClick:e[1]||(e[1]=function(){return v.logout&&v.logout.apply(v,arguments)})}," 登出 ")])])])])])])}var m={name:"DashboarNavbar",methods:{logout:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/logout");Object(a["c"])("正在登出","info"),this.$http.post(e).then((function(e){e.data.success?(document.cookie="hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;",t.$router.push("/login")):console.di("(錯誤-後台)登出",e)})).catch((function(t){console.log("(失敗-後台)登出"),console.dir(t)}))}}};m.render=v;var k=m,x=o("fd2d"),T={name:"Dashboard",data:function(){return{loginStatus:!1}},components:{Footer:x["a"],DashboarNavbar:k},methods:{checkLogin:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/user/check");this.$http.post(e).then((function(e){e.data.success?t.loginStatus=!0:(t.loginStatus=!1,document.cookie="hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;",Object(a["c"])(e.data.message,"warning",3e3,"即將於 3 秒後引導至登入畫面"),setTimeout((function(){t.$router.push("/login")}),3e3))})).catch((function(e){console.dir("(失敗-後台)帳號認證",e),document.cookie="hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;",t.$router.push("/login")}))},logout:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/logout");Object(a["c"])("正在登出","info"),this.$http.post(e).then((function(e){e.data.success?(document.cookie="hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;",t.$router.push("/login")):console.di("(錯誤-後台)登出",e)})).catch((function(t){console.log("(失敗-後台)登出"),console.dir(t)}))}},mounted:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.checkLogin()}};o("f14a");T.render=n;e["default"]=T},"937e":function(t,e,o){},f14a:function(t,e,o){"use strict";o("937e")},fd2d:function(t,e,o){"use strict";var c=o("7a23"),n={key:0,class:"row align-items-center"},a={class:"nav-item mb-3"},s={class:"d-flex justify-content-center fs-5 list-unstyled m-0"},r=Object(c["g"])(" | "),l={class:"scale"},i=Object(c["g"])(" 首頁 "),b=Object(c["g"])(" | "),u={class:"scale"},h=Object(c["g"])(" 關於我們 "),d=Object(c["g"])(" | "),j={class:"scale"},O=Object(c["g"])(" 線上商城 "),g=Object(c["g"])(" | "),f={class:"scale"},p=Object(c["g"])(" 常見問題 "),v=Object(c["g"])(" | "),m=Object(c["g"])(" 住址：台北市信義區林口街38巷109號6樓 "),k=Object(c["h"])("br",null,null,-1),x=Object(c["g"])(" 客服電話：(02)2308264 / (02)8650610 "),T=Object(c["h"])("br",null,null,-1),w=Object(c["g"])(" 服務時間：09:00 ~ 13:00 / 15:00 ~ 19:00 "),_=Object(c["h"])("br",null,null,-1),C=Object(c["h"])("i",{class:"fab fa-github-square"},null,-1);function y(t,e,o,y,M,$){var A=Object(c["A"])("router-link"),D=Object(c["A"])("Font-awesome-icon");return Object(c["v"])(),Object(c["d"])("footer",{class:["p-3 text-center",M.colors.backgroundColor]},[o.moreMsg?(Object(c["v"])(),Object(c["d"])("div",n,[Object(c["h"])("nav",a,[Object(c["h"])("ul",s,[r,Object(c["h"])("li",l,[Object(c["h"])(A,{to:"/home",class:"nav-link fs-6 px-2 text-secondary"},{default:Object(c["M"])((function(){return[i]})),_:1})]),b,Object(c["h"])("li",u,[Object(c["h"])(A,{to:"/about",class:"nav-link fs-6 px-2 text-secondary"},{default:Object(c["M"])((function(){return[h]})),_:1})]),d,Object(c["h"])("li",j,[Object(c["h"])(A,{to:"/products",class:"nav-link fs-6 px-2 text-secondary"},{default:Object(c["M"])((function(){return[O]})),_:1})]),g,Object(c["h"])("li",f,[Object(c["h"])(A,{to:"/QAndA",class:"nav-link fs-6 px-2 text-secondary"},{default:Object(c["M"])((function(){return[p]})),_:1})]),v])]),Object(c["h"])("p",{class:["mb-3",M.colors.color]},[m,k,x,T,w,_],2)])):Object(c["e"])("",!0),Object(c["h"])("span",{class:["d-block fs-4 mb-1",M.colors.color]},[Object(c["h"])(D,{icon:["fab","facebook-square"],class:"mx-1 pointer_no_hover scale",title:"facabook 粉絲團"}),Object(c["h"])(D,{icon:["fab","instagram-square"],class:"mx-1 pointer_no_hover scale",title:"Instagram"}),Object(c["h"])(D,{icon:["fab","line"],class:"mx-1 pointer_no_hover scale",title:"@line 官方"}),C,Object(c["h"])(D,{icon:["fab","github-square"],class:"mx-1 pointer_no_hover scale",title:"github"})],2),Object(c["h"])("small",{class:["container mx-auto my-0",M.colors.color]}," Copyright © 2021 ToriHa | 個人作業使用，無商業行為 ",2)],2)}var M={name:"Footer",props:["textColor","bgColor","moreMsg"],data:function(){return{colors:{color:"",backgroundColor:""}}},mounted:function(){this.colors.color=this.textColor,this.colors.backgroundColor=this.bgColor}};M.render=y;e["a"]=M}}]);
//# sourceMappingURL=chunk-2a390ab6.5e7b0638.js.map
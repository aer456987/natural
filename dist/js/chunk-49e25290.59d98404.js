(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49e25290"],{"0a6e":function(t,e,c){"use strict";c.r(e);var o=c("7a23");function a(t,e,c,a,n,s){var r=Object(o["A"])("DashboarNavbar"),l=Object(o["A"])("router-view"),i=Object(o["A"])("Footer");return Object(o["v"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(r),Object(o["h"])(l),Object(o["h"])(i,{bgColor:"bg-brown",textColor:"text-dark",moreMsg:!1})],64)}c("ac1f"),c("5319");var n=c("4897"),s={class:"navbar navbar-expand-lg navbar-dark bg-brown px-2 shadow-sm"},r={class:"container-fluid"},l=Object(o["g"])(" Natural "),i=Object(o["h"])("button",{type:"button",class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["h"])("span",{class:"navbar-toggler-icon"})],-1),b={id:"navbarToggler",class:"collapse navbar-collapse flex justify-content-end"},u={class:"navbar-nav fs-5 text-center"},h={class:"nav-item"},d=Object(o["g"])(" 優惠券管理 "),j={class:"nav-item"},O=Object(o["g"])(" 商品管理 "),g={class:"nav-item"},f=Object(o["g"])(" 訂單管理 "),p={class:"nav-item d-flex justify-content-center"};function v(t,e,c,a,n,v){var m=Object(o["A"])("Font-awesome-icon"),x=Object(o["A"])("router-link");return Object(o["v"])(),Object(o["d"])("nav",s,[Object(o["h"])("div",r,[Object(o["h"])(x,{to:"/",class:"nav-link logo_brown h3 mb-0 p-0"},{default:Object(o["M"])((function(){return[Object(o["h"])(m,{icon:"crow",class:"d-inline-block align-text-top"}),l]})),_:1}),i,Object(o["h"])("div",b,[Object(o["h"])("ul",u,[Object(o["h"])("li",h,[Object(o["h"])(x,{to:"/admin/coupon",class:"nav-link"},{default:Object(o["M"])((function(){return[d]})),_:1})]),Object(o["h"])("li",j,[Object(o["h"])(x,{to:"/admin/dashboardProducts",class:"nav-link"},{default:Object(o["M"])((function(){return[O]})),_:1})]),Object(o["h"])("li",g,[Object(o["h"])(x,{to:"/admin/dashboardOrders",class:"nav-link"},{default:Object(o["M"])((function(){return[f]})),_:1})]),Object(o["h"])("li",p,[Object(o["h"])("button",{type:"buttom",class:"nav-link btn fs-5 shadow-none",onClick:e[1]||(e[1]=function(){return v.logout&&v.logout.apply(v,arguments)})}," 登出 ")])])])])])}var m={name:"DashboarNavbar",methods:{logout:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/logout");Object(n["c"])("正在登出","info"),this.$http.post(e).then((function(e){e.data.success?(document.cookie="hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;",t.$router.push("/login")):Object(n["c"])("登出失敗","error")})).catch((function(){Object(n["c"])("登出失敗","error")}))}}};m.render=v;var x=m,k=c("fd2d"),T={name:"Dashboard",data:function(){return{loginStatus:!1}},components:{Footer:k["a"],DashboarNavbar:x},methods:{checkLogin:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/user/check");this.$http.post(e).then((function(e){e.data.success?t.loginStatus=!0:(t.loginStatus=!1,document.cookie="hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;",Object(n["c"])(e.data.message,"warning",3e3,"即將於 3 秒後引導至登入畫面"),setTimeout((function(){t.$router.push("/login")}),3e3))})).catch((function(){Object(n["c"])("認證錯誤","error"),document.cookie="hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;",t.$router.push("/login")}))},logout:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/logout");Object(n["c"])("正在登出","info"),this.$http.post(e).then((function(e){e.data.success?(document.cookie="hexToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;",t.$router.push("/login")):Object(n["c"])("登出失敗","error")})).catch((function(){Object(n["c"])("登出失敗","error")}))}},mounted:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.checkLogin()}};c("7a47");T.render=a;e["default"]=T},"4a2d":function(t,e,c){},"7a47":function(t,e,c){"use strict";c("4a2d")},fd2d:function(t,e,c){"use strict";var o=c("7a23"),a={key:0,class:"row align-items-center"},n={class:"nav-item mb-3"},s={class:"row justify-content-center list-unstyled m-0"},r={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},l=Object(o["g"])(" 首頁 "),i={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},b=Object(o["g"])(" 關於我們 "),u={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},h=Object(o["g"])(" 線上商城 "),d={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},j=Object(o["g"])(" 購物車 "),O=Object(o["g"])(" 住址：台北市信義區林口街38巷109號6樓 "),g=Object(o["h"])("br",null,null,-1),f=Object(o["g"])(" 客服電話：(02)2308264 / (02)8650610 "),p=Object(o["h"])("br",null,null,-1),v=Object(o["g"])(" 服務時間：09:00 ~ 13:00 / 15:00 ~ 19:00 "),m=Object(o["h"])("br",null,null,-1),x=Object(o["h"])("i",{class:"fab fa-github-square"},null,-1);function k(t,e,c,k,T,_){var w=Object(o["A"])("router-link"),C=Object(o["A"])("Font-awesome-icon");return Object(o["v"])(),Object(o["d"])("footer",{class:["user_select_none p-3 text-center",T.colors.backgroundColor]},[c.moreMsg?(Object(o["v"])(),Object(o["d"])("small",a,[Object(o["h"])("nav",n,[Object(o["h"])("ul",s,[Object(o["h"])("li",r,[Object(o["h"])(w,{to:"/",class:"nav-link px-2 text-secondary"},{default:Object(o["M"])((function(){return[l]})),_:1})]),Object(o["h"])("li",i,[Object(o["h"])(w,{to:"/about",class:"nav-link px-2 text-secondary"},{default:Object(o["M"])((function(){return[b]})),_:1})]),Object(o["h"])("li",u,[Object(o["h"])(w,{to:"/products",class:"nav-link px-2 text-secondary"},{default:Object(o["M"])((function(){return[h]})),_:1})]),Object(o["h"])("li",d,[Object(o["h"])(w,{to:"/cart",class:"nav-link px-2 text-secondary"},{default:Object(o["M"])((function(){return[j]})),_:1})])])]),Object(o["h"])("p",{class:["mb-3",T.colors.color]},[O,g,f,p,v,m],2)])):Object(o["e"])("",!0),Object(o["h"])("span",{class:["d-block fs-4 mb-1",T.colors.color]},[Object(o["h"])(C,{icon:["fab","facebook-square"],class:"mx-1 pointer_no_hover scale",title:"facabook 粉絲團"}),Object(o["h"])(C,{icon:["fab","instagram-square"],class:"mx-1 pointer_no_hover scale",title:"Instagram"}),Object(o["h"])(C,{icon:["fab","line"],class:"mx-1 pointer_no_hover scale",title:"@line 官方"}),x,Object(o["h"])(C,{icon:["fab","github-square"],class:"mx-1 pointer_no_hover scale",title:"github"})],2),Object(o["h"])("small",{class:["container mx-auto my-0",T.colors.color]}," Copyright © 2021 ToriHa 個人作業使用，無商業行為 ",2)],2)}var T={name:"Footer",props:["textColor","bgColor","moreMsg"],data:function(){return{colors:{color:"",backgroundColor:""}}},mounted:function(){this.colors.color=this.textColor,this.colors.backgroundColor=this.bgColor}};T.render=k;e["a"]=T}}]);
//# sourceMappingURL=chunk-49e25290.59d98404.js.map
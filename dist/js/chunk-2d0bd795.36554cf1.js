(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd795"],{"2bc2":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function o(e,t,a,o,c,r){var s=Object(n["resolveComponent"])("MainNavbar"),i=Object(n["resolveComponent"])("router-view"),l=Object(n["resolveComponent"])("Footer"),b=Object(n["resolveComponent"])("GoToTopBtn");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(s),Object(n["createVNode"])(i),Object(n["createVNode"])(l,{textColor:"text-secondary",bgColor:"bg-primary",moreMsg:!0,onBackTop:r.backTop},null,8,["onBackTop"]),Object(n["createVNode"])(b,{"is-show":"ture","bg-Color":"bg-primary",onBackTopBtn:r.backTop},null,8,["onBackTopBtn"])],64)}var c={class:"navbar navbar-expand-lg navbar-dark bg-primary px-2 w-100 userselect-none"},r={class:"container-fluid"},s={class:"m-0"},i=Object(n["createTextVNode"])(" Natural "),l=Object(n["createVNode"])("button",{type:"button",class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),b={id:"navbarToggler",class:"collapse navbar-collapse flex justify-content-end"},d={class:"navbar-nav navbar__text text-center"},v={class:"nav-item scale"},u=Object(n["createTextVNode"])(" 關於我們 "),p={class:"nav-item scale"},O=Object(n["createTextVNode"])(" 常見問答 "),f={class:"nav-item scale"},g=Object(n["createTextVNode"])(" 線上商城 "),h={class:"nav-item scale"},j={class:"bi bi-heart-fill position-relative"},m={key:0,class:"num-icon"},N={class:"nav-item scale"},k={class:"bi bi-cart-fill position-relative"},V={key:0,class:"num-icon"};function L(e,t,a,o,L,w){var T=Object(n["resolveComponent"])("router-link"),C=Object(n["resolveComponent"])("FavoritesOffcanvas");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("nav",c,[Object(n["createVNode"])("div",r,[Object(n["createVNode"])("h1",s,[Object(n["createVNode"])(T,{to:"/",class:"nav-link custom-logo mb-0 p-0 border border-white"},{default:Object(n["withCtx"])((function(){return[i]})),_:1})]),l,Object(n["createVNode"])("div",b,[Object(n["createVNode"])("ul",d,[Object(n["createVNode"])("li",v,[Object(n["createVNode"])(T,{to:"/about",class:"nav-link"},{default:Object(n["withCtx"])((function(){return[u]})),_:1})]),Object(n["createVNode"])("li",p,[Object(n["createVNode"])(T,{to:"/FAQ",class:"nav-link"},{default:Object(n["withCtx"])((function(){return[O]})),_:1})]),Object(n["createVNode"])("li",f,[Object(n["createVNode"])(T,{to:"/products",class:"nav-link"},{default:Object(n["withCtx"])((function(){return[g]})),_:1})]),Object(n["createVNode"])("li",h,[Object(n["createVNode"])("a",{class:"nav-link pointer-no-hover",onClick:t[1]||(t[1]=function(e){return w.openFavoritesOffcanvas()})},[Object(n["createVNode"])("i",j,[L.favoritesLength>0?(Object(n["openBlock"])(),Object(n["createBlock"])("span",m,Object(n["toDisplayString"])(L.favoritesLength||L.newFavoritesLength),1)):Object(n["createCommentVNode"])("",!0)])])]),Object(n["createVNode"])("li",N,[Object(n["createVNode"])(T,{to:"/cart",class:"nav-link"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("i",k,[L.cartsLength>0?(Object(n["openBlock"])(),Object(n["createBlock"])("span",V,Object(n["toDisplayString"])(L.cartsLength||L.newLength),1)):Object(n["createCommentVNode"])("",!0)])]})),_:1})])])])])]),Object(n["createVNode"])(C,{ref:"likeOffcanvas"},null,512)],64)}a("99af"),a("159b");var w=a("4897"),T=a("3a72"),C=a("cfdd"),F={name:"MainNavbar",data:function(){return{cartsLength:0,newLength:0,mainFavoritesList:JSON.parse(localStorage.getItem("favoriteData"))||[],favoritesLength:0,newFavoritesLength:0}},components:{FavoritesOffcanvas:C["a"]},methods:{updateCartLength:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.$http.get(t).then((function(t){if(t.data.success){var a=0;e.cartsLength=t.data.data.carts.forEach((function(e){a+=e.qty})),e.cartsLength=a}else Object(w["d"])("購物車資料異常","請重新整理",!0,"top-end")})).catch((function(){Object(w["d"])("購物車資料異常","請重新整理",!0,"top-end")}))},updateFavoritesLength:function(){this.favoritesLength=this.mainFavoritesList.length,this.newFavoritesLength=this.mainFavoritesList.length},openFavoritesOffcanvas:function(){var e=JSON.parse(localStorage.getItem("favoriteData"))||[];this.$refs.likeOffcanvas.openOffcanvas(e)}},mounted:function(){var e=this;this.updateCartLength(),this.updateFavoritesLength(),T["a"].on("cart-number",(function(t){e.cartsLength=t,e.newLength=t})),T["a"].on("favorites-number",(function(t){e.favoritesLength=t,e.newFavoritesLength=t}))}};F.render=L;var x=F,B=a("fd2d"),y=a("bfc5"),_={name:"Front",components:{MainNavbar:x,Footer:B["a"],GoToTopBtn:y["a"]},methods:{backTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}};_.render=o;t["default"]=_}}]);
//# sourceMappingURL=chunk-2d0bd795.36554cf1.js.map
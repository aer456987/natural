(function(e){function n(n){for(var t,r,o=n[0],d=n[1],i=n[2],h=0,f=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);l&&l(n);while(f.length)f.shift()();return u.push.apply(u,i||[]),c()}function c(){for(var e,n=0;n<u.length;n++){for(var c=u[n],t=!0,r=1;r<c.length;r++){var o=c[r];0!==a[o]&&(t=!1)}t&&(u.splice(n--,1),e=d(d.s=c[0]))}return e}var t={},r={app:0},a={app:0},u=[];function o(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"117eeaee","chunk-36a4d246":"e206525a","chunk-67e3931c":"a9c630a6","chunk-1502f21a":"fc234eb3","chunk-17697696":"40dfdebc","chunk-44c3982c":"a4e26e7f","chunk-52cca8cc":"489a2818","chunk-73d0f1fd":"23c326c8","chunk-97a8253c":"f57b9ece","chunk-d9f23f5a":"b9bd5eae","chunk-f6932d84":"f8ac842a","chunk-641dd712":"e400013b","chunk-077a3346":"0475867b","chunk-0e2d3c00":"19a6d125","chunk-174f6593":"845e5ee7","chunk-6f9a733c":"c8da5feb","chunk-179d3cd8":"61bcc7b1","chunk-2d0bd795":"36554cf1","chunk-48bb43b6":"b9a1a2d9","chunk-e2e5fec6":"af0a740e"}[e]+".js"}function d(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,d),c.l=!0,c.exports}d.e=function(e){var n=[],c={"chunk-d9f23f5a":1,"chunk-179d3cd8":1,"chunk-48bb43b6":1};r[e]?n.push(r[e]):0!==r[e]&&c[e]&&n.push(r[e]=new Promise((function(n,c){for(var t="css/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"31d6cfe0","chunk-36a4d246":"31d6cfe0","chunk-67e3931c":"31d6cfe0","chunk-1502f21a":"31d6cfe0","chunk-17697696":"31d6cfe0","chunk-44c3982c":"31d6cfe0","chunk-52cca8cc":"31d6cfe0","chunk-73d0f1fd":"31d6cfe0","chunk-97a8253c":"31d6cfe0","chunk-d9f23f5a":"f021becc","chunk-f6932d84":"31d6cfe0","chunk-641dd712":"31d6cfe0","chunk-077a3346":"31d6cfe0","chunk-0e2d3c00":"31d6cfe0","chunk-174f6593":"31d6cfe0","chunk-6f9a733c":"31d6cfe0","chunk-179d3cd8":"23ee2c80","chunk-2d0bd795":"31d6cfe0","chunk-48bb43b6":"90ef80b1","chunk-e2e5fec6":"31d6cfe0"}[e]+".css",a=d.p+t,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===t||h===a))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],h=i.getAttribute("data-href");if(h===t||h===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var t=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=t,delete r[e],l.parentNode.removeChild(l),c(u)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var t=a[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise((function(n,c){t=a[e]=[n,c]}));n.push(t[2]=u);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=o(e);var f=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(l);var c=a[e];if(0!==c){if(c){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",f.name="ChunkLoadError",f.type=t,f.request=r,c[1](f)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},d.m=e,d.c=t,d.d=function(e,n,c){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)d.d(c,t,function(n){return e[n]}.bind(null,t));return c},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/natural/dist/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=h;u.push([0,"chunk-vendors"]),c()})({0:function(e,n,c){e.exports=c("56d7")},"0cad":function(e,n,c){e.exports=c.p+"img/loaging.e76fbc77.svg"},2412:function(e,n,c){},"56d7":function(e,n,c){"use strict";c.r(n);c("e260"),c("e6cf"),c("cca6"),c("a79d");var t=c("7a23"),r=c("7bb1"),a=c("3aa8"),u=c("cbdf"),o=c("9457"),d=c("ecee"),i=c("c074"),h=c("f2d1"),f=c("ad3d"),l=c("bc3a"),p=c.n(l),s=c("2106"),b=c.n(s),k=c("0cad"),m=c.n(k),g={key:0,class:"loading-img userselect-none"},v=Object(t["createVNode"])("img",{src:m.a,alt:"loading"},null,-1);function y(e,n,c,r,a,u){return c.status?(Object(t["openBlock"])(),Object(t["createBlock"])("div",g,[v])):Object(t["createCommentVNode"])("",!0)}var O={name:"Loading",props:["status"]};O.render=y;var j=O,P=(c("7b17"),c("f9d5")),w=c.n(P),_=(c("4413"),c("f5af")),x=c.n(_);c("e829");function E(e,n){var c=Object(t["resolveComponent"])("router-view");return Object(t["openBlock"])(),Object(t["createBlock"])(c)}c("beea");const S={};S.render=E;var T=S,C=(c("d3b7"),c("3ca3"),c("ddb0"),c("6c02")),A=[{path:"/",name:"首頁",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-f6932d84"),c.e("chunk-6f9a733c"),c.e("chunk-179d3cd8")]).then(c.bind(null,"bb51"))}},{path:"/login",name:"登入",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-97a8253c")]).then(c.bind(null,"a55b"))}},{path:"/",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-f6932d84"),c.e("chunk-6f9a733c"),c.e("chunk-2d0bd795")]).then(c.bind(null,"2bc2"))},children:[{path:"about",name:"關於我們",component:function(){return c.e("chunk-e2e5fec6").then(c.bind(null,"9cbb"))}},{path:"FAQ",name:"常見問答",component:function(){return c.e("chunk-36a4d246").then(c.bind(null,"43f1"))}},{path:"products",name:"線上商城",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-d9f23f5a")]).then(c.bind(null,"ed84"))}},{path:"product/:id",name:"產品介紹頁面",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-73d0f1fd")]).then(c.bind(null,"658f"))}},{path:"cart",name:"購物車",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-44c3982c")]).then(c.bind(null,"62b3"))}},{path:"order",name:"訂單",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-17697696")]).then(c.bind(null,"5fd6"))}},{path:"order/:id",name:"訂單確認",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-52cca8cc")]).then(c.bind(null,"0004"))}},{path:"orderPaid",name:"付款完成",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-1502f21a")]).then(c.bind(null,"a5d5"))}}]},{path:"/admin",name:"後台",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-f6932d84"),c.e("chunk-6f9a733c"),c.e("chunk-48bb43b6")]).then(c.bind(null,"0a6e"))},children:[{path:"dashboardOrders",name:"後台訂單頁",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-f6932d84"),c.e("chunk-641dd712"),c.e("chunk-077a3346")]).then(c.bind(null,"1593"))}},{path:"dashboardProducts",name:"後台商品頁",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-f6932d84"),c.e("chunk-641dd712"),c.e("chunk-0e2d3c00")]).then(c.bind(null,"8d66"))}},{path:"coupon",name:"後台優惠券",component:function(){return Promise.all([c.e("chunk-67e3931c"),c.e("chunk-f6932d84"),c.e("chunk-641dd712"),c.e("chunk-174f6593")]).then(c.bind(null,"0c8f"))}}]},{path:"/:pathMatch(.*)*",name:"404頁面",component:function(){return c.e("chunk-2d0e5e97").then(c.bind(null,"9703"))}},{path:"/admin/:pathMatch(.*)*",redirect:{name:"登入"}}],B=Object(C["a"])({history:Object(C["b"])(),routes:A,scrollBehavior:function(){return{x:0,y:0}}}),L=B;c("ac1f"),c("5319"),c("b680");function M(e){var n;if(e){var c=new Date(1e3*e);n=c.toLocaleDateString()}else n="無";return n}function N(e){var n=parseInt(e,10);return"".concat(n.toFixed(0).replace(/./g,(function(e,n,c){return n&&"."!==e&&(c.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e})))}x.a.init({once:!0}),Object(r["e"])("required",a["d"]),Object(r["e"])("email",a["a"]),Object(r["e"])("numeric",a["c"]),Object(r["e"])("min",a["b"]),Object(r["d"])({generateMessage:Object(u["a"])({zh_TW:o}),validateOnInput:!0}),Object(u["b"])("zh_TW"),d["c"].add(i["a"],h["a"],h["d"],h["c"],h["b"]);var F=Object(t["createApp"])(T);F.use(L),F.use(b.a,p.a),F.use(w.a),F.use(x.a),F.component("Form",r["c"]),F.component("Field",r["b"]),F.component("ErrorMessage",r["a"]),F.component("Font-awesome-icon",f["a"]),F.component("Loading",j),F.config.productionTip=!1,F.config.globalProperties.$filters={date:M,currency:N},F.mount("#app")},beea:function(e,n,c){"use strict";c("2412")}});
//# sourceMappingURL=app.e69d3a6e.js.map
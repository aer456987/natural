(function(e){function n(n){for(var c,r,o=n[0],d=n[1],i=n[2],h=0,f=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);l&&l(n);while(f.length)f.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-29b10b56":"215a0d6a","chunk-2d0e5e97":"55bac7db","chunk-3654a227":"c7156c76","chunk-1502f21a":"56e0136a","chunk-341f4a2e":"f7c19568","chunk-40078331":"903903fc","chunk-409fcf65":"6242ffc4","chunk-49e25290":"59d98404","chunk-58d56bee":"29a36f05","chunk-3f14facb":"1f366013","chunk-2c024111":"1d20801e","chunk-2e51dccc":"9d493190","chunk-1e348ffb":"9784da39","chunk-4382383d":"309e2bb7","chunk-2d0bd795":"e63c3c02","chunk-f23d42e6":"3c48ce06","chunk-6746433a":"319ea862","chunk-85c3b3a6":"4efb0fd6","chunk-9943e9ee":"19ab2b3f","chunk-46b45c8c":"9a5fa27d"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-49e25290":1,"chunk-1e348ffb":1,"chunk-f23d42e6":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-29b10b56":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-3654a227":"31d6cfe0","chunk-1502f21a":"31d6cfe0","chunk-341f4a2e":"31d6cfe0","chunk-40078331":"31d6cfe0","chunk-409fcf65":"31d6cfe0","chunk-49e25290":"0e785e11","chunk-58d56bee":"31d6cfe0","chunk-3f14facb":"31d6cfe0","chunk-2c024111":"31d6cfe0","chunk-2e51dccc":"31d6cfe0","chunk-1e348ffb":"5d79e57f","chunk-4382383d":"31d6cfe0","chunk-2d0bd795":"31d6cfe0","chunk-f23d42e6":"4c46a585","chunk-6746433a":"31d6cfe0","chunk-85c3b3a6":"31d6cfe0","chunk-9943e9ee":"31d6cfe0","chunk-46b45c8c":"31d6cfe0"}[e]+".css",a=d.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===c||h===a))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],h=i.getAttribute("data-href");if(h===c||h===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],l.parentNode.removeChild(l),t(u)},l.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=o(e);var f=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/natural/dist/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),r=t("7bb1"),a=t("3aa8"),u=t("cbdf"),o=t("ecee"),d=t("c074"),i=t("f2d1"),h=t("ad3d"),f=t("bc3a"),l=t.n(f),b=t("2106"),s=t.n(b),p=t("9457"),k=t("d779"),m=t.n(k),g={key:0,class:"loadingImg user_select_none"},v=Object(c["h"])("img",{src:m.a,alt:"loading"},null,-1);function y(e,n,t,r,a,u){return t.status?(Object(c["v"])(),Object(c["d"])("div",g,[v])):Object(c["e"])("",!0)}var O={name:"Loading",props:["status"]};O.render=y;var j=O,P=(t("7b17"),t("f5af")),w=t.n(P);t("e829");function _(e,n){var t=Object(c["A"])("router-view");return Object(c["v"])(),Object(c["d"])(t)}t("af1a");const E={};E.render=_;var S=E,T=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),x=[{path:"/",name:"首頁",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-58d56bee"),t.e("chunk-4382383d"),t.e("chunk-f23d42e6")]).then(t.bind(null,"bb51"))}},{path:"/login",name:"登入",component:function(){return t.e("chunk-29b10b56").then(t.bind(null,"a55b"))}},{path:"/",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-58d56bee"),t.e("chunk-4382383d"),t.e("chunk-2d0bd795")]).then(t.bind(null,"2bc2"))},children:[{path:"/about",name:"關於我們",component:function(){return t.e("chunk-46b45c8c").then(t.bind(null,"9cbb"))}},{path:"products",name:"線上商城",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-6746433a")]).then(t.bind(null,"ed84"))}},{path:"product/:id",name:"產品介紹頁面",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-40078331"),t.e("chunk-409fcf65")]).then(t.bind(null,"658f"))}},{path:"cart",name:"購物車",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-85c3b3a6")]).then(t.bind(null,"62b3"))}},{path:"order",name:"訂單",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-341f4a2e")]).then(t.bind(null,"5fd6"))}},{path:"order/:id",name:"訂單確認",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-9943e9ee")]).then(t.bind(null,"0004"))}},{path:"orderPaid",name:"付款完成",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-1502f21a")]).then(t.bind(null,"a5d5"))}}]},{path:"/admin",name:"後台",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-49e25290")]).then(t.bind(null,"0a6e"))},children:[{path:"dashboardOrders",name:"後台訂單頁",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-58d56bee"),t.e("chunk-3f14facb"),t.e("chunk-2e51dccc")]).then(t.bind(null,"1593"))}},{path:"dashboardProducts",name:"後台商品頁",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-58d56bee"),t.e("chunk-3f14facb"),t.e("chunk-2c024111")]).then(t.bind(null,"8d66"))}},{path:"coupon",name:"後台優惠券",component:function(){return Promise.all([t.e("chunk-3654a227"),t.e("chunk-58d56bee"),t.e("chunk-3f14facb"),t.e("chunk-40078331"),t.e("chunk-1e348ffb")]).then(t.bind(null,"0c8f"))}}]},{path:"/:pathMatch(.*)*",name:"404頁面",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}},{path:"/admin/:pathMatch(.*)*",redirect:{name:"登入"}}],L=Object(T["a"])({history:Object(T["b"])(),routes:x}),M=L;t("ac1f"),t("5319"),t("b680");function A(e){var n;if(e){var t=new Date(1e3*e);n=t.toLocaleDateString()}else n="無";return n}function C(e){var n=parseInt(e,10);return"".concat(n.toFixed(0).replace(/./g,(function(e,n,t){return n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e})))}w.a.init({once:!0}),Object(r["e"])("required",a["d"]),Object(r["e"])("email",a["a"]),Object(r["e"])("numeric",a["c"]),Object(r["e"])("min",a["b"]),Object(r["d"])({generateMessage:Object(u["a"])({zh_TW:p}),validateOnInput:!0}),Object(u["b"])("zh_TW"),o["c"].add(d["a"],d["b"],i["a"],i["d"],i["c"],i["b"]);var F=Object(c["c"])(S);F.config.globalProperties.$filters={date:A,currency:C},F.use(M),F.use(s.a,l.a),F.use(w.a),F.component("Form",r["c"]),F.component("Field",r["b"]),F.component("ErrorMessage",r["a"]),F.component("Font-awesome-icon",h["a"]),F.component("Loading",j),F.config.productionTip=!1,F.mount("#app")},"9a8e":function(e,n,t){},af1a:function(e,n,t){"use strict";t("9a8e")},d779:function(e,n,t){e.exports=t.p+"img/loaging.ab0c905e.svg"}});
//# sourceMappingURL=app.49910e7d.js.map
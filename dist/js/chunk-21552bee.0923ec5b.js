(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21552bee"],{"159b":function(t,e,n){var a=n("da84"),c=n("fdbc"),r=n("17c2"),o=n("9112");for(var i in c){var s=a[i],l=s&&s.prototype;if(l&&l.forEach!==r)try{o(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,c=n("a640"),r=c("forEach");t.exports=r?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),r=n("2d00"),o=c("species");t.exports=function(t){return r>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3a72":function(t,e,n){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a&&a.push(n)||t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&a.splice(a.indexOf(n)>>>0,1)},emit:function(e,n){(t.get(e)||[]).slice().map((function(t){t(n)})),(t.get("*")||[]).slice().map((function(t){t(e,n)}))}}};e["a"]=a()},"65f0":function(t,e,n){var a=n("861d"),c=n("e8b5"),r=n("b622"),o=r("species");t.exports=function(t,e){var n;return c(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?a(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var a=n("c04e"),c=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var o=a(e);o in t?c.f(t,o,r(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("d039"),r=n("e8b5"),o=n("861d"),i=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),f=n("1dde"),b=n("b622"),h=n("2d00"),v=b("isConcatSpreadable"),d=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!c((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),O=f("concat"),j=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:r(t)},y=!g||!O;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,a,c,r,o=i(this),f=u(o,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],j(r)){if(c=s(r.length),b+c>d)throw TypeError(p);for(n=0;n<c;n++,b++)n in r&&l(f,b,r[n])}else{if(b>=d)throw TypeError(p);l(f,b++,r)}return f.length=b,f}})},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var a=n("0366"),c=n("44ad"),r=n("7b0b"),o=n("50c4"),i=n("65f0"),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,f=6==t,b=7==t,h=5==t||f;return function(v,d,p,g){for(var O,j,y=r(v),x=c(y),w=a(d,p,3),m=o(x.length),k=0,L=g||i,E=e?L(v,m):n||b?L(v,0):void 0;m>k;k++)if((h||k in x)&&(O=x[k],j=w(O,k,y),t))if(e)E[k]=j;else if(j)switch(t){case 3:return!0;case 5:return O;case 6:return k;case 2:s.call(E,O)}else switch(t){case 4:return!1;case 7:s.call(E,O)}return f?-1:l||u?u:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},de8a:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c={class:"navbar navbar-expand-lg\n    navbar-dark bg-primary px-2"},r={class:"container-fluid"},o=Object(a["g"])(" Natural "),i=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse flex justify-content-end",id:"navbarToggler"},l={class:"navbar-nav fs-5 text-center"},u={class:"nav-item scale"},f=Object(a["g"])("關於我們"),b={class:"nav-item scale"},h=Object(a["g"])("線上商城"),v=Object(a["h"])("li",{class:"nav-item scale"},[Object(a["h"])("span",{class:"nav-link"},[Object(a["h"])("i",{class:"bi bi-heart-fill"})])],-1),d={class:"nav-item scale"},p={class:"bi bi-cart-fill position-relative"},g={key:0,class:"cart_num"},O=Object(a["h"])("footer",{class:"p-3 bg-primary"},[Object(a["h"])("div",{class:"container text-center text-secondary"}," 作業使用，無商業行為 ")],-1);function j(t,e,n,j,y,x){var w=Object(a["y"])("font-awesome-icon"),m=Object(a["y"])("router-link"),k=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("nav",c,[Object(a["h"])("div",r,[Object(a["h"])(m,{to:"/",class:"nav-link logo h3 mb-0 p-0"},{default:Object(a["I"])((function(){return[Object(a["h"])(w,{icon:"crow",class:"d-inline-block align-text-top"}),o]})),_:1}),i,Object(a["h"])("span",s,[Object(a["h"])("ul",l,[Object(a["h"])("li",u,[Object(a["h"])(m,{to:"/",class:"nav-link"},{default:Object(a["I"])((function(){return[f]})),_:1})]),Object(a["h"])("li",b,[Object(a["h"])(m,{to:"/products",class:"nav-link"},{default:Object(a["I"])((function(){return[h]})),_:1})]),v,Object(a["h"])("li",d,[Object(a["h"])(m,{to:"/square/cart",class:"nav-link"},{default:Object(a["I"])((function(){return[Object(a["h"])("span",null,[Object(a["h"])("i",p,[y.cartsLength>0?(Object(a["t"])(),Object(a["d"])("span",g,Object(a["B"])(y.cartsLength||y.newLength),1)):Object(a["e"])("",!0)])])]})),_:1})])])])])]),Object(a["h"])(k),O],64)}n("99af"),n("159b");var y=n("3a72"),x={data:function(){return{cartsLength:0,newLength:0}},methods:{updateCartLength:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.$http.get(e).then((function(e){if(e.data.success){console.log("(成功-全域)取得購物車數量 res:",e);var n=0;t.cartsLength=e.data.data.carts.forEach((function(t){n+=t.qty})),t.cartsLength=n,console.log("(成功-全域)取得購物車數量 vue:",t.cartsLength)}else console.log("(錯誤-全域)取得購物車數量 res:",e)})).catch((function(t){console.log("(失敗-全域)取得購物車數量 err:"),console.dir(t)}))}},mounted:function(){var t=this;this.updateCartLength(),y["a"].on("cart-number",(function(e){t.cartsLength=e,t.newLength=e}))}};x.render=j;e["default"]=x},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-21552bee.0923ec5b.js.map
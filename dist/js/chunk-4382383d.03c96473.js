(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4382383d"],{1517:function(t,e,n){
/*!
  * Bootstrap offcanvas.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(n("848f"),n("109e"),n("6ee1"),n("6a95"),n("302d"))})(0,(function(t,e,n,i,o){"use strict";function s(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var a=s(t),c=s(e),r=s(n),l=s(i),d=s(o);const u=1e3,f="transitionend",h=t=>null===t||void 0===t?""+t:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),b=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),e=n&&"#"!==n?n.trim():null}return e},m=t=>{const e=b(t);return e?document.querySelector(e):null},p=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),o=Number.parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*u):0},v=t=>{t.dispatchEvent(new Event(f))},g=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),O=(t,e)=>{let n=!1;const i=5,o=e+i;function s(){n=!0,t.removeEventListener(f,s)}t.addEventListener(f,s),setTimeout(()=>{n||v(t)},o)},j=(t,e,n)=>{Object.keys(n).forEach(i=>{const o=n[i],s=e[i],a=s&&g(s)?"element":h(s);if(!new RegExp(o).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${o}".`)})},_=t=>{if(!t)return!1;if(t.style&&t.parentNode&&t.parentNode.style){const e=getComputedStyle(t),n=getComputedStyle(t.parentNode);return"none"!==e.display&&"none"!==n.display&&"hidden"!==e.visibility}return!1},y=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),w=t=>t.offsetHeight,x=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},k=t=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()},E=t=>{k(()=>{const e=x();if(e){const n=t.NAME,i=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=i,t.jQueryInterface)}})},F=t=>{"function"===typeof t&&t()},A=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",D=".sticky-top",L=()=>{const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)},C=(t=L())=>{S(),N("body","paddingRight",e=>e+t),N(A,"paddingRight",e=>e+t),N(D,"marginRight",e=>e-t)},S=()=>{const t=document.body.style.overflow;t&&c["default"].setDataAttribute(document.body,"overflow",t),document.body.style.overflow="hidden"},N=(t,e,n)=>{const i=L();a["default"].find(t).forEach(t=>{if(t!==document.body&&window.innerWidth>t.clientWidth+i)return;const o=t.style[e],s=window.getComputedStyle(t)[e];c["default"].setDataAttribute(t,e,o),t.style[e]=n(Number.parseFloat(s))+"px"})},M=()=>{I("body","overflow"),I("body","paddingRight"),I(A,"paddingRight"),I(D,"marginRight")},I=(t,e)=>{a["default"].find(t).forEach(t=>{const n=c["default"].getDataAttribute(t,e);"undefined"===typeof n?t.style.removeProperty(e):(c["default"].removeDataAttribute(t,e),t.style[e]=n)})},$={isVisible:!0,isAnimated:!1,rootElement:document.body,clickCallback:null},q={isVisible:"boolean",isAnimated:"boolean",rootElement:"element",clickCallback:"(function|null)"},T="backdrop",P="modal-backdrop",R="fade",J="show",Q="mousedown.bs."+T;class V{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&w(this._getElement()),this._getElement().classList.add(J),this._emulateAnimation(()=>{F(t)})):F(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(J),this._emulateAnimation(()=>{this.dispose(),F(t)})):F(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=P,this._config.isAnimated&&t.classList.add(R),this._element=t}return this._element}_getConfig(t){return t={...$,..."object"===typeof t?t:{}},t.rootElement=t.rootElement||document.body,j(T,t,q),t}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),l["default"].on(this._getElement(),Q,()=>{F(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(l["default"].off(this._element,Q),this._getElement().parentNode.removeChild(this._element),this._isAppended=!1)}_emulateAnimation(t){if(!this._config.isAnimated)return void F(t);const e=p(this._getElement());l["default"].one(this._getElement(),"transitionend",()=>F(t)),O(this._getElement(),e)}}const W="offcanvas",z="bs.offcanvas",U="."+z,B=".data-api",H=`load${U}${B}`,G="Escape",K={backdrop:!0,keyboard:!0,scroll:!1},X={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Y="show",Z=".offcanvas.show",tt="show"+U,et="shown"+U,nt="hide"+U,it="hidden"+U,ot="focusin"+U,st=`click${U}${B}`,at="click.dismiss"+U,ct="keydown.dismiss"+U,rt='[data-bs-dismiss="offcanvas"]',lt='[data-bs-toggle="offcanvas"]';class dt extends d["default"]{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._addEventListeners()}static get NAME(){return W}static get Default(){return K}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=l["default"].trigger(this._element,tt,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(C(),this._enforceFocusOnElement(this._element)),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Y);const n=()=>{l["default"].trigger(this._element,et,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const t=l["default"].trigger(this._element,nt);if(t.defaultPrevented)return;l["default"].off(document,ot),this._element.blur(),this._isShown=!1,this._element.classList.remove(Y),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||M(),l["default"].trigger(this._element,it)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),super.dispose(),l["default"].off(document,ot)}_getConfig(t){return t={...K,...c["default"].getDataAttributes(this._element),..."object"===typeof t?t:{}},j(W,t,X),t}_initializeBackDrop(){return new V({isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_enforceFocusOnElement(t){l["default"].off(document,ot),l["default"].on(document,ot,e=>{document===e.target||t===e.target||t.contains(e.target)||t.focus()}),t.focus()}_addEventListeners(){l["default"].on(this._element,at,rt,()=>this.hide()),l["default"].on(this._element,ct,t=>{this._config.keyboard&&t.key===G&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=r["default"].get(this,z)||new dt(this,"object"===typeof t?t:{});if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return l["default"].on(document,st,lt,(function(t){const e=m(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),y(this))return;l["default"].one(e,it,()=>{_(this)&&this.focus()});const n=a["default"].findOne(Z);n&&n!==e&&dt.getInstance(n).hide();const i=r["default"].get(e,z)||new dt(e);i.toggle(this)})),l["default"].on(window,H,()=>{a["default"].find(Z).forEach(t=>(r["default"].get(t,z)||new dt(t)).show())}),E(dt),dt}))},"159b":function(t,e,n){var i=n("da84"),o=n("fdbc"),s=n("17c2"),a=n("9112");for(var c in o){var r=i[c],l=r&&r.prototype;if(l&&l.forEach!==s)try{a(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,o=n("a640"),s=o("forEach");t.exports=s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,n){"use strict";var i=n("23e7"),o=n("5a34"),s=n("1d80"),a=n("ab13");i({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(s(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"3a72":function(t,e,n){"use strict";var i=function(t){return{all:t=t||new Map,on:function(e,n){var i=t.get(e);i&&i.push(n)||t.set(e,[n])},off:function(e,n){var i=t.get(e);i&&i.splice(i.indexOf(n)>>>0,1)},emit:function(e,n){(t.get(e)||[]).slice().map((function(t){t(n)})),(t.get("*")||[]).slice().map((function(t){t(e,n)}))}}};e["a"]=i()},"44e7":function(t,e,n){var i=n("861d"),o=n("c6b6"),s=n("b622"),a=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},a434:function(t,e,n){"use strict";var i=n("23e7"),o=n("23cb"),s=n("a691"),a=n("50c4"),c=n("7b0b"),r=n("65f0"),l=n("8418"),d=n("1dde"),u=d("splice"),f=Math.max,h=Math.min,b=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var n,i,d,u,p,v,g=c(this),O=a(g.length),j=o(t,O),_=arguments.length;if(0===_?n=i=0:1===_?(n=0,i=O-j):(n=_-2,i=h(f(s(e),0),O-j)),O+n-i>b)throw TypeError(m);for(d=r(g,i),u=0;u<i;u++)p=j+u,p in g&&l(d,u,g[p]);if(d.length=i,n<i){for(u=j;u<O-i;u++)p=u+i,v=u+n,p in g?g[v]=g[p]:delete g[v];for(u=O;u>O-i+n;u--)delete g[u-1]}else if(n>i)for(u=O-i;u>j;u--)p=u+i-1,v=u+n-1,p in g?g[v]=g[p]:delete g[v];for(u=0;u<n;u++)g[u+j]=arguments[u+2];return g.length=O-i+n,d}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,n){var i=n("b622"),o=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(i){}}return!1}},c494:function(t,e,n){"use strict";var i=n("7a23"),o=Object(i["h"])("i",{class:"bi bi-heart-fill fs-4"},null,-1);function s(t,e,n,s,a,c){return Object(i["v"])(),Object(i["d"])(i["a"],null,[Object(i["h"])("input",{type:"checkbox",id:n.idData,class:"btn-check",autocomplete:"off",checked:a.isFavorite},null,8,["id","checked"]),Object(i["h"])("label",{for:n.idData,class:"favorite_icon",onClick:e[1]||(e[1]=function(){return c.addFavoriteItem&&c.addFavoriteItem.apply(c,arguments)})},[o],8,["for"])],64)}n("caad"),n("2532"),n("a434");var a=n("3a72"),c={name:"Favorite",props:["idData"],data:function(){return{isFavorite:!1,favoritsList:JSON.parse(localStorage.getItem("favoritData"))||[]}},watch:{idData:function(){this.isFavorite=this.favoritsList.includes(this.idData)}},methods:{saveFavorit:function(t){var e=JSON.stringify(t);localStorage.setItem("favoritData",e)},updateFavoritsNum:function(t){a["a"].emit("favorits-number",t.length)},addFavoriteItem:function(){this.favoritsList=JSON.parse(localStorage.getItem("favoritData")),this.favoritsList.includes(this.idData)?(this.favoritsList.splice(this.favoritsList.indexOf(this.idData),1),this.saveFavorit(this.favoritsList),this.updateFavoritsNum(this.favoritsList),a["a"].emit("favorits-list",JSON.parse(localStorage.getItem("favoritData")))):(this.favoritsList.push(this.idData),this.saveFavorit(this.favoritsList),this.updateFavoritsNum(this.favoritsList))}},mounted:function(){this.favoritsList=JSON.parse(localStorage.getItem("favoritData"))||[],this.isFavorite=this.favoritsList.includes(this.idData)}};c.render=s;e["a"]=c},caad:function(t,e,n){"use strict";var i=n("23e7"),o=n("4d64").includes,s=n("44d2");i({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},cfdd:function(t,e,n){"use strict";var i=n("7a23"),o={class:"offcanvas offcanvas-end shadow-lg overflow-x px-0 m-0","data-bs-scroll":"true","data-bs-backdrop":"true",tabindex:"-1",ref:"offcanvas"},s={class:"offcanvas-header"},a={class:"row align-items-center"},c={class:"col-10"},r={class:"fs-5"},l=Object(i["g"])(" 最愛收藏 "),d=Object(i["h"])("div",{class:"col-2 text-end"},[Object(i["h"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),u={class:"offcanvas-body"},f={class:"list-unstyled px-1 mb-5"},h={class:"col-2 col-sm-1 p-0 border"},b={class:"col-1 p-0 d-none d-sm-block"},m={class:"col-5 offcanvas_text border py-0 px-1"},p=Object(i["h"])("br",null,null,-1),v={class:"col-3 border px-1"},g={class:"col-2 p-0 border"},O=Object(i["h"])("i",{class:"bi bi-cart-plus-fill"},null,-1),j={class:"row flex-row-reverse"},_={class:"col-12 col-md-6"},y=Object(i["g"])(" 我要結帳 "),w={class:"col-12 col-md-6"},x=Object(i["g"])(" 繼續選購 "),k={key:1,class:"list-unstyled px-1 mb-5"},E={class:"text-center"},F=Object(i["h"])("p",{class:"mb-3 fs-5"}," 還沒有將喜歡的商品加入收藏嗎？ ",-1),A=Object(i["g"])(" 趕快去選購 ");function D(t,e,n,D,L,C){var S=Object(i["A"])("FavoriteIcon"),N=Object(i["A"])("router-link");return Object(i["v"])(),Object(i["d"])("div",o,[Object(i["h"])("div",s,[Object(i["h"])("div",a,[Object(i["h"])("div",c,[Object(i["h"])("h3",r,[l,Object(i["h"])("span",null,[Object(i["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e[1]||(e[1]=function(){return C.allDelFavorite&&C.allDelFavorite.apply(C,arguments)})}," 清空收藏 ")])])]),d])]),Object(i["h"])("div",u,[L.offcanvasFavoritsList.length>0?(Object(i["v"])(),Object(i["d"])(i["a"],{key:0},[Object(i["h"])("ul",f,[(Object(i["v"])(!0),Object(i["d"])(i["a"],null,Object(i["z"])(L.newFavoritsData,(function(e){return Object(i["v"])(),Object(i["d"])("li",{key:e.id,class:"row justify-content-center align-items-center\n              mb-2 pb-2 border-bottom"},[Object(i["h"])("span",h,[Object(i["h"])(S,{ref:"favoritIcon",idData:e.id},null,8,["idData"])]),Object(i["h"])("span",b,[Object(i["h"])("img",{src:e.imageUrl,alt:"圖片",class:"w-100"},null,8,["src"])]),Object(i["h"])("span",m,[Object(i["g"])(Object(i["D"])(e.title)+" ",1),p,Object(i["g"])(" $"+Object(i["D"])(t.$filters.currency(e.price))+" / "+Object(i["D"])(e.unit),1)]),Object(i["h"])("span",v,[Object(i["N"])(Object(i["h"])("input",{ref:"numValue",type:"number",min:"1",class:"form-control w-100 text-center\n                    py-1 text-center","onUpdate:modelValue":function(t){return e.qty=t}},null,8,["onUpdate:modelValue"]),[[i["J"],e.qty,void 0,{number:!0}]])]),Object(i["h"])("span",g,[Object(i["h"])("span",{class:"btn btn_outline_green fs-4",onClick:function(t){return C.addCart(e.id,e.qty)}},[O],8,["onClick"])])])})),128))]),Object(i["h"])("div",j,[Object(i["h"])("div",_,[Object(i["h"])(N,{to:"/cart",class:"btn btn_main w-100 mb-2"},{default:Object(i["M"])((function(){return[y]})),_:1})]),Object(i["h"])("div",w,[Object(i["h"])(N,{to:"/products",class:"btn btn-outline-custom-primary w-100 mb-2"},{default:Object(i["M"])((function(){return[x]})),_:1})])])],64)):(Object(i["v"])(),Object(i["d"])("ul",k,[Object(i["h"])("li",E,[F,Object(i["h"])(N,{to:"/products",class:"btn btn_main w-100 mb-2"},{default:Object(i["M"])((function(){return[A]})),_:1})])]))])],512)}n("99af"),n("159b"),n("caad"),n("2532");var L=n("4897"),C=n("3a72"),S=n("1517"),N=n.n(S),M=n("c494"),I={name:"FavoritesOffcanvas.vue",data:function(){return{offcanvas:"",offcanvasProducts:[],offcanvasFavoritsList:[],newFavoritsData:[]}},components:{FavoriteIcon:M["a"]},watch:{offcanvasFavoritsList:function(){this.renderFavorite()}},emits:["resetFn"],methods:{openOffcanvas:function(t){this.offcanvasFavoritsList=t,this.offcanvas.show()},hideOffcanvas:function(){this.offcanvas.hide()},getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/products/all");this.$http.get(e).then((function(e){e.data.success?(t.offcanvasProducts=e.data.products,t.renderFavorite()):console.log("(錯誤-側欄)取得全部商品資料 res:",e)})).catch((function(t){console.log("(失敗-側欄)取得全部商品資料 res:"),console.dir(t)}))},renderFavorite:function(){var t=this;this.newFavoritsData=[],this.offcanvasProducts.forEach((function(e,n){t.offcanvasFavoritsList.includes(e.id)&&(t.offcanvasProducts[n].qty=1,t.newFavoritsData.push(e))}))},allDelFavorite:function(){this.$refs.favoritIcon.saveFavorit([]),this.offcanvasFavoritsList=[],this.newFavoritsData=[],C["a"].emit("favorits-number",this.newFavoritsData.length)},addCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart"),o={data:{product_id:t,qty:n}};this.loadingStatus=!0,this.$http.post(i,o).then((function(t){t.data.success?(Object(L["c"])(t.data.message,"success"),e.productQty=1,e.updateCartLength(),e.loadingStatus=!1):(Object(L["c"])(t.data.message,"error"),e.productQty=1,e.loadingStatus=!1)})).catch((function(t){console.log("(失敗-前台)加入購物車 err:"),console.dir(t),e.productQty=1,e.loadingStatus=!1}))},updateCartLength:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.$http.get(e).then((function(e){if(e.data.success){var n=0;t.cartsLength=e.data.data.carts.forEach((function(t){n+=t.qty})),t.cartsLength=n,C["a"].emit("cart-number",t.cartsLength)}else console.log("(錯誤-側欄)取得購物車數量 res:",e)})).catch((function(t){console.log("(失敗-側欄)取得購物車數量 err:"),console.dir(t)}))}},mounted:function(){var t=this;this.offcanvas=new N.a(this.$refs.offcanvas),this.getProducts(),C["a"].on("favorits-list",(function(e){t.offcanvasFavoritsList=e}))}};I.render=D;e["a"]=I},fd2d:function(t,e,n){"use strict";var i=n("7a23"),o={key:0,class:"row align-items-center"},s={class:"nav-item mb-3"},a={class:"row justify-content-center list-unstyled m-0"},c={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},r=Object(i["g"])(" 首頁 "),l={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},d=Object(i["g"])(" 關於我們 "),u={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},f=Object(i["g"])(" 線上商城 "),h={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},b=Object(i["g"])(" 常見問題 "),m=Object(i["g"])(" 住址：台北市信義區林口街38巷109號6樓 "),p=Object(i["h"])("br",null,null,-1),v=Object(i["g"])(" 客服電話：(02)2308264 / (02)8650610 "),g=Object(i["h"])("br",null,null,-1),O=Object(i["g"])(" 服務時間：09:00 ~ 13:00 / 15:00 ~ 19:00 "),j=Object(i["h"])("br",null,null,-1),_=Object(i["h"])("i",{class:"fab fa-github-square"},null,-1);function y(t,e,n,y,w,x){var k=Object(i["A"])("router-link"),E=Object(i["A"])("Font-awesome-icon");return Object(i["v"])(),Object(i["d"])("footer",{class:["p-3 text-center",w.colors.backgroundColor]},[n.moreMsg?(Object(i["v"])(),Object(i["d"])("small",o,[Object(i["h"])("nav",s,[Object(i["h"])("ul",a,[Object(i["h"])("li",c,[Object(i["h"])(k,{to:"/home",class:"nav-link px-2 text-secondary"},{default:Object(i["M"])((function(){return[r]})),_:1})]),Object(i["h"])("li",l,[Object(i["h"])(k,{to:"/about",class:"nav-link px-2 text-secondary"},{default:Object(i["M"])((function(){return[d]})),_:1})]),Object(i["h"])("li",u,[Object(i["h"])(k,{to:"/products",class:"nav-link px-2 text-secondary"},{default:Object(i["M"])((function(){return[f]})),_:1})]),Object(i["h"])("li",h,[Object(i["h"])(k,{to:"/QAndA",class:"nav-link px-2 text-secondary"},{default:Object(i["M"])((function(){return[b]})),_:1})])])]),Object(i["h"])("p",{class:["mb-3",w.colors.color]},[m,p,v,g,O,j],2)])):Object(i["e"])("",!0),Object(i["h"])("span",{class:["d-block fs-4 mb-1",w.colors.color]},[Object(i["h"])(E,{icon:["fab","facebook-square"],class:"mx-1 pointer_no_hover scale",title:"facabook 粉絲團"}),Object(i["h"])(E,{icon:["fab","instagram-square"],class:"mx-1 pointer_no_hover scale",title:"Instagram"}),Object(i["h"])(E,{icon:["fab","line"],class:"mx-1 pointer_no_hover scale",title:"@line 官方"}),_,Object(i["h"])(E,{icon:["fab","github-square"],class:"mx-1 pointer_no_hover scale",title:"github"})],2),Object(i["h"])("small",{class:["container mx-auto my-0",w.colors.color]}," Copyright © 2021 ToriHa 個人作業使用，無商業行為 ",2)],2)}var w={name:"Footer",props:["textColor","bgColor","moreMsg"],data:function(){return{colors:{color:"",backgroundColor:""}}},mounted:function(){this.colors.color=this.textColor,this.colors.backgroundColor=this.bgColor}};w.render=y;e["a"]=w}}]);
//# sourceMappingURL=chunk-4382383d.03c96473.js.map
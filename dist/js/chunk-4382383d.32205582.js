(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4382383d"],{1517:function(t,e,i){
/*!
  * Bootstrap offcanvas.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n(i("848f"),i("109e"),i("6ee1"),i("6a95"),i("302d"))})(0,(function(t,e,i,n,s){"use strict";function o(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var a=o(t),c=o(e),r=o(i),l=o(n),d=o(s);const u=1e3,f="transitionend",h=t=>null===t||void 0===t?""+t:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),b=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},v=t=>{const e=b(t);return e?document.querySelector(e):null},m=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(i))*u):0},p=t=>{t.dispatchEvent(new Event(f))},g=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),O=(t,e)=>{let i=!1;const n=5,s=e+n;function o(){i=!0,t.removeEventListener(f,o)}t.addEventListener(f,o),setTimeout(()=>{i||p(t)},s)},j=(t,e,i)=>{Object.keys(i).forEach(n=>{const s=i[n],o=e[n],a=o&&g(o)?"element":h(o);if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)})},y=t=>{if(!t)return!1;if(t.style&&t.parentNode&&t.parentNode.style){const e=getComputedStyle(t),i=getComputedStyle(t.parentNode);return"none"!==e.display&&"none"!==i.display&&"hidden"!==e.visibility}return!1},_=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),w=t=>t.offsetHeight,k=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},x=t=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()},F=t=>{x(()=>{const e=k();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}})},E=t=>{"function"===typeof t&&t()},A=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",D=".sticky-top",C=()=>{const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)},L=(t=C())=>{S(),N("body","paddingRight",e=>e+t),N(A,"paddingRight",e=>e+t),N(D,"marginRight",e=>e-t)},S=()=>{const t=document.body.style.overflow;t&&c["default"].setDataAttribute(document.body,"overflow",t),document.body.style.overflow="hidden"},N=(t,e,i)=>{const n=C();a["default"].find(t).forEach(t=>{if(t!==document.body&&window.innerWidth>t.clientWidth+n)return;const s=t.style[e],o=window.getComputedStyle(t)[e];c["default"].setDataAttribute(t,e,s),t.style[e]=i(Number.parseFloat(o))+"px"})},M=()=>{I("body","overflow"),I("body","paddingRight"),I(A,"paddingRight"),I(D,"marginRight")},I=(t,e)=>{a["default"].find(t).forEach(t=>{const i=c["default"].getDataAttribute(t,e);"undefined"===typeof i?t.style.removeProperty(e):(c["default"].removeDataAttribute(t,e),t.style[e]=i)})},$={isVisible:!0,isAnimated:!1,rootElement:document.body,clickCallback:null},q={isVisible:"boolean",isAnimated:"boolean",rootElement:"element",clickCallback:"(function|null)"},T="backdrop",P="modal-backdrop",R="fade",Q="show",V="mousedown.bs."+T;class W{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&w(this._getElement()),this._getElement().classList.add(Q),this._emulateAnimation(()=>{E(t)})):E(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(Q),this._emulateAnimation(()=>{this.dispose(),E(t)})):E(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=P,this._config.isAnimated&&t.classList.add(R),this._element=t}return this._element}_getConfig(t){return t={...$,..."object"===typeof t?t:{}},t.rootElement=t.rootElement||document.body,j(T,t,q),t}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),l["default"].on(this._getElement(),V,()=>{E(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(l["default"].off(this._element,V),this._getElement().parentNode.removeChild(this._element),this._isAppended=!1)}_emulateAnimation(t){if(!this._config.isAnimated)return void E(t);const e=m(this._getElement());l["default"].one(this._getElement(),"transitionend",()=>E(t)),O(this._getElement(),e)}}const J="offcanvas",z="bs.offcanvas",U="."+z,B=".data-api",H=`load${U}${B}`,G="Escape",K={backdrop:!0,keyboard:!0,scroll:!1},X={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Y="show",Z=".offcanvas.show",tt="show"+U,et="shown"+U,it="hide"+U,nt="hidden"+U,st="focusin"+U,ot=`click${U}${B}`,at="click.dismiss"+U,ct="keydown.dismiss"+U,rt='[data-bs-dismiss="offcanvas"]',lt='[data-bs-toggle="offcanvas"]';class dt extends d["default"]{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._addEventListeners()}static get NAME(){return J}static get Default(){return K}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=l["default"].trigger(this._element,tt,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(L(),this._enforceFocusOnElement(this._element)),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Y);const i=()=>{l["default"].trigger(this._element,et,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown)return;const t=l["default"].trigger(this._element,it);if(t.defaultPrevented)return;l["default"].off(document,st),this._element.blur(),this._isShown=!1,this._element.classList.remove(Y),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||M(),l["default"].trigger(this._element,nt)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),super.dispose(),l["default"].off(document,st)}_getConfig(t){return t={...K,...c["default"].getDataAttributes(this._element),..."object"===typeof t?t:{}},j(J,t,X),t}_initializeBackDrop(){return new W({isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_enforceFocusOnElement(t){l["default"].off(document,st),l["default"].on(document,st,e=>{document===e.target||t===e.target||t.contains(e.target)||t.focus()}),t.focus()}_addEventListeners(){l["default"].on(this._element,at,rt,()=>this.hide()),l["default"].on(this._element,ct,t=>{this._config.keyboard&&t.key===G&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=r["default"].get(this,z)||new dt(this,"object"===typeof t?t:{});if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return l["default"].on(document,ot,lt,(function(t){const e=v(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),_(this))return;l["default"].one(e,nt,()=>{y(this)&&this.focus()});const i=a["default"].findOne(Z);i&&i!==e&&dt.getInstance(i).hide();const n=r["default"].get(e,z)||new dt(e);n.toggle(this)})),l["default"].on(window,H,()=>{a["default"].find(Z).forEach(t=>(r["default"].get(t,z)||new dt(t)).show())}),F(dt),dt}))},"159b":function(t,e,i){var n=i("da84"),s=i("fdbc"),o=i("17c2"),a=i("9112");for(var c in s){var r=n[c],l=r&&r.prototype;if(l&&l.forEach!==o)try{a(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,s=i("a640"),o=s("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,i){"use strict";var n=i("23e7"),s=i("5a34"),o=i("1d80"),a=i("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(o(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"3a72":function(t,e,i){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,i){var n=t.get(e);n&&n.push(i)||t.set(e,[i])},off:function(e,i){var n=t.get(e);n&&n.splice(n.indexOf(i)>>>0,1)},emit:function(e,i){(t.get(e)||[]).slice().map((function(t){t(i)})),(t.get("*")||[]).slice().map((function(t){t(e,i)}))}}};e["a"]=n()},"44e7":function(t,e,i){var n=i("861d"),s=i("c6b6"),o=i("b622"),a=o("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==s(t))}},"5a34":function(t,e,i){var n=i("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},a434:function(t,e,i){"use strict";var n=i("23e7"),s=i("23cb"),o=i("a691"),a=i("50c4"),c=i("7b0b"),r=i("65f0"),l=i("8418"),d=i("1dde"),u=d("splice"),f=Math.max,h=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var i,n,d,u,m,p,g=c(this),O=a(g.length),j=s(t,O),y=arguments.length;if(0===y?i=n=0:1===y?(i=0,n=O-j):(i=y-2,n=h(f(o(e),0),O-j)),O+i-n>b)throw TypeError(v);for(d=r(g,n),u=0;u<n;u++)m=j+u,m in g&&l(d,u,g[m]);if(d.length=n,i<n){for(u=j;u<O-n;u++)m=u+n,p=u+i,m in g?g[p]=g[m]:delete g[p];for(u=O;u>O-n+i;u--)delete g[u-1]}else if(i>n)for(u=O-n;u>j;u--)m=u+n-1,p=u+i-1,m in g?g[p]=g[m]:delete g[p];for(u=0;u<i;u++)g[u+j]=arguments[u+2];return g.length=O-n+i,d}})},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,i){var n=i("b622"),s=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[s]=!1,"/./"[t](e)}catch(n){}}return!1}},c494:function(t,e,i){"use strict";var n=i("7a23"),s=Object(n["h"])("i",{class:"bi bi-heart-fill fs-4"},null,-1),o=Object(n["h"])("i",{class:"bi bi-heart-fill fs-4"},null,-1);function a(t,e,i,a,c,r){return c.isFavorite?(Object(n["v"])(),Object(n["d"])(n["a"],{key:0},[Object(n["h"])("input",{type:"checkbox",id:i.idData,class:"btn-check",autocomplete:"off",checked:""},null,8,["id"]),Object(n["h"])("label",{for:i.idData,class:"favorite_icon",onClick:e[1]||(e[1]=function(){return r.addFavoriteItem&&r.addFavoriteItem.apply(r,arguments)})},[s],8,["for"])],64)):(Object(n["v"])(),Object(n["d"])(n["a"],{key:1},[Object(n["h"])("input",{type:"checkbox",id:i.idData,class:"btn-check",autocomplete:"off"},null,8,["id"]),Object(n["h"])("label",{for:i.idData,class:"favorite_icon",onClick:e[2]||(e[2]=function(){return r.addFavoriteItem&&r.addFavoriteItem.apply(r,arguments)})},[o],8,["for"])],64))}i("a434"),i("caad"),i("2532");var c=i("3a72"),r={name:"Favorite",props:["idData"],data:function(){return{isFavorite:!1,favoritsList:[]}},watch:{idData:function(){this.isFavorite=this.checkFavorStatus()},favoritsList:function(){this.isFavorite=this.checkFavorStatus()}},methods:{saveFavorit:function(t){var e=JSON.stringify(t);localStorage.setItem("favoritData",e)},getFavorites:function(){this.favoritsList=JSON.parse(localStorage.getItem("favoritData"))||[]},updateFavoritsNum:function(t){c["a"].emit("favorits-number",t.length)},addFavoriteItem:function(){this.getFavorites();var t=this.checkFavorStatus();t?(this.favoritsList.splice(this.favoritsList.indexOf(this.idData),1),this.saveFavorit(this.favoritsList),this.updateFavoritsNum(this.favoritsList),c["a"].emit("favorits-list",JSON.parse(localStorage.getItem("favoritData"))),this.isFavorite=t):(this.favoritsList.push(this.idData),this.saveFavorit(this.favoritsList),this.updateFavoritsNum(this.favoritsList),this.isFavorite=t)},checkFavorStatus:function(){return this.favoritsList.includes(this.idData)}},mounted:function(){var t=this;this.getFavorites(),this.isFavorite=this.checkFavorStatus(),c["a"].on("favorits-btn-status",(function(){return t.getFavorites()}))}};r.render=a;e["a"]=r},caad:function(t,e,i){"use strict";var n=i("23e7"),s=i("4d64").includes,o=i("44d2");n({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cfdd:function(t,e,i){"use strict";var n=i("7a23"),s={class:"offcanvas offcanvas-end shadow-lg overflow-x px-0 m-0","data-bs-scroll":"true","data-bs-backdrop":"true",tabindex:"-1",ref:"offcanvas"},o={class:"offcanvas-header pe-0"},a={class:"row align-items-center justify-content-between w-100"},c={class:"col-10"},r={class:"fs-5"},l=Object(n["g"])(" 最愛收藏 "),d=Object(n["h"])("div",{class:"col-2 text-end"},[Object(n["h"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),u={class:"offcanvas-body"},f={class:"list-unstyled px-1 mb-5"},h={class:"col-2 col-sm-1 p-0"},b={class:"col-1 p-0 ms-2 me-1 d-none d-sm-block"},v={class:"col-5 textStyle_rwd_2 py-0 px-1"},m=Object(n["h"])("br",null,null,-1),p={class:"col-3 col-sm-2 px-1"},g={class:"col-2 p-0 ps-sm-1"},O=Object(n["h"])("i",{class:"bi bi-cart-plus-fill"},null,-1),j={class:"row flex-row-reverse"},y={class:"col-12 col-md-6"},_=Object(n["g"])(" 我要結帳 "),w={class:"col-12 col-md-6"},k=Object(n["g"])(" 繼續選購 "),x={key:1,class:"list-unstyled px-1 mb-5"},F={class:"text-center"},E=Object(n["h"])("p",{class:"mb-3 fs-5"}," 還沒有將喜歡的商品加入收藏嗎？ ",-1),A=Object(n["g"])(" 趕快去選購 ");function D(t,e,i,D,C,L){var S=Object(n["A"])("Loading"),N=Object(n["A"])("FavoriteIcon"),M=Object(n["A"])("router-link");return Object(n["v"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(S,{status:C.loadingStatus},null,8,["status"]),Object(n["h"])("div",s,[Object(n["h"])("div",o,[Object(n["h"])("div",a,[Object(n["h"])("div",c,[Object(n["h"])("h3",r,[l,Object(n["h"])("span",null,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e[1]||(e[1]=function(){return L.allDelFavorite&&L.allDelFavorite.apply(L,arguments)}),disabled:C.newFavoritsData.length<1}," 清空收藏 ",8,["disabled"])])])]),d])]),Object(n["h"])("div",u,[C.offcanvasFavoritsList.length>0?(Object(n["v"])(),Object(n["d"])(n["a"],{key:0},[Object(n["h"])("ul",f,[(Object(n["v"])(!0),Object(n["d"])(n["a"],null,Object(n["z"])(C.newFavoritsData,(function(e){return Object(n["v"])(),Object(n["d"])("li",{key:e.id,class:"row justify-content-center align-items-center\n              mb-2 pb-2 border-bottom"},[Object(n["h"])("span",h,[Object(n["h"])(N,{ref:"favoritIcon",idData:e.id},null,8,["idData"])]),Object(n["h"])("span",b,[Object(n["h"])("img",{src:e.imageUrl,alt:"圖片",class:"w-100"},null,8,["src"])]),Object(n["h"])("span",v,[Object(n["g"])(Object(n["D"])(e.title)+" ",1),m,Object(n["g"])(" $"+Object(n["D"])(t.$filters.currency(e.price))+" / "+Object(n["D"])(e.unit),1)]),Object(n["h"])("span",p,[Object(n["N"])(Object(n["h"])("input",{ref:"numValue",type:"number",min:"1",class:"form-control w-100 text-center\n                    py-1 text-center","onUpdate:modelValue":function(t){return e.qty=t}},null,8,["onUpdate:modelValue"]),[[n["J"],e.qty,void 0,{number:!0}]])]),Object(n["h"])("span",g,[Object(n["h"])("span",{class:"btn btn_outline_green fs-4",onClick:function(t){return L.addCart(e.id,e.qty)}},[O],8,["onClick"])])])})),128))]),Object(n["h"])("div",j,[Object(n["h"])("div",y,[Object(n["h"])(M,{to:"/cart",class:"btn btn_main w-100 mb-2"},{default:Object(n["M"])((function(){return[_]})),_:1})]),Object(n["h"])("div",w,[Object(n["h"])(M,{to:"/products",class:"btn btn-outline-custom-primary w-100 mb-2"},{default:Object(n["M"])((function(){return[k]})),_:1})])])],64)):(Object(n["v"])(),Object(n["d"])("ul",x,[Object(n["h"])("li",F,[E,Object(n["h"])(M,{to:"/products",class:"btn btn_main w-100 mb-2"},{default:Object(n["M"])((function(){return[A]})),_:1})])]))])],512)],64)}i("99af"),i("159b"),i("caad"),i("2532");var C=i("4897"),L=i("3a72"),S=i("1517"),N=i.n(S),M=i("c494"),I={name:"FavoritesOffcanvas.vue",data:function(){return{loadingStatus:!1,offcanvas:"",offcanvasProducts:[],offcanvasFavoritsList:[],newFavoritsData:[]}},components:{FavoriteIcon:M["a"]},watch:{offcanvasFavoritsList:function(){this.renderFavorite()}},emits:["resetFn"],methods:{openOffcanvas:function(t){this.offcanvasFavoritsList=t,this.offcanvas.show()},hideOffcanvas:function(){this.offcanvas.hide()},getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/products/all");this.$http.get(e).then((function(e){e.data.success?(t.offcanvasProducts=e.data.products,t.renderFavorite()):console.log("(錯誤-側欄)取得全部商品資料 res:",e)})).catch((function(t){console.log("(失敗-側欄)取得全部商品資料 res:"),console.dir(t)}))},renderFavorite:function(){var t=this;this.newFavoritsData=[],this.offcanvasProducts.forEach((function(e,i){t.offcanvasFavoritsList.includes(e.id)&&(t.offcanvasProducts[i].qty=1,t.newFavoritsData.push(e))})),L["a"].emit("favorits-btn-status")},allDelFavorite:function(){this.$refs.favoritIcon.saveFavorit([]),this.offcanvasFavoritsList=[],this.newFavoritsData=[],L["a"].emit("favorits-number",this.newFavoritsData.length)},addCart:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.loadingStatus=!0;var s={data:{product_id:t,qty:i}};this.$http.post(n,s).then((function(t){t.data.success?(Object(C["c"])(t.data.message,"success"),e.productQty=1,e.updateCartLength(),e.loadingStatus=!1):(Object(C["c"])(t.data.message,"error"),e.productQty=1,e.loadingStatus=!1)})).catch((function(t){console.log("(失敗-測欄)加入購物車 err:"),console.dir(t),e.productQty=1,e.loadingStatus=!1}))},updateCartLength:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.$http.get(e).then((function(e){if(e.data.success){var i=0;t.cartsLength=e.data.data.carts.forEach((function(t){i+=t.qty})),t.cartsLength=i,L["a"].emit("cart-number",t.cartsLength)}else console.log("(錯誤-側欄)取得購物車數量 res:",e)})).catch((function(t){console.log("(失敗-側欄)取得購物車數量 err:"),console.dir(t)}))}},mounted:function(){var t=this;this.offcanvas=new N.a(this.$refs.offcanvas),this.getProducts(),L["a"].on("favorits-list",(function(e){t.offcanvasFavoritsList=e}))}};I.render=D;e["a"]=I},fd2d:function(t,e,i){"use strict";var n=i("7a23"),s={key:0,class:"row align-items-center"},o={class:"nav-item mb-3"},a={class:"row justify-content-center list-unstyled m-0"},c={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},r=Object(n["g"])(" 首頁 "),l={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},d=Object(n["g"])(" 關於我們 "),u={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},f=Object(n["g"])(" 線上商城 "),h={class:"col-6 col-md-3 col-lg-2 col-xxl-1 scale"},b=Object(n["g"])(" 常見問題 "),v=Object(n["g"])(" 住址：台北市信義區林口街38巷109號6樓 "),m=Object(n["h"])("br",null,null,-1),p=Object(n["g"])(" 客服電話：(02)2308264 / (02)8650610 "),g=Object(n["h"])("br",null,null,-1),O=Object(n["g"])(" 服務時間：09:00 ~ 13:00 / 15:00 ~ 19:00 "),j=Object(n["h"])("br",null,null,-1),y=Object(n["h"])("i",{class:"fab fa-github-square"},null,-1);function _(t,e,i,_,w,k){var x=Object(n["A"])("router-link"),F=Object(n["A"])("Font-awesome-icon");return Object(n["v"])(),Object(n["d"])("footer",{class:["p-3 text-center",w.colors.backgroundColor]},[i.moreMsg?(Object(n["v"])(),Object(n["d"])("small",s,[Object(n["h"])("nav",o,[Object(n["h"])("ul",a,[Object(n["h"])("li",c,[Object(n["h"])(x,{to:"/",class:"nav-link px-2 text-secondary"},{default:Object(n["M"])((function(){return[r]})),_:1})]),Object(n["h"])("li",l,[Object(n["h"])(x,{to:"/about",class:"nav-link px-2 text-secondary"},{default:Object(n["M"])((function(){return[d]})),_:1})]),Object(n["h"])("li",u,[Object(n["h"])(x,{to:"/products",class:"nav-link px-2 text-secondary"},{default:Object(n["M"])((function(){return[f]})),_:1})]),Object(n["h"])("li",h,[Object(n["h"])(x,{to:"/QAndA",class:"nav-link px-2 text-secondary"},{default:Object(n["M"])((function(){return[b]})),_:1})])])]),Object(n["h"])("p",{class:["mb-3",w.colors.color]},[v,m,p,g,O,j],2)])):Object(n["e"])("",!0),Object(n["h"])("span",{class:["d-block fs-4 mb-1",w.colors.color]},[Object(n["h"])(F,{icon:["fab","facebook-square"],class:"mx-1 pointer_no_hover scale",title:"facabook 粉絲團"}),Object(n["h"])(F,{icon:["fab","instagram-square"],class:"mx-1 pointer_no_hover scale",title:"Instagram"}),Object(n["h"])(F,{icon:["fab","line"],class:"mx-1 pointer_no_hover scale",title:"@line 官方"}),y,Object(n["h"])(F,{icon:["fab","github-square"],class:"mx-1 pointer_no_hover scale",title:"github"})],2),Object(n["h"])("small",{class:["container mx-auto my-0",w.colors.color]}," Copyright © 2021 ToriHa 個人作業使用，無商業行為 ",2)],2)}var w={name:"Footer",props:["textColor","bgColor","moreMsg"],data:function(){return{colors:{color:"",backgroundColor:""}}},mounted:function(){this.colors.color=this.textColor,this.colors.backgroundColor=this.bgColor}};w.render=_;e["a"]=w}}]);
//# sourceMappingURL=chunk-4382383d.32205582.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68bc7ea4"],{"057f":function(t,e,r){var n=r("fc6a"),c=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?a(t):c(n(t))}},"159b":function(t,e,r){var n=r("da84"),c=r("fdbc"),o=r("17c2"),i=r("9112");for(var a in c){var s=n[a],u=s&&s.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,c=r("a640"),o=c("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),c=r("b622"),o=r("2d00"),i=c("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3a72":function(t,e,r){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,r){var n=t.get(e);n&&n.push(r)||t.set(e,[r])},off:function(e,r){var n=t.get(e);n&&n.splice(n.indexOf(r)>>>0,1)},emit:function(e,r){(t.get(e)||[]).slice().map((function(t){t(r)})),(t.get("*")||[]).slice().map((function(t){t(e,r)}))}}};e["a"]=n()},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),c=r("5899"),o="["+c+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,e,r){var n=r("861d"),c=r("e8b5"),o=r("b622"),i=o("species");t.exports=function(t,e){var r;return c(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7156:function(t,e,r){var n=r("861d"),c=r("d2bb");t.exports=function(t,e,r){var o,i;return c&&"function"==typeof(o=e.constructor)&&o!==r&&n(i=o.prototype)&&i!==r.prototype&&c(t,i),t}},"746f":function(t,e,r){var n=r("428f"),c=r("5135"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),c=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?c.f(t,i,o(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),c=r("d039"),o=r("e8b5"),i=r("861d"),a=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),b=r("2d00"),p=d("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",m=b>=51||!c((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=f("concat"),y=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},O=!m||!v;n({target:"Array",proto:!0,forced:O},{concat:function(t){var e,r,n,c,o,i=a(this),f=l(i,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],y(o)){if(c=s(o.length),d+c>h)throw TypeError(g);for(r=0;r<c;r++,d++)r in o&&u(f,d,o[r])}else{if(d>=h)throw TypeError(g);u(f,d++,o)}return f.length=d,f}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d066"),i=r("c430"),a=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),h=r("7b0b"),g=r("fc6a"),m=r("c04e"),v=r("5c6c"),y=r("7c73"),O=r("df75"),j=r("241c"),w=r("057f"),x=r("7418"),S=r("06cf"),P=r("9bf2"),I=r("d1e7"),N=r("9112"),E=r("6eeb"),_=r("5692"),k=r("f772"),C=r("d012"),A=r("90e3"),L=r("b622"),T=r("e538"),q=r("746f"),$=r("d44e"),M=r("69f3"),U=r("b727").forEach,B=k("hidden"),F="Symbol",H="prototype",V=L("toPrimitive"),J=M.set,R=M.getterFor(F),G=Object[H],K=c.Symbol,X=o("JSON","stringify"),Y=S.f,D=P.f,Q=w.f,W=I.f,z=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=c.QObject,ct=!nt||!nt[H]||!nt[H].findChild,ot=a&&l((function(){return 7!=y(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Y(G,e);n&&delete G[e],D(t,e,r),n&&t!==G&&D(G,e,n)}:D,it=function(t,e){var r=z[t]=y(K[H]);return J(r,{type:F,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},st=function(t,e,r){t===G&&st(Z,e,r),p(t);var n=m(e,!0);return p(r),f(z,n)?(r.enumerable?(f(t,B)&&t[B][n]&&(t[B][n]=!1),r=y(r,{enumerable:v(0,!1)})):(f(t,B)||D(t,B,v(1,{})),t[B][n]=!0),ot(t,n,r)):D(t,n,r)},ut=function(t,e){p(t);var r=g(e),n=O(r).concat(pt(r));return U(n,(function(e){a&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=m(t,!0),r=W.call(this,e);return!(this===G&&f(z,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(z,e)||f(this,B)&&this[B][e])||r)},dt=function(t,e){var r=g(t),n=m(e,!0);if(r!==G||!f(z,n)||f(Z,n)){var c=Y(r,n);return!c||!f(z,n)||f(r,B)&&r[B][n]||(c.enumerable=!0),c}},bt=function(t){var e=Q(g(t)),r=[];return U(e,(function(t){f(z,t)||f(C,t)||r.push(t)})),r},pt=function(t){var e=t===G,r=Q(e?Z:g(t)),n=[];return U(r,(function(t){!f(z,t)||e&&!f(G,t)||n.push(z[t])})),n};if(s||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===G&&r.call(Z,t),f(this,B)&&f(this[B],e)&&(this[B][e]=!1),ot(this,e,v(1,t))};return a&&ct&&ot(G,e,{configurable:!0,set:r}),it(e,t)},E(K[H],"toString",(function(){return R(this).tag})),E(K,"withoutSetter",(function(t){return it(A(t),t)})),I.f=ft,P.f=st,S.f=dt,j.f=w.f=bt,x.f=pt,T.f=function(t){return it(L(t),t)},a&&(D(K[H],"description",{configurable:!0,get:function(){return R(this).description}}),i||E(G,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:K}),U(O(rt),(function(t){q(t)})),n({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=K(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(h(t))}}),X){var ht=!s||l((function(){var t=K();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,c=[t],o=1;while(arguments.length>o)c.push(arguments[o++]);if(n=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),c[1]=e,X.apply(null,c)}})}K[H][V]||N(K[H],V,K[H].valueOf),$(K,F),C[B]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),c=r("da84"),o=r("94ca"),i=r("6eeb"),a=r("5135"),s=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),b=r("241c").f,p=r("06cf").f,h=r("9bf2").f,g=r("58a8").trim,m="Number",v=c[m],y=v.prototype,O=s(d(y))==m,j=function(t){var e,r,n,c,o,i,a,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+u}for(o=u.slice(2),i=o.length,a=0;a<i;a++)if(s=o.charCodeAt(a),s<48||s>c)return NaN;return parseInt(o,n)}return+u};if(o(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(O?f((function(){y.valueOf.call(r)})):s(r)!=m)?u(new v(j(e)),r,x):j(e)},S=n?b(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;S.length>P;P++)a(v,w=S[P])&&!a(x,w)&&h(x,w,p(v,w));x.prototype=y,y.constructor=x,i(c,m,x)}},b727:function(t,e,r){var n=r("0366"),c=r("44ad"),o=r("7b0b"),i=r("50c4"),a=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,d=7==t,b=5==t||f;return function(p,h,g,m){for(var v,y,O=o(p),j=c(O),w=n(h,g,3),x=i(j.length),S=0,P=m||a,I=e?P(p,x):r||d?P(p,0):void 0;x>S;S++)if((b||S in j)&&(v=j[S],y=w(v,S,O),t))if(e)I[S]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:s.call(I,v)}else switch(t){case 4:return!1;case 7:s.call(I,v)}return f?-1:u||l?l:I}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d2f1:function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var n=r("7a23"),c={class:"bg-white"},o={class:"container"},i={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"py-4"},a={class:"breadcrumb m-0"},s={class:"breadcrumb-item"},u=Object(n["g"])("首頁"),l={class:"breadcrumb-item"},f=Object(n["g"])(" 線上商城 "),d={class:"breadcrumb-item active","aria-current":"page"},b={class:"row mb-1 pb-5 align-items-center"},p={class:"col-lg-6 col-xl-5"},h={class:"col-12 flex-nowrap d-xxl-none py-1 overflow-auto"},g={class:"row flex-nowrap m-0"},m={class:"col-2 pe-1"},v={class:"col-1 d-none d-xxl-block img_view p-1 overflow-auto"},y={class:"col-lg-6 col-xl-7 col-xxl-6 py-2 ps-xl-3 ps-xxl-4"},O={class:"mb-3"},j={class:"border rounded text-dark px-3 py-1"},w={class:"text-end"},x={class:"fst-italic text-decoration-line-through text-gray"},S={class:"h3 fw-bold mb-2"},P={class:"row align-items-center flex-row-reverse\n              mx-0 mb-2"},I={class:"col-6 p-0"},N={class:"input-group"},E={class:"row align-items-center flex-row-reverse mx-0 mb-2"},_={class:"col-6 p-0"},k=Object(n["h"])("span",{class:"col-2 px-2 btn text-end"},[Object(n["h"])("i",{class:"bi bi-heart-fill btn_red"})],-1),C={class:"text-danger"},A={key:0},L={key:1},T={class:"row py-5 m-0"},q={class:"col-10 my-2 py-5 container text-center bg-white"},$=Object(n["h"])("h2",{class:"pb-2 fw-bold text-primary"},"商品說明",-1),M={class:"row justify-content-center"},U={class:"col-11 col-md-9 col-lg-7"};function B(t,e,r,B,F,H){var V=Object(n["y"])("Loading"),J=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(V,{status:F.loadingStatus},null,8,["status"]),Object(n["h"])("section",c,[Object(n["h"])("section",o,[Object(n["h"])("nav",i,[Object(n["h"])("ol",a,[Object(n["h"])("li",s,[Object(n["h"])(J,{to:"/",class:"link-secondary"},{default:Object(n["K"])((function(){return[u]})),_:1})]),Object(n["h"])("li",l,[Object(n["h"])(J,{to:"/products",class:"link-secondary"},{default:Object(n["K"])((function(){return[f]})),_:1})]),Object(n["h"])("li",d,Object(n["B"])(F.tempProduct.title),1)])]),Object(n["h"])("section",b,[Object(n["h"])("div",p,[Object(n["h"])("img",{class:"rounded-2 w-100",src:F.productImg,alt:F.tempProduct.title},null,8,["src","alt"]),Object(n["h"])("div",h,[Object(n["h"])("div",g,[Object(n["h"])("div",m,[Object(n["h"])("img",{class:"w-100 rounded pointer",src:F.tempProduct.imageUrl,alt:F.tempProduct.title,onClick:e[1]||(e[1]=function(t){return H.changeImg(F.tempProduct.imageUrl)})},null,8,["src","alt"])]),(Object(n["t"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(F.tempProduct.imagesUrl,(function(t,e){return Object(n["t"])(),Object(n["d"])("div",{class:"col-2 pe-1",key:"附圖_".concat(e)},[Object(n["h"])("img",{class:"w-100 p-0 rounded pointer",src:t,alt:"附圖_".concat(e),onClick:function(e){return H.changeImg(t)}},null,8,["src","alt","onClick"])])})),128))])])]),Object(n["h"])("div",v,[Object(n["h"])("img",{class:"w-100 mb-2 p-0 rounded-1 pointer",src:F.tempProduct.imageUrl,alt:F.tempProduct.title,onClick:e[2]||(e[2]=function(t){return H.changeImg(F.tempProduct.imageUrl)})},null,8,["src","alt"]),(Object(n["t"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(F.tempProduct.imagesUrl,(function(t,e){return Object(n["t"])(),Object(n["d"])("img",{key:"附圖_".concat(e),class:"w-100 mb-2 p-0 rounded-1 pointer",src:t,alt:"附圖_".concat(e),onClick:function(e){return H.changeImg(t)}},null,8,["src","alt","onClick"])})),128))]),Object(n["h"])("div",y,[Object(n["h"])("h1",O,Object(n["B"])(F.tempProduct.title),1),Object(n["h"])("span",j,Object(n["B"])(F.tempProduct.category),1),Object(n["h"])("p",{class:"p-4 my-4 bg-primary-100",innerHTML:F.tempProduct.description},null,8,["innerHTML"]),Object(n["h"])("div",w,[Object(n["h"])("span",x," 原價 $"+Object(n["B"])(t.$filters.currency(F.tempProduct.origin_price))+" / "+Object(n["B"])(F.tempProduct.unit),1),Object(n["h"])("p",S," 售價 $"+Object(n["B"])(t.$filters.currency(F.tempProduct.price))+" / "+Object(n["B"])(F.tempProduct.unit),1),Object(n["h"])("div",P,[Object(n["h"])("div",I,[Object(n["h"])("div",N,[Object(n["h"])("button",{type:"button",class:"w-25 btn_light_green text-center border",onClick:e[3]||(e[3]=function(t){return H.changeNum("reduce")})}," - "),Object(n["L"])(Object(n["h"])("input",{type:"number",class:"form-control text-center m-0 p-1\n                      border-0 border-top border-bottom","onUpdate:modelValue":e[4]||(e[4]=function(t){return F.qty=t}),min:"1"},null,512),[[n["H"],F.qty,void 0,{number:!0}]]),Object(n["h"])("button",{type:"button",class:"w-25 btn_light_green text-center border",onClick:e[5]||(e[5]=function(t){return H.changeNum("add")})}," + ")])])]),Object(n["h"])("div",E,[Object(n["h"])("div",_,[Object(n["h"])("button",{type:"button",class:"btn btn_main py-1 w-100",onClick:e[6]||(e[6]=function(){return H.addCart&&H.addCart.apply(H,arguments)})},"加入購物車")]),k]),Object(n["h"])("p",C,["募款專案"===F.tempProduct.category?(Object(n["t"])(),Object(n["d"])("span",A," 募款專案依專案內容不同，金額將全數捐至專案相關之機構。 ")):(Object(n["t"])(),Object(n["d"])("span",L," 活動及產品收益將提撥 10% 至環境保育或野生動物救助之相關機構。 "))])])])])])]),Object(n["h"])("section",T,[Object(n["h"])("section",q,[$,Object(n["h"])("div",M,[Object(n["h"])("span",U,[Object(n["h"])("p",{innerHTML:F.tempProduct.content},null,8,["innerHTML"])])])])])],64)}r("a9e3"),r("99af"),r("159b");var F=r("4897"),H=r("3a72"),V={name:"Product",data:function(){return{loadingStatus:!1,productId:"",productImg:"",tempProduct:{},qty:Number,cartsLength:Number}},methods:{getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/product/").concat(this.productId);this.loadingStatus=!0,this.$http.get(e).then((function(e){e.data.success?(console.log("(成功-前台)取得單一商品 res:",e),t.tempProduct=e.data.product,t.productImg=t.tempProduct.imageUrl,t.loadingStatus=!1):(console.log("(錯誤-前台)取得單一商品 res:",e),t.loadingStatus=!1)})).catch((function(e){console.log("(失敗-前台)取得單一商品 res:"),console.dir(e),t.loadingStatus=!1}))},changeNum:function(t){if("reduce"===t){if(this.qty<2)return void Object(F["c"])("數量不可少於 1","error");this.qty-=1}else"add"===t&&(this.qty+=1)},addCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart"),r={data:{product_id:this.productId,qty:this.qty}};this.loadingStatus=!0,this.$http.post(e,r).then((function(e){e.data.success?(console.log("(成功-前台)加入購物車 res:",e),Object(F["c"])(e.data.message,"success"),t.qty=1,t.updateCartLength(),t.loadingStatus=!1):(console.log("(錯誤-前台)加入購物車 res:",e),Object(F["c"])(e.data.message,"error"),t.qty=1,t.loadingStatus=!1)})).catch((function(e){console.log("(失敗-前台)加入購物車 err:"),console.dir(e),t.qty=1,t.loadingStatus=!1}))},updateCartLength:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.$http.get(e).then((function(e){if(e.data.success){var r=0;t.cartsLength=e.data.data.carts.forEach((function(t){r+=t.qty})),t.cartsLength=r,H["a"].emit("cart-number",t.cartsLength)}else console.log("(錯誤-單品)取得購物車數量 res:",e)})).catch((function(t){console.log("(失敗-單品)取得購物車數量 err:"),console.dir(t)}))},changeImg:function(t){this.productImg=t}},created:function(){this.productId=this.$route.params.id,this.getProduct(this.productId),this.qty=1}};V.render=B;e["default"]=V},e01a:function(t,e,r){"use strict";var n=r("23e7"),c=r("83ab"),o=r("da84"),i=r("5135"),a=r("861d"),s=r("9bf2").f,u=r("e893"),l=o.Symbol;if(c&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var b=d.prototype=l.prototype;b.constructor=d;var p=b.toString,h="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(i(f,t))return"";var r=h?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-68bc7ea4.48a0ae81.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b12dc3e"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"159b":function(t,e,r){var a=r("da84"),c=r("fdbc"),n=r("17c2"),i=r("9112");for(var o in c){var s=a[o],u=s&&s.prototype;if(u&&u.forEach!==n)try{i(u,"forEach",n)}catch(l){u.forEach=n}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,c=r("a640"),n=c("forEach");t.exports=n?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var a=r("d039"),c=r("b622"),n=r("2d00"),i=c("species");t.exports=function(t){return n>=51||!a((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,r){"use strict";var a=r("23e7"),c=r("5a34"),n=r("1d80"),i=r("ab13");a({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(n(this)).indexOf(c(t),arguments.length>1?arguments[1]:void 0)}})},"2fbc":function(t,e,r){"use strict";var a=r("7a23"),c={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},n={class:"breadcrumb m-0"},i={class:"breadcrumb-item active","aria-current":"page"};function o(t,e,r,o,s,u){var l=Object(a["A"])("router-link");return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("nav",c,[Object(a["h"])("ol",n,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(r.breadcrumbData.previous,(function(t,e){return Object(a["v"])(),Object(a["d"])("li",{key:"麵包屑_".concat(e),class:"breadcrumb-item"},[Object(a["h"])(l,{to:t.url,class:"link-secondary"},{default:Object(a["M"])((function(){return[Object(a["g"])(Object(a["D"])(t.title),1)]})),_:2},1032,["to"])])})),128)),Object(a["h"])("li",i,Object(a["D"])(r.breadcrumbData.purpose),1)])])])}var s={name:"Breadcrumb.vue",props:["breadcrumbData"]};s.render=o;e["a"]=s},"3a72":function(t,e,r){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,r){var a=t.get(e);a&&a.push(r)||t.set(e,[r])},off:function(e,r){var a=t.get(e);a&&a.splice(a.indexOf(r)>>>0,1)},emit:function(e,r){(t.get(e)||[]).slice().map((function(t){t(r)})),(t.get("*")||[]).slice().map((function(t){t(e,r)}))}}};e["a"]=a()},"44e7":function(t,e,r){var a=r("861d"),c=r("c6b6"),n=r("b622"),i=n("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==c(t))}},"466d":function(t,e,r){"use strict";var a=r("d784"),c=r("825a"),n=r("50c4"),i=r("1d80"),o=r("8aa5"),s=r("14c3");a("match",1,(function(t,e,r){return[function(e){var r=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r):new RegExp(e)[t](String(r))},function(t){var a=r(e,t,this);if(a.done)return a.value;var i=c(t),u=String(this);if(!i.global)return s(i,u);var l=i.unicode;i.lastIndex=0;var d,f=[],h=0;while(null!==(d=s(i,u))){var b=String(d[0]);f[h]=b,""===b&&(i.lastIndex=o(u,n(i.lastIndex),l)),h++}return 0===h?null:f}]}))},"4de4":function(t,e,r){"use strict";var a=r("23e7"),c=r("b727").filter,n=r("1dde"),i=n("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),c=r("5899"),n="["+c+"]",i=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),s=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5a34":function(t,e,r){var a=r("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,r){var a=r("861d"),c=r("e8b5"),n=r("b622"),i=n("species");t.exports=function(t,e){var r;return c(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?a(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6ace":function(t,e,r){"use strict";var a=r("7a23"),c={class:"header position-relative"},n={class:"title_style\n        position-absolute top-50 start-50 translate-middle\n        fw-bold px-4 py-2 px-md-5 py-md-4"};function i(t,e,r,i,o,s){return Object(a["v"])(),Object(a["d"])("header",c,[Object(a["h"])("span",null,[Object(a["h"])("h1",n,Object(a["D"])(r.headerTitle),1)]),Object(a["h"])("img",{class:"img-fluid w-100 shadow",src:r.headerImgUrl,alt:"首圖"},null,8,["src"])])}var o={name:"HeaderBackgroundImg",props:["headerTitle","headerImgUrl"]};o.render=i;e["a"]=o},7156:function(t,e,r){var a=r("861d"),c=r("d2bb");t.exports=function(t,e,r){var n,i;return c&&"function"==typeof(n=e.constructor)&&n!==r&&a(i=n.prototype)&&i!==r.prototype&&c(t,i),t}},8418:function(t,e,r){"use strict";var a=r("c04e"),c=r("9bf2"),n=r("5c6c");t.exports=function(t,e,r){var i=a(e);i in t?c.f(t,i,n(0,r)):t[i]=r}},"841c":function(t,e,r){"use strict";var a=r("d784"),c=r("825a"),n=r("1d80"),i=r("129f"),o=r("14c3");a("search",1,(function(t,e,r){return[function(e){var r=n(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r):new RegExp(e)[t](String(r))},function(t){var a=r(e,t,this);if(a.done)return a.value;var n=c(t),s=String(this),u=n.lastIndex;i(u,0)||(n.lastIndex=0);var l=o(n,s);return i(n.lastIndex,u)||(n.lastIndex=u),null===l?-1:l.index}]}))},"99af":function(t,e,r){"use strict";var a=r("23e7"),c=r("d039"),n=r("e8b5"),i=r("861d"),o=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),f=r("b622"),h=r("2d00"),b=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",m=h>=51||!c((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),g=d("concat"),O=function(t){if(!i(t))return!1;var e=t[b];return void 0!==e?!!e:n(t)},j=!m||!g;a({target:"Array",proto:!0,forced:j},{concat:function(t){var e,r,a,c,n,i=o(this),d=l(i,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?i:arguments[e],O(n)){if(c=s(n.length),f+c>p)throw TypeError(v);for(r=0;r<c;r++,f++)r in n&&u(d,f,n[r])}else{if(f>=p)throw TypeError(v);u(d,f++,n)}return d.length=f,d}})},a434:function(t,e,r){"use strict";var a=r("23e7"),c=r("23cb"),n=r("a691"),i=r("50c4"),o=r("7b0b"),s=r("65f0"),u=r("8418"),l=r("1dde"),d=l("splice"),f=Math.max,h=Math.min,b=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var r,a,l,d,v,m,g=o(this),O=i(g.length),j=c(t,O),y=arguments.length;if(0===y?r=a=0:1===y?(r=0,a=O-j):(r=y-2,a=h(f(n(e),0),O-j)),O+r-a>b)throw TypeError(p);for(l=s(g,a),d=0;d<a;d++)v=j+d,v in g&&u(l,d,g[v]);if(l.length=a,r<a){for(d=j;d<O-a;d++)v=d+a,m=d+r,v in g?g[m]=g[v]:delete g[m];for(d=O;d>O-a+r;d--)delete g[d-1]}else if(r>a)for(d=O-a;d>j;d--)v=d+a-1,m=d+r-1,v in g?g[m]=g[v]:delete g[m];for(d=0;d<r;d++)g[d+j]=arguments[d+2];return g.length=O-a+r,l}})},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,r){"use strict";var a=r("83ab"),c=r("da84"),n=r("94ca"),i=r("6eeb"),o=r("5135"),s=r("c6b6"),u=r("7156"),l=r("c04e"),d=r("d039"),f=r("7c73"),h=r("241c").f,b=r("06cf").f,p=r("9bf2").f,v=r("58a8").trim,m="Number",g=c[m],O=g.prototype,j=s(f(O))==m,y=function(t){var e,r,a,c,n,i,o,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+u}for(n=u.slice(2),i=n.length,o=0;o<i;o++)if(s=n.charCodeAt(o),s<48||s>c)return NaN;return parseInt(n,a)}return+u};if(n(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var S,x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(j?d((function(){O.valueOf.call(r)})):s(r)!=m)?u(new g(y(e)),r,x):y(e)},I=a?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;I.length>w;w++)o(g,S=I[w])&&!o(x,S)&&p(x,S,b(g,S));x.prototype=O,O.constructor=x,i(c,m,x)}},ab13:function(t,e,r){var a=r("b622"),c=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[c]=!1,"/./"[t](e)}catch(a){}}return!1}},b727:function(t,e,r){var a=r("0366"),c=r("44ad"),n=r("7b0b"),i=r("50c4"),o=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,d=6==t,f=7==t,h=5==t||d;return function(b,p,v,m){for(var g,O,j=n(b),y=c(j),S=a(p,v,3),x=i(y.length),I=0,w=m||o,F=e?w(b,x):r||f?w(b,0):void 0;x>I;I++)if((h||I in y)&&(g=y[I],O=S(g,I,j),t))if(e)F[I]=O;else if(O)switch(t){case 3:return!0;case 5:return g;case 6:return I;case 2:s.call(F,g)}else switch(t){case 4:return!1;case 7:s.call(F,g)}return d?-1:u||l?l:F}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c494:function(t,e,r){"use strict";var a=r("7a23"),c=Object(a["h"])("i",{class:"bi bi-heart-fill fs-4"},null,-1);function n(t,e,r,n,i,o){return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("input",{type:"checkbox",id:r.idData,class:"btn-check",autocomplete:"off",checked:i.isFavorite},null,8,["id","checked"]),Object(a["h"])("label",{for:r.idData,class:"favorite_icon",onClick:e[1]||(e[1]=function(){return o.addFavoriteItem&&o.addFavoriteItem.apply(o,arguments)})},[c],8,["for"])],64)}r("caad"),r("2532"),r("a434");var i=r("3a72"),o={name:"Favorite",props:["idData"],data:function(){return{isFavorite:!1,favoritsList:JSON.parse(localStorage.getItem("favoritData"))||[]}},watch:{idData:function(){this.isFavorite=this.favoritsList.includes(this.idData)}},methods:{saveFavorit:function(t){var e=JSON.stringify(t);localStorage.setItem("favoritData",e)},updateFavoritsNum:function(t){i["a"].emit("favorits-number",t.length)},addFavoriteItem:function(){this.favoritsList=JSON.parse(localStorage.getItem("favoritData"))||[];var t=this.favoritsList.includes(this.idData);t?(this.favoritsList.splice(this.favoritsList.indexOf(this.idData),1),this.saveFavorit(this.favoritsList),this.updateFavoritsNum(this.favoritsList),i["a"].emit("favorits-list",JSON.parse(localStorage.getItem("favoritData")))):(this.favoritsList.push(this.idData),this.saveFavorit(this.favoritsList),this.updateFavoritsNum(this.favoritsList))}},mounted:function(){this.favoritsList=JSON.parse(localStorage.getItem("favoritData"))||[],this.isFavorite=this.favoritsList.includes(this.idData)}};o.render=n;e["a"]=o},caad:function(t,e,r){"use strict";var a=r("23e7"),c=r("4d64").includes,n=r("44d2");a({target:"Array",proto:!0},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},e8b5:function(t,e,r){var a=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},ed84:function(t,e,r){"use strict";r.r(e);r("ac1f"),r("841c");var a=r("7a23"),c={class:"container pageContent"},n={class:"py-4"},i={class:"row justify-content-between align-items-center"},o={class:"col-12 col-md-8 mb-1"},s={class:"col-12 col-md-4 col-lg-3 mb-1\n          position-relative"},u={class:"py-3"},l={class:"row list-unstyled"},d={class:"text-end"};function f(t,e,r,f,h,b){var p=Object(a["A"])("Loading"),v=Object(a["A"])("ProductFilterList"),m=Object(a["A"])("HeaderImg"),g=Object(a["A"])("Breadcrumb"),O=Object(a["A"])("ProductCard");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(p,{status:h.loadingStatus},null,8,["status"]),Object(a["h"])(v,{class:"sticky-top",products:h.products,onFilterListMethods:b.filterListMethods},null,8,["products","onFilterListMethods"]),Object(a["h"])(m,{"header-title":h.headerData.title,"header-imgUrl":h.headerData.imgUrl},null,8,["header-title","header-imgUrl"]),Object(a["h"])("section",c,[Object(a["h"])("main",n,[Object(a["h"])("div",i,[Object(a["h"])("span",o,[Object(a["h"])(g,{"breadcrumb-data":h.breadcrumbData},null,8,["breadcrumb-data"])]),Object(a["h"])("span",s,[Object(a["h"])("i",{class:"bi bi-x-lg\n            btn_light_green fs-6\n            position-absolute top-50 end-0 translate-middle",onClick:e[1]||(e[1]=function(){return b.clearSearch&&b.clearSearch.apply(b,arguments)})}),Object(a["N"])(Object(a["h"])("input",{type:"text",class:"col-sm-9 form-control",placeholder:"請輸入關鍵字","aria-label":"search","aria-describedby":"basic-addon1","onUpdate:modelValue":e[2]||(e[2]=function(t){return h.search=t})},null,512),[[a["J"],h.search]])])]),Object(a["h"])("div",u,[Object(a["h"])("ul",l,[Object(a["h"])(O,{"cart-product-data":b.filterProducts},null,8,["cart-product-data"])]),Object(a["h"])("p",d,"共有 "+Object(a["D"])(b.filterProducts.length)+" 件商品",1)])])])],64)}r("4de4"),r("466d"),r("99af");var h=r("6ace"),b={class:"card text-dark border-0 shadow-sm"},p={class:"card-img-top card_img_style"},v={class:"more_msg"},m={class:"favorite_icon_background shadow-sm"},g={class:"row card-body bg-white rounded-bottom px-2 py-3 m-0\n          d-flex justify-content-between align-items-center"},O={class:"h4 m-0 text-truncate"},j=Object(a["h"])("br",null,null,-1),y={class:"h6 fst-italic"},S={class:"col-3 p-0 d-flex justify-content-end"},x=Object(a["h"])("i",{class:"bi bi-cart-plus-fill"},null,-1);function I(t,e,r,c,n,i){var o=Object(a["A"])("Loading"),s=Object(a["A"])("Font-awesome-icon"),u=Object(a["A"])("router-link"),l=Object(a["A"])("FavoriteIcon");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(o,{status:n.loadingStatus},null,8,["status"]),(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(r.cartProductData,(function(e){return Object(a["v"])(),Object(a["d"])("li",{class:"col-sm-6 col-lg-4 col-xl-3 my-2 custom_card_style",key:e.id},[Object(a["h"])("div",b,[Object(a["h"])(u,{to:"/product/".concat(e.id)},{default:Object(a["M"])((function(){return[Object(a["h"])("div",p,[Object(a["h"])("div",v,[Object(a["h"])(s,{icon:"search-plus"})]),Object(a["h"])("img",{class:"img-fluid",src:e.imageUrl,alt:"'商品圖"},null,8,["src"])])]})),_:2},1032,["to"]),Object(a["h"])("span",m,[Object(a["h"])(l,{ref:"favorit","id-data":e.id},null,8,["id-data"])]),Object(a["h"])("div",g,[Object(a["h"])(u,{class:"col-9 p-0 text-dark border-0",to:"/product/".concat(e.id)},{default:Object(a["M"])((function(){return[Object(a["h"])("h1",O,[Object(a["g"])(Object(a["D"])(e.title)+" ",1),j,Object(a["h"])("span",y," $"+Object(a["D"])(t.$filters.currency(e.price)),1)])]})),_:2},1032,["to"]),Object(a["h"])("span",S,[Object(a["h"])("span",{class:"btn btn_outline_green fs-4 ms-1",onClick:function(t){return i.addCart(e.id)}},[x],8,["onClick"])])])])])})),128))],64)}r("a9e3"),r("159b");var w=r("3a72"),F=r("c494"),L=r("4897"),_={name:"ProductCard",props:["cartProductData"],data:function(){return{loadingStatus:!1,data:{product_id:"",qty:1},cartsLength:Number}},components:{FavoriteIcon:F["a"]},methods:{addCart:function(t){var e=this,r="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.loadingStatus=!0;var a={data:{product_id:t,qty:1}};this.$http.post(r,a).then((function(t){t.data.success?(Object(L["c"])(t.data.message,"success"),e.loadingStatus=!1,e.updateCartLength()):(Object(L["c"])(t.data.message,"error"),e.loadingStatus=!1)})).catch((function(t){console.log("(失敗-card)加入購物車 err:"),console.dir(t),e.loadingStatus=!1}))},updateCartLength:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.$http.get(e).then((function(e){if(e.data.success){var r=0;t.cartsLength=e.data.data.carts.forEach((function(t){r+=t.qty})),t.cartsLength=r,w["a"].emit("cart-number",t.cartsLength)}else console.log("(錯誤-cart)取得購物車數量 res:",e)})).catch((function(t){console.log("(失敗-cart)取得購物車數量 err:"),console.dir(t)}))}}};_.render=I;var N=_,A=r("2fbc"),D={class:"row text-center bg-secondary m-0 shadow"},k={class:"btn-group p-0",role:"group","aria-label":"分類選單",ref:"select"},E=Object(a["h"])("label",{class:"btn btn-outline-primary textStyle_rwd_2 py-1 border-0 rounded-0",for:"all"}," 全部商品 ",-1),C=Object(a["h"])("label",{class:"btn btn-outline-primary textStyle_rwd_2 py-1 border-0",for:"fundraise"}," 募款專案 ",-1),M=Object(a["h"])("label",{class:"btn btn-outline-primary textStyle_rwd_2 py-1 border-0",for:"charitableActivities"}," 公益活動 ",-1),P=Object(a["h"])("label",{class:"btn btn-outline-primary textStyle_rwd_2 py-1 border-0",for:"lecture"}," 講座 ",-1),U=Object(a["h"])("label",{class:"btn btn-outline-primary textStyle_rwd_2 py-1 border-0",for:"organicFood"}," 有機食品 ",-1),J=Object(a["h"])("label",{class:"btn btn-outline-primary textStyle_rwd_2 py-1 border-0 rounded-0",for:"merchandise"}," 周邊商品 ",-1);function H(t,e,r,c,n,i){return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("nav",D,[Object(a["h"])("form",k,[Object(a["N"])(Object(a["h"])("input",{type:"radio",name:"productFilterRadio",value:"全部商品",autocomplete:"off",id:"all",class:"btn-check","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.productSelect=t}),onChange:e[2]||(e[2]=function(e){return t.$emit("filterListMethods",n.productSelect)}),checked:""},null,544),[[a["H"],n.productSelect]]),E,Object(a["N"])(Object(a["h"])("input",{type:"radio",name:"productFilterRadio",value:"募款專案",autocomplete:"off",id:"fundraise",class:"btn-check","onUpdate:modelValue":e[3]||(e[3]=function(t){return n.productSelect=t}),onChange:e[4]||(e[4]=function(e){return t.$emit("filterListMethods",n.productSelect)})},null,544),[[a["H"],n.productSelect]]),C,Object(a["N"])(Object(a["h"])("input",{type:"radio",name:"productFilterRadio",value:"公益活動",autocomplete:"off",id:"charitableActivities",class:"btn-check","onUpdate:modelValue":e[5]||(e[5]=function(t){return n.productSelect=t}),onChange:e[6]||(e[6]=function(e){return t.$emit("filterListMethods",n.productSelect)})},null,544),[[a["H"],n.productSelect]]),M,Object(a["N"])(Object(a["h"])("input",{type:"radio",name:"productFilterRadio",value:"講座",autocomplete:"off",id:"lecture",class:"btn-check","onUpdate:modelValue":e[7]||(e[7]=function(t){return n.productSelect=t}),onChange:e[8]||(e[8]=function(e){return t.$emit("filterListMethods",n.productSelect)})},null,544),[[a["H"],n.productSelect]]),P,Object(a["N"])(Object(a["h"])("input",{type:"radio",name:"productFilterRadio",value:"有機食品",autocomplete:"off",id:"organicFood",class:"btn-check","onUpdate:modelValue":e[9]||(e[9]=function(t){return n.productSelect=t}),onChange:e[10]||(e[10]=function(e){return t.$emit("filterListMethods",n.productSelect)})},null,544),[[a["H"],n.productSelect]]),U,Object(a["N"])(Object(a["h"])("input",{type:"radio",name:"productFilterRadio",value:"周邊商品",autocomplete:"off",id:"merchandise",class:"btn-check","onUpdate:modelValue":e[11]||(e[11]=function(t){return n.productSelect=t}),onChange:e[12]||(e[12]=function(e){return t.$emit("filterListMethods",n.productSelect)})},null,544),[[a["H"],n.productSelect]]),J],512)])])}var T={name:"ProductFilterList",data:function(){return{productSelect:""}},emits:["filterListMethods"]};T.render=H;var R=T,V={name:"Products",data:function(){return{loadingStatus:!1,select:"",search:"",tempProducts:[],products:[],headerData:{title:"線上商城",imgUrl:"https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625383909848.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=I9j4wMF6Ju2sDD%2Bt5cyertLtgbUPb79pLuHjlhHmilogicWyAs70SOUZjs2iJ8m5U8CzCWPV2AHhgK%2FEHrHfbvOLPTb3HMRNjffgTCe%2BCHtZJNefxWz3P4X520ruiMmQXK8iRyainm9NKjEM9nWPIbnJ28utF95W%2F%2Fc292KtCnSHJATO3cNUXfzZMgKAMIztyXl9RJwLIb9%2BkP77JcJVmFKjv6hwhmfH1bKXFAy%2BuG2mhzbYI3eU%2BGJiIEMXJTdFZjgUrxewVd1QlkUCy4PvNBMU3CsYi6dLJ2vwo45lPiqP8f%2BmYvFCOoHJ7I5hzL7KSgZBor3Lhrr1rdgwlf64rA%3D%3D"},breadcrumbData:{previous:[{title:"首頁",url:"/home"}],purpose:"線上商城"}}},computed:{filterProducts:function(){var t=this,e=[];return e="全部商品"===this.select?this.products:this.products.filter((function(e){return e.category.match(t.select)})),this.search.length>0&&(e=this.products.filter((function(e){return e.title.match(t.search)}))),e}},components:{HeaderImg:h["a"],ProductFilterList:R,Breadcrumb:A["a"],ProductCard:N},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/products/all");this.loadingStatus=!0,this.$http.get(e).then((function(e){e.data.success?(t.tempProducts=e.data.products,t.products=e.data.products,t.loadingStatus=!1):(console.log("(錯誤-前台)取得全部商品資料 res:",e),t.loadingStatus=!1)})).catch((function(e){console.log("(失敗-前台)取得全部商品資料 res:"),console.dir(e),t.loadingStatus=!1}))},filterListMethods:function(t){this.select=t},clearSearch:function(){this.search=""}},mounted:function(){this.getProducts(),this.select="全部商品"}};V.render=f;e["default"]=V}}]);
//# sourceMappingURL=chunk-8b12dc3e.5dcd7320.js.map
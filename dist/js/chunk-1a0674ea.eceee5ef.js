(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a0674ea"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("c6b6"),c=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),c=n("fdbc"),a=n("17c2"),o=n("9112");for(var i in c){var s=r[i],u=s&&s.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,c=n("a640"),a=c("forEach");t.exports=a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),a=n("2d00"),o=c("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3a72":function(t,e,n){"use strict";var r=function(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r&&r.push(n)||t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&r.splice(r.indexOf(n)>>>0,1)},emit:function(e,n){(t.get(e)||[]).slice().map((function(t){t(n)})),(t.get("*")||[]).slice().map((function(t){t(e,n)}))}}};e["a"]=r()},"466d":function(t,e,n){"use strict";var r=n("d784"),c=n("825a"),a=n("50c4"),o=n("1d80"),i=n("8aa5"),s=n("14c3");r("match",1,(function(t,e,n){return[function(e){var n=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var o=c(t),u=String(this);if(!o.global)return s(o,u);var l=o.unicode;o.lastIndex=0;var d,f=[],p=0;while(null!==(d=s(o,u))){var b=String(d[0]);f[p]=b,""===b&&(o.lastIndex=i(u,a(o.lastIndex),l)),p++}return 0===p?null:f}]}))},"4de4":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").filter,a=n("1dde"),o=a("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),c=n("5899"),a="["+c+"]",o=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,e,n){var r=n("861d"),c=n("e8b5"),a=n("b622"),o=a("species");t.exports=function(t,e){var n;return c(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var r=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var a,o;return c&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&c(t,o),t}},8418:function(t,e,n){"use strict";var r=n("c04e"),c=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?c.f(t,o,a(0,n)):t[o]=n}},"841c":function(t,e,n){"use strict";var r=n("d784"),c=n("825a"),a=n("1d80"),o=n("129f"),i=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=a(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=c(t),s=String(this),u=a.lastIndex;o(u,0)||(a.lastIndex=0);var l=i(a,s);return o(a.lastIndex,u)||(a.lastIndex=u),null===l?-1:l.index}]}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),c=n("9f7f"),a=n("5692"),o=RegExp.prototype.exec,i=a("native-string-replace",String.prototype.replace),s=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=u||d||l;f&&(s=function(t){var e,n,c,a,s=this,f=l&&s.sticky,p=r.call(s),b=s.source,h=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(b="(?: "+b+")",g=" "+g,h++),n=new RegExp("^(?:"+b+")",p)),d&&(n=new RegExp("^"+b+"$(?!\\s)",p)),u&&(e=s.lastIndex),c=o.call(f?n:s,g),f?c?(c.input=c.input.slice(h),c[0]=c[0].slice(h),c.index=s.lastIndex,s.lastIndex+=c[0].length):s.lastIndex=0:u&&c&&(s.lastIndex=s.global?c.index+c[0].length:e),d&&c&&c.length>1&&i.call(c[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(c[a]=void 0)})),c}),t.exports=s},"99af":function(t,e,n){"use strict";var r=n("23e7"),c=n("d039"),a=n("e8b5"),o=n("861d"),i=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),b=f("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",v=p>=51||!c((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=d("concat"),x=function(t){if(!o(t))return!1;var e=t[b];return void 0!==e?!!e:a(t)},O=!v||!m;r({target:"Array",proto:!0,forced:O},{concat:function(t){var e,n,r,c,a,o=i(this),d=l(o,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?o:arguments[e],x(a)){if(c=s(a.length),f+c>h)throw TypeError(g);for(n=0;n<c;n++,f++)n in a&&u(d,f,a[n])}else{if(f>=h)throw TypeError(g);u(d,f++,a)}return d.length=f,d}})},"9c98":function(t,e,n){t.exports=n.p+"img/productBackImg.5e589500.jpg"},"9f7f":function(t,e,n){"use strict";var r=n("d039");function c(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),c=n("da84"),a=n("94ca"),o=n("6eeb"),i=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,b=n("06cf").f,h=n("9bf2").f,g=n("58a8").trim,v="Number",m=c[v],x=m.prototype,O=s(f(x))==v,y=function(t){var e,n,r,c,a,o,i,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+u}for(a=u.slice(2),o=a.length,i=0;i<o;i++)if(s=a.charCodeAt(i),s<48||s>c)return NaN;return parseInt(a,r)}return+u};if(a(v,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var j,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(O?d((function(){x.valueOf.call(n)})):s(n)!=v)?u(new m(y(e)),n,E):y(e)},I=r?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;I.length>w;w++)i(m,j=I[w])&&!i(E,j)&&h(E,j,b(m,j));E.prototype=x,x.constructor=E,o(c,v,E)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b727:function(t,e,n){var r=n("0366"),c=n("44ad"),a=n("7b0b"),o=n("50c4"),i=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=7==t,p=5==t||d;return function(b,h,g,v){for(var m,x,O=a(b),y=c(O),j=r(h,g,3),E=o(y.length),I=0,w=v||i,S=e?w(b,E):n||f?w(b,0):void 0;E>I;I++)if((p||I in y)&&(m=y[I],x=j(m,I,O),t))if(e)S[I]=x;else if(x)switch(t){case 3:return!0;case 5:return m;case 6:return I;case 2:s.call(S,m)}else switch(t){case 4:return!1;case 7:s.call(S,m)}return d?-1:u||l?l:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),c=n("9263"),a=n("d039"),o=n("b622"),i=n("9112"),s=o("species"),u=RegExp.prototype,l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),b=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var h=o(t),g=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),v=g&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!v||"replace"===t&&(!l||!d||p)||"split"===t&&!b){var m=/./[h],x=n(h,""[t],(function(t,e,n,r,a){var o=e.exec;return o===c||o===u.exec?g&&!a?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),O=x[0],y=x[1];r(String.prototype,t,O),r(u,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}f&&i(u[h],"sham",!0)}},e6dc:function(t,e,n){"use strict";n.r(e);n("ac1f"),n("841c");var r=n("7a23"),c=n("9c98"),a=n.n(c),o=Object(r["h"])("header",{class:"header position-relative"},[Object(r["h"])("img",{class:"img-fluid w-100 shadow",src:a.a,alt:"首圖"})],-1),i={class:"container pageContent"},s={class:"py-4"},u={class:"row justify-content-between align-items-center"},l={class:"col-6"},d={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},f={class:"breadcrumb m-0"},p={class:"breadcrumb-item"},b=Object(r["g"])("首頁"),h=Object(r["h"])("li",{class:"breadcrumb-item active","aria-current":"page"}," 線上商城 ",-1),g={class:"col-6 col-md-4 col-lg-3\n          position-relative"},v=Object(r["h"])("h1",{class:"pb-5 text-center fw-bold py-3 m-0"},"線上商城",-1),m={class:"py-3"},x={class:"row list-unstyled"},O={class:"text-end"};function y(t,e,n,c,a,y){var j=Object(r["y"])("Loading"),E=Object(r["y"])("FilterList"),I=Object(r["y"])("router-link"),w=Object(r["y"])("Card");return Object(r["t"])(),Object(r["d"])(r["a"],null,[Object(r["h"])(j,{status:a.loadingStatus},null,8,["status"]),Object(r["h"])(E,{class:"sticky-top",products:a.products},null,8,["products"]),o,Object(r["h"])("section",i,[Object(r["h"])("main",s,[Object(r["h"])("div",u,[Object(r["h"])("span",l,[Object(r["h"])("nav",d,[Object(r["h"])("ol",f,[Object(r["h"])("li",p,[Object(r["h"])(I,{to:"/",class:"link-secondary"},{default:Object(r["I"])((function(){return[b]})),_:1})]),h])])]),Object(r["h"])("span",g,[Object(r["h"])("i",{class:"bi bi-x-lg\n          btn_light_green fs-6\n          position-absolute top-50 end-0 translate-middle",onClick:e[1]||(e[1]=function(){return y.clearSearch&&y.clearSearch.apply(y,arguments)})}),Object(r["J"])(Object(r["h"])("input",{type:"text",class:"col-sm-9 form-control",placeholder:"請輸入關鍵字","aria-label":"search","aria-describedby":"basic-addon1","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.search=t})},null,512),[[r["F"],a.search]])])]),v,Object(r["h"])("div",m,[Object(r["h"])("ul",x,[Object(r["h"])(w,{"temp-products":y.filterProducts},null,8,["temp-products"])]),Object(r["h"])("p",O,"共有 "+Object(r["B"])(y.filterProducts.length)+" 件商品",1)])])])],64)}n("4de4"),n("466d"),n("99af");var j={class:"card border-0 shadow-sm"},E={class:"more_msg"},I={class:"\n          card-body\n          bg-white\n          rounded-bottom\n          d-flex justify-content-between align-items-center\n          px-2\n          py-3\n        "},w={class:"h4 m-0 text-truncate"},S=Object(r["h"])("br",null,null,-1),_={class:"h6 fst-italic"},N=Object(r["h"])("i",{class:"bi bi-cart-plus-fill"},null,-1);function A(t,e,n,c,a,o){var i=Object(r["y"])("Loading"),s=Object(r["y"])("font-awesome-icon"),u=Object(r["y"])("router-link");return Object(r["t"])(),Object(r["d"])(r["a"],null,[Object(r["h"])(i,{status:a.loadingStatus},null,8,["status"]),(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(n.tempProducts,(function(t){return Object(r["t"])(),Object(r["d"])("li",{class:"col-sm-6 col-lg-4 col-xl-3 my-2",key:t.id},[Object(r["h"])("div",j,[Object(r["h"])(u,{to:"/product/".concat(t.id),class:"card-img-top card_img_style"},{default:Object(r["I"])((function(){return[Object(r["h"])("div",E,[Object(r["h"])(s,{icon:"search-plus"})]),Object(r["h"])("img",{class:"img-fluid",src:t.imageUrl,alt:"'商品圖"},null,8,["src"])]})),_:2},1032,["to"]),Object(r["h"])("div",I,[Object(r["h"])("h1",w,[Object(r["g"])(Object(r["B"])(t.title)+" ",1),S,Object(r["h"])("span",_,"$"+Object(r["B"])(t.price),1)]),Object(r["h"])("span",null,[Object(r["h"])("span",{class:"btn btn_outline_green fs-4 ms-1",onClick:function(e){return o.addCart(t.id)}},[N],8,["onClick"])])])])])})),128))],64)}n("a9e3"),n("159b");var R=n("1940"),k=n.n(R),C=n("3a72"),P={name:"Card",props:["tempProducts"],data:function(){return{loadingStatus:!1,data:{product_id:"",qty:1},cartsLength:Number}},methods:{addCart:function(t){var e=this,n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.loadingStatus=!0;var r={data:{product_id:t,qty:1}};this.$http.post(n,r).then((function(t){t.data.success?(console.log("(成功-card)加入購物車 res:",t),e.swalFn(t.data.message,"success"),e.loadingStatus=!1,e.updateCartLength()):(console.log("(錯誤-card)加入購物車 res:",t),e.swalFn(t.data.message,"error"),e.loadingStatus=!1)})).catch((function(t){console.log("(失敗-card)加入購物車 err:"),console.dir(t),e.loadingStatus=!1}))},updateCartLength:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/cart");this.$http.get(e).then((function(e){if(e.data.success){var n=0;t.cartsLength=e.data.data.carts.forEach((function(t){n+=t.qty})),t.cartsLength=n,C["a"].emit("cart-number",t.cartsLength)}else console.log("(錯誤-cart)取得購物車數量 res:",e)})).catch((function(t){console.log("(失敗-cart)取得購物車數量 err:"),console.dir(t)}))},swalFn:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3,r=arguments.length>3?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={title:t,text:r,icon:e,button:c,timer:n,closeOnClickOutside:!1};k()(a)}}};P.render=A;var T=P,L={class:"row text-center bg-secondary m-0 shadow"},F=Object(r["h"])("div",{class:"btn-group p-0",role:"group","aria-label":"Basic radio toggle button group"},[Object(r["h"])("input",{type:"radio",id:"all",class:"btn-check",name:"btnradio",autocomplete:"off",checked:""}),Object(r["h"])("label",{class:"btn btn-outline-primary py-1 border-0 rounded-0",for:"all"},"全部商品"),Object(r["h"])("input",{type:"radio",id:"fundraise",class:"btn-check",name:"btnradio",autocomplete:"off"}),Object(r["h"])("label",{class:"btn btn-outline-primary py-1 border-0",for:"fundraise"},"募款專案"),Object(r["h"])("input",{type:"radio",id:"feeds",class:"btn-check",name:"btnradio",autocomplete:"off"}),Object(r["h"])("label",{class:"btn btn-outline-primary py-1 border-0",for:"feeds"},"飼料"),Object(r["h"])("input",{type:"radio",id:"cages",class:"btn-check",name:"btnradio",autocomplete:"off"}),Object(r["h"])("label",{class:"btn btn-outline-primary py-1 border-0",for:"cages"},"籠具"),Object(r["h"])("input",{type:"radio",id:"toys",class:"btn-check",name:"btnradio",autocomplete:"off"}),Object(r["h"])("label",{class:"btn btn-outline-primary py-1 border-0",for:"toys"},"玩具"),Object(r["h"])("input",{type:"radio",id:"stationery",class:"btn-check",name:"btnradio",autocomplete:"off"}),Object(r["h"])("label",{class:"btn btn-outline-primary py-1 border-0 rounded-0",for:"stationery"},"文青周邊")],-1);function U(t,e,n,c,a,o){return Object(r["t"])(),Object(r["d"])("nav",L,[F])}var $={name:"FilterList"};$.render=U;var B=$,M={data:function(){return{loadingStatus:!1,search:"",tempProducts:[],products:[]}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return e.title.match(t.search)}))}},components:{Card:T,FilterList:B},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/products/all");this.loadingStatus=!0,this.$http.get(e).then((function(e){e.data.success?(console.log("(成功-前台)取得全部商品資料 res:",e),t.tempProducts=e.data.products,t.products=e.data.products,console.log("(成功-前台)取得全部商品資料 vue:",t.products),t.loadingStatus=!1):(console.log("(錯誤-前台)取得全部商品資料 res:",e),t.loadingStatus=!1)})).catch((function(e){console.log("(失敗-前台)取得全部商品資料 res:"),console.dir(e),t.loadingStatus=!1}))},clearSearch:function(){this.search=""}},mounted:function(){this.getProducts()}};M.render=y;e["default"]=M},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-1a0674ea.eceee5ef.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74adf544"],{"1dde":function(e,t,a){var c=a("d039"),r=a("b622"),o=a("2d00"),n=r("species");e.exports=function(e){return o>=51||!c((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2fbc":function(e,t,a){"use strict";var c=a("7a23"),r={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},o={class:"breadcrumb m-0"},n={class:"breadcrumb-item active","aria-current":"page"};function s(e,t,a,s,i,l){var u=Object(c["A"])("router-link");return Object(c["v"])(),Object(c["d"])("div",null,[Object(c["h"])("nav",r,[Object(c["h"])("ul",o,[(Object(c["v"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(a.breadcrumbData.previous,(function(e,t){return Object(c["v"])(),Object(c["d"])("li",{key:"麵包屑_".concat(t),class:"breadcrumb-item"},[Object(c["h"])(u,{to:e.url,class:"link-success-light"},{default:Object(c["M"])((function(){return[Object(c["g"])(Object(c["D"])(e.title),1)]})),_:2},1032,["to"])])})),128)),Object(c["h"])("li",n,Object(c["D"])(a.breadcrumbData.purpose),1)])])])}var i={name:"Breadcrumb.vue",props:["breadcrumbData"]};i.render=s;t["a"]=i},"65f0":function(e,t,a){var c=a("861d"),r=a("e8b5"),o=a("b622"),n=o("species");e.exports=function(e,t){var a;return r(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?c(a)&&(a=a[n],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"6ace":function(e,t,a){"use strict";var c=a("7a23"),r={class:"header position-relative user_select_none"},o={class:"title_style\n      position-absolute top-50 start-50 translate-middle\n      h1 fw-bold px-4 py-2 px-md-5 py-md-4"};function n(e,t,a,n,s,i){return Object(c["v"])(),Object(c["d"])("header",r,[Object(c["h"])("h2",o,Object(c["D"])(a.headerTitle),1),Object(c["h"])("img",{class:"img-fluid w-100 shadow",src:a.headerImgUrl,alt:"首圖"},null,8,["src"])])}var s={name:"HeaderBackgroundImg",props:["headerTitle","headerImgUrl"]};s.render=n;t["a"]=s},8418:function(e,t,a){"use strict";var c=a("c04e"),r=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var n=c(t);n in e?r.f(e,n,o(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),r=a("d039"),o=a("e8b5"),n=a("861d"),s=a("7b0b"),i=a("50c4"),l=a("8418"),u=a("65f0"),b=a("1dde"),d=a("b622"),p=a("2d00"),m=d("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",g=p>=51||!r((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),O=b("concat"),v=function(e){if(!n(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)},j=!g||!O;c({target:"Array",proto:!0,forced:j},{concat:function(e){var t,a,c,r,o,n=s(this),b=u(n,0),d=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?n:arguments[t],v(o)){if(r=i(o.length),d+r>h)throw TypeError(f);for(a=0;a<r;a++,d++)a in o&&l(b,d,o[a])}else{if(d>=h)throw TypeError(f);l(b,d++,o)}return b.length=d,b}})},"9cbb":function(e,t,a){"use strict";a.r(t);a("99af");var c=a("7a23"),r={class:"container pageContent user_select_none px-3 px-sm-1 px-md-4"},o={class:"py-4"},n={class:"row py-3"},s={class:"col-12 col-lg-7"},i={class:"row list-unstyled"},l={class:"fw-bold pb-1"},u={class:"col-5 d-none d-lg-block"},b={class:"row list-unstyled py-3"},d={class:"row pt-5 pb-3 px-2 mt-2 mb-4 bg-white shadow-sm rounded-2","data-aos":"fade-up","data-aos-easing":"ease-out-back","data-aos-anchor-placement":"top-bottom","data-aos-delay":"200","data-aos-duration":"700"},p={class:"col-12 text-center mb-2"},m=Object(c["h"])("h2",{class:"fw-bold"}," 聯絡我們 ",-1),h={class:"d-flex justify-content-center fs-2 mb-1"},f={class:"px-1"},g={class:"px-1"},O={class:"px-1"},v=Object(c["f"])('<ul><li><p class="m-0"> 住址：台北市信義區林口街38巷109號6樓 </p></li><li><p class="m-0"> 客服電話： <a href="tel:+886-2-2308264" class="custom_success_link"> (02)2308264 </a> / <a href="tel:+886-2-2308264" class="custom_success_link"> (02)8650610 </a></p></li><li><p class="m-0"> 客服信箱： <a href="mailto:naturalConservation@gmail.com" class="custom_success_link"> naturalConservation@gmail.com </a></p></li><li><p>服務時間：09:00 ~ 13:00 / 15:00 ~ 19:00</p></li></ul>',1),j=Object(c["h"])("div",{class:"col-12"},[Object(c["h"])("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451.8560236395452!2d121.5829368923491!3d25.0392255102093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab0a75bd22d7%3A0xf1b53b5cf37fc8da!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5p6X5Y-j6KGXMzjlt7cxMDnomZ8!5e0!3m2!1szh-TW!2stw!4v1625387151731!5m2!1szh-TW!2stw",allowfullscreen:"",loading:"lazy",class:"height_xl border-0 w-100 h-100"})],-1);function w(e,t,a,w,y,x){var k=Object(c["A"])("HeaderBackgroundImg"),B=Object(c["A"])("Breadcrumb"),F=Object(c["A"])("Font-awesome-icon");return Object(c["v"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(k,{"header-title":y.headerData.title,"header-imgUrl":y.headerData.imgUrl},null,8,["header-title","header-imgUrl"]),Object(c["h"])("main",r,[Object(c["h"])("div",o,[Object(c["h"])(B,{"breadcrumb-data":y.breadcrumbData},null,8,["breadcrumb-data"]),Object(c["h"])("section",n,[Object(c["h"])("div",s,[Object(c["h"])("ul",i,[(Object(c["v"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(y.pageTextContent,(function(e,t){return Object(c["v"])(),Object(c["d"])("li",{key:"關於內文_".concat(t),class:"col-12 pe-2 py-3 text-break","data-aos":"fade-up","data-aos-easing":"ease-out-back","data-aos-anchor-placement":"top-bottom","data-aos-delay":"1".concat(t+1,"0"),"data-aos-duration":"700"},[Object(c["h"])("h2",l,Object(c["D"])(e.title),1),Object(c["h"])("p",{innerHTML:e.content},null,8,["innerHTML"]),Object(c["h"])("img",{src:e.img,alt:"".concat(e.title,"_圖片").concat(t),class:"d-block d-lg-none w-100 rounded-1"},null,8,["src","alt"])],8,["data-aos-delay"])})),128))])]),Object(c["h"])("aside",u,[Object(c["h"])("ul",b,[(Object(c["v"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(y.pageTextContent,(function(e,t){return Object(c["v"])(),Object(c["d"])("li",{key:"側欄圖片_".concat(t),class:"col-12 py-1","data-aos":"fade-up","data-aos-easing":"ease-out-back","data-aos-anchor-placement":"top-bottom","data-aos-delay":"1".concat(t+2,"0"),"data-aos-duration":"700"},[Object(c["h"])("img",{src:e.img,alt:e.title,class:"w-100 rounded-1"},null,8,["src","alt"])],8,["data-aos-delay"])})),128))])])]),Object(c["h"])("section",d,[Object(c["h"])("div",p,[m,Object(c["h"])("ul",h,[Object(c["h"])("li",f,[Object(c["h"])("a",{href:"#",onClick:t[1]||(t[1]=Object(c["O"])((function(){return x.backTop&&x.backTop.apply(x,arguments)}),["prevent"]))},[Object(c["h"])(F,{icon:["fab","facebook-square"],class:"mx-1 text-blue-600 scale transition-duration_2",title:"facabook 粉絲團"})])]),Object(c["h"])("li",g,[Object(c["h"])("a",{href:"#",onClick:t[2]||(t[2]=Object(c["O"])((function(){return x.backTop&&x.backTop.apply(x,arguments)}),["prevent"]))},[Object(c["h"])(F,{icon:["fab","instagram-square"],class:"mx-1 text-pink scale transition-duration_2",title:"Instagram"})])]),Object(c["h"])("li",O,[Object(c["h"])("a",{href:"#",onClick:t[3]||(t[3]=Object(c["O"])((function(){return x.backTop&&x.backTop.apply(x,arguments)}),["prevent"]))},[Object(c["h"])(F,{icon:["fab","line"],class:"mx-1 text-green scale transition-duration_2",title:"@line 官方"})])])]),v]),j])])])],64)}var y=a("6ace"),x=a("2fbc"),k={name:"About",data:function(){return{headerData:{title:"關於我們",imgUrl:"https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625381277465.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Qr1h3nGOQfMXPX6xtyHsiq9Q6u8FKLZ2YyqwO7RdiLAflXUKcKiE9xXz%2FY2ZTXYxURAfTC8mobCxm04%2BFL%2BTbE1Xwi0ZHW1n1X37w46ptwZwa9qV6ODquLd8%2Fizo2k12gJFotUph7vY79LO5vXFOzz1aA%2FcLSSuDikv%2B9RfJUAcMA0ShO%2FJ70d0sBSY7tWcgOfZOe8%2Fc0MHN9RhJ4ZFppqiVXOqiiR7r9tV4V0air8vsNxJyQMyM0sOHHEqTAyKf%2Fc55QlE6Yg%2Bs19VLInoE4yxJEWT0RNvRNNMRYaqSz4qsshVZK0r2k%2BDFNzSmmfxM%2FDmJ3gLaGUmVxURWvKEPHQ%3D%3D"},breadcrumbData:{previous:[{title:"首頁",url:"/"}],purpose:"關於我們"},pageTextContent:[{title:"成立起源",content:"\n            社會上有許多企業與民間組織都在默默幫助著弱勢團體，人道、動物保育、環境保育皆有不同的擁護者，\n            但動物保育、環境保育與人道公益相比仍然是較為小眾、比較容易忽視的議題。<br><br>\n\n            雖然網路上可以查到各縣市、公益團體發布的公益活動或是捐款資訊，\n            不過因為資訊散落在各個官網，如果沒有額外宣傳的話曝光率較低，\n            也會導致民眾遺漏掉感興趣的主題。<br><br>\n\n            為了增加環境保育、動物保育資訊的曝光度，並減少民眾追蹤資訊上的困擾，\n            Natural 團隊於 2016 年成立，致力於整合有關環境議題的主題，增加資訊曝光度。\n          ",img:"https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625384741923.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Idsw8uEB9Fv%2FenmuCgX19rx8MTe0O8Zc6r%2B0kaBRcCdrqoD%2BTpvalDYuFNUPMLf17gHFEbcHFxDs3ciPNR6ed%2FufB%2BDgKUAjFKkjYZZ4FqhUHjWRdyQUNCKurb4Z3MWedZ9tvdH%2BoDe6HdETcHG5uogpzfTWgrPTEHiaA98G4YnC8Z9sL9olJ6d3zsukk0FWWGVejsIrimaywZoHvfU4Cap7OCDxSNZ4FzyCLnPIFrUfnRaAqua%2BzLR5Iml0t2wD5XSl7v4QJxiso8sPqLR6WF%2FCNLMlgliNPFI%2BULryqksTkM%2FssKM18bSztBA%2Ba6hXfDz0IZCIz1T7IDGQi0yeOQ%3D%3D"},{title:"有關平台",content:"\n            Natural 團隊起初由幾個擁有相同意志的人組成，\n            期間不斷積極的接洽各縣市與公益團體，推廣整合平台的優勢，\n            Natural 環保資訊整合平台除了能增加活動的曝光率、民眾獲取資料的方便性，\n            更能提升民眾的參與度。<br><br>\n\n            Natural 環保資訊整合平台成立雖然只有短短 5 年，但使用人數逐年增加，\n            共累計超過萬人透過 Natural 環保資訊整合平台預約環保、動保實體活動，\n            募款專案的募款成效及有機商品的回響皆大受好評。<br><br>\n\n            除了整合資訊外，Natural 環保資訊整合平台也協助參與公益活動的舉辦及宣傳，\n            目前已舉辦過包含淨灘、淨溪、淨山等大型公益活動，\n            活動收益扣除成本後，皆全數捐給不特定、較小眾的環保、動保組織。\n          ",img:"https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625384601002.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=po%2FuCJ9gdqtC1MPN2G3XcOMaR0NaxXss1h%2Bah3mAPm%2BK5CBP86OOTwB5YkLEEsJuZ37ceMrjqFfJNKA4bcmoOhk4ZQyUHb%2Fgt2ow86aGKI%2Fmv2DtR2vowPBYLBW5hmBvXBqU%2BC2K0XcoNQqX7zaKXhXIiC7D5m2cdBr66rqUqGhgzBVKIo0wsTEUSYQU%2FmvECOW%2FxJMoLKOM1ONGZ8Ar9C%2Fr1uSLWMTQpX5a0hDn3uk3Eo9a%2BRZhF45LSZ4NLX6DhmDw18G1gycLTihdhBCTAEgyuz8yNrDK9TrVHJGd9GnWWTU6eWDxwhSJf%2BZzXGeh7q6YnJ8MsOqgy%2BYEfGI53A%3D%3D"},{title:"未來展望",content:"\n            Natural 環保資訊整合平台至今已統整近千場有關於環境教育、動物保育的活動、講座、\n            募資等資訊，也接洽過百家廠商洽談有機商品的合作。<br><br>\n\n            希望可以藉由網路力量及整合平台的優勢，讓宣傳資源較少的公益團隊能夠透過\n            Natural 環保資訊整合平台增加曝光度，維持公益團隊的運作。<br><br>\n\n            民眾也能利用 Natural 環保資訊整合平台，快速獲取公益活動，用自己的方式為環境盡一份心力。\n          ",img:"https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625386513455.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=moZhegjw%2FvCbWRXbREXgpFLaQh5gEL4t%2F%2B3LnHxTUIh2r%2F0qnUp7hGW7l03E%2BTFv5scCn1dhVAmXZcUZtqJ56bwU6gAlwExwcAmWtldyMT3IcJpwJA%2BaiF0FGgk2Jqwhni6WgRuSlsux%2Fef5v1MctATYVz6Ds2o%2Bpg%2F5tnviMHK9Zx6rT%2BNQaTqhBvu%2FpZhkvwrArazx%2BG5vOSB7Qsbu7Szr8obEftmIwfBTaQ2h5XeIgMxKTysvwERU%2BnwBBXSOiFQVJC%2F6Hlfsh5Z7EyRtMD7PlG6VKpbNjgc3UXga5Esq0IQQQb%2BycapLwTEsmowzPwXanU6dV6vA%2FkPwelICkQ%3D%3D"}]}},components:{HeaderBackgroundImg:y["a"],Breadcrumb:x["a"]},methods:{backTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},created:function(){this.backTop()}};k.render=w;t["default"]=k},e8b5:function(e,t,a){var c=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}}}]);
//# sourceMappingURL=chunk-74adf544.b35b38f8.js.map
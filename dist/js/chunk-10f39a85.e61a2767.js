(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f39a85"],{"1dde":function(e,t,n){var o=n("d039"),a=n("b622"),r=n("2d00"),c=a("species");e.exports=function(e){return r>=51||!o((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,n){var o=n("861d"),a=n("e8b5"),r=n("b622"),c=r("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},8418:function(e,t,n){"use strict";var o=n("c04e"),a=n("9bf2"),r=n("5c6c");e.exports=function(e,t,n){var c=o(t);c in e?a.f(e,c,r(0,n)):e[c]=n}},"99af":function(e,t,n){"use strict";var o=n("23e7"),a=n("d039"),r=n("e8b5"),c=n("861d"),s=n("7b0b"),i=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),b=n("b622"),m=n("2d00"),f=b("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",g=m>=51||!a((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),j=d("concat"),v=function(e){if(!c(e))return!1;var t=e[f];return void 0!==t?!!t:r(e)},O=!g||!j;o({target:"Array",proto:!0,forced:O},{concat:function(e){var t,n,o,a,r,c=s(this),d=u(c,0),b=0;for(t=-1,o=arguments.length;t<o;t++)if(r=-1===t?c:arguments[t],v(r)){if(a=i(r.length),b+a>h)throw TypeError(p);for(n=0;n<a;n++,b++)n in r&&l(d,b,r[n])}else{if(b>=h)throw TypeError(p);l(d,b++,r)}return d.length=b,d}})},a55b:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"p-5 bg-primary min-vh-100 mx-auto"},r={class:"row justify-content-center"},c=Object(o["g"])(" Natural "),s={class:"col-md-8 col-xl-5 col-xxl-4 p-5 bg-white rounded-1 shadow"},i=Object(o["h"])("h2",{class:"text-center fw-bold my-2"},"後台登入",-1),l={class:"mb-3"},u=Object(o["h"])("label",{for:"orderEmail",class:"form-label mt-3 mb-1"},"帳號",-1),d=Object(o["h"])("label",{for:"orderPs",class:"form-label mt-3 mb-1"},"密碼",-1),b={class:"text-danger text-center my-3"};function m(e,t,n,m,f,h){var p=Object(o["y"])("Loading"),g=Object(o["y"])("Font-awesome-icon"),j=Object(o["y"])("router-link"),v=Object(o["y"])("Field"),O=Object(o["y"])("error-message"),y=Object(o["y"])("Form");return Object(o["t"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(p,{status:f.loadingStatus},null,8,["status"]),Object(o["h"])("section",a,[Object(o["h"])("section",r,[Object(o["h"])(j,{to:"/",class:"nav-link logo h1 my-4 pb-0 text-center"},{default:Object(o["J"])((function(){return[Object(o["h"])(g,{icon:"crow",class:"d-inline-block align-text-top"}),c]})),_:1}),Object(o["h"])("section",s,[i,Object(o["h"])("div",l,[Object(o["h"])(y,null,{default:Object(o["J"])((function(e){var n=e.errors;return[u,Object(o["h"])(v,{type:"email",name:"Email",placeholder:"請輸入email",id:"orderEmail",class:["form-control",{"is-invalid":n["Email"]}],rules:"required|email",modelValue:f.userDatas.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.userDatas.username=e})},null,8,["class","modelValue"]),Object(o["h"])(O,{name:"Email",class:"invalid-feedback mb-1"}),d,Object(o["h"])(v,{type:"password",name:"密碼",placeholder:"請輸入密碼",id:"orderPs",class:["form-control",{"is-invalid":n["密碼"]}],rules:"required",modelValue:f.userDatas.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.userDatas.password=e})},null,8,["class","modelValue"]),Object(o["h"])(O,{name:"密碼",class:"invalid-feedback mb-1"})]})),_:1}),Object(o["h"])("p",b,Object(o["B"])(f.msg),1),Object(o["h"])("button",{type:"submit",class:"btn btn_main w-100 mt-1 mb-2",onClick:t[3]||(t[3]=function(){return h.login&&h.login.apply(h,arguments)})},"登入")])])])])],64)}n("99af");var f={name:"Login",data:function(){return{loadingStatus:!1,userDatas:{username:"",password:""},msg:""}},methods:{login:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/admin/signin");this.loadingStatus=!0,this.msg="資料驗證中，請稍後",this.$http.post(t,this.userDatas).then((function(t){if(!t.data.success)return console.log("(錯誤)登入 res:",t),e.msg="".concat(t.data.message,", 請檢查帳號密碼"),void(e.loadingStatus=!1);console.log("(成功)登入 res:",t),e.msg="登入成功",e.loadingStatus=!1,e.$router.push("/admin/dashboardProducts");var n=t.data,o=n.token,a=n.expired;document.cookie="hexToken=".concat(o,"; expires=").concat(new Date(a))})).catch((function(t){console.log("(失敗)登入 res:"),console.dir(t),e.loadingStatus=!1}))}}};f.render=m;t["default"]=f},e8b5:function(e,t,n){var o=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}}}]);
//# sourceMappingURL=chunk-10f39a85.e61a2767.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e51dccc"],{1593:function(t,e,a){"use strict";a.r(e);a("b0c0");var r=a("7a23"),c={class:"container pageContent py-5 overflow-auto"},s=Object(r["h"])("h1",{class:"text-center fw-bold m-0 pb-5"},"訂單管理",-1),n={class:"row justify-content-between pb-2"},d={class:"col-md-6 col-lg-5 col-xl-4 pb-1"},o={class:" input-group"},i=Object(r["h"])("label",{for:"orderSearch",class:"input-group-text"},[Object(r["h"])("i",{class:"bi bi-search fs-6"})],-1),l={class:"col-md-6 text-end pb-1"},h=Object(r["h"])("i",{class:"bi bi-arrow-counterclockwise"},null,-1),b={class:"table-responsive"},O={class:"table table-hover rounded overflow-hidden shadow-sm\n          text-break text-center"},u=Object(r["h"])("thead",{class:"table-dark align-middle"},[Object(r["h"])("tr",null,[Object(r["h"])("td",{width:"10%"},"建立時間"),Object(r["h"])("td",{width:"20%"},"訂單編號"),Object(r["h"])("td",{width:"15%"},"訂購人"),Object(r["h"])("td",{width:"17%"},"Email"),Object(r["h"])("td",{width:"8%"},"總金額"),Object(r["h"])("td",{width:"8%"},"付款狀態"),Object(r["h"])("td",{width:"8%"},"處理進度"),Object(r["h"])("td",{width:"7%"},"操作"),Object(r["h"])("td",{width:"7%"},"刪除")])],-1),p={"data-title":"建立時間"},j={"data-title":"訂單編號"},m={"data-title":"訂購人"},f={"data-title":"Email"},g={"data-title":"總金額"},w={"data-title":"處理進度"},x={key:1,class:"text-gray"},v={"data-title":"操作"},y={"data-title":"刪除"};function S(t,e,a,S,_,D){var k=Object(r["A"])("DashboardLoading"),N=Object(r["A"])("Pagination"),M=Object(r["A"])("OrderModal");return Object(r["v"])(),Object(r["d"])(r["a"],null,[Object(r["h"])(k,{status:_.loadingStatus},null,8,["status"]),Object(r["h"])("section",c,[s,Object(r["h"])("div",n,[Object(r["h"])("div",d,[Object(r["h"])("span",o,[Object(r["N"])(Object(r["h"])("input",{type:"search",class:"form-control",placeholder:"請輸入訂單編號","aria-label":"search","aria-describedby":"basic-addon1",id:"orderSearch","onUpdate:modelValue":e[1]||(e[1]=function(t){return _.orderSearch=t})},null,512),[[r["J"],_.orderSearch]]),i])]),Object(r["h"])("div",l,[Object(r["h"])("button",{class:"btn btn-outline-danger",onClick:e[2]||(e[2]=function(t){return D.delAllOrderSwalFn("all")})}," 刪除全部訂單 "),Object(r["h"])("button",{type:"button",class:"btn btn-outline-brown-500 btn-sm fs-5 ms-1",onClick:e[3]||(e[3]=function(){return D.resetData&&D.resetData.apply(D,arguments)})},[h])])]),Object(r["h"])("div",b,[Object(r["h"])("table",O,[u,Object(r["h"])("tbody",null,[(Object(r["v"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(D.filterOrder,(function(e){return Object(r["v"])(),Object(r["d"])("tr",{key:e.id},[Object(r["h"])("td",p,Object(r["D"])(t.$filters.date(e.create_at)),1),Object(r["h"])("td",j,Object(r["D"])(e.id),1),Object(r["h"])("td",m,Object(r["D"])(e.user.name),1),Object(r["h"])("td",f,Object(r["D"])(e.user.email),1),Object(r["h"])("td",g," $ "+Object(r["D"])(t.$filters.currency(e.total)),1),Object(r["h"])("td",{"data-title":"付款狀態",class:{"text-gray":!e.is_paid},title:"付款日期： ".concat(t.$filters.date(e.paid_date))},Object(r["D"])(e.is_paid?"已付款":"未付款"),11,["title"]),Object(r["h"])("td",w,["貨到付款"===e.user.payment||e.is_paid?(Object(r["v"])(),Object(r["d"])("span",{key:0,class:["m-0",{"text-warning-dark":e.is_consignment,"text-danger":!e.is_consignment}]},Object(r["D"])(e.is_consignment?"已出貨":"處理中"),3)):(Object(r["v"])(),Object(r["d"])("span",x," 訂單成立 "))]),Object(r["h"])("td",v,[Object(r["h"])("button",{class:"btn btn-outline-brown-500 px-2 py-1",onClick:function(t){return D.openOrderModal(e)}}," 更多 ",8,["onClick"])]),Object(r["h"])("td",y,[Object(r["h"])("i",{class:"bi bi-trash-fill btn btn-outline-danger",onClick:function(t){return D.delOrderSwalFn(e,"one")}},null,8,["onClick"])])])})),128))])])]),Object(r["h"])(N,{"pagination-isShow":_.isPaginationShow,"pagination-page":_.ordersPagination,onGetData:D.getOrders},null,8,["pagination-isShow","pagination-page","onGetData"]),Object(r["h"])(M,{ref:"orderModal","modal-order":_.tempOrderData,onModalUpdateOrderPaid:D.updateOrderPaid},null,8,["modal-order","onModalUpdateOrderPaid"])])],64)}a("4de4"),a("ac1f"),a("466d"),a("99af");var _=a("4897"),D=a("6718"),k=a("dd6c"),N={class:"modal fade",id:"orderFirstModal",tabindex:"-1","aria-hidden":"true",ref:"modal"},M={class:"modal-dialog modal-dialog-centered width_xl"},P={class:"modal-content"},$=Object(r["h"])("div",{class:"modal-header bg-warning text-brown-500"},[Object(r["h"])("h5",{class:"modal-title",id:"orderModalLabel"}," 修改訂單 "),Object(r["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={class:"modal-body px-md-5"},E={class:"row"},A={class:"col-12"},C=Object(r["h"])("h1",{class:"h4 text-center my-2"}," 訂購人資訊 ",-1),F={class:"table border rounded shadow-sm text-break"},U=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 姓名 ",-1),G={class:"px-2"},V=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 電話 ",-1),L={class:"px-2"},T=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," Email ",-1),J={class:"px-2"},R=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 寄送方式 ",-1),z={class:"px-2"},X=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 寄送地址 ",-1),Y={class:"px-2"},B=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 備註 ",-1),q={class:"px-2"},H={class:"col-12 p-2"},K=Object(r["h"])("h1",{class:"h4 text-center my-2"},"訂單資訊",-1),Q={class:"table border rounded shadow-sm text-break"},W=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 訂單編號 ",-1),Z={class:"px-2"},tt=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 訂單成立時間 ",-1),et={class:"px-2"},at=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 訂單總金額 ",-1),rt={class:"px-2"},ct=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 付款方式 ",-1),st={class:"px-2"},nt=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 付款狀態 ",-1),dt={class:"px-2"},ot={for:"isPaid_status"},it=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 付款時間 ",-1),lt={class:"px-2"},ht=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 處理進度 ",-1),bt={class:"px-2"},Ot={key:1,class:"text-gray"},ut={class:"col-12 p-2 text-center"},pt=Object(r["h"])("h1",{class:"h4 text-center my-2"},"購買明細",-1),jt={class:"table border rounded shadow-sm text-break"},mt=Object(r["h"])("thead",{class:"border-bottom"},[Object(r["h"])("th",{scope:"row",class:"py-1"}," 品名 "),Object(r["h"])("th",{scope:"row",class:"py-1"}," 數量 "),Object(r["h"])("th",{scope:"row",class:"py-1"}," 售價 "),Object(r["h"])("th",{scope:"row",class:"py-1"}," 折扣後價格 "),Object(r["h"])("th",{scope:"row",class:"py-1"}," 小計 ")],-1),ft={class:"col-12 form-check\n                d-flex justify-content-end align-items-center"},gt=Object(r["h"])("label",{for:"consignment_status"}," 商品出貨 ",-1),wt={class:"modal-footer"},xt=Object(r["h"])("button",{type:"button",class:"btn btn-outline-brown-500","data-bs-dismiss":"modal"}," 關閉 ",-1);function vt(t,e,a,c,s,n){return Object(r["v"])(),Object(r["d"])("section",N,[Object(r["h"])("section",M,[Object(r["h"])("main",P,[$,Object(r["h"])("div",I,[Object(r["h"])("div",E,[Object(r["h"])("div",A,[C,Object(r["h"])("table",F,[Object(r["h"])("tbody",null,[Object(r["h"])("tr",null,[U,Object(r["h"])("td",G,Object(r["D"])(s.tempOrder.user.name),1)]),Object(r["h"])("tr",null,[V,Object(r["h"])("td",L,Object(r["D"])(s.tempOrder.user.tel),1)]),Object(r["h"])("tr",null,[T,Object(r["h"])("td",J,Object(r["D"])(s.tempOrder.user.email),1)]),Object(r["h"])("tr",null,[R,Object(r["h"])("td",z,Object(r["D"])(s.tempOrder.user.delivery),1)]),Object(r["h"])("tr",null,[X,Object(r["h"])("td",Y,Object(r["D"])(s.tempOrder.user.address),1)]),Object(r["h"])("tr",null,[B,Object(r["h"])("td",q,Object(r["D"])(s.tempOrder.message?s.tempOrder.message:"無"),1)])])])]),Object(r["h"])("div",H,[K,Object(r["h"])("table",Q,[Object(r["h"])("tbody",null,[Object(r["h"])("tr",null,[W,Object(r["h"])("td",Z,Object(r["D"])(s.tempOrder.id),1)]),Object(r["h"])("tr",null,[tt,Object(r["h"])("td",et,Object(r["D"])(t.$filters.date(s.tempOrder.create_at)),1)]),Object(r["h"])("tr",null,[at,Object(r["h"])("td",rt," $ "+Object(r["D"])(t.$filters.currency(s.tempOrder.total))+" 元 ",1)]),Object(r["h"])("tr",null,[ct,Object(r["h"])("td",st,Object(r["D"])(s.tempOrder.user.payment),1)]),Object(r["h"])("tr",null,[nt,Object(r["h"])("td",dt,[Object(r["h"])("span",{class:["form-check",{"text-warning-dark":s.tempOrder.is_paid,"text-gray":!s.tempOrder.is_paid}]},[Object(r["N"])(Object(r["h"])("input",{type:"checkbox",id:"isPaid_status",class:"form-check-input me-1",name:"付款狀態",value:"付款狀態","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.tempOrder.is_paid=t})},null,512),[[r["G"],s.tempOrder.is_paid]]),Object(r["h"])("label",ot,Object(r["D"])(s.tempOrder.is_paid?"已付款":"未付款"),1)],2)])]),Object(r["h"])("tr",null,[it,Object(r["h"])("td",lt,Object(r["D"])(t.$filters.date(s.tempOrder.paid_date)),1)]),Object(r["h"])("tr",null,[ht,Object(r["h"])("td",bt,[s.orderStatus?(Object(r["v"])(),Object(r["d"])("span",{key:0,class:["m-0",{"text-warning-dark":s.tempOrder.is_consignment,"text-danger":!s.tempOrder.is_consignment}]},Object(r["D"])(s.tempOrder.is_consignment?"已出貨":"處理中"),3)):(Object(r["v"])(),Object(r["d"])("span",Ot," 訂單成立 "))])])])])]),Object(r["h"])("div",ut,[pt,Object(r["h"])("table",jt,[mt,Object(r["h"])("tbody",null,[(Object(r["v"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(s.tempOrder.products,(function(e){return Object(r["v"])(),Object(r["d"])("tr",{key:e.product_id},[Object(r["h"])("td",null,Object(r["D"])(e.product.title),1),Object(r["h"])("td",null,Object(r["D"])(e.product.num)+" "+Object(r["D"])(e.product.unit),1),Object(r["h"])("td",null," $"+Object(r["D"])(t.$filters.currency(e.product.price)),1),Object(r["h"])("td",null," $ "+Object(r["D"])(t.$filters.currency(e.final_total)),1),Object(r["h"])("td",null," $ "+Object(r["D"])(t.$filters.currency(e.final_total)),1)])})),128))])])]),Object(r["h"])("span",ft,[Object(r["N"])(Object(r["h"])("input",{type:"checkbox",id:"consignment_status",class:"form-check-input me-1",name:"處理進度",value:"處理進度","onUpdate:modelValue":e[2]||(e[2]=function(t){return s.tempOrder.is_consignment=t})},null,512),[[r["G"],s.tempOrder.is_consignment]]),gt])])]),Object(r["h"])("div",wt,[xt,Object(r["h"])("button",{type:"button",onClick:e[3]||(e[3]=function(e){return t.$emit("modalUpdateOrderPaid",s.tempOrder)}),class:"btn btn-warning text-brown-500"}," 變更訂單狀態 ")])])])],512)}a("a9e3");var yt=a("7c2b"),St=a.n(yt),_t={name:"DashboardOrderModal",props:["modalOrder"],data:function(){return{orderModal:"",orderStatus:!1,tempOrder:{create_at:Number,id:"",is_paid:Boolean,paid_date:Number,products:{},total:Number,user:{name:"",email:"",tel:"",address:"",payment:""}}}},watch:{modalOrder:function(){this.tempOrder=this.modalOrder,"貨到付款"===this.modalOrder.user.payment||this.modalOrder.is_paid?this.orderStatus=!0:this.orderStatus=!1}},emits:["modalUpdateOrderPaid"],methods:{openOrderModal:function(){this.orderModal.show()},hideOderModal:function(){this.orderModal.hide()}},mounted:function(){this.orderModal=new St.a(this.$refs.modal)}};_t.render=vt;var Dt=_t,kt={name:"DashboardOrders",data:function(){return{loadingStatus:!1,orderSearch:"",ordersPagination:{},orders:[],tempOrderData:{},isPaginationShow:!0}},watch:{orderSearch:function(){""!==this.orderSearch?this.filterOrder.length>9?this.isPaginationShow=!0:this.isPaginationShow=!1:""===this.orderSearch&&(this.isPaginationShow=!0)}},computed:{filterOrder:function(){var t=this;return this.orders.filter((function(e){return e.id.match(t.orderSearch)}))}},components:{DashboardLoading:D["a"],Pagination:k["a"],OrderModal:Dt},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/orders?page=").concat(e);this.loadingStatus=!0,this.$http.get(a).then((function(e){e.data.success?(t.orders=e.data.orders,t.ordersPagination=e.data.pagination,t.ordersPagination.total_pages>1&&(t.isPaginationShow=!0),t.loadingStatus=!1):(Object(_["c"])("資料取得失敗","error"),t.loadingStatus=!1)})).catch((function(){Object(_["c"])("資料取得失敗","error"),t.loadingStatus=!1}))},delOrder:function(t){var e=this,a=t.action,r=t.id,c="";this.loadingStatus=!0,"all"===a?c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/orders/all"):"one"===a&&(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/order/").concat(r)),this.$http.delete(c).then((function(t){t.data.success?(e.getOrders(),Object(_["c"])(t.data.message,"success")):(Object(_["c"])(t.data.message,"error"),e.loadingStatus=!1)})).catch((function(){Object(_["c"])("操作失敗","error"),e.loadingStatus=!1}))},delOrderSwalFn:function(t,e){Object(_["a"])(t,this.delOrder,e)},delAllOrderSwalFn:function(t){Object(_["b"])(t,this.delOrder)},updateOrderPaid:function(t){var e=this,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/order/").concat(t.id);this.loadingStatus=!0,t.is_paid?this.tempOrderData.paid_date=Date.parse(new Date)/1e3:this.tempOrderData.paid_date=null,this.$http.put(a,{data:t}).then((function(t){t.data.success?(e.$refs.orderModal.hideOderModal(),Object(_["c"])(t.data.message,"success"),e.getOrders()):(Object(_["c"])(t.data.message,"error"),e.loadingStatus=!1)})).catch((function(){Object(_["c"])("操作失敗","error"),e.loadingStatus=!1}))},openOrderModal:function(t){this.tempOrderData=JSON.parse(JSON.stringify(t)),this.$refs.orderModal.openOrderModal()},resetData:function(){Object(_["c"])("正在重整資料","info"),this.clearSearch(),this.getOrders()}},mounted:function(){this.getOrders()}};kt.render=S;e["default"]=kt},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),c=a("5899"),s="["+c+"]",n=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),o=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(d,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,a){var r=a("861d"),c=a("d2bb");t.exports=function(t,e,a){var s,n;return c&&"function"==typeof(s=e.constructor)&&s!==a&&r(n=s.prototype)&&n!==a.prototype&&c(t,n),t}},a9e3:function(t,e,a){"use strict";var r=a("83ab"),c=a("da84"),s=a("94ca"),n=a("6eeb"),d=a("5135"),o=a("c6b6"),i=a("7156"),l=a("c04e"),h=a("d039"),b=a("7c73"),O=a("241c").f,u=a("06cf").f,p=a("9bf2").f,j=a("58a8").trim,m="Number",f=c[m],g=f.prototype,w=o(b(g))==m,x=function(t){var e,a,r,c,s,n,d,o,i=l(t,!1);if("string"==typeof i&&i.length>2)if(i=j(i),e=i.charCodeAt(0),43===e||45===e){if(a=i.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(i.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+i}for(s=i.slice(2),n=s.length,d=0;d<n;d++)if(o=s.charCodeAt(d),o<48||o>c)return NaN;return parseInt(s,r)}return+i};if(s(m,!f(" 0o1")||!f("0b1")||f("+0x1"))){for(var v,y=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof y&&(w?h((function(){g.valueOf.call(a)})):o(a)!=m)?i(new f(x(e)),a,y):x(e)},S=r?O(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;S.length>_;_++)d(f,v=S[_])&&!d(y,v)&&p(y,v,u(f,v));y.prototype=g,g.constructor=y,n(c,m,y)}},b0c0:function(t,e,a){var r=a("83ab"),c=a("9bf2").f,s=Function.prototype,n=s.toString,d=/^\s*function ([^ (]*)/,o="name";r&&!(o in s)&&c(s,o,{configurable:!0,get:function(){try{return n.call(this).match(d)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-2e51dccc.21232ad1.js.map
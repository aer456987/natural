(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e51dccc"],{1593:function(t,e,a){"use strict";a.r(e);a("b0c0");var r=a("7a23"),c={class:"container pageContent py-5 overflow-auto"},n=Object(r["h"])("h1",{class:"text-center fw-bold m-0 pb-5"},"訂單管理",-1),s={class:"row justify-content-between pb-2"},d={class:"col-md-6 col-lg-5 col-xl-4 pb-1"},o={class:" input-group"},i={class:"col-md-6 text-end pb-1"},l=Object(r["h"])("i",{class:"bi bi-arrow-counterclockwise"},null,-1),h={class:"table-responsive"},b={class:"table table-hover rounded overflow-hidden shadow-sm\n          text-break text-center"},O=Object(r["h"])("thead",{class:"table-dark align-middle"},[Object(r["h"])("tr",null,[Object(r["h"])("td",{width:"10%"},"建立時間"),Object(r["h"])("td",{width:"20%"},"訂單編號"),Object(r["h"])("td",{width:"15%"},"訂購人"),Object(r["h"])("td",{width:"17%"},"Email"),Object(r["h"])("td",{width:"8%"},"總金額"),Object(r["h"])("td",{width:"8%"},"付款狀態"),Object(r["h"])("td",{width:"8%"},"處理進度"),Object(r["h"])("td",{width:"7%"},"操作"),Object(r["h"])("td",{width:"7%"},"刪除")])],-1),u={"data-title":"建立時間"},p={"data-title":"訂單編號"},j={"data-title":"訂購人"},m={"data-title":"Email"},f={"data-title":"總金額"},g={"data-title":"處理進度"},w={key:1,class:"text-gray"},x={"data-title":"操作"},v={"data-title":"刪除"};function y(t,e,a,y,S,_){var D=Object(r["A"])("DashboardLoading"),k=Object(r["A"])("Pagination"),N=Object(r["A"])("OrderModal");return Object(r["v"])(),Object(r["d"])(r["a"],null,[Object(r["h"])(D,{status:S.loadingStatus},null,8,["status"]),Object(r["h"])("section",c,[n,Object(r["h"])("div",s,[Object(r["h"])("div",d,[Object(r["h"])("span",o,[Object(r["N"])(Object(r["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入訂單編號","aria-label":"search","aria-describedby":"basic-addon1","onUpdate:modelValue":e[1]||(e[1]=function(t){return S.orderSearch=t})},null,512),[[r["J"],S.orderSearch]]),Object(r["h"])("i",{class:"bi bi-x-lg fs-6 btn btn-outline-brown-500 input-group-text",onClick:e[2]||(e[2]=function(){return _.clearSearch&&_.clearSearch.apply(_,arguments)})})])]),Object(r["h"])("div",i,[Object(r["h"])("button",{class:"btn btn-outline-danger",onClick:e[3]||(e[3]=function(t){return _.delAllOrderSwalFn("all")})}," 刪除全部訂單 "),Object(r["h"])("button",{type:"button",class:"btn btn-outline-brown-500 btn-sm fs-5 ms-1",onClick:e[4]||(e[4]=function(){return _.resetData&&_.resetData.apply(_,arguments)})},[l])])]),Object(r["h"])("div",h,[Object(r["h"])("table",b,[O,Object(r["h"])("tbody",null,[(Object(r["v"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(_.filterOrder,(function(e){return Object(r["v"])(),Object(r["d"])("tr",{key:e.id},[Object(r["h"])("td",u,Object(r["D"])(t.$filters.date(e.create_at)),1),Object(r["h"])("td",p,Object(r["D"])(e.id),1),Object(r["h"])("td",j,Object(r["D"])(e.user.name),1),Object(r["h"])("td",m,Object(r["D"])(e.user.email),1),Object(r["h"])("td",f," $ "+Object(r["D"])(t.$filters.currency(e.total)),1),Object(r["h"])("td",{"data-title":"付款狀態",class:{"text-gray":!e.is_paid},title:"付款日期： ".concat(t.$filters.date(e.paid_date))},Object(r["D"])(e.is_paid?"已付款":"未付款"),11,["title"]),Object(r["h"])("td",g,["貨到付款"===e.user.payment||e.is_paid?(Object(r["v"])(),Object(r["d"])("span",{key:0,class:["m-0",{"text-warning-dark":e.is_consignment,"text-danger":!e.is_consignment}]},Object(r["D"])(e.is_consignment?"已出貨":"處理中"),3)):(Object(r["v"])(),Object(r["d"])("span",w," 訂單成立 "))]),Object(r["h"])("td",x,[Object(r["h"])("button",{class:"btn btn-outline-brown-500 px-2 py-1",onClick:function(t){return _.openOrderModal(e)}}," 更多 ",8,["onClick"])]),Object(r["h"])("td",v,[Object(r["h"])("i",{class:"bi bi-trash-fill btn btn-outline-danger",onClick:function(t){return _.delOrderSwalFn(e,"one")}},null,8,["onClick"])])])})),128))])])]),Object(r["h"])(k,{"pagination-isShow":S.isPaginationShow,"pagination-page":S.ordersPagination,onGetData:_.getOrders},null,8,["pagination-isShow","pagination-page","onGetData"]),Object(r["h"])(N,{ref:"orderModal","modal-order":S.tempOrderData,onModalUpdateOrderPaid:_.updateOrderPaid},null,8,["modal-order","onModalUpdateOrderPaid"])])],64)}a("4de4"),a("ac1f"),a("466d"),a("99af");var S=a("4897"),_=a("6718"),D=a("dd6c"),k={class:"modal fade",id:"orderFirstModal",tabindex:"-1","aria-hidden":"true",ref:"modal"},N={class:"modal-dialog modal-dialog-centered width_xl"},M={class:"modal-content"},P=Object(r["h"])("div",{class:"modal-header bg-warning text-brown-500"},[Object(r["h"])("h5",{class:"modal-title",id:"orderModalLabel"}," 修改訂單 "),Object(r["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body px-md-5"},I={class:"row"},E={class:"col-12"},A=Object(r["h"])("h1",{class:"h4 text-center my-2"}," 訂購人資訊 ",-1),C={class:"table border rounded shadow-sm text-break"},F=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 姓名 ",-1),U={class:"px-2"},G=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 電話 ",-1),V={class:"px-2"},L=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," Email ",-1),T={class:"px-2"},J=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 寄送方式 ",-1),R={class:"px-2"},z=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 寄送地址 ",-1),X={class:"px-2"},Y=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 備註 ",-1),B={class:"px-2"},q={class:"col-12 p-2"},H=Object(r["h"])("h1",{class:"h4 text-center my-2"},"訂單資訊",-1),K={class:"table border rounded shadow-sm text-break"},Q=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 訂單編號 ",-1),W={class:"px-2"},Z=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 訂單成立時間 ",-1),tt={class:"px-2"},et=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 訂單總金額 ",-1),at={class:"px-2"},rt=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 付款方式 ",-1),ct={class:"px-2"},nt=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 付款狀態 ",-1),st={class:"px-2"},dt={for:"isPaid_status"},ot=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 付款時間 ",-1),it={class:"px-2"},lt=Object(r["h"])("th",{scope:"row",class:"px-2",width:"25%"}," 處理進度 ",-1),ht={class:"px-2"},bt={key:1,class:"text-gray"},Ot={class:"col-12 p-2 text-center"},ut=Object(r["h"])("h1",{class:"h4 text-center my-2"},"購買明細",-1),pt={class:"table border rounded shadow-sm text-break"},jt=Object(r["h"])("thead",{class:"border-bottom"},[Object(r["h"])("th",{scope:"row",class:"py-1"}," 品名 "),Object(r["h"])("th",{scope:"row",class:"py-1"}," 數量 "),Object(r["h"])("th",{scope:"row",class:"py-1"}," 售價 "),Object(r["h"])("th",{scope:"row",class:"py-1"}," 折扣後價格 "),Object(r["h"])("th",{scope:"row",class:"py-1"}," 小計 ")],-1),mt={class:"col-12 form-check\n                d-flex justify-content-end align-items-center"},ft=Object(r["h"])("label",{for:"consignment_status"}," 商品出貨 ",-1),gt={class:"modal-footer"},wt=Object(r["h"])("button",{type:"button",class:"btn btn-outline-brown-500","data-bs-dismiss":"modal"}," 關閉 ",-1);function xt(t,e,a,c,n,s){return Object(r["v"])(),Object(r["d"])("section",k,[Object(r["h"])("section",N,[Object(r["h"])("main",M,[P,Object(r["h"])("div",$,[Object(r["h"])("div",I,[Object(r["h"])("div",E,[A,Object(r["h"])("table",C,[Object(r["h"])("tbody",null,[Object(r["h"])("tr",null,[F,Object(r["h"])("td",U,Object(r["D"])(n.tempOrder.user.name),1)]),Object(r["h"])("tr",null,[G,Object(r["h"])("td",V,Object(r["D"])(n.tempOrder.user.tel),1)]),Object(r["h"])("tr",null,[L,Object(r["h"])("td",T,Object(r["D"])(n.tempOrder.user.email),1)]),Object(r["h"])("tr",null,[J,Object(r["h"])("td",R,Object(r["D"])(n.tempOrder.user.delivery),1)]),Object(r["h"])("tr",null,[z,Object(r["h"])("td",X,Object(r["D"])(n.tempOrder.user.address),1)]),Object(r["h"])("tr",null,[Y,Object(r["h"])("td",B,Object(r["D"])(n.tempOrder.message?n.tempOrder.message:"無"),1)])])])]),Object(r["h"])("div",q,[H,Object(r["h"])("table",K,[Object(r["h"])("tbody",null,[Object(r["h"])("tr",null,[Q,Object(r["h"])("td",W,Object(r["D"])(n.tempOrder.id),1)]),Object(r["h"])("tr",null,[Z,Object(r["h"])("td",tt,Object(r["D"])(t.$filters.date(n.tempOrder.create_at)),1)]),Object(r["h"])("tr",null,[et,Object(r["h"])("td",at," $ "+Object(r["D"])(t.$filters.currency(n.tempOrder.total))+" 元 ",1)]),Object(r["h"])("tr",null,[rt,Object(r["h"])("td",ct,Object(r["D"])(n.tempOrder.user.payment),1)]),Object(r["h"])("tr",null,[nt,Object(r["h"])("td",st,[Object(r["h"])("span",{class:["form-check",{"text-warning-dark":n.tempOrder.is_paid,"text-gray":!n.tempOrder.is_paid}]},[Object(r["N"])(Object(r["h"])("input",{type:"checkbox",id:"isPaid_status",class:"form-check-input me-1",name:"付款狀態",value:"付款狀態","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.tempOrder.is_paid=t})},null,512),[[r["G"],n.tempOrder.is_paid]]),Object(r["h"])("label",dt,Object(r["D"])(n.tempOrder.is_paid?"已付款":"未付款"),1)],2)])]),Object(r["h"])("tr",null,[ot,Object(r["h"])("td",it,Object(r["D"])(t.$filters.date(n.tempOrder.paid_date)),1)]),Object(r["h"])("tr",null,[lt,Object(r["h"])("td",ht,[n.orderStatus?(Object(r["v"])(),Object(r["d"])("span",{key:0,class:["m-0",{"text-warning-dark":n.tempOrder.is_consignment,"text-danger":!n.tempOrder.is_consignment}]},Object(r["D"])(n.tempOrder.is_consignment?"已出貨":"處理中"),3)):(Object(r["v"])(),Object(r["d"])("span",bt," 訂單成立 "))])])])])]),Object(r["h"])("div",Ot,[ut,Object(r["h"])("table",pt,[jt,Object(r["h"])("tbody",null,[(Object(r["v"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(n.tempOrder.products,(function(e){return Object(r["v"])(),Object(r["d"])("tr",{key:e.product_id},[Object(r["h"])("td",null,Object(r["D"])(e.product.title),1),Object(r["h"])("td",null,Object(r["D"])(e.product.num)+" "+Object(r["D"])(e.product.unit),1),Object(r["h"])("td",null," $"+Object(r["D"])(t.$filters.currency(e.product.price)),1),Object(r["h"])("td",null," $ "+Object(r["D"])(t.$filters.currency(e.final_total)),1),Object(r["h"])("td",null," $ "+Object(r["D"])(t.$filters.currency(e.final_total)),1)])})),128))])])]),Object(r["h"])("span",mt,[Object(r["N"])(Object(r["h"])("input",{type:"checkbox",id:"consignment_status",class:"form-check-input me-1",name:"處理進度",value:"處理進度","onUpdate:modelValue":e[2]||(e[2]=function(t){return n.tempOrder.is_consignment=t})},null,512),[[r["G"],n.tempOrder.is_consignment]]),ft])])]),Object(r["h"])("div",gt,[wt,Object(r["h"])("button",{type:"button",onClick:e[3]||(e[3]=function(e){return t.$emit("modalUpdateOrderPaid",n.tempOrder)}),class:"btn btn-warning text-brown-500"}," 變更訂單狀態 ")])])])],512)}a("a9e3");var vt=a("7c2b"),yt=a.n(vt),St={name:"DashboardOrderModal",props:["modalOrder"],data:function(){return{orderModal:"",orderStatus:!1,tempOrder:{create_at:Number,id:"",is_paid:Boolean,paid_date:Number,products:{},total:Number,user:{name:"",email:"",tel:"",address:"",payment:""}}}},watch:{modalOrder:function(){this.tempOrder=this.modalOrder,"貨到付款"===this.modalOrder.user.payment||this.modalOrder.is_paid?this.orderStatus=!0:this.orderStatus=!1}},emits:["modalUpdateOrderPaid"],methods:{openOrderModal:function(){this.orderModal.show()},hideOderModal:function(){this.orderModal.hide()}},mounted:function(){this.orderModal=new yt.a(this.$refs.modal)}};St.render=xt;var _t=St,Dt={name:"DashboardOrders",data:function(){return{loadingStatus:!1,orderSearch:"",ordersPagination:{},orders:[],tempOrderData:{},isPaginationShow:!0}},watch:{orderSearch:function(){""!==this.orderSearch?this.filterOrder.length>9?this.isPaginationShow=!0:this.isPaginationShow=!1:""===this.orderSearch&&(this.isPaginationShow=!0)}},computed:{filterOrder:function(){var t=this;return this.orders.filter((function(e){return e.id.match(t.orderSearch)}))}},components:{DashboardLoading:_["a"],Pagination:D["a"],OrderModal:_t},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/orders?page=").concat(e);this.loadingStatus=!0,this.$http.get(a).then((function(e){e.data.success?(t.orders=e.data.orders,t.ordersPagination=e.data.pagination,t.ordersPagination.total_pages>1&&(t.isPaginationShow=!0),t.loadingStatus=!1):(Object(S["c"])("資料取得失敗","error"),t.loadingStatus=!1)})).catch((function(){Object(S["c"])("資料取得失敗","error"),t.loadingStatus=!1}))},delOrder:function(t){var e=this,a=t.action,r=t.id,c="";this.loadingStatus=!0,"all"===a?c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/orders/all"):"one"===a&&(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/order/").concat(r)),this.$http.delete(c).then((function(t){t.data.success?(e.getOrders(),Object(S["c"])(t.data.message,"success")):(Object(S["c"])(t.data.message,"error"),e.loadingStatus=!1)})).catch((function(){Object(S["c"])("操作失敗","error"),e.loadingStatus=!1}))},delOrderSwalFn:function(t,e){Object(S["a"])(t,this.delOrder,e)},delAllOrderSwalFn:function(t){Object(S["b"])(t,this.delOrder)},updateOrderPaid:function(t){var e=this,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/order/").concat(t.id);this.loadingStatus=!0,t.is_paid?this.tempOrderData.paid_date=Date.parse(new Date)/1e3:this.tempOrderData.paid_date=null,this.$http.put(a,{data:t}).then((function(t){t.data.success?(e.$refs.orderModal.hideOderModal(),Object(S["c"])(t.data.message,"success"),e.getOrders()):(Object(S["c"])(t.data.message,"error"),e.loadingStatus=!1)})).catch((function(){Object(S["c"])("操作失敗","error"),e.loadingStatus=!1}))},openOrderModal:function(t){this.tempOrderData=JSON.parse(JSON.stringify(t)),this.$refs.orderModal.openOrderModal()},resetData:function(){Object(S["c"])("正在重整資料","info"),this.clearSearch(),this.getOrders()},clearSearch:function(){this.orderSearch=""}},mounted:function(){this.getOrders()}};Dt.render=y;e["default"]=Dt},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),c=a("5899"),n="["+c+"]",s=RegExp("^"+n+n+"*"),d=RegExp(n+n+"*$"),o=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(d,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,a){var r=a("861d"),c=a("d2bb");t.exports=function(t,e,a){var n,s;return c&&"function"==typeof(n=e.constructor)&&n!==a&&r(s=n.prototype)&&s!==a.prototype&&c(t,s),t}},a9e3:function(t,e,a){"use strict";var r=a("83ab"),c=a("da84"),n=a("94ca"),s=a("6eeb"),d=a("5135"),o=a("c6b6"),i=a("7156"),l=a("c04e"),h=a("d039"),b=a("7c73"),O=a("241c").f,u=a("06cf").f,p=a("9bf2").f,j=a("58a8").trim,m="Number",f=c[m],g=f.prototype,w=o(b(g))==m,x=function(t){var e,a,r,c,n,s,d,o,i=l(t,!1);if("string"==typeof i&&i.length>2)if(i=j(i),e=i.charCodeAt(0),43===e||45===e){if(a=i.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(i.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+i}for(n=i.slice(2),s=n.length,d=0;d<s;d++)if(o=n.charCodeAt(d),o<48||o>c)return NaN;return parseInt(n,r)}return+i};if(n(m,!f(" 0o1")||!f("0b1")||f("+0x1"))){for(var v,y=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof y&&(w?h((function(){g.valueOf.call(a)})):o(a)!=m)?i(new f(x(e)),a,y):x(e)},S=r?O(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;S.length>_;_++)d(f,v=S[_])&&!d(y,v)&&p(y,v,u(f,v));y.prototype=g,g.constructor=y,s(c,m,y)}},b0c0:function(t,e,a){var r=a("83ab"),c=a("9bf2").f,n=Function.prototype,s=n.toString,d=/^\s*function ([^ (]*)/,o="name";r&&!(o in n)&&c(n,o,{configurable:!0,get:function(){try{return s.call(this).match(d)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-2e51dccc.11965bf2.js.map
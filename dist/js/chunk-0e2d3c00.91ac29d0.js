(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e2d3c00"],{"159b":function(e,t,o){var c=o("da84"),a=o("fdbc"),r=o("17c2"),n=o("9112");for(var d in a){var l=c[d],i=l&&l.prototype;if(i&&i.forEach!==r)try{n(i,"forEach",r)}catch(s){i.forEach=r}}},"17c2":function(e,t,o){"use strict";var c=o("b727").forEach,a=o("a640"),r=a("forEach");e.exports=r?[].forEach:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}},"8d66":function(e,t,o){"use strict";o.r(t);var c=o("7a23"),a={class:"container page-content py-5 overflow-hidden"},r=Object(c["createVNode"])("h2",{class:"h1 text-center fw-bold m-0 pb-5"}," 商品管理 ",-1),n={class:"row justify-content-between pb-2"},d={class:"col-md-8 col-lg-6 pb-1"},l={class:"row"},i={class:"col-6 col-lg-6 col-xl-4"},s=Object(c["createStaticVNode"])('<option value="全部商品" selected>全部商品</option><option value="募款專案">募款專案</option><option value="公益活動">公益活動</option><option value="講座">講座</option><option value="有機食品">有機食品</option><option value="環保商品">環保商品</option>',6),u={class:"col-6 col-lg-6 col-xl-5"},p={class:"input-group"},b=Object(c["createVNode"])("label",{for:"productsSearch",class:"input-group-text"},[Object(c["createVNode"])("i",{class:"bi bi-search fs-6"})],-1),m={class:"col-md-4 col-lg-6 text-end pb-1"},h=Object(c["createVNode"])("i",{class:"bi bi-arrow-counterclockwise"},null,-1),f={class:"table-responsive"},g={class:"table table-hover text-center text-break\n          rounded overflow-hidden shadow-sm"},O=Object(c["createVNode"])("thead",{class:"table-dark align-middle"},[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("td",{width:"10%"},"分類"),Object(c["createVNode"])("td",{width:"8%"},"圖片"),Object(c["createVNode"])("td",{width:"20%"},"產品ID"),Object(c["createVNode"])("td",{width:"20%"},"品名"),Object(c["createVNode"])("td",{width:"9%"},"原價"),Object(c["createVNode"])("td",{width:"9%"},"售價"),Object(c["createVNode"])("td",{width:"8%"},"狀態"),Object(c["createVNode"])("td",{width:"8%"},"操作"),Object(c["createVNode"])("td",{width:"8%"},"刪除")])],-1),j={"data-title":"分類"},V={"data-title":"圖片"},N={"data-title":"產品ID"},v={"data-title":"品名"},w={"data-title":"售價"},P={"data-title":"售價"},S={"data-title":"操作"},k={"data-title":"刪除"},I={class:"text-center mt-1"};function y(e,t,o,y,x,D){var M=Object(c["resolveComponent"])("DashboardLoading"),U=Object(c["resolveComponent"])("DashboardPagination"),C=Object(c["resolveComponent"])("DashboardProductModal");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(M,{status:x.loadingStatus},null,8,["status"]),Object(c["createVNode"])("section",a,[r,Object(c["createVNode"])("div",n,[Object(c["createVNode"])("div",d,[Object(c["createVNode"])("div",l,[Object(c["createVNode"])("div",i,[Object(c["withDirectives"])(Object(c["createVNode"])("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=function(e){return x.productSelect=e})},[s],512),[[c["vModelSelect"],x.productSelect]])]),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("div",p,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"search",class:"form-control",placeholder:"請輸入品名","aria-label":"search","aria-describedby":"basic-addon1",id:"productsSearch","onUpdate:modelValue":t[2]||(t[2]=function(e){return x.productSearch=e})},null,512),[[c["vModelText"],x.productSearch]]),b])])])]),Object(c["createVNode"])("div",m,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-brown-500",onClick:t[3]||(t[3]=function(e){return D.openModal(!0)})}," 新增產品 "),Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-brown-500 btn-sm fs-5 ms-1",onClick:t[4]||(t[4]=function(){return D.resetData&&D.resetData.apply(D,arguments)})},[h])])]),Object(c["createVNode"])("main",f,[Object(c["createVNode"])("table",g,[O,Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(D.filterProducts,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:t.id},[Object(c["createVNode"])("td",j,Object(c["toDisplayString"])(t.category),1),Object(c["createVNode"])("td",V,[Object(c["createVNode"])("img",{class:"w-100",src:t.imageUrl,alt:"product.title"},null,8,["src"])]),Object(c["createVNode"])("td",N,Object(c["toDisplayString"])(t.id),1),Object(c["createVNode"])("td",v,Object(c["toDisplayString"])(t.title),1),Object(c["createVNode"])("td",w," $ "+Object(c["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(c["createVNode"])("td",P," $ "+Object(c["toDisplayString"])(e.$filters.currency(t.price)),1),Object(c["createVNode"])("td",{"data-title":"狀態",class:{"text-warning-dark":t.is_enabled,"text-gray":!t.is_enabled}},Object(c["toDisplayString"])(t.is_enabled?"上架":"未上架"),3),Object(c["createVNode"])("td",S,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-brown-500 px-2 py-1",onClick:function(e){return D.openModal(!1,t)}}," 修改 ",8,["onClick"])]),Object(c["createVNode"])("td",k,[Object(c["createVNode"])("i",{class:"bi bi-trash-fill btn btn-outline-danger",onClick:function(e){return D.delProductFn(t)}},null,8,["onClick"])])])})),128))])])]),Object(c["createVNode"])(U,{"pagination-isShow":x.isPaginationShow,"pagination-page":x.productPagination,onGetData:D.getProducts},null,8,["pagination-isShow","pagination-page","onGetData"]),Object(c["createVNode"])("p",I,Object(c["toDisplayString"])("共有 ".concat(D.filterProducts.length," 筆資料")),1),Object(c["createVNode"])(C,{ref:"productModal","modal-product":x.tempProduct,"modal-isNew":x.isNew,"modal-btn-status":x.btnStatus,onModalUpdateProduct:D.updateProduct},null,8,["modal-product","modal-isNew","modal-btn-status","onModalUpdateProduct"])])],64)}o("99af"),o("b64b"),o("159b"),o("4de4"),o("ac1f"),o("466d");var x=o("4897"),D=o("6718"),M=o("dd6c"),U=(o("a4d3"),o("e01a"),{class:"modal fade m-0",id:"productModal",tabindex:"-1","aria-hidden":"true","data-bs-backdrop":"static","data-bs-keyboard":"false",ref:"modal"}),C={class:"modal-dialog modal-dialog-centered width-xl"},_={class:"modal-content"},B={class:"modal-header bg-warning text-brown-500"},F={class:"h5 modal-title",id:"productModalLabel"},$=Object(c["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),T={class:"modal-body"},E={class:"btn-group d-block text-center mb-2",role:"group","aria-label":"編輯表單切換"},q=Object(c["createVNode"])("label",{class:"btn btn-outline-brown-500",for:"productMessage"}," 編輯資訊 ",-1),A=Object(c["createVNode"])("label",{class:"btn btn-outline-brown-500",for:"productImg"}," 編輯圖片 ",-1),L={class:"row"},J={class:"col-12"},R=Object(c["createVNode"])("label",{for:"modalName",class:"form-label p-1 m-0"},[Object(c["createTextVNode"])(" 品名"),Object(c["createVNode"])("span",{class:"text-danger fw-bold"},"*")],-1),G={class:"col-12 col-md-6"},z=Object(c["createVNode"])("label",{for:"modalCategory",class:"form-label p-1 m-0"},[Object(c["createTextVNode"])(" 產品分類"),Object(c["createVNode"])("span",{class:"text-danger fw-bold"},"*")],-1),H=Object(c["createVNode"])("option",{value:"",selected:"",disabled:""},"請選擇分類",-1),K=Object(c["createVNode"])("option",{value:"募款專案"},"募款專案",-1),Q=Object(c["createVNode"])("option",{value:"公益活動"},"公益活動",-1),W=Object(c["createVNode"])("option",{value:"講座"},"講座",-1),X=Object(c["createVNode"])("option",{value:"有機食品"},"有機食品",-1),Y=Object(c["createVNode"])("option",{value:"環保商品"},"環保商品",-1),Z={class:"col-12 col-md-6"},ee=Object(c["createVNode"])("label",{for:"modalUnit",class:"form-label p-1 m-0"},[Object(c["createTextVNode"])(" 單位"),Object(c["createVNode"])("span",{class:"text-danger fw-bold"},"*")],-1),te={class:"col-12 col-md-6"},oe=Object(c["createVNode"])("label",{for:"modalOriginPrice",class:"form-label p-1 m-0"},[Object(c["createTextVNode"])(" 原價"),Object(c["createVNode"])("span",{class:"text-danger fw-bold"},"*")],-1),ce={class:"col-12 col-md-6"},ae=Object(c["createVNode"])("label",{for:"modalPrice",class:"form-label p-1 m-0"},[Object(c["createTextVNode"])(" 售價"),Object(c["createVNode"])("span",{class:"text-danger fw-bold"},"*")],-1),re={class:"col-12 col-md-6"},ne=Object(c["createVNode"])("label",{for:"modalDescription",class:"form-label p-1 m-0"}," 產品重點描述 ",-1),de={class:"col-12 col-md-6"},le=Object(c["createVNode"])("label",{for:"modalContentSupplement",class:"form-label p-1 m-0"}," 次要文案內容 ",-1),ie={class:"col-12"},se=Object(c["createVNode"])("label",{for:"modalContent",class:"form-label p-1 m-0"}," 主要文案內容 ",-1),ue=Object(c["createVNode"])("p",{class:"text-danger text-end fw-bold"}," * 為必填項目 ",-1),pe={class:"col-12 form-check\n                d-flex justify-content-end align-items-center"},be=Object(c["createVNode"])("label",{for:"enabled_status"}," 是否上架商品 ",-1),me={class:"modal-footer"},he=Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-brown-500","data-bs-dismiss":"modal"}," 關閉 ",-1);function fe(e,t,o,a,r,n){var d=Object(c["resolveComponent"])("Field"),l=Object(c["resolveComponent"])("ErrorMessage"),i=Object(c["resolveComponent"])("DashboardRenderImgs"),s=Object(c["resolveComponent"])("Form");return Object(c["openBlock"])(),Object(c["createBlock"])("section",U,[Object(c["createVNode"])("section",C,[Object(c["createVNode"])("main",_,[Object(c["createVNode"])("div",B,[Object(c["createVNode"])("h3",F,Object(c["toDisplayString"])(o.modalIsNew?"新增產品":"編輯產品"),1),$]),Object(c["createVNode"])(s,{ref:"productForm",onSubmit:t[13]||(t[13]=function(t){return e.$emit("modalUpdateProduct",r.tempProduct)})},{default:Object(c["withCtx"])((function(e){var a=e.errors;return[Object(c["createVNode"])("section",T,[Object(c["createVNode"])("div",E,[Object(c["createVNode"])("input",{type:"radio",class:"btn-check",name:"產品資訊切換功能",id:"productMessage",autocomplete:"off",checked:!r.isShow,onClick:t[1]||(t[1]=function(e){return r.isShow=!1})},null,8,["checked"]),q,Object(c["createVNode"])("input",{type:"radio",class:"btn-check",name:"產品資訊切換功能",id:"productImg",autocomplete:"off",onClick:t[2]||(t[2]=function(e){return r.isShow=!0})}),A]),Object(c["createVNode"])("div",L,[Object(c["createVNode"])("div",{class:["col-12",{"d-none":r.isShow}]},[Object(c["createVNode"])("div",{class:"row",onChange:t[11]||(t[11]=function(){return n.checkInputValue&&n.checkInputValue.apply(n,arguments)})},[Object(c["createVNode"])("div",J,[R,Object(c["createVNode"])(d,{type:"text",name:"品名",placeholder:"請輸入品名",id:"modalName",class:["form-control mb-2",{"is-invalid":a["品名"]}],rules:"required",modelValue:r.tempProduct.title,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.tempProduct.title=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(l,{name:"品名",class:"invalid-feedback mb-1"})]),Object(c["createVNode"])("div",G,[z,Object(c["createVNode"])(d,{as:"select",name:"產品分類",id:"modalCategory",class:["form-select mb-2",{"is-invalid":a["產品分類"]}],rules:"required",modelValue:r.tempProduct.category,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.tempProduct.category=e})},{default:Object(c["withCtx"])((function(){return[H,K,Q,W,X,Y]})),_:2},1032,["class","modelValue"]),Object(c["createVNode"])(l,{name:"產品分類",class:"invalid-feedback mb-1"})]),Object(c["createVNode"])("div",Z,[ee,Object(c["createVNode"])(d,{type:"text",name:"單位",placeholder:"請輸入單位",id:"modalUnit",class:["form-control mb-2",{"is-invalid":a["單位"]}],rules:"required",modelValue:r.tempProduct.unit,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.tempProduct.unit=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(l,{name:"單位",class:"invalid-feedback mb-1"})]),Object(c["createVNode"])("div",te,[oe,Object(c["createVNode"])(d,{type:"number",min:"1",name:"原價",id:"modalOriginPrice",class:["form-control mb-2",{"is-invalid":a["原價"]}],rules:"required|numeric",modelValue:r.tempProduct.origin_price,"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempProduct.origin_price=e}),modelModifiers:{number:!0}},null,8,["class","modelValue"]),Object(c["createVNode"])(l,{name:"原價",class:"invalid-feedback mb-1"})]),Object(c["createVNode"])("div",ce,[ae,Object(c["createVNode"])(d,{type:"number",min:"1",name:"售價",id:"modalPrice",class:["form-control mb-2",{"is-invalid":a["售價"]}],rules:"required|numeric",modelValue:r.tempProduct.price,"onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempProduct.price=e}),modelModifiers:{number:!0}},null,8,["class","modelValue"]),Object(c["createVNode"])(l,{name:"售價",class:"invalid-feedback mb-1"})]),Object(c["createVNode"])("div",re,[ne,Object(c["withDirectives"])(Object(c["createVNode"])("textarea",{id:"modalDescription",rows:"4",class:"form-control mb-2",placeholder:"請輸入產品描述","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempProduct.description=e})},null,512),[[c["vModelText"],r.tempProduct.description]])]),Object(c["createVNode"])("div",de,[le,Object(c["withDirectives"])(Object(c["createVNode"])("textarea",{id:"modalContentSupplement",rows:"4",class:"form-control mb-2",placeholder:"請輸入次要文案內容","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.tempProduct.content_supplement=e})},null,512),[[c["vModelText"],r.tempProduct.content_supplement]])]),Object(c["createVNode"])("div",ie,[se,Object(c["withDirectives"])(Object(c["createVNode"])("textarea",{id:"modalContent",rows:"5",class:"form-control mb-2",placeholder:"請輸入主要文案內容","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.tempProduct.content=e})},null,512),[[c["vModelText"],r.tempProduct.content]])]),ue],32)],2),Object(c["createVNode"])("div",{class:["col-12",{"d-none":!r.isShow}]},[Object(c["createVNode"])(i,{ref:"renderImg","product-main-img":r.tempProduct.imageUrl,"product-imgs":r.tempProduct.imagesUrl,onUpdataImgDatas:n.updateImgs},null,8,["product-main-img","product-imgs","onUpdataImgDatas"])],2)]),Object(c["createVNode"])("div",pe,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"checkbox",id:"enabled_status",name:"啟用狀態",value:"啟用狀態",class:"form-check-input me-1","onUpdate:modelValue":t[12]||(t[12]=function(e){return r.tempProduct.is_enabled=e})},null,512),[[c["vModelCheckbox"],r.tempProduct.is_enabled]]),be])]),Object(c["createVNode"])("div",me,[he,Object(c["createVNode"])("button",{type:"submit",class:"btn btn-warning text-brown-500",disabled:r.newBtnStatus},Object(c["toDisplayString"])(o.modalIsNew?"確定新增":"儲存變更"),9,["disabled"])])]})),_:1},512)])])],512)}var ge=o("7c2b"),Oe=o.n(ge),je=(o("a434"),{class:"col-6 col-md-3"}),Ve=Object(c["createVNode"])("label",{for:"modalImg",class:"form-label p-1 m-0"},[Object(c["createTextVNode"])(" 主要圖片"),Object(c["createVNode"])("span",{class:"text-danger fw-bold"},"*")],-1),Ne={class:"position-relative"},ve={class:"row"},we={class:"col-6 mb-1"},Pe={class:"col-6 mb-1"};function Se(e,t,o,a,r,n){var d=Object(c["resolveComponent"])("Field"),l=Object(c["resolveComponent"])("ErrorMessage"),i=Object(c["resolveComponent"])("Form"),s=Object(c["resolveComponent"])("DashboardUpdateFile");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(i,{ref:"productImgsForm"},{default:Object(c["withCtx"])((function(o){var a=o.errors;return[Object(c["createVNode"])("ul",{class:"row list-unstyled height-xl overflow-auto",onChange:t[2]||(t[2]=function(t){return e.$emit("updataImgDatas",r.tempMainImg,r.tempImgs)})},[Object(c["createVNode"])("li",je,[Ve,Object(c["createVNode"])(d,{type:"text",name:"主要圖片網址",placeholder:"請輸入主圖網址",id:"modalImg",class:["form-control mb-2",{"is-invalid":a["主要圖片網址"]}],rules:"required",modelValue:r.tempMainImg,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempMainImg=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(l,{name:"主要圖片網址",class:"invalid-feedback mb-1"}),Object(c["createVNode"])("img",{src:r.tempMainImg,alt:"主要圖片",class:"w-100"},null,8,["src"])]),r.tempImgs?(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(r.tempImgs,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:"多圖_".concat(t+1),class:"col-6 col-md-3"},[Object(c["createVNode"])("label",{for:"moreImg_".concat(t+1),class:"form-label p-1 m-0"},Object(c["toDisplayString"])("圖片".concat(t+1)),9,["for"]),Object(c["createVNode"])(d,{type:"text",name:"圖片網址_".concat(t+1),placeholder:"請輸入圖片網址",id:"moreImg_".concat(t+1),class:["form-control mb-2",{"is-invalid":a["圖片網址_".concat(t+1)]}],rules:"min:1",modelValue:r.tempImgs[t],"onUpdate:modelValue":function(e){return r.tempImgs[t]=e}},null,8,["name","id","class","modelValue","onUpdate:modelValue"]),Object(c["createVNode"])(l,{name:"圖片網址_".concat(t+1),class:"invalid-feedback mb-1"},null,8,["name"]),Object(c["createVNode"])("div",Ne,[Object(c["createVNode"])("i",{class:"bi bi-x-lg fs-6\n                btn btn-dark rounded-0\n                p-1 position-absolute end-0",onClick:function(e){return r.tempImgs.splice(t,1)}},null,8,["onClick"]),Object(c["createVNode"])("img",{src:e,alt:"圖片_".concat(t+1),class:"w-100 mb-2"},null,8,["src","alt"])])])})),128)):Object(c["createCommentVNode"])("",!0)],32)]})),_:1},512),Object(c["createVNode"])("div",ve,[Object(c["createVNode"])("div",we,[Object(c["createVNode"])(s,{onUploadImgFile:n.uploadNewImg},null,8,["onUploadImgFile"])]),Object(c["createVNode"])("div",Pe,[Object(c["createVNode"])("button",{type:"button",class:["btn btn-brown w-100",{disabled:""===r.tempMainImg||""===r.tempImgs[r.tempImgs.length-1]}],onClick:t[3]||(t[3]=function(e){return r.tempImgs.push("")})}," 新增圖片 ",2)])])],64)}var ke={class:"input-group"},Ie={key:0,class:"spinner-border spinner-border-sm",role:"status"};function ye(e,t,o,a,r,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",ke,[Object(c["createVNode"])("input",{type:"file",placeholder:"請輸入圖片連結",class:"form-control",id:"file",ref:"fileInput",onChange:t[1]||(t[1]=function(e){return r.isValue=!0})},null,544),Object(c["createVNode"])("button",{type:"button",class:["input-group-text btn btn-outline-brown",{disabled:!r.isValue}],onClick:t[2]||(t[2]=function(){return n.upload&&n.upload.apply(n,arguments)})},[r.isUpload?(Object(c["openBlock"])(),Object(c["createBlock"])("span",Ie)):Object(c["createCommentVNode"])("",!0),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(r.isUpload?"檔案上傳中":"上傳圖片"),1)],2)])}var xe={name:"DashboardUpdateFile",data:function(){return{isValue:!1,isUpload:!1}},emits:["uploadImgFile"],methods:{upload:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/upload"),o=this.$refs.fileInput.files[0],c=new FormData;this.isUpload=!0,c.append("file-to-upload",o),this.$http.post(t,c).then((function(t){t.data.success?(e.$emit("uploadImgFile",t.data.imageUrl),e.$refs.fileInput.value="",e.isValue=!1,e.isUpload=!1,Object(x["f"])("圖片上傳成功","success")):(e.isUpload=!1,Object(x["f"])(t.data.message,"error"))})).catch((function(){Object(x["d"])("圖片上傳異常","請重新操作"),e.isUpload=!1}))}},mounted:function(){}};xe.render=ye;var De=xe,Me={name:"DashboardRenderImgs",data:function(){return{tempMainImg:"",tempImgs:[]}},props:["productMainImg","productImgs"],components:{DashboardUpdateFile:De},watch:{productMainImg:function(){this.tempMainImg=this.productMainImg},productImgs:function(){this.tempImgs=this.productImgs}},emits:["updataImgDatas"],methods:{uploadNewImg:function(e){""===this.tempMainImg?this.tempMainImg=e:""===this.tempImgs[this.tempImgs.length-1]?this.tempImgs[this.tempImgs.length-1]=e:this.tempImgs.push(e),this.$emit("updataImgDatas",this.tempMainImg,this.tempImgs)},resetForm:function(){this.$refs.productImgsForm.resetForm()}}};Me.render=Se;var Ue=Me,Ce={name:"DashboardProductModal",props:["modalProduct","modalIsNew","modalBtnStatus"],data:function(){return{modal:"",newBtnStatus:Boolean,tempProduct:{title:"",category:"",unit:"",origin_price:1,price:1,imageUrl:""},isShow:!1}},watch:{modalProduct:function(){this.tempProduct=this.modalProduct,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])},modalBtnStatus:function(){this.newBtnStatus=this.modalBtnStatus}},components:{DashboardRenderImgs:Ue},emits:["modalUpdateProduct"],methods:{openModal:function(){this.isShow=!1,this.modal.show()},hideModal:function(){this.modal.hide()},resetForm:function(){this.$refs.productForm.resetForm(),this.$refs.renderImg.resetForm()},updateImgs:function(e,t){this.tempProduct.imageUrl=e,this.tempProduct.imagesUrl=t,this.checkInputValue()},checkInputValue:function(){var e=this.tempProduct,t=e.title,o=e.category,c=e.unit,a=e.price,r=e.imageUrl;0!==this.tempProduct.origin_price&&0!==a||Object(x["f"])("價格不可小於 1","error"),""===t||""===o||""===c||""===this.tempProduct.origin_price||0===this.tempProduct.origin_price||""===a||0===a||""===r?this.newBtnStatus=!0:this.newBtnStatus=!1}},mounted:function(){this.modal=new Oe.a(this.$refs.modal)}};Ce.render=fe;var _e=Ce,Be={name:"DashboardProducts",data:function(){return{loadingStatus:!1,btnStatus:Boolean,productSelect:"",productSearch:"",productPagination:{},products:[],tempProduct:{},allProducts:[],filterDatas:[],isNew:Boolean,isPaginationShow:!0}},watch:{productSelect:function(){this.productSearch="","全部商品"!==this.productSelect?this.filterProducts.length>9?this.isPaginationShow=!0:this.isPaginationShow=!1:"全部商品"===this.productSelect&&""===this.productSearch&&(this.isPaginationShow=!0)},productSearch:function(){""!==this.productSearch?this.filterProducts.length>9?this.isPaginationShow=!0:this.isPaginationShow=!1:"全部商品"===this.productSelect&&""===this.productSearch&&(this.isPaginationShow=!0)}},computed:{filterProducts:function(){var e=[];return e="全部商品"===this.productSelect?this.products:this.checkProductSelect(),""!==this.productSearch&&(e=this.chechProductSearch()),e}},components:{DashboardLoading:D["a"],DashboardPagination:M["a"],DashboardProductModal:_e},methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/products?page=").concat(t);this.backTop(),this.loadingStatus=!0,this.$http.get(o).then((function(t){t.data.success?(e.products=t.data.products,e.productPagination=t.data.pagination,e.productPagination.total_pages>1&&""===e.productSearch&&"全部商品"===e.productSelect?e.isPaginationShow=!0:e.isPaginationShow=!1,e.loadingStatus=!1):(Object(x["d"])("產品資料取得失敗","請重新刷新頁面或使用重整按鈕"),e.loadingStatus=!1)})).catch((function(){Object(x["d"])("產品資料取得失敗","請重新刷新頁面或使用重整按鈕"),e.loadingStatus=!1}))},getAllProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/products/all");this.loadingStatus=!0,this.$http.get(t).then((function(t){t.data.success?(e.filterProduct(t.data.products),e.loadingStatus=!1):(Object(x["d"])("產品資料取得失敗","請重新刷新頁面或使用重整按鈕"),e.loadingStatus=!1)})).catch((function(){Object(x["d"])("產品資料取得失敗","請重新刷新頁面或使用重整按鈕"),e.loadingStatus=!1}))},filterProduct:function(e){var t=this,o=Object.keys(e);this.allProducts=[],o.forEach((function(o){t.allProducts.push(e[o])}))},delProduct:function(e){var t=this,o=e.id,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/product/").concat(o);this.loadingStatus=!0,this.$http.delete(c).then((function(e){e.data.success?(Object(x["f"])(e.data.message,"success"),t.getProducts(),t.getAllProducts(),t.loadingStatus=!1):(Object(x["f"])(e.data.message,"error"),t.loadingStatus=!1)})).catch((function(){Object(x["d"])("操作出現異常","請稍後再試"),t.loadingStatus=!1}))},delProductFn:function(e){Object(x["b"])(e,this.delProduct)},updateProduct:function(e){var t=this;this.loadingStatus=!0;var o="",c="";this.isNew?(o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/product"),c="post"):(o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("toriha_vuetestapi","/admin/product/").concat(e.id),c="put"),this.$http[c](o,{data:e}).then((function(e){e.data.success?(Object(x["f"])(e.data.message,"success"),t.getProducts(),t.getAllProducts(),t.$refs.productModal.hideModal()):(Object(x["f"])(e.data.message,"error"),t.loadingStatus=!1)})).catch((function(){Object(x["d"])("操作出現異常","請稍後再試"),t.loadingStatus=!1}))},checkProductSelect:function(){var e=this;return this.filterDatas=this.allProducts.filter((function(t){return t.category.match(e.productSelect)})),this.filterDatas},chechProductSearch:function(){var e=this,t=[];return t="全部商品"===this.productSelect?this.allProducts.filter((function(t){return t.title.match(e.productSearch)})):this.filterDatas.filter((function(t){return t.title.match(e.productSearch)})),t},openModal:function(e,t){e?(this.isNew=!0,this.btnStatus=!0,this.$refs.productModal.resetForm(),this.tempProduct={title:"",category:"",unit:"",origin_price:1,price:1,imageUrl:""}):(this.isNew=!1,this.btnStatus=!1,this.tempProduct=JSON.parse(JSON.stringify(t))),this.$refs.productModal.openModal()},resetData:function(){Object(x["f"])("正在重整資料","info"),this.productSelect="全部商品",this.getProducts(),this.getAllProducts()},backTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},mounted:function(){this.backTop(),this.productSelect="全部商品",this.getProducts(),this.getAllProducts()}};Be.render=y;t["default"]=Be},a434:function(e,t,o){"use strict";var c=o("23e7"),a=o("23cb"),r=o("a691"),n=o("50c4"),d=o("7b0b"),l=o("65f0"),i=o("8418"),s=o("1dde"),u=s("splice"),p=Math.max,b=Math.min,m=9007199254740991,h="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var o,c,s,u,f,g,O=d(this),j=n(O.length),V=a(e,j),N=arguments.length;if(0===N?o=c=0:1===N?(o=0,c=j-V):(o=N-2,c=b(p(r(t),0),j-V)),j+o-c>m)throw TypeError(h);for(s=l(O,c),u=0;u<c;u++)f=V+u,f in O&&i(s,u,O[f]);if(s.length=c,o<c){for(u=V;u<j-c;u++)f=u+c,g=u+o,f in O?O[g]=O[f]:delete O[g];for(u=j;u>j-c+o;u--)delete O[u-1]}else if(o>c)for(u=j-c;u>V;u--)f=u+c-1,g=u+o-1,f in O?O[g]=O[f]:delete O[g];for(u=0;u<o;u++)O[u+V]=arguments[u+2];return O.length=j-c+o,s}})},a640:function(e,t,o){"use strict";var c=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&c((function(){o.call(null,t||function(){throw 1},1)}))}},b64b:function(e,t,o){var c=o("23e7"),a=o("7b0b"),r=o("df75"),n=o("d039"),d=n((function(){r(1)}));c({target:"Object",stat:!0,forced:d},{keys:function(e){return r(a(e))}})}}]);
//# sourceMappingURL=chunk-0e2d3c00.91ac29d0.js.map
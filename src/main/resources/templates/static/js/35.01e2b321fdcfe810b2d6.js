webpackJsonp([35],{193:function(e,t,o){function i(e){o(385)}var a=o(4)(o(299),o(426),i,"data-v-68b14384",null);e.exports=a.exports},215:function(e,t,o){"use strict";function i(e){return o.i(u.a)("/apply/create",e,"post")}function a(e){return o.i(u.a)("/apply/update",e,"post")}function r(e){return o.i(u.a)("/api/submitSetInfo",e,"post")}function n(e){return o.i(u.a)("/static/deviceClass?"+e,e,"get")}function s(e){return o.i(u.a)("/static/deviceType?"+e,e,"get")}function l(e){return o.i(u.a)("/map/provinces",e,"get")}function d(e){return o.i(u.a)("/map/cities?"+e,e,"get")}function p(e){return o.i(u.a)("/map/areas?"+e,e,"get")}function c(e){return o.i(u.a)("/apply/get?"+e,e,"get")}function A(e){return o.i(u.a)("/apply/confirm?"+e,e,"get")}t.b=i,t.c=a,t.f=r,t.g=n,t.e=s,t.h=l,t.i=d,t.j=p,t.a=c,t.d=A;var u=o(19)},299:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(65),a=o.n(i),r=o(13),n=o.n(r),s=o(6),l=o(215);t.default={data:function(){return{current:0,ruleForm:{declarationType:"",noUseNum:"",useComName:"",useComAddr:"",safeAdmin:"",propertyComTelephone:"",subList:[]},formDynamicPres:{items:[{eqVariety:"",registCode:"",eqCode:"",eqUseLocation:"",productNum:"",noUseReason:""}]},declarationTypeList:[{value:"停用",label:"停用"},{value:"报废",label:"报废"},{value:"注销",label:"注销"}],active:1,pdfUrl:"",rules:{},creatOrUpdate:!1,defaultPdfList1:[],uploadList:[{url:""}],visible:!1,applyId:""}},components:{},computed:n()({},o.i(s.a)(["getSelectedOption","getRegistOne","getSelectedNum","getterUserData"])),watch:{"$route.query":function(){"/stopUseApp"==this.$route.path&&this.initData()}},methods:n()({},o.i(s.b)(["clearRegistOneForm","setRegistOneForm","getUserData"]),{handleAddPres:function(){this.formDynamicPres.items.push({eqVariety:"",registCode:"",eqCode:"",eqUseLocation:"",productNum:"",noUseReason:""}),this.ruleForm.subList=this.formDynamicPres.items},handleRemovePres:function(e){this.formDynamicPres.items.splice(e,1),this.ruleForm.subList=this.formDynamicPres.items},printTrigger:function(e){var t=document.getElementById(e);t.focus(),t.contentWindow.print()},setUserDetailData:function(){this.ruleForm.useComName=localStorage.getItem("useComName"),this.ruleForm.ruleForm.useComAddr=localStorage.getItem("useComAddr"),console.log(this.ruleForm.useComName)},initData:function(){this.active=1,this.current=0,this.creatOrUpdate=!1,this.defaultPdfList1=[],this.device_type=this.$route.query.device_type,this.uploadList=[{url:""}],this.clearRuleForm(),this.formDynamicPres.items=[{eqVariety:"",registCode:"",eqCode:"",eqUseLocation:"",productNum:"",noUseReason:""}],this.setUserDetailData()},clearRuleForm:function(){this.ruleForm={declarationType:"",noUseNum:"",useComName:"",useComAddr:"",safeAdmin:"",propertyComTelephone:"",subList:[]}},submit:function(e){var t=this;l.b(e).then(function(e){200==e.status&&(t.applyId=e.data.applyId,t.fileId=e.data.forms.split("=")[1].split("}")[0],t.pdfUrl="/admin/file/preview?fileId="+t.fileId,t.$Message.info("您已提交信息，请预览结果"),t.modalCertain=!1)}).catch(function(e){console.log(e)})},submitContent:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$Message.info("尚有信息不符合要求，请检查"),!1;t.current++,t.active++;var o=(a()({},t.ruleForm),t.makeParams());t.submit(o)})},makeParams:function(){var e={};return this.ruleForm.eqSpecies=this.deviceCategoryId,this.ruleForm.eqCategory=this.deviceClassId,this.ruleForm.eqVariety=this.deviceClassTypeId,e.form5=this.ruleForm,e.acceptorAgencyId=1,this.device_type?e.deviceType=parseInt(this.device_type):e.deviceType=parseInt(this.$route.query.device_type),e.applyType=3,e.deviceCategory=this.deviceCategoryId,e.deviceClass=this.deviceClassId,e.deviceKind=this.deviceClassTypeId,e.deivceCode=this.ruleForm.eqCode,e.deivceName=this.ruleForm.eqName,e},updateContent:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$Message.info("尚有信息不符合要求，请检查"),!1;t.current++,t.active++;var o=(a()({},t.ruleForm),{});t.ruleForm.eqSpecies=t.deviceCategoryId,t.ruleForm.eqCategory=t.deviceClassId,t.ruleForm.eqVariety=t.deviceClassTypeId,o.form5=t.ruleForm,o.id=t.$route.query.applyId,o.deviceClass=t.deviceClassId,o.deviceKind=t.deviceClassTypeId,l.c(o).then(function(e){200==e.status&&(t.applyId=e.data.applyId,t.fileId=e.data.forms.split("=")[1].split("}")[0],t.pdfUrl="/admin/file/preview?fileId="+t.fileId,t.$Message.info("您已提交信息，请预览结果"),t.modalCertain=!1)}).catch(function(e){console.log(e)})})},next:function(){4==this.current?this.current=0:this.current+=1,this.active++},before:function(){this.current--,this.active--,this.creatOrUpdate=!0},confirmForm:function(){var e=this;1==this.$route.query.ifold||!0===this.creatOrUpdate?this.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",onOk:function(){e.updateContent("ruleForm")},onCancel:function(){e.$Message.info("点击了取消")}}):this.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",onOk:function(){e.submitContent("ruleForm")},onCancel:function(){e.$Message.info("点击了取消")}})},handleSuccess:function(e,t){""===this.uploadList[0].url?(this.uploadList[0].url="/admin"+e.data.thumbnail,this.pdfList.push("/admin"+e.data.preview)):(this.uploadList.push({url:"/admin"+e.data.thumbnail}),this.pdfList.push("/admin"+e.data.preview))},handleRemove:function(e,t){console.log(e),console.log(t),this.uploadList.pop(),console.log(this.uploadList)},handleBeforeUpload:function(){var e=this.uploadList.length<2;return e||this.$Notice.warning({title:"最多只能上传 2 张图片。"}),e},handleView:function(e){console.log(e),this.visible=!0,this.pdf=this.pdfList[e]}})}},346:function(e,t,o){t=e.exports=o(172)(!0),t.push([e.i,"@media print{.print[data-v-68b14384]{display:block}.nprint[data-v-68b14384]{display:none}}.setApp[data-v-68b14384]{color:#495060;position:relative}.setApp_topbar[data-v-68b14384]{position:fixed;width:100%;margin:0;padding:0;height:80px;z-index:10;background-color:#fff}.base-box[data-v-68b14384]{margin-left:140px;display:block;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;width:100%;padding-left:100px;padding-right:100px;box-sizing:border-box;background-color:#fff}.header_one[data-v-68b14384]{text-align:center;margin-left:-50px;margin-top:20px;font-size:25px}.header_two[data-v-68b14384]{margin-left:-30px;margin-top:10px;font-size:19px}.ivu-form .ivu-form-item-label[data-v-68b14384]{font-size:18px;background-color:red;display:inline-block}.bread[data-v-68b14384]{margin-bottom:5px;margin-top:10px}.setApp_button[data-v-68b14384]{margin:10px}.city_select_app[data-v-68b14384]{margin:0 auto;width:80%;margin-left:200px;margin-bottom:10px}.city_select_app[data-v-68b14384],.city_select_app_exit[data-v-68b14384]{display:block;padding:10px;background-color:#fff;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.city_select_app_exit[data-v-68b14384]{width:700px;margin-left:200px;margin-bottom:10px}.city_select_app_exit .city_select_content[data-v-68b14384]{border-bottom:1px solid #dddee1;margin-bottom:5px;padding-bottom:5px}.pdfInfo[data-v-68b14384]{margin:15px}.demo-upload-list[data-v-68b14384]{display:inline-block;width:150px;height:200px;text-align:center;line-height:60px;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:4px}.demo-upload-list img[data-v-68b14384]{width:100%;height:100%}.demo-upload-list-cover[data-v-68b14384]{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.demo-upload-list:hover .demo-upload-list-cover[data-v-68b14384]{display:block}.demo-upload-list-cover i[data-v-68b14384]{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/page/apply/disabledApp/disabledApp.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,CACA,AACD,yBACE,cAAe,AACf,iBAAmB,CACpB,AACD,gCACE,eAAgB,AAChB,WAAY,AACZ,SAAY,AACZ,UAAa,AACb,YAAa,AACb,WAAY,AACZ,qBAAwB,CACzB,AACD,2BACE,kBAAmB,AACnB,cAAe,AACf,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,WAAY,AACZ,mBAAoB,AACpB,oBAAqB,AACrB,sBAAuB,AACvB,qBAAwB,CACzB,AACD,6BACE,kBAAmB,AACnB,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,6BACE,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,gDACE,eAAgB,AAChB,qBAAsB,AACtB,oBAAsB,CACvB,AACD,wBACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,gCACE,WAAa,CACd,AACD,kCACE,cAAe,AAEf,UAAW,AAQX,kBAAmB,AACnB,kBAAoB,CACrB,AACD,yEAZE,cAAe,AAEf,aAAc,AACd,sBAAwB,AACxB,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,6BAA+B,CAgBhC,AAZD,uCACE,YAAa,AASb,kBAAmB,AACnB,kBAAoB,CACrB,AACD,4DACI,gCAAiC,AACjC,kBAAmB,AACnB,kBAAoB,CACvB,AACD,0BACE,WAAa,CACd,AAKD,mCACE,qBAAsB,AACtB,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAkB,AAClB,6BAA8B,AAC9B,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,oCAAyC,AACzC,gBAAkB,CACnB,AACD,uCACE,WAAY,AACZ,WAAa,CACd,AACD,yCACE,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA+B,CAChC,AACD,iEACE,aAAe,CAChB,AACD,2CACE,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,YAAc,CACf",file:"disabledApp.vue",sourcesContent:["\n@media print {\n.print[data-v-68b14384] {\n    display: block;\n}\n.nprint[data-v-68b14384] {\n    display: none;\n}\n}\n.setApp[data-v-68b14384] {\n  color: #495060;\n  position: relative;\n}\n.setApp_topbar[data-v-68b14384] {\n  position: fixed;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  height: 80px;\n  z-index: 10;\n  background-color: white;\n}\n.base-box[data-v-68b14384] {\n  margin-left: 140px;\n  display: block;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  width: 100%;\n  padding-left: 100px;\n  padding-right: 100px;\n  box-sizing: border-box;\n  background-color: white;\n}\n.header_one[data-v-68b14384] {\n  text-align: center;\n  margin-left: -50px;\n  margin-top: 20px;\n  font-size: 25px;\n}\n.header_two[data-v-68b14384] {\n  margin-left: -30px;\n  margin-top: 10px;\n  font-size: 19px;\n}\n.ivu-form .ivu-form-item-label[data-v-68b14384] {\n  font-size: 18px;\n  background-color: red;\n  display: inline-block;\n}\n.bread[data-v-68b14384] {\n  margin-bottom: 5px;\n  margin-top: 10px;\n}\n.setApp_button[data-v-68b14384] {\n  margin: 10px;\n}\n.city_select_app[data-v-68b14384] {\n  margin: 0 auto;\n  display: block;\n  width: 80%;\n  padding: 10px;\n  background-color: white;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-left: 200px;\n  margin-bottom: 10px;\n}\n.city_select_app_exit[data-v-68b14384] {\n  width: 700px;\n  display: block;\n  padding: 10px;\n  background-color: white;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-left: 200px;\n  margin-bottom: 10px;\n}\n.city_select_app_exit .city_select_content[data-v-68b14384] {\n    border-bottom: 1px solid #dddee1;\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n}\n.pdfInfo[data-v-68b14384] {\n  margin: 15px;\n}\n\n/*.ivu-form-item {*/\n/*margin-bottom: 10px;*/\n/*}*/\n.demo-upload-list[data-v-68b14384] {\n  display: inline-block;\n  width: 150px;\n  height: 200px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.demo-upload-list img[data-v-68b14384] {\n  width: 100%;\n  height: 100%;\n}\n.demo-upload-list-cover[data-v-68b14384] {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover[data-v-68b14384] {\n  display: block;\n}\n.demo-upload-list-cover i[data-v-68b14384] {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n"],sourceRoot:""}])},385:function(e,t,o){var i=o(346);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o(173)("3653b224",i,!0)},426:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"disableApp"},[o("div",{staticClass:"setApp_topbar"},[o("div",{staticClass:"step",staticStyle:{width:"85%","margin-top":"20px"}},[o("Steps",{attrs:{current:e.current}},[o("Step",{attrs:{title:"步骤1",content:"填写《特种设备停用报废注销登记表》"}}),e._v(" "),o("Step",{attrs:{title:"步骤2",content:"预览《特种设备停用报废注销登记表》"}}),e._v(" "),o("Step",{attrs:{title:"步骤3",content:"提交相关证件"}}),e._v(" "),o("Step",{attrs:{title:"步骤4",content:"完成申请"}})],1)],1)]),e._v(" "),o("div",{staticClass:"setApp_content",staticStyle:{position:"absolute",top:"85px"}},[o("Form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":110,"label-position":"left"}},[1==this.active?o("div",{staticClass:"statusInfo"},[o("div",{staticClass:"base-box"},[o("h2",{staticClass:"header_one"},[e._v("特种设备停用报废注销登记表")]),e._v(" "),o("h2",{staticClass:"header_two"},[e._v("设备基本情况")]),e._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"申报种类",prop:"declarationType"}},[o("Select",{model:{value:e.ruleForm.declarationType,callback:function(t){e.ruleForm.declarationType=t},expression:"ruleForm.declarationType"}},e._l(e.declarationTypeList,function(t){return o("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label)+"\n                ")])}))],1)],1),e._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("Form-item",{attrs:{label:"台数",prop:"noUseNum"}},[o("Input",{model:{value:e.ruleForm.noUseNum,callback:function(t){e.ruleForm.noUseNum=t},expression:"ruleForm.noUseNum"}})],1)],1)],1),e._v(" "),o("Form-item",{attrs:{label:"使用单位名称",prop:"useComName"}},[o("Input",{model:{value:e.ruleForm.useComName,callback:function(t){e.ruleForm.useComName=t},expression:"ruleForm.useComName"}})],1),e._v(" "),o("Form-item",{attrs:{label:"使用单位地址",prop:"useComAddr"}},[o("Input",{model:{value:e.ruleForm.useComAddr,callback:function(t){e.ruleForm.useComAddr=t},expression:"ruleForm.useComAddr"}})],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"安全管理员",prop:"safeAdmin"}},[o("Input",{model:{value:e.ruleForm.safeAdmin,callback:function(t){e.ruleForm.safeAdmin=t},expression:"ruleForm.safeAdmin"}})],1),e._v(" "),o("Form-item",{attrs:{label:"产权单位名称",prop:"propertyComName"}},[o("Input",{model:{value:e.ruleForm.propertyComName,callback:function(t){e.ruleForm.propertyComName=t},expression:"ruleForm.propertyComName"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("Form-item",{attrs:{label:"安全管理员联系电话",prop:"safeAdminTelephone"}},[o("Input",{model:{value:e.ruleForm.safeAdminTelephone,callback:function(t){e.ruleForm.safeAdminTelephone=t},expression:"ruleForm.safeAdminTelephone"}})],1),e._v(" "),o("Form-item",{attrs:{label:"产权单位联系电话",prop:"propertyComTelephone"}},[o("Input",{model:{value:e.ruleForm.propertyComTelephone,callback:function(t){e.ruleForm.propertyComTelephone=t},expression:"ruleForm.propertyComTelephone"}})],1)],1)],1),e._v(" "),e._l(e.formDynamicPres.items,function(t,i){return o("Form",{key:t.id,ref:"formDynamicPres",refInFor:!0,attrs:{model:e.formDynamicPres,"label-width":140,inline:""}},[o("Row",[o("Col",{attrs:{span:"8"}},[o("FormItem",{key:i,attrs:{label:"序号"+(i+1)+"  设备品种（名称）",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.eqVariety,callback:function(e){t.eqVariety=e},expression:"item.eqVariety"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"8"}},[o("FormItem",{key:i,attrs:{label:"使用登记证编号",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.registCode,callback:function(e){t.registCode=e},expression:"item.registCode"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"8"}},[o("FormItem",{key:i,attrs:{label:"设备代码",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.eqCode,callback:function(e){t.eqCode=e},expression:"item.eqCode"}})],1)],1)],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"8"}},[o("FormItem",{key:i,attrs:{label:"设备使用地点",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.eqUseLocation,callback:function(e){t.eqUseLocation=e},expression:"item.eqUseLocation"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"8"}},[o("FormItem",{key:i,attrs:{label:"产品编号",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.productNum,callback:function(e){t.productNum=e},expression:"item.productNum"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"8"}},[o("FormItem",{key:i,attrs:{label:"停用注销报废原因",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.noUseReason,callback:function(e){t.noUseReason=e},expression:"item.noUseReason"}})],1)],1)],1),e._v(" "),o("FormItem",[o("Button",{attrs:{type:"dashed",long:"",icon:"plus-round"},on:{click:e.handleAddPres}},[e._v("新增")])],1),e._v(" "),o("FormItem",[o("Button",{attrs:{type:"ghost"},on:{click:function(t){e.handleRemovePres(i)}}},[e._v("删除")])],1),e._v(" "),o("br")],1)})],2)]):e._e(),e._v(" "),2==this.active?o("div",{staticClass:"setTable",staticStyle:{width:"900px",top:"30px",position:"absolute"}},[o("iframe",{staticStyle:{width:"100%",height:"1000px"},attrs:{id:"iFramePdf",src:this.pdfUrl}}),e._v(" "),o("Button",{attrs:{type:"warning"},on:{click:function(t){e.printTrigger("iFramePdf")}}},[e._v("打印")]),e._v(" "),2==this.active?o("Button",{attrs:{type:"primary"},on:{click:function(t){e.before()}}},[e._v("上一步")]):e._e(),e._v(" "),2==this.active?o("Button",{attrs:{type:"primary"},on:{click:function(t){e.next()}}},[e._v("下一步")]):e._e()],1):e._e(),e._v(" "),3==this.active?o("div",{staticClass:"pdfInfo"},[o("h2",[e._v("相关证明")]),e._v(" "),o("Row",{staticStyle:{width:"1000px"}},[o("Col",{attrs:{span:"10"}},[o("Form-item",{attrs:{label:"社会信用代码证明","label-width":200}},[o("Upload",{ref:"upload1",attrs:{"on-success":e.handleSuccess,"on-remove":e.handleRemove,"default-file-list":e.defaultPdfList1,"before-upload":e.handleBeforeUpload,action:"/admin/file/upload?applyId="+this.applyId+"&fileTypeId=1","with-credentials":""}},[o("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传文件")])],1)],1)],1),e._v(" "),o("Col",{attrs:{span:"10",offset:"4"}},[o("Form-item",{attrs:{label:"个人身份证明","label-width":200}},[o("Upload",{ref:"upload2",attrs:{"on-success":e.handleSuccess,"on-remove":e.handleRemove,"default-file-list":e.defaultPdfList1,action:"/admin/file/upload?applyId="+this.applyId+"&fileTypeId=1","before-upload":e.handleBeforeUpload,"with-credentials":""}},[o("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传文件")])],1)],1)],1)],1),e._v(" "),o("h5",[e._v("上传文件缩略图")]),e._v(" "),e._l(e.uploadList,function(t,i){return o("div",{staticClass:"demo-upload-list"},[o("img",{attrs:{src:t.url}}),e._v(" "),o("div",{staticClass:"demo-upload-list-cover"},[o("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){e.handleView(i)}}})],1)])}),e._v(" "),o("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?o("iframe",{staticStyle:{width:"100%",height:"1000px"},attrs:{id:"iFramePdf",src:this.pdf}}):e._e()])],2):e._e(),e._v(" "),o("div",{staticClass:"setApp_button"},[1==this.active?o("Button",{attrs:{type:"primary"},on:{click:e.confirmForm}},[e._v("下一步")]):e._e(),e._v(" "),3==this.active?o("Button",{on:{click:function(t){e.instance("success")}}},[e._v("确认提交")]):e._e()],1)])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=35.01e2b321fdcfe810b2d6.js.map
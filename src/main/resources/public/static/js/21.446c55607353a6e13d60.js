webpackJsonp([21],{673:function(e,t,o){function a(e){o(792)}var i=o(47)(o(726),o(829),a,"data-v-3ba63dea",null);e.exports=i.exports},691:function(e,t,o){"use strict";function a(e){return o.i(B.a)("/apply/create",e,"post")}function i(e){return o.i(B.a)("/apply/drop",e,"post")}function r(e){return o.i(B.a)("/apply/disable",e,"post")}function n(e){return o.i(B.a)("/user/update",e,"post")}function s(e){return o.i(B.a)("/apply/update",e,"post")}function d(e){return o.i(B.a)("/static/deviceClass?"+e,e,"get")}function l(e){return o.i(B.a)("/static/deviceType?"+e,e,"get")}function p(e){return o.i(B.a)("/map/provinces",e,"get")}function c(e){return o.i(B.a)("/map/cities?"+e,e,"get")}function A(e){return o.i(B.a)("/map/areas?"+e,e,"get")}function u(e){return o.i(B.a)("/apply/get?"+e,e,"get")}function m(e){return o.i(B.a)("/apply/confirm?"+e,e,"get")}function f(e){return o.i(B.a)("/map/organization?"+e,e,"get")}function b(e){return o.i(B.a)("/device/cylinder?"+e,e,"get")}function C(e){return o.i(B.a)("/device/pipe?"+e,e,"get")}function v(e){return o.i(B.a)("/device/cylinder",e,"post")}function h(e){return o.i(B.a)("/device/pipe",e,"post")}function g(e){return o.i(B.a)("/apply/create",e,"post")}t.f=a,t.q=i,t.p=r,t.r=n,t.g=s,t.o=d,t.i=l,t.a=p,t.b=c,t.c=A,t.e=u,t.h=m,t.d=f,t.j=b,t.k=C,t.l=v,t.m=h,t.n=g;var B=o(98)},692:function(e,t,o){"use strict";function a(e){return o.i(r.a)("/device/get",e,"post")}function i(e){return o.i(r.a)("/device/get?"+e,e,"get")}t.a=a,t.b=i;var r=o(98)},726:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(251),i=o.n(a),r=o(71),n=o.n(r),s=o(24),d=o.n(s),l=o(48),p=o(691),c=o(692);t.default={data:function(){var e;return e={fileList:[1,1],canStopUseDeviceList:[],columnsCanStopUse:[{type:"selection",width:60,align:"center"},{type:"index",key:"id",width:60},{title:"设备品种",key:"deviceKind",width:120},{title:"使用登记证编号",key:"registCode"},{title:"设备代码",key:"eqCode"},{title:"设备使用地点",key:"eqUseAddr"},{title:"产品编号",key:"productCode"}],pdfUrl:"",pdfList:[],pdf:"",addressCode:"",registCode:"",deviceType:"",acceptCom:"",acceptComList:[],current:0,ruleForm:{registKind:"",deviceNum:"",useComName:"",useComAddr:"",safeAdministrator:"",propertyComPhone:"",subList:[],comTablePerson:"",mobilePhone:""},formDynamicPres:{items:[{deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}]},declarationTypeList:[{value:"停用",label:"停用"},{value:"报废",label:"报废"},{value:"注销",label:"注销"}],active:1},d()(e,"pdfUrl",""),d()(e,"rules",{registKind:[{required:!0,message:"不能为空",trigger:"change"}],comTablePerson:[{required:!0,message:"不能为空",trigger:"blur"}],useComAddr:[{required:!0,message:"不能为空",trigger:"blur"}],mobilePhone:[{required:!0,message:"不能为空",trigger:"blur"}]}),d()(e,"creatOrUpdate",!1),d()(e,"defaultPdfList1",[]),d()(e,"uploadList",[{url:""}]),d()(e,"visible",!1),d()(e,"applyId",""),d()(e,"acceptorAgencyId",""),d()(e,"acceptorAgencyName",""),e},components:{},computed:n()({},o.i(l.a)(["getSelectedOption","getRegistOne","getSelectedNum","getterUserData"])),mounted:function(){this.initData()},watch:{"$route.query":function(){"/disabledApp"==this.$route.path&&this.initData()}},methods:n()({},o.i(l.b)(["getUserData"]),{handleAddPres:function(){this.formDynamicPres.items.push({deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}),this.ruleForm.subList=this.formDynamicPres.items},handleRemovePres:function(e){this.formDynamicPres.items.splice(e,1),this.ruleForm.subList=this.formDynamicPres.items},printTrigger:function(e){var t=document.getElementById(e);t.focus(),t.contentWindow.print()},chosenAccept:function(e){this.acceptorAgencyId=e.value,this.acceptorAgencyName=e.label},setUserDetailData:function(){this.addressCode=localStorage.getItem("addressCode"),this.ruleForm.useComName=localStorage.getItem("useComName"),this.ruleForm.useComAddr=localStorage.getItem("useComAddr"),this.ruleForm.propertyComName=localStorage.getItem("propertyComName"),"true"==localStorage.getItem("company")?this.isCompany=!0:this.isCompany=!1},initData:function(){var e=this;this.fileList=[1,1],this.active=1,this.current=0,this.creatOrUpdate=!1,this.defaultPdfList1=[],this.deviceCode=this.$route.query.deviceCode,this.registCode=this.$route.query.registCode,this.deviceType=this.$route.query.deviceType,this.uploadList=[{url:""}],this.canStopUseDeviceList=[],this.clearRuleForm(),this.formDynamicPres.items=[{deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}],this.setUserDetailData();var t="addressCode="+this.addressCode;p.d(t).then(function(t){e.acceptComList=[];for(var o=0,a=t.length;o<a;o++)e.acceptComList.push({value:t[o].id,label:t[o].name})}).catch(function(e){console.log(e)}),t={size:10,processing:!1,states:[0,1]},this.getCanStopUseDevice(t)},getCanStopUseDevice:function(e){var t=this;c.a(e).then(function(e){if(200===e.status)for(var o=0;o<e.data.content.length;o++){var a={deviceKind:e.data.content[o].deviceKind,registCode:e.data.content[o].registCode,eqCode:e.data.content[o].eqCode,eqUseAddr:e.data.content[o].eqUseAddr,productCode:e.data.content[o].productCode,deviceId:e.data.content[o].id};t.canStopUseDeviceList.push(a)}}).catch(function(e){console.log(e)})},clearRuleForm:function(){this.ruleForm={registKind:"",deviceNum:"",useComName:"",useComAddr:"",safeAdministrator:"",propertyComPhone:"",subList:[],mobilePhone:"",comTablePerson:""}},submit:function(e){var t=this;p.p(e).then(function(e){200==e.status&&(t.applyId=e.data.applyId,t.fileId=e.data.forms.split("=")[1].split("}")[0],0==t.fileId?(t.$Modal.remove(),t.$Message.info("表单已保存，但无法预览，请稍后再试")):(t.current++,t.active++,t.pdfUrl="/file/preview?fileId="+t.fileId,t.$Modal.remove(),t.$Message.info("您已提交信息，请预览结果")),t.modalCertain=!1)}).catch(function(e){console.log(e),t.$Modal.remove(),t.$Message.info("提交超时，请稍后再试")})},submitContent:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$Message.info("尚有信息不符合要求，请检查"),!1;var o=(i()({},t.ruleForm),t.makeParams());t.submit(o)})},makeParams:function(){var e={};e.formList=[],e.formList.push(this.ruleForm),e.formList[0].acceptorAgencyId=this.acceptorAgencyId,e.formList[0].acceptorAgencyName=this.acceptorAgencyName,e.formList[0].formType=5,e.deviceId=[];for(var t=0;t<this.ruleForm.subList.length;t++)e.deviceId.push(this.ruleForm.subList[t].deviceId);return e.applyType=4,e},updateContent:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$Message.info("尚有信息不符合要求，请检查"),!1;var o=(i()({},t.ruleForm),{});o.formList=[],o.formList.push(t.ruleForm),o.formList[0].acceptorAgencyId=t.acceptorAgencyId,o.formList[0].acceptorAgencyName=t.acceptorAgencyName,o.formList[0].formType=5,o.deviceId=[];for(var a=0;a<t.ruleForm.subList.length;a++)o.deviceId.push(t.ruleForm.subList[a].deviceId);o.applyType=4,p.g(o).then(function(e){200==e.status&&(t.applyId=e.data.applyId,t.fileId=e.data.forms.split("=")[1].split("}")[0],0==t.fileId?(t.$Modal.remove(),t.$Message.info("表单已保存，但无法预览，请稍后再试")):(t.current++,t.active++,t.pdfUrl="/file/preview?fileId="+t.fileId,t.$Modal.remove(),t.$Message.info("您已提交信息，请预览结果")),t.modalCertain=!1)}).catch(function(e){console.log(e),t.$Modal.remove(),t.$Message.info("提交超时，请稍后再试")})})},next:function(){if(0==this.ruleForm.subList.length)return void this.$Message.info("请选择要报废的设备");5==this.current?this.current=0:this.current+=1,this.active++},before:function(){this.current--,2==--this.active&&(this.creatOrUpdate=!0)},confirmForm:function(){var e=this;if(""==this.acceptCom)return void this.$Notice.error({title:"这是通知标题",desc:"请选择登记机关"});this.$refs.ruleForm.validate(function(t){if(!t)return console.log("error submit!!"),e.$Message.info("尚有信息不符合要求，请检查"),!1;1==e.$route.query.ifold||!0===e.creatOrUpdate?e.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",loading:!0,onOk:function(){e.updateContent("ruleForm")},onCancel:function(){e.$Message.info("点击了取消")}}):e.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",loading:!0,onOk:function(){e.submitContent("ruleForm")},onCancel:function(){e.$Message.info("点击了取消")}})})},handleSuccess:function(e,t){""===this.uploadList[0].url?(this.uploadList[0].url=e.data.thumbnail,this.pdfList.push(e.data.preview)):(this.uploadList.push({url:e.data.thumbnail}),this.pdfList.push(e.data.preview))},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不对",desc:"请上传pdf格式文件"})},handleRemove:function(e,t){for(var o=0;o<this.uploadList.length;o++)this.uploadList[o].url==e.response.data.thumbnail&&this.uploadList.splice(o,1);""==this.uploadList.length&&(this.uploadList=[{url:""}])},handleBeforeUpload1:function(){this.fileList[0]++},handleBeforeUpload2:function(){this.fileList[1]++},handleView:function(e){console.log(e),this.visible=!0,this.pdf=this.pdfList[e]},instance:function(e){for(var t=this,o=0;o<this.fileList.length;o++)if(this.fileList[o]<=1)return void this.$Notice.warning({title:"通知",desc:"请上传全部pdf文件"});var a="applyId="+this.applyId;p.h(a).then(function(e){e&&t.$Modal.confirm({title:"通知",content:"<p>您已经成功提交申请</p><p>请耐心等待受理结果</p>",onOk:function(){t.$router.go(0)},onCancel:function(){t.$Message.info("点击了取消")}})}).catch(function(e){console.log(e)})},selectDevice:function(e,t){this.formDynamicPres.items=e,this.ruleForm.subList=e,this.ruleForm.deviceNum=e.length},selectDeviceAll:function(e){this.formDynamicPres.items=e,this.ruleForm.subList=e,this.ruleForm.deviceNum=e.length}})}},756:function(e,t,o){t=e.exports=o(654)(!0),t.push([e.i,'@media print{.print[data-v-3ba63dea]{display:block}.nprint[data-v-3ba63dea]{display:none}}.setApp[data-v-3ba63dea]{color:#495060;position:relative}.setApp_topbar[data-v-3ba63dea]{position:fixed;width:100%;margin:0;padding:0;height:80px;z-index:10;background-color:#fff}.base-box[data-v-3ba63dea],.chooseAccept[data-v-3ba63dea]{margin-left:8%;display:block;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;width:83.881%;padding-left:100px;padding-right:100px;box-sizing:border-box;background-color:#fff}.chooseAccept[data-v-3ba63dea]{padding-bottom:10px;margin-bottom:10px}.header_one[data-v-3ba63dea]{text-align:center;margin-left:-50px;margin-top:20px;font-size:25px}.header_two[data-v-3ba63dea]{margin-left:-30px;margin-top:10px;font-size:19px}.ivu-form .ivu-form-item-label[data-v-3ba63dea]{font-size:18px;background-color:red;display:inline-block}.bread[data-v-3ba63dea]{margin-bottom:5px;margin-top:10px}.setApp_button[data-v-3ba63dea]{margin:10px}.city_select_app[data-v-3ba63dea]{margin:0 auto;width:80%;margin-left:200px;margin-bottom:10px}.city_select_app[data-v-3ba63dea],.city_select_app_exit[data-v-3ba63dea]{display:block;padding:10px;background-color:#fff;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.city_select_app_exit[data-v-3ba63dea]{width:700px;margin-left:200px;margin-bottom:10px}.city_select_app_exit .city_select_content[data-v-3ba63dea]{border-bottom:1px solid #dddee1;margin-bottom:5px;padding-bottom:5px}.pdfInfo[data-v-3ba63dea]{margin:15px}.demo-upload-list[data-v-3ba63dea]{display:inline-block;width:150px;height:200px;text-align:center;line-height:60px;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:4px}.demo-upload-list img[data-v-3ba63dea]{width:100%;height:100%}.demo-upload-list-cover[data-v-3ba63dea]{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.demo-upload-list:hover .demo-upload-list-cover[data-v-3ba63dea]{display:block}.demo-upload-list-cover i[data-v-3ba63dea]{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}.formDynamicPres[data-v-3ba63dea]{border:1px solid rgba(0,0,0,.2);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;margin-bottom:5px;padding-left:5%;padding-top:3%}.list-box[data-v-3ba63dea]{display:block;height:auto;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-color:#dddee1;margin-top:10px;box-sizing:border-box}.taishu[data-v-3ba63dea] :before{content:"*";display:inline-block;margin-right:4px;line-height:1;font-family:SimSun;font-size:16px;color:#f30}',"",{version:3,sources:["/Users/wxdandelion/special_eq_project/src/page/apply/disabledApp/disabledApp.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,CACA,AACD,yBACE,cAAe,AACf,iBAAmB,CACpB,AACD,gCACE,eAAgB,AAChB,WAAY,AACZ,SAAY,AACZ,UAAa,AACb,YAAa,AACb,WAAY,AACZ,qBAAwB,CACzB,AAGD,0DAEE,eAAgB,AAChB,cAAe,AACf,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,cAAe,AACf,mBAAoB,AACpB,oBAAqB,AACrB,sBAAuB,AACvB,qBAAwB,CACzB,AACD,+BACE,oBAAqB,AACrB,kBAAoB,CACrB,AACD,6BACE,kBAAmB,AACnB,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,6BACE,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,gDACE,eAAgB,AAChB,qBAAsB,AACtB,oBAAsB,CACvB,AACD,wBACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,gCACE,WAAa,CACd,AACD,kCACE,cAAe,AAEf,UAAW,AAQX,kBAAmB,AACnB,kBAAoB,CACrB,AACD,yEAZE,cAAe,AAEf,aAAc,AACd,sBAAwB,AACxB,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,6BAA+B,CAgBhC,AAZD,uCACE,YAAa,AASb,kBAAmB,AACnB,kBAAoB,CACrB,AACD,4DACI,gCAAiC,AACjC,kBAAmB,AACnB,kBAAoB,CACvB,AACD,0BACE,WAAa,CACd,AAKD,mCACE,qBAAsB,AACtB,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAkB,AAClB,6BAA8B,AAC9B,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,oCAAyC,AACzC,gBAAkB,CACnB,AACD,uCACE,WAAY,AACZ,WAAa,CACd,AACD,yCACE,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA+B,CAChC,AACD,iEACE,aAAe,CAChB,AACD,2CACE,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,YAAc,CACf,AACD,kCACE,gCAAqC,AACrC,2BAA4B,AAC5B,4BAA6B,AAC7B,+BAAgC,AAChC,8BAA+B,AAC/B,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,2BACE,cAAe,AACf,YAAa,AACb,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,qBAAsB,AACtB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,iCACE,YAAa,AACb,qBAAsB,AACtB,iBAAkB,AAClB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb",file:"disabledApp.vue",sourcesContent:["\n@media print {\n.print[data-v-3ba63dea] {\n    display: block;\n}\n.nprint[data-v-3ba63dea] {\n    display: none;\n}\n}\n.setApp[data-v-3ba63dea] {\n  color: #495060;\n  position: relative;\n}\n.setApp_topbar[data-v-3ba63dea] {\n  position: fixed;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  height: 80px;\n  z-index: 10;\n  background-color: white;\n}\n\n/*wang*/\n.base-box[data-v-3ba63dea],\n.chooseAccept[data-v-3ba63dea] {\n  margin-left: 8%;\n  display: block;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  width: 83.881%;\n  padding-left: 100px;\n  padding-right: 100px;\n  box-sizing: border-box;\n  background-color: white;\n}\n.chooseAccept[data-v-3ba63dea] {\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.header_one[data-v-3ba63dea] {\n  text-align: center;\n  margin-left: -50px;\n  margin-top: 20px;\n  font-size: 25px;\n}\n.header_two[data-v-3ba63dea] {\n  margin-left: -30px;\n  margin-top: 10px;\n  font-size: 19px;\n}\n.ivu-form .ivu-form-item-label[data-v-3ba63dea] {\n  font-size: 18px;\n  background-color: red;\n  display: inline-block;\n}\n.bread[data-v-3ba63dea] {\n  margin-bottom: 5px;\n  margin-top: 10px;\n}\n.setApp_button[data-v-3ba63dea] {\n  margin: 10px;\n}\n.city_select_app[data-v-3ba63dea] {\n  margin: 0 auto;\n  display: block;\n  width: 80%;\n  padding: 10px;\n  background-color: white;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-left: 200px;\n  margin-bottom: 10px;\n}\n.city_select_app_exit[data-v-3ba63dea] {\n  width: 700px;\n  display: block;\n  padding: 10px;\n  background-color: white;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-left: 200px;\n  margin-bottom: 10px;\n}\n.city_select_app_exit .city_select_content[data-v-3ba63dea] {\n    border-bottom: 1px solid #dddee1;\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n}\n.pdfInfo[data-v-3ba63dea] {\n  margin: 15px;\n}\n\n/*.ivu-form-item {*/\n/*margin-bottom: 10px;*/\n/*}*/\n.demo-upload-list[data-v-3ba63dea] {\n  display: inline-block;\n  width: 150px;\n  height: 200px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.demo-upload-list img[data-v-3ba63dea] {\n  width: 100%;\n  height: 100%;\n}\n.demo-upload-list-cover[data-v-3ba63dea] {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover[data-v-3ba63dea] {\n  display: block;\n}\n.demo-upload-list-cover i[data-v-3ba63dea] {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n.formDynamicPres[data-v-3ba63dea] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-bottom: 5px;\n  padding-left: 5%;\n  padding-top: 3%;\n}\n.list-box[data-v-3ba63dea] {\n  display: block;\n  height: auto;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-color: #dddee1;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n.taishu[data-v-3ba63dea] :before {\n  content: '*';\n  display: inline-block;\n  margin-right: 4px;\n  line-height: 1;\n  font-family: SimSun;\n  font-size: 16px;\n  color: #f30;\n}\n"],sourceRoot:""}])},792:function(e,t,o){var a=o(756);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(655)("a14745da",a,!0)},829:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"disableApp"},[o("div",{staticClass:"setApp_topbar"},[o("div",{staticClass:"step",staticStyle:{width:"85%","margin-top":"20px"}},[o("Steps",{attrs:{current:e.current}},[o("Step",{attrs:{title:"步骤1",content:"选择要报废的设备"}}),e._v(" "),o("Step",{attrs:{title:"步骤2",content:"填写《特种设备停用报废注销登记表》"}}),e._v(" "),o("Step",{attrs:{title:"步骤3",content:"预览《特种设备停用报废注销登记表》"}}),e._v(" "),o("Step",{attrs:{title:"步骤4",content:"提交相关证件"}}),e._v(" "),o("Step",{attrs:{title:"步骤5",content:"完成申请"}})],1)],1)]),e._v(" "),o("div",{staticClass:"setApp_content",staticStyle:{position:"absolute",top:"85px"}},[1==this.active?o("div",{staticClass:"statusInfo",staticStyle:{"margin-bottom":"20px"}},[o("div",{staticClass:"list-box"},[o("h3",{staticClass:"header_one",staticStyle:{margin:"10px"}},[e._v("选择要报废的设备")]),e._v(" "),o("Table",{ref:"selection",attrs:{border:"",columns:e.columnsCanStopUse,data:e.canStopUseDeviceList,width:"800px"},on:{"on-select":e.selectDevice,"on-select-all":e.selectDeviceAll}}),e._v(" "),1==this.active?o("Button",{attrs:{type:"primary"},on:{click:function(t){e.next()}}},[e._v("下一步")]):e._e()],1)]):e._e(),e._v(" "),o("Form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":110,"label-position":"left"}},[2==this.active?o("div",{staticClass:"statusInfo"},[o("div",{staticClass:"chooseAccept"},[o("h3",{staticClass:"header_one",staticStyle:{"margin-bottom":"10px"}},[e._v("登记机关")]),e._v(" "),o("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"登记机关"}},[o("Select",{attrs:{filterable:"","label-in-value":!0},on:{"on-change":e.chosenAccept},model:{value:e.acceptCom,callback:function(t){e.acceptCom=t},expression:"acceptCom"}},e._l(e.acceptComList,function(t){return o("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),o("div",{staticClass:"base-box"},[o("h2",{staticClass:"header_one"},[e._v("特种设备停用报废注销登记表")]),e._v(" "),o("h2",{staticClass:"header_two"},[e._v("设备基本情况")]),e._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"申报种类",prop:"registKind"}},[o("Select",{model:{value:e.ruleForm.registKind,callback:function(t){e.$set(e.ruleForm,"registKind",t)},expression:"ruleForm.registKind"}},e._l(e.declarationTypeList,function(t){return o("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label)+"\n                ")])}))],1)],1),e._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("Form-item",{staticClass:"ivu-form-item-required",attrs:{label:"台数",prop:"deviceNum"}},[o("Input",{attrs:{disabled:""},model:{value:e.ruleForm.deviceNum,callback:function(t){e.$set(e.ruleForm,"deviceNum",t)},expression:"ruleForm.deviceNum"}})],1)],1)],1),e._v(" "),o("Form-item",{attrs:{label:"使用单位名称",prop:"useComName"}},[o("Input",{attrs:{disabled:""},model:{value:e.ruleForm.useComName,callback:function(t){e.$set(e.ruleForm,"useComName",t)},expression:"ruleForm.useComName"}})],1),e._v(" "),o("Form-item",{attrs:{label:"使用单位地址",prop:"useComAddr"}},[o("Input",{attrs:{disabled:""},model:{value:e.ruleForm.useComAddr,callback:function(t){e.$set(e.ruleForm,"useComAddr",t)},expression:"ruleForm.useComAddr"}})],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"安全管理员",prop:"safeAdministrator"}},[o("Input",{model:{value:e.ruleForm.safeAdministrator,callback:function(t){e.$set(e.ruleForm,"safeAdministrator",t)},expression:"ruleForm.safeAdministrator"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("Form-item",{attrs:{label:"安全管理员联系电话",prop:"mobilePhone"}},[o("Input",{model:{value:e.ruleForm.mobilePhone,callback:function(t){e.$set(e.ruleForm,"mobilePhone",t)},expression:"ruleForm.mobilePhone"}})],1)],1)],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"产权单位名称",prop:"propertyComName"}},[o("Input",{attrs:{disabled:""},model:{value:e.ruleForm.propertyComName,callback:function(t){e.$set(e.ruleForm,"propertyComName",t)},expression:"ruleForm.propertyComName"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("Form-item",{attrs:{label:"产权单位联系电话",prop:"propertyComPhone"}},[o("Input",{model:{value:e.ruleForm.propertyComPhone,callback:function(t){e.$set(e.ruleForm,"propertyComPhone",t)},expression:"ruleForm.propertyComPhone"}})],1)],1)],1),e._v(" "),e._l(e.formDynamicPres.items,function(t,a){return o("Form",{key:t.id,ref:"formDynamicPres",refInFor:!0,staticClass:"formDynamicPres",attrs:{model:e.formDynamicPres,"label-width":140,inline:""}},[o("Row",[o("Col",{attrs:{span:"11"}},[o("FormItem",{key:a,staticClass:"ivu-form-item-required",attrs:{label:"序号"+(a+1)+"  设备品种（名称）",prop:"items."+a+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.deviceKind,callback:function(o){e.$set(t,"deviceKind",o)},expression:"item.deviceKind"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("FormItem",{key:a,staticClass:"ivu-form-item-required",attrs:{label:"使用登记证编号",prop:"items."+a+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.registCode,callback:function(o){e.$set(t,"registCode",o)},expression:"item.registCode"}})],1)],1)],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("FormItem",{key:a,staticClass:"ivu-form-item-required",attrs:{label:"设备代码",prop:"items."+a+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.eqCode,callback:function(o){e.$set(t,"eqCode",o)},expression:"item.eqCode"}})],1),e._v(" "),o("FormItem",{key:a,staticClass:"ivu-form-item-required",attrs:{label:"产品编号",prop:"items."+a+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.productCode,callback:function(o){e.$set(t,"productCode",o)},expression:"item.productCode"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("FormItem",{key:a,staticClass:"ivu-form-item-required",attrs:{label:"设备使用地点",prop:"items."+a+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.eqUseAddr,callback:function(o){e.$set(t,"eqUseAddr",o)},expression:"item.eqUseAddr"}})],1),e._v(" "),o("FormItem",{key:a,staticClass:"ivu-form-item-required",attrs:{label:"停用注销报废原因",prop:"items."+a+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.reasons,callback:function(o){e.$set(t,"reasons",o)},expression:"item.reasons"}})],1)],1)],1),e._v(" "),o("br")],1)})],2),e._v(" "),o("div",{staticClass:"base-box"},[o("h2",{staticClass:"header_two"},[e._v("其他信息")]),e._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"使用单位填表人员",prop:"comTablePerson"}},[o("Input",{model:{value:e.ruleForm.comTablePerson,callback:function(t){e.$set(e.ruleForm,"comTablePerson",t)},expression:"ruleForm.comTablePerson"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"11",offset:"2"}})],1)],1)]):e._e(),e._v(" "),3==this.active?o("div",{staticClass:"setTable",staticStyle:{width:"900px",top:"30px",position:"absolute"}},[o("iframe",{staticStyle:{width:"100%",height:"1000px"},attrs:{id:"iFramePdf",src:this.pdfUrl}}),e._v(" "),o("Button",{attrs:{type:"warning"},on:{click:function(t){e.printTrigger("iFramePdf")}}},[e._v("打印")]),e._v(" "),3==this.active?o("Button",{attrs:{type:"primary"},on:{click:function(t){e.before()}}},[e._v("上一步")]):e._e(),e._v(" "),3==this.active?o("Button",{attrs:{type:"success"},on:{click:function(t){e.next()}}},[e._v("下一步")]):e._e()],1):e._e(),e._v(" "),4==this.active?o("div",{staticClass:"pdfInfo"},[o("h2",[e._v("相关证明")]),e._v(" "),o("Row",{staticStyle:{width:"1000px"}},[o("Col",{attrs:{span:"10"}},[o("Form-item",{attrs:{label:"产权单位的书面委托","label-width":200}},[o("Upload",{ref:"upload1",attrs:{"on-format-error":e.handleFormatError,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"default-file-list":e.defaultPdfList1,"before-upload":e.handleBeforeUpload1,action:"/file/upload?applyId="+this.applyId+"&fileName=产权单位的书面委托"+this.fileList[8],"with-credentials":""}},[o("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传文件")])],1)],1)],1),e._v(" "),o("Col",{attrs:{span:"10",offset:"4"}},[o("Form-item",{attrs:{label:"产权单位的授权文件","label-width":200}},[o("Upload",{ref:"upload2",attrs:{"on-format-error":e.handleFormatError,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"default-file-list":e.defaultPdfList1,action:"/file/upload?applyId="+this.applyId+"&fileName=产权单位的授权文件"+this.fileList[1],"before-upload":e.handleBeforeUpload2,"with-credentials":""}},[o("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传文件")])],1)],1)],1)],1),e._v(" "),o("h5",[e._v("上传文件缩略图")]),e._v(" "),e._l(e.uploadList,function(t,a){return o("div",{staticClass:"demo-upload-list"},[o("img",{attrs:{src:t.url}}),e._v(" "),o("div",{staticClass:"demo-upload-list-cover"},[o("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){e.handleView(a)}}})],1)])}),e._v(" "),o("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?o("iframe",{staticStyle:{width:"100%",height:"1000px"},attrs:{id:"iFramePdf",src:this.pdf}}):e._e()])],2):e._e(),e._v(" "),o("div",{staticClass:"setApp_button"},[2==this.active?o("Button",{attrs:{type:"primary"},on:{click:e.confirmForm}},[e._v("下一步")]):e._e(),e._v(" "),4==this.active?o("Button",{on:{click:function(t){e.instance("success")}}},[e._v("确认提交")]):e._e()],1)])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=21.446c55607353a6e13d60.js.map
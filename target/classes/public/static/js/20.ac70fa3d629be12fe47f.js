webpackJsonp([20],{667:function(t,e,o){function i(t){o(797)}var r=o(47)(o(719),o(833),i,"data-v-68b14384",null);t.exports=r.exports},684:function(t,e,o){"use strict";function i(t){return o.i(B.a)("/apply/create",t,"post")}function r(t){return o.i(B.a)("/apply/drop",t,"post")}function a(t){return o.i(B.a)("/apply/disable",t,"post")}function n(t){return o.i(B.a)("/user/update",t,"post")}function s(t){return o.i(B.a)("/apply/update",t,"post")}function l(t){return o.i(B.a)("/static/deviceClass?"+t,t,"get")}function d(t){return o.i(B.a)("/static/deviceType?"+t,t,"get")}function p(t){return o.i(B.a)("/map/provinces",t,"get")}function c(t){return o.i(B.a)("/map/cities?"+t,t,"get")}function A(t){return o.i(B.a)("/map/areas?"+t,t,"get")}function u(t){return o.i(B.a)("/apply/get?"+t,t,"get")}function m(t){return o.i(B.a)("/apply/confirm?"+t,t,"get")}function f(t){return o.i(B.a)("/map/organization?"+t,t,"get")}function b(t){return o.i(B.a)("/device/cylinder?"+t,t,"get")}function C(t){return o.i(B.a)("/device/pipe?"+t,t,"get")}function h(t){return o.i(B.a)("/device/cylinder",t,"post")}function v(t){return o.i(B.a)("/device/pipe",t,"post")}function g(t){return o.i(B.a)("/apply/create",t,"post")}e.f=i,e.q=r,e.p=a,e.r=n,e.g=s,e.o=l,e.i=d,e.a=p,e.b=c,e.c=A,e.e=u,e.h=m,e.d=f,e.j=b,e.k=C,e.l=h,e.m=v,e.n=g;var B=o(97)},685:function(t,e,o){"use strict";function i(t){return o.i(a.a)("/device/get",t,"post")}function r(t){return o.i(a.a)("/device/get?"+t,t,"get")}e.a=i,e.b=r;var a=o(97)},719:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(246),r=o.n(i),a=o(71),n=o.n(a),s=o(23),l=o.n(s),d=o(48),p=o(684),c=o(685);e.default={data:function(){var t;return t={fileList:[1,1],canStopUseDeviceList:[],columnsCanStopUse:[{type:"selection",width:60,align:"center"},{type:"index",key:"id",width:60},{title:"设备品种",key:"deviceKind",width:120},{title:"使用登记证编号",key:"registCode"},{title:"设备代码",key:"eqCode"},{title:"设备使用地点",key:"eqUseAddr"},{title:"产品编号",key:"productCode"}],pdfUrl:"",pdfList:[],pdf:"",addressCode:"",registCode:"",deviceType:"",acceptCom:"",acceptComList:[],current:0,ruleForm:{registKind:"",deviceNum:"",useComName:"",useComAddr:"",safeAdministrator:"",propertyComPhone:"",subList:[],comTablePerson:"",mobilePhone:""},formDynamicPres:{items:[{deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}]},declarationTypeList:[{value:"停用",label:"停用"},{value:"报废",label:"报废"},{value:"注销",label:"注销"}],active:1},l()(t,"pdfUrl",""),l()(t,"rules",{registKind:[{required:!0,message:"不能为空",trigger:"change"}],comTablePerson:[{required:!0,message:"不能为空",trigger:"blur"}],useComAddr:[{required:!0,message:"不能为空",trigger:"blur"}],mobilePhone:[{required:!0,message:"不能为空",trigger:"blur"}]}),l()(t,"creatOrUpdate",!1),l()(t,"defaultPdfList1",[]),l()(t,"uploadList",[{url:""}]),l()(t,"visible",!1),l()(t,"applyId",""),l()(t,"acceptorAgencyId",""),l()(t,"acceptorAgencyName",""),t},components:{},computed:n()({},o.i(d.a)(["getSelectedOption","getRegistOne","getSelectedNum","getterUserData"])),mounted:function(){this.initData()},watch:{"$route.query":function(){"/disabledApp"==this.$route.path&&this.initData()}},methods:n()({},o.i(d.b)(["getUserData"]),{handleAddPres:function(){this.formDynamicPres.items.push({deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}),this.ruleForm.subList=this.formDynamicPres.items},handleRemovePres:function(t){this.formDynamicPres.items.splice(t,1),this.ruleForm.subList=this.formDynamicPres.items},printTrigger:function(t){var e=document.getElementById(t);e.focus(),e.contentWindow.print()},chosenAccept:function(t){this.acceptorAgencyId=t.value,this.acceptorAgencyName=t.label},setUserDetailData:function(){this.addressCode=localStorage.getItem("addressCode"),this.ruleForm.useComName=localStorage.getItem("useComName"),this.ruleForm.useComAddr=localStorage.getItem("useComAddr"),this.ruleForm.mobilePhone=localStorage.getItem("mobilePhone"),this.ruleForm.propertyComName=localStorage.getItem("propertyComName"),"true"==localStorage.getItem("company")?(this.ruleForm.safeAdministrator=localStorage.getItem("safeAdministrator"),this.isCompany=!0,console.log(this.ruleForm.safeAdministrator)):(this.ruleForm.safeAdministrator=localStorage.getItem("name"),this.isCompany=!1)},initData:function(){var t=this;this.fileList=[1,1],this.active=1,this.current=0,this.creatOrUpdate=!1,this.defaultPdfList1=[],this.deviceCode=this.$route.query.deviceCode,this.registCode=this.$route.query.registCode,this.deviceType=this.$route.query.deviceType,this.uploadList=[{url:""}],this.canStopUseDeviceList=[],this.clearRuleForm(),this.formDynamicPres.items=[{deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}],this.setUserDetailData();var e="addressCode="+this.addressCode;p.d(e).then(function(e){t.acceptComList=[];for(var o=0,i=e.length;o<i;o++)t.acceptComList.push({value:e[o].id,label:e[o].name})}).catch(function(t){console.log(t)}),e={size:10,processing:!1,states:[0,1]},this.getCanStopUseDevice(e)},getCanStopUseDevice:function(t){var e=this;c.a(t).then(function(t){if(200===t.status)for(var o=0;o<t.data.content.length;o++){var i={deviceKind:t.data.content[o].deviceKind,registCode:t.data.content[o].registCode,eqCode:t.data.content[o].eqCode,eqUseAddr:t.data.content[o].eqUseAddr,productCode:t.data.content[o].productCode,deviceId:t.data.content[o].id};e.canStopUseDeviceList.push(i)}}).catch(function(t){console.log(t)})},clearRuleForm:function(){this.ruleForm={registKind:"",deviceNum:"",useComName:"",useComAddr:"",safeAdministrator:"",propertyComPhone:"",subList:[],mobilePhone:"",comTablePerson:""}},submit:function(t){var e=this;p.p(t).then(function(t){200==t.status&&(e.applyId=t.data.applyId,e.fileId=t.data.forms.split("=")[1].split("}")[0],e.pdfUrl="/file/preview?fileId="+e.fileId,e.$Message.info("您已提交信息，请预览结果"),e.modalCertain=!1)}).catch(function(t){console.log(t)})},submitContent:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),e.$Message.info("尚有信息不符合要求，请检查"),!1;e.current++,e.active++;var o=(r()({},e.ruleForm),e.makeParams());e.submit(o)})},makeParams:function(){var t={};t.formList=[],t.formList.push(this.ruleForm),t.formList[0].acceptorAgencyId=this.acceptorAgencyId,t.formList[0].acceptorAgencyName=this.acceptorAgencyName,t.formList[0].formType=5,t.deviceId=[];for(var e=0;e<this.ruleForm.subList.length;e++)t.deviceId.push(this.ruleForm.subList[e].deviceId);return t.applyType=4,t},updateContent:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),e.$Message.info("尚有信息不符合要求，请检查"),!1;var o=(r()({},e.ruleForm),{});o.formList=[],o.formList.push(e.ruleForm),o.formList[0].acceptorAgencyId=e.acceptorAgencyId,o.formList[0].acceptorAgencyName=e.acceptorAgencyName,o.formList[0].formType=5,o.deviceId=[];for(var i=0;i<e.ruleForm.subList.length;i++)o.deviceId.push(e.ruleForm.subList[i].deviceId);o.applyType=4,p.g(o).then(function(t){200==t.status&&(e.current++,e.active++,e.applyId=t.data.applyId,e.fileId=t.data.forms.split("=")[1].split("}")[0],e.pdfUrl="/file/preview?fileId="+e.fileId,e.$Message.info("您已提交信息，请预览结果"),e.modalCertain=!1)}).catch(function(t){console.log(t)})})},next:function(){if(0==this.ruleForm.subList.length)return void this.$Message.info("请选择要报废的设备");5==this.current?this.current=0:this.current+=1,this.active++},before:function(){this.current--,2==--this.active&&(this.creatOrUpdate=!0)},confirmForm:function(){var t=this;if(""==this.acceptCom)return void this.$Notice.error({title:"这是通知标题",desc:"请选择登记机关"});this.$refs.ruleForm.validate(function(e){if(!e)return console.log("error submit!!"),t.$Message.info("尚有信息不符合要求，请检查"),!1;1==t.$route.query.ifold||!0===t.creatOrUpdate?t.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",onOk:function(){t.updateContent("ruleForm")},onCancel:function(){t.$Message.info("点击了取消")}}):t.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",onOk:function(){t.submitContent("ruleForm")},onCancel:function(){t.$Message.info("点击了取消")}})})},handleSuccess:function(t,e){""===this.uploadList[0].url?(this.uploadList[0].url=t.data.thumbnail,this.pdfList.push(t.data.preview)):(this.uploadList.push({url:t.data.thumbnail}),this.pdfList.push(t.data.preview))},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不对",desc:"请上传pdf格式文件"})},handleRemove:function(t,e){for(var o=0;o<this.uploadList.length;o++)this.uploadList[o].url==t.response.data.thumbnail&&this.uploadList.splice(o,1);""==this.uploadList.length&&(this.uploadList=[{url:""}])},handleBeforeUpload1:function(){this.fileList[0]++},handleBeforeUpload2:function(){this.fileList[1]++},handleView:function(t){console.log(t),this.visible=!0,this.pdf=this.pdfList[t]},instance:function(t){for(var e=this,o=0;o<this.fileList.length;o++)if(this.fileList[o]<=1)return void this.$Notice.warning({title:"通知",desc:"请上传全部pdf文件"});var i="applyId="+this.applyId;p.h(i).then(function(t){t&&e.$Modal.confirm({title:"通知",content:"<p>您已经成功提交申请</p><p>请耐心等待受理结果</p>",onOk:function(){e.$router.go(0)},onCancel:function(){e.$Message.info("点击了取消")}})}).catch(function(t){console.log(t)})},selectDevice:function(t,e){this.formDynamicPres.items=t,this.ruleForm.subList=t,this.ruleForm.deviceNum=t.length},selectDeviceAll:function(t){this.formDynamicPres.items=t,this.ruleForm.subList=t,this.ruleForm.deviceNum=t.length}})}},762:function(t,e,o){e=t.exports=o(648)(!0),e.push([t.i,'@media print{.print[data-v-68b14384]{display:block}.nprint[data-v-68b14384]{display:none}}.setApp[data-v-68b14384]{color:#495060;position:relative}.setApp_topbar[data-v-68b14384]{position:fixed;width:100%;margin:0;padding:0;height:80px;z-index:10;background-color:#fff}.base-box[data-v-68b14384],.chooseAccept[data-v-68b14384]{margin-left:8%;display:block;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;width:83.881%;padding-left:100px;padding-right:100px;box-sizing:border-box;background-color:#fff}.chooseAccept[data-v-68b14384]{padding-bottom:10px;margin-bottom:10px}.header_one[data-v-68b14384]{text-align:center;margin-left:-50px;margin-top:20px;font-size:25px}.header_two[data-v-68b14384]{margin-left:-30px;margin-top:10px;font-size:19px}.ivu-form .ivu-form-item-label[data-v-68b14384]{font-size:18px;background-color:red;display:inline-block}.bread[data-v-68b14384]{margin-bottom:5px;margin-top:10px}.setApp_button[data-v-68b14384]{margin:10px}.city_select_app[data-v-68b14384]{margin:0 auto;width:80%;margin-left:200px;margin-bottom:10px}.city_select_app[data-v-68b14384],.city_select_app_exit[data-v-68b14384]{display:block;padding:10px;background-color:#fff;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.city_select_app_exit[data-v-68b14384]{width:700px;margin-left:200px;margin-bottom:10px}.city_select_app_exit .city_select_content[data-v-68b14384]{border-bottom:1px solid #dddee1;margin-bottom:5px;padding-bottom:5px}.pdfInfo[data-v-68b14384]{margin:15px}.demo-upload-list[data-v-68b14384]{display:inline-block;width:150px;height:200px;text-align:center;line-height:60px;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:4px}.demo-upload-list img[data-v-68b14384]{width:100%;height:100%}.demo-upload-list-cover[data-v-68b14384]{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.demo-upload-list:hover .demo-upload-list-cover[data-v-68b14384]{display:block}.demo-upload-list-cover i[data-v-68b14384]{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}.formDynamicPres[data-v-68b14384]{border:1px solid rgba(0,0,0,.2);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;margin-bottom:5px;padding-left:5%;padding-top:3%}.list-box[data-v-68b14384]{display:block;height:auto;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-color:#dddee1;margin-top:10px;box-sizing:border-box}.taishu[data-v-68b14384] :before{content:"*";display:inline-block;margin-right:4px;line-height:1;font-family:SimSun;font-size:16px;color:#f30}',"",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/page/apply/disabledApp/disabledApp.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,CACA,AACD,yBACE,cAAe,AACf,iBAAmB,CACpB,AACD,gCACE,eAAgB,AAChB,WAAY,AACZ,SAAY,AACZ,UAAa,AACb,YAAa,AACb,WAAY,AACZ,qBAAwB,CACzB,AAGD,0DAEE,eAAgB,AAChB,cAAe,AACf,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,cAAe,AACf,mBAAoB,AACpB,oBAAqB,AACrB,sBAAuB,AACvB,qBAAwB,CACzB,AACD,+BACE,oBAAqB,AACrB,kBAAoB,CACrB,AACD,6BACE,kBAAmB,AACnB,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,6BACE,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,gDACE,eAAgB,AAChB,qBAAsB,AACtB,oBAAsB,CACvB,AACD,wBACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,gCACE,WAAa,CACd,AACD,kCACE,cAAe,AAEf,UAAW,AAQX,kBAAmB,AACnB,kBAAoB,CACrB,AACD,yEAZE,cAAe,AAEf,aAAc,AACd,sBAAwB,AACxB,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,6BAA+B,CAgBhC,AAZD,uCACE,YAAa,AASb,kBAAmB,AACnB,kBAAoB,CACrB,AACD,4DACI,gCAAiC,AACjC,kBAAmB,AACnB,kBAAoB,CACvB,AACD,0BACE,WAAa,CACd,AAKD,mCACE,qBAAsB,AACtB,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAkB,AAClB,6BAA8B,AAC9B,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,oCAAyC,AACzC,gBAAkB,CACnB,AACD,uCACE,WAAY,AACZ,WAAa,CACd,AACD,yCACE,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA+B,CAChC,AACD,iEACE,aAAe,CAChB,AACD,2CACE,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,YAAc,CACf,AACD,kCACE,gCAAqC,AACrC,2BAA4B,AAC5B,4BAA6B,AAC7B,+BAAgC,AAChC,8BAA+B,AAC/B,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,2BACE,cAAe,AACf,YAAa,AACb,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,qBAAsB,AACtB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,iCACE,YAAa,AACb,qBAAsB,AACtB,iBAAkB,AAClB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb",file:"disabledApp.vue",sourcesContent:["\n@media print {\n.print[data-v-68b14384] {\n    display: block;\n}\n.nprint[data-v-68b14384] {\n    display: none;\n}\n}\n.setApp[data-v-68b14384] {\n  color: #495060;\n  position: relative;\n}\n.setApp_topbar[data-v-68b14384] {\n  position: fixed;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  height: 80px;\n  z-index: 10;\n  background-color: white;\n}\n\n/*wang*/\n.base-box[data-v-68b14384],\n.chooseAccept[data-v-68b14384] {\n  margin-left: 8%;\n  display: block;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  width: 83.881%;\n  padding-left: 100px;\n  padding-right: 100px;\n  box-sizing: border-box;\n  background-color: white;\n}\n.chooseAccept[data-v-68b14384] {\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.header_one[data-v-68b14384] {\n  text-align: center;\n  margin-left: -50px;\n  margin-top: 20px;\n  font-size: 25px;\n}\n.header_two[data-v-68b14384] {\n  margin-left: -30px;\n  margin-top: 10px;\n  font-size: 19px;\n}\n.ivu-form .ivu-form-item-label[data-v-68b14384] {\n  font-size: 18px;\n  background-color: red;\n  display: inline-block;\n}\n.bread[data-v-68b14384] {\n  margin-bottom: 5px;\n  margin-top: 10px;\n}\n.setApp_button[data-v-68b14384] {\n  margin: 10px;\n}\n.city_select_app[data-v-68b14384] {\n  margin: 0 auto;\n  display: block;\n  width: 80%;\n  padding: 10px;\n  background-color: white;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-left: 200px;\n  margin-bottom: 10px;\n}\n.city_select_app_exit[data-v-68b14384] {\n  width: 700px;\n  display: block;\n  padding: 10px;\n  background-color: white;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-left: 200px;\n  margin-bottom: 10px;\n}\n.city_select_app_exit .city_select_content[data-v-68b14384] {\n    border-bottom: 1px solid #dddee1;\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n}\n.pdfInfo[data-v-68b14384] {\n  margin: 15px;\n}\n\n/*.ivu-form-item {*/\n/*margin-bottom: 10px;*/\n/*}*/\n.demo-upload-list[data-v-68b14384] {\n  display: inline-block;\n  width: 150px;\n  height: 200px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.demo-upload-list img[data-v-68b14384] {\n  width: 100%;\n  height: 100%;\n}\n.demo-upload-list-cover[data-v-68b14384] {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover[data-v-68b14384] {\n  display: block;\n}\n.demo-upload-list-cover i[data-v-68b14384] {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n.formDynamicPres[data-v-68b14384] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-bottom: 5px;\n  padding-left: 5%;\n  padding-top: 3%;\n}\n.list-box[data-v-68b14384] {\n  display: block;\n  height: auto;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-color: #dddee1;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n.taishu[data-v-68b14384] :before {\n  content: '*';\n  display: inline-block;\n  margin-right: 4px;\n  line-height: 1;\n  font-family: SimSun;\n  font-size: 16px;\n  color: #f30;\n}\n"],sourceRoot:""}])},797:function(t,e,o){var i=o(762);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(649)("3653b224",i,!0)},833:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"disableApp"},[o("div",{staticClass:"setApp_topbar"},[o("div",{staticClass:"step",staticStyle:{width:"85%","margin-top":"20px"}},[o("Steps",{attrs:{current:t.current}},[o("Step",{attrs:{title:"步骤1",content:"选择要报废的设备"}}),t._v(" "),o("Step",{attrs:{title:"步骤2",content:"填写《特种设备停用报废注销登记表》"}}),t._v(" "),o("Step",{attrs:{title:"步骤3",content:"预览《特种设备停用报废注销登记表》"}}),t._v(" "),o("Step",{attrs:{title:"步骤4",content:"提交相关证件"}}),t._v(" "),o("Step",{attrs:{title:"步骤5",content:"完成申请"}})],1)],1)]),t._v(" "),o("div",{staticClass:"setApp_content",staticStyle:{position:"absolute",top:"85px"}},[1==this.active?o("div",{staticClass:"statusInfo",staticStyle:{"margin-bottom":"20px"}},[o("div",{staticClass:"list-box"},[o("h3",{staticClass:"header_one",staticStyle:{margin:"10px"}},[t._v("选择要报废的设备")]),t._v(" "),o("Table",{ref:"selection",attrs:{border:"",columns:t.columnsCanStopUse,data:t.canStopUseDeviceList,width:"800px"},on:{"on-select":t.selectDevice,"on-select-all":t.selectDeviceAll}}),t._v(" "),1==this.active?o("Button",{attrs:{type:"primary"},on:{click:function(e){t.next()}}},[t._v("下一步")]):t._e()],1)]):t._e(),t._v(" "),o("Form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":110,"label-position":"left"}},[2==this.active?o("div",{staticClass:"statusInfo"},[o("div",{staticClass:"chooseAccept"},[o("h3",{staticClass:"header_one",staticStyle:{"margin-bottom":"10px"}},[t._v("登记机关")]),t._v(" "),o("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"登记机关"}},[o("Select",{attrs:{filterable:"","label-in-value":!0},on:{"on-change":t.chosenAccept},model:{value:t.acceptCom,callback:function(e){t.acceptCom=e},expression:"acceptCom"}},t._l(t.acceptComList,function(e){return o("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1),t._v(" "),o("div",{staticClass:"base-box"},[o("h2",{staticClass:"header_one"},[t._v("特种设备停用报废注销登记表")]),t._v(" "),o("h2",{staticClass:"header_two"},[t._v("设备基本情况")]),t._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"申报种类",prop:"registKind"}},[o("Select",{model:{value:t.ruleForm.registKind,callback:function(e){t.ruleForm.registKind=e},expression:"ruleForm.registKind"}},t._l(t.declarationTypeList,function(e){return o("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label)+"\n                ")])}))],1)],1),t._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("Form-item",{staticClass:"ivu-form-item-required",attrs:{label:"台数",prop:"deviceNum"}},[o("Input",{attrs:{disabled:""},model:{value:t.ruleForm.deviceNum,callback:function(e){t.ruleForm.deviceNum=e},expression:"ruleForm.deviceNum"}})],1)],1)],1),t._v(" "),o("Form-item",{attrs:{label:"使用单位名称",prop:"useComName"}},[o("Input",{attrs:{disabled:""},model:{value:t.ruleForm.useComName,callback:function(e){t.ruleForm.useComName=e},expression:"ruleForm.useComName"}})],1),t._v(" "),o("Form-item",{attrs:{label:"使用单位地址",prop:"useComAddr"}},[o("Input",{attrs:{disabled:""},model:{value:t.ruleForm.useComAddr,callback:function(e){t.ruleForm.useComAddr=e},expression:"ruleForm.useComAddr"}})],1),t._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"安全管理员",prop:"safeAdministrator"}},[o("Input",{attrs:{disabled:""},model:{value:t.ruleForm.safeAdministrator,callback:function(e){t.ruleForm.safeAdministrator=e},expression:"ruleForm.safeAdministrator"}})],1)],1),t._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("Form-item",{attrs:{label:"安全管理员联系电话",prop:"mobilePhone"}},[o("Input",{attrs:{disabled:""},model:{value:t.ruleForm.mobilePhone,callback:function(e){t.ruleForm.mobilePhone=e},expression:"ruleForm.mobilePhone"}})],1)],1)],1),t._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"产权单位名称",prop:"propertyComName"}},[o("Input",{attrs:{disabled:""},model:{value:t.ruleForm.propertyComName,callback:function(e){t.ruleForm.propertyComName=e},expression:"ruleForm.propertyComName"}})],1)],1),t._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("Form-item",{attrs:{label:"产权单位联系电话",prop:"propertyComPhone"}},[o("Input",{model:{value:t.ruleForm.propertyComPhone,callback:function(e){t.ruleForm.propertyComPhone=e},expression:"ruleForm.propertyComPhone"}})],1)],1)],1),t._v(" "),t._l(t.formDynamicPres.items,function(e,i){return o("Form",{key:e.id,ref:"formDynamicPres",refInFor:!0,staticClass:"formDynamicPres",attrs:{model:t.formDynamicPres,"label-width":140,inline:""}},[o("Row",[o("Col",{attrs:{span:"11"}},[o("FormItem",{key:i,staticClass:"ivu-form-item-required",attrs:{label:"序号"+(i+1)+"  设备品种（名称）",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:e.deviceKind,callback:function(t){e.deviceKind=t},expression:"item.deviceKind"}})],1)],1),t._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("FormItem",{key:i,staticClass:"ivu-form-item-required",attrs:{label:"使用登记证编号",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:e.registCode,callback:function(t){e.registCode=t},expression:"item.registCode"}})],1)],1)],1),t._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("FormItem",{key:i,staticClass:"ivu-form-item-required",attrs:{label:"设备代码",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:e.eqCode,callback:function(t){e.eqCode=t},expression:"item.eqCode"}})],1),t._v(" "),o("FormItem",{key:i,staticClass:"ivu-form-item-required",attrs:{label:"产品编号",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:e.productCode,callback:function(t){e.productCode=t},expression:"item.productCode"}})],1)],1),t._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("FormItem",{key:i,staticClass:"ivu-form-item-required",attrs:{label:"设备使用地点",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:e.eqUseAddr,callback:function(t){e.eqUseAddr=t},expression:"item.eqUseAddr"}})],1),t._v(" "),o("FormItem",{key:i,staticClass:"ivu-form-item-required",attrs:{label:"停用注销报废原因",prop:"items."+i+".value"}},[o("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:e.reasons,callback:function(t){e.reasons=t},expression:"item.reasons"}})],1)],1)],1),t._v(" "),o("br")],1)})],2),t._v(" "),o("div",{staticClass:"base-box"},[o("h2",{staticClass:"header_two"},[t._v("其他信息")]),t._v(" "),o("Row",[o("Col",{attrs:{span:"11"}},[o("Form-item",{attrs:{label:"使用单位填表人员",prop:"comTablePerson"}},[o("Input",{model:{value:t.ruleForm.comTablePerson,callback:function(e){t.ruleForm.comTablePerson=e},expression:"ruleForm.comTablePerson"}})],1)],1),t._v(" "),o("Col",{attrs:{span:"11",offset:"2"}})],1)],1)]):t._e(),t._v(" "),3==this.active?o("div",{staticClass:"setTable",staticStyle:{width:"900px",top:"30px",position:"absolute"}},[o("iframe",{staticStyle:{width:"100%",height:"1000px"},attrs:{id:"iFramePdf",src:this.pdfUrl}}),t._v(" "),o("Button",{attrs:{type:"warning"},on:{click:function(e){t.printTrigger("iFramePdf")}}},[t._v("打印")]),t._v(" "),3==this.active?o("Button",{attrs:{type:"primary"},on:{click:function(e){t.before()}}},[t._v("上一步")]):t._e(),t._v(" "),3==this.active?o("Button",{attrs:{type:"success"},on:{click:function(e){t.next()}}},[t._v("下一步")]):t._e()],1):t._e(),t._v(" "),4==this.active?o("div",{staticClass:"pdfInfo"},[o("h2",[t._v("相关证明")]),t._v(" "),o("Row",{staticStyle:{width:"1000px"}},[o("Col",{attrs:{span:"10"}},[o("Form-item",{attrs:{label:"产权单位的书面委托","label-width":200}},[o("Upload",{ref:"upload1",attrs:{format:["pdf"],"on-format-error":t.handleFormatError,"on-success":t.handleSuccess,"on-remove":t.handleRemove,"default-file-list":t.defaultPdfList1,"before-upload":t.handleBeforeUpload1,action:"/file/upload?applyId="+this.applyId+"&fileName=产权单位的书面委托"+this.fileList[8],"with-credentials":""}},[o("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传文件")])],1)],1)],1),t._v(" "),o("Col",{attrs:{span:"10",offset:"4"}},[o("Form-item",{attrs:{label:"产权单位的授权文件","label-width":200}},[o("Upload",{ref:"upload2",attrs:{format:["pdf"],"on-format-error":t.handleFormatError,"on-success":t.handleSuccess,"on-remove":t.handleRemove,"default-file-list":t.defaultPdfList1,action:"/file/upload?applyId="+this.applyId+"&fileName=产权单位的授权文件"+this.fileList[1],"before-upload":t.handleBeforeUpload2,"with-credentials":""}},[o("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传文件")])],1)],1)],1)],1),t._v(" "),o("h5",[t._v("上传文件缩略图")]),t._v(" "),t._l(t.uploadList,function(e,i){return o("div",{staticClass:"demo-upload-list"},[o("img",{attrs:{src:e.url}}),t._v(" "),o("div",{staticClass:"demo-upload-list-cover"},[o("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(e){t.handleView(i)}}})],1)])}),t._v(" "),o("Modal",{attrs:{title:"查看图片"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?o("iframe",{staticStyle:{width:"100%",height:"1000px"},attrs:{id:"iFramePdf",src:this.pdf}}):t._e()])],2):t._e(),t._v(" "),o("div",{staticClass:"setApp_button"},[2==this.active?o("Button",{attrs:{type:"primary"},on:{click:t.confirmForm}},[t._v("下一步")]):t._e(),t._v(" "),4==this.active?o("Button",{on:{click:function(e){t.instance("success")}}},[t._v("确认提交")]):t._e()],1)])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=20.ac70fa3d629be12fe47f.js.map
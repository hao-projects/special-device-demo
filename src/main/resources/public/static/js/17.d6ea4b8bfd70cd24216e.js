webpackJsonp([17],{660:function(e,t,i){function o(e){i(793)}var a=i(47)(i(713),i(830),o,"data-v-3c39c84f",null);e.exports=a.exports},691:function(e,t,i){"use strict";function o(e){return i.i(y.a)("/apply/create",e,"post")}function a(e){return i.i(y.a)("/apply/drop",e,"post")}function r(e){return i.i(y.a)("/apply/disable",e,"post")}function n(e){return i.i(y.a)("/apply/save",e,"post")}function s(e){return i.i(y.a)("/apply/saveFirst",e,"post")}function l(e){return i.i(y.a)("/user/update",e,"post")}function d(e){return i.i(y.a)("/apply/update",e,"post")}function c(e){return i.i(y.a)("/static/deviceClass?"+e,e,"get")}function p(e){return i.i(y.a)("/static/deviceType?"+e,e,"get")}function u(e){return i.i(y.a)("/map/provinces",e,"get")}function A(e){return i.i(y.a)("/map/cities?"+e,e,"get")}function m(e){return i.i(y.a)("/map/areas?"+e,e,"get")}function f(e){return i.i(y.a)("/apply/get?"+e,e,"get")}function C(e){return i.i(y.a)("/apply/confirm?"+e,e,"get")}function v(e){return i.i(y.a)("/map/organization?"+e,e,"get")}function g(e){return i.i(y.a)("/device/cylinder?"+e,e,"get")}function h(e){return i.i(y.a)("/device/pipe?"+e,e,"get")}function b(e){return i.i(y.a)("/device/cylinder",e,"post")}function B(e){return i.i(y.a)("/device/pipe",e,"post")}function x(e){return i.i(y.a)("/apply/create",e,"post")}t.f=o,t.s=a,t.r=r,t.h=n,t.i=s,t.t=l,t.g=d,t.q=c,t.k=p,t.a=u,t.b=A,t.c=m,t.e=f,t.j=C,t.d=v,t.l=g,t.m=h,t.n=b,t.o=B,t.p=x;var y=i(98)},692:function(e,t,i){"use strict";function o(e){return i.i(r.a)("/device/get",e,"post")}function a(e){return i.i(r.a)("/device/get?"+e,e,"get")}t.a=o,t.b=a;var r=i(98)},694:function(e,t,i){"use strict";function o(e){return i.i(d.a)("/admin/apply/accept",e,"post")}function a(e){return i.i(d.a)("/admin/apply/accept",e,"post")}function r(e){return i.i(d.a)("/admin/apply/approve",e,"post")}function n(e){return i.i(d.a)("/admin/apply/approve",e,"post")}function s(e){return i.i(d.a)("/apply/get?"+e,e,"get")}function l(e){return i.i(d.a)("/admin/apply/sendRegistration?"+e,e,"get")}t.b=o,t.c=a,t.d=r,t.e=n,t.a=s,t.f=l;var d=i(98)},713:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(251),a=i.n(o),r=i(71),n=i.n(r),s=i(24),l=i.n(s),d=i(48),c=i(691),p=i(692),u=i(694);t.default={data:function(){var e,t=this;return e={canStopUseDeviceList:[],deviceTypeList:[],deviceCategoryList:[{value:"1000",label:"锅炉"},{value:"2000",label:"压力容器"},{value:"8000",label:"压力管道"},{value:"7000",label:"压力管道元件"},{value:"3000",label:"电梯"},{value:"4000",label:"起重机械"},{value:"9000",label:"客运索道"},{value:"6000",label:"大型游乐设施"},{value:"5000",label:"场（厂）内专用机动车辆"},{value:"F000",label:"安全附件"}],deviceClassList:[],columnsCanStopUse:[{type:"index",key:"id",width:60},{title:"设备品种",key:"deviceKind",width:120},{title:"使用登记证编号",key:"registCode"},{title:"设备代码",key:"eqCode"},{title:"设备使用地点",key:"eqUseAddr"},{title:"产品编号",key:"productCode"},{title:"操作",key:"state",width:100,render:function(e,i){return e("div",[e("Button",{props:{type:"primary"},style:{marginRight:"5px"},on:{click:function(){t.current=2,t.active=3,t.selectDevice(i.row)}}},"变更")])}}],pdfUrl:"",pdfList:[],pdf:"",addressCode:"",registCode:"",deviceType:"",acceptCom:"",acceptComList:[],current:0,ruleForm:{registKind:"",deviceNum:"",useComName:"",useComAddr:"",safeAdministrator:"",propertyComPhone:"",subList:[],comTablePerson:"",mobilePhone:""},registKindList:[{value:"新设备首次启用",label:"新设备首次启用"},{value:"停用后启用",label:"停用后启用"},{value:"改造",label:"改造"},{value:"使用单位更名",label:"使用单位更名"},{value:"使用地址变更",label:"使用地址变更"},{value:"过户",label:"过户"},{value:"移装",label:"移装"},{value:"达到设计使用年限",label:"达到设计使用年限"}],ifDisabled:"",formDynamicPres:{items:[{deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}]},declarationTypeList:[{value:"停用",label:"停用"},{value:"报废",label:"报废"},{value:"注销",label:"注销"}],active:1},l()(e,"pdfUrl",""),l()(e,"rules",{deviceName:[{required:!0,message:"不能为空",trigger:"change"}],eqCreateDate:[{required:!0,message:"请选择日期",type:"date",trigger:"change"}],registDate:[{required:!0,message:"请选择日期",type:"date",trigger:"change"}],registCode:[{required:!0,message:"不能为空",trigger:"change"}],manufatureComName:[{required:!0,message:"不能为空",trigger:"change"}],productCode:[{required:!0,message:"不能为空",trigger:"change"}],origUseComName:[{required:!0,message:"不能为空",trigger:"change"}]}),l()(e,"creatOrUpdate",!1),l()(e,"defaultPdfList1",[]),l()(e,"uploadList",[{url:""}]),l()(e,"visible",!1),l()(e,"applyId",""),e},components:{},computed:n()({},i.i(d.a)(["getSelectedOption","getRegistOne","getSelectedNum","getterUserData"])),mounted:function(){this.initData()},watch:{"$route.query":function(){"/areaAcrossChange"==this.$route.path&&this.initData()}},methods:n()({},i.i(d.b)(["getUserData"]),{handleAddPres:function(){this.formDynamicPres.items.push({deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}),this.ruleForm.subList=this.formDynamicPres.items},handleRemovePres:function(e){this.formDynamicPres.items.splice(e,1),this.ruleForm.subList=this.formDynamicPres.items},printTrigger:function(e){var t=document.getElementById(e);t.focus(),t.contentWindow.print()},chosenAccept:function(e){this.propertyComCode=e.value,this.propertyComName=e.label},setUserDetailData:function(){this.addressCode=localStorage.getItem("addressCode"),this.ruleForm.useComName=localStorage.getItem("useComName"),this.ruleForm.useComAddr=localStorage.getItem("useComAddr"),this.ruleForm.mobilePhone=localStorage.getItem("mobilePhone"),this.ruleForm.propertyComName=localStorage.getItem("propertyComName"),"true"==localStorage.getItem("company")?(this.ruleForm.safeAdministrator=localStorage.getItem("safeAdministrator"),this.isCompany=!0,console.log(this.ruleForm.safeAdministrator)):(this.ruleForm.safeAdministrator=localStorage.getItem("name"),this.isCompany=!1)},initData:function(){var e=this;this.active=1,this.current=0,this.creatOrUpdate=!1,this.defaultPdfList1=[],this.deviceCode=this.$route.query.deviceCode,this.registCode=this.$route.query.registCode,this.deviceType=this.$route.query.deviceType,this.uploadList=[{url:""}],this.canStopUseDeviceList=[],this.clearRuleForm(),this.formDynamicPres.items=[{deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}],this.setUserDetailData();var t="addressCode="+this.addressCode;c.d(t).then(function(t){e.acceptComList=[];for(var i=0,o=t.length;i<o;i++)e.acceptComList.push({value:t[i].id,label:t[i].name})}).catch(function(e){console.log(e)}),t={size:10,processing:!1,states:[0]},this.getCanStopUseDevice(t)},getCanStopUseDevice:function(e){var t=this;p.a(e).then(function(e){if(200===e.status)for(var i=0;i<e.data.content.length;i++)t.canStopUseDeviceList=e.data.content}).catch(function(e){console.log(e)})},clearRuleForm:function(){this.ruleForm={registKind:"移装",deviceNum:"",useComName:"",useComAddr:"",safeAdministrator:"",propertyComPhone:"",subList:[],mobilePhone:"",comTablePerson:"",changedType:"移装变更"}},chosenDeviceType:function(e){this.deviceClassTypeId=e.label},submit:function(e){var t=this;c.p(e).then(function(e){200==e.status&&(t.applyId=e.data.applyId,t.fileId=e.data.forms.split("=")[1].split("}")[0],0==t.fileId?(t.$Modal.remove(),t.$Message.info("表单已保存，但无法预览，请稍后再试")):(t.current++,t.active++,t.pdfUrl="/file/preview?fileId="+t.fileId,t.$Modal.remove(),t.$Message.info("您已提交信息，请预览结果")),t.modalCertain=!1)}).catch(function(e){console.log(e),t.$Modal.remove(),t.$Message.info("提交超时，请稍后再试")})},submitContent:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$Message.info("尚有信息不符合要求，请检查"),!1;var i=(a()({},t.ruleForm),t.makeParams());t.submit(i)})},makeParams:function(){var e={};e.formList=[],e.formList.push(this.ruleForm),e.formList[0].acceptorAgencyId=this.propertyComCode,e.formList[0].acceptorAgencyName=this.propertyComName,e.formList[0].formType=4,e.deviceId=this.deviceId;for(var t=0;t<this.ruleForm.subList.length;t++)e.deviceId.push(this.ruleForm.subList[t].deviceId);return e.applyType="跨区域变更申请",e},updateContent:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$Message.info("尚有信息不符合要求，请检查"),!1;var i=(a()({},t.ruleForm),{});i.formList=[],i.formList.push(t.ruleForm),i.formList[0].acceptorAgencyId=t.propertyComCode,i.formList[0].acceptorAgencyName=t.propertyComName,i.formList[0].formType=4,i.applyType="跨区域变更申请",i.id=parseInt(t.applyId)||parseInt(t.$route.query.applyId),c.g(i).then(function(e){200==e.status&&(t.applyId=e.data.applyId,t.modalCertain=!1,0==e.data.forms["特种设备使用登记证变更证明"]?(t.$Modal.remove(),t.$Message.info("表单已保存，但无法预览，请稍后再试")):(t.current++,t.active++,t.pdfUrl="/file/preview?fileId="+e.data.forms["特种设备使用登记证变更证明"],t.$Modal.remove(),t.$Message.info("您已提交信息，请预览结果")))}).catch(function(e){console.log(e),t.$Modal.remove(),t.$Message.info("提交超时，请稍后再试")})})},chosenDeviceCategory:function(e){var t=this,i="code="+e.value;this.deviceCategoryId=e.label,""!==e.value&&""!==this.deviceClassList&&c.q(i).then(function(e){t.deviceClassList=[];for(var i=0,o=e.length;i<o;i++)t.deviceClassList.push({value:e[i].code,label:e[i].name})}).catch(function(e){console.log(e)})},jump:function(){this.$router.push("areaAcrossChange2")},next:function(){5==this.current?this.current=0:this.current+=1,this.active++},before:function(){this.current--,3==--this.active&&(this.creatOrUpdate=!0)},confirmForm:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return console.log("error submit!!"),e.$Message.info("尚有信息不符合要求，请检查"),!1;1==e.$route.query.ifold||!0===e.creatOrUpdate?e.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",loading:!0,onOk:function(){e.updateContent("ruleForm")},onCancel:function(){e.$Message.info("点击了取消")}}):e.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",loading:!0,onOk:function(){e.submitContent("ruleForm")},onCancel:function(){e.$Message.info("点击了取消")}})})},handleSuccess:function(e,t){""===this.uploadList[0].url?(this.uploadList[0].url=e.data.thumbnail,this.pdfList.push(e.data.preview)):(this.uploadList.push({url:e.data.thumbnail}),this.pdfList.push(e.data.preview))},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不对",desc:"请上传pdf格式文件"})},handleRemove:function(e,t){for(var i=0;i<this.uploadList.length;i++)this.uploadList[i].url==e.response.data.thumbnail&&this.uploadList.splice(i,1);""==this.uploadList.length&&(this.uploadList=[{url:""}])},handleBeforeUpload:function(){var e=this.uploadList.length<2;return e||this.$Notice.warning({title:"最多只能上传 2 张图片。"}),e},handleView:function(e){console.log(e),this.visible=!0,this.pdf=this.pdfList[e]},chosenDeviceClass:function(e){var t=this,i="code="+e.value;this.deviceClassId=e.label,""!==e.value&&this.deviceTypeList!==[]&&c.k(i).then(function(e){t.deviceTypeList=[];for(var i=0,o=e.length;i<o;i++)t.deviceTypeList.push({value:e[i].code,label:e[i].name});0===t.deviceTypeList.length?(t.ifDisabled=!0,t.deviceTypePlace="-"):t.ifDisabled=!1}).catch(function(e){console.log(e)})},instance:function(e){var t=this,i="applyId="+this.applyId;c.j(i).then(function(e){e&&t.$Modal.confirm({title:"通知",content:"<p>您已经成功提交申请</p><p>请耐心等待受理结果</p>",onOk:function(){t.$router.go(0)},onCancel:function(){t.$Message.info("点击了取消")}})}).catch(function(e){console.log(e)})},selectDevice:function(e){var t=this;this.ruleForm.registCode=e.registCode,this.ruleForm.deviceCategory=e.deviceCategory,this.ruleForm.deviceClass=e.deviceClass,this.ruleForm.deviceKind=e.deviceKind,this.ruleForm.eqCode=e.eqCode,this.deviceId=e.id,this.ruleForm.deviceName=e.deviceName,this.ruleForm.manufatureComName=e.manufatureComName,this.ruleForm.productCode=e.productCode,this.ruleForm.registDate=e.registDate,u.a(params).then(function(e){t.ruleForm=e.data.formList[0]}).catch(function(e){console.log(e)})},selectDeviceAll:function(e){this.formDynamicPres.items=e,this.ruleForm.subList=e,this.ruleForm.deviceNum=e.length}})}},757:function(e,t,i){t=e.exports=i(654)(!0),t.push([e.i,'@media print{.print[data-v-3c39c84f]{display:block}.nprint[data-v-3c39c84f]{display:none}}.setApp[data-v-3c39c84f]{color:#495060;position:relative}.setApp_topbar[data-v-3c39c84f]{position:fixed;width:100%;margin:0;padding:0;height:80px;z-index:10;background-color:#fff}.base-box[data-v-3c39c84f],.chooseAccept[data-v-3c39c84f]{margin-left:8%;display:block;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;width:83.881%;padding-left:100px;padding-right:100px;box-sizing:border-box;background-color:#fff}.chooseAccept[data-v-3c39c84f]{padding-bottom:10px;margin-bottom:10px}.header_one[data-v-3c39c84f]{text-align:center;margin-left:-50px;margin-top:20px;font-size:25px}.header_two[data-v-3c39c84f]{margin-left:-30px;margin-top:10px;font-size:19px}.ivu-form .ivu-form-item-label[data-v-3c39c84f]{font-size:18px;background-color:red;display:inline-block}.bread[data-v-3c39c84f]{margin-bottom:5px;margin-top:10px}.setApp_button[data-v-3c39c84f]{margin:10px}.city_select_app[data-v-3c39c84f]{margin:0 auto;width:80%;margin-left:200px;margin-bottom:10px}.city_select_app[data-v-3c39c84f],.city_select_app_exit[data-v-3c39c84f]{display:block;padding:10px;background-color:#fff;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.city_select_app_exit[data-v-3c39c84f]{width:700px;margin-left:200px;margin-bottom:10px}.city_select_app_exit .city_select_content[data-v-3c39c84f]{border-bottom:1px solid #dddee1;margin-bottom:5px;padding-bottom:5px}.pdfInfo[data-v-3c39c84f]{margin:15px}.demo-upload-list[data-v-3c39c84f]{display:inline-block;width:150px;height:200px;text-align:center;line-height:60px;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:4px}.demo-upload-list img[data-v-3c39c84f]{width:100%;height:100%}.demo-upload-list-cover[data-v-3c39c84f]{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.demo-upload-list:hover .demo-upload-list-cover[data-v-3c39c84f]{display:block}.demo-upload-list-cover i[data-v-3c39c84f]{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}.formDynamicPres[data-v-3c39c84f]{border:1px solid rgba(0,0,0,.2);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;margin-bottom:5px;padding-left:5%;padding-top:3%}.list-box[data-v-3c39c84f]{display:block;height:auto;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-color:#dddee1;margin-top:10px;box-sizing:border-box}.taishu[data-v-3c39c84f] :before{content:"*";display:inline-block;margin-right:4px;line-height:1;font-family:SimSun;font-size:16px;color:#f30}',"",{version:3,sources:["/Users/wxdandelion/special_eq_project/src/page/apply/avaiableDev/changeReq/areaAcrossChange.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,CACA,AACD,yBACE,cAAe,AACf,iBAAmB,CACpB,AACD,gCACE,eAAgB,AAChB,WAAY,AACZ,SAAY,AACZ,UAAa,AACb,YAAa,AACb,WAAY,AACZ,qBAAwB,CACzB,AAGD,0DAEE,eAAgB,AAChB,cAAe,AACf,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,cAAe,AACf,mBAAoB,AACpB,oBAAqB,AACrB,sBAAuB,AACvB,qBAAwB,CACzB,AACD,+BACE,oBAAqB,AACrB,kBAAoB,CACrB,AACD,6BACE,kBAAmB,AACnB,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,6BACE,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,gDACE,eAAgB,AAChB,qBAAsB,AACtB,oBAAsB,CACvB,AACD,wBACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,gCACE,WAAa,CACd,AACD,kCACE,cAAe,AAEf,UAAW,AAQX,kBAAmB,AACnB,kBAAoB,CACrB,AACD,yEAZE,cAAe,AAEf,aAAc,AACd,sBAAwB,AACxB,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,6BAA+B,CAgBhC,AAZD,uCACE,YAAa,AASb,kBAAmB,AACnB,kBAAoB,CACrB,AACD,4DACI,gCAAiC,AACjC,kBAAmB,AACnB,kBAAoB,CACvB,AACD,0BACE,WAAa,CACd,AAKD,mCACE,qBAAsB,AACtB,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAkB,AAClB,6BAA8B,AAC9B,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,oCAAyC,AACzC,gBAAkB,CACnB,AACD,uCACE,WAAY,AACZ,WAAa,CACd,AACD,yCACE,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA+B,CAChC,AACD,iEACE,aAAe,CAChB,AACD,2CACE,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,YAAc,CACf,AACD,kCACE,gCAAqC,AACrC,2BAA4B,AAC5B,4BAA6B,AAC7B,+BAAgC,AAChC,8BAA+B,AAC/B,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,2BACE,cAAe,AACf,YAAa,AACb,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,qBAAsB,AACtB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,iCACE,YAAa,AACb,qBAAsB,AACtB,iBAAkB,AAClB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb",file:"areaAcrossChange.vue",sourcesContent:["\n@media print {\n.print[data-v-3c39c84f] {\n    display: block;\n}\n.nprint[data-v-3c39c84f] {\n    display: none;\n}\n}\n.setApp[data-v-3c39c84f] {\n  color: #495060;\n  position: relative;\n}\n.setApp_topbar[data-v-3c39c84f] {\n  position: fixed;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  height: 80px;\n  z-index: 10;\n  background-color: white;\n}\n\n/*wang*/\n.base-box[data-v-3c39c84f],\n.chooseAccept[data-v-3c39c84f] {\n  margin-left: 8%;\n  display: block;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  width: 83.881%;\n  padding-left: 100px;\n  padding-right: 100px;\n  box-sizing: border-box;\n  background-color: white;\n}\n.chooseAccept[data-v-3c39c84f] {\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.header_one[data-v-3c39c84f] {\n  text-align: center;\n  margin-left: -50px;\n  margin-top: 20px;\n  font-size: 25px;\n}\n.header_two[data-v-3c39c84f] {\n  margin-left: -30px;\n  margin-top: 10px;\n  font-size: 19px;\n}\n.ivu-form .ivu-form-item-label[data-v-3c39c84f] {\n  font-size: 18px;\n  background-color: red;\n  display: inline-block;\n}\n.bread[data-v-3c39c84f] {\n  margin-bottom: 5px;\n  margin-top: 10px;\n}\n.setApp_button[data-v-3c39c84f] {\n  margin: 10px;\n}\n.city_select_app[data-v-3c39c84f] {\n  margin: 0 auto;\n  display: block;\n  width: 80%;\n  padding: 10px;\n  background-color: white;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-left: 200px;\n  margin-bottom: 10px;\n}\n.city_select_app_exit[data-v-3c39c84f] {\n  width: 700px;\n  display: block;\n  padding: 10px;\n  background-color: white;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-left: 200px;\n  margin-bottom: 10px;\n}\n.city_select_app_exit .city_select_content[data-v-3c39c84f] {\n    border-bottom: 1px solid #dddee1;\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n}\n.pdfInfo[data-v-3c39c84f] {\n  margin: 15px;\n}\n\n/*.ivu-form-item {*/\n/*margin-bottom: 10px;*/\n/*}*/\n.demo-upload-list[data-v-3c39c84f] {\n  display: inline-block;\n  width: 150px;\n  height: 200px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.demo-upload-list img[data-v-3c39c84f] {\n  width: 100%;\n  height: 100%;\n}\n.demo-upload-list-cover[data-v-3c39c84f] {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover[data-v-3c39c84f] {\n  display: block;\n}\n.demo-upload-list-cover i[data-v-3c39c84f] {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n.formDynamicPres[data-v-3c39c84f] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-bottom: 5px;\n  padding-left: 5%;\n  padding-top: 3%;\n}\n.list-box[data-v-3c39c84f] {\n  display: block;\n  height: auto;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-color: #dddee1;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n.taishu[data-v-3c39c84f] :before {\n  content: '*';\n  display: inline-block;\n  margin-right: 4px;\n  line-height: 1;\n  font-family: SimSun;\n  font-size: 16px;\n  color: #f30;\n}\n"],sourceRoot:""}])},793:function(e,t,i){var o=i(757);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(655)("1ddc7d00",o,!0)},830:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"areaAcrossChange"},[i("div",{staticClass:"setApp_topbar"},[i("div",{staticClass:"step",staticStyle:{width:"85%","margin-top":"20px"}},[i("Steps",{attrs:{current:e.current}},[i("Step",{attrs:{title:"步骤1",content:"选择操作"}}),e._v(" "),i("Step",{attrs:{title:"步骤2",content:"选择要变更的设备"}}),e._v(" "),i("Step",{attrs:{title:"步骤3",content:"填写《特种设备使用登记证变更证明》"}}),e._v(" "),i("Step",{attrs:{title:"步骤4",content:"预览《特种设备使用登记证变更证明》"}}),e._v(" "),i("Step",{attrs:{title:"步骤5",content:"提交相关证件"}}),e._v(" "),i("Step",{attrs:{title:"步骤6",content:"完成变更证明的提交"}})],1)],1)]),e._v(" "),i("div",{staticClass:"setApp_content",staticStyle:{position:"absolute",top:"85px"}},[1==this.active?i("div",{staticClass:"setTable",staticStyle:{width:"700px",top:"120px",left:"250px",position:"absolute"}},[i("div",{staticStyle:{width:"300px",float:"left"}},[i("p",{staticStyle:{"font-size":"25px","margin-left":"30px"}},[e._v("\n        （未提交变更申请）\n      ")]),e._v(" "),i("p",[e._v("原登记机关应当注销使用登记证，并且在原使用登记证和原使用登记表上作注销标记，向使用单位签发《特种设备使用登记证变更证明》。")]),e._v(" "),1==this.active?i("Button",{staticStyle:{"margin-left":"70px","margin-top":"40px"},attrs:{type:"primary"},on:{click:function(t){e.next()}}},[e._v("填写变更证明")]):e._e()],1),e._v(" "),i("div",{staticStyle:{"margin-left":"400px"}},[i("p",{staticStyle:{"font-size":"25px","margin-left":"15px"}},[e._v("\n        （变更证明已审批通过）\n      ")]),e._v(" "),i("p",[e._v("使用单位持《特种设备使用登记证变更证明》、标有注销标记的原使用登记表和移装后的检验报告(拆卸移装的)，向移装地登记机关重新申请使用登记。")]),e._v(" "),1==this.active?i("Button",{staticStyle:{"margin-left":"80px","margin-top":"40px"},attrs:{type:"success"},on:{click:function(t){e.jump()}}},[e._v("填写使用登记表")]):e._e()],1)]):e._e(),e._v(" "),2==this.active?i("div",{staticClass:"statusInfo",staticStyle:{"margin-bottom":"20px"}},[i("div",{staticClass:"list-box"},[i("h3",{staticClass:"header_one",staticStyle:{margin:"10px"}},[e._v("选择要变更的设备")]),e._v(" "),i("Table",{ref:"selection",attrs:{border:"",columns:e.columnsCanStopUse,data:e.canStopUseDeviceList},on:{"on-select":e.selectDevice}})],1)]):e._e(),e._v(" "),i("Form",{ref:"ruleForm",staticStyle:{width:"135%"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":110,"label-position":"left"}},[3==this.active?i("div",{staticClass:"statusInfo"},[i("div",{staticClass:"base-box"},[i("h2",{staticClass:"header_one"},[e._v("特种设备使用登记证变更证明")]),e._v(" "),i("br"),e._v(" "),i("Row",[i("Col",{attrs:{span:"11"}},[i("Form-item",{attrs:{label:"设备种类",prop:"deviceCategory"}},[i("i-input",{attrs:{disabled:!0},model:{value:e.ruleForm.deviceCategory,callback:function(t){e.$set(e.ruleForm,"deviceCategory",t)},expression:"ruleForm.deviceCategory"}})],1),e._v(" "),i("Form-item",{attrs:{label:"设备品种",prop:"deviceKind"}},[i("i-input",{attrs:{disabled:!0},model:{value:e.ruleForm.deviceKind,callback:function(t){e.$set(e.ruleForm,"deviceKind",t)},expression:"ruleForm.deviceKind"}})],1),e._v(" "),i("Form-item",{attrs:{label:"设备代码",prop:"eqCode"}},[i("i-input",{attrs:{disabled:!0},model:{value:e.ruleForm.eqCode,callback:function(t){e.$set(e.ruleForm,"eqCode",t)},expression:"ruleForm.eqCode"}})],1)],1),e._v(" "),i("Col",{attrs:{span:"11",offset:"2"}},[i("Form-item",{attrs:{label:"设备类别",prop:"deviceClass"}},[i("i-input",{attrs:{disabled:!0},model:{value:e.ruleForm.deviceClass,callback:function(t){e.$set(e.ruleForm,"deviceClass",t)},expression:"ruleForm.deviceClass"}})],1),e._v(" "),i("Form-item",{attrs:{label:"产品名称",prop:"deviceName"}},[i("i-input",{model:{value:e.ruleForm.deviceName,callback:function(t){e.$set(e.ruleForm,"deviceName",t)},expression:"ruleForm.deviceName"}})],1),e._v(" "),i("Form-item",{attrs:{label:"原使用登记证编号",prop:"registCode"}},[i("i-input",{attrs:{disabled:!0},model:{value:e.ruleForm.registCode,callback:function(t){e.$set(e.ruleForm,"registCode",t)},expression:"ruleForm.registCode"}})],1)],1)],1),e._v(" "),i("Form-item",{attrs:{label:"制造单位名称",prop:"manufatureComName"}},[i("i-input",{model:{value:e.ruleForm.manufatureComName,callback:function(t){e.$set(e.ruleForm,"manufatureComName",t)},expression:"ruleForm.manufatureComName"}})],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"11"}},[i("Form-item",{attrs:{label:"产品编号",prop:"productCode"}},[i("i-input",{model:{value:e.ruleForm.productCode,callback:function(t){e.$set(e.ruleForm,"productCode",t)},expression:"ruleForm.productCode"}})],1)],1),e._v(" "),i("Col",{attrs:{span:"11",offset:"2"}},[i("Form-item",{attrs:{label:"制造日期",prop:"eqCreateDate"}},[i("DatePicker",{model:{value:e.ruleForm.eqCreateDate,callback:function(t){e.$set(e.ruleForm,"eqCreateDate",t)},expression:"ruleForm.eqCreateDate"}})],1)],1)],1),e._v(" "),i("Form-item",{attrs:{label:"原使用单位名称",prop:"origUseComName"}},[i("i-input",{model:{value:e.ruleForm.origUseComName,callback:function(t){e.$set(e.ruleForm,"origUseComName",t)},expression:"ruleForm.origUseComName"}})],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"11"}},[i("Form-item",{attrs:{label:"原使用登记证签发日期",prop:"registDate"}},[i("DatePicker",{model:{value:e.ruleForm.registDate,callback:function(t){e.$set(e.ruleForm,"registDate",t)},expression:"ruleForm.registDate"}})],1)],1),e._v(" "),i("Col",{attrs:{span:"11",offset:"2"}},[i("Form-item",{attrs:{label:"变更类别",prop:"changedType"}},[i("i-input",{attrs:{disabled:!0},model:{value:e.ruleForm.changedType,callback:function(t){e.$set(e.ruleForm,"changedType",t)},expression:"ruleForm.changedType"}})],1)],1)],1)],1)]):e._e(),e._v(" "),4==this.active?i("div",{staticClass:"setTable",staticStyle:{width:"900px",top:"30px",position:"absolute"}},[i("iframe",{staticStyle:{width:"100%",height:"1000px"},attrs:{id:"iFramePdf",src:this.pdfUrl}}),e._v(" "),i("Button",{attrs:{type:"warning"},on:{click:function(t){e.printTrigger("iFramePdf")}}},[e._v("打印")]),e._v(" "),4==this.active?i("Button",{attrs:{type:"primary"},on:{click:function(t){e.before()}}},[e._v("上一步")]):e._e(),e._v(" "),4==this.active?i("Button",{attrs:{type:"success"},on:{click:function(t){e.next()}}},[e._v("下一步")]):e._e()],1):e._e(),e._v(" "),5==this.active?i("div",{staticClass:"pdfInfo"},[i("h2",[e._v("相关证明")]),e._v(" "),i("Row",{staticStyle:{width:"1000px"}},[i("Col",{attrs:{span:"10"}},[i("Form-item",{attrs:{label:"原使用登记证","label-width":200}},[i("Upload",{ref:"upload1",attrs:{format:["pdf"],"on-format-error":e.handleFormatError,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"default-file-list":e.defaultPdfList1,action:"/file/upload?applyId="+this.applyId+"&fileName=原使用登记证","with-credentials":""}},[i("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传文件")])],1)],1)],1),e._v(" "),i("Col",{attrs:{span:"10"}},[i("Form-item",{attrs:{label:"原使用登记表","label-width":200}},[i("Upload",{ref:"upload2",attrs:{format:["pdf"],"on-format-error":e.handleFormatError,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"default-file-list":e.defaultPdfList1,action:"/file/upload?applyId="+this.applyId+"&fileName=原使用登记表","with-credentials":""}},[i("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传文件")])],1)],1)],1)],1),e._v(" "),i("h5",[e._v("上传文件缩略图")]),e._v(" "),e._l(e.uploadList,function(t,o){return i("div",{staticClass:"demo-upload-list"},[i("img",{attrs:{src:t.url}}),e._v(" "),i("div",{staticClass:"demo-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){e.handleView(o)}}})],1)])}),e._v(" "),i("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?i("iframe",{staticStyle:{width:"100%",height:"1000px"},attrs:{id:"iFramePdf",src:this.pdf}}):e._e()])],2):e._e(),e._v(" "),i("div",{staticClass:"setApp_button"},[3==this.active?i("Button",{attrs:{type:"primary"},on:{click:e.confirmForm}},[e._v("下一步")]):e._e(),e._v(" "),5==this.active?i("Button",{on:{click:function(t){e.instance("success")}}},[e._v("确认提交")]):e._e()],1)])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=17.d6ea4b8bfd70cd24216e.js.map
webpackJsonp([10],{187:function(e,t,r){function o(e){r(360)}var l=r(4)(r(293),r(401),o,"data-v-02cf931a",null);e.exports=l.exports},215:function(e,t,r){"use strict";function o(e){return r.i(p.a)("/apply/create",e,"post")}function l(e){return r.i(p.a)("/apply/update",e,"post")}function a(e){return r.i(p.a)("/api/submitSetInfo",e,"post")}function n(e){return r.i(p.a)("/static/deviceClass?"+e,e,"get")}function s(e){return r.i(p.a)("/static/deviceType?"+e,e,"get")}function i(e){return r.i(p.a)("/map/provinces",e,"get")}function c(e){return r.i(p.a)("/map/cities?"+e,e,"get")}function m(e){return r.i(p.a)("/map/areas?"+e,e,"get")}function u(e){return r.i(p.a)("/apply/get?"+e,e,"get")}function d(e){return r.i(p.a)("/apply/confirm?"+e,e,"get")}t.b=o,t.c=l,t.f=a,t.g=n,t.e=s,t.h=i,t.i=c,t.j=m,t.a=u,t.d=d;var p=r(19)},216:function(e,t,r){function o(e){r(219)}var l=r(4)(r(217),r(220),o,"data-v-09875984",null);e.exports=l.exports},217:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"detailPdf",props:["pdfUrl","pdfNum"],data:function(){return{pdfToggle:[1,1,1,1,1,1,1,1,1,1,1,1,1]}},methods:{writepdf:function(){if(0==this.pdfToggle.length)for(var e=0;e<this.pdfNum;e++)this.pdfToggle[e]=1},test:function(e){this.writepdf(),1==this.pdfToggle[e]?this.pdfToggle.splice(e,1,0):0==this.pdfToggle[e]&&this.pdfToggle.splice(e,1,1)}}}},218:function(e,t,r){t=e.exports=r(172)(!0),t.push([e.i,".detail_li[data-v-09875984]{margin:10px;font-size:small}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/components/detailpdf/detailPdf.vue"],names:[],mappings:"AACA,4BACE,YAAa,AACb,eAAiB,CAClB",file:"detailPdf.vue",sourcesContent:["\n.detail_li[data-v-09875984] {\n  margin: 10px;\n  font-size: small;\n}\n"],sourceRoot:""}])},219:function(e,t,r){var o=r(218);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(173)("6e9ce622",o,!0)},220:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"detailPdf"},[r("ul",{staticClass:"detail_ul"},e._l(e.pdfUrl,function(t,o,l){return r("li",{staticClass:"detail_li"},[r("a",{staticClass:"detail_a",attrs:{href:"/admin/file/preview?fileId="+t,download:"key"}},[e._v(e._s(o)+".pdf")]),e._v(" "),1==e.pdfToggle[l]?r("Button",{attrs:{type:"ghost",size:"small"},on:{click:function(t){e.test(l)}}},[r("Icon",{attrs:{type:"eye"}}),e._v("\n        预览\n      ")],1):r("Button",{attrs:{type:"ghost",size:"small"},on:{click:function(t){e.test(l)}}},[r("Icon",{attrs:{type:"chevron-down"}}),e._v("\n        收起\n      ")],1),e._v(" "),0==e.pdfToggle[l]?r("embed",{attrs:{src:"/admin/file/preview?fileId="+t,width:"100%",height:"1000px"}}):e._e()],1)}))])},staticRenderFns:[]}},221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"regist_one",props:["ruleForm"],data:function(){return{}}}},223:function(e,t,r){t=e.exports=r(172)(!0),t.push([e.i,"@media print{.print[data-v-1c536bfc]{display:block}.nprint[data-v-1c536bfc]{display:none}@page{size:A4;margin:20mm 2mm 2mm 2mm}}.regist_one_com[data-v-1c536bfc]{overflow-y:scroll;border:1px solid #000;background-color:#fff}.setTable[data-v-1c536bfc]{width:210mm;height:297mm;margin:25mm 2mm 2mm;border:1px solid red;margin:0 auto;text-align:center}.regist_one_header[data-v-1c536bfc]{font-size:16pt;font-family:SimSun;color:#000;text-align:center;margin-bottom:54px;margin-top:30px;position:relative}.sa[data-v-1c536bfc]{width:460px;margin:0 auto}.regist_kind[data-v-1c536bfc]{font-size:11pt;font-family:SimSun;color:#000;text-align:left}.setTable table[data-v-1c536bfc]{margin:auto;border:1px solid #000;border-collapse:collapse}.setTable table span[data-v-1c536bfc]{display:inline-block;text-align:center;vertical-align:middle;width:2em}.setTable table td[data-v-1c536bfc]{border:1px solid #000;width:635px;height:24px;color:#000;text-align:center;vertical-align:middle;font-family:SimSun;font-size:11pt}.setTable .rowsText[data-v-1c536bfc]{width:50px;text-align:center;vertical-align:middle}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/components/register/registerOne.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,AAID,MACI,QAAS,AACT,uBAAyB,CAC5B,CACA,AACD,iCAME,kBAAmB,AACnB,sBAAwB,AACxB,qBAAwB,CACzB,AACD,2BACE,YAAa,AACb,aAAc,AACd,oBAAyB,AACzB,qBAAsB,AACtB,cAAe,AACf,iBAAmB,CACpB,AACD,oCACE,eAAgB,AAChB,mBAAoB,AACpB,WAAa,AACb,kBAAmB,AACnB,mBAAoB,AACpB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,qBACE,YAAa,AACb,aAAe,CAChB,AACD,8BACE,eAAgB,AAChB,mBAAoB,AACpB,WAAY,AACZ,eAAiB,CAClB,AACD,iCACE,YAAa,AACb,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,sCACE,qBAAsB,AACtB,kBAAmB,AACnB,sBAAuB,AACvB,SAAW,CACZ,AACD,oCACE,sBAAuB,AACvB,YAAa,AACb,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,mBAAoB,AACpB,cAAgB,CACjB,AACD,qCACE,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CACxB",file:"registerOne.vue",sourcesContent:["\n@media print {\n.print[data-v-1c536bfc] {\n    display: block;\n}\n.nprint[data-v-1c536bfc] {\n    display: none;\n}\n  /*@page {*/\n  /*size: 210mm 297mm;  !* or size: 794px 1123px;   *!*/\n  /*}*/\n@page {\n    size: A4;\n    margin: 20mm 2mm 2mm 2mm;\n}\n}\n.regist_one_com[data-v-1c536bfc] {\n  /*position: absolute;*/\n  /*left: 0;*/\n  /*right: 0;*/\n  /*top: 0;*/\n  /*bottom:0;*/\n  overflow-y: scroll;\n  border: 1px solid black;\n  background-color: white;\n}\n.setTable[data-v-1c536bfc] {\n  width: 210mm;\n  height: 297mm;\n  margin: 25mm 2mm 2mm 2mm;\n  border: 1px solid red;\n  margin: 0 auto;\n  text-align: center;\n}\n.regist_one_header[data-v-1c536bfc] {\n  font-size: 16pt;\n  font-family: SimSun;\n  color: black;\n  text-align: center;\n  margin-bottom: 54px;\n  margin-top: 30px;\n  position: relative;\n}\n.sa[data-v-1c536bfc] {\n  width: 460px;\n  margin: 0 auto;\n}\n.regist_kind[data-v-1c536bfc] {\n  font-size: 11pt;\n  font-family: SimSun;\n  color: #000;\n  text-align: left;\n}\n.setTable table[data-v-1c536bfc] {\n  margin: auto;\n  border: 1px solid #000;\n  border-collapse: collapse;\n}\n.setTable table span[data-v-1c536bfc] {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  width: 2em;\n}\n.setTable table td[data-v-1c536bfc] {\n  border: 1px solid #000;\n  width: 635px;\n  height: 24px;\n  color: #000;\n  text-align: center;\n  vertical-align: middle;\n  font-family: SimSun;\n  font-size: 11pt;\n}\n.setTable .rowsText[data-v-1c536bfc] {\n  width: 50px;\n  text-align: center;\n  vertical-align: middle;\n}\n"],sourceRoot:""}])},224:function(e,t,r){var o=r(223);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(173)("3eb293b1",o,!0)},225:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},226:function(e,t,r){function o(e){r(224)}var l=r(4)(r(221),r(227),o,"data-v-1c536bfc",null);e.exports=l.exports},227:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"regist_one_com"},[r("div",{staticClass:"setTable "},[r("h2",{staticClass:"regist_one_header"},[e._v("特种设备使用登记表(式样一)")]),e._v(" "),e._m(0),e._v(" "),r("table",[r("tr",[e._m(1),e._v(" "),r("td",[e._v("设备种类")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.eq_species))]),e._v(" "),r("td",[e._v("设备类别")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.eq_category))])]),e._v(" "),r("tr",[r("td",[e._v("设备品种")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.eq_variety))]),e._v(" "),r("td",[e._v("产品名称")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.eq_name))])]),e._v(" "),r("tr",[r("td",[e._v("设备代码")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.eq_code))]),e._v(" "),r("td",[e._v("型号(规格)")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.model))])]),e._v(" "),r("tr",[r("td",[e._v("设计使用年限")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.design_use_limit))]),e._v(" "),r("td",[e._v("设计单位名称")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.design_com_name))])]),e._v(" "),r("tr",[r("td",[e._v("制造单位名称")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.manufacture_com_name))]),e._v(" "),r("td",[e._v("施工单位名称")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.construct_com_name))])]),e._v(" "),r("tr",[r("td",[e._v("监督检验机构名称")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.supervise_com_name))]),e._v(" "),r("td",[e._v("型式试验机构名称")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.test_com_name))])]),e._v(" "),r("tr",[e._m(2),e._v(" "),r("td",[e._v("使用单位名称")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.use_com_name))]),e._v(" "),r("td",[e._v("使用单位地址")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.use_com_addr))])]),e._v(" "),r("tr",[r("td",[e._v("使用单位统一社会信用代码")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.use_com_code))]),e._v(" "),r("td",[e._v("邮政编码")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.zip_code))])]),e._v(" "),r("tr",[r("td",[e._v("单位内编号")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.com_code))]),e._v(" "),r("td",[e._v("设备使用地点")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.eq_use_location))])]),e._v(" "),r("tr",[r("td",[e._v("投入使用日期")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.begin_use_date))]),e._v(" "),r("td",[e._v("单位固定电话")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.com_phone))])]),e._v(" "),r("tr",[r("td",[e._v("安全管理员")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.safe_admin))]),e._v(" "),r("td",[e._v("移动电话")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.mobile_phone))])]),e._v(" "),r("tr",[r("td",[e._v("产权单位名称")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.property_com_name))]),e._v(" "),r("td",[e._v("产权单位统一社会信用代码")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.property_com_code))])]),e._v(" "),r("tr",[r("td",[e._v("联系电话")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.telephone))])]),e._v(" "),r("tr",[e._m(3),e._v(" "),r("td",[e._v("检验机构名称")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.check_com_name))]),e._v(" "),r("td",[e._v("检验类别")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.check_category))])]),e._v(" "),r("tr",[r("td",[e._v("检验报告编号")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.check_report_num))]),e._v(" "),r("td",[e._v("检验日期")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.check_date))])]),e._v(" "),r("tr",[r("td",[e._v("检验结论")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.check_conclusion))]),e._v(" "),r("td",[e._v("下次检验日期")]),e._v(" "),r("td",[e._v(e._s(this.ruleForm.next_check_date))])]),e._v(" "),e._m(4),e._v(" "),e._m(5)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sa"},[r("p",{staticClass:"regist_kind"},[e._v("登记类别:")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",{staticClass:"rowsText",attrs:{rowspan:"6",id:"pdf-wrap"}},[r("span",[e._v("设备基本情况")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",{staticClass:"rowsText",attrs:{rowspan:"7"}},[r("span",[e._v("设备基本情况")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",{staticClass:"rowsText",attrs:{rowspan:"3"}},[r("span",[e._v("设备检验情况")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("tr",[o("td",{staticClass:"rowsText",attrs:{colspan:"5"}},[o("p",[e._v(" 在此申明：所申报的内容真实；在使用过程中，将严格执行《中华人民共和国特\n            种设备安全法》及相关规定，并且接受特种设备安全监督管理部门的监督管理。")]),e._v(" "),o("p"),e._v(" "),o("p",[e._v("附：产品数据表")]),e._v(" "),o("p",[e._v("使用单位填表人员：\t日期：")]),e._v(" "),o("p",[e._v("(使用单位公章)")]),e._v(" "),o("img",{attrs:{src:r(225),alt:"电子印章"}}),e._v(" "),o("p",[e._v("使用单位安全管理人员：\t日期：\t年\t月\t日")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",{staticClass:"rowsText",attrs:{colspan:"5"}},[r("p",[e._v("说明：")]),e._v(" "),r("p"),e._v(" "),r("p",[e._v("登记机关登记人员：\t日期：")]),e._v(" "),r("p",[e._v("(登记机关专用章)")]),e._v(" "),r("p",[e._v("使用登记证编号：\t年\t月\t日")])])])}]}},293:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(65),l=r.n(o),a=r(13),n=r.n(a),s=r(226),i=r.n(s),c=r(216),m=(r.n(c),r(6)),u=r(215);t.default={data:function(){return{ruleForm:{},rules:{},ifNext:!0,active:1,selected:"",imgName:"",visible:!1,uploadList:[],modal1:!1,author_key:"",defaultPdfList1:[],selectedNum:"",deviceNum:1,ruleForms:"",previousNum:0,value1:""}},components:{"v-regist_one":i.a},watch:{$route:"initData"},computed:n()({},r.i(m.a)(["getSelectedOption","getRegistOne","getSelectedNum"])),mounted:function(){this.initData(),this.author_key=localStorage.getItem("author_key")},methods:n()({},r.i(m.b)({clearRegistOneForm:"clearRegistOneForm"}),{initData:function(){var e=this;this.deviceNum=1,this.active=1,this.selected=this.getSelectedOption,this.selectedNum=this.getSelectedNum,this.$route.query.changeDeviceNum?registService.getRegistOne(this.$route.query.dev_id).then(function(t){e.ruleForms=t.success,e.ruleForm=e.ruleForms.ruleForm[0],e.defaultPdfList1=t.pdfUrlDefault,console.log(t)}).catch(function(e){console.log(e)}):(this.clearRegistOneForm(),this.ruleForm=this.getRegistOne,this.defaultPdfList1=[])},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var r=l()({},t.ruleForm);r.selected=t.selected,t.ifNext=!1,u.b(r).then(function(e){e&&console.log(e.success)}).catch(function(e){console.log(e)})})},saveForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var r=l()({},t.ruleForm);r.selected=t.selected,console.log(r),t.ifNext=!1,u.f(r).then(function(e){e&&console.log(e.success)}).catch(function(e){console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields()},next:function(e){this.$refs[e].validate(function(e){}),1==this.active&&this.submitForm("ruleForm"),this.beSure()},before:function(){1==this.active?this.$route.query.changeDeviceNum?this.$router.push({path:"firstApp",query:{dev_id:this.$route.query.dev_id,dev_name:this.$route.query.dev_name,changeDeviceNum:this.$route.query.changeDeviceNum,selectedNum:this.getSelectedNum}}):this.$router.push({path:"firstApp",query:{changeDeviceNum:this.getSelectedOption,selectedNum:this.getSelectedNum}}):this.active--},beSure:function(){if(this.deviceNum<this.selectedNum){if(this.ruleForms&&this.selectedNum>this.ruleForms.ruleForm.length)for(var e=this.ruleForms.ruleForm.length,t=0;t<this.selectedNum-e;t++)this.ruleForms.ruleForm[this.ruleForms.ruleForm.length]={};this.deviceNum++,this.active=1,this.$Modal.success({content:"请继续填写下一台(套)的登记表"}),this.ruleForms?this.ruleForm=this.ruleForms.ruleForm[this.deviceNum-1]:(this.clearRegistOneForm(),this.ruleForm=this.getRegistOne)}else this.active=2},handleBeforeUpload:function(){this.uploadList=this.$refs.upload.fileList;var e=this.uploadList.length<1;return e||this.$Notice.warning({title:"最多上传 1 张图片。"}),e},handleSuccess:function(e,t){console.log(e),console.log(t)},handleRemove:function(e,t){console.log(e),console.log(t)},instance:function(e){switch(e){case"success":this.$Modal.success({title:"通知",content:"<p>您已经成功提交申请</p><p>请耐心等待受理结果</p>"})}this.$router.push("home")}})}},321:function(e,t,r){t=e.exports=r(172)(!0),t.push([e.i,"@media print{.print[data-v-02cf931a]{display:block}.nprint[data-v-02cf931a]{display:none}}.setApp[data-v-02cf931a]{color:#495060}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/page/apply/avaiableDev/changeReq/nameChange.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,CACA,AACD,yBACE,aAAe,CAChB",file:"nameChange.vue",sourcesContent:["\n@media print {\n.print[data-v-02cf931a] {\n    display: block;\n}\n.nprint[data-v-02cf931a] {\n    display: none;\n}\n}\n.setApp[data-v-02cf931a] {\n  color: #495060;\n}\n"],sourceRoot:""}])},360:function(e,t,r){var o=r(321);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(173)("2f567e8f",o,!0)},401:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nameChange"},[r("Form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":100,inline:""}},[r("h2"),e._v(" "),1==this.active?r("div",{staticClass:"statusInfo"},[r("h2",[e._v("更名变更")]),e._v(" "),r("h2",[e._v("设备基本情况")]),e._v(" "),r("Form-item",{attrs:{label:"设备种类",prop:"eq_species"}},[r("Input",{attrs:{placeholder:"请输入设备种类"},model:{value:e.ruleForm.eq_species,callback:function(t){e.ruleForm.eq_species=t},expression:"ruleForm.eq_species"}})],1),e._v(" "),r("Form-item",{attrs:{label:"设备类别",prop:"eq_category"}},[r("Input",{attrs:{placeholder:"请输入设备类别"},model:{value:e.ruleForm.eq_category,callback:function(t){e.ruleForm.eq_category=t},expression:"ruleForm.eq_category"}})],1),e._v(" "),r("Form-item",{attrs:{label:"设备品种",prop:"eq_variety"}},[r("Input",{attrs:{placeholder:"请输入设备品种"},model:{value:e.ruleForm.eq_variety,callback:function(t){e.ruleForm.eq_variety=t},expression:"ruleForm.eq_variety"}})],1),e._v(" "),r("Form-item",{attrs:{label:"产品名称",prop:"eq_name"}},[r("Input",{attrs:{placeholder:"请输入产品名称"},model:{value:e.ruleForm.eq_name,callback:function(t){e.ruleForm.eq_name=t},expression:"ruleForm.eq_name"}})],1),e._v(" "),r("Form-item",{attrs:{label:"设备代码",prop:"eq_code"}},[r("Input",{attrs:{placeholder:"请输入设备代码"},model:{value:e.ruleForm.eq_code,callback:function(t){e.ruleForm.eq_code=t},expression:"ruleForm.eq_code"}})],1),e._v(" "),r("Form-item",{attrs:{label:"型号（规格）",prop:"model"}},[r("Input",{attrs:{placeholder:"请输入型号（规格）"},model:{value:e.ruleForm.model,callback:function(t){e.ruleForm.model=t},expression:"ruleForm.model"}})],1),e._v(" "),r("Form-item",{attrs:{label:"设计使用年限",prop:"design_use_limit"}},[r("Input",{attrs:{placeholder:"请输入设计使用年限"},model:{value:e.ruleForm.design_use_limit,callback:function(t){e.ruleForm.design_use_limit=t},expression:"ruleForm.design_use_limit"}})],1),e._v(" "),r("Form-item",{attrs:{label:"设计单位名称",prop:"design_com_name"}},[r("Input",{attrs:{placeholder:"请输入设计单位名称"},model:{value:e.ruleForm.design_com_name,callback:function(t){e.ruleForm.design_com_name=t},expression:"ruleForm.design_com_name"}})],1),e._v(" "),r("Form-item",{attrs:{label:"制造单位名称",prop:"manufacture_com_name"}},[r("Input",{attrs:{placeholder:"请输入制造单位名称"},model:{value:e.ruleForm.manufacture_com_name,callback:function(t){e.ruleForm.manufacture_com_name=t},expression:"ruleForm.manufacture_com_name"}})],1),e._v(" "),r("Form-item",{attrs:{label:"施工单位名称",prop:"construct_com_name"}},[r("Input",{attrs:{placeholder:"请输入施工单位名称"},model:{value:e.ruleForm.construct_com_name,callback:function(t){e.ruleForm.construct_com_name=t},expression:"ruleForm.construct_com_name"}})],1),e._v(" "),r("Form-item",{attrs:{label:"监督检验机构名称",prop:"supervise_com_name"}},[r("Input",{attrs:{placeholder:"请输入监督检验机构名称"},model:{value:e.ruleForm.supervise_com_name,callback:function(t){e.ruleForm.supervise_com_name=t},expression:"ruleForm.supervise_com_name"}})],1),e._v(" "),r("Form-item",{attrs:{label:"型式试验机构名称",prop:"test_com_name"}},[r("Input",{attrs:{placeholder:"请输入型式试验机构名称"},model:{value:e.ruleForm.test_com_name,callback:function(t){e.ruleForm.test_com_name=t},expression:"ruleForm.test_com_name"}})],1),e._v(" "),r("h2",[e._v("设备使用情况")]),e._v(" "),r("Form-item",{attrs:{label:"使用单位名称",prop:"use_com_name"}},[r("Input",{attrs:{placeholder:"请输入使用单位名称"},model:{value:e.ruleForm.use_com_name,callback:function(t){e.ruleForm.use_com_name=t},expression:"ruleForm.use_com_name"}})],1),e._v(" "),r("Form-item",{attrs:{label:"使用单位地址",prop:"use_com_addr"}},[r("Input",{attrs:{placeholder:"请输入使用单位地址"},model:{value:e.ruleForm.use_com_addr,callback:function(t){e.ruleForm.use_com_addr=t},expression:"ruleForm.use_com_addr"}})],1),e._v(" "),r("Form-item",{attrs:{label:"使用单位统一社会信用代码",prop:"use_com_code"}},[r("Input",{attrs:{placeholder:"请输入使用单位统一社会信用代码"},model:{value:e.ruleForm.use_com_code,callback:function(t){e.ruleForm.use_com_code=t},expression:"ruleForm.use_com_code"}})],1),e._v(" "),r("Form-item",{attrs:{label:"邮政编码",prop:"zip_code"}},[r("Input",{attrs:{placeholder:"请输入邮政编码"},model:{value:e.ruleForm.zip_code,callback:function(t){e.ruleForm.zip_code=t},expression:"ruleForm.zip_code"}})],1),e._v(" "),r("Form-item",{attrs:{label:"单位内编号",prop:"com_code"}},[r("Input",{attrs:{placeholder:"请输入单位内编号"},model:{value:e.ruleForm.com_code,callback:function(t){e.ruleForm.com_code=t},expression:"ruleForm.com_code"}})],1),e._v(" "),r("Form-item",{attrs:{label:"设备使用地点",prop:"eq_use_location"}},[r("Input",{attrs:{placeholder:"请输入设备使用地点"},model:{value:e.ruleForm.eq_use_location,callback:function(t){e.ruleForm.eq_use_location=t},expression:"ruleForm.eq_use_location"}})],1),e._v(" "),r("Form-item",{attrs:{label:"投入使用日期",prop:"begin_use_date"}},[r("Input",{attrs:{placeholder:"请输入投入使用日期"},model:{value:e.ruleForm.begin_use_date,callback:function(t){e.ruleForm.begin_use_date=t},expression:"ruleForm.begin_use_date"}})],1),e._v(" "),r("Form-item",{attrs:{label:"单位固定电话",prop:"com_phone"}},[r("Input",{attrs:{placeholder:"请输入单位固定电话"},model:{value:e.ruleForm.com_phone,callback:function(t){e.ruleForm.com_phone=t},expression:"ruleForm.com_phone"}})],1),e._v(" "),r("Form-item",{attrs:{label:"安全管理员",prop:"safe_admin"}},[r("Input",{attrs:{placeholder:"请输入安全管理员"},model:{value:e.ruleForm.safe_admin,callback:function(t){e.ruleForm.safe_admin=t},expression:"ruleForm.safe_admin"}})],1),e._v(" "),r("Form-item",{attrs:{label:"移动电话",prop:"mobile_phone"}},[r("Input",{attrs:{placeholder:"请输入移动电话"},model:{value:e.ruleForm.mobile_phone,callback:function(t){e.ruleForm.mobile_phone=t},expression:"ruleForm.mobile_phone"}})],1),e._v(" "),r("Form-item",{attrs:{label:"产权单位名称",prop:"property_com_name"}},[r("Input",{attrs:{placeholder:"请输入产权单位名称"},model:{value:e.ruleForm.property_com_name,callback:function(t){e.ruleForm.property_com_name=t},expression:"ruleForm.property_com_name"}})],1),e._v(" "),r("Form-item",{attrs:{label:"产权单位统一社会信用代码",prop:"property_com_code"}},[r("Input",{attrs:{placeholder:"请输入产权单位统一社会信用代码"},model:{value:e.ruleForm.property_com_code,callback:function(t){e.ruleForm.property_com_code=t},expression:"ruleForm.property_com_code"}})],1),e._v(" "),r("Form-item",{attrs:{label:"联系电话",prop:"telephone"}},[r("Input",{attrs:{placeholder:"请输入联系电话"},model:{value:e.ruleForm.telephone,callback:function(t){e.ruleForm.telephone=t},expression:"ruleForm.telephone"}})],1),e._v(" "),r("h2",[e._v("设备检验情况")]),e._v(" "),r("Form-item",{attrs:{label:"检验机构名称",prop:"check_com_name"}},[r("Input",{attrs:{placeholder:"请输入检验机构名称"},model:{value:e.ruleForm.check_com_name,callback:function(t){e.ruleForm.check_com_name=t},expression:"ruleForm.check_com_name"}})],1),e._v(" "),r("Form-item",{attrs:{label:"检验类别",prop:"check_category"}},[r("Input",{attrs:{placeholder:"请输入检验类别"},model:{value:e.ruleForm.check_category,callback:function(t){e.ruleForm.check_category=t},expression:"ruleForm.check_category"}})],1),e._v(" "),r("Form-item",{attrs:{label:"检验报告编号",prop:"check_report_num"}},[r("Input",{attrs:{placeholder:"请输入检验报告编号"},model:{value:e.ruleForm.check_report_num,callback:function(t){e.ruleForm.check_report_num=t},expression:"ruleForm.check_report_num"}})],1),e._v(" "),r("Form-item",{attrs:{label:"检验日期",prop:"check_date"}},[r("Input",{attrs:{placeholder:"请输入检验日期"},model:{value:e.ruleForm.check_date,callback:function(t){e.ruleForm.check_date=t},expression:"ruleForm.check_date"}})],1),e._v(" "),r("Form-item",{attrs:{label:"检验结论",prop:"check_conclusion"}},[r("Input",{attrs:{placeholder:"请输入检验结论"},model:{value:e.ruleForm.check_conclusion,callback:function(t){e.ruleForm.check_conclusion=t},expression:"ruleForm.check_conclusion"}})],1),e._v(" "),r("Form-item",{attrs:{label:"下次检验日期",prop:"next_check_date"}},[r("Input",{attrs:{placeholder:"请输入下次检验日期"},model:{value:e.ruleForm.next_check_date,callback:function(t){e.ruleForm.next_check_date=t},expression:"ruleForm.next_check_date"}})],1)],1):e._e(),e._v(" "),1==this.active?r("div",{staticClass:"setTable"},[r("Alert",{attrs:{closable:""}},[e._v("请确认表格信息是否全部正确")]),e._v(" "),r("Collapse",{model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},[r("Panel",{attrs:{name:"1"}},[r("span",{staticClass:"panel_content"},[e._v("特种设备使用登记表")]),e._v(" "),r("div",{slot:"content"},[r("v-regist_one",{attrs:{ruleForm:e.ruleForm}}),e._v(" "),1==this.active?r("Button",{on:{click:function(t){e.addElecSeal()}}},[e._v("添加")]):e._e()],1)])],1)],1):e._e(),e._v(" "),2==this.active?r("div",{staticClass:"pdfInfo"},[r("h2",[e._v("相关证明")]),e._v(" "),r("Form-item",{attrs:{label:"原使用登记证","label-width":300}},[r("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/","on-success":e.handleSuccess,"with-credentials":""}},[r("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传文件")])],1)],1),e._v(" "),r("Form-item",{attrs:{label:"单位名称变更的证明资料","label-width":300}},[r("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/","on-success":e.handleSuccess,"with-credentials":""}},[r("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传文件")])],1)],1)],1):e._e(),e._v(" "),this.active<2?r("Button",{attrs:{type:"primary"},on:{click:function(t){e.next("ruleForm")}}},[e._v("下一步")]):e._e(),e._v(" "),2==this.active?r("Button",{on:{click:function(t){e.instance("success")}}},[e._v("确认提交")]):e._e(),e._v(" "),this.active<2?r("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")]):e._e(),e._v(" "),this.active<2?r("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:function(t){e.saveForm("ruleForm")}}},[e._v("保存")]):e._e()],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.29c21ef0de2d4c8d246a.js.map
webpackJsonp([18],{210:function(t,e,n){function a(t){n(361)}var i=n(4)(n(316),n(402),a,"data-v-0862a01e",null);t.exports=i.exports},222:function(t,e,n){"use strict";function a(t){return n.i(c.a)("/api/getRegistOne",t,"get")}function i(t){return n.i(c.a)("/api/getRegistTwo",t,"get")}function A(t){return n.i(c.a)("/api/getRegistThree",t,"get")}function o(t){return n.i(c.a)("/admin/apply/accept",t,"post")}function r(t){return n.i(c.a)("/admin/apply/accept",t,"post")}function s(t){return n.i(c.a)("/admin/apply/approve",t,"post")}function l(t){return n.i(c.a)("/admin/apply/approve",t,"post")}function d(t){return n.i(c.a)("/apply/get?"+t,t,"get")}e.a=a,e.c=i,e.b=A,e.d=o,e.e=r,e.f=s,e.h=l,e.g=d;var c=n(19)},239:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"regist_two",props:["ruleForm"],data:function(){return{}}}},241:function(t,e,n){e=t.exports=n(172)(!0),e.push([t.i,"@media print{.print[data-v-34bb1ce2]{display:block}.nprint[data-v-34bb1ce2]{display:none}@page{size:A4;margin:20mm 2mm 2mm 2mm}}.regist_two_com[data-v-34bb1ce2]{overflow-y:scroll;border:1px solid #000;background-color:#fff}.setTable[data-v-34bb1ce2]{width:210mm;height:297mm;margin:25mm 2mm 2mm;border:1px solid red;margin:0 auto;text-align:center}.regist_two_header[data-v-34bb1ce2]{font-size:16pt;font-family:SimSun;color:#000;text-align:center;margin-bottom:54px;margin-top:30px;position:relative}.sa[data-v-34bb1ce2]{width:460px;margin:0 auto}.regist_kind[data-v-34bb1ce2]{font-size:11pt;font-family:SimSun;color:#000;text-align:left}.setTable table[data-v-34bb1ce2]{margin:auto;border:1px solid #000;border-collapse:collapse}.setTable table span[data-v-34bb1ce2]{display:inline-block;text-align:center;vertical-align:middle;width:2em}.setTable table td[data-v-34bb1ce2]{border:1px solid #000;width:635px;height:24px;color:#000;text-align:center;vertical-align:middle;font-family:SimSun;font-size:11pt}.setTable .rowsText[data-v-34bb1ce2]{width:50px;text-align:center;vertical-align:middle}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/components/register/registerTwo.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,AAID,MACI,QAAS,AACT,uBAAyB,CAC5B,CACA,AACD,iCAME,kBAAmB,AACnB,sBAAwB,AACxB,qBAAwB,CACzB,AACD,2BACE,YAAa,AACb,aAAc,AACd,oBAAyB,AACzB,qBAAsB,AACtB,cAAe,AACf,iBAAmB,CACpB,AACD,oCACE,eAAgB,AAChB,mBAAoB,AACpB,WAAa,AACb,kBAAmB,AACnB,mBAAoB,AACpB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,qBACE,YAAa,AACb,aAAe,CAChB,AACD,8BACE,eAAgB,AAChB,mBAAoB,AACpB,WAAY,AACZ,eAAiB,CAClB,AACD,iCACE,YAAa,AACb,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,sCACE,qBAAsB,AACtB,kBAAmB,AACnB,sBAAuB,AACvB,SAAW,CACZ,AACD,oCACE,sBAAuB,AACvB,YAAa,AACb,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,mBAAoB,AACpB,cAAgB,CACjB,AACD,qCACE,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CACxB",file:"registerTwo.vue",sourcesContent:["\n@media print {\n.print[data-v-34bb1ce2] {\n    display: block;\n}\n.nprint[data-v-34bb1ce2] {\n    display: none;\n}\n  /*@page {*/\n  /*size: 210mm 297mm;  !* or size: 794px 1123px;   *!*/\n  /*}*/\n@page {\n    size: A4;\n    margin: 20mm 2mm 2mm 2mm;\n}\n}\n.regist_two_com[data-v-34bb1ce2] {\n  /*position: absolute;*/\n  /*left: 0;*/\n  /*right: 0;*/\n  /*top: 0;*/\n  /*bottom:0;*/\n  overflow-y: scroll;\n  border: 1px solid black;\n  background-color: white;\n}\n.setTable[data-v-34bb1ce2] {\n  width: 210mm;\n  height: 297mm;\n  margin: 25mm 2mm 2mm 2mm;\n  border: 1px solid red;\n  margin: 0 auto;\n  text-align: center;\n}\n.regist_two_header[data-v-34bb1ce2] {\n  font-size: 16pt;\n  font-family: SimSun;\n  color: black;\n  text-align: center;\n  margin-bottom: 54px;\n  margin-top: 30px;\n  position: relative;\n}\n.sa[data-v-34bb1ce2] {\n  width: 460px;\n  margin: 0 auto;\n}\n.regist_kind[data-v-34bb1ce2] {\n  font-size: 11pt;\n  font-family: SimSun;\n  color: #000;\n  text-align: left;\n}\n.setTable table[data-v-34bb1ce2] {\n  margin: auto;\n  border: 1px solid #000;\n  border-collapse: collapse;\n}\n.setTable table span[data-v-34bb1ce2] {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  width: 2em;\n}\n.setTable table td[data-v-34bb1ce2] {\n  border: 1px solid #000;\n  width: 635px;\n  height: 24px;\n  color: #000;\n  text-align: center;\n  vertical-align: middle;\n  font-family: SimSun;\n  font-size: 11pt;\n}\n.setTable .rowsText[data-v-34bb1ce2] {\n  width: 50px;\n  text-align: center;\n  vertical-align: middle;\n}\n"],sourceRoot:""}])},245:function(t,e,n){var a=n(241);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(173)("c0d2d45c",a,!0)},251:function(t,e,n){function a(t){n(245)}var i=n(4)(n(239),n(253),a,"data-v-34bb1ce2",null);t.exports=i.exports},253:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"regist_two_com"},[n("div",{staticClass:"setTable"},[n("h2",{staticClass:"regist_two_header"},[t._v("特种设备使用登记表(式样二)")]),t._v(" "),t._m(0),t._v(" "),n("table",[n("tr",[t._m(1),t._v(" "),n("td",[t._v("设备类别")]),t._v(" "),n("td",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ruleForm.eq_species,expression:"ruleForm.eq_species"}],attrs:{placeholder:"请输入设备种类"},domProps:{value:t.ruleForm.eq_species},on:{input:function(e){e.target.composing||(t.ruleForm.eq_species=e.target.value)}}})]),t._v(" "),n("td",[t._v("设备品种")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.equipment_variety))])]),t._v(" "),n("tr",[n("td",[t._v("产品名称")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.equipment_name))]),t._v(" "),n("td",[t._v("设备数量")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.equipment_num))])]),t._v(" "),n("tr",[n("td",[t._v("使用单位名称")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.using_company_name))]),t._v(" "),n("td",[t._v("使用单位地址")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.using_company_addr))])]),t._v(" "),n("tr",[n("td",[t._v("设备使用地点")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.eq_use_loc))]),t._v(" "),n("td",[t._v("单位固定电话")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.com_phone))])]),t._v(" "),n("tr",[n("td",[t._v("使用单位统一社会信用代码")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.using_company_code))]),t._v(" "),n("td",[t._v("邮政编码")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.zipCode))])]),t._v(" "),n("tr",[n("td",[t._v("安全管理员")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.safety_administrator))]),t._v(" "),n("td",[t._v("移动电话")]),t._v(" "),n("td",[t._v(t._s(this.ruleForm.mobile_number))])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sa"},[n("p",{staticClass:"regist_kind"},[t._v("登记类别:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"rowsText",attrs:{rowspan:"6",id:"pdf-wrap"}},[n("span",[t._v("设备基本情况")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"rowsText",attrs:{colspan:"5"}},[n("p",[t._v(" 在此申明：所申报的内容真实；在使用过程中，将严格执行《中华人民共和国特\n            种设备安全法》及相关规定，并且接受特种设备安全监督管理部门的监督管理。")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("附：产品数据表")]),t._v(" "),n("p",[t._v("使用单位填表人员：\t日期：")]),t._v(" "),n("p",[t._v("(使用单位公章)")]),t._v(" "),n("p",[t._v("使用单位安全管理人员：\t日期：\t年\t月\t日")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"rowsText",attrs:{colspan:"5"}},[n("p",[t._v("说明：")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("登记机关登记人员：\t日期：")]),t._v(" "),n("p",[t._v("(登记机关专用章)")]),t._v(" "),n("p",[t._v("使用登记证编号：\t年\t月\t日")])])])}]}},316:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(13),i=n.n(a),A=n(6),o=n(251),r=n.n(o),s=n(222);e.default={data:function(){return{ruleForm:{},dev_id:"",dev_name:"",index:0}},mounted:function(){this.initData()},watch:{$route:"initData"},methods:{initData:function(){var t=this;this.transparam(),console.log(this.index),s.c(1).then(function(e){t.ruleForm=e.success.ruleForm[t.index]}).catch(function(t){console.log(t)})},transparam:function(){this.$route.query.dev_id&&(this.dev_id=this.$route.query.dev_id),this.$route.query.dev_name&&(this.dev_name=this.$route.query.dev_name,console.log(this.dev_name)),this.$route.query.index&&(this.index=this.$route.query.index)},createPdf:function(){window.print()}},computed:i()({},n.i(A.c)(["selectedOption"]),n.i(A.a)(["getSelectedOption"])),components:{v_regist_two:r.a}}},322:function(t,e,n){e=t.exports=n(172)(!0),e.push([t.i,"@media print{.print[data-v-0862a01e]{display:block}.nprint[data-v-0862a01e]{display:none}}.regist_one[data-v-0862a01e]{position:absolute;left:0;right:0;top:0;bottom:0;overflow-y:scroll;background-color:#fff}.regist_one_header[data-v-0862a01e]{font-size:16pt;font-family:SimSun;color:#000;text-align:center;margin-bottom:54px;margin-top:30px;position:relative}.sa[data-v-0862a01e]{width:460px;margin:0 auto}.regist_kind[data-v-0862a01e]{font-size:11pt;font-family:SimSun;color:#000;text-align:left}.setTable table[data-v-0862a01e]{margin:auto;border:1px solid #000;border-collapse:collapse}.setTable table span[data-v-0862a01e]{display:inline-block;text-align:center;vertical-align:middle;width:2em}.setTable table td[data-v-0862a01e]{border:1px solid #000;width:120px;height:22px;color:#000;text-align:center;vertical-align:middle;font-family:SimSun;font-size:11pt}.setTable .rowsText[data-v-0862a01e]{width:50px;text-align:center;vertical-align:middle}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/page/print/regist_two.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,CACA,AACD,6BACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,MAAO,AACP,SAAU,AACV,kBAAmB,AACnB,qBAAwB,CACzB,AACD,oCACE,eAAgB,AAChB,mBAAoB,AACpB,WAAa,AACb,kBAAmB,AACnB,mBAAoB,AACpB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,qBACE,YAAa,AACb,aAAe,CAChB,AACD,8BACE,eAAgB,AAChB,mBAAoB,AACpB,WAAY,AACZ,eAAiB,CAClB,AACD,iCACE,YAAa,AACb,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,sCACE,qBAAsB,AACtB,kBAAmB,AACnB,sBAAuB,AACvB,SAAW,CACZ,AACD,oCACE,sBAAuB,AACvB,YAAa,AACb,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,mBAAoB,AACpB,cAAgB,CACjB,AACD,qCACE,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CACxB",file:"regist_two.vue",sourcesContent:["\n@media print {\n.print[data-v-0862a01e] {\n    display: block;\n}\n.nprint[data-v-0862a01e] {\n    display: none;\n}\n}\n.regist_one[data-v-0862a01e] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow-y: scroll;\n  background-color: white;\n}\n.regist_one_header[data-v-0862a01e] {\n  font-size: 16pt;\n  font-family: SimSun;\n  color: black;\n  text-align: center;\n  margin-bottom: 54px;\n  margin-top: 30px;\n  position: relative;\n}\n.sa[data-v-0862a01e] {\n  width: 460px;\n  margin: 0 auto;\n}\n.regist_kind[data-v-0862a01e] {\n  font-size: 11pt;\n  font-family: SimSun;\n  color: #000;\n  text-align: left;\n}\n.setTable table[data-v-0862a01e] {\n  margin: auto;\n  border: 1px solid #000;\n  border-collapse: collapse;\n}\n.setTable table span[data-v-0862a01e] {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  width: 2em;\n}\n.setTable table td[data-v-0862a01e] {\n  border: 1px solid #000;\n  width: 120px;\n  height: 22px;\n  color: #000;\n  text-align: center;\n  vertical-align: middle;\n  font-family: SimSun;\n  font-size: 11pt;\n}\n.setTable .rowsText[data-v-0862a01e] {\n  width: 50px;\n  text-align: center;\n  vertical-align: middle;\n}\n"],sourceRoot:""}])},361:function(t,e,n){var a=n(322);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(173)("6b013aaf",a,!0)},402:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"regist_two print"},[n("Button",{staticClass:"nprint",attrs:{type:"primary"},on:{click:t.createPdf}},[t._v("打印")]),t._v(" "),n("v_regist_two",{attrs:{ruleForm:t.ruleForm}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=18.f1792b600c9cd7e93cad.js.map
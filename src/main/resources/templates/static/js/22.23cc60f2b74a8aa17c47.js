webpackJsonp([22],{203:function(n,t,e){function a(n){e(397)}var A=e(4)(e(309),e(438),a,"data-v-df5954fa",null);n.exports=A.exports},222:function(n,t,e){"use strict";function a(n){return e.i(c.a)("/api/getRegistOne",n,"get")}function A(n){return e.i(c.a)("/api/getRegistTwo",n,"get")}function i(n){return e.i(c.a)("/api/getRegistThree",n,"get")}function o(n){return e.i(c.a)("/admin/apply/accept",n,"post")}function r(n){return e.i(c.a)("/admin/apply/accept",n,"post")}function l(n){return e.i(c.a)("/admin/apply/approve",n,"post")}function s(n){return e.i(c.a)("/admin/apply/approve",n,"post")}function d(n){return e.i(c.a)("/apply/get?"+n,n,"get")}t.a=a,t.c=A,t.b=i,t.d=o,t.e=r,t.f=l,t.h=s,t.g=d;var c=e(19)},283:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"changeReq_form",props:["ruleForm"],data:function(){return{}}}},309:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(13),A=e.n(a),i=e(6),o=e(222),r=e(399),l=e.n(r);t.default={data:function(){return{ruleForm:{},dev_id:"",dev_name:"",index:0}},mounted:function(){this.initData()},watch:{$route:"initData"},methods:{initData:function(){var n=this;this.transparam(),console.log(this.index),o.a(1).then(function(t){n.ruleForm=t.success.ruleForm[n.index]}).catch(function(n){console.log(n)})},transparam:function(){this.$route.query.dev_id&&(this.dev_id=this.$route.query.dev_id),this.$route.query.dev_name&&(this.dev_name=this.$route.query.dev_name,console.log(this.dev_name)),this.$route.query.index&&(this.index=this.$route.query.index)},createPdf:function(){window.print()}},computed:A()({},e.i(i.c)(["selectedOption"]),e.i(i.a)(["getSelectedOption"])),components:{changeReq_form:l.a}}},348:function(n,t,e){t=n.exports=e(172)(!0),t.push([n.i,"@media print{.print[data-v-70b470c7]{display:block}.nprint[data-v-70b470c7]{display:none}@page{size:A4;margin:20mm 2mm 2mm 2mm}}.regist_one_com[data-v-70b470c7]{overflow-y:scroll;border:1px solid #000;background-color:#fff}.setTable[data-v-70b470c7]{width:210mm;height:297mm;margin:25mm 2mm 2mm;border:1px solid red;margin:0 auto;text-align:center}.regist_one_header[data-v-70b470c7]{font-size:16pt;font-family:SimSun;color:#000;text-align:center;margin-bottom:54px;margin-top:30px;position:relative}.sa[data-v-70b470c7]{width:460px;margin:0 auto}.regist_kind[data-v-70b470c7]{font-size:11pt;font-family:SimSun;color:#000;text-align:left}.setTable table[data-v-70b470c7]{margin:auto;border:1px solid #000;border-collapse:collapse}.setTable table span[data-v-70b470c7]{display:inline-block;text-align:center;vertical-align:middle;width:2em}.setTable table td[data-v-70b470c7]{border:1px solid #000;width:635px;height:24px;color:#000;text-align:center;vertical-align:middle;font-family:SimSun;font-size:11pt}.setTable .rowsText[data-v-70b470c7]{width:50px;text-align:center;vertical-align:middle}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/components/register/changeReq.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,AAID,MACI,QAAS,AACT,uBAAyB,CAC5B,CACA,AACD,iCAME,kBAAmB,AACnB,sBAAwB,AACxB,qBAAwB,CACzB,AACD,2BACE,YAAa,AACb,aAAc,AACd,oBAAyB,AACzB,qBAAsB,AACtB,cAAe,AACf,iBAAmB,CACpB,AACD,oCACE,eAAgB,AAChB,mBAAoB,AACpB,WAAa,AACb,kBAAmB,AACnB,mBAAoB,AACpB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,qBACE,YAAa,AACb,aAAe,CAChB,AACD,8BACE,eAAgB,AAChB,mBAAoB,AACpB,WAAY,AACZ,eAAiB,CAClB,AACD,iCACE,YAAa,AACb,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,sCACE,qBAAsB,AACtB,kBAAmB,AACnB,sBAAuB,AACvB,SAAW,CACZ,AACD,oCACE,sBAAuB,AACvB,YAAa,AACb,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,mBAAoB,AACpB,cAAgB,CACjB,AACD,qCACE,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CACxB",file:"changeReq.vue",sourcesContent:["\n@media print {\n.print[data-v-70b470c7] {\n    display: block;\n}\n.nprint[data-v-70b470c7] {\n    display: none;\n}\n  /*@page {*/\n  /*size: 210mm 297mm;  !* or size: 794px 1123px;   *!*/\n  /*}*/\n@page {\n    size: A4;\n    margin: 20mm 2mm 2mm 2mm;\n}\n}\n.regist_one_com[data-v-70b470c7] {\n  /*position: absolute;*/\n  /*left: 0;*/\n  /*right: 0;*/\n  /*top: 0;*/\n  /*bottom:0;*/\n  overflow-y: scroll;\n  border: 1px solid black;\n  background-color: white;\n}\n.setTable[data-v-70b470c7] {\n  width: 210mm;\n  height: 297mm;\n  margin: 25mm 2mm 2mm 2mm;\n  border: 1px solid red;\n  margin: 0 auto;\n  text-align: center;\n}\n.regist_one_header[data-v-70b470c7] {\n  font-size: 16pt;\n  font-family: SimSun;\n  color: black;\n  text-align: center;\n  margin-bottom: 54px;\n  margin-top: 30px;\n  position: relative;\n}\n.sa[data-v-70b470c7] {\n  width: 460px;\n  margin: 0 auto;\n}\n.regist_kind[data-v-70b470c7] {\n  font-size: 11pt;\n  font-family: SimSun;\n  color: #000;\n  text-align: left;\n}\n.setTable table[data-v-70b470c7] {\n  margin: auto;\n  border: 1px solid #000;\n  border-collapse: collapse;\n}\n.setTable table span[data-v-70b470c7] {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  width: 2em;\n}\n.setTable table td[data-v-70b470c7] {\n  border: 1px solid #000;\n  width: 635px;\n  height: 24px;\n  color: #000;\n  text-align: center;\n  vertical-align: middle;\n  font-family: SimSun;\n  font-size: 11pt;\n}\n.setTable .rowsText[data-v-70b470c7] {\n  width: 50px;\n  text-align: center;\n  vertical-align: middle;\n}\n"],sourceRoot:""}])},358:function(n,t,e){t=n.exports=e(172)(!0),t.push([n.i,"@media print{.print[data-v-df5954fa]{display:block}.nprint[data-v-df5954fa]{display:none}}.regist_one[data-v-df5954fa]{position:absolute;left:0;right:0;top:0;bottom:0;overflow-y:scroll;background-color:#fff}.regist_one_header[data-v-df5954fa]{font-size:16pt;font-family:SimSun;color:#000;text-align:center;margin-bottom:54px;margin-top:30px;position:relative}.sa[data-v-df5954fa]{width:460px;margin:0 auto}.regist_kind[data-v-df5954fa]{font-size:11pt;font-family:SimSun;color:#000;text-align:left}.setTable table[data-v-df5954fa]{margin:auto;border:1px solid #000;border-collapse:collapse}.setTable table span[data-v-df5954fa]{display:inline-block;text-align:center;vertical-align:middle;width:2em}.setTable table td[data-v-df5954fa]{border:1px solid #000;width:120px;height:22px;color:#000;text-align:center;vertical-align:middle;font-family:SimSun;font-size:11pt}.setTable .rowsText[data-v-df5954fa]{width:50px;text-align:center;vertical-align:middle}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/page/print/changeReq_form.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,CACA,AACD,6BACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,MAAO,AACP,SAAU,AACV,kBAAmB,AACnB,qBAAwB,CACzB,AACD,oCACE,eAAgB,AAChB,mBAAoB,AACpB,WAAa,AACb,kBAAmB,AACnB,mBAAoB,AACpB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,qBACE,YAAa,AACb,aAAe,CAChB,AACD,8BACE,eAAgB,AAChB,mBAAoB,AACpB,WAAY,AACZ,eAAiB,CAClB,AACD,iCACE,YAAa,AACb,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,sCACE,qBAAsB,AACtB,kBAAmB,AACnB,sBAAuB,AACvB,SAAW,CACZ,AACD,oCACE,sBAAuB,AACvB,YAAa,AACb,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,mBAAoB,AACpB,cAAgB,CACjB,AACD,qCACE,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CACxB",file:"changeReq_form.vue",sourcesContent:["\n@media print {\n.print[data-v-df5954fa] {\n    display: block;\n}\n.nprint[data-v-df5954fa] {\n    display: none;\n}\n}\n.regist_one[data-v-df5954fa] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow-y: scroll;\n  background-color: white;\n}\n.regist_one_header[data-v-df5954fa] {\n  font-size: 16pt;\n  font-family: SimSun;\n  color: black;\n  text-align: center;\n  margin-bottom: 54px;\n  margin-top: 30px;\n  position: relative;\n}\n.sa[data-v-df5954fa] {\n  width: 460px;\n  margin: 0 auto;\n}\n.regist_kind[data-v-df5954fa] {\n  font-size: 11pt;\n  font-family: SimSun;\n  color: #000;\n  text-align: left;\n}\n.setTable table[data-v-df5954fa] {\n  margin: auto;\n  border: 1px solid #000;\n  border-collapse: collapse;\n}\n.setTable table span[data-v-df5954fa] {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  width: 2em;\n}\n.setTable table td[data-v-df5954fa] {\n  border: 1px solid #000;\n  width: 120px;\n  height: 22px;\n  color: #000;\n  text-align: center;\n  vertical-align: middle;\n  font-family: SimSun;\n  font-size: 11pt;\n}\n.setTable .rowsText[data-v-df5954fa] {\n  width: 50px;\n  text-align: center;\n  vertical-align: middle;\n}\n"],sourceRoot:""}])},387:function(n,t,e){var a=e(348);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(173)("63edca36",a,!0)},397:function(n,t,e){var a=e(358);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(173)("62a21904",a,!0)},399:function(n,t,e){function a(n){e(387)}var A=e(4)(e(283),e(428),a,"data-v-70b470c7",null);n.exports=A.exports},428:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"changeReqForm"},[e("div",{staticClass:"setTable "},[e("h2",[n._v("变更登记表")])])])}]}},438:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"changeReq_form print"},[e("Button",{staticClass:"nprint",attrs:{type:"primary"},on:{click:n.createPdf}},[n._v("打印")]),n._v(" "),e("changeReq_form",{attrs:{ruleForm:n.ruleForm}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=22.23cc60f2b74a8aa17c47.js.map
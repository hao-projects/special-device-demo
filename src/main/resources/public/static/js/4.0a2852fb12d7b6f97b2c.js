webpackJsonp([4],{670:function(e,t,a){function n(e){a(786)}var o=a(47)(a(723),a(823),n,"data-v-1ae8008e",null);e.exports=o.exports},692:function(e,t,a){"use strict";function n(e){return a.i(i.a)("/device/get",e,"post")}function o(e){return a.i(i.a)("/device/get?"+e,e,"get")}t.a=n,t.b=o;var i=a(98)},695:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"detailPdf",props:["pdfUrl","pdfNum"],data:function(){return{pdfToggle:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}},methods:{writepdf:function(){if(0==this.pdfToggle.length)for(var e=0;e<this.pdfNum;e++)this.pdfToggle[e]=1},test:function(e){this.writepdf(),1==this.pdfToggle[e]?this.pdfToggle.splice(e,1,0):0==this.pdfToggle[e]&&this.pdfToggle.splice(e,1,1)}}}},698:function(e,t,a){t=e.exports=a(654)(!0),t.push([e.i,".detail_li[data-v-fad42e2c]{margin:10px;font-size:small}","",{version:3,sources:["/Users/wxdandelion/special_eq_project/src/components/detailpdf/detailPdf.vue"],names:[],mappings:"AACA,4BACE,YAAa,AACb,eAAiB,CAClB",file:"detailPdf.vue",sourcesContent:["\n.detail_li[data-v-fad42e2c] {\n  margin: 10px;\n  font-size: small;\n}\n"],sourceRoot:""}])},699:function(e,t,a){var n=a(698);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(655)("90ab86ae",n,!0)},700:function(e,t,a){function n(e){a(699)}var o=a(47)(a(695),a(701),n,"data-v-fad42e2c",null);e.exports=o.exports},701:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detailPdf"},[a("ul",{staticClass:"detail_ul"},e._l(e.pdfUrl,function(t,n,o){return a("li",{staticClass:"detail_li"},[a("a",{staticClass:"detail_a",attrs:{href:"/file/download?fileId="+t,download:"key"}},[e._v(e._s(n.replace(/\d+/g,""))+".pdf")]),e._v(" "),1==e.pdfToggle[o]?a("Button",{attrs:{type:"ghost",size:"small"},on:{click:function(t){e.test(o)}}},[a("Icon",{attrs:{type:"eye"}}),e._v("\n        预览\n      ")],1):a("Button",{attrs:{type:"ghost",size:"small"},on:{click:function(t){e.test(o)}}},[a("Icon",{attrs:{type:"chevron-down"}}),e._v("\n        收起\n      ")],1),e._v(" "),0==e.pdfToggle[o]?a("embed",{attrs:{src:"/file/preview?fileId="+t,width:"100%",height:"1000px"}}):e._e()],1)}))])},staticRenderFns:[]}},723:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(71),o=a.n(n),i=a(24),s=a.n(i),d=a(48),p=a(700),c=a.n(p),r=a(692);a(1);t.default={data:function(){var e;return e={ruleForm:[],dev_id:"",dev_name:"",deviceSortNum:"",value1:"",pdfUrl:{},pdfNum:0,accStatus:"",accReason:"",approvalStatus:"",approvalRejValue:"",approvalReason:"",orderState:"",ruleForms:[],appComName:"",registPdfUrl:""},s()(e,"ruleForm",{}),s()(e,"current",0),s()(e,"applyId",""),s()(e,"applyType",""),s()(e,"active",0),s()(e,"deviceCategory",""),s()(e,"deviceClass",""),s()(e,"deviceKind",""),s()(e,"eqCode",""),s()(e,"eqComCode",""),s()(e,"acceptorAgencyName",""),s()(e,"comTablePerson",""),s()(e,"registCode",""),s()(e,"logs",[]),s()(e,"useComName",""),e},activated:function(){this.initData()},methods:o()({},a.i(d.b)(["changeBackTime"]),{printTrigger:function(e){var t=document.getElementById(e);t.focus(),t.contentWindow.print()},initData:function(){var e=this;this.transparam(),this.current=0,this.active=0,this.approvalStatus="";var t="deviceId="+this.$route.query.deviceId;r.b(t).then(function(t){t.data.useComName&&(e.useComName=t.data.useComName),e.deviceCategory=t.data.deviceCategory,console.log(e.deviceCategory),e.deviceClass=t.data.deviceClass,e.deviceKind=t.data.deviceKind,e.eqCode=t.data.eqCode,e.eqComCode=t.data.eqComCode,e.registCode=t.data.registCode,e.acceptorAgencyName=t.data.acceptorAgencyName,e.eqComCode=t.data.eqComCode,e.logs=t.data.logs;for(var a=0;a<e.logs.length;a++)console.log(e.logs[a].updateTime),e.changeBackTime(e.logs[a].updateTime),e.logs[a].updateTime=e.getBackTime;e.applyType=t.data.applyType+"/"+t.data.deviceType}).catch(function(e){console.log(e)})},changeTime:function(e){return[e[0].getFullYear()+"-"+(parseInt(e[0].getMonth())+1)+"-"+e[0].getDate(),e[1].getFullYear()+"-"+(parseInt(e[1].getMonth())+1)+"-"+e[1].getDate()]},transparam:function(){this.$route.query.applyId&&(this.applyId=this.$route.query.applyId),this.$route.query.orderState&&(this.orderState=this.$route.query.orderState)},appDetail:function(e){this.$router.push({path:"appDetail",query:{applyId:e}})}}),computed:o()({},a.i(d.c)(["registOne"]),a.i(d.a)(["getBackTime"])),components:{"v-detailPdf":c.a}}},750:function(e,t,a){t=e.exports=a(654)(!0),t.push([e.i,"@media print{.print[data-v-1ae8008e]{display:block}.nprint[data-v-1ae8008e]{display:none}}.deviceDetail[data-v-1ae8008e]{margin:15px}.comp_name[data-v-1ae8008e]{margin-bottom:30px}.setTable[data-v-1ae8008e]{margin-bottom:30px;font-size:17px}.pdfdownload[data-v-1ae8008e]{margin-bottom:30px}.deviceDetailHead[data-v-1ae8008e]{margin-bottom:15px;color:#1c2438}.deviceContentHead[data-v-1ae8008e]{margin:20px;color:#495060;font-size:17px}.applyDetailHead[data-v-1ae8008e]{margin-bottom:15px;color:#1c2438}.detailHead[data-v-1ae8008e]{margin:20px 0;color:#1c2438}.content[data-v-1ae8008e]{color:#495060;font-size:17px}.panel_content[data-v-1ae8008e]{font-size:small;color:#495060}.acceptReason[data-v-1ae8008e]{margin-bottom:20px}.comp_name_content[data-v-1ae8008e]{font-size:17px}.base-box[data-v-1ae8008e]{margin:0 auto;width:100%;display:block;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-left:10px;padding-right:10px;padding-top:10px;box-sizing:border-box;background-color:#fff}.appDetail_topbar[data-v-1ae8008e]{position:fixed;width:100%;margin:0;padding:0;height:60px;z-index:10;background-color:#fff}.applyTypeHead[data-v-1ae8008e]{margin-bottom:15px;color:#1c2438;font-size:23px}.applyTypeContent[data-v-1ae8008e]{color:#1c2438;font-size:17px}","",{version:3,sources:["/Users/wxdandelion/special_eq_project/src/page/apply/avaiableDev/deviceDetail.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,CACA,AACD,+BACE,WAAa,CACd,AACD,4BACE,kBAAoB,CACrB,AACD,2BACE,mBAAoB,AACpB,cAAgB,CACjB,AACD,8BACE,kBAAoB,CACrB,AACD,mCACE,mBAAoB,AACpB,aAAe,CAChB,AACD,oCACE,YAAa,AACb,cAAe,AACf,cAAgB,CACjB,AACD,kCACE,mBAAoB,AACpB,aAAe,CAChB,AACD,6BACE,cAAe,AACf,aAAe,CAChB,AACD,0BACE,cAAe,AACf,cAAgB,CACjB,AACD,gCACE,gBAAiB,AACjB,aAAe,CAChB,AACD,+BACE,kBAAoB,CACrB,AACD,oCACE,cAAgB,CACjB,AACD,2BACE,cAAe,AACf,WAAY,AACZ,cAAe,AACf,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,kBAAmB,AACnB,mBAAoB,AACpB,iBAAkB,AAClB,sBAAuB,AACvB,qBAAwB,CACzB,AACD,mCACE,eAAgB,AAChB,WAAY,AACZ,SAAY,AACZ,UAAa,AACb,YAAa,AACb,WAAY,AACZ,qBAAwB,CACzB,AACD,gCACE,mBAAoB,AACpB,cAAe,AACf,cAAgB,CACjB,AACD,mCACE,cAAe,AACf,cAAgB,CACjB",file:"deviceDetail.vue",sourcesContent:["\n@media print {\n.print[data-v-1ae8008e] {\n    display: block;\n}\n.nprint[data-v-1ae8008e] {\n    display: none;\n}\n}\n.deviceDetail[data-v-1ae8008e] {\n  margin: 15px;\n}\n.comp_name[data-v-1ae8008e] {\n  margin-bottom: 30px;\n}\n.setTable[data-v-1ae8008e] {\n  margin-bottom: 30px;\n  font-size: 17px;\n}\n.pdfdownload[data-v-1ae8008e] {\n  margin-bottom: 30px;\n}\n.deviceDetailHead[data-v-1ae8008e] {\n  margin-bottom: 15px;\n  color: #1c2438;\n}\n.deviceContentHead[data-v-1ae8008e] {\n  margin: 20px;\n  color: #495060;\n  font-size: 17px;\n}\n.applyDetailHead[data-v-1ae8008e] {\n  margin-bottom: 15px;\n  color: #1c2438;\n}\n.detailHead[data-v-1ae8008e] {\n  margin: 20px 0;\n  color: #1c2438;\n}\n.content[data-v-1ae8008e] {\n  color: #495060;\n  font-size: 17px;\n}\n.panel_content[data-v-1ae8008e] {\n  font-size: small;\n  color: #495060;\n}\n.acceptReason[data-v-1ae8008e] {\n  margin-bottom: 20px;\n}\n.comp_name_content[data-v-1ae8008e] {\n  font-size: 17px;\n}\n.base-box[data-v-1ae8008e] {\n  margin: 0 auto;\n  width: 100%;\n  display: block;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10px;\n  box-sizing: border-box;\n  background-color: white;\n}\n.appDetail_topbar[data-v-1ae8008e] {\n  position: fixed;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  height: 60px;\n  z-index: 10;\n  background-color: white;\n}\n.applyTypeHead[data-v-1ae8008e] {\n  margin-bottom: 15px;\n  color: #1c2438;\n  font-size: 23px;\n}\n.applyTypeContent[data-v-1ae8008e] {\n  color: #1c2438;\n  font-size: 17px;\n}\n"],sourceRoot:""}])},786:function(e,t,a){var n=a(750);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(655)("69528fd4",n,!0)},823:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"deviceDetail"},[e._m(0),e._v(" "),a("div",{staticClass:"setApp_content",staticStyle:{position:"absolute",top:"85px"}},[a("div",{staticClass:"comp_name",staticStyle:{width:"800px"}},[a("h2",{staticClass:"deviceDetailHead"},[e._v("一、设备详细信息：")]),e._v(" "),a("Row",{staticStyle:{width:"100%"}},[a("Col",{attrs:{span:"12"}},[a("p",{staticClass:"deviceContentHead"},[e._v("设备种类 :"),a("span",{staticClass:"content"},[e._v(e._s(this.deviceCategory))])]),e._v(" "),a("p",{staticClass:"deviceContentHead"},[e._v("设备品种 :"),a("span",{staticClass:"content"},[e._v(e._s(this.deviceKind))])]),e._v(" "),a("p",{staticClass:"deviceContentHead"},[e._v("单位内编号 :"),a("span",{staticClass:"content"},[e._v(e._s(this.eqComCode))])]),e._v(" "),a("p",{staticClass:"deviceContentHead"},[e._v("登记机关 :"),a("span",{staticClass:"content"},[e._v(e._s(this.acceptorAgencyName))])])]),e._v(" "),a("Col",{attrs:{span:"11"}},[a("p",{staticClass:"deviceContentHead"},[e._v("设备类别 :"),a("span",{staticClass:"content"},[e._v(e._s(this.deviceClass))])]),e._v(" "),a("p",{staticClass:"deviceContentHead"},[e._v("设备代码 :"),a("span",{staticClass:"content"},[e._v(e._s(this.eqCode))])]),e._v(" "),a("p",{staticClass:"deviceContentHead"},[e._v("使用单位填表人员 :"),a("span",{staticClass:"content"},[e._v(e._s(this.comTablePerson))])]),e._v(" "),a("p",{staticClass:"deviceContentHead"},[e._v("使用登记证编号 :"),a("span",{staticClass:"content"},[e._v(e._s(this.registCode))])])])],1)],1),e._v(" "),a("div",{staticClass:"apply_type"},[a("h2",{staticClass:"applyDetailHead"},[e._v("二、已有申请详细信息：")]),e._v(" "),a("ul",e._l(this.logs,function(t,n,o){return a("li",{staticStyle:{"margin-bottom":"10px"}},[a("p",{staticClass:"applyTypeHead"},[e._v(e._s(n+1)+"、 "+e._s(t.applyType))]),e._v(" "),a("p",{staticClass:"applyTypeContent"},[e._v(" 申请时间:"+e._s(t.updateTime))]),e._v(" "),a("Button",{staticStyle:{margin:"10px"},attrs:{type:"primary"},on:{click:function(a){e.appDetail(t.applyId)}}},[e._v("查看"+e._s(t.applyType)+"详情")])],1)}))])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"appDetail_topbar"},[a("h1",{staticStyle:{margin:"10px"}},[e._v("设备详情：")])])}]}}});
//# sourceMappingURL=4.0a2852fb12d7b6f97b2c.js.map
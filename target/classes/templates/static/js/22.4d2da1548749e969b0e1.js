webpackJsonp([22],{181:function(t,e,a){function i(t){a(314)}var o=a(3)(a(259),a(345),i,"data-v-4c3115a0",null);t.exports=o.exports},197:function(t,e,a){"use strict";function i(t){return a.i(l.a)("/api/getorders",t,"get")}function o(t){return a.i(l.a)("/api/getorders",t,"get")}function r(t){return a.i(l.a)("/api/getorders",t,"get")}function s(t){return a.i(l.a)("/api/getorders",t,"get")}function n(t){return a.i(l.a)("/api/getorders",t,"get")}function c(t){return a.i(l.a)("/api/getorders",t,"get")}e.e=i,e.a=o,e.b=r,e.c=s,e.d=n,e.f=c;var l=a(19)},259:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(13),o=a.n(i),r=a(5),s=a(197);e.default={data:function(){var t=this;return{List:[{value:"0",label:"待处理"},{value:"1",label:"已通过"},{value:"2",label:"已驳回"}],sort:[{value:"1",label:"首次申请"},{value:"2",label:"改造变更"},{value:"3",label:"移装变更"},{value:"4",label:"单位变更"},{value:"5",label:"更名变更"},{value:"6",label:"达到设计年限变更"},{value:"7",label:"停用申请"},{value:"8",label:"报废申请"}],model1:"",model2:"",columns5:[{title:"设备名称",key:"device"},{title:"日期",key:"time",sortable:!0},{title:"设备类别",key:"changeDevice"},{title:"申请类别",key:"changeApply"},{title:"受理机关",key:"accepter"},{title:"审批机关",key:"checker"},{title:"监管机关",key:"watcher"},{title:"申请状态",key:"state"},{title:"操作",key:"state",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.appDetail(a.index)}}},"详情")])}}],data5:[],state:{0:"待处理",1:"已通过",2:"已驳回"},params:{time:"",sort:"",state:"",page:1},time:"",num:200}},methods:o()({},a.i(r.b)({selectedDeviceOption:"selectedDeviceOption"}),{getOrders:function(t){var e=this;s.e(t).then(function(t){if(t.success){e.data5=t.success;for(var a=0;a<e.data5.length;a++)e.data5[a].state=e.state[e.data5[a].state]}}).catch(function(t){console.log(t)})},changeTime:function(t){var e=this;console.log(t),s.a().then(function(t){t.success&&(e.data5=t.success)}).catch(function(t){console.log(t)})},changeState:function(t){var e=this;s.b(t).then(function(t){t.success&&(e.data5=t.success)}).catch(function(t){console.log(t)})},changeSort:function(t){var e=this;s.c(t).then(function(t){t.success&&(e.data5=t.success)}).catch(function(t){console.log(t)})},query:function(){var t=this;this.params.time=this.time,this.params.sort=this.model1,this.params.state=this.model2,console.log(this.params.state),s.d(this.params).then(function(e){e.success&&(t.data5=e.success)}).catch(function(t){console.log(t)})},initSize:function(t){var e=this;s.e(t).then(function(t){if(t.success){e.data5=t.success;for(var a=0;a<e.data5.length;a++)e.data5[a].state=e.state[e.data5[a].state]}}).catch(function(t){console.log(t)})},appDetail:function(t){switch(this.data5[t].changeApplyNum){case 1:"one"==this.data5[t].changeDeviceNum[0]&&"carbox"!==this.data5[t].changeDeviceNum[1]?this.$router.push({path:"appDetail",query:{dev_id:this.data5[t].id,dev_name:this.data5[t].device,orderState:this.orderState}}):"two"==this.data5[t].changeDeviceNum[0]?this.$router.push({path:"comAppDetail",query:{dev_id:this.data5[t].id,dev_name:this.data5[t].device,orderState:this.orderState}}):"carbox"==this.data5[t].changeDeviceNum[1]&&this.$router.push({path:"carboxAppDetail",query:{dev_id:this.data5[t].id,dev_name:this.data5[t].device,orderState:this.orderState}});break;case 2:case 3:case 4:this.$router.push({path:"appDetail",query:{dev_id:this.data5[t].id,dev_name:this.data5[t].device,orderState:this.orderState}})}}}),computed:o()({},a.i(r.c)(["selectedOption"]),a.i(r.a)(["getSelectedOption"])),mounted:function(){this.getOrders(this.params.page)}}},285:function(t,e,a){e=t.exports=a(166)(!0),e.push([t.i,".filter-box[data-v-4c3115a0]{display:block;border:1px solid #e5e5e5;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding:10px;box-sizing:border-box}.filter-box .query[data-v-4c3115a0]{float:right;margin-right:60px;margin-top:10px}.list-box[data-v-4c3115a0]{display:block;height:400px;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-color:#dddee1;margin-top:10px;box-sizing:border-box}.list-box .page[data-v-4c3115a0]{float:right;margin:10px}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/page/apply/orderStatus/orderList.vue"],names:[],mappings:"AACA,6BACE,cAAe,AACf,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,aAAc,AACd,qBAAuB,CACxB,AACD,oCACI,YAAa,AACb,kBAAmB,AACnB,eAAiB,CACpB,AACD,2BACE,cAAe,AACf,aAAc,AACd,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,qBAAsB,AACtB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,iCACI,YAAa,AACb,WAAa,CAChB",file:"orderList.vue",sourcesContent:["\n.filter-box[data-v-4c3115a0] {\n  display: block;\n  border: 1px solid #e5e5e5;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.filter-box .query[data-v-4c3115a0] {\n    float: right;\n    margin-right: 60px;\n    margin-top: 10px;\n}\n.list-box[data-v-4c3115a0] {\n  display: block;\n  height: 400px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-color: #dddee1;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n.list-box .page[data-v-4c3115a0] {\n    float: right;\n    margin: 10px;\n}\n"],sourceRoot:""}])},314:function(t,e,a){var i=a(285);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(167)("15a5784a",i,!0)},345:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"orderList"},[a("div",{staticClass:"filter-box"},[a("Row",[a("Col",{attrs:{span:"8"}},[a("label",[t._v("订单时间")]),t._v(" "),a("Date-picker",{staticStyle:{width:"200px"},attrs:{type:"daterange",placeholder:"选择日期"},on:{"on-change":t.changeTime},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("label",[t._v("订单状态")]),t._v(" "),a("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},on:{"on-change":t.changeState},model:{value:t.model1,callback:function(e){t.model1=e},expression:"model1"}},t._l(t.List,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label))])}))],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("label",[t._v("申请类别")]),t._v(" "),a("Select",{staticStyle:{width:"200px"},on:{"on-change":t.changeSort},model:{value:t.model2,callback:function(e){t.model2=e},expression:"model2"}},t._l(t.sort,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label))])}))],1),t._v(" "),a("Button",{staticClass:"query",attrs:{type:"primary"},on:{click:t.query}},[t._v("查询")])],1)],1),t._v(" "),a("div",{staticClass:"list-box"},[a("Table",{attrs:{border:"",columns:t.columns5,data:t.data5}}),t._v(" "),a("Page",{staticClass:"page",attrs:{total:this.num,size:"small","show-elevator":""},on:{"on-change":t.initSize}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=22.4d2da1548749e969b0e1.js.map
webpackJsonp([24],{683:function(e,r,t){function o(e){t(803)}var a=t(47)(t(735),t(839),o,"data-v-9c9c981a",null);e.exports=a.exports},684:function(e,r,t){"use strict";function o(e){return t.i(b.a)("/apply/create",e,"post")}function a(e){return t.i(b.a)("/apply/drop",e,"post")}function i(e){return t.i(b.a)("/apply/disable",e,"post")}function l(e){return t.i(b.a)("/user/update",e,"post")}function s(e){return t.i(b.a)("/apply/update",e,"post")}function n(e){return t.i(b.a)("/static/deviceClass?"+e,e,"get")}function u(e){return t.i(b.a)("/static/deviceType?"+e,e,"get")}function m(e){return t.i(b.a)("/map/provinces",e,"get")}function c(e){return t.i(b.a)("/map/cities?"+e,e,"get")}function d(e){return t.i(b.a)("/map/areas?"+e,e,"get")}function p(e){return t.i(b.a)("/apply/get?"+e,e,"get")}function h(e){return t.i(b.a)("/apply/confirm?"+e,e,"get")}function g(e){return t.i(b.a)("/map/organization?"+e,e,"get")}function v(e){return t.i(b.a)("/device/cylinder?"+e,e,"get")}function f(e){return t.i(b.a)("/device/pipe?"+e,e,"get")}function A(e){return t.i(b.a)("/device/cylinder",e,"post")}function C(e){return t.i(b.a)("/device/pipe",e,"post")}function F(e){return t.i(b.a)("/apply/create",e,"post")}r.f=o,r.q=a,r.p=i,r.r=l,r.g=s,r.o=n,r.i=u,r.a=m,r.b=c,r.c=d,r.e=p,r.h=h,r.d=g,r.j=v,r.k=f,r.l=A,r.m=C,r.n=F;var b=t(97)},735:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(71),a=t.n(o),i=t(48),l=t(684);t(72);r.default={data:function(){var e=function(e,r,t){var o={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};/^\d{17}(\d|x)$/i.test(r)?void 0===o[r.substr(0,2)]?t(new Error("非法地区")):t():t(new Error("请输入正确身份证"))},r=function(e,r,t){/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(r)?t():t(new Error("请输入正确电话号"))};return{author_key:localStorage.getItem("author_key"),role:"",formInline:{user:"",region:"",option:""},rules:{username:[{required:!0,message:"不能为空",trigger:"blur"}],password:[{required:!0,message:"不能为空",trigger:"blur"}],password2:[{required:!0,message:"不能为空",trigger:"blur"}],useComName:[{required:!0,message:"不能为空",trigger:"blur"}],street:[{required:!0,message:"不能为空",trigger:"blur"}],useComCode:[{required:!0,message:"不能为空",trigger:"blur"}],safeAdministrator:[{required:!0,message:"不能为空",trigger:"blur"}],verifyId:[{validator:e,required:!0,trigger:"blur"}],email:[{required:!0,message:"不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱",trigger:"blur"}],mobilePhone:[{validator:r,required:!0,trigger:"blur"}],zipcode:[{required:!0,message:"不能为空",trigger:"blur"}],staticPhone:[{required:!0,message:"不能为空",trigger:"blur"}],propertyComName:[{required:!0,message:"不能为空",trigger:"blur"}],propertyComCode:[{required:!0,message:"不能为空",trigger:"blur"}]},registRules:{useComName:[{required:!0,message:"不能为空",trigger:"blur"}],name:[{required:!0,message:"不能为空",trigger:"blur"}],verifyId:[{required:!0,message:"不能为空",trigger:"blur"}],mobilePhone:[{required:!0,message:"不能为空",trigger:"blur"}]},province:"",provinceId:"",city:"",provinceList:[],cityList:[],cityId:"",area:"",areaList:[],areaId:"",codeBox:!1,changeAdd:!1,changeRegistName:!1,userName:"",password:"",ruleForm:{userName:"",useComName:"",useComAddr:"",useComCode:"",zipcode:"",staticPhone:"",mobilePhone:"",propertyComName:"",propertyComCode:"",name:"",verifyId:"",acceptorAgencyId:"",addressCode:""}}},computed:a()({},t.i(i.c)(["loginStatus","userInfo"]),t.i(i.a)(["userInfo","loginStatus"])),methods:a()({},t.i(i.b)(["setSignOut","getUserInfo","clearUserData","getUserData"]),{initData:function(){this.ruleForm.userName=localStorage.getItem("userInfo"),this.setUserDetailData(),this.author_key=localStorage.getItem("author_key"),this.codeBox=!1},setUserDetailData:function(){1==this.author_key&&(this.ruleForm.useComName=localStorage.getItem("useComName"),this.ruleForm.useComAddr=localStorage.getItem("useComAddr"),this.ruleForm.zipcode=localStorage.getItem("zipcode"),this.ruleForm.staticPhone=localStorage.getItem("staticPhone"),this.ruleForm.mobilePhone=localStorage.getItem("mobilePhone"),this.ruleForm.propertyComName=localStorage.getItem("propertyComName"),this.ruleForm.propertyComCode=localStorage.getItem("propertyComCode"),this.ruleForm.email=localStorage.getItem("email"),this.addressCode=localStorage.getItem("addressCode"),this.ruleForm.verifyId=localStorage.getItem("verifyId"),"true"==localStorage.getItem("company")?(this.ruleForm.safeAdministrator=localStorage.getItem("safeAdministrator"),this.ruleForm.useComCode=localStorage.getItem("useComCode"),this.role="1"):(this.ruleForm.safeAdministrator=localStorage.getItem("name"),this.role="0")),2!=this.author_key&&3!=this.author_key||(this.ruleForm.acceptorAgencyId=localStorage.getItem("acceptorAgencyId"),this.ruleForm.acceptorAgencyName=localStorage.getItem("acceptorAgencyName"),this.ruleForm.name=localStorage.getItem("name"),this.ruleForm.verifyId=localStorage.getItem("verifyId"),this.ruleForm.mobilePhone=localStorage.getItem("mobilePhone"))},saveRuleForm:function(){var e=this;if(console.log(1),1==this.author_key&&"1"===this.role){var r="";""!==this.area?r=this.province+this.city+this.area+this.ruleForm.street:""==this.area&&(r=this.province+this.city+this.ruleForm.street);var t="";this.changeAdd?(this.ruleForm.useComAddr=r,t=""!==this.areaId?this.areaId:this.cityId):t=this.addressCode;var o={},a={company:!0,mobilePhone:this.ruleForm.mobilePhone,useComName:this.ruleForm.useComName,useComCode:this.ruleForm.useComCode,zipcode:this.ruleForm.zipcode,propertyComName:this.ruleForm.propertyComName,propertyComCode:this.ruleForm.propertyComCode,email:this.ruleForm.email,useComAddr:this.ruleForm.useComAddr,addressCode:t,safeAdministrator:this.ruleForm.safeAdministrator,staticPhone:this.ruleForm.staticPhone,verifyId:this.ruleForm.verifyId};o.userData=a,l.r(o).then(function(r){200===r.status?(e.$Message.info("基本信息修改成功"),e.getUserData(),e.changeAdd=!1):500===r.status&&e.$Message.info(r.msg)}).catch(function(e){console.log(e)})}else if(1==this.author_key&&"0"===this.role){var i="";""!==this.area?i=this.province+this.city+this.area+this.ruleForm.street:""==this.area&&(i=this.province+this.city+this.ruleForm.street);var s="";this.changeAdd?(this.ruleForm.useComAddr=i,s=""!==this.areaId?this.areaId:this.cityId):s=this.addressCode;var n={},u={name:this.ruleForm.name,mobilePhone:this.ruleForm.mobilePhone,verifyId:this.ruleForm.verifyId,company:!1,zipcode:this.ruleForm.zipcode,email:this.ruleForm.email,useComAddr:i,addressCode:s};n.userData=u,l.r(n).then(function(r){200===r.status?(e.$Message.info("基本信息修改成功"),e.getUserData(),e.changeAdd=!1):500===r.status&&e.$Message.info(r.msg)}).catch(function(e){console.log(e)})}else if(2==this.author_key){var m={},c={name:this.ruleForm.name,verifyId:this.ruleForm.verifyId,mobilePhone:this.ruleForm.mobilePhone};m.userData=c,m.userData.role=2,l.r(m).then(function(r){200===r.status?(e.$Message.info("基本信息修改成功"),e.getUserData()):500===r.status&&e.$Message.info(r.msg)}).catch(function(e){console.log(e)})}else if(3==this.author_key){var d={},p={name:this.ruleForm.name,verifyId:this.ruleForm.verifyId,mobilePhone:this.ruleForm.mobilePhone};d.userData=p,d.userData.role=3,l.r(d).then(function(r){200===r.status?(e.$Message.info("基本信息修改成功"),e.getUserData()):500===r.status&&e.$Message.info(r.msg)}).catch(function(e){console.log(e)})}},changeCode:function(){this.codeBox=!0},saveCode:function(){var e=this;this.codeBox=!1,this.$Modal.confirm({title:"Title",content:"<p>点击确认提交新密码，并重新登录</p>",onOk:function(){var r={password:e.password};l.r(r).then(function(r){200==r.status?(e.$Message.info("修改密码成功，请重新登陆"),localStorage.removeItem("loginStatus"),localStorage.removeItem("userInfo"),localStorage.removeItem("author_key"),localStorage.removeItem("useComName"),localStorage.removeItem("useComAddr"),localStorage.removeItem("useComCode"),localStorage.removeItem("zipcode"),localStorage.removeItem("staticPhone"),localStorage.removeItem("mobilePhone"),localStorage.removeItem("propertyComName"),localStorage.removeItem("propertyComCode"),localStorage.removeItem("name"),localStorage.removeItem("verifyId"),localStorage.removeItem("safeAdministrator"),localStorage.removeItem("approveAgencyId"),localStorage.removeItem("reminder"),e.setSignOut(),e.$router.push("login")):e.$Message.info(r.msg)}).catch(function(e){console.log(e)})},onCancel:function(){e.$Message.info("点击了取消")}})},changeRegist:function(){this.changeRegistName=!0},changeAddress:function(){var e=this;l.a().then(function(r){for(var t=0,o=r.length;t<o;t++)e.provinceList.push({value:r[t].code,label:r[t].name});e.changeAdd=!0}).catch(function(e){console.log(e)})},chosenPro:function(e){var r=this,t="provinceCode="+e.value;this.province=e.label,this.provinceId=e.value,""!==e&&l.b(t).then(function(e){r.cityList=[];for(var t=0,o=e.length;t<o;t++)r.cityList.push({value:e[t].code,label:e[t].name})}).catch(function(e){console.log(e)})},chosenCity:function(e){var r=this,t="cityCode="+e.value;this.city=e.label,this.cityId=e.value,""!==e&&l.c(t).then(function(e){r.areaList=[];for(var t=0,o=e.length;t<o;t++)r.areaList.push({value:e[t].code,label:e[t].name})}).catch(function(e){console.log(e)})},chosenArea:function(e){this.areaId=e.value,this.area=e.label;e.value;console.log(this.province+this.city+this.area+this.street)}}),mounted:function(){this.initData()},watch:{$route:"initData"}}},768:function(e,r,t){r=e.exports=t(648)(!0),r.push([e.i,".admin_set[data-v-9c9c981a]{width:60%;background-color:#f9fafc;min-height:400px;margin:20px auto 0;border-radius:10px}.admin_set ul>li[data-v-9c9c981a]{padding:10px;padding-left:20%}.admin_set ul>li span[data-v-9c9c981a]{color:#666}.avatar-uploader .el-upload[data-v-9c9c981a]{border:1px dashed #d9d9d9;margin-top:10px;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload[data-v-9c9c981a]:hover{border-color:#20a0ff}.avatar-uploader-icon[data-v-9c9c981a]{font-size:28px;color:#8c939d;width:120px;height:120px;line-height:120px;text-align:center}.avatar[data-v-9c9c981a]{width:120px;height:120px;display:block}.admin_title[data-v-9c9c981a]{margin-top:20px;text-align:center;font-size:18px;font-weight:700}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/page/user/user.vue"],names:[],mappings:"AACA,4BACE,UAAW,AACX,yBAA0B,AAC1B,iBAAkB,AAClB,mBAAoB,AACpB,kBAAoB,CACrB,AACD,kCACI,aAAc,AACd,gBAAkB,CACrB,AACD,uCACM,UAAY,CACjB,AACD,6CACE,0BAA2B,AAC3B,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,kBAAmB,AACnB,eAAiB,CAClB,AACD,mDACE,oBAAsB,CACvB,AACD,uCACE,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,yBACE,YAAa,AACb,aAAc,AACd,aAAe,CAChB,AACD,8BACE,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,eAAkB,CACnB",file:"user.vue",sourcesContent:["\n.admin_set[data-v-9c9c981a] {\n  width: 60%;\n  background-color: #F9FAFC;\n  min-height: 400px;\n  margin: 20px auto 0;\n  border-radius: 10px;\n}\n.admin_set ul > li[data-v-9c9c981a] {\n    padding: 10px;\n    padding-left: 20%;\n}\n.admin_set ul > li span[data-v-9c9c981a] {\n      color: #666;\n}\n.avatar-uploader .el-upload[data-v-9c9c981a] {\n  border: 1px dashed #d9d9d9;\n  margin-top: 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload[data-v-9c9c981a]:hover {\n  border-color: #20a0ff;\n}\n.avatar-uploader-icon[data-v-9c9c981a] {\n  font-size: 28px;\n  color: #8c939d;\n  width: 120px;\n  height: 120px;\n  line-height: 120px;\n  text-align: center;\n}\n.avatar[data-v-9c9c981a] {\n  width: 120px;\n  height: 120px;\n  display: block;\n}\n.admin_title[data-v-9c9c981a] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n"],sourceRoot:""}])},803:function(e,r,t){var o=t(768);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(649)("e6c6242a",o,!0)},839:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"user"},[t("header",{staticClass:"admin_title"},[e._v("基本信息")]),e._v(" "),1==this.author_key?t("div",{staticClass:"admin_set"},[t("Form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":120}},[t("Row",[t("FormItem",{attrs:{prop:"userName",label:"用户名"}},[t("Poptip",{attrs:{trigger:"focus",placement:"right"}},[t("div",{staticStyle:{"white-space":"normal","font-size":"2px"},slot:"content"},[t("p",[e._v("登录账号，至少5个字符，要求大小写字母和数字")])]),e._v(" "),t("Input",{attrs:{placeholder:"用户名",disabled:""},model:{value:e.ruleForm.userName,callback:function(r){e.ruleForm.userName=r},expression:"ruleForm.userName"}})],1)],1)],1),e._v(" "),t("Row",[t("FormItem",{attrs:{prop:"password",label:"登陆密码"}},[this.codeBox?t("div",{staticStyle:{display:"inline-block",width:"300px"}},[t("Input",{model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1):e._e(),e._v(" "),this.codeBox?t("Button",{attrs:{type:"warning"},on:{click:function(r){e.saveCode()}}},[e._v("保存密码")]):e._e(),e._v(" "),this.codeBox?e._e():t("Button",{on:{click:function(r){e.changeCode()}}},[e._v("修改密码")])],1)],1),e._v(" "),t("h2",[e._v("基本信息")]),t("br"),e._v(" "),t("Row",["1"===this.role?t("FormItem",{attrs:{prop:"useComName",label:"使用单位名称"}},[t("Input",{attrs:{placeholder:"应当与工商营业执照或者其他法人证书的名称完全一致"},model:{value:e.ruleForm.useComName,callback:function(r){e.ruleForm.useComName=r},expression:"ruleForm.useComName"}})],1):e._e()],1),e._v(" "),t("Row",[this.changeAdd?e._e():t("FormItem",{attrs:{prop:"useComAddr",label:"使用单位地址"}},[t("Input",{attrs:{disabled:""},model:{value:e.ruleForm.useComAddr,callback:function(r){e.ruleForm.useComAddr=r},expression:"ruleForm.useComAddr"}})],1),e._v(" "),this.changeAdd?t("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{prop:"useComAddr",label:"使用单位地址"}},[t("Col",{staticStyle:{"padding-right":"10px"},attrs:{span:"6"}},[t("Select",{attrs:{filterable:"","label-in-value":!0},on:{"on-change":e.chosenPro},model:{value:e.ruleForm.province,callback:function(r){e.ruleForm.province=r},expression:"ruleForm.province"}},e._l(e.provinceList,function(r){return t("Option",{key:r.value,attrs:{value:r.value}},[e._v(e._s(r.label))])}))],1),e._v(" "),t("Col",{staticStyle:{"padding-right":"10px"},attrs:{span:"6"}},[t("Select",{attrs:{filterable:"","label-in-value":!0},on:{"on-change":e.chosenCity},model:{value:e.ruleForm.city,callback:function(r){e.ruleForm.city=r},expression:"ruleForm.city"}},e._l(e.cityList,function(r){return t("Option",{key:r.value,attrs:{value:r.value}},[e._v(e._s(r.label))])}))],1),e._v(" "),t("Col",{attrs:{span:"6"}},[t("Select",{attrs:{filterable:"","label-in-value":!0},on:{"on-change":e.chosenArea},model:{value:e.ruleForm.area,callback:function(r){e.ruleForm.area=r},expression:"ruleForm.area"}},e._l(e.areaList,function(r){return t("Option",{key:r.value,attrs:{value:r.value}},[e._v(e._s(r.label))])}))],1)],1):e._e()],1),e._v(" "),t("Row",[this.changeAdd?t("FormItem",{attrs:{prop:"street",label:""}},[t("Input",{attrs:{placeholder:"填写乡、镇、街道、村、路、社区、楼层、号等"},model:{value:e.ruleForm.street,callback:function(r){e.ruleForm.street=r},expression:"ruleForm.street"}})],1):e._e()],1),e._v(" "),this.changeAdd?e._e():t("Button",{on:{click:function(r){e.changeAddress()}}},[e._v("修改地址")]),e._v(" "),"1"===this.role?t("Row",[t("FormItem",{attrs:{prop:"useComCode",label:"使用单位统一社会信用代码"}},[t("Input",{attrs:{placeholder:"应当与工商营业执照或者其他法人证书上的一致"},model:{value:e.ruleForm.useComCode,callback:function(r){e.ruleForm.useComCode=r},expression:"ruleForm.useComCode"}})],1)],1):e._e(),e._v(" "),t("Row",[t("FormItem",{attrs:{prop:"safeAdministrator",label:"安全管理员"}},[t("Input",{attrs:{placeholder:"请填写负责该设备专职持证的或者兼职安全管理员姓名"},model:{value:e.ruleForm.safeAdministrator,callback:function(r){e.ruleForm.safeAdministrator=r},expression:"ruleForm.safeAdministrator"}})],1)],1),e._v(" "),t("Row",[t("FormItem",{attrs:{prop:"verifyId",label:"身份证号"}},[t("Input",{attrs:{placeholder:"请填入安全管理员的公民身份证号码"},model:{value:e.ruleForm.verifyId,callback:function(r){e.ruleForm.verifyId=r},expression:"ruleForm.verifyId"}})],1)],1),e._v(" "),t("Row",[t("FormItem",{attrs:{prop:"email",label:"电子信箱"}},[t("Input",{attrs:{placeholder:"请填入安全管理员的电子邮箱"},model:{value:e.ruleForm.email,callback:function(r){e.ruleForm.email=r},expression:"ruleForm.email"}})],1)],1),e._v(" "),t("Row",[t("FormItem",{attrs:{prop:"mobilePhone",label:"移动电话号码"}},[t("Input",{attrs:{placeholder:"请填入安全管理员的移动电话号码"},model:{value:e.ruleForm.mobilePhone,callback:function(r){e.ruleForm.mobilePhone=r},expression:"ruleForm.mobilePhone"}})],1)],1),e._v(" "),t("Row",[t("FormItem",{attrs:{label:"邮政编码",prop:"zipcode"}},[t("Input",{attrs:{placeholder:"请输入邮政编码"},model:{value:e.ruleForm.zipcode,callback:function(r){e.ruleForm.zipcode=r},expression:"ruleForm.zipcode"}})],1)],1),e._v(" "),"1"===this.role?t("FormItem",{attrs:{label:"单位固定电话",prop:"staticPhone"}},[t("Input",{attrs:{placeholder:"请输入单位固定电话"},model:{value:e.ruleForm.staticPhone,callback:function(r){e.ruleForm.staticPhone=r},expression:"ruleForm.staticPhone"}})],1):e._e(),e._v(" "),"1"===this.role?t("FormItem",{attrs:{label:"产权单位名称",prop:"propertyComName"}},[t("Input",{attrs:{placeholder:"请输入产权单位名称"},model:{value:e.ruleForm.propertyComName,callback:function(r){e.ruleForm.propertyComName=r},expression:"ruleForm.propertyComName"}})],1):e._e(),e._v(" "),"1"===this.role?t("FormItem",{attrs:{label:"产权单位统一社会信用代码",prop:"propertyComCode"}},[t("Input",{attrs:{placeholder:"请输入产权单位统一社会信用代码"},model:{value:e.ruleForm.propertyComCode,callback:function(r){e.ruleForm.propertyComCode=r},expression:"ruleForm.propertyComCode"}})],1):e._e()],1)],1):e._e(),e._v(" "),2==this.author_key||3==this.author_key?t("div",{staticClass:"admin_set"},[t("Form",{ref:"registInfo",attrs:{model:e.ruleForm,"label-width":120,rules:e.registRules}},[t("Row",[t("FormItem",{attrs:{prop:"userName",label:"用户名"}},[t("Poptip",{attrs:{trigger:"focus",placement:"right"}},[t("div",{staticStyle:{"white-space":"normal","font-size":"2px"},slot:"content"},[t("p",[e._v("登录账号，至少5个字符，要求大小写字母和数字")])]),e._v(" "),t("Input",{attrs:{placeholder:"用户名",disabled:""},model:{value:e.ruleForm.userName,callback:function(r){e.ruleForm.userName=r},expression:"ruleForm.userName"}})],1)],1)],1),e._v(" "),t("Row",[t("FormItem",{attrs:{prop:"password",label:"登陆密码"}},[this.codeBox?t("div",{staticStyle:{display:"inline-block",width:"300px"}},[t("Input",{model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1):e._e(),e._v(" "),this.codeBox?t("Button",{attrs:{type:"warning"},on:{click:function(r){e.saveCode()}}},[e._v("保存密码")]):e._e(),e._v(" "),this.codeBox?e._e():t("Button",{on:{click:function(r){e.changeCode()}}},[e._v("修改密码")])],1)],1),e._v(" "),t("Row",[this.changeRegistName?e._e():t("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{prop:"useComAddr",label:"登记机关名称"}},[t("Input",{attrs:{disabled:""},model:{value:e.ruleForm.acceptorAgencyName,callback:function(r){e.ruleForm.acceptorAgencyName=r},expression:"ruleForm.acceptorAgencyName"}})],1)],1),e._v(" "),t("Row",[t("FormItem",{attrs:{prop:"name",label:"登记人员"}},[t("Input",{attrs:{placeholder:"填写负责登记工作的人员姓名"},model:{value:e.ruleForm.name,callback:function(r){e.ruleForm.name=r},expression:"ruleForm.name"}})],1)],1),e._v(" "),t("Row",[t("FormItem",{attrs:{prop:"verifyId",label:"身份证号"}},[t("Input",{attrs:{placeholder:"请填入登记人员的公民身份证号码"},model:{value:e.ruleForm.verifyId,callback:function(r){e.ruleForm.verifyId=r},expression:"ruleForm.verifyId"}})],1)],1),e._v(" "),t("FormItem",{attrs:{prop:"mobilePhone",label:"移动电话号码"}},[t("Row",[t("Input",{attrs:{placeholder:"请填入安全管理员的移动电话号码"},model:{value:e.ruleForm.mobilePhone,callback:function(r){e.ruleForm.mobilePhone=r},expression:"ruleForm.mobilePhone"}})],1)],1)],1)],1):e._e(),e._v(" "),t("Button",{staticStyle:{"font-size":"16px","font-weight":"bold","margin-left":"600px"},attrs:{type:"primary"},on:{click:function(r){e.saveRuleForm()}}},[e._v("保存")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=24.1947e1a294c40205bcb0.js.map
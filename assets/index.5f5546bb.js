import{D as n}from"./index.a8473b00.js";import{B as l}from"./index.9c56aa3a.js";import{I as u}from"./index.28c6219d.js";import{S as s}from"./index.de4a490f.js";import{C as p}from"./index.1149ed7b.js";import{A as m}from"./AppType.7b5e72b6.js";import{d as f}from"./index.9b1139e6.js";import{u as h,a as r,_,b as v,c as d}from"./en-US.0b8219db.js";import{w as k,a as C}from"./utils.d774da76.js";import{n as g}from"./index.e0168b23.js";import"./index.0c749892.js";import"./create.03b31fc7.js";import"./vendor.10bd23ac.js";import"./shared.f8da68a0.js";import"./lock.c245d2f0.js";import"./index.b82c43fb.js";import"./index.5d3634b8.js";import"./Teleport.f02619e5.js";import"./components.e000a0b0.js";import"./zIndex.bcf143f4.js";import"./teleport.cb83deae.js";import"./index.19abdf8c.js";import"./index.4d65e028.js";import"./elements.e5ceb88c.js";var y={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},B={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:i,use:w,pack:b,packs:oe,merge:te}=h(),E=e=>{d(e),w(e)};r("zh-CN",_);r("en-US",v);i("zh-CN",y);i("en-US",B);var D=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"var-dialog-example"},[o("app-type",[e._v(e._s(e.pack.functionCall))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:e.createBasic}},[e._v(e._s(e.pack.basicUsage))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:e.modifyTitle}},[e._v(e._s(e.pack.modifyTitle))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:e.hideButton}},[e._v(e._s(e.pack.hideButton))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:e.createAction}},[e._v(e._s(e.pack.handleUserBehavior))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:e.asyncClose}},[e._v(e._s(e.pack.asyncClose))]),o("app-type",[e._v(e._s(e.pack.componentCall))]),o("var-button",{attrs:{type:"warning",block:""},on:{click:function(t){e.show=!0}}},[e._v(e._s(e.pack.basicUsage))]),o("var-dialog",{attrs:{show:e.show,title:e.pack.title,message:e.pack.message},on:{"update:show":function(t){e.show=t},confirm:e.confirm,cancel:e.cancel,closed:e.closed}}),o("var-button",{attrs:{type:"warning",block:""},on:{click:function(t){e.show1=!0}}},[e._v(e._s(e.pack.asyncClose))]),o("var-dialog",{attrs:{show:e.show1,title:e.pack.title,message:e.pack.message},on:{"update:show":function(t){e.show1=t},"before-close":e.onBeforeClose}}),o("var-button",{attrs:{type:"warning",block:""},on:{click:function(t){e.show2=!0}}},[e._v(e._s(e.pack.customSlots))]),o("var-dialog",{attrs:{show:e.show2},on:{"update:show":function(t){e.show2=t}},scopedSlots:e._u([{key:"title",fn:function(){return[o("var-icon",{attrs:{name:"information",color:"#2979ff"}})]},proxy:!0}])},[o("var-cell",[e._v(e._s(e.pack.message))]),o("var-cell",[e._v(e._s(e.pack.message))]),o("var-cell",[e._v(e._s(e.pack.message))])],1)],1)},A=[];const F={name:"DialogExample",components:{VarDialog:n.Component,VarButton:l,VarIcon:u,VarCell:p,AppType:m},data:()=>({show:!1,show1:!1,show2:!1,value:"",actions:{confirm:()=>s.success("confirm"),cancel:()=>s.error("cancel"),close:()=>s.info("close")}}),computed:{pack(){return b.value}},created(){k(this,E),C(this,f)},methods:{createBasic(){n({message:this.pack.message})},async createAction(){this.actions[await n(this.pack.message)]()},modifyTitle(){n({title:this.pack.title,message:this.pack.message})},hideButton(){n({message:this.pack.message,confirmButton:!1,cancelButton:!1})},onBeforeClose(e,a){s.loading(this.pack.asyncCloseProgress),setTimeout(()=>{this.actions[e](),a()},1e3)},asyncClose(){n({message:this.pack.message,onBeforeClose:this.onBeforeClose})},confirm(){s.success("confirm")},cancel(){s.error("cancel")},closed(){s.info("closed")}}},c={};var U=g(F,D,A,!1,S,"0665b9cc",null,null);function S(e){for(let a in c)this[a]=c[a]}var se=function(){return U.exports}();export{se as default};

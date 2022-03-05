import{C as r}from"./index.a6176d40.js";import{A as o}from"./AppType.7b5e72b6.js";import{d as p}from"./index.9b1139e6.js";import{w as v,a as c}from"./utils.d774da76.js";import{u as i,a as s,_ as d,b as m,c as _}from"./en-US.0b8219db.js";import{n as h}from"./index.e0168b23.js";import"./index.28c6219d.js";import"./shared.f8da68a0.js";import"./elements.e5ceb88c.js";import"./create.03b31fc7.js";import"./vendor.10bd23ac.js";import"./validation.55c99b70.js";import"./index.19abdf8c.js";import"./index.b82c43fb.js";import"./relation.9e421618.js";var f={basicUsage:"\u57FA\u672C\u4F7F\u7528",range:"\u8BBE\u7F6E\u53D6\u503C\u8303\u56F4",step:"\u8BBE\u7F6E\u6B65\u957F",toFixed:"\u4FDD\u7559\u5C0F\u6570",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",lazyChange:"\u5F02\u6B65\u53D8\u66F4",size:"\u8BBE\u7F6E\u5C3A\u5BF8",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u8BF7\u9009\u62E9\u5927\u4E8E5\u7684\u503C"},x={basicUsage:"Basic Usage",range:"Set the value range",step:"Set step",toFixed:"Decimal length",disabled:"Disabled",readonly:"Readonly",lazyChange:"Asynchronous change",size:"Set size",validate:"Validate",validateMessage:"Please select a value greater than 5"};const{add:n,use:g,pack:k,packs:q,merge:G}=i(),y=e=>{_(e),g(e)};s("zh-CN",d);s("en-US",m);n("zh-CN",f);n("en-US",x);var C=function(){var e=this,u=e.$createElement,a=e._self._c||u;return a("div",{staticClass:"var-counter-example"},[a("app-type",[e._v(e._s(e.pack.basicUsage))]),a("var-counter",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("app-type",[e._v(e._s(e.pack.range))]),a("var-counter",{attrs:{min:0,max:5},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),a("app-type",[e._v(e._s(e.pack.step))]),a("var-counter",{attrs:{step:10},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),a("app-type",[e._v(e._s(e.pack.toFixed))]),a("var-counter",{attrs:{"decimal-length":1},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}}),a("app-type",[e._v(e._s(e.pack.size))]),a("var-counter",{attrs:{"input-text-size":"18px","input-width":"50px","button-size":"36px"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}}),a("app-type",[e._v(e._s(e.pack.disabled))]),a("var-counter",{attrs:{disabled:""},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}}),a("app-type",[e._v(e._s(e.pack.readonly))]),a("var-counter",{attrs:{readonly:""},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}}),a("app-type",[e._v(e._s(e.pack.lazyChange))]),a("var-counter",{attrs:{"lazy-change":""},on:{"before-change":e.handleBeforeChange},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}}),a("app-type",[e._v(e._s(e.pack.validate))]),a("var-counter",{attrs:{rules:[function(t){return t>5||e.pack.validateMessage}]},model:{value:e.value9,callback:function(t){e.value9=t},expression:"value9"}}),a("div",{staticClass:"space"})],1)},b=[];const F={name:"CounterExample",components:{VarCounter:r,AppType:o},data:()=>({value:0,value2:0,value3:0,value4:0,value5:0,value6:0,value7:0,value8:0,value9:0}),computed:{pack(){return k.value}},created(){v(this,y),c(this,p)},methods:{handleBeforeChange(e,u){setTimeout(()=>{u(e)},500)}}},l={};var B=h(F,C,b,!1,z,"3b8437e1",null,null);function z(e){for(let u in l)this[u]=l[u]}var H=function(){return B.exports}();export{H as default};

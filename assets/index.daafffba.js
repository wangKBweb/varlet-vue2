import{S as o}from"./index.63397aee.js";import{O as s}from"./index.d7d2604b.js";import{I as i}from"./index.bb2cfd7a.js";import{A as c}from"./AppType.2c39569d.js";import{d as n}from"./index.079ade67.js";import{w as v,a as d}from"./utils.3b864b4e.js";import{u as m,a as p,_ as k,b,c as f}from"./en-US.1fd70412.js";import{n as h}from"./index.43295e45.js";import"./index.167c9c66.js";import"./create.242e0646.js";import"./vendor.4f0eb98f.js";import"./shared.f8da68a0.js";import"./index.e6a3085a.js";import"./Teleport.67437bea.js";import"./elements.9c883ade.js";import"./zIndex.8f867e84.js";import"./index.0d796514.js";import"./teleport.cb83deae.js";import"./index.8d5eec0c.js";import"./index.97a8ef63.js";import"./components.1b7f472c.js";import"./validation.749cd53a.js";import"./relation.9e421618.js";import"./index.324ec675.js";var _={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5355\u9009\u503C\u6821\u9A8C",multipleValidate:"\u591A\u9009\u503C\u6821\u9A8C",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",multiplePlaceholder:"\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879",clearableText:"\u53EF\u6E05\u9664\u6587\u672C",relation:"\u6587\u672C\u5173\u8054\u503C",multiple:"\u591A\u9009",chipMultiple:"\u7EB8\u7247\u98CE\u683C\u7684\u591A\u9009",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",coding:"\u5199\u4EE3\u7801",rest:"\u6478\u9C7C",currentSelect:"\u5F53\u524D\u9009\u62E9\u7684\u662F:",mustSelectRest:"\u60A8\u4E00\u5B9A\u5F97\u9009\u62E9\u6478\u9C7C",mustSelectMoreThan:"\u60A8\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u9009\u9879",offsetY:"\u5782\u76F4\u504F\u79FB",emberSprit:"\u706B\u732B",earthSprit:"\u571F\u732B",stormSpirit:"\u84DD\u732B",voidSpirit:"\u7D2B\u732B"},y={basicUsage:"Basic Usage",plainMode:"Plain Mode",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",multipleValidate:"Multiple Validate",placeholder:"Please select one the options",multiplePlaceholder:"Please select multiple options",clearableText:"Clearable Text",relation:"Label relation value",multiple:"Multiple Selection",chipMultiple:"Multiple choice of paper style",eat:"Eat",sleep:"Sleep",play:"Play game",coding:"Coding",rest:"Rest",currentSelect:"The current selection is:",mustSelectRest:"You must choose to rest",mustSelectMoreThan:"You select at least two options",offsetY:"offsetY",emberSprit:"Ember Sprit",earthSprit:"Earth Sprit",stormSpirit:"Storm Spirit",voidSpirit:"Void Spirit"};const{add:r,use:S,pack:C,packs:Z,merge:ee}=m(),E=e=>{f(e),S(e)};p("zh-CN",k);p("en-US",b);r("zh-CN",_);r("en-US",y);var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"var-select-example"},[a("app-type",[e._v(e._s(e.pack.basicUsage))]),a("div",[a("div",{staticClass:"container"}),a("var-select",{attrs:{placeholder:e.pack.placeholder},on:{focus:e.focus,blur:e.blur},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[a("var-option",{attrs:{label:"\u5403\u996D"}}),a("var-option",{attrs:{label:"\u7761\u89C9"}})],1)],1),a("app-type",[e._v(e._s(e.pack.plainMode))]),a("var-select",{attrs:{hint:!1,line:!1,placeholder:e.pack.placeholder},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}},[a("var-option",{attrs:{label:e.pack.eat}}),a("var-option",{attrs:{label:e.pack.sleep}})],1),a("app-type",[e._v(e._s(e.pack.relation))]),a("var-select",{attrs:{placeholder:e.pack.placeholder},model:{value:e.value6,callback:function(l){e.value6=l},expression:"value6"}},[a("var-option",{attrs:{label:e.pack.eat,value:1}}),a("var-option",{attrs:{label:e.pack.sleep,value:2}})],1),a("div",{staticClass:"relation"},[e._v(e._s(e.pack.currentSelect)+" "+e._s(e.value6))]),a("app-type",[e._v(e._s(e.pack.disabled))]),a("var-select",{attrs:{placeholder:e.pack.placeholder,disabled:""},model:{value:e.value4,callback:function(l){e.value4=l},expression:"value4"}},[a("var-option",{attrs:{label:e.pack.eat}}),a("var-option",{attrs:{label:e.pack.sleep}})],1),a("app-type",[e._v(e._s(e.pack.readonly))]),a("var-select",{attrs:{placeholder:e.pack.placeholder,readonly:""},model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}},[a("var-option",{attrs:{label:e.pack.eat}}),a("var-option",{attrs:{label:e.pack.sleep}})],1),a("app-type",[e._v(e._s(e.pack.clearable))]),a("var-select",{attrs:{placeholder:e.pack.placeholder,clearable:""},model:{value:e.value8,callback:function(l){e.value8=l},expression:"value8"}},[a("var-option",{attrs:{label:e.pack.eat}}),a("var-option",{attrs:{label:e.pack.sleep}})],1),a("app-type",[e._v(e._s(e.pack.displayIcon))]),a("var-select",{attrs:{placeholder:e.pack.placeholder},scopedSlots:e._u([{key:"prepend-icon",fn:function(){return[a("var-icon",{staticClass:"prepend-icon",attrs:{name:"plus"}})]},proxy:!0},{key:"append-icon",fn:function(){return[a("var-icon",{staticClass:"append-icon",attrs:{name:"minus"}})]},proxy:!0},{key:"default",fn:function(){return[a("var-option",{attrs:{label:e.pack.eat}}),a("var-option",{attrs:{label:e.pack.sleep}})]},proxy:!0}]),model:{value:e.value11,callback:function(l){e.value11=l},expression:"value11"}}),a("app-type",[e._v(e._s(e.pack.multiple))]),a("var-select",{attrs:{placeholder:e.pack.multiplePlaceholder,multiple:""},model:{value:e.value5,callback:function(l){e.value5=l},expression:"value5"}},[a("var-option",{attrs:{label:e.pack.eat}}),a("var-option",{attrs:{label:e.pack.sleep}}),a("var-option",{attrs:{label:e.pack.play}}),a("var-option",{attrs:{label:e.pack.coding}})],1),a("app-type",[e._v(e._s(e.pack.chipMultiple))]),a("var-select",{attrs:{placeholder:e.pack.multiplePlaceholder,chip:"",multiple:""},model:{value:e.value7,callback:function(l){e.value7=l},expression:"value7"}},[a("var-option",{attrs:{label:e.pack.eat}}),a("var-option",{attrs:{label:e.pack.sleep}}),a("var-option",{attrs:{label:e.pack.play}}),a("var-option",{attrs:{label:e.pack.coding}})],1),a("app-type",[e._v(e._s(e.pack.validate))]),a("var-select",{attrs:{placeholder:e.pack.placeholder,rules:[function(l){return l===e.pack.rest||e.pack.mustSelectRest}]},model:{value:e.value9,callback:function(l){e.value9=l},expression:"value9"}},[a("var-option",{attrs:{label:e.pack.eat}}),a("var-option",{attrs:{label:e.pack.sleep}}),a("var-option",{attrs:{label:e.pack.rest}})],1),a("app-type",[e._v(e._s(e.pack.multipleValidate))]),a("var-select",{attrs:{placeholder:e.pack.multiplePlaceholder,multiple:"",rules:[function(l){return l.length>=2||e.pack.mustSelectMoreThan}]},model:{value:e.value10,callback:function(l){e.value10=l},expression:"value10"}},[a("var-option",{attrs:{label:e.pack.eat}}),a("var-option",{attrs:{label:e.pack.sleep}}),a("var-option",{attrs:{label:e.pack.play}}),a("var-option",{attrs:{label:e.pack.coding}})],1),a("app-type",[e._v(e._s(e.pack.offsetY))]),a("var-select",{attrs:{placeholder:e.pack.placeholder,"offset-y":-138},model:{value:e.value12,callback:function(l){e.value12=l},expression:"value12"}},[a("var-option",{attrs:{label:e.pack.emberSprit}}),a("var-option",{attrs:{label:e.pack.stormSpirit}}),a("var-option",{attrs:{label:e.pack.voidSpirit}}),a("var-option",{attrs:{label:e.pack.earthSprit}})],1),a("div",{staticClass:"space"})],1)},F=[];const A={name:"SelectExample",components:{VarSelect:o,VarOption:s,VarIcon:i,AppType:c},data:()=>({value:void 0,value2:void 0,value3:void 0,value4:void 0,value5:[],value6:void 0,value7:[],value8:void 0,value9:void 0,value10:[],value11:void 0,value12:void 0}),computed:{pack(){return C.value}},created(){v(this,e=>{E(e),this.value=void 0,this.value2=void 0,this.value3=void 0,this.value4=void 0,this.value6=void 0,this.value5=[],this.value7=[],this.value8=void 0,this.value9=void 0,this.value10=[],this.value11=void 0,this.value12=void 0}),d(this,n)},methods:{blur(){console.log("blur")},focus(){console.log("focus")}}},u={};var g=h(A,x,F,!1,M,"2982810e",null,null);function M(e){for(let t in u)this[t]=u[t]}var ae=function(){return g.exports}();export{ae as default};

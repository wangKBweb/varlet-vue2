import{U as p}from"./index.837757c2.js";import{B as c}from"./index.9ad4cc9c.js";import{S as l}from"./index.b21cdd0a.js";import{D as n}from"./index.837f9fe6.js";import{A as v}from"./AppType.2c39569d.js";import{d}from"./index.079ade67.js";import{w as f,a as m}from"./utils.3b864b4e.js";import{u as h,a as i,_,b as g,c as b}from"./en-US.1fd70412.js";import{n as F}from"./index.43295e45.js";import"./validation.749cd53a.js";import"./create.242e0646.js";import"./vendor.4f0eb98f.js";import"./shared.f8da68a0.js";import"./index.bb2cfd7a.js";import"./elements.9c883ade.js";import"./index.89a8aba0.js";import"./lock.983a82b4.js";import"./index.0d796514.js";import"./index.e6a3085a.js";import"./Teleport.67437bea.js";import"./components.1b7f472c.js";import"./zIndex.8f867e84.js";import"./teleport.cb83deae.js";import"./index.8d5eec0c.js";import"./index.82833775.js";import"./index.c86f29d1.js";import"./relation.9e421618.js";import"./index.25498f8a.js";import"./index.c1f26a21.js";var k={basicUsage:"\u57FA\u672C\u4F7F\u7528",preview:"\u6587\u4EF6\u9884\u89C8",state:"\u4E0A\u4F20\u72B6\u6001",maxlength:"\u6587\u4EF6\u6570\u91CF\u9650\u5236",maxsize:"\u6587\u4EF6\u5927\u5C0F\u9650\u5236",beforeRead:"\u4E0A\u4F20\u9884\u5904\u7406",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u5B58\u5728\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6",style:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",upload:"\u4E0A\u4F20",beforeRemove:"\u5220\u9664\u524D\u5904\u7406",removeTitle:"\u662F\u5426\u5220\u9664?",removeMessage:"\u5220\u9664\u540E\u65E0\u6CD5\u64A4\u56DE",fileSizeExceedsLimit:"\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236",fileLessThen:"\u6587\u4EF6\u5C0F\u4E8E1M\uFF0C\u4E0A\u4F20\u6210\u529F",fileLargeThen:"\u6587\u4EF6\u5927\u4E8E1M\uFF0C\u4E0D\u80FD\u4E0A\u4F20"},x={basicUsage:"Basic Usage",preview:"File Preview",state:"Upload State",maxlength:"File Maxlength",maxsize:"File Size Limit",beforeRead:"Upload Preprocessing",disabled:"Disabled",readonly:"Readonly",validate:"Validate",validateMessage:"There is a file that failed to upload",style:"Customize upload styles",upload:"Upload",beforeRemove:"Remove Preprocessing",removeTitle:"Delete or not?",removeMessage:"Cannot be withdrawn after deletion",fileSizeExceedsLimit:"file size exceeds limit",fileLessThen:"the file is less than 1M, the upload is successful",fileLargeThen:"the file is larger than 1M and cannot be uploaded"};const{add:u,use:E,pack:y,packs:ie,merge:ue}=h(),A=e=>{b(e),E(e)};i("zh-CN",_);i("en-US",g);u("zh-CN",k);u("en-US",x);var C=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"var-uploader-example"},[a("app-type",[e._v(e._s(e.pack.basicUsage))]),a("var-uploader",{on:{"after-read":e.handleAfterRead},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),a("app-type",[e._v(e._s(e.pack.preview))]),a("var-uploader",{model:{value:e.files2,callback:function(t){e.files2=t},expression:"files2"}}),a("app-type",[e._v(e._s(e.pack.state))]),a("var-uploader",{on:{"after-read":e.handleAfterRead2},model:{value:e.files3,callback:function(t){e.files3=t},expression:"files3"}}),a("app-type",[e._v(e._s(e.pack.maxlength))]),a("var-uploader",{attrs:{maxlength:1},model:{value:e.files4,callback:function(t){e.files4=t},expression:"files4"}}),a("app-type",[e._v(e._s(e.pack.maxsize))]),a("var-uploader",{attrs:{maxsize:1024},on:{oversize:e.handleOversize},model:{value:e.files5,callback:function(t){e.files5=t},expression:"files5"}}),a("app-type",[e._v(e._s(e.pack.beforeRead))]),a("var-uploader",{on:{"before-read":e.handleBeforeRead},model:{value:e.files7,callback:function(t){e.files7=t},expression:"files7"}}),a("app-type",[e._v(e._s(e.pack.disabled))]),a("var-uploader",{attrs:{disabled:""},model:{value:e.files8,callback:function(t){e.files8=t},expression:"files8"}}),a("app-type",[e._v(e._s(e.pack.readonly))]),a("var-uploader",{attrs:{readonly:""},model:{value:e.files9,callback:function(t){e.files9=t},expression:"files9"}}),a("app-type",[e._v(e._s(e.pack.beforeRemove))]),a("var-uploader",{on:{"before-remove":e.handleBeforeRemove},model:{value:e.files11,callback:function(t){e.files11=t},expression:"files11"}}),a("app-type",[e._v(e._s(e.pack.style))]),a("var-uploader",{model:{value:e.files6,callback:function(t){e.files6=t},expression:"files6"}},[a("var-button",{attrs:{type:"primary"}},[e._v(e._s(e.pack.upload))])],1),a("app-type",[e._v(e._s(e.pack.validate))]),a("var-uploader",{attrs:{rules:[function(t,o){return o.getError(t).length===0||e.pack.validateMessage}]},model:{value:e.files10,callback:function(t){e.files10=t},expression:"files10"}}),a("div",{staticClass:"space"})],1)},z=[];const R={name:"UploaderExample",components:{VarUploader:p,VarButton:c,AppType:v},data:()=>({files:[],files2:[{url:"https://varlet-vue2.vercel.app/cat.jpg",cover:"https://varlet-vue2.vercel.app/cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"https://varlet-vue2.vercel.app/cover.jpg"}],files3:[{url:"https://varlet-vue2.vercel.app/cat.jpg",cover:"https://varlet-vue2.vercel.app/cat.jpg",state:"loading"},{url:"https://varlet-vue2.vercel.app/cat.jpg",cover:"https://varlet-vue2.vercel.app/cat.jpg",state:"success"},{url:"https://varlet-vue2.vercel.app/cat.jpg",cover:"https://varlet-vue2.vercel.app/cat.jpg",state:"error"}],files4:[],files5:[],files6:[],files7:[],files8:[],files9:[],files10:[{url:"https://varlet-vue2.vercel.app/cat.jpg",cover:"https://varlet-vue2.vercel.app/cat.jpg",state:"error"}],files11:[{url:"https://varlet-vue2.vercel.app/cat.jpg",cover:"https://varlet-vue2.vercel.app/cat.jpg"}]}),computed:{pack(){return y.value}},created(){f(this,A),m(this,d)},methods:{handleAfterRead(e){console.log(e)},handleAfterRead2(e){e.state="loading",setTimeout(()=>{e.state="success"},1e3)},handleOversize(){l.warning(this.pack.fileSizeExceedsLimit)},handleBeforeRead(e){return e.file.size<=1*1024*1024?(l.success(this.pack.fileLessThen),!0):(l.warning(this.pack.fileLargeThen),!1)},async handleBeforeRemove(){return await n({title:this.pack.removeTitle,message:this.pack.removeMessage})==="confirm"}}},r={};var B=F(R,C,z,!1,w,"496748d9",null,null);function w(e){for(let s in r)this[s]=r[s]}var oe=function(){return B.exports}();export{oe as default};

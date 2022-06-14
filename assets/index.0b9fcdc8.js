import{A as $}from"./AppType.2c39569d.js";import{e as d,i as w,d as A}from"./shared.f8da68a0.js";import{b as c}from"./elements.9c883ade.js";import{d as C}from"./create.242e0646.js";import"./index.8d5eec0c.js";import{B as k}from"./index.9ad4cc9c.js";import{d as j}from"./index.079ade67.js";import{u as F,a as f,_ as z,b as N,c as V}from"./en-US.1fd70412.js";import{w as U,a as E}from"./utils.3b864b4e.js";import{n as D}from"./index.43295e45.js";import"./vendor.4f0eb98f.js";import"./index.0d796514.js";import"./index.c1f26a21.js";import"./components.1b7f472c.js";const b=t=>["mini","small","normal","large"].includes(t),I=t=>b(t)||d(t)||w(t)||A(t),L=t=>["start","end","center","space-around","space-between"].includes(t),M={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:I},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:L},inline:{type:Boolean,default:!1}};const R={mini:[4,4],small:[6,6],normal:[8,12],large:[12,20]},P=(t,n)=>n?R[t]:d(t)?t.map(c):[c(t),c(t)];var u=C({name:"VarSpace",props:M,render(){var m;const t=arguments[0],{inline:n,justify:e,align:B,wrap:g,direction:s,size:l}=this,v=(m=this.slots())!=null?m:[],i=v.length-1,x=b(l),[a,o]=P(l,x),S=v.map((h,p)=>{let r="0";return s==="row"&&(e==="start"||e==="center"||e==="end"?p!==i?r=`${a/2}px ${o}px ${a/2}px 0`:r=`${a/2}px 0`:e==="space-around"?r=`${a/2}px ${o/2}px`:e==="space-between"&&(p===0?r=`${a/2}px ${o/2}px ${a/2}px 0`:p===i?r=`${a/2}px 0 ${a/2}px ${o/2}px`:r=`${a/2}px ${o/2}px`)),s==="column"&&p!==i&&(r=`0 0 ${a}px 0`),t("div",{style:{margin:r}},[h])});return t("div",{class:["var-space","var--box",n?"var-space--inline":null],style:{flexDirection:s,justifyContent:e,alignItems:B,flexWrap:g?"wrap":"nowrap",margin:s==="row"?`-${a/2}px 0`:void 0}},[S])}});u.install=function(t){t.component(u.name,u)};var T={baseUse:"\u57FA\u672C\u7528\u6CD5",vertical:"\u5782\u76F4",space:"\u95F4\u9699",rightAlign:"\u9760\u53F3",around:"\u73AF\u7ED5",center:"\u5C45\u4E2D",between:"\u4E24\u7AEF\u5BF9\u9F50"},W={baseUse:"Basic use",vertical:"Vertical",space:"Space Size",rightAlign:"Right Align",around:"Space Around",center:"Align Center",between:"Space Between"};const{add:y,use:q,pack:G,packs:vt,merge:mt}=F(),H=t=>{V(t),q(t)};f("zh-CN",z);f("en-US",N);y("zh-CN",T);y("en-US",W);var J=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"var-space-example"},[e("app-type",[t._v(t._s(t.pack.baseUse))]),e("var-space",[e("var-button",[t._v("Button1")]),e("var-button",[t._v("Button2")]),e("var-button",[t._v("Button3")])],1),e("app-type",[t._v(t._s(t.pack.vertical))]),e("var-space",{attrs:{direction:"column",size:"large"}},[e("var-button",[t._v("Button1")]),e("var-button",[t._v("Button2")]),e("var-button",[t._v("Button3")])],1),e("app-type",[t._v(t._s(t.pack.space))]),e("var-space",{attrs:{size:[20,20]}},[e("var-button",[t._v("Button1")]),e("var-button",[t._v("Button2")]),e("var-button",[t._v("Button3")]),e("var-button",[t._v("Button4")]),e("var-button",[t._v("Button5")]),e("var-button",[t._v("Button6")])],1),e("app-type",[t._v(t._s(t.pack.rightAlign))]),e("var-space",{attrs:{justify:"end"}},[e("var-button",[t._v("Button1")]),e("var-button",[t._v("Button2")])],1),e("app-type",[t._v(t._s(t.pack.around))]),e("var-space",{attrs:{justify:"space-around"}},[e("var-button",[t._v("Button1")]),e("var-button",[t._v("Button2")])],1),e("app-type",[t._v(t._s(t.pack.center))]),e("var-space",{attrs:{justify:"center"}},[e("var-button",[t._v("Button1")]),e("var-button",[t._v("Button2")])],1),e("app-type",[t._v(t._s(t.pack.between))]),e("var-space",{attrs:{justify:"space-between"}},[e("var-button",[t._v("Button1")]),e("var-button",[t._v("Button2")])],1)],1)},K=[];const O={name:"VarSpaceExample",components:{VarSpace:u,VarButton:k,AppType:$},computed:{pack(){return G.value}},created(){U(this,H),E(this,j)}},_={};var Q=D(O,J,K,!1,X,null,null,null);function X(t){for(let n in _)this[n]=_[n]}var _t=function(){return Q.exports}();export{_t as default};

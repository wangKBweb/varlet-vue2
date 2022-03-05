import{A as s}from"./AppType.7b5e72b6.js";import{I as c}from"./index.28c6219d.js";import{C as i}from"./index.1149ed7b.js";import{d as p}from"./index.9b1139e6.js";import{u,a as o,_ as l,b as _,c as v}from"./en-US.0b8219db.js";import{w as m,a as d}from"./utils.d774da76.js";import{n as f}from"./index.e0168b23.js";import"./shared.f8da68a0.js";import"./elements.e5ceb88c.js";import"./create.03b31fc7.js";import"./vendor.10bd23ac.js";var h={basicUsage:"\u57FA\u672C\u4F7F\u7528",showIcon:"\u663E\u793A\u56FE\u6807",showDesc:"\u663E\u793A\u63CF\u8FF0",showBorder:"\u663E\u793A\u8FB9\u6846",content:"\u8FD9\u662F\u5355\u5143\u683C",description:"\u63CF\u8FF0"},k={basicUsage:"Basic Usage",showIcon:"Show Icon",showDesc:"Show Description",showBorder:"Show Border",content:"This is Cell",description:"Description"};const{add:n,use:C,pack:w,packs:T,merge:V}=u(),F=e=>{v(e),C(e)};o("zh-CN",l);o("en-US",_);n("zh-CN",h);n("en-US",k);var x=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"var-cell-example"},[t("div",[t("app-type",[e._v(e._s(e.pack.basicUsage))]),t("var-cell",[e._v(" "+e._s(e.pack.content)+" ")]),t("var-cell",[e._v(" "+e._s(e.pack.content)+" ")])],1),t("div",[t("app-type",[e._v(e._s(e.pack.showIcon))]),t("var-cell",{attrs:{icon:"fire",title:e.pack.content},scopedSlots:e._u([{key:"extra",fn:function(){return[t("var-icon",{attrs:{name:"information"}})]},proxy:!0}])}),t("var-cell",{attrs:{icon:"fire",title:e.pack.content},scopedSlots:e._u([{key:"extra",fn:function(){return[t("var-icon",{attrs:{name:"information"}})]},proxy:!0}])})],1),t("div",[t("app-type",[e._v(e._s(e.pack.showDesc))]),t("var-cell",{attrs:{icon:"fire",title:e.pack.content,desc:e.pack.description},scopedSlots:e._u([{key:"extra",fn:function(){return[t("var-icon",{attrs:{name:"information"}})]},proxy:!0}])}),t("var-cell",{attrs:{title:e.pack.content,desc:e.pack.description}})],1),t("div",[t("app-type",[e._v(e._s(e.pack.showBorder))]),t("var-cell",{attrs:{border:""}},[e._v(" "+e._s(e.pack.content)+" ")]),t("var-cell",{attrs:{border:""}},[e._v(" "+e._s(e.pack.content)+" ")])],1)])},y=[];const S={name:"CellExample",components:{VarIcon:c,VarCell:i,AppType:s},computed:{pack(){return w.value}},created(){m(this,F),d(this,p)}},a={};var U=f(S,x,y,!1,D,null,null,null);function D(e){for(let r in a)this[r]=a[r]}var j=function(){return U.exports}();export{j as default};

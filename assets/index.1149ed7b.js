import{I as a}from"./index.28c6219d.js";import{d as c}from"./create.03b31fc7.js";import{n as r}from"./index.e0168b23.js";const i={title:{type:[Number,String]},icon:{type:String},desc:{type:String},border:{type:Boolean,default:!1},iconClass:{type:String},titleClass:{type:String},descClass:{type:String},extraClass:{type:String}};var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"var-cell",class:[t.border?"var-cell--border":null],on:{click:t.onClickCell}},[t.hasSlots("icon")||t.icon?e("div",{staticClass:"var-cell__icon",class:[t.iconClass?t.iconClass:null]},[t._t("icon",function(){return[e("var-icon",{staticClass:"var--flex",attrs:{name:t.icon}})]})],2):t._e(),e("div",{staticClass:"var-cell__content"},[e("div",{staticClass:"var-cell__title",class:[t.titleClass?t.titleClass:null]},[t._t("default",function(){return[t._v(t._s(t.title))]})],2),t.hasSlots("desc")||t.desc?e("div",{staticClass:"var-cell__desc",class:[t.descClass?t.descClass:null]},[t._t("desc",function(){return[t._v(" "+t._s(t.desc)+" ")]})],2):t._e()]),t.hasSlots("extra")?e("div",{staticClass:"var-cell__extra",class:[t.extraClass?t.extraClass:null]},[t._t("extra")],2):t._e()])},_=[];const v=c({name:"VarCell",components:{VarIcon:a},props:i,methods:{onClickCell(){var t,s;(s=(t=this.getListeners())==null?void 0:t.onClick)==null||s.call(t)}}}),n={};var C=r(v,o,_,!1,u,null,null,null);function u(t){for(let s in n)this[s]=n[s]}var l=function(){return C.exports}();l.install=function(t){t.component(l.name,l)};export{l as C};

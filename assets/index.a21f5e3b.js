import{d as a}from"./create.03b31fc7.js";import{f as l}from"./shared.f8da68a0.js";import{t as c}from"./elements.e5ceb88c.js";import{c as p}from"./relation.9e421618.js";import{n as d}from"./index.e0168b23.js";const f={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},onClick:{type:Function},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]}};var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"var-col var--box",class:[t.span?"var-col--span-"+t.span:null,t.offset?"var-col--offset-"+t.offset:null].concat(t.getSize("xs",t.xs),t.getSize("sm",t.sm),t.getSize("md",t.md),t.getSize("lg",t.lg),t.getSize("xl",t.xl)),style:{paddingLeft:t.toSizeUnit(t.padding.left),paddingRight:t.toSizeUnit(t.padding.right)},on:{click:t.handleClick}},[t._t("default")],2)},u=[];const g=a({name:"VarCol",mixins:[p("row",{childrenKey:"cols"})],props:f,data:()=>({padding:{left:0,right:0},toSizeUnit:c}),watch:{span:{handler(){this.row.computePadding()},immediate:!0}},methods:{handleClick(t){const{getListeners:e}=this,{onClick:n}=e();!n||n(t)},setPadding(t){this.padding=t},getSize(t,e){const n=[];if(!e)return n;if(l(e)){const{span:r,offset:s}=e;r&&n.push(`var-col--span-${t}-${r}`),s&&n.push(`var-col--offset-${t}-${s}`)}else n.push(`var-col--span-${t}-${e}`);return n}}}),o={};var _=d(g,m,u,!1,v,null,null,null);function v(t){for(let e in o)this[e]=o[e]}var i=function(){return _.exports}();i.install=function(t){t.component(i.name,i)};export{i as C};

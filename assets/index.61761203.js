import{S as x}from"./index.135e3e10.js";import{d as p}from"./create.03b31fc7.js";import{c as y,a as k}from"./relation.9e421618.js";import{n as c}from"./index.e0168b23.js";import{t as d,f as b,l as g}from"./shared.f8da68a0.js";import{f as h,c as C,r as T,d as $,s as E,n as S}from"./elements.e5ceb88c.js";import{C as w}from"./index.1149ed7b.js";import{d as B}from"./index.9b1139e6.js";import{u as I,a as v,_ as A,b as z,c as L}from"./en-US.0b8219db.js";import{w as M,a as N}from"./utils.d774da76.js";import"./vendor.10bd23ac.js";import"./index.28c6219d.js";const O={index:{type:[Number,String]}};var V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s(e.sticky?"var-sticky":"transition",{ref:"anchorEl",tag:"component",attrs:{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode}},[s("div",e._b({staticClass:"var-index-anchor"},"div",e.$attrs,!1),[e._t("default",function(){return[e._v(e._s(e.name))]})],2)])},D=[];const F=p({name:"VarIndexAnchor",mixins:[y("indexBar",{indexKey:"localIndex",parentKey:"indexBar",childrenKey:"indexAnchors"})],components:{VarSticky:x},inheritAttrs:!1,props:O,data:()=>({ownTop:0,disabled:!1}),computed:{name(){return this.index},active(){return this.indexBar.active},sticky(){return this.indexBar.sticky},cssMode(){return this.indexBar.cssMode},stickyOffsetTop(){return this.indexBar.stickyOffsetTop},zIndex(){return this.indexBar.zIndex}},methods:{setOwnTop(){const{$refs:{anchorEl:e}}=this;!e||(this.ownTop=e.$el?e.$el.offsetTop:e.offsetTop)},setDisabled(e){this.disabled=e}}}),u={};var j=c(F,V,D,!1,K,null,null,null);function K(e){for(let t in u)this[t]=u[t]}var R=function(){return j.exports}();const U={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:Number,default:0},cssMode:{type:Boolean,default:!1},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0}};var P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"barEl",staticClass:"var-index-bar"},[e._t("default"),s("ul",{staticClass:"var-index-bar__anchor-list",style:{zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"}},e._l(e.anchorNameList,function(n){return s("li",{key:n,staticClass:"var-index-bar__anchor-item",class:{"var-index-bar__anchor-item--active":e.active===n},style:{color:e.active===n&&e.highlightColor?e.highlightColor:""},on:{click:function(r){return e.anchorClick(n)}}},[e._v(" "+e._s(n)+" ")])}),0)],2)},q=[];const H=p({name:"VarIndexBar",mixins:[k("indexBar",{childrenKey:"indexAnchors"})],props:U,data:()=>({scrollEl:null,clickedName:"",scroller:null,anchorNameList:[],active:null}),async mounted(){var e;await h(),this.scroller=C(this.$refs.barEl),this.scrollEl=this.scroller===window?this.scroller.document.documentElement:this.scroller,(e=this.scroller)==null||e.addEventListener("scroll",this.handleScroll)},beforeDestroy(){var e;(e=this.scroller)==null||e.removeEventListener("scroll",this.handleScroll)},watch:{async indexAnchors(e){await h(),e.forEach(({name:t,setOwnTop:s})=>{t&&this.anchorNameList.push(t),s()})}},methods:{scrollTo(e){T(()=>this.anchorClick(e,!0))},toNumber:d,emitEvent(e){var s,n;const t=b(e)?e.name:e;t===this.active||t===void 0||(this.active=t,(n=(s=this.getListeners()).onChange)==null||n.call(s,t))},handleScroll(){const{scrollTop:e,scrollHeight:t}=this.scrollEl,{offsetTop:s}=this.$refs.barEl;this.indexAnchors.forEach((n,r)=>{const o=n.ownTop,i=e-o+this.stickyOffsetTop-s,l=r===this.indexAnchors.length-1?t:this.indexAnchors[r+1].ownTop-n.ownTop;i>=0&&i<l&&!this.clickedName&&(r&&!this.cssMode&&this.indexAnchors[r-1].setDisabled(!0),n.setDisabled(!1),this.emitEvent(n))})},async anchorClick(e,t){var o,i;if(t&&((i=(o=this.getListeners()).onClick)==null||i.call(o,e)),e===this.active)return;const s=this.indexAnchors.find(({name:l})=>e===l);if(!s)return;const n=s.ownTop-this.stickyOffsetTop+this.$refs.barEl.offsetTop,r=$(this.scrollEl);this.clickedName=e,this.emitEvent(e),await E(this.scrollEl,{left:r,top:n,animation:g,duration:d(this.duration)}),S(()=>{this.clickedName=""})}}}),f={};var G=c(H,P,q,!1,J,null,null,null);function J(e){for(let t in f)this[t]=f[t]}var a=function(){return G.exports}();a.install=function(e){e.component(a.name,a)};var Q={title:"\u6807\u9898",text:"\u6587\u672C"},W={title:"Title",text:"Text"};const{add:m,use:X,pack:Y,packs:me,merge:xe}=I(),Z=e=>{L(e),X(e)};v("zh-CN",A);v("en-US",z);m("zh-CN",Q);m("en-US",W);var ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("var-index-bar",{attrs:{duration:"300","sticky-offset-top":54},on:{change:e.change}},e._l(e.list,function(n){return s("div",{key:n},[s("var-index-anchor",{attrs:{index:n,class:"var-index-anchor__example",style:{background:e.bgColor,color:e.color}}},[e._v(" "+e._s(e.pack.title)+" "+e._s(n)+" ")]),s("var-cell",[e._v(e._s(n)+" "+e._s(e.pack.text))]),s("var-cell",[e._v(e._s(n)+" "+e._s(e.pack.text))])],1)}),0)},te=[];const se={name:"IndexBarExample",components:{VarIndexBar:a,VarIndexAnchor:R,VarCell:w},data:()=>({list:[],bgColor:"#e7edf7",color:"#2e67ba"}),computed:{pack(){return Y.value}},created(){M(this,Z),N(this,B,e=>{this.bgColor=e==="darkThemes"?"rgb(41, 42, 45)":"#e7edf7",this.color=e==="darkThemes"?"#3980e8":"#2e67ba"})},mounted(){for(let e=0;e<26;e++)this.list.push(String.fromCharCode(65+e))},methods:{change(e){console.log(e)}}},_={};var ne=c(se,ee,te,!1,re,null,null,null);function re(e){for(let t in _)this[t]=_[t]}var ye=function(){return ne.exports}();export{ye as default};

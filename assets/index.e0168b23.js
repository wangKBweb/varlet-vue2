var G=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var $=(e,t,o)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))Z.call(t,o)&&$(e,o,t[o]);if(L)for(var o of L(t))J.call(t,o)&&$(e,o,t[o]);return e},b=(e,t)=>K(e,Q(t));import{a as U,g as ee}from"./vendor.10bd23ac.js";const te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};te();const oe="Varlet",ne="var",re="localhost",ie=8080,se="VARLET",ae="VARLET_THEMES",ce="https://varlet.gitee.io/varlet-ui/varlet_icon.png",le="zh-CN",de={style:null},ue={baidu:"https://hm.baidu.com/hm.js?5c628ce58967c90ff4dd9c8803d930fa"},pe=!0,he={menu:[{text:{"zh-CN":"\u5F00\u53D1\u6307\u5357","en-US":"Developer guide"},type:1},{text:{"zh-CN":"\u57FA\u672C\u4ECB\u7ECD","en-US":"Basic Introduce"},doc:"home",type:3},{text:{"zh-CN":"\u5FEB\u901F\u5F00\u59CB","en-US":"Quickstart"},doc:"quickstart",type:3},{text:{"zh-CN":"\u6309\u9700\u5F15\u5165","en-US":"Import on demand"},doc:"importOnDemand",type:3},{text:{"zh-CN":"\u6697\u9ED1\u6A21\u5F0F","en-US":"Dark Mode"},doc:"themes",type:2},{text:{"zh-CN":"\u670D\u52A1\u7AEF\u6E32\u67D3","en-US":"Server side rendering"},doc:"serverSideRendering",type:3},{text:{"zh-CN":"\u6D4F\u89C8\u5668\u9002\u914D","en-US":"Browser Adaptation"},doc:"browserAdaptation",type:3},{text:{"zh-CN":"\u56FD\u9645\u5316","en-US":"Locale"},doc:"locale",type:3},{text:{"zh-CN":"\u5F00\u53D1\u5DE5\u5177\u652F\u6301","en-US":"IDE Code Support"},doc:"ide",type:3},{text:{"zh-CN":"\u7EC4\u4EF6\u5E93\u5FEB\u901F\u6210\u578B\u5DE5\u5177","en-US":"Components Library Tools"},doc:"cli",type:3},{text:{"zh-CN":"\u5F00\u6E90\u6307\u5357","en-US":"Open Source Guide"},doc:"openSourceGuide",type:3},{text:{"zh-CN":"\u57FA\u7840\u7EC4\u4EF6","en-US":"Basic Components"},type:1},{text:{"zh-CN":"StyleProvider \u6837\u5F0F\u5B9A\u5236","en-US":"StyleProvider"},doc:"style-provider",type:2},{text:{"zh-CN":"Button \u6309\u94AE","en-US":"Button"},doc:"button",type:2},{text:{"zh-CN":"Cell \u5355\u5143\u683C","en-US":"Cell"},doc:"cell",type:2},{text:{"zh-CN":"Icon \u56FE\u6807","en-US":"Icon"},doc:"icon",type:2},{text:{"zh-CN":"Image \u56FE\u7247","en-US":"Image"},doc:"image",type:2},{text:{"zh-CN":"Loading \u52A0\u8F7D","en-US":"Loading"},doc:"loading",type:2},{text:{"zh-CN":"Chip \u7EB8\u7247","en-US":"Chip"},doc:"chip",type:2},{text:{"zh-CN":"Badge \u5FBD\u6807","en-US":"Badge"},doc:"badge",type:2},{text:{"zh-CN":"Elevation \u6D77\u62D4\u6548\u679C","en-US":"Elevation"},doc:"styles",type:2},{text:{"zh-CN":"\u5C55\u793A\u7EC4\u4EF6","en-US":"Display Components"},type:1},{text:{"zh-CN":"Skeleton \u9AA8\u67B6\u5C4F","en-US":"Skeleton"},doc:"skeleton",type:2},{text:{"zh-CN":"Collapse \u62D3\u5C55\u9762\u677F","en-US":"Collapse"},doc:"collapse",type:2},{text:{"zh-CN":"Space \u95F4\u9694","en-US":"Space"},doc:"space",type:2},{text:{"zh-CN":"Layout \u5E03\u5C40","en-US":"Layout"},doc:"row",type:2},{text:{"zh-CN":"Sticky \u7C98\u6027\u5E03\u5C40","en-US":"Sticky"},doc:"sticky",type:2},{text:{"zh-CN":"Progress \u8FDB\u5EA6\u6761","en-US":"Progress"},doc:"progress",type:2},{text:{"zh-CN":"List \u65E0\u9650\u6EDA\u52A8\u5217\u8868","en-US":"List"},doc:"list",type:2},{text:{"zh-CN":"Swipe \u8F6E\u64AD","en-US":"Swipe"},doc:"swipe",type:2},{text:{"zh-CN":"Steps \u6B65\u9AA4\u6761","en-US":"Steps"},doc:"steps",type:2},{text:{"zh-CN":"ImagePreview \u56FE\u7247\u9884\u89C8","en-US":"ImagePreview"},doc:"image-preview",type:2},{text:{"zh-CN":"Card \u5361\u7247","en-US":"Card"},doc:"card",type:2},{text:{"zh-CN":"Divider \u5206\u5272\u7EBF","en-US":"Divider"},doc:"divider",type:2},{text:{"zh-CN":"Table \u8868\u683C","en-US":"Table"},doc:"table",type:2},{text:{"zh-CN":"\u5BFC\u822A\u7EC4\u4EF6","en-US":"Navigation Components"},type:1},{text:{"zh-CN":"Tabs \u9009\u9879\u5361","en-US":"Tabs"},doc:"tabs",type:2},{text:{"zh-CN":"IndexBar \u7D22\u5F15\u680F","en-US":"IndexBar"},doc:"index-bar",type:2},{text:{"zh-CN":"AppBar \u5BFC\u822A\u680F","en-US":"AppBar"},doc:"app-bar",type:2},{text:{"zh-CN":"\u529F\u80FD\u6307\u4EE4","en-US":"Functional Directives"},type:1},{text:{"zh-CN":"Ripple \u6C34\u6CE2\u6307\u4EE4","en-US":"Ripple"},doc:"ripple",type:2},{text:{"zh-CN":"Lazy \u61D2\u52A0\u8F7D","en-US":"Lazy"},doc:"lazy",type:2},{text:{"zh-CN":"\u53CD\u9988\u7EC4\u4EF6","en-US":"Action Components"},type:1},{text:{"zh-CN":"Snackbar \u6D88\u606F\u6761","en-US":"Snackbar"},doc:"snackbar",type:2},{text:{"zh-CN":"ActionSheet \u52A8\u4F5C\u9762\u677F","en-US":"ActionSheet"},doc:"action-sheet",type:2},{text:{"zh-CN":"Dialog \u5BF9\u8BDD\u6846","en-US":"Dialog"},doc:"dialog",type:2},{text:{"zh-CN":"PullRefresh \u4E0B\u62C9\u5237\u65B0","en-US":"PullRefresh"},doc:"pull-refresh",type:2},{text:{"zh-CN":"Popup \u5F39\u51FA\u5C42","en-US":"Popup"},doc:"popup",type:2},{text:{"zh-CN":"Pagination \u5206\u9875","en-US":"Pagination"},doc:"pagination",type:2},{text:{"zh-CN":"Menu \u83DC\u5355","en-US":"Menu"},doc:"menu",type:2},{text:{"zh-CN":"BackTop \u56DE\u5230\u9876\u90E8","en-US":"BackTop"},doc:"back-top",type:2},{text:{"zh-CN":"Countdown \u5012\u8BA1\u65F6","en-US":"Countdown"},doc:"countdown",type:2},{text:{"zh-CN":"Picker \u591A\u5217\u9009\u62E9\u5668","en-US":"Picker"},doc:"picker",type:2},{text:{"zh-CN":"DatePicker \u65E5\u671F\u9009\u62E9\u5668","en-US":"DatePicker"},doc:"date-picker",type:2},{text:{"zh-CN":"TimePicker \u65F6\u95F4\u9009\u62E9\u5668","en-US":"TimePicker"},doc:"time-picker",type:2},{text:{"zh-CN":"\u8868\u5355\u7EC4\u4EF6","en-US":"Form Components"},type:1},{text:{"zh-CN":"Form \u8868\u5355","en-US":"Form"},doc:"form",type:2},{text:{"zh-CN":"Input \u8F93\u5165\u6846","en-US":"Input"},doc:"input",type:2},{text:{"zh-CN":"Select \u9009\u62E9\u6846","en-US":"Select"},doc:"select",type:2},{text:{"zh-CN":"Radio \u5355\u9009\u6846","en-US":"Radio"},doc:"radio-group",type:2},{text:{"zh-CN":"Checkbox \u590D\u9009\u6846","en-US":"Checkbox"},doc:"checkbox-group",type:2},{text:{"zh-CN":"Counter \u8BA1\u6570\u5668","en-US":"Counter"},doc:"counter",type:2},{text:{"zh-CN":"Switch \u5F00\u5173","en-US":"Switch"},doc:"switch",type:2},{text:{"zh-CN":"Slider \u6ED1\u5757","en-US":"Slider"},doc:"slider",type:2},{text:{"zh-CN":"Rate \u8BC4\u5206","en-US":"Rate"},doc:"rate",type:2},{text:{"zh-CN":"Uploader \u6587\u4EF6\u4E0A\u4F20","en-US":"Uploader"},doc:"uploader",type:2}],redirect:"/home",title:{"zh-CN":"\u9762\u5411 Vue2 \u7684 Material \u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue2"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/varletjs/varlet-vue2",darkMode:!0},clipboard:{"zh-CN":"\u4EE3\u7801\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F","en-US":"The code has been copied to the clipboard"},fold:{defaultFold:!1,foldHeight:60}},fe={redirect:"/home",title:{"zh-CN":"\u9762\u5411 Vue2 \u7684 Material \u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue2"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/varletjs/varlet-vue2",darkMode:!0}},me={"color-body":"#fff","color-bar":"#fff","color-sub-bar":"#f5f5f5","color-text":"#555","color-sub-text":"#888","color-border":"rgba(0, 0, 0, 0.12)","color-shadow":"#eee","color-introduce-border":"#2196f3","color-primary":"#2196f3","color-link":"#00c48f","color-type":"#00c48f","color-progress":"#1d92e9","color-progress-track":"#fff","color-side-bar":"#3a7afe","color-side-bar-active-background":"#3a7afe1a","color-app-bar":"#3a7afe","color-nav-button-hover-background":"rgba(0, 0, 0, 0.08)","color-mobile-cell-hover":"#3a7afe","color-pc-language-active":"#3a7afe","color-pc-language-active-background":"#edf5ff","color-mobile-language-active":"#3a7afe","color-mobile-language-active-background":"#edf5ff","color-hl-background":"#fafafa","color-hl-code":"#58727e","color-hl-border":"#f3f3f3","color-hl-group-a":"#7c7c7c","color-hl-group-b":"#2196f3","color-hl-group-c":"#ff9422","color-hl-group-d":"#58c193","color-hl-group-e":"#ff9422","color-hl-group-f":"#ff9422","color-hl-group-g":"#ff9422","color-hl-group-h":"#06a6e9","color-hl-group-i":"#f23733"},ge={"color-body":"#121212","color-bar":"#1e1e1e","color-sub-bar":"#272727","color-text":"#fff","color-sub-text":"#aaa","color-border":"#333","color-shadow":"#121212","color-introduce-border":"#555","color-primary":"#5580f8","color-link":"#10c48f","color-type":"#10c48f","color-progress":"#5580f8","color-progress-track":"#202020","color-side-bar":"#4a7afe","color-side-bar-active-background":"#4a7afe1a","color-app-bar":"#272727","color-nav-button-hover-background":"rgba(255, 255, 255, 0.08)","color-mobile-cell-hover":"#4a7afe","color-pc-language-active":"#4a7afe","color-pc-language-active-background":"#4a7afe20","color-mobile-language-active":"#4a7afe","color-mobile-language-active-background":"#4a7afe20","color-hl-background":"#272727","color-hl-code":"#fff","color-hl-border":"#272727","color-hl-group-a":"#7c7c7c","color-hl-group-b":"#96cbfe","color-hl-group-c":"#ff7b1e","color-hl-group-d":"#A8FFC4","color-hl-group-e":"#ff7b1e","color-hl-group-f":"#ff7b1e","color-hl-group-g":"#ff7b1e","color-hl-group-h":"#14a6e9","color-hl-group-i":"#ed4648"},ve={"import dayjs from 'dayjs/esm'\n":`import dayjs from 'dayjs'
`,"import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'\n":`import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
`,"import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'\n":`import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
`};var yt={name:oe,namespace:ne,host:re,port:ie,title:se,themesKey:ae,logo:ce,defaultLanguage:le,highlight:de,analysis:ue,useMobile:pe,pc:he,mobile:fe,themes:me,darkThemes:ge,moduleCompatible:ve};function v(e,t,o,r,n,i,a,d){var s=typeof e=="function"?e.options:e;t&&(s.render=t,s.staticRenderFns=o,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i);var c;if(a?(c=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(l=__VUE_SSR_CONTEXT__),n&&n.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(a)},s._ssrRegister=c):n&&(c=d?function(){n.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(s.functional){s._injectStyles=c;var _=s.render;s.render=function(S,k){return c.call(k),_(S,k)}}else{var h=s.beforeCreate;s.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:s}}const p=e=>e==null?0:u(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):_e(e)?Number(e):e,_t=e=>Object.prototype.toString.call(e)==="[object Object]";function ye(e){return e.replace(/([A-Z])/g," $1").trim().split(" ").join("-").toLowerCase()}const u=e=>typeof e=="string",_e=e=>typeof e=="boolean",j=e=>typeof e=="number",Se=e=>/^(http)|(\.*\/)/.test(e),be=e=>e.replace(/-(\w)/g,(t,o)=>o.toUpperCase()),Ce=e=>be(e).replace(e.charAt(0),e.charAt(0).toUpperCase()),M=e=>u(e)&&e.endsWith("rem"),xe=e=>u(e)&&e.endsWith("px")||j(e),ze=e=>u(e)&&e.endsWith("%"),V=e=>u(e)&&e.endsWith("vw"),D=e=>u(e)&&e.endsWith("vh"),Ne=e=>{if(j(e))return e;if(xe(e))return+e.replace("px","");if(V(e))return+e.replace("vw","")*window.innerWidth/100;if(D(e))return+e.replace("vh","")*window.innerHeight/100;if(M(e)){const t=+e.replace("rem",""),o=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(o)}return u(e)?p(e):0},we=e=>e==null?null:ze(e)||V(e)||D(e)||M(e)?e:`${Ne(e)}px`;function Ue(e){return Object.entries(e!=null?e:{}).reduce((t,[o,r])=>{const n=o.startsWith("--")?o:`--${ye(o)}`;return t[n]=r,t},{})}function St(){return new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(e)})})}function R(e,t){return Array.isArray(t)?t.reduce((o,r)=>(o[r]=e[r],o),{}):e[t]}function bt(e,t="body",o={}){const r=new(U.extend(e))(o),n=r.$mount().$el,i=document.querySelector(t);return i.appendChild(n),{instance:r,unmount(){r.$destroy(),i.removeChild(n)}}}const C=[];function ke(e={}){C.forEach(o=>document.documentElement.style.removeProperty(o)),C.length=0;const t=Ue(e);Object.entries(t).forEach(([o,r])=>{document.documentElement.style.setProperty(o,r),C.push(o)})}function Le(e){return e.replace(/-(\w)/g,(t,o)=>o.toUpperCase())}function Ct(e){return Le(e).replace(e.charAt(0),e.charAt(0).toUpperCase())}function $e(){const[,e,t]=window.location.hash.split("/");return{language:e,menuName:t}}function xt(){return/Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)}var Re=(e=>(e[e.TITLE=1]="TITLE",e[e.COMPONENT=2]="COMPONENT",e[e.DOCUMENTATION=3]="DOCUMENTATION",e))(Re||{});function zt(){return window.self!==window.top}function Nt(e={}){return Object.keys(e).reduce((t,o)=>{const r=e[o];return r&&(t[o]=r),t},{})}function q(){const{href:e}=window.location,t=e.slice(e.indexOf("?"));return new URLSearchParams(t)}function wt(e,t,o="mobile"){const r=()=>{var i;const n=o==="mobile"?(i=q().get("language"))!=null?i:"zh-CN":$e().language;t(n)};W(e,r),r()}function Ut(e,t){const o=()=>{var n;const r=(n=q().get("platform"))!=null?n:"mobile";t(r)};W(e,o),o()}function kt(e,t,o=!0){const r=n=>{const{data:i}=n;i.action==="themesChange"&&t(i.data,i.from)};window.addEventListener("message",r),o&&e.$on("hook:beforeDestroy",()=>{window.removeEventListener("message",r)}),t(Te(),"default")}function W(e,t){e.$on("hook:mounted",()=>{window.addEventListener("hashchange",t),window.addEventListener("popstate",t)}),e.$on("hook:beforeDestroy",()=>{window.removeEventListener("hashchange",t),window.removeEventListener("popstate",t)})}function Lt(e,t){const o=ee(e,t,{}),r=Object.entries(o).reduce((n,[i,a])=>(n[`--site-config-${i}`]=a,n),{});ke(r)}function Te(e="VARLET_THEMES"){var o;let t=window.localStorage.getItem(e);return t||(t=((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-color-scheme: dark)").matches)?"darkThemes":"themes",window.localStorage.setItem(e,t)),t}const T={methods:{slots(e="default",t){const{$slots:o,$scopedSlots:r}=this,n=r[e];return n?n(t):o[e]},hasSlots(e="default"){return this.$scopedSlots[e]||this.$slots[e]}}},E={methods:{getListeners(){return Object.keys(this.$listeners).reduce((e,t)=>(e["on"+Ce(t)]=this.$listeners[t],e),{})}}};function Ee(){return new Promise(U.nextTick)}function y(e){return e.mixins?(e.mixins.push(T),e.mixins.push(E)):e.mixins=[T,E],e}const Pe="modulepreload",P={},Ae="./",$t=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${Ae}${r}`,r in P)return;P[r]=!0;const n=r.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":Pe,n||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),n)return new Promise((d,s)=>{a.addEventListener("load",d),a.addEventListener("error",s)})})).then(()=>t())},Be={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:{type:Function}};var Oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o(e.isURL(e.name)?"img":"i",{tag:"component",staticClass:"var-site-icon",class:[e.namespace+"--set",e.isURL(e.name)?"var-site-icon__image":e.namespace+"-"+e.nextName,e.shrinking?"var-site-icon--shrinking":null],style:{color:e.color,transition:"transform "+e.toNumber(e.transition)+"ms",width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)},attrs:{src:e.isURL(e.name)?e.nextName:null},on:{click:function(r){e.getListeners().onClick}}})},Ie=[];const Fe=y({name:"VarSiteIcon",props:Be,data:()=>({nextName:"",shrinking:!1}),watch:{name:{async handler(e,t){if(t==null||p(this.transition)===0){this.nextName=e;return}this.shrinking=!0,await Ee(),setTimeout(()=>{t!=null&&(this.nextName=e),this.shrinking=!1},p(this.transition))},immediate:!0}},methods:{toSizeUnit:we,isURL:Se,toNumber:p}}),A={};var je=v(Fe,Oe,Ie,!1,Me,null,null,null);function Me(e){for(let t in A)this[t]=A[t]}var m=function(){return je.exports}();m.install=function(e){e.component(m.name,m)};const Ve={title:{type:[Number,String]},icon:{type:String},desc:{type:String},border:{type:Boolean,default:!1},iconClass:{type:String},titleClass:{type:String},descClass:{type:String},extraClass:{type:String}};var De=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"var-site-cell",class:[e.border?"var-site-cell--border":null]},[e.hasSlots("icon")||e.icon?o("div",{staticClass:"var-site-cell__icon",class:[e.iconClass?e.iconClass:null]},[e._t("icon",function(){return[o("var-icon",{staticClass:"var--flex",attrs:{name:e.icon}})]})],2):e._e(),o("div",{staticClass:"var-site-cell__content"},[o("div",{staticClass:"var-site-cell__title",class:[e.titleClass?e.titleClass:null]},[e._t("default",function(){return[e._v(e._s(e.title))]})],2),e.hasSlots("desc")||e.desc?o("div",{staticClass:"var-site-cell__desc",class:[e.descClass?e.descClass:null]},[e._t("desc",function(){return[e._v(" "+e._s(e.desc)+" ")]})],2):e._e()]),e.hasSlots("extra")?o("div",{staticClass:"var-site-cell__extra",class:[e.extraClass?e.extraClass:null]},[e._t("extra")],2):e._e()])},qe=[];const We=y({name:"VarSiteCell",components:{VarSiteIcon:m},props:Ve}),B={};var He=v(We,De,qe,!1,Xe,null,null,null);function Xe(e){for(let t in B)this[t]=B[t]}var x=function(){return He.exports}();x.install=function(e){e.component(x.name,x)};const Ye={locks:{},zIndex:2e3,touchmoveForbid:!0},H=U.observable(Ye);const O=250;function Ge(e){const{zIndex:t,position:o}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",o==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function Ke(e,t){const{top:o,left:r}=e.getBoundingClientRect(),{clientWidth:n,clientHeight:i}=e,a=Math.sqrt(n**2+i**2)/2,d=a*2,s=t.touches[0].clientX-r,c=t.touches[0].clientY-o,_=(n-a*2)/2,h=(i-a*2)/2,l=s-a,S=c-a;return{x:l,y:S,centerX:_,centerY:h,size:d}}function X(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker)return;const o=()=>{var c;t.tasker=null;const{x:r,y:n,centerX:i,centerY:a,size:d}=Ke(this,e),s=document.createElement("div");s.classList.add("var-site-ripple"),s.style.opacity="0",s.style.transform=`translate(${r}px, ${n}px) scale3d(.3, .3, .3)`,s.style.width=`${d}px`,s.style.height=`${d}px`,s.style.backgroundColor=(c=t.color)!=null?c:"currentColor",s.dataset.createdAt=String(performance.now()),Ge(this),this.appendChild(s),window.setTimeout(()=>{s.style.transform=`translate(${i}px, ${a}px) scale3d(1, 1, 1)`,s.style.opacity=".25"},20)};t.tasker=window.setTimeout(o,60)}function N(){const e=this._ripple,t=()=>{const o=this.querySelectorAll(".var-site-ripple");if(!o.length)return;const r=o[o.length-1],n=O-performance.now()+Number(r.dataset.createdAt);setTimeout(()=>{r.style.opacity="0",setTimeout(()=>{var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)},O)},n)};e.tasker?setTimeout(t,60):t()}function Y(){const e=this._ripple;!e.touchmoveForbid||(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}function Qe(e,t){var o,r,n;e._ripple=b(f({tasker:null},(o=t.value)!=null?o:{}),{touchmoveForbid:(n=(r=t.value)==null?void 0:r.touchmoveForbid)!=null?n:H.touchmoveForbid,removeRipple:N.bind(e)}),e.addEventListener("touchstart",X,{passive:!0}),e.addEventListener("touchmove",Y,{passive:!0}),e.addEventListener("dragstart",N,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function Ze(e){e.removeEventListener("touchstart",X),e.removeEventListener("touchmove",Y),e.removeEventListener("dragstart",N),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function Je(e,t){var o,r,n;e._ripple=b(f(f({},e._ripple),(o=t.value)!=null?o:{}),{touchmoveForbid:(n=(r=t.value)==null?void 0:r.touchmoveForbid)!=null?n:H.touchmoveForbid,tasker:null})}const et={inserted:Qe,unbind:Ze,update:Je,install(e){e.directive("ripple",this)}};function tt(e){return["circle","wave","cube","rect","disappear"].includes(e)}function ot(e){return["normal","mini","small","large"].includes(e)}const w={type:{type:String,default:"circle",validator:tt},radius:{type:[String,Number]},size:{type:String,default:"normal",validator:ot},color:{type:String,default:"currentColor"},description:{type:String},loading:{type:Boolean,default:!1}};var nt=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"var-site-loading"},[e.hasSlots()?o("div",{staticClass:"var-site-loading__content",class:[e.loading?"var-site-loading__content--active":null]},[e._t("default")],2):e._e(),e.isShow?o("div",{staticClass:"var--box var-site-loading__body",class:[e.hasSlots()?"var-site-loading__inside":null]},[e.type==="circle"?o("div",{staticClass:"var-site-loading__circle"},[o("span",{staticClass:"var-site-loading__circle-block",style:{width:e.getRadius*2+"px",height:e.getRadius*2+"px",color:e.color}},[o("svg",{attrs:{viewBox:"25 25 50 50"}},[o("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])]):e._e(),e._l(e.loadingTypeDict,function(r,n){return[e.type===n?o("div",{key:n,class:"var-site-loading__"+n+" var-site-loading__"+n+"-"+e.size},e._l(r,function(i){return o("div",{key:i+n,class:"var-site-loading__"+n+"-item var-site-loading__"+n+"-item-"+e.size,style:{backgroundColor:e.color}})}),0):e._e()]}),e.hasSlots("description")||e.description?o("div",{staticClass:"var-site-loading__description",class:"var-site-loading__description--"+e.size,style:{color:e.color}},[e._t("description",function(){return[e._v(e._s(e.description))]})],2):e._e()],2):e._e()])},rt=[];const it=y({name:"VarSiteLoading",props:w,data:()=>({loadingTypeDict:{wave:5,cube:4,rect:8,disappear:3},sizeDict:{mini:9,small:12,normal:15,large:18}}),computed:{getRadius(){return this.radius?p(this.radius):this.sizeDict[this.size]},isShow(){return this.hasSlots()?this.loading:!0}}}),I={};var st=v(it,nt,rt,!1,at,null,null,null);function at(e){for(let t in I)this[t]=I[t]}var g=function(){return st.exports}();g.install=function(e){e.component(g.name,g)};function ct(e){return["default","primary","info","success","warning","danger"].includes(e)}function lt(e){return["normal","mini","small","large"].includes(e)}const dt={type:{type:String,default:"default",validator:ct},size:{type:String,default:"normal",validator:lt},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},autoLoading:{type:Boolean,default:!1},loadingRadius:{type:[Number,String],default:12},loadingType:R(w,"type"),loadingSize:R(w,"size")};var ut=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{directives:[{name:"ripple",rawName:"v-ripple",value:{disabled:e.disabled||!e.ripple},expression:"{ disabled: disabled || !ripple }"}],staticClass:"var-site-button var--box",class:["var-site-button--"+e.size,e.block?"var--flex var-site-button--block":"var--inline-flex",e.disabled?"var-site-button--disabled":null,e.text?"var-site-button--text-"+e.type:"var-site-button--"+e.type,e.text?"var-site-button--text":"var-elevation--2",e.text&&e.disabled?"var-site-button--text-disabled":null,e.round?"var-site-button--round":null,e.outline?"var-site-button--outline":null],style:{color:e.textColor,background:e.color},attrs:{disabled:e.disabled},on:{click:e.handleClick,touchstart:e.handleTouchstart}},[e.loading||e.pending?o("var-site-loading",{staticClass:"var-site-button__loading",attrs:{"var-site-button-cover":"",type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius}}):e._e(),o("div",{staticClass:"var-site-button__content",class:[e.loading||e.pending?"var-site-button--hidden":null]},[e._t("default")],2)],1)},pt=[];const ht=y({name:"VarSiteButton",components:{VarSiteLoading:g},directives:{Ripple:et},props:dt,data:()=>({pending:!1}),methods:{attemptAutoLoading(e){this.autoLoading&&(this.pending=!0,Promise.resolve(e).finally(()=>{this.pending=!1}))},handleClick(e){const{loading:t,disabled:o,pending:r}=this,{onClick:n}=this.getListeners();!n||t||o||r||this.attemptAutoLoading(n(e))},handleTouchstart(e){const{loading:t,disabled:o,pending:r}=this,{onTouchstart:n}=this.getListeners();!n||t||o||r||this.attemptAutoLoading(n(e))}}}),F={};var ft=v(ht,ut,pt,!1,mt,null,null,null);function mt(e){for(let t in F)this[t]=F[t]}var z=function(){return ft.exports}();z.install=function(e){e.component(z.name,z)};export{z as B,x as C,m as I,g as L,Re as M,et as R,$t as _,$e as a,H as b,yt as c,y as d,w as e,_t as f,Te as g,u as h,xt as i,j,Ee as k,St as l,bt as m,v as n,Ct as o,R as p,wt as q,Nt as r,Lt as s,p as t,zt as u,Ut as v,kt as w};

import{I as _}from"./index.28c6219d.js";import{M as b}from"./index.7d965719.js";import{C as g}from"./index.c242a2dd.js";import{F as y,V as C}from"./validation.55c99b70.js";import{d as w}from"./create.03b31fc7.js";import{e as M,b as c}from"./shared.f8da68a0.js";import{b as x}from"./elements.e5ceb88c.js";import{a as F,c as V}from"./relation.9e421618.js";import{n as S}from"./index.e0168b23.js";function L(e){return["left","right","center"].includes(e)}const D={value:{default:void 0},placeholder:{type:String},multiple:{type:Boolean,default:!1},chip:{type:Boolean,default:!1},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:L},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array}};var W=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"var-select var--box",class:[e.formDisabled||e.disabled?"var-select--disabled":null],on:{click:e.handleClick}},[t("div",{staticClass:"var-select__controller",class:[e.isFocus?"var-select--focus":null,e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null],style:{color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor}},[t("div",{staticClass:"var-select__icon",class:[e.hint?null:"var-select--non-hint"]},[e._t("prepend-icon")],2),t("var-menu",{staticClass:"var-select__menu",attrs:{"var-select-cover":"","offset-y":e.offsetY,show:e.isFocus},on:{"update:show":function(l){e.isFocus=l},close:e.handleBlur},scopedSlots:e._u([{key:"menu",fn:function(){return[t("div",{staticClass:"var-select__scroller"},[e._t("default")],2)]},proxy:!0}],null,!0)},[t("div",{ref:"wrapEl",staticClass:"var-select__wrap",class:[e.hint?null:"var-select--non-hint"],on:{click:e.handleFocus}},[t("div",{staticClass:"var-select__select",class:[e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null],style:{textAlign:e.textAlign,color:e.textColor}},[e.multiple?t("div",[e.chip?t("div",{staticClass:"var-select__chips"},e._l(e.labels,function(l){return t("var-chip",{key:l,staticClass:"var-select__chip",attrs:{"var-select-cover":"",closable:"",size:"small",type:e.errorMessage?"danger":void 0},on:{click:function(a){a.stopPropagation()},close:function(){return e.handleClose(l)}}},[e._v(" "+e._s(l)+" ")])}),1):t("div",{staticClass:"var-select__values"},[e._v(" "+e._s(e.labels.join(e.separator))+" ")])]):t("span",[e._v(e._s(e.label))]),t("var-icon",{staticClass:"var-select__arrow",class:[e.isFocus?"var-select--arrow-rotate":null],attrs:{"var-select-cover":"",name:"menu-down",transition:300}})],1),t("label",{staticClass:"var-select__placeholder var--ellipsis",class:[e.isFocus?"var-select--focus":null,e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null,e.computePlaceholderState(),e.hint?null:"var-select--placeholder-non-hint"],style:{color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor}},[e._v(" "+e._s(e.placeholder)+" ")])])]),t("div",{staticClass:"var-select__icon",class:[e.hint?null:"var-select--non-hint"]},[e._t("append-icon",function(){return[e.clearable?t("var-icon",{staticClass:"var-select__clear-icon",attrs:{name:"close-circle",size:"14px"},on:{click:e.handleClear}}):e._e()]})],2)],1),e.line?t("div",{staticClass:"var-select__line",class:[e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null],style:{background:e.errorMessage?void 0:e.blurColor}},[t("div",{staticClass:"var-select__dot",class:[e.isFocus?"var-select--spread":null,e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null],style:{background:e.errorMessage?void 0:e.focusColor}})]):e._e(),t("var-form-details",{attrs:{"error-message":e.errorMessage}})],1)},T=[];const k=w({name:"VarSelect",components:{VarIcon:_,VarMenu:b,VarChip:g,VarFormDetails:y},mixins:[C,F("select",{childrenKey:"options"}),V("form",{parentKey:"form",childrenKey:"formItems"})],props:D,data:()=>({isFocus:!1,label:"",labels:[],wrapWidth:"0px",offsetY:0}),computed:{formReadonly(){var e;return(e=this.form)==null?void 0:e.readonly},formDisabled(){var e;return(e=this.form)==null?void 0:e.disabled}},watch:{value(){this.syncOptions()},multiple(e){if(e&&!M(this.value))throw Error("The value must be an array when multiple is true")}},methods:{blur(){this.isFocus=!1},validate(){this._validate(this.rules,this.value)},reset(){const{onInput:e}=this.getListeners();e==null||e(this.multiple?[]:void 0),this.resetValidation()},computeLabel(){const{multiple:e,value:s}=this;if(e){const t=s;this.labels=t.map(this.findLabel)}!e&&!c(s)&&(this.label=this.findLabel(s)),!e&&c(s)&&(this.label="")},findValueOrLabel({value:e,label:s}){return e!=null?e:s},findLabel(e){const{options:s}=this;let t=s.find(l=>l.value===e);return t||(t=s.find(l=>l.label===e)),t.label},computePlaceholderState(){const{hint:e,value:s,isFocus:t}=this;if(!e&&!c(s))return"var-select--placeholder-hidden";if(e&&(!c(s)||t))return"var-select--placeholder-hint"},getWrapWidth(){const{wrapEl:e}=this.$refs;return e&&window.getComputedStyle(e).width||"0px"},getOffsetY(){const{wrapEl:e}=this.$refs,s=e&&window.getComputedStyle(e)||"0px";return x(s)*1.5},handleFocus(){const{disabled:e,readonly:s,formReadonly:t,formDisabled:l,getWrapWidth:a,getOffsetY:r}=this,{onFocus:i}=this.getListeners();l||t||e||s||(this.wrapWidth=a(),this.offsetY=r(),this.isFocus=!0,i==null||i(),this.validateWithTrigger("onFocus"))},handleBlur(){const{onBlur:e}=this.getListeners(),{disabled:s,readonly:t,formReadonly:l,formDisabled:a}=this;a||l||s||t||(e==null||e(),this.validateWithTrigger("onBlur"))},onSelect(e){const{onChange:s,onInput:t}=this.getListeners(),{disabled:l,readonly:a,multiple:r,options:i}=this;if(this.formDisabled||this.formReadonly||l||a)return;const o=r?i.filter(({selected:n})=>n).map(this.findValueOrLabel):this.findValueOrLabel(e);t==null||t(o),s==null||s(o),this.validateWithTrigger("onChange"),!r&&(this.isFocus=!1)},handleClear(){const{onClear:e,onInput:s}=this.getListeners(),{disabled:t,readonly:l,multiple:a,clearable:r,formDisabled:i,formReadonly:o}=this;if(i||o||t||l||!r)return;const n=a?[]:void 0;s==null||s(n),e==null||e(n),this.validateWithTrigger("onClear")},handleClick(e){const{disabled:s,formDisabled:t}=this,{onClick:l}=this.getListeners();t||s||(l==null||l(e),this.validateWithTrigger("onClick"))},async validateWithTrigger(e){await this.$nextTick();const{validateTrigger:s,rules:t,value:l}=this;this._validateWithTrigger(s,e,t,l)},handleClose(e){const{onClose:s,onInput:t}=this.getListeners(),{disabled:l,readonly:a,value:r,formDisabled:i,formReadonly:o,options:n}=this;if(i||o||l||a)return;const m=r,f=n.find(({label:d})=>d===e),h=m.filter(d=>{var v;return d!==((v=f.value)!=null?v:f.label)});t==null||t(h),s==null||s(h),this.validateWithTrigger("onClose")},syncOptions(){const{multiple:e,value:s,findValueOrLabel:t,computeLabel:l,options:a}=this;if(e){const r=s;a.forEach(i=>i.sync(r.includes(t(i))))}else a.forEach(r=>r.sync(s===t(r)));l()},focus(){this.isFocus=!0}}}),p={};var B=S(k,W,T,!1,E,null,null,null);function E(e){for(let s in p)this[s]=p[s]}var u=function(){return B.exports}();u.install=function(e){e.component(u.name,u)};export{u as S};

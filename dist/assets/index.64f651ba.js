import{g as y,o as m,j as p,F as w,z as B,I as _,C as g,i as n,D as R,y as $,k as V,J as F,m as v,u as j,r as S,l as c,n as T,p as x,t as z}from"./vendor.ff035d3f.js";import{_ as C}from"./index.504559ae.js";const D={class:"gi-text-radio"},E=["onClick"],G=y({props:{modelValue:{type:[Number,String],default:""},list:{type:Array,default:()=>[]}},emits:["update:modelValue","change"],setup(t,{emit:i}){const u=a=>{i("update:modelValue",a.value),i("change",a)};return(a,s)=>(m(),p("div",D,[(m(!0),p(w,null,B(t.list,l=>(m(),p("div",{class:_(["item",{active:l.value===t.modelValue}]),key:l.value,onClick:f=>u(l)},g(l.label),11,E))),128))]))}});var I=C(G,[["__scopeId","data-v-b0c3a6fe"]]);const N={class:"gi-switch-wrap"},O=y({props:{modelValue:{type:Boolean,default:!1},onText:{type:String,default:"\u542F\u52A8"},offText:{type:String,default:"\u6682\u505C"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:i}){const u=t,a=n(null),s=n(null);let l=n(0),f=n(0);R(()=>{l.value=a.value.clientWidth,f.value=s.value.clientWidth});const k=$(()=>{const d={};return d.width=u.modelValue?`${l.value}px`:`${f.value}px`,d.left=u.modelValue?0:`${l.value}px`,d}),o=d=>{d===u.modelValue||u.disabled||i("update:modelValue",!u.modelValue)};return(d,r)=>(m(),p("div",{class:_(["gi-switch",{disabled:t.disabled}])},[V("div",N,[V("section",{class:"slide-bar",style:F(v(k))},null,4),V("section",{ref:(e,b)=>{b.OnRef=e,a.value=e},class:_(["item left",{on:t.modelValue,disabled:t.disabled}]),onClick:r[0]||(r[0]=e=>o(!0))},g(t.onText),3),V("section",{ref:(e,b)=>{b.OffRef=e,s.value=e},class:_(["item right",{off:!t.modelValue,disabled:t.disabled}]),onClick:r[1]||(r[1]=e=>o(!1))},g(t.offText),3)])],2))}});var h=C(O,[["__scopeId","data-v-7d3b5e5c"]]);const U={class:"gi_box test"},W=z("\u8DF3\u8F6C"),A=y({setup(t){const i=j(),u=[{label:"\u560E\u560E",value:"01"},{label:"\u54C8\u54C8",value:"02"},{label:"\u563B\u563B",value:"03"}];let a=n("01"),s=n(!0),l=n(!1);const f=()=>{i.push({path:"/indicator-manage",query:{tab:"3"}})};return(k,o)=>{const d=S("a-button"),r=S("a-space");return m(),p("div",U,[c(r,{direction:"vertical",size:"medium"},{default:T(()=>[c(I,{list:u,modelValue:v(a),"onUpdate:modelValue":o[0]||(o[0]=e=>x(a)?a.value=e:a=e)},null,8,["modelValue"]),c(h,{modelValue:v(s),"onUpdate:modelValue":o[1]||(o[1]=e=>x(s)?s.value=e:s=e),"off-text":"\u6682\u505C\u4E2D"},null,8,["modelValue"]),c(h,{modelValue:v(l),"onUpdate:modelValue":o[2]||(o[2]=e=>x(l)?l.value=e:l=e)},null,8,["modelValue"]),c(h,{modelValue:v(l),"onUpdate:modelValue":o[3]||(o[3]=e=>x(l)?l.value=e:l=e),disabled:""},null,8,["modelValue"]),c(d,{type:"primary",onClick:f},{default:T(()=>[W]),_:1})]),_:1})])}}});var L=C(A,[["__scopeId","data-v-751559a9"]]);export{L as default};

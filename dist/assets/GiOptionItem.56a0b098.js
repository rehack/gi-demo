import{_ as i,o as t,c as l,n,d as _,i as p,a as o,m as c,ek as m,K as u,es as f,ej as v}from"./index.57692254.js";const y={},k={class:"gi-option"};function g(e,s){return t(),l("ul",k,[n(e.$slots,"default",{},void 0,!0)])}const $=i(y,[["render",g],["__scopeId","data-v-1ad5e92d"]]),h={class:"wrap"},C={class:"icon-wrapper"},I=_({name:"GiOptionItem"}),B=_({...I,props:{icon:{type:String,default:""},label:{type:String,default:""},more:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:s}){const r=()=>{s("click")};return(a,G)=>{const d=p("IconRight");return t(),l("li",{class:v(["gi-option-item",{more:e.more,active:e.active}]),onClick:r},[o("section",h,[o("span",C,[n(a.$slots,"icon",{},()=>[(t(),c(m(e.icon),{size:16,"stroke-width":2}))],!0)]),n(a.$slots,"default",{},()=>[o("span",null,u(e.label),1)],!0)]),e.more?(t(),c(d,{key:0})):f("",!0)],2)}}});const S=i(B,[["__scopeId","data-v-07ff3c27"]]);export{S as G,$ as a};

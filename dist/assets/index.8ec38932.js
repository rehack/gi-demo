var w=Object.defineProperty,D=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var B=(s,o,_)=>o in s?w(s,o,{enumerable:!0,configurable:!0,writable:!0,value:_}):s[o]=_,$=(s,o)=>{for(var _ in o||(o={}))S.call(o,_)&&B(s,_,o[_]);if(b)for(var _ of b(o))z.call(o,_)&&B(s,_,o[_]);return s},E=(s,o)=>D(s,M(o));import{_ as L}from"./avatar.d240db71.js";import{_ as y}from"./index.1e733d89.js";import{r as n,o as r,g as v,a as e,w as t,h as a,O as H,P as N,H as u,e as x,p as k,B as V,u as h,c as A,j as U,J as j,I as J,t as K}from"./vendor.bb58a9d6.js";import O from"./index.132512d7.js";import P from"./index.043e7312.js";import R from"./index.e21ac6c6.js";import"./system.747d213c.js";import"./axios.03f216e5.js";const T={},f=s=>(H("data-v-3e89f909"),s=s(),N(),s),q={class:"head"},G=f(()=>a("img",{src:L},null,-1)),Q=f(()=>a("section",{class:"user-name"},"Lin",-1)),W={class:"label-list"},X=f(()=>a("span",null,"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",-1)),Y=f(()=>a("span",null,"\u524D\u7AEF",-1)),Z=f(()=>a("span",null,"\u5E7F\u5DDE",-1)),ee=u("\u7F16\u8F91\u4FE1\u606F");function te(s,o){const _=n("IconCamera"),c=n("a-avatar"),i=n("icon-user"),l=n("icon-safe"),d=n("icon-location"),p=n("icon-edit"),m=n("a-button");return r(),v("div",q,[e(c,{size:60,"trigger-icon-style":{color:"#3491FA"}},{"trigger-icon":t(()=>[e(_)]),default:t(()=>[G]),_:1}),Q,a("section",W,[a("div",null,[e(i),X]),a("div",null,[e(l),Y]),a("div",null,[e(d),Z])]),e(m,{type:"primary",class:"edit-btn"},{icon:t(()=>[e(p)]),default:t(()=>[ee]),_:1})])}var oe=y(T,[["render",te],["__scopeId","data-v-3e89f909"]]);const ne={class:"user-center"},se={style:{"margin-top":"20px","padding-left":"20px"}},_e=u("Lin"),ae=u("\u53CC\u9C7C\u5EA7"),ce=u("07\u670816\u65E5"),ue=u("vue3"),ie=u("pinia"),le=u("vite"),de=u("ts"),re=u("arco design"),pe=u("\u738B\u8005\u8363\u8000"),me=u("\u65C5\u884C"),fe=u("\u54C8\u54C8\u54C8"),he=x({setup(s){return(o,_)=>{const c=n("a-descriptions-item"),i=n("a-tag"),l=n("a-space"),d=n("icon-man"),p=n("icon-woman"),m=n("a-switch"),g=n("a-descriptions");return r(),v("div",ne,[e(oe),a("section",se,[e(g,{title:"\u57FA\u672C\u4FE1\u606F",column:1},{default:t(()=>[e(c,{label:"\u6635\u79F0"},{default:t(()=>[_e]),_:1}),e(c,{label:"\u661F\u5EA7"},{default:t(()=>[ae]),_:1}),e(c,{label:"\u751F\u65E5"},{default:t(()=>[ce]),_:1}),e(c,{label:"\u6807\u7B7E"},{default:t(()=>[e(l,{size:5},{default:t(()=>[e(i,{color:"#f53f3f"},{default:t(()=>[ue]),_:1}),e(i,{color:"#7816ff"},{default:t(()=>[ie]),_:1}),e(i,{color:"#00b42a"},{default:t(()=>[le]),_:1}),e(i,{color:"#165dff"},{default:t(()=>[de]),_:1}),e(i,{color:"#ff7d00"},{default:t(()=>[re]),_:1})]),_:1})]),_:1}),e(c,{label:"\u7231\u597D"},{default:t(()=>[e(l,{size:5},{default:t(()=>[e(i,{color:"purple"},{default:t(()=>[pe]),_:1}),e(i,{color:"magenta"},{default:t(()=>[me]),_:1})]),_:1})]),_:1}),e(c,{label:"\u6027\u522B"},{default:t(()=>[e(m,{size:"medium","model-value":!0},{"checked-icon":t(()=>[e(d)]),"unchecked-icon":t(()=>[e(p)]),_:1})]),_:1}),e(c,{label:"\u5EA7\u53F3\u94ED"},{default:t(()=>[fe]),_:1})]),_:1})])])}}});var I=y(he,[["__scopeId","data-v-b65a089c"]]);const ve={class:"system-manage"},ge={class:"left"},Ce={class:"right"},ye=x({name:"SystemManage"}),xe=x(E($({},ye),{setup(s){let o=k("01"),_=k(0);const c=V([{id:"01",name:"\u4E2A\u4EBA\u4E2D\u5FC3",value:I},{id:"04",name:"\u90E8\u95E8\u7BA1\u7406",value:O},{id:"02",name:"\u7528\u6237\u7BA1\u7406",value:P},{id:"03",name:"\u89D2\u8272\u7BA1\u7406",value:R},{id:"05",name:"\u83DC\u5355\u7BA1\u7406",value:I}]),i=(l,d)=>{o.value=l.id,_.value=d};return(l,d)=>{const p=n("a-menu-item"),m=n("a-sub-menu"),g=n("a-menu");return r(),v("div",ve,[a("section",ge,[e(g,{style:{width:"220px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":[h(o)]},{default:t(()=>[e(m,{key:"0"},{default:t(()=>[(r(!0),v(j,null,J(h(c),(C,F)=>(r(),A(p,{key:C.id,onClick:be=>i(C,F)},{default:t(()=>[a("span",null,K(C.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["default-selected-keys"])]),a("section",Ce,[(r(),A(U(h(c)[h(_)].value)))])])}}}));var Me=y(xe,[["__scopeId","data-v-4fbefd50"]]);export{Me as default};

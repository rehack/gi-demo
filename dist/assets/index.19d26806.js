import{_ as M}from"./GiFooter.d3d672a7.js";import{g as q}from"./index.c2523c05.js";import{d as j,eI as O,eJ as W,r as _,i as o,o as b,c as J,b as e,w as t,n as U,j as l,m as R,a as F,eK as H,J as Q,ew as X,ej as Y,k as s,_ as K,eq as Z,er as ee,K as N,ei as te,M as P,p as oe,e as ne}from"./index.57692254.js";import"./index.463d26de.js";import{u as ae}from"./usePagination.f332e6d8.js";import"./viewer.8faa7f55.js";import{g as se}from"./index.062244c7.js";const le=s("\u5C0F"),ie=s("\u9ED8\u8BA4"),ue=s("\u4E2D"),ce=s("\u5927"),_e={class:"table-box"},re={name:"GiTable",inheritAttrs:!1},de=j({...re,emits:["refresh"],setup(m,{expose:f,emit:y}){const C=O(),z=W(),w=_(null),g=_(!1),h=_("small"),v=_(!0),r=_(null),{isFullscreen:B,toggle:k}=q(r),E=()=>{y("refresh")};return f({tableRef:w}),(i,c)=>{const x=o("a-space"),u=o("a-switch"),d=o("a-tooltip"),S=o("icon-refresh"),a=o("a-button"),V=o("icon-fullscreen"),D=o("icon-fullscreen-exit"),A=o("icon-apps"),p=o("a-radio"),T=o("a-radio-group"),$=o("a-row"),I=o("a-table");return b(),J("div",{class:Y(["gi-table",{fullscreen:l(B)}]),ref_key:"giTableRef",ref:r},[e($,{justify:"space-between"},{default:t(()=>[e(x,null,{default:t(()=>[U(i.$slots,"custom-extra",{},void 0,!0)]),_:3}),e(x,{size:15},{default:t(()=>[e(d,{content:"\u6591\u9A6C\u7EB9"},{default:t(()=>[e(u,{modelValue:g.value,"onUpdate:modelValue":c[0]||(c[0]=n=>g.value=n),size:"medium"},null,8,["modelValue"])]),_:1}),e(d,{content:"\u5237\u65B0"},{default:t(()=>[e(a,{size:"mini",class:"gi_hover_btn",onClick:E},{icon:t(()=>[e(S,{size:18})]),_:1})]),_:1}),e(d,{content:"\u5168\u5C4F"},{default:t(()=>[e(a,{size:"mini",class:"gi_hover_btn",onClick:l(k)},{icon:t(()=>[l(B)?(b(),R(D,{key:1,size:18})):(b(),R(V,{key:0,size:18}))]),_:1},8,["onClick"])]),_:1}),e(d,{content:"\u663E\u793A\u8FB9\u6846"},{default:t(()=>[e(a,{size:"mini",class:"gi_hover_btn",onClick:c[1]||(c[1]=n=>v.value=!v.value)},{icon:t(()=>[e(A,{size:18})]),_:1})]),_:1}),e(T,{type:"button",size:"mini",modelValue:h.value,"onUpdate:modelValue":c[2]||(c[2]=n=>h.value=n)},{default:t(()=>[e(p,{value:"mini"},{default:t(()=>[le]),_:1}),e(p,{value:"small"},{default:t(()=>[ie]),_:1}),e(p,{value:"medium"},{default:t(()=>[ue]),_:1}),e(p,{value:"large"},{default:t(()=>[ce]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:3}),F("div",_e,[e(I,X(l(C),{stripe:g.value,size:h.value,bordered:{cell:v.value},ref_key:"tableRef",ref:w}),H({_:2},[Q(Object.keys(l(z)),n=>({name:n,fn:t(()=>[U(i.$slots,n,{},void 0,!0)])}))]),1040,["stripe","size","bordered"])])],2)}}});const pe=K(de,[["__scopeId","data-v-be397af8"]]),G=m=>(oe("data-v-d46e8265"),m=m(),ne(),m),me={class:"table-page"},fe=G(()=>F("span",null,"\u65B0\u589E",-1)),ge=G(()=>F("span",null,"\u5220\u9664",-1)),he=G(()=>F("span",null,"\u5BFC\u5165",-1)),ve=s("\u5F00\u542F"),be=s("\u5173\u95ED"),ye=s("\u4FEE\u6539"),Ce=s("\u8BE6\u60C5"),ze=s("\u5220\u9664"),we=j({name:"CustomTable"}),Be=j({...we,setup(m){const f=_(!1),y=_([]),{current:C,pageSize:z,total:w,changeCurrent:g,changePageSize:h,setTotal:v}=ae(()=>{r()}),r=async()=>{try{f.value=!0;const i=await se({current:C.value,pageSize:z.value});y.value=i.data.list,v(i.data.total)}catch(i){return i}finally{f.value=!1}};r();const B=()=>{P.info("\u70B9\u51FB\u4E86\u65B0\u589E")},k=()=>{P.info("\u70B9\u51FB\u4E86\u5220\u9664")},E=()=>{P.info("\u70B9\u51FB\u4E86\u5BFC\u5165")};return(i,c)=>{const x=o("icon-plus"),u=o("a-button"),d=o("icon-delete"),S=o("icon-export"),a=o("a-table-column"),V=o("a-avatar"),D=o("a-switch"),A=o("a-popconfirm"),p=o("a-space"),T=pe,$=M,I=Z("loading");return b(),J("div",me,[ee((b(),R(T,{"row-key":"id",data:y.value,scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:{showPageSize:!0,total:l(w),current:l(C),pageSize:l(z)},onPageChange:l(g),onPageSizeChange:l(h),onRefresh:r},{"custom-extra":t(()=>[e(u,{type:"primary",onClick:B},{icon:t(()=>[e(x)]),default:t(()=>[fe]),_:1}),e(u,{type:"primary",status:"danger",onClick:k},{icon:t(()=>[e(d)]),default:t(()=>[ge]),_:1}),e(u,{onClick:E},{icon:t(()=>[e(S)]),default:t(()=>[he]),_:1})]),columns:t(()=>[e(a,{title:"\u5E8F\u53F7",width:66,align:"center"},{cell:t(n=>[s(N(n.rowIndex+1),1)]),_:1}),e(a,{title:"\u59D3\u540D","data-index":"name",width:120}),e(a,{title:"\u5934\u50CF",width:80},{cell:t(({record:n})=>[e(V,{size:30,style:te({backgroundColor:n.color})},{default:t(()=>[s(N(n.name[0]),1)]),_:2},1032,["style"])]),_:1}),e(a,{title:"\u624B\u673A\u53F7","data-index":"phone",width:150}),e(a,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"startTime",ellipsis:"",tooltip:""}),e(a,{title:"\u5730\u5740","data-index":"address",ellipsis:"",tooltip:""}),e(a,{title:"\u72B6\u6001",width:100},{cell:t(({record:n})=>[e(D,{modelValue:n.status,"onUpdate:modelValue":L=>n.status=L,size:"medium"},{checked:t(()=>[ve]),unchecked:t(()=>[be]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(a,{title:"\u64CD\u4F5C",width:200,align:"center"},{cell:t(({record:n})=>[e(p,null,{default:t(()=>[e(u,{type:"primary",size:"mini"},{default:t(()=>[ye]),_:1}),e(u,{size:"mini"},{default:t(()=>[Ce]),_:1}),e(A,{type:"warning",content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?"},{default:t(()=>[e(u,{type:"primary",status:"danger",size:"mini"},{default:t(()=>[ze]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data","pagination","onPageChange","onPageSizeChange"])),[[I,f.value]]),e($)])}}});const Ae=K(Be,[["__scopeId","data-v-d46e8265"]]);export{Ae as default};

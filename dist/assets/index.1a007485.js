import{_ as J}from"./GiFooter.d3d672a7.js";import{d as V,h as O,r as B,i as t,eq as Q,o as v,c as R,b as e,w as u,er as m,ez as F,m as b,k as l,K as x,a as X,ei as Y,j as f,_ as Z}from"./index.57692254.js";import"./index.463d26de.js";import{u as ee}from"./usePagination.f332e6d8.js";import"./viewer.8faa7f55.js";import{g as ue}from"./index.062244c7.js";const te={class:"table-page"},ae=l("\u4E09\u7EA7\u8DEF\u7531\u3010\u7F13\u5B58\u8DEF\u7531\u3001\u56FA\u5B9A\u8868\u683C\u9AD8\u5EA6\u3001\u5E76\u6839\u636E\u7A97\u53E3\u5927\u5C0F\u81EA\u9002\u5E94\u3011\u7684\u793A\u4F8B\u3002\u8BE6\u60C5\u9875\u8BF7\u70B9\u51FB\u64CD\u4F5C\u5217\u6309\u94AE\uFF0C\u652F\u6301tab\u591A\u5F00\u5E76\u9AD8\u4EAE\u5DE6\u4FA7\u83DC\u5355"),le=l("\u5317\u4EAC"),oe=l("\u4E0A\u6D77"),ne=l("\u5E7F\u5DDE"),se=l("\u5F00\u542F"),_e=l("\u5173\u95ED"),ie=l("\u67E5\u8BE2"),de=l("\u91CD\u7F6E"),ce={class:"table-box"},re=l("\u5F00\u542F"),pe=l("\u5173\u95ED"),me=l("\u4FEE\u6539"),fe=l("\u8BE6\u60C5"),ve=l("\u5220\u9664"),Fe=V({name:"MainTable"}),he=V({...Fe,setup(Ee){const n=O({value1:"",value2:"",value3:"",value4:"",value5:""}),h=B(!1),C=B([]),s=B(!1),{current:D,pageSize:w,total:z,changeCurrent:S,changePageSize:P,setTotal:T}=ee(()=>{E()}),E=async()=>{try{h.value=!0;const r=await ue({current:D.value,pageSize:w.value});C.value=r.data.list,T(r.data.total)}catch(r){return r}finally{h.value=!1}};return E(),(r,o)=>{const U=t("a-alert"),g=t("a-input"),d=t("a-form-item"),i=t("a-col"),p=t("a-option"),y=t("a-select"),N=t("a-date-picker"),j=t("icon-search"),c=t("a-button"),I=t("icon-up"),q=t("icon-down"),A=t("a-space"),k=t("a-row"),G=t("a-form"),_=t("a-table-column"),K=t("a-avatar"),L=t("a-switch"),M=t("a-popconfirm"),W=t("a-table"),$=J,H=Q("loading");return v(),R("div",te,[e(U,{type:"success"},{default:u(()=>[ae]),_:1}),e(G,{"label-align":"right","auto-label-width":"",model:n,class:"form"},{default:u(()=>[e(k,{gutter:16,wrap:""},{default:u(()=>[e(i,{md:6,xxl:12},{default:u(()=>[e(d,{field:"value1",label:"\u59D3\u540D"},{default:u(()=>[e(g,{modelValue:n.value1,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value1=a),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{md:6,xxl:12},{default:u(()=>[e(d,{field:"value2",label:"\u624B\u673A"},{default:u(()=>[e(g,{modelValue:n.value2,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value2=a),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"},null,8,["modelValue"])]),_:1})]),_:1}),m(e(i,{md:6,xxl:12},{default:u(()=>[e(d,{field:"value3",label:"\u7C7B\u578B"},{default:u(()=>[e(y,{placeholder:"\u8BF7\u9009\u62E9"},{default:u(()=>[e(p,null,{default:u(()=>[le]),_:1}),e(p,null,{default:u(()=>[oe]),_:1}),e(p,null,{default:u(()=>[ne]),_:1})]),_:1})]),_:1})]),_:1},512),[[F,s.value]]),m(e(i,{md:6,xxl:12},{default:u(()=>[e(d,{field:"value3",label:"\u65F6\u95F4"},{default:u(()=>[e(N,{"show-time":"",modelValue:n.value3,"onUpdate:modelValue":o[2]||(o[2]=a=>n.value3=a),placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},512),[[F,s.value]]),m(e(i,{md:6,xxl:12},{default:u(()=>[e(d,{field:"value4",label:"\u72B6\u6001"},{default:u(()=>[e(y,{placeholder:"\u8BF7\u9009\u62E9"},{default:u(()=>[e(p,null,{default:u(()=>[se]),_:1}),e(p,null,{default:u(()=>[_e]),_:1})]),_:1})]),_:1})]),_:1},512),[[F,s.value]]),m(e(i,{md:6,xxl:12},{default:u(()=>[e(d,{field:"value5",label:"\u5730\u5740"},{default:u(()=>[e(g,{modelValue:n.value5,"onUpdate:modelValue":o[3]||(o[3]=a=>n.value5=a),placeholder:"\u8BF7\u8F93\u5165\u67E5\u8BE2\u5730\u5740"},null,8,["modelValue"])]),_:1})]),_:1},512),[[F,s.value]]),e(i,{span:12},{default:u(()=>[e(A,null,{default:u(()=>[e(c,{type:"primary",onClick:E},{icon:u(()=>[e(j)]),default:u(()=>[ie]),_:1}),e(c,null,{default:u(()=>[de]),_:1}),e(c,{type:"text",class:"collapsed-btn",onClick:o[4]||(o[4]=a=>s.value=!s.value)},{icon:u(()=>[s.value?(v(),b(I,{key:0})):(v(),b(q,{key:1}))]),default:u(()=>[l(x(s.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),X("section",ce,[m((v(),b(W,{"row-key":"id","page-position":"bottom",bordered:{cell:!0},data:C.value,scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:{showPageSize:!0,total:f(z),current:f(D),pageSize:f(w)},onPageChange:f(S),onPageSizeChange:f(P)},{columns:u(()=>[e(_,{title:"\u5E8F\u53F7",width:66,align:"center"},{cell:u(a=>[l(x(a.rowIndex+1),1)]),_:1}),e(_,{title:"\u59D3\u540D","data-index":"name",width:120}),e(_,{title:"\u5934\u50CF",width:80},{cell:u(({record:a})=>[e(K,{size:30,style:Y({backgroundColor:a.color})},{default:u(()=>[l(x(a.name[0]),1)]),_:2},1032,["style"])]),_:1}),e(_,{title:"\u624B\u673A\u53F7","data-index":"phone",width:150}),e(_,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"startTime",ellipsis:"",tooltip:""}),e(_,{title:"\u5730\u5740","data-index":"address",ellipsis:"",tooltip:""}),e(_,{title:"\u72B6\u6001",width:100},{cell:u(({record:a})=>[e(L,{"model-value":a.status,size:"medium","checked-color":"rgb(var(--success-6))"},{checked:u(()=>[re]),unchecked:u(()=>[pe]),_:2},1032,["model-value"])]),_:1}),e(_,{title:"\u64CD\u4F5C",width:200,align:"center"},{cell:u(({record:a})=>[e(k,{justify:"center"},{default:u(()=>[e(A,null,{default:u(()=>[e(c,{type:"primary",size:"mini"},{default:u(()=>[me]),_:1}),e(c,{size:"mini"},{default:u(()=>[fe]),_:1}),e(M,{type:"warning",content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?"},{default:u(()=>[e(c,{type:"primary",status:"danger",size:"mini"},{default:u(()=>[ve]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data","pagination","onPageChange","onPageSizeChange"])),[[H,h.value]])]),e($)])}}});const we=Z(he,[["__scopeId","data-v-187e7966"]]);export{we as default};

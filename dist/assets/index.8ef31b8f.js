import{_ as he}from"./GiTitle.977a1ddc.js";import{ex as ye,r as g,s as Ce,v as q,d as M,q as te,o as I,m as N,w as t,er as ae,ez as ke,j as B,a as F,n as we,ei as Fe,eu as xe,_ as L,h as Y,c as K,G as W,i as o,b as e,es as X,k as C,eD as De,eE as be,L as Be,el as ue,ej as Ee,J as $e,K as le,I as Ae,z as Ie,p as Te,e as Ve,u as ze,eq as Se,M as Ne}from"./index.57692254.js";import"./index.463d26de.js";import{u as Me}from"./usePagination.f332e6d8.js";import"./viewer.8faa7f55.js";import{o as Oe,c as Pe,f as Re}from"./index.c2523c05.js";import{G as J,a as je}from"./GiOptionItem.56a0b098.js";import{g as He}from"./index.062244c7.js";const Ge="/mock";function Ue(){return ye.get(`${Ge}/cate/tree`)}function We(r,_,i={alignPoint:!1}){const a=g(!1),m=g(0),c=g(0),u=p=>{a.value=p},f=()=>{const p={};return r.clientX>window.innerWidth-c.value?p.right=i.alignPoint?window.innerWidth-r.clientX-m.value/2+"px":window.innerWidth-r.clientX+"px":p.left=i.alignPoint?r.clientX+m.value/2+"px":r.clientX+"px",r.clientY>window.innerHeight-c.value?(p.bottom=window.innerHeight-r.clientY+"px",p["transform-origin"]="center bottom"):(p.top=r.clientY+2+"px",p["transform-origin"]="center top"),p["z-index"]=999,p};return Ce(()=>{a.value=!0,q(()=>{!_||(c.value=_==null?void 0:_.offsetHeight,m.value=_==null?void 0:_.offsetWidth,f())})}),{visible:a,setVisible:u,getStyle:f}}function qe(r,_="\u65B0\u5EFA\u5206\u7C7B"){let i=0;for(let a=0;a<r.length+1;a++)if(!r.includes(`${_}${a+1}`)){i=a+1;break}return`${_}${i}`}const Le=M({name:"GiContextMenu"}),Xe=M({...Le,props:{event:null,options:null,ignoreRefs:null},emits:["close"],setup(r,{expose:_,emit:i}){const a=r,m=g(null),{visible:c,setVisible:u,getStyle:f}=We(a.event,m,a.options);Oe(m,()=>{u(!1),i("close")},{capture:!1,ignore:a.ignoreRefs});const{width:p,height:x}=Pe();return te(()=>[p.value,x.value],()=>{u(!1),i("close")}),_({visible:c,onHidden:()=>{u(!1),i("close")}}),(k,h)=>(I(),N(xe,{name:"slide-dynamic-origin"},{default:t(()=>[ae(F("div",{class:"gi-context-menu",ref_key:"elRef",ref:m,style:Fe(B(f)())},[we(k.$slots,"default",{},void 0,!0)],4),[[ke,B(c)]])]),_:3}))}});const Je=L(Xe,[["__scopeId","data-v-4ada3c17"]]),Ye={id:"movetree",ref:"moveTreeRef",class:"ztree move-tree"},Ke=M({__name:"MoveTree",props:{treeData:{type:Array,default:()=>[]}},emits:["node-click"],setup(r,{emit:_}){const i=r,a=g(null),m=Y({callback:{onClick:(u,f,p)=>{c(u,f,p)}}});te(i.treeData,()=>{q(()=>{var u;a.value=$.fn.zTree.init($("#movetree"),m,i.treeData),(u=a.value)==null||u.expandAll(!0)})},{deep:!0,immediate:!0});function c(u,f,p){_("node-click",p)}return(u,f)=>(I(),K("ul",Ye,null,512))}}),Qe=C("\u65B0\u589E"),Ze=C("\u91CD\u547D\u540D"),et=C(" \u79FB\u52A8 "),tt=C("\u5220\u9664"),nt=M({__name:"Menu",props:{event:null,fileInfo:null,treeData:null,onClose:null,onClick:null},setup(r,{expose:_}){const i=r,a=g(null),m=g(null),c=g([m]),u=g(!1),f=W(()=>i.fileInfo.id!==""),p=W(()=>i.fileInfo.id!=="root"),x=W(()=>i.fileInfo.id!=="root"),T=W(()=>i.fileInfo.id!=="root"),k=()=>{u.value=!1,i.onClose()},h=w=>{if(w==="move")return u.value=!u.value,!1;q(()=>{var y;i.onClick(w),(y=a.value)==null||y.onHidden()})},V=()=>{var w;(w=a.value)==null||w.onHidden()};return _({menuRef:a,showMoveTreePopup:u,onClose:k,onClickItem:h}),(w,y)=>{const z=o("a-popover");return I(),N(Je,{ref_key:"menuRef",ref:a,event:r.event,ignoreRefs:c.value,onClose:k},{default:t(()=>[e(je,{width:110,ref:"optionRef",style:{position:"relative"}},{default:t(()=>[B(f)?(I(),N(J,{key:0,icon:"IconPlusCircle",onClick:y[0]||(y[0]=l=>h("add"))},{default:t(()=>[Qe]),_:1})):X("",!0),B(p)?(I(),N(J,{key:1,icon:"IconEdit",onClick:y[1]||(y[1]=l=>h("rename"))},{default:t(()=>[Ze]),_:1})):X("",!0),e(z,{position:"right",trigger:"click","content-style":{padding:0,overflow:"hidden"},"unmount-on-close":!1,"popup-visible":u.value},{content:t(()=>[F("section",{class:"move-tree-box",ref_key:"moveTreeBoxRef",ref:m},[e(Ke,{"tree-data":r.treeData,onNodeClick:V},null,8,["tree-data"])],512)]),default:t(()=>[B(x)?(I(),N(J,{key:0,more:"",icon:"IconExport",active:u.value,onClick:y[2]||(y[2]=l=>h("move"))},{default:t(()=>[et]),_:1},8,["active"])):X("",!0)]),_:1},8,["popup-visible"]),B(T)?(I(),N(J,{key:2,icon:"IconDelete",onClick:y[3]||(y[3]=l=>h("delete"))},{default:t(()=>[tt]),_:1})):X("",!0)]),_:1},512)]),_:1},8,["event","ignoreRefs"])}}});const ot=L(nt,[["__scopeId","data-v-e36b4e3d"]]);let R=null,H=null;function at(r,_,i){return new Promise(a=>{m(),H=document.createElement("div"),document.body.appendChild(H),R=De(ot,{event:r,fileInfo:_,treeData:i,onClick:c=>{a({mode:c,fileInfo:_}),setTimeout(()=>{m()},360)},onClose:()=>{setTimeout(()=>{m()},360)}}),R.use(be),R.use(Be),R.mount(H);function m(){R!==null&&(R.unmount(),R=null),H!==null&&(document.body.removeChild(H),H=null)}})}const ee="/gi-demo/assets/com-file-open.a82dbda1.svg",U="/gi-demo/assets/com-file-close.e0ebbcc4.svg",ut="/gi-demo/assets/com-file.9070581a.svg",lt={class:"cate-tree"},st={class:"search-wrap"},it={class:"wrap"},ct=M({__name:"index",props:{type:{type:Number,default:1},placeholder:{type:String,default:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"}},emits:["node-click"],setup(r,{emit:_}){const i=g(!1),a=g(""),m=g(null),c=g([]),u=g(null),f=g(null),p=(l,d,s)=>{console.log("\u70B9\u51FB\u8282\u70B9",s),f.value=s,_("node-click")},x=Y({callback:{onRightClick:(l,d,s)=>{console.log("\u9F20\u6807\u53F3\u952E",s),s&&(f.value=s,at(l,s,c.value).then(n=>{console.log("res",n),n.mode==="add"&&h(),n.mode==="rename"&&V(),n.mode==="delete"&&w()}))},onClick:(l,d,s)=>{p(l,d,s)}}}),T=l=>{if(!l.length)return;function d(s){s.forEach(n=>{n.children&&n.children.length?(n.iconOpen=ee,n.iconClose=U,d(n.children)):(n.children=null,n.iconOpen=ee,n.iconClose=U,n.icon=U,n.type==null&&(n.icon=ut))})}d(l)};(async()=>{try{i.value=!0;const l=await Ue();if(l.success){const d=l.data;T(d),c.value=d,q(()=>{var s;u.value=$.fn.zTree.init($("#treeDemo"),x,c.value),(s=u.value)==null||s.expandAll(!0)})}}catch(l){return l}finally{i.value=!1}})();const h=()=>{var D,j,O;const l=((D=f.value)==null?void 0:D.children)||[];let d="\u65B0\u5EFA\u5206\u7C7B1";if(l&&l.length){const S=l.map(E=>E.name);d=qe(S,"\u65B0\u5EFA\u5206\u7C7B")}const s=new Date().getTime().toString(),n={id:s,name:d,children:null,iconOpen:ee,iconClose:U,icon:U,isParent:!1};(j=u.value)==null||j.addNodes(f.value||{},n,!0);const v=(O=u.value)==null?void 0:O.getNodesByParam("id",s);setTimeout(()=>{var S;(S=u.value)==null||S.editName(v[0])},100)},V=()=>{q(()=>{var d,s,n;const l=(s=u.value)==null?void 0:s.getNodesByParam("id",(d=f.value)==null?void 0:d.id);(n=u.value)==null||n.editName(l[0])})},w=()=>{ue.warning({title:"\u63D0\u793A",content:"\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F",hideCancel:!1})},y=(l,d)=>{let s=!1;if(l.name.indexOf(d)>-1&&(s=!0),l.children){const n=l.children;for(let v=0;v<n.length;v++){const D=n[v];y(D,d)?s=!0:n.splice(v--,1)}}return s},z=()=>{var d,s;let l=a.value;if(!l)u.value=$.fn.zTree.init($("#treeDemo"),x,c.value),(d=u.value)==null||d.expandAll(!0);else{const n=JSON.parse(JSON.stringify(c.value));for(let v=0;v<n.length;v++)y(n[v],l)||n.splice(v--,1);u.value=$.fn.zTree.init($("#treeDemo"),x,n),(s=u.value)==null||s.expandAll(!0)}};return(l,d)=>{const s=o("icon-search"),n=o("a-input");return I(),K("div",lt,[F("div",st,[e(n,{"allow-clear":"",maxlength:20,placeholder:r.placeholder,modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=v=>a.value=v),onInput:z,onClear:z},{prefix:t(()=>[e(s)]),_:1},8,["placeholder","modelValue"])]),F("div",it,[F("ul",{id:"treeDemo",ref_key:"treeRef",ref:m,class:"ztree cate-ztree"},null,512)])])}}});const rt=L(ct,[["__scopeId","data-v-f49d6ff3"]]),ne=r=>(Te("data-v-f11df0a9"),r=r(),Ve(),r),dt=ne(()=>F("div",null,"\u4EC5\u652F\u6301\u4E2D\u6587\u59D3\u540D",-1)),_t=C("\u5173\u95ED"),pt=C("\u5F00\u542F"),mt=ne(()=>F("span",null,"\u6743\u9650\u914D\u7F6E",-1)),ft=ne(()=>F("span",null,"\u81EA\u5B9A\u4E49\u7BA1\u7406\u5458\u3001\u7F16\u8F91\u8005\u7684\u6743\u9650\uFF0C \u70B9\u51FB",-1)),vt=C("\u4E86\u89E3\u66F4\u591A\u6743\u9650"),gt=C("\u7BA1\u7406\u5458"),ht=C("\u7F16\u8F91\u8005"),yt=M({__name:"EditDialog",props:{modelValue:{type:Boolean,default:!1},formData:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(r,{emit:_}){const i=r,a=Re(i,"modelValue",_),m=[{name:"\u65B0\u589E"},{name:"\u7F16\u8F91"},{name:"\u91CD\u547D\u540D"},{name:"\u5206\u4EAB"},{name:"\u5220\u9664"}],c=Y({name:"",address:"",status:!1}),u=Y({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"},{minLength:1,maxLength:4,message:"\u540D\u5B57\u6700\u957F\u4E0D\u8D85\u8FC74\u4E2A\u5B57\u7B26"}],status:[{required:!0}]}),f=W(()=>!!i.formData.id);te(a,()=>{const{name:T,address:k,status:h}=i.formData;c.name=T,c.address=k,c.status=h||!1});const p=()=>{a.value=!1},x=()=>{a.value=!1};return(T,k)=>{const h=o("a-input"),V=o("a-form-item"),w=o("a-radio"),y=o("a-radio-group"),z=o("a-form"),l=o("icon-question-circle-fill"),d=o("a-link"),s=o("a-tooltip"),n=o("a-space"),v=o("icon-right"),D=o("a-checkbox"),j=o("a-checkbox-group"),O=o("a-row"),S=o("a-collapse-item"),E=o("a-collapse"),Q=o("a-modal");return I(),N(Q,{visible:B(a),"onUpdate:visible":k[3]||(k[3]=b=>Ie(a)?a.value=b:null),title:B(f)?"\u7F16\u8F91":"\u65B0\u589E",onOk:x,onCancel:p},{default:t(()=>[e(z,{ref:"formRef",model:c,style:{width:"450px"}},{default:t(()=>[e(V,{field:"name",label:"\u59D3\u540D",rules:u.name},{extra:t(()=>[dt]),default:t(()=>[e(h,{modelValue:c.name,"onUpdate:modelValue":k[0]||(k[0]=b=>c.name=b),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",style:{width:"280px"}},null,8,["modelValue"])]),_:1},8,["rules"]),e(V,{field:"address",label:"\u5730\u5740"},{default:t(()=>[e(h,{modelValue:c.address,"onUpdate:modelValue":k[1]||(k[1]=b=>c.address=b),placeholder:"\u8BF7\u8F93\u5165\u5730\u5740",style:{width:"280px"}},null,8,["modelValue"])]),_:1}),e(V,{field:"status",label:"\u72B6\u6001",rules:u.status},{default:t(()=>[e(y,{modelValue:c.status,"onUpdate:modelValue":k[2]||(k[2]=b=>c.status=b)},{default:t(()=>[e(w,{value:!1},{default:t(()=>[_t]),_:1}),e(w,{value:!0},{default:t(()=>[pt]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["model"]),e(E,{bordered:!1,"default-active-key":["1"]},{default:t(()=>[e(S,{"show-expand-icon":!0,key:"1"},{header:t(()=>[e(n,null,{default:t(()=>[mt,e(s,{position:"right","content-style":{width:"200px"}},{content:t(()=>[ft,e(d,{type:"primary"},{default:t(()=>[vt]),_:1})]),default:t(()=>[e(l,{style:{color:"rgb(var(--warning-6))"}})]),_:1})]),_:1})]),"expand-icon":t(({active:b})=>[e(v,{class:Ee({gi_rotate_90deg:b})},null,8,["class"])]),default:t(()=>[(I(),K(Ae,null,$e(m,(b,G)=>e(O,{justify:"space-between",key:G},{default:t(()=>[F("span",null,le(b.name),1),e(j,null,{default:t(()=>[e(D,{value:"1"},{default:t(()=>[gt]),_:1}),e(D,{value:"2"},{default:t(()=>[ht]),_:1})]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["visible","title"])}}});const Ct=L(yt,[["__scopeId","data-v-f11df0a9"]]),kt={class:"manage"},wt={class:"tab"},Ft={class:"gi_lr_page wrap"},xt={class:"left"},Dt={class:"right"},bt={class:"content"},Bt=C("\u5220\u9664"),Et=C("\u5317\u4EAC"),$t=C("\u4E0A\u6D77"),At=C("\u5E7F\u5DDE"),It={class:"table-box"},Tt=C("\u5F00\u542F"),Vt=C("\u5173\u95ED"),zt=C("\u4FEE\u6539"),St=C("\u8BE6\u60C5"),Nt=C("\u5220\u9664"),Mt=M({name:"IndicatorManage"}),Ot=M({...Mt,setup(r){const _=ze(),{current:i,pageSize:a,total:m,changeCurrent:c,changePageSize:u,setTotal:f}=Me(()=>{h()}),p=g("2"),x=g([]),T=g(!1),k=n=>n<30?"danger":n<60?"warning":"success",h=async()=>{try{T.value=!0;const n=await He({current:i.value,pageSize:a.value});x.value=n.data.list,f(n.data.total)}catch(n){return n}finally{T.value=!1}};h();const V=()=>{ue.warning({title:"\u63D0\u793A",content:"\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F",hideCancel:!1,onOk:()=>{x.value=[]}})},w=g(!1),y=g({}),z=n=>{y.value=n,w.value=!0},l=()=>{w.value=!0},d=()=>{_.push({path:"/indicator/detail"})},s=n=>{Ne.success("\u5220\u9664\u6210\u529F")};return(n,v)=>{const D=o("a-tab-pane"),j=o("a-tabs"),O=he,S=o("icon-plus"),E=o("a-button"),Q=o("icon-delete"),b=o("icon-download"),G=o("a-space"),Z=o("a-option"),se=o("a-select"),ie=o("a-input"),ce=o("icon-search"),re=o("a-input-group"),de=o("icon-refresh"),oe=o("a-row"),P=o("a-table-column"),_e=o("a-progress"),pe=o("a-switch"),me=o("a-popconfirm"),fe=o("a-table"),ve=Se("loading");return I(),K("div",kt,[F("section",wt,[e(j,{"hide-content":"",size:"medium","active-key":p.value,"onUpdate:active-key":v[0]||(v[0]=A=>p.value=A)},{default:t(()=>[e(D,{key:"1",title:"\u539F\u5B50\u6307\u6807\u7BA1\u7406"}),e(D,{key:"2",title:"\u65F6\u95F4\u5468\u671F\u7BA1\u7406"}),e(D,{key:"3",title:"\u7EF4\u5EA6\u7BA1\u7406"}),e(D,{key:"4",title:"\u8BA1\u91CF\u5355\u4F4D\u7BA1\u7406"}),e(D,{key:"5",title:"\u6D3E\u751F\u6307\u6807\u7BA1\u7406"})]),_:1},8,["active-key"])]),F("section",Ft,[F("div",xt,[e(O,{title:"\u6307\u6807\u5206\u7C7B"}),e(rt,{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",onNodeClick:h})]),F("div",Dt,[e(O,{title:"\u6307\u6807\u5217\u8868"}),F("div",bt,[e(oe,{justify:"space-between",style:{"margin-bottom":"12px"}},{default:t(()=>[e(G,null,{default:t(()=>[e(E,{type:"primary",onClick:l},{icon:t(()=>[e(S)]),_:1}),e(E,{type:"primary",status:"danger",onClick:V},{icon:t(()=>[e(Q)]),default:t(()=>[Bt]),_:1}),e(E,{type:"primary",status:"success"},{icon:t(()=>[e(b)]),_:1})]),_:1}),e(G,null,{default:t(()=>[e(se,{class:"gi_select_input",placeholder:"\u8BF7\u9009\u62E9","trigger-props":{updateAtScroll:!0}},{default:t(()=>[e(Z,null,{default:t(()=>[Et]),_:1}),e(Z,null,{default:t(()=>[$t]),_:1}),e(Z,null,{default:t(()=>[At]),_:1})]),_:1}),e(re,null,{default:t(()=>[e(ie,{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD","allow-clear":""}),e(E,{type:"primary",onClick:h},{default:t(()=>[e(ce)]),_:1})]),_:1}),e(E,{type:"primary",onClick:h},{icon:t(()=>[e(de)]),_:1})]),_:1})]),_:1}),F("section",It,[ae((I(),N(fe,{"row-key":"id",bordered:{cell:!0},data:x.value,scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:{showPageSize:!0,total:B(m),current:B(i),pageSize:B(a)},onPageChange:B(c),onPageSizeChange:B(u)},{columns:t(()=>[e(P,{title:"\u5E8F\u53F7",width:68},{cell:t(A=>[C(le(A.rowIndex+1),1)]),_:1}),e(P,{title:"\u59D3\u540D","data-index":"name"}),e(P,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"startTime",width:180}),e(P,{title:"\u5730\u5740","data-index":"address",ellipsis:"",tooltip:""}),e(P,{title:"\u6BD4\u4F8B",width:200},{cell:t(({record:A})=>[e(_e,{status:k(A.proportion),percent:A.proportion/100},null,8,["status","percent"])]),_:1}),e(P,{title:"\u72B6\u6001",width:100},{cell:t(({record:A})=>[e(pe,{"model-value":A.status,size:"medium"},{checked:t(()=>[Tt]),unchecked:t(()=>[Vt]),_:2},1032,["model-value"])]),_:1}),e(P,{title:"\u64CD\u4F5C",width:200,align:"center"},{cell:t(({record:A})=>[e(oe,{justify:"center"},{default:t(()=>[e(G,null,{default:t(()=>[e(E,{type:"primary",size:"mini",onClick:ge=>z(A)},{default:t(()=>[zt]),_:2},1032,["onClick"]),e(E,{size:"mini",onClick:d},{default:t(()=>[St]),_:1}),e(me,{type:"warning",content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?",onOk:ge=>s()},{default:t(()=>[e(E,{type:"primary",status:"danger",size:"mini"},{default:t(()=>[Nt]),_:1})]),_:2},1032,["onOk"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1},8,["data","pagination","onPageChange","onPageSizeChange"])),[[ve,T.value]])])])]),e(Ct,{modelValue:w.value,"onUpdate:modelValue":v[1]||(v[1]=A=>w.value=A),"form-data":y.value},null,8,["modelValue","form-data"])])])}}});const Lt=L(Ot,[["__scopeId","data-v-b0cda5b5"]]);export{Lt as default};

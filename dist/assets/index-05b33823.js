import{_ as R}from"./index-15ab2ac0.js";import{d as D,j as X,h as k,a,o as r,i as Y,b as e,w as t,g as Z,u as p,l as o,E as f,G as g,c as v,t as V,Q as ee,_ as te}from"./index-ad0224cd.js";import"./index-578bfdd4.js";import{u as ae}from"./usePagination-44eed113.js";import{g as le}from"./index-d694372f.js";const oe={class:"table-page"},ne={class:"table-box"},se=D({name:"MainTable"}),_e=D({...se,setup(ce){const s=X({value1:"",value2:"",value3:"",value4:"",value5:""}),x=k(!1),z=k([]),_=k(!1),{current:C,pageSize:S,total:U,changeCurrent:N,changePageSize:E,setTotal:G}=ae(()=>h()),h=async()=>{try{x.value=!0;const m=await le({current:C.value,pageSize:S.value});z.value=m.data.list,G(m.data.total)}catch{x.value=!1}};return h(),(m,n)=>{const I=a("a-alert"),b=a("a-input"),i=a("a-form-item"),d=a("a-col"),u=a("a-option"),P=a("a-select"),j=a("a-date-picker"),F=a("icon-search"),y=a("a-button"),L=a("icon-up"),M=a("icon-down"),T=a("a-space"),Q=a("a-row"),W=a("a-form"),c=a("a-table-column"),$=a("a-avatar"),B=a("a-typography-text"),q=a("icon-edit"),w=a("a-link"),A=a("icon-eye"),H=a("icon-delete"),J=a("a-popconfirm"),K=a("a-table"),O=R;return r(),Y("div",oe,[e(I,{type:"success"},{default:t(()=>[o("三级路由【缓存路由、固定表格高度、并根据窗口大小自适应】的示例。详情页请点击操作列按钮，支持tab多开并高亮左侧菜单")]),_:1}),e(W,{"label-align":"right","auto-label-width":"",model:s,class:"form"},{default:t(()=>[e(Q,{gutter:16,wrap:""},{default:t(()=>[e(d,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:t(()=>[e(i,{field:"value1",label:"姓名"},{default:t(()=>[e(b,{modelValue:s.value1,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value1=l),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:t(()=>[e(i,{field:"value2",label:"手机"},{default:t(()=>[e(b,{modelValue:s.value2,"onUpdate:modelValue":n[1]||(n[1]=l=>s.value2=l),placeholder:"请输入手机号码"},null,8,["modelValue"])]),_:1})]),_:1}),f(e(d,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:t(()=>[e(i,{field:"value3",label:"类型"},{default:t(()=>[e(P,{placeholder:"请选择"},{default:t(()=>[e(u,null,{default:t(()=>[o("北京")]),_:1}),e(u,null,{default:t(()=>[o("上海")]),_:1}),e(u,null,{default:t(()=>[o("广州")]),_:1})]),_:1})]),_:1})]),_:1},512),[[g,_.value]]),f(e(d,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:t(()=>[e(i,{field:"value3",label:"时间"},{default:t(()=>[e(j,{"show-time":"",modelValue:s.value3,"onUpdate:modelValue":n[2]||(n[2]=l=>s.value3=l),placeholder:"请选择创建时间",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},512),[[g,_.value]]),f(e(d,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:t(()=>[e(i,{field:"value4",label:"状态"},{default:t(()=>[e(P,{placeholder:"请选择"},{default:t(()=>[e(u,null,{default:t(()=>[o("开启")]),_:1}),e(u,null,{default:t(()=>[o("关闭")]),_:1})]),_:1})]),_:1})]),_:1},512),[[g,_.value]]),f(e(d,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:t(()=>[e(i,{field:"value5",label:"地址"},{default:t(()=>[e(b,{modelValue:s.value5,"onUpdate:modelValue":n[3]||(n[3]=l=>s.value5=l),placeholder:"请输入查询地址"},null,8,["modelValue"])]),_:1})]),_:1},512),[[g,_.value]]),e(d,{span:12},{default:t(()=>[e(T,null,{default:t(()=>[e(y,{type:"primary",onClick:h},{icon:t(()=>[e(F)]),default:t(()=>[o("查询")]),_:1}),e(y,null,{default:t(()=>[o("重置")]),_:1}),e(y,{type:"text",class:"collapsed-btn",onClick:n[4]||(n[4]=l=>_.value=!_.value)},{icon:t(()=>[_.value?(r(),v(L,{key:0})):(r(),v(M,{key:1}))]),default:t(()=>[o(V(_.value?"收起":"展开"),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),Z("section",ne,[e(K,{"row-key":"id",size:"small","page-position":"bottom",bordered:{cell:!0},loading:x.value,data:z.value,scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:{showPageSize:!0,total:p(U),current:p(C),pageSize:p(S)},onPageChange:p(N),onPageSizeChange:p(E)},{columns:t(()=>[e(c,{title:"序号",width:66,align:"center"},{cell:t(l=>[o(V(l.rowIndex+1),1)]),_:1}),e(c,{title:"姓名","data-index":"name",width:120}),e(c,{title:"头像",width:80},{cell:t(({record:l})=>[e($,{size:30,style:ee({backgroundColor:l.color})},{default:t(()=>[o(V(l.name[0]),1)]),_:2},1032,["style"])]),_:1}),e(c,{title:"手机号","data-index":"phone",width:150}),e(c,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),e(c,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),e(c,{title:"状态",width:100,align:"center"},{cell:t(({record:l})=>[l.status?(r(),v(B,{key:0,type:"success"},{default:t(()=>[o("开启")]),_:1})):(r(),v(B,{key:1,type:"danger"},{default:t(()=>[o("关闭")]),_:1}))]),_:1}),e(c,{title:"操作",width:230,align:"center"},{cell:t(({record:l})=>[e(T,{size:4},{default:t(()=>[e(w,null,{icon:t(()=>[e(q,{size:15,"stroke-width":3})]),default:t(()=>[o("编辑")]),_:1}),e(w,null,{icon:t(()=>[e(A,{size:15,"stroke-width":3})]),default:t(()=>[o("详情")]),_:1}),e(J,{type:"warning",content:"您确定要删除该项吗?"},{default:t(()=>[e(w,{status:"danger"},{icon:t(()=>[e(H,{size:15,"stroke-width":3})]),default:t(()=>[o("删除")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["loading","data","pagination","onPageChange","onPageSizeChange"])]),e(O)])}}});const me=te(_e,[["__scopeId","data-v-086e4bac"]]);export{me as default};

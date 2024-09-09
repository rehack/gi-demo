import{_ as e}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-6kDWA25M.js";import{_ as a}from"./AddDeptModal.vue_vue_type_script_setup_true_lang-BdbGBuVb.js";import{d as t,b as l,R as n,e as s,o as i,f as o,h as d,w as r,g as u,i as c,c as p,J as m,a as f,S as _,Q as y}from"./index-nwng0QS3.js";import{u as h}from"./useBreakpoint-BCl7Sgev.js";import{a as k}from"./useDept-O3vghuds.js";import{d as g}from"./index-BC6V0ZU_.js";import{u as w}from"./useDict-DnO1faH7.js";import"./useForm-DZWFr-rC.js";import"./index-BHeqEjUV.js";const x={class:"gi_page dept-manage"},v=t({name:"SystemDept",__name:"index",setup(t){const{data:v}=w({code:"status"}),S=l(),C=l(),j=n({name:"",status:""}),{loading:b,tableData:D,selectedKeys:A,search:V,select:R,selectAll:z,handleDelete:B}=h((()=>k()),{immediate:!0,onSuccess:()=>{y((()=>{var e;null==(e=C.value)||e.expandAll(!0)}))}}),I=()=>{j.name="",j.status="",V()},M=()=>{var e;null==(e=S.value)||e.add()},U=()=>{if(!A.value.length)return _.warning("请选择部门");B((()=>g({ids:A.value})))};return(t,l)=>{const n=s("icon-search"),_=s("a-input"),y=s("a-select"),h=s("a-button"),k=s("icon-refresh"),w=s("a-space"),J=s("icon-plus"),O=s("icon-delete"),W=s("a-row"),F=s("IconDown"),G=s("IconRight"),K=s("a-table-column"),Q=e,T=s("icon-edit"),X=s("a-popconfirm"),q=s("a-table"),E=s("a-card");return i(),o("div",x,[d(E,{title:"部门管理"},{default:r((()=>[d(w,{wrap:""},{default:r((()=>[d(_,{modelValue:u(j).name,"onUpdate:modelValue":l[0]||(l[0]=e=>u(j).name=e),placeholder:"输入部门名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:r((()=>[d(n)])),_:1},8,["modelValue"]),d(y,{modelValue:u(j).status,"onUpdate:modelValue":l[1]||(l[1]=e=>u(j).status=e),options:u(v),placeholder:"部门状态",style:{width:"120px"}},null,8,["modelValue","options"]),d(h,{type:"primary",onClick:u(V)},{icon:r((()=>[d(n)])),default:r((()=>[l[3]||(l[3]=c("span",null,"搜索",-1))])),_:1},8,["onClick"]),d(h,{onClick:I},{icon:r((()=>[d(k)])),default:r((()=>[l[4]||(l[4]=c("span",null,"重置",-1))])),_:1})])),_:1}),d(W,null,{default:r((()=>[d(w,{wrap:""},{default:r((()=>[d(h,{type:"primary",onClick:M},{icon:r((()=>[d(J)])),default:r((()=>[l[5]||(l[5]=c("span",null,"新增",-1))])),_:1}),d(h,{type:"primary",status:"danger",onClick:U},{icon:r((()=>[d(O)])),default:r((()=>[l[6]||(l[6]=c("span",null,"删除",-1))])),_:1})])),_:1})])),_:1}),d(q,{ref_key:"tableRef",ref:C,"row-key":"id",bordered:{cell:!0},data:u(D),loading:u(b),scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:!1,"row-selection":{type:"checkbox",showCheckedAll:!1},"selected-keys":u(A),onSelect:u(R),onSelectAll:u(z)},{"expand-icon":r((({expanded:e})=>[e?(i(),p(F,{key:0})):(i(),p(G,{key:1}))])),columns:r((()=>[d(K,{title:"部门名称","data-index":"name",width:160}),d(K,{title:"排序","data-index":"sort",width:100,align:"center"}),d(K,{title:"状态",width:100,align:"center"},{cell:r((({record:e})=>[d(Q,{status:e.status},null,8,["status"])])),_:1}),d(K,{title:"描述","data-index":"description",width:250}),d(K,{title:"创建时间","data-index":"createTime",width:200}),d(K,{title:"操作",width:200,align:"center",fixed:u(m)()?void 0:"right"},{cell:r((({record:e})=>[d(w,null,{default:r((()=>[d(h,{type:"primary",size:"mini",onClick:a=>{return t=e,void(null==(l=S.value)||l.edit(t.id));var t,l}},{icon:r((()=>[d(T)])),default:r((()=>[l[7]||(l[7]=c("span",null,"编辑",-1))])),_:2},1032,["onClick"]),e.parentId?(i(),p(h,{key:0,type:"primary",status:"success",size:"mini",onClick:l[2]||(l[2]=e=>M())},{icon:r((()=>[d(J)])),default:r((()=>[l[8]||(l[8]=c("span",null,"新增",-1))])),_:1})):f("",!0),d(X,{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:a=>(async e=>B((()=>g({ids:[e.id]})),{showModal:!1}))(e)},{default:r((()=>[d(h,{type:"primary",status:"danger",size:"mini"},{icon:r((()=>[d(O)])),default:r((()=>[l[9]||(l[9]=c("span",null,"删除",-1))])),_:1})])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading","selected-keys","onSelect","onSelectAll"])])),_:1}),d(a,{ref_key:"AddDeptModalRef",ref:S,onSaveSuccess:u(V)},null,8,["onSaveSuccess"])])}}});export{v as default};

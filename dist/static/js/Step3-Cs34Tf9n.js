import{d as a,e,o as t,f as s,h as l,w as i,G as o,i as u,t as n,_ as r}from"./index-nwng0QS3.js";const c={class:"step-3"},f={class:"info-box"},m=r(a({name:"Step3",__name:"Step3",props:{form:{}},emits:["again"],setup(a,{emit:r}){const m=r,d=()=>{m("again")};return(a,r)=>{const m=e("a-result"),p=e("a-descriptions-item"),_=e("a-statistic"),b=e("a-descriptions"),v=e("a-button"),x=e("a-space"),y=e("a-row");return t(),s("div",c,[l(m,{status:"success",title:"操作成功"},{subtitle:i((()=>r[0]||(r[0]=[o("预计两小时内到账")]))),_:1}),u("section",f,[l(b,{column:1},{default:i((()=>[l(p,{label:"付款账户："},{default:i((()=>[o(n(a.form.payAccount),1)])),_:1}),l(p,{label:"收款账户："},{default:i((()=>[o(n(a.form.recAccount),1)])),_:1}),l(p,{label:"收款人姓名："},{default:i((()=>[o(n(a.form.recName),1)])),_:1}),l(p,{label:"转账金额："},{default:i((()=>[l(_,{value:Number(a.form.amount),precision:2,"value-from":0,animation:"","animation-duration":600},{prefix:i((()=>r[1]||(r[1]=[o("￥")]))),suffix:i((()=>r[2]||(r[2]=[o("元")]))),_:1},8,["value"])])),_:1})])),_:1})]),l(y,{justify:"center"},{default:i((()=>[l(x,null,{default:i((()=>[l(v,{type:"primary",onClick:d},{default:i((()=>r[3]||(r[3]=[o("再转一笔")]))),_:1}),l(v,null,{default:i((()=>r[4]||(r[4]=[o("查看账单")]))),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-66d230e8"]]);export{m as default};

import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang-CMABCExd.js";import l from"./index-PPJ8-arn.js";import{b as s,d as t,I as o,K as r,R as i,f as n,h as u,w as d,n as m,e as c,o as p,i as _,g as f,J as g,H as v,G as w,S as y,_ as x}from"./index-nwng0QS3.js";import{P as h}from"./regexp-LyZ7ySAN.js";import"./index-BHeqEjUV.js";import"./CornerTop.vue_vue_type_script_setup_true_lang-CFFPDq-I.js";import"./CornerBottom.vue_vue_type_script_setup_true_lang-C76EHqiN.js";const b={class:"login"},V={class:"login-right"},j=x(t({name:"Login",__name:"index",setup(t){const x=m(),j=o(),k=r(),z=i({username:"admin",password:"123456"}),q={username:[{required:!0,message:"请输入账号"}],password:[{required:!0,message:"请输入密码"},{match:h,message:"输入密码格式不正确"}]},L=s(!1),{loading:C,setLoading:R}=function(e=!1){const a=s(e);return{loading:a,setLoading:e=>{a.value=e},toggle:()=>{a.value=!a.value}}}(),S=s(""),U=s(),A=async()=>{var e;try{if(await(null==(e=U.value)?void 0:e.validate()))return;R(!0),await j.login(z),k.reset();const{redirect:a,...l}=x.currentRoute.value.query;x.push({path:a||"/",query:{...l}}),y.success("登录成功")}catch(a){S.value=a.message}finally{R(!1)}};return(s,t)=>{const o=c("a-col"),r=c("icon-user"),i=c("a-input"),m=c("a-form-item"),y=c("icon-lock"),x=c("a-input-password"),h=c("a-checkbox"),j=c("a-link"),k=c("a-row"),R=c("a-button"),S=c("a-space"),B=c("a-form"),I=a;return p(),n("div",b,[u(k,{align:"stretch",class:"login-box"},{default:d((()=>[u(o,{xs:0,sm:12,md:15},{default:d((()=>t[3]||(t[3]=[_("div",{class:"login-left"},[_("img",{class:"login-left__img",src:"/gi-demo/static/svg/login-img-BnXpmWAf.svg"})],-1)]))),_:1}),u(o,{xs:24,sm:12,md:9},{default:d((()=>[_("div",V,[u(B,{ref_key:"formRef",ref:U,size:f(g)()?"large":"medium",model:f(z),rules:q,style:{width:"84%"},"label-col-style":{display:"none"},"wrapper-col-style":{flex:1}},{default:d((()=>[t[8]||(t[8]=_("h3",{class:"login-right__title"},[_("img",{class:"logo",src:e}),_("span",null,"Admin Pro")],-1)),u(m,{field:"username"},{default:d((()=>[u(i,{modelValue:f(z).username,"onUpdate:modelValue":t[0]||(t[0]=e=>f(z).username=e),placeholder:"账号 admin/user","allow-clear":""},{prefix:d((()=>[u(r,{"stroke-width":1,style:{fontSize:"20px"}})])),_:1},8,["modelValue"])])),_:1}),u(m,{field:"password"},{default:d((()=>[u(x,{modelValue:f(z).password,"onUpdate:modelValue":t[1]||(t[1]=e=>f(z).password=e),placeholder:"密码","allow-clear":""},{prefix:d((()=>[u(y,{"stroke-width":1,style:{fontSize:"20px"}})])),_:1},8,["modelValue"])])),_:1}),u(m,null,{default:d((()=>[u(k,{justify:"space-between",align:"center",class:"w-full"},{default:d((()=>[u(h,{modelValue:f(L),"onUpdate:modelValue":t[2]||(t[2]=e=>v(L)?L.value=e:null)},{default:d((()=>t[4]||(t[4]=[w("记住密码")]))),_:1},8,["modelValue"]),u(j,null,{default:d((()=>t[5]||(t[5]=[w("忘记密码")]))),_:1})])),_:1})])),_:1}),u(m,null,{default:d((()=>[u(S,{direction:"vertical",fill:"",class:"w-full"},{default:d((()=>[u(R,{type:"primary",size:"large",long:"",loading:f(C),onClick:A},{default:d((()=>t[6]||(t[6]=[w("登录")]))),_:1},8,["loading"]),u(R,{type:"text",size:"large",long:"",class:"register-btn"},{default:d((()=>t[7]||(t[7]=[w("注册账号")]))),_:1})])),_:1})])),_:1})])),_:1},8,["size","model"])])])),_:1})])),_:1}),u(I,{class:"theme-btn"}),u(l)])}}}),[["__scopeId","data-v-61f953bd"]]);export{j as default};

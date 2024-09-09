import{E as e,a as l}from"./regexp-LyZ7ySAN.js";import{b as a,d,k as t,e as s,o,c as i,w as u,h as m,g as r,fa as n,fb as c,G as p,H as f,S as h}from"./index-nwng0QS3.js";import{g as b}from"./user-lmqD6CdI.js";import{s as g}from"./index-BC6V0ZU_.js";import{u as v}from"./useDept-O3vghuds.js";import{b as V}from"./role-rmrCAAzz.js";import{u as x}from"./useForm-DZWFr-rC.js";const _=d({__name:"AddUserModal",emits:["save-success"],setup(d,{expose:_,emit:w}){const k=w,{roleList:y,getRoleList:I}=function(){const e=a(!1),l=a([]),d=a(0);return{roleList:l,getRoleList:async()=>{try{e.value=!0;const a=await V({page:1,size:99});l.value=a.data.records.filter((e=>1===e.status)),d.value=a.data.total}finally{e.value=!1}},loading:e,total:d}}();I();const U=t((()=>y.value.map((e=>({label:e.name,value:e.code}))))),{deptList:j,getDeptList:L}=v();L();const M={xs:24,sm:24,md:12,lg:12,xl:12,xxl:12},q=a(),R=a(""),z=t((()=>!!R.value)),F=t((()=>z.value?"编辑用户":"新增用户")),D=a(!1),{form:H,resetForm:O}=x({id:"",username:"",nickname:"",gender:1,phone:"",email:"",deptId:"",roleIds:[],description:"",status:1,type:2,disabled:!1}),W={username:[{required:!0,message:"请输入用户名"},{min:2,max:4,message:"长度在 2 - 4个字符"}],nickname:[{required:!0,message:"请输入昵称"},{min:2,max:4,message:"长度在 2 - 4个字符"}],email:[{match:e,message:"邮箱格式不正确"}],phone:[{match:l,message:"手机号格式不正确"}],deptId:[{required:!0,message:"请选择所属部门"}],roleIds:[{required:!0,message:"请选择角色"}],status:[{required:!0,message:"请选择状态"}]},A=()=>{var e;null==(e=q.value)||e.resetFields(),O()};_({add:()=>{R.value="",D.value=!0},edit:async e=>{D.value=!0,R.value=e;const l=await b({id:e});Object.assign(H,l.data)}});const B=async()=>{var e;try{if(await(null==(e=q.value)?void 0:e.validate()))return!1;return!!(await g(H)).data&&(h.success("模拟保存成功"),k("save-success"),!0)}catch(l){return!1}};return(e,l)=>{const a=s("a-input"),d=s("a-form-item"),t=s("a-col"),h=s("a-row"),b=s("a-radio"),g=s("a-radio-group"),v=s("a-tree-select"),V=s("a-select"),x=s("a-textarea"),_=s("a-switch"),w=s("a-form"),k=s("a-modal");return o(),i(k,{visible:r(D),"onUpdate:visible":l[9]||(l[9]=e=>f(D)?D.value=e:null),title:r(F),width:"90%","mask-closable":!1,"modal-style":{maxWidth:"600px"},"body-style":{maxHeight:"70vh"},onBeforeOk:B,onClose:A},{default:u((()=>[m(w,{ref_key:"formRef",ref:q,model:r(H),rules:W,size:"medium","auto-label-width":""},{default:u((()=>[m(h,null,{default:u((()=>[m(t,n(c(M)),{default:u((()=>[m(d,{label:"用户名",field:"username"},{default:u((()=>[m(a,{modelValue:r(H).username,"onUpdate:modelValue":l[0]||(l[0]=e=>r(H).username=e),modelModifiers:{trim:!0},placeholder:"请输入用户名","allow-clear":"",disabled:r(H).disabled,"max-length":10},null,8,["modelValue","disabled"])])),_:1})])),_:1},16),m(t,n(c(M)),{default:u((()=>[m(d,{label:"昵称",field:"nickname"},{default:u((()=>[m(a,{modelValue:r(H).nickname,"onUpdate:modelValue":l[1]||(l[1]=e=>r(H).nickname=e),modelModifiers:{trim:!0},placeholder:"请输入昵称","allow-clear":"","max-length":10},null,8,["modelValue"])])),_:1})])),_:1},16),m(t,n(c(M)),{default:u((()=>[m(d,{label:"手机号码",field:"phone"},{default:u((()=>[m(a,{modelValue:r(H).phone,"onUpdate:modelValue":l[2]||(l[2]=e=>r(H).phone=e),modelModifiers:{trim:!0},placeholder:"请输入手机号码","allow-clear":"","max-length":11},null,8,["modelValue"])])),_:1})])),_:1},16),m(t,n(c(M)),{default:u((()=>[m(d,{label:"邮箱",field:"email"},{default:u((()=>[m(a,{modelValue:r(H).email,"onUpdate:modelValue":l[3]||(l[3]=e=>r(H).email=e),modelModifiers:{trim:!0},placeholder:"请输入邮箱","allow-clear":"","max-length":30},null,8,["modelValue"])])),_:1})])),_:1},16)])),_:1}),m(d,{label:"性别",field:"gender"},{default:u((()=>[m(g,{modelValue:r(H).gender,"onUpdate:modelValue":l[4]||(l[4]=e=>r(H).gender=e)},{default:u((()=>[m(b,{value:1},{default:u((()=>l[10]||(l[10]=[p("男")]))),_:1}),m(b,{value:2},{default:u((()=>l[11]||(l[11]=[p("女")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),m(d,{label:"所属部门",field:"deptId"},{default:u((()=>[m(v,{modelValue:r(H).deptId,"onUpdate:modelValue":l[5]||(l[5]=e=>r(H).deptId=e),data:r(j),"field-names":{key:"id",title:"name"},placeholder:"请选择所属部门","allow-clear":"","allow-search":"",disabled:r(H).disabled},null,8,["modelValue","data","disabled"])])),_:1}),m(d,{label:"角色",field:"roleIds",disabled:r(H).disabled},{default:u((()=>[m(V,{modelValue:r(H).roleIds,"onUpdate:modelValue":l[6]||(l[6]=e=>r(H).roleIds=e),options:r(U),placeholder:"请选择所属角色",multiple:"","allow-clear":"","allow-search":{retainInputValue:!0}},null,8,["modelValue","options"])])),_:1},8,["disabled"]),m(d,{label:"描述",field:"description"},{default:u((()=>[m(x,{modelValue:r(H).description,"onUpdate:modelValue":l[7]||(l[7]=e=>r(H).description=e),modelModifiers:{trim:!0},"max-length":200,placeholder:"请填写描述","auto-size":{minRows:3},"show-word-limit":""},null,8,["modelValue"])])),_:1}),m(d,{label:"状态",field:"status"},{default:u((()=>[m(_,{modelValue:r(H).status,"onUpdate:modelValue":l[8]||(l[8]=e=>r(H).status=e),type:"round","checked-value":1,"unchecked-value":0,"checked-text":"正常","unchecked-text":"禁用"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{_};

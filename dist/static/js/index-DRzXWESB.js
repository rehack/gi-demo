const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/FileList-DVDslZ3Q.js","static/js/index-nwng0QS3.js","static/css/index-B0TTuLsN.css","static/js/FileImage-BEX4WClU.js","static/js/index-CQ4MBDvV.js","static/css/index-B647mp6F.css","static/js/file-vS2Qaiq0.js","static/css/FileImage-B9i30NCh.css","static/js/FileRightMenu-itayY1X6.js","static/css/FileRightMenu-CjwAsd39.css","static/css/FileList-Cbv-jVJR.css"])))=>i.map(i=>d[i]);
import{b as e,M as a,$ as t,S as l,f0 as i,f1 as n,eV as o,k as s,ad as d,d as u,l as c,n as r,Y as m,f2 as p,e as f,o as _,f as v,h as y,w as g,i as h,G as w,F as k,j as b,g as x,c as C,r as j,t as F,a as I,B as M,an as S,f3 as T,eW as P,_ as N}from"./index-nwng0QS3.js";import{_ as R}from"./index-CQ4MBDvV.js";import{q as B}from"./index-COHd4c1E.js";import O from"./ModalContent-CsScEeaz.js";import{_ as q}from"./ModalContent.vue_vue_type_script_setup_true_lang-DUUD85Kw.js";import{_ as A}from"./ModalContent.vue_vue_type_script_setup_true_lang-Dp25LT7m.js";import W from"./ModalContent-DhVNHQ4z.js";import E from"./FilePath-BPqHZPk-.js";import L from"./FileGrid-CjTvxliR.js";import{I as V,F as $}from"./file-vS2Qaiq0.js";import"./index-BHeqEjUV.js";import"./FileImage-BEX4WClU.js";import"./FileRightMenu-itayY1X6.js";let G="";function z(e){if(!G)return G=e.id,function(e,a){const t=document.createElement("div");document.body.appendChild(t);const l=i(e,{...a,onClose:()=>{setTimeout((()=>{l.unmount(),document.body.removeChild(t),(null==a?void 0:a.callback)&&(null==a||a.callback())}),350)}});l.use(n),l.use(o),l.mount(t)}(W,{data:e,callback:()=>{G=""}})}const D={class:"file-main"},H=N(u({__name:"index",setup(i){const n=T((()=>P((()=>import("./FileList-DVDslZ3Q.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))),o=c(),u=r(),{mode:N,selectedFileIds:W,toggleMode:G,addSelectedFileItem:H}=function(){const a=e("grid"),t=e([]),l=s((()=>t.value.map((e=>e.id))));return{mode:a,selectedFileList:t,selectedFileIds:l,toggleMode:()=>{a.value="grid"===a.value?"list":"grid"},addSelectedFileItem:e=>{if(l.value.includes(e.id)){const a=t.value.findIndex((a=>a.id===e.id));t.value.splice(a,1)}else t.value.push(e)}}}(),J=e(!1),Q=e(!1),Y=e([]),K=e("0");K.value=o.query.fileType||"0";const U=async()=>{try{J.value=!0,Q.value=!1;const a=await(e={fileType:K.value},d.get("/file/list",e));Y.value=a.data.records}catch(a){return a}finally{J.value=!1}var e},X=()=>{U()};m((()=>{U()})),p((e=>{e.query.fileType&&(K.value=e.query.fileType,U())}));const Z=s((()=>Y.value.filter((e=>V.includes(e.extendName))).map((e=>e.src??"")))),ee=e=>{if(l.success(`点击了文件-${e.name}`),V.includes(e.extendName)&&e.src&&Z.value.length){const a=Z.value.findIndex((a=>a===e.src));B({images:Z.value,options:{initialViewIndex:a}})}var i;"mp4"===e.extendName&&(i=e,a.open({title:"视频播放",width:"auto",modalStyle:{},content:()=>t(A,{data:i})})),"mp3"===e.extendName&&z(e)},ae=e=>{H(e)},te=(i,n)=>{l.success(`点击了${i}`),"delete"===i&&a.warning({title:"提示",content:"是否删除该文件？",hideCancel:!1,okButtonProps:{status:"danger"},onBeforeOk:async()=>await new Promise((e=>setTimeout((()=>e(!0)),300)))}),"rename"===i&&function(){const i=e();a.open({title:"重命名",width:"90%",modalStyle:{maxWidth:"450px"},modalAnimationName:"el-fade",content:()=>t(q,{ref:e=>{i.value=e}}),onBeforeOk:async()=>{var e,a;return!(await(null==(a=null==(e=i.value)?void 0:e.formRef)?void 0:a.validate()))&&(await new Promise((e=>setTimeout((()=>e(!0)),300))),l.success("重命名成功"),!0)}})}(),"move"===i&&function(){const i=e();a.open({title:"移动到",width:"90%",modalStyle:{maxWidth:"500px"},modalAnimationName:"el-dialog",maskAnimationName:"el-mask",content:()=>t(O,{ref:e=>{i.value=e}}),onBeforeOk:async()=>{var e,a;return!(await(null==(a=null==(e=i.value)?void 0:e.formRef)?void 0:a.validate()))&&(await new Promise((e=>setTimeout((()=>e(!0)),300))),l.success("移动成功"),!0)}})}(),"detail"===i&&u.push({path:"/file/detail"})},le=()=>{a.warning({title:"提示",content:"是否确认删除？",hideCancel:!1})};return(e,a)=>{const t=f("icon-upload"),l=f("a-button"),i=R,o=f("a-doption"),s=f("a-dropdown"),d=f("a-option"),u=f("a-select"),c=f("a-input"),r=f("icon-search"),m=f("a-input-group"),p=f("a-space"),T=f("icon-delete"),P=f("icon-select-all"),B=f("icon-swap"),O=f("a-tooltip"),q=f("icon-filter"),A=f("icon-apps"),V=f("icon-list"),z=f("a-button-group"),H=f("a-row"),K=f("a-empty"),U=f("a-spin");return _(),v("div",D,[y(E),y(H,{justify:"space-between",class:"file-main__search"},{default:g((()=>[y(p,{wrap:""},{default:g((()=>[y(s,null,{content:g((()=>[y(o,null,{icon:g((()=>[y(i,{name:"upload-file"})])),default:g((()=>[a[2]||(a[2]=h("span",null,"上传文件",-1))])),_:1}),y(o,null,{icon:g((()=>[y(i,{name:"upload-folder"})])),default:g((()=>[a[3]||(a[3]=h("span",null,"上传文件夹",-1))])),_:1})])),default:g((()=>[y(l,{type:"primary",shape:"round"},{icon:g((()=>[y(t)])),default:g((()=>a[1]||(a[1]=[w("上传")]))),_:1})])),_:1}),y(m,null,{default:g((()=>[y(u,{placeholder:"请选择","trigger-props":{autoFitPopupMinWidth:!0},style:{width:"150px"}},{default:g((()=>[(_(!0),v(k,null,b(x($),(e=>(_(),C(d,{key:e.value},{icon:g((()=>[(_(),C(j(e.icon),{size:"18",color:"#999"}))])),default:g((()=>[w(F(e.name),1)])),_:2},1024)))),128))])),_:1}),y(c,{placeholder:"请输入关键词...","allow-clear":""}),y(l,{type:"primary",onClick:X},{icon:g((()=>[y(r)])),default:g((()=>a[4]||(a[4]=[w("搜索")]))),_:1})])),_:1})])),_:1}),y(p,{wrap:""},{default:g((()=>[x(Q)?(_(),C(l,{key:0,disabled:!x(W).length,type:"primary",status:"danger",onClick:le},{icon:g((()=>[y(T)])),_:1},8,["disabled"])):I("",!0),y(l,{type:"primary",onClick:a[0]||(a[0]=e=>Q.value=!x(Q))},{icon:g((()=>[y(P)])),default:g((()=>[w(F(x(Q)?"取消批量":"批量操作"),1)])),_:1}),y(z,null,{default:g((()=>[y(O,{content:"传输列表",position:"bottom"},{default:g((()=>[y(l,null,{icon:g((()=>[y(B)])),_:1})])),_:1}),y(O,{content:"排序",position:"bottom"},{default:g((()=>[y(l,null,{icon:g((()=>[y(q)])),_:1})])),_:1}),y(O,{content:"视图",position:"bottom"},{default:g((()=>[y(l,{onClick:x(G)},{icon:g((()=>["grid"===x(N)?(_(),C(A,{key:0})):(_(),C(V,{key:1}))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),y(U,{class:"file-main__list",loading:x(J)},{default:g((()=>[M(y(L,{data:x(Y),"is-batch-mode":x(Q),"selected-file-ids":x(W),onClick:ee,onSelect:ae,onRightMenuClick:te},null,8,["data","is-batch-mode","selected-file-ids"]),[[S,x(Y).length&&"grid"===x(N)]]),M(y(x(n),{data:x(Y),"is-batch-mode":x(Q),"selected-file-ids":x(W),onClick:ee,onSelect:ae,onRightMenuClick:te},null,8,["data","is-batch-mode","selected-file-ids"]),[[S,x(Y).length&&"list"===x(N)]]),M(y(K,null,null,512),[[S,!x(Y).length]])])),_:1},8,["loading"])])}}}),[["__scopeId","data-v-6eae32bd"]]);export{H as default};

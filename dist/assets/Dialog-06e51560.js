import{d as e,g as a,l,z as s,eA as o,eB as i,eC as n,r as t,o as u,e as v,w as r,W as d,h as c,D as p,u as f,a as g,t as m,X as x,T as h,_ as y}from"./index-7dfeed55.js";const I={style:{padding:"10px 14px 14px 14px"}},_={class:"name"},C=["src"],w=y(e({__name:"Dialog",props:{fileInfo:Object,onCancel:Function},setup(e,{expose:y}){const w=e,D=a(!1),S=a(null),b=a(null),k=l((()=>{var e,a;return"004"===(null==(e=w.fileInfo)?void 0:e.id)?"/assets/致你-e67c8f57.mp3":null==(a=w.fileInfo)?void 0:a.src}));s((()=>{D.value=!0}));const{width:z,height:A}=o(),{width:N,height:O}=i(S),X=a({top:40,left:z.value-N.value}),j=JSON.parse(sessionStorage.getItem("AudioDialogXY"));j&&j.top&&j.left&&(X.value.top=j.top,X.value.left=j.left);const{x:J,y:R}=n(S,{initialValue:{x:X.value.left-N.value,y:X.value.top}}),Y=l((()=>{let e=J.value,a=R.value;return J.value>z.value-N.value&&(e=z.value-N.value),J.value<0&&(e=0),R.value>A.value-O.value&&(a=A.value-O.value),R.value<0&&(a=0),sessionStorage.setItem("AudioDialogXY",JSON.stringify({top:a,left:e})),{left:e+"px",top:a+"px"}})),B=()=>{D.value=!1,w.onCancel&&w.onCancel()};return y({visible:D,handleClose:B}),(e,a)=>{const l=t("icon-music"),s=t("icon-close");return u(),v(h,{name:"slide-dynamic-origin"},{default:r((()=>{var e,a;return[d(c("div",{class:"audio-preview-wrapper",ref_key:"audioRef",ref:S,style:p(f(Y))},[c("section",I,[c("div",{class:"head",ref_key:"audioHeadRef",ref:b},[c("div",_,[g(l,{size:16,spin:""}),c("span",null,m(null==(e=w.fileInfo)?void 0:e.name)+"."+m(null==(a=w.fileInfo)?void 0:a.extendName),1)]),c("div",{class:"close-icon",onClick:B},[g(s,{size:12})])],512),c("audio",{class:"audio",src:f(k),controls:"",autoplay:""},null,8,C)])],4),[[x,f(D)]])]})),_:1})}}}),[["__scopeId","data-v-58bae5ae"]]);export{w as default};

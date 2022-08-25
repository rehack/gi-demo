import{_ as C}from"./GiSvgIcon.4a219a4c.js";import{d,r as w,o as _,c as f,b as e,a as t,K as E,es as I,eu as D,_ as p,f as k,i as o,m as v,w as u,j as y,k as b,p as h,e as g,J as x,I as B,ek as S,ei as A}from"./index.2d1f0001.js";const z={key:0,class:"gi-now-time"},G={class:"time"},j=d({name:"GiNowTime"}),N=d({...j,setup(a){const s=w(""),l=()=>{const c=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"];return`${D(new Date).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss")} \u661F\u671F${c[D(new Date).day()]}`};return(()=>{s.value=l(),setInterval(()=>{s.value=l()},1e3)})(),(c,r)=>{const n=C;return s.value?(_(),f("div",z,[e(n,{name:"time",size:20}),t("p",G,E(s.value),1)])):I("",!0)}}});const T=p(N,[["__scopeId","data-v-c99ff166"]]),H=a=>(h("data-v-61ef3a94"),a=a(),g(),a),J=["src"],L={class:"tip"},V=H(()=>t("p",null,"\u4ECA\u65E5\u9634\u8F6C\u5927\u96E8\uFF0C15\u2103 - 25\u2103\uFF0C\u51FA\u95E8\u8BB0\u5F97\u5E26\u4F1E\u54E6\u3002",-1)),M=b("/15"),W=d({__name:"WorkPlatform",setup(a){const s=k();return(l,F)=>{const c=T,r=o("a-avatar"),n=o("a-space"),m=o("a-statistic"),i=o("a-row"),$=o("a-card");return _(),v($,{title:"\u5DE5\u4F5C\u53F0",bordered:!1,size:"medium",class:"card-box"},{extra:u(()=>[e(c)]),default:u(()=>[e(i,{justify:"space-between",align:"center",class:"work-platform"},{default:u(()=>[e(n,{size:15},{default:u(()=>[e(r,{size:80},{default:u(()=>[t("img",{src:y(s).userInfo.avatar},null,8,J)]),_:1}),t("div",L,[t("p",null,"\u65E9\u5B89\uFF0C"+E(y(s).userName)+"\uFF0C\u5F00\u59CB\u60A8\u4E00\u5929\u7684\u5DE5\u4F5C\u5427\uFF01",1),V])]),_:1}),e(n,{size:50},{default:u(()=>[e(m,{title:"\u9879\u76EE\u6570",value:16,"value-from":0,start:!0,animation:""}),e(m,{title:"\u5F85\u529E",value:3,"value-from":0,start:!0,animation:""},{suffix:u(()=>[M]),_:1}),e(m,{title:"\u6D88\u606F",value:35,"value-from":0,start:!0,animation:""})]),_:1})]),_:1})]),_:1})}}});const Y=p(W,[["__scopeId","data-v-61ef3a94"]]),P={class:"list"},R={class:"head"},q={class:"text"},K={class:"desc"},U=d({__name:"GridCard",setup(a){const s=[{name:"Github",text:"\u662F\u4E00\u4E2A\u9762\u5411\u5F00\u6E90\u53CA\u79C1\u6709\u8F6F\u4EF6\u9879\u76EE\u7684\u6258\u7BA1\u5E73\u53F0",time:"\u5F00\u6E90\u541B\uFF0C2021-07-04",icon:"item-github"},{name:"Vue",text:"\u6E10\u8FDB\u5F0F JavaScript \u6846\u67B6",time:"\u5B66\u4E0D\u52A8\u4E5F\u8981\u5B66\uFF0C2021-07-04",icon:"item-vue"},{name:"Html5",text:"HTML5\u662F\u4E92\u8054\u7F51\u7684\u4E0B\u4E00\u4EE3\u6807\u51C6",time:"\u64B8\u7801\u4E5F\u662F\u4E00\u79CD\u827A\u672F 2021-04-01",icon:"item-html5"},{name:"Angular",src:"../../assets/images/home/angular.png",text:"\u73B0\u4EE3 Web \u5F00\u53D1\u5E73\u53F0\uFF0C\u767E\u4E07\u7C89\u4E1D\u70ED\u6367",time:"\u94C1\u7C89\u541B 2021-07-04",icon:"item-angular"},{name:"React",text:"\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93",time:"\u6280\u672F\u725B 2021-07-04",icon:"item-react"},{name:"Js",text:"\u8DEF\u662F\u8D70\u51FA\u6765\u7684\uFF0C\u800C\u4E0D\u662F\u7A7A\u60F3\u51FA\u6765\u7684",time:"\u67B6\u6784\u7EC4 2021-07-04",icon:"item-js"}];return(l,F)=>{const c=C,r=o("a-card");return _(),v(r,{title:"\u9879\u76EE",bordered:!1,size:"medium"},{default:u(()=>[t("ul",P,[(_(),f(B,null,x(s,n=>t("li",{class:"list-item",key:n.name},[t("div",R,[e(c,{size:30,name:n.icon},null,8,["name"]),t("span",null,E(n.name),1)]),t("p",q,E(n.text),1),t("p",K,E(n.time),1)])),64))])]),_:1})}}});const O=p(U,[["__scopeId","data-v-65ae4f16"]]),Q=a=>(h("data-v-d6103bd7"),a=a(),g(),a),X=b("\u66F4\u591A"),Z=Q(()=>t("img",{src:"https://s1.ax1x.com/2022/07/05/jtMjGq.jpg"},null,-1)),ee=d({__name:"ListCard",setup(a){const s=[{name:"Github",text:"\u662F\u4E00\u4E2A\u9762\u5411\u5F00\u6E90\u53CA\u79C1\u6709\u8F6F\u4EF6\u9879\u76EE\u7684\u6258\u7BA1\u5E73\u53F0",time:"\u5F00\u6E90\u541B\uFF0C2021-07-04",icon:"item-github"},{name:"Vue",text:"\u6E10\u8FDB\u5F0F JavaScript \u6846\u67B6",time:"\u5B66\u4E0D\u52A8\u4E5F\u8981\u5B66\uFF0C2021-07-04",icon:"item-vue"},{name:"Html5",text:"HTML5\u662F\u4E92\u8054\u7F51\u7684\u4E0B\u4E00\u4EE3\u6807\u51C6\u3002",time:"\u64B8\u7801\u4E5F\u662F\u4E00\u79CD\u827A\u672F 2021-04-01",icon:"item-html5"},{name:"Angular",src:"../../assets/images/home/angular.png",text:"\u73B0\u4EE3 Web \u5F00\u53D1\u5E73\u53F0\uFF0C\u767E\u4E07\u7C89\u4E1D\u70ED\u6367",time:"\u94C1\u7C89\u541B 2021-07-04",icon:"item-angular"},{name:"React",text:"\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93",time:"\u6280\u672F\u725B 2021-07-04",icon:"item-react"},{name:"Js",text:"\u8DEF\u662F\u8D70\u51FA\u6765\u7684\uFF0C\u800C\u4E0D\u662F\u7A7A\u60F3\u51FA\u6765\u7684",time:"\u67B6\u6784\u7EC4 2021-07-04",icon:"item-js"}];return(l,F)=>{const c=o("a-link"),r=o("a-avatar"),n=o("a-comment"),m=o("a-card");return _(),v(m,{title:"\u6D88\u606F",bordered:!1,size:"medium"},{extra:u(()=>[e(c,null,{default:u(()=>[X]),_:1})]),default:u(()=>[(_(),f(B,null,x(s,i=>e(n,{key:i.name,author:i.name,content:i.text,align:"right"},{avatar:u(()=>[e(r,null,{default:u(()=>[Z]),_:1})]),_:2},1032,["author","content"])),64))]),_:1})}}});const te=p(ee,[["__scopeId","data-v-d6103bd7"]]),ue=d({__name:"FastCard",setup(a){const s=[{name:"\u4E3B\u63A7\u53F0",icon:"icon-dashboard",color:"rgb(104, 199, 85)"},{name:"\u5217\u8868",icon:"icon-list",color:"rgb(250, 178, 81)"},{name:"\u8868\u5355",icon:"icon-file",color:"rgb(24, 144, 255)"},{name:"\u6743\u9650\u7BA1\u7406",icon:"icon-mind-mapping",color:"rgb(240, 107, 150)"},{name:"\u7CFB\u7EDF\u7BA1\u7406",icon:"icon-computer",color:"rgb(114, 56, 209)"},{name:"\u6D88\u606F",icon:"icon-notification",color:"rgb(92, 219, 211)"}];return(l,F)=>{const c=o("a-space"),r=o("a-row"),n=o("a-card"),m=o("a-card-grid");return _(),v(n,{title:"\u5FEB\u6377\u64CD\u4F5C",bordered:!1,size:"medium"},{default:u(()=>[(_(),f(B,null,x(s,i=>e(m,{style:A({width:"33.33%"}),key:i.name,class:"card-grid"},{default:u(()=>[e(n,{bordered:!1,hoverable:""},{default:u(()=>[e(r,{justify:"center",align:"center"},{default:u(()=>[e(c,{direction:"vertical",align:"center"},{default:u(()=>[(_(),v(S(i.icon),{size:30,style:A({color:i.color})},null,8,["style"])),t("span",null,E(i.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["style"])),64))]),_:1})}}});const ae=p(ue,[["__scopeId","data-v-a73d2ef4"]]),se="/gi-demo/assets/home-design.ddd05288.svg";const ne={},oe=a=>(h("data-v-180a2fc2"),a=a(),g(),a),ce={class:"image-card"},_e=oe(()=>t("img",{src:se},null,-1)),ie=[_e];function re(a,s){return _(),f("div",ce,ie)}const de=p(ne,[["render",re],["__scopeId","data-v-180a2fc2"]]),le={class:"home",id:"home-wrap"},me={class:"wrap"},pe={class:"left"},Fe={class:"item"},Ee={class:"item"},fe={class:"right"},ve={class:"item"},Ce={class:"item"},he=d({name:"Home"}),ge=d({...he,setup(a){return(s,l)=>{const F=C,c=o("a-back-top");return _(),f("div",le,[e(Y),t("div",me,[t("section",pe,[t("div",Fe,[e(O)]),t("div",Ee,[e(te)])]),t("section",fe,[t("div",ve,[e(ae)]),t("div",Ce,[e(de)])])]),e(c,{"target-container":"#home-wrap"},{default:u(()=>[e(F,{name:"backtop",size:50,style:{cursor:"pointer"}})]),_:1})])}}});const De=p(ge,[["__scopeId","data-v-aa533601"]]);export{De as default};

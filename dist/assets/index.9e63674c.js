import{g as F,x as A,u as I,y as E,r as t,o as i,c as _,n as a,l as c,j as z,z as N,B,t as V,C as H,m as S,F as K,q as M,s as P,k as d,i as O,D as U,E as J,G as Q,T as W}from"./vendor.ff035d3f.js";import{_ as y}from"./index.504559ae.js";import{_ as X}from"./avatar.d240db71.js";const Y=l=>(M("data-v-53be9d8c"),l=l(),P(),l),Z=Y(()=>d("div",{class:"logo"},null,-1)),ee=F({setup(l){const s=A(),u=I(),o=E(()=>s.state.app.menuList),p=E(()=>s.state.app.activePath),m=e=>{s.commit("app/storeSetActivePath",e.path),u.push(e.path)};return(e,r)=>{const n=t("a-menu-item"),h=t("a-menu"),f=t("IconCaretRight"),g=t("IconCaretLeft"),k=t("a-layout-sider");return i(),_(k,{collapsible:"",breakpoint:"xl",class:"gi-aside"},{trigger:a(({collapsed:v})=>[v?(i(),_(f,{key:0})):(i(),_(g,{key:1}))]),default:a(()=>[Z,c(h,{defaultSelectedKeys:[S(p)],style:{width:"100%",height:"100%"}},{default:a(()=>[(i(!0),z(K,null,N(S(o),v=>(i(),_(n,{key:v.path,onClick:w=>m(v)},{default:a(()=>[(i(),_(B(v.icon))),V(" "+H(v.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["defaultSelectedKeys"])]),_:1})}}});var ne=y(ee,[["__scopeId","data-v-53be9d8c"]]),te="./assets/logo.1ea765ca.png",T={exports:{}};/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/(function(l){(function(){var s=typeof window!="undefined"&&typeof window.document!="undefined"?window.document:{},u=l.exports,o=function(){for(var e,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,h=r.length,f={};n<h;n++)if(e=r[n],e&&e[1]in s){for(n=0;n<e.length;n++)f[r[0][n]]=e[n];return f}return!1}(),p={change:o.fullscreenchange,error:o.fullscreenerror},m={request:function(e,r){return new Promise(function(n,h){var f=function(){this.off("change",f),n()}.bind(this);this.on("change",f),e=e||s.documentElement;var g=e[o.requestFullscreen](r);g instanceof Promise&&g.then(f).catch(h)}.bind(this))},exit:function(){return new Promise(function(e,r){if(!this.isFullscreen){e();return}var n=function(){this.off("change",n),e()}.bind(this);this.on("change",n);var h=s[o.exitFullscreen]();h instanceof Promise&&h.then(n).catch(r)}.bind(this))},toggle:function(e,r){return this.isFullscreen?this.exit():this.request(e,r)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,r){var n=p[e];n&&s.addEventListener(n,r,!1)},off:function(e,r){var n=p[e];n&&s.removeEventListener(n,r,!1)},raw:o};if(!o){u?l.exports={isEnabled:!1}:window.screenfull={isEnabled:!1};return}Object.defineProperties(m,{isFullscreen:{get:function(){return Boolean(s[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return s[o.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(s[o.fullscreenEnabled])}}}),u?l.exports=m:window.screenfull=m})()})(T);var x=T.exports;const oe=F({setup(l){const s=O(!1),u=()=>{s.value=x.isFullscreen},o=()=>{x.toggle()};return U(()=>{x.on("change",u)}),J(()=>{x.off("change",u)}),(p,m)=>{const e=t("icon-fullscreen"),r=t("icon-fullscreen-exit");return i(),z("span",{class:"gi-fullscreen-icon",onClick:o},[s.value?(i(),_(r,{key:1,style:{"font-size":"18px"}})):(i(),_(e,{key:0,style:{"font-size":"18px"}}))])}}});var se=y(oe,[["__scopeId","data-v-508565dc"]]);const b=l=>(M("data-v-4529c6ff"),l=l(),P(),l),ce=b(()=>d("section",{class:"sys-name"},[d("img",{src:te}),d("span",null,"Admin\u7BA1\u7406\u7CFB\u7EDF")],-1)),ae=b(()=>d("img",{src:X},null,-1)),re=b(()=>d("span",null,"admin",-1)),le={class:"option-item"},ie={style:{background:"#1677ff"}},ue=b(()=>d("span",null,"\u4E2A\u4EBA\u4E2D\u5FC3",-1)),_e={class:"option-item"},de={style:{background:"#ff7d00"}},fe=b(()=>d("span",null,"\u9000\u51FA\u767B\u5F55",-1)),pe=F({setup(l){const s=I(),u=A(),o=E(()=>u.state.app.ThemeMode),p=()=>{o.value==="light"?(u.commit("app/storeSetThemeMode","dark"),document.body.setAttribute("arco-theme","dark")):(u.commit("app/storeSetThemeMode","light"),document.body.removeAttribute("arco-theme"))};(()=>{o.value==="dark"?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme")})();const e=()=>{s.push("/user")},r=()=>{Q.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",hideCancel:!1,onOk:()=>{s.replace("/login")}})};return(n,h)=>{const f=t("icon-notification"),g=t("a-tooltip"),k=t("icon-sun-fill"),v=t("icon-moon-fill"),w=t("a-button"),q=t("a-avatar"),$=t("icon-down"),D=t("icon-user"),C=t("a-doption"),G=t("icon-export"),L=t("a-dropdown"),R=t("a-space"),j=t("a-layout-header");return i(),_(j,null,{default:a(()=>[ce,c(R,{class:"sys-head",size:"medium"},{default:a(()=>[c(g,{content:"\u6D88\u606F\u901A\u77E5",position:"bl"},{default:a(()=>[c(f,{class:"gi_hover",style:{"font-size":"18px"}})]),_:1}),c(se,{class:"gi_hover"}),c(w,{size:"mini",style:{"line-height":"1"},onClick:p},{icon:a(()=>[S(o)==="light"?(i(),_(k,{key:0,style:{"font-size":"18px"}})):(i(),_(v,{key:1,style:{"font-size":"18px"}}))]),_:1}),c(q,{size:32},{default:a(()=>[ae]),_:1}),c(L,{trigger:"hover"},{content:a(()=>[c(C,{onClick:e},{default:a(()=>[d("div",le,[d("span",ie,[c(D)]),ue])]),_:1}),c(C,{onClick:r},{default:a(()=>[d("div",_e,[d("span",de,[c(G)]),fe])]),_:1})]),default:a(()=>[c(w,{type:"text",class:"username"},{default:a(()=>[re,c($)]),_:1})]),_:1})]),_:1})]),_:1})}}});var me=y(pe,[["__scopeId","data-v-4529c6ff"]]);const he={};function ve(l,s){const u=t("router-view"),o=t("a-layout");return i(),_(o,{class:"gi-main"},{default:a(()=>[c(u,null,{default:a(({Component:p,route:m})=>[c(W,{name:"fade-transform",mode:"out-in",appear:""},{default:a(()=>[(i(),_(B(p),{key:m.fullPath}))]),_:2},1024)]),_:1})]),_:1})}var ge=y(he,[["render",ve],["__scopeId","data-v-69ac8087"]]);const ye=F({setup(l){return(s,u)=>{const o=t("a-layout");return i(),_(o,{class:"gi-layout"},{default:a(()=>[c(ne),c(o,null,{default:a(()=>[c(me),c(ge)]),_:1})]),_:1})}}});var ke=y(ye,[["__scopeId","data-v-30bad68a"]]);export{ke as default};

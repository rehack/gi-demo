import{eJ as se,h as g,eK as ge,eL as _e,a8 as we,B as ye,n as ue,u as he,eM as ie,$ as Oe,eN as be,k as F,D as j,a9 as Pe,a6 as Se}from"./index-ad0224cd.js";var V;const D=typeof window<"u",Ee=e=>typeof e=="function",$e=e=>typeof e=="string",Ie=()=>{};D&&((V=window==null?void 0:window.navigator)!=null&&V.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function b(e){return typeof e=="function"?e():he(e)}function Fe(e,t){function r(...n){return new Promise((a,s)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(s)})}return r}const ce=e=>e();function xe(e=ce){const t=g(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...s)=>{t.value&&e(...s)};return{isActive:ie(t),pause:r,resume:n,eventFilter:a}}function Ce(e){return e}function N(e){return ge()?(_e(e),!0):!1}function je(e){return typeof e=="function"?F(e):g(e)}var Ae=Object.defineProperty,De=Object.defineProperties,Ne=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ze=(e,t)=>{for(var r in t||(t={}))Te.call(t,r)&&W(e,r,t[r]);if(B)for(var r of B(t))ke.call(t,r)&&W(e,r,t[r]);return e},Me=(e,t)=>De(e,Ne(t));function Re(e){if(!se(e))return Oe(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const r in e.value)t[r]=be(()=>({get(){return e.value[r]},set(n){if(Array.isArray(e.value)){const a=[...e.value];a[r]=n,e.value=a}else{const a=Me(ze({},e.value),{[r]:n});Object.setPrototypeOf(a,e.value),e.value=a}}}));return t}function k(e,t=!0){we()?ye(e):t?e():ue(e)}function Le(e,t,r={}){const{immediate:n=!0}=r,a=g(!1);let s=null;function u(){s&&(clearTimeout(s),s=null)}function o(){a.value=!1,u()}function l(...c){u(),a.value=!0,s=setTimeout(()=>{a.value=!1,s=null,e(...c)},b(t))}return n&&(a.value=!0,D&&l()),N(o),{isPending:ie(a),start:l,stop:o}}function kt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=se(e),s=g(e);function u(o){if(arguments.length)return s.value=o,s.value;{const l=b(r);return s.value=s.value===l?b(n):l,s.value}}return a?u:[s,u]}var Q=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,We=(e,t)=>{var r={};for(var n in e)Ve.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Q)for(var n of Q(e))t.indexOf(n)<0&&Be.call(e,n)&&(r[n]=e[n]);return r};function Qe(e,t,r={}){const n=r,{eventFilter:a=ce}=n,s=We(n,["eventFilter"]);return j(e,Fe(a,t),s)}var He=Object.defineProperty,qe=Object.defineProperties,Je=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ue=(e,t)=>{for(var r in t||(t={}))fe.call(t,r)&&H(e,r,t[r]);if(T)for(var r of T(t))pe.call(t,r)&&H(e,r,t[r]);return e},Ge=(e,t)=>qe(e,Je(t)),Ke=(e,t)=>{var r={};for(var n in e)fe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&T)for(var n of T(e))t.indexOf(n)<0&&pe.call(e,n)&&(r[n]=e[n]);return r};function Xe(e,t,r={}){const n=r,{eventFilter:a}=n,s=Ke(n,["eventFilter"]),{eventFilter:u,pause:o,resume:l,isActive:c}=xe(a);return{stop:Qe(e,t,Ge(Ue({},s),{eventFilter:u})),pause:o,resume:l,isActive:c}}function I(e){var t;const r=b(e);return(t=r==null?void 0:r.$el)!=null?t:r}const S=D?window:void 0,Ye=D?window.document:void 0,Ze=D?window.navigator:void 0;function P(...e){let t,r,n,a;if($e(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=S):[t,r,n,a]=e,!t)return Ie;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const s=[],u=()=>{s.forEach(f=>f()),s.length=0},o=(f,p,m,w)=>(f.addEventListener(p,m,w),()=>f.removeEventListener(p,m,w)),l=j(()=>[I(t),b(a)],([f,p])=>{u(),f&&s.push(...r.flatMap(m=>n.map(w=>o(f,m,w,p))))},{immediate:!0,flush:"post"}),c=()=>{l(),u()};return N(c),c}function z(e,t=!1){const r=g(),n=()=>r.value=Boolean(e());return n(),k(n,t),r}function et(e,t={}){const{window:r=S}=t,n=z(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const s=g(!1),u=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o))},o=()=>{n.value&&(u(),a=r.matchMedia(je(e).value),s.value=a.matches,"addEventListener"in a?a.addEventListener("change",o):a.addListener(o))};return Pe(o),N(()=>u()),s}function zt(e={}){const{navigator:t=Ze,read:r=!1,source:n,copiedDuring:a=1500,legacy:s=!1}=e,u=["copy","cut"],o=z(()=>t&&"clipboard"in t),l=F(()=>o.value||s),c=g(""),f=g(!1),p=Le(()=>f.value=!1,a);function m(){o.value?t.clipboard.readText().then(d=>{c.value=d}):c.value=v()}if(l.value&&r)for(const d of u)P(d,m);async function w(d=b(n)){l.value&&d!=null&&(o.value?await t.clipboard.writeText(d):i(d),c.value=d,f.value=!0,p.start())}function i(d){const y=document.createElement("textarea");y.value=d??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function v(){var d,y,h;return(h=(y=(d=document==null?void 0:document.getSelection)==null?void 0:d.call(document))==null?void 0:y.toString())!=null?h:""}return{isSupported:l,text:c,copied:f,copy:w}}const R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";R[L]=R[L]||{};const tt=R[L];function de(e,t){return tt[e]||t}function rt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var nt=Object.defineProperty,q=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))at.call(t,r)&&J(e,r,t[r]);if(q)for(var r of q(t))ot.call(t,r)&&J(e,r,t[r]);return e};const lt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},G="vueuse-storage";function st(e,t,r,n={}){var a;const{flush:s="pre",deep:u=!0,listenToStorageChanges:o=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:f,window:p=S,eventFilter:m,onError:w=_=>{console.error(_)}}=n,i=(f?Se:g)(t);if(!r)try{r=de("getDefaultStorage",()=>{var _;return(_=S)==null?void 0:_.localStorage})()}catch(_){w(_)}if(!r)return i;const v=b(t),d=rt(v),y=(a=n.serializer)!=null?a:lt[d],{pause:h,resume:$}=Xe(i,()=>x(i.value),{flush:s,deep:u,eventFilter:m});return p&&o&&(P(p,"storage",E),P(p,G,M)),E(),i;function x(_){try{if(_==null)r.removeItem(e);else{const O=y.write(_),C=r.getItem(e);C!==O&&(r.setItem(e,O),p&&p.dispatchEvent(new CustomEvent(G,{detail:{key:e,oldValue:C,newValue:O,storageArea:r}})))}}catch(O){w(O)}}function A(_){const O=_?_.newValue:r.getItem(e);if(O==null)return l&&v!==null&&r.setItem(e,y.write(v)),v;if(!_&&c){const C=y.read(O);return Ee(c)?c(C,v):d==="object"&&!Array.isArray(C)?U(U({},v),C):C}else return typeof O!="string"?O:y.read(O)}function M(_){E(_.detail)}function E(_){if(!(_&&_.storageArea!==r)){if(_&&_.key==null){i.value=v;return}if(!(_&&_.key!==e)){h();try{i.value=A(_)}catch(O){w(O)}finally{_?ue($):$()}}}}}function ve(e){return et("(prefers-color-scheme: dark)",e)}var ut=Object.defineProperty,K=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ft=(e,t)=>{for(var r in t||(t={}))it.call(t,r)&&X(e,r,t[r]);if(K)for(var r of K(t))ct.call(t,r)&&X(e,r,t[r]);return e};function pt(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=S,storage:s,storageKey:u="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:l,emitAuto:c}=e,f=ft({auto:"",light:"light",dark:"dark"},e.modes||{}),p=ve({window:a}),m=F(()=>p.value?"dark":"light"),w=l||(u==null?g(n):st(u,n,s,{window:a,listenToStorageChanges:o})),i=F({get(){return w.value==="auto"&&!c?m.value:w.value},set(h){w.value=h}}),v=de("updateHTMLAttrs",(h,$,x)=>{const A=a==null?void 0:a.document.querySelector(h);if(A)if($==="class"){const M=x.split(/\s/g);Object.values(f).flatMap(E=>(E||"").split(/\s/g)).filter(Boolean).forEach(E=>{M.includes(E)?A.classList.add(E):A.classList.remove(E)})}else A.setAttribute($,x)});function d(h){var $;const x=h==="auto"?m.value:h;v(t,r,($=f[x])!=null?$:x)}function y(h){e.onChanged?e.onChanged(h,d):d(h)}return j(i,y,{flush:"post",immediate:!0}),c&&j(m,()=>y(i.value),{flush:"post"}),k(()=>y(i.value)),i}var dt=Object.defineProperty,vt=Object.defineProperties,mt=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wt=(e,t)=>{for(var r in t||(t={}))gt.call(t,r)&&Z(e,r,t[r]);if(Y)for(var r of Y(t))_t.call(t,r)&&Z(e,r,t[r]);return e},yt=(e,t)=>vt(e,mt(t));function Mt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=S}=e,a=pt(yt(wt({},e),{onChanged:(o,l)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,o==="dark"):l(o)},modes:{dark:t,light:r}})),s=ve({window:n});return F({get(){return a.value==="dark"},set(o){o===s.value?a.value="auto":a.value=o?"dark":"light"}})}var ht=Object.defineProperty,Ot=Object.defineProperties,bt=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Et=(e,t)=>{for(var r in t||(t={}))Pt.call(t,r)&&te(e,r,t[r]);if(ee)for(var r of ee(t))St.call(t,r)&&te(e,r,t[r]);return e},$t=(e,t)=>Ot(e,bt(t));function Rt(e,t={}){var r,n,a;const s=(r=t.draggingElement)!=null?r:S,u=(n=t.handle)!=null?n:e,o=g((a=b(t.initialValue))!=null?a:{x:0,y:0}),l=g(),c=i=>t.pointerTypes?t.pointerTypes.includes(i.pointerType):!0,f=i=>{b(t.preventDefault)&&i.preventDefault(),b(t.stopPropagation)&&i.stopPropagation()},p=i=>{var v;if(!c(i)||b(t.exact)&&i.target!==b(e))return;const d=b(e).getBoundingClientRect(),y={x:i.clientX-d.left,y:i.clientY-d.top};((v=t.onStart)==null?void 0:v.call(t,y,i))!==!1&&(l.value=y,f(i))},m=i=>{var v;c(i)&&l.value&&(o.value={x:i.clientX-l.value.x,y:i.clientY-l.value.y},(v=t.onMove)==null||v.call(t,o.value,i),f(i))},w=i=>{var v;c(i)&&l.value&&(l.value=void 0,(v=t.onEnd)==null||v.call(t,o.value,i),f(i))};return D&&(P(u,"pointerdown",p,!0),P(s,"pointermove",m,!0),P(s,"pointerup",w,!0)),$t(Et({},Re(o)),{position:o,isDragging:F(()=>!!l.value),style:F(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var re=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,xt=(e,t)=>{var r={};for(var n in e)It.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&re)for(var n of re(e))t.indexOf(n)<0&&Ft.call(e,n)&&(r[n]=e[n]);return r};function me(e,t,r={}){const n=r,{window:a=S}=n,s=xt(n,["window"]);let u;const o=z(()=>a&&"ResizeObserver"in a),l=()=>{u&&(u.disconnect(),u=void 0)},c=j(()=>I(e),p=>{l(),o.value&&a&&p&&(u=new ResizeObserver(t),u.observe(p,s))},{immediate:!0,flush:"post"}),f=()=>{l(),c()};return N(f),{isSupported:o,stop:f}}function Lt(e,t={}){const{reset:r=!0,windowResize:n=!0,windowScroll:a=!0,immediate:s=!0}=t,u=g(0),o=g(0),l=g(0),c=g(0),f=g(0),p=g(0),m=g(0),w=g(0);function i(){const v=I(e);if(!v){r&&(u.value=0,o.value=0,l.value=0,c.value=0,f.value=0,p.value=0,m.value=0,w.value=0);return}const d=v.getBoundingClientRect();u.value=d.height,o.value=d.bottom,l.value=d.left,c.value=d.right,f.value=d.top,p.value=d.width,m.value=d.x,w.value=d.y}return me(e,i),j(()=>I(e),v=>!v&&i()),a&&P("scroll",i,{capture:!0,passive:!0}),n&&P("resize",i,{passive:!0}),k(()=>{s&&i()}),{height:u,bottom:o,left:l,right:c,top:f,width:p,x:m,y:w,update:i}}function Vt(e,t={width:0,height:0},r={}){const{window:n=S,box:a="content-box"}=r,s=F(()=>{var l,c;return(c=(l=I(e))==null?void 0:l.namespaceURI)==null?void 0:c.includes("svg")}),u=g(t.width),o=g(t.height);return me(e,([l])=>{const c=a==="border-box"?l.borderBoxSize:a==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(n&&s.value){const f=I(e);if(f){const p=n.getComputedStyle(f);u.value=parseFloat(p.width),o.value=parseFloat(p.height)}}else if(c){const f=Array.isArray(c)?c:[c];u.value=f.reduce((p,{inlineSize:m})=>p+m,0),o.value=f.reduce((p,{blockSize:m})=>p+m,0)}else u.value=l.contentRect.width,o.value=l.contentRect.height},r),j(()=>I(e),l=>{u.value=l?t.width:0,o.value=l?t.height:0}),{width:u,height:o}}const ne=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Bt(e,t={}){const{document:r=Ye,autoExit:n=!1}=t,a=e||(r==null?void 0:r.querySelector("html")),s=g(!1);let u=ne[0];const o=z(()=>{if(r){for(const v of ne)if(v[1]in r)return u=v,!0}else return!1;return!1}),[l,c,f,,p]=u;async function m(){o.value&&(r!=null&&r[f]&&await r[c](),s.value=!1)}async function w(){if(!o.value)return;await m();const v=I(a);v&&(await v[l](),s.value=!0)}async function i(){s.value?await m():await w()}return r&&P(r,p,()=>{s.value=!!(r!=null&&r[f])},!1),n&&N(m),{isSupported:o,isFullscreen:s,enter:w,exit:m,toggle:i}}var ae;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ae||(ae={}));var Ct=Object.defineProperty,oe=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,le=(e,t,r)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Dt=(e,t)=>{for(var r in t||(t={}))jt.call(t,r)&&le(e,r,t[r]);if(oe)for(var r of oe(t))At.call(t,r)&&le(e,r,t[r]);return e};const Nt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Dt({linear:Ce},Nt);function Wt(e={}){const{window:t=S,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:s=!0}=e,u=g(r),o=g(n),l=()=>{t&&(s?(u.value=t.innerWidth,o.value=t.innerHeight):(u.value=t.document.documentElement.clientWidth,o.value=t.document.documentElement.clientHeight))};return l(),k(l),P("resize",l,{passive:!0}),a&&P("orientationchange",l,{passive:!0}),{width:u,height:o}}export{Vt as a,Rt as b,Bt as c,Mt as d,kt as e,zt as f,Lt as g,Wt as u};

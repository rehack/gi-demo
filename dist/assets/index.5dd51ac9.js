import{j as V,f as g,t as q,v as G,x as U,y as Z,z as ee,A as T,B as te,C as re,u as O,D,E as ne}from"./index.0d7c1df1.js";function x(e){return Z()?(ee(e),!0):!1}const j=typeof window!="undefined",ae=e=>typeof e=="string",C=()=>{};function oe(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const se=e=>e();var le=Object.defineProperty,ie=Object.defineProperties,ue=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,M=(e,t,r)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,pe=(e,t)=>{for(var r in t||(t={}))ce.call(t,r)&&M(e,r,t[r]);if(I)for(var r of I(t))fe.call(t,r)&&M(e,r,t[r]);return e},de=(e,t)=>ie(e,ue(t));function ve(e){if(!V(e))return te(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const r in e.value)t[r]=re(()=>({get(){return e.value[r]},set(n){if(Array.isArray(e.value)){const o=[...e.value];o[r]=n,e.value=o}else e.value=de(pe({},e.value),{[r]:n})}}));return t}function A(e,t=!0){q()?G(e):t?e():U(e)}function ge(e,t,r={}){const{immediate:n=!0}=r,o=g(!1);let a=null;function l(){a&&(clearTimeout(a),a=null)}function i(){o.value=!1,l()}function u(...v){l(),o.value=!0,a=setTimeout(()=>{o.value=!1,a=null,e(...v)},O(t))}return n&&(o.value=!0,j&&u()),x(i),{isPending:o,start:u,stop:i}}function qe(e=!1){if(V(e))return t=>(e.value=typeof t=="boolean"?t:!e.value,e.value);{const t=g(e);return[t,n=>(t.value=typeof n=="boolean"?n:!t.value,t.value)]}}var k=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,we=(e,t)=>{var r={};for(var n in e)_e.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&k)for(var n of k(e))t.indexOf(n)<0&&ye.call(e,n)&&(r[n]=e[n]);return r};function he(e,t,r={}){const n=r,{eventFilter:o=se}=n,a=we(n,["eventFilter"]);return T(e,oe(o,t),a)}function $(e){var t;const r=O(e);return(t=r==null?void 0:r.$el)!=null?t:r}const h=j?window:void 0,me=j?window.navigator:void 0;function b(...e){let t,r,n,o;if(ae(e[0])?([r,n,o]=e,t=h):[t,r,n,o]=e,!t)return C;let a=C;const l=T(()=>$(t),u=>{a(),u&&(u.addEventListener(r,n,o),a=()=>{u.removeEventListener(r,n,o),a=C})},{immediate:!0,flush:"post"}),i=()=>{l(),a()};return x(i),i}function Ge(e,t,r={}){const{window:n=h,ignore:o,capture:a=!0}=r;if(!n)return;const l=g(!0),u=[b(n,"click",c=>{const p=$(e),s=c.composedPath();!p||p===c.target||s.includes(p)||!l.value||o&&o.length>0&&o.some(d=>{const w=$(d);return w&&(c.target===w||s.includes(w))})||t(c)},{passive:!0,capture:a}),b(n,"pointerdown",c=>{const p=$(e);l.value=!!p&&!c.composedPath().includes(p)},{passive:!0})];return()=>u.forEach(c=>c())}function Oe(e,t={}){const{window:r=h}=t;let n;const o=g(!1),a=()=>{!r||(n||(n=r.matchMedia(e)),o.value=n.matches)};return A(()=>{a(),n&&("addEventListener"in n?n.addEventListener("change",a):n.addListener(a),x(()=>{"removeEventListener"in n?n.removeEventListener("change",a):n.removeListener(a)}))}),o}function Ue(e={}){const{navigator:t=me,read:r=!1,source:n,copiedDuring:o=1500}=e,a=["copy","cut"],l=Boolean(t&&"clipboard"in t),i=g(""),u=g(!1),v=ge(()=>u.value=!1,o);function c(){t.clipboard.readText().then(s=>{i.value=s})}if(l&&r)for(const s of a)b(s,c);async function p(s=O(n)){l&&s!=null&&(await t.clipboard.writeText(s),i.value=s,u.value=!0,v.start())}return{isSupported:l,text:i,copied:u,copy:p}}const L=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},N="__vueuse_ssr_handlers__";L[N]=L[N]||{};const Pe=L[N];function X(e,t){return Pe[e]||t}function be(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const $e={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function Se(e,t,r,n={}){var o;const{flush:a="pre",deep:l=!0,listenToStorageChanges:i=!0,writeDefaults:u=!0,shallow:v,window:c=h,eventFilter:p,onError:s=f=>{console.error(f)}}=n,d=O(t),w=be(d),_=(v?ne:g)(t),y=(o=n.serializer)!=null?o:$e[w];if(!r)try{r=X("getDefaultStorage",()=>{var f;return(f=h)==null?void 0:f.localStorage})()}catch(f){s(f)}let m=!1;function S(f){if(!(!r||f&&f.key!==e))try{const P=f?f.newValue:r.getItem(e);P==null?(_.value=d,u&&d!==null&&r.setItem(e,y.write(d))):typeof P!="string"?_.value=P:_.value=y.read(P)}catch(P){s(P)}}return S(),c&&i&&b(c,"storage",f=>{setTimeout(()=>{if(m){m=!1;return}S(f)},0)}),r&&he(_,()=>{try{_.value==null?r.removeItem(e):r.setItem(e,y.write(_.value)),m=!0}catch(f){s(f)}},{flush:a,deep:l,eventFilter:p}),_}function Y(e){return Oe("(prefers-color-scheme: dark)",e)}var Ee=Object.defineProperty,z=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,je=(e,t)=>{for(var r in t||(t={}))De.call(t,r)&&F(e,r,t[r]);if(z)for(var r of z(t))Te.call(t,r)&&F(e,r,t[r]);return e};function xe(e={}){const{selector:t="html",attribute:r="class",window:n=h,storage:o,storageKey:a="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:i}=e,u=je({auto:"",light:"light",dark:"dark"},e.modes||{}),v=Y({window:n}),c=D(()=>v.value?"dark":"light"),p=i||(a==null?g("auto"):Se(a,"auto",o,{window:n,listenToStorageChanges:l})),s=D({get(){return p.value==="auto"?c.value:p.value},set(y){p.value=y}}),d=X("updateHTMLAttrs",(y,m,S)=>{const f=n==null?void 0:n.document.querySelector(y);if(!!f)if(m==="class"){const P=S.split(/\s/g);Object.values(u).flatMap(E=>(E||"").split(/\s/g)).filter(Boolean).forEach(E=>{P.includes(E)?f.classList.add(E):f.classList.remove(E)})}else f.setAttribute(m,S)});function w(y){var m;d(t,r,(m=u[y])!=null?m:y)}function _(y){e.onChanged?e.onChanged(y,w):w(y)}return T(s,_,{flush:"post",immediate:!0}),A(()=>_(s.value)),s}var Ce=Object.defineProperty,Le=Object.defineProperties,Ne=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))Ae.call(t,r)&&J(e,r,t[r]);if(W)for(var r of W(t))Ie.call(t,r)&&J(e,r,t[r]);return e},ke=(e,t)=>Le(e,Ne(t));function Ze(e={}){const{valueDark:t="dark",valueLight:r="",window:n=h}=e,o=xe(ke(Me({},e),{onChanged:(i,u)=>{var v;e.onChanged?(v=e.onChanged)==null||v.call(e,i==="dark"):u(i)},modes:{dark:t,light:r}})),a=Y({window:n});return D({get(){return o.value==="dark"},set(i){i===a.value?o.value="auto":o.value=i?"dark":"light"}})}var ze=Object.defineProperty,Fe=Object.defineProperties,We=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,B=(e,t,r)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))Je.call(t,r)&&B(e,r,t[r]);if(R)for(var r of R(t))Re.call(t,r)&&B(e,r,t[r]);return e},He=(e,t)=>Fe(e,We(t));function et(e,t={}){var r,n;const o=(r=t.draggingElement)!=null?r:h,a=g((n=t.initialValue)!=null?n:{x:0,y:0}),l=g(),i=s=>t.pointerTypes?t.pointerTypes.includes(s.pointerType):!0,u=s=>{O(t.preventDefault)&&s.preventDefault(),O(t.stopPropagation)&&s.stopPropagation()},v=s=>{var d;if(!i(s)||O(t.exact)&&s.target!==O(e))return;const w=O(e).getBoundingClientRect(),_={x:s.pageX-w.left,y:s.pageY-w.top};((d=t.onStart)==null?void 0:d.call(t,_,s))!==!1&&(l.value=_,u(s))},c=s=>{var d;!i(s)||!l.value||(a.value={x:s.pageX-l.value.x,y:s.pageY-l.value.y},(d=t.onMove)==null||d.call(t,a.value,s),u(s))},p=s=>{var d;!i(s)||!l.value||(l.value=void 0,(d=t.onEnd)==null||d.call(t,a.value,s),u(s))};return j&&(b(e,"pointerdown",v,!0),b(o,"pointermove",c,!0),b(o,"pointerup",p,!0)),He(Be({},ve(a)),{position:a,isDragging:D(()=>!!l.value),style:D(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var H=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,Ve=(e,t)=>{var r={};for(var n in e)Ke.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&H)for(var n of H(e))t.indexOf(n)<0&&Qe.call(e,n)&&(r[n]=e[n]);return r};function Xe(e,t,r={}){const n=r,{window:o=h}=n,a=Ve(n,["window"]);let l;const i=o&&"ResizeObserver"in o,u=()=>{l&&(l.disconnect(),l=void 0)},v=T(()=>$(e),p=>{u(),i&&o&&p&&(l=new ResizeObserver(t),l.observe(p,a))},{immediate:!0,flush:"post"}),c=()=>{u(),v()};return x(c),{isSupported:i,stop:c}}function tt(e,t={width:0,height:0},r={}){const n=g(t.width),o=g(t.height);return Xe(e,([a])=>{n.value=a.contentRect.width,o.value=a.contentRect.height},r),T(()=>$(e),a=>{n.value=a?t.width:0,o.value=a?t.height:0}),{width:n,height:o}}var K,Q;j&&(window==null?void 0:window.navigator)&&((K=window==null?void 0:window.navigator)==null?void 0:K.platform)&&/iP(ad|hone|od)/.test((Q=window==null?void 0:window.navigator)==null?void 0:Q.platform);function rt({window:e=h,initialWidth:t=1/0,initialHeight:r=1/0}={}){const n=g(t),o=g(r),a=()=>{e&&(n.value=e.innerWidth,o.value=e.innerHeight)};return a(),A(a),b("resize",a,{passive:!0}),{width:n,height:o}}export{qe as a,rt as b,tt as c,et as d,Ue as e,Ge as o,Ze as u};

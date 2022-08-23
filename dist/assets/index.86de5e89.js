import{d as S,i as u,o as h,m,w as c,es as A,k as F,K as T,c as w,J as x,I as E,l as R,G as j,eH as ke,ey as ne,u as W,r as D,q as se,b as s,j as g,_ as B,s as ae,t as ie,eA as G,er as Ce,eL as $e,n as Fe,a as b,z as we,p as re,e as le,f as Ee,el as Ae,g as ce,eu as xe,eM as He,ek as Be}from"./index.57692254.js";import{_ as De}from"./GiSvgIcon.3357d481.js";import{a as Me,_ as Te}from"./logo.3ea28f3a.js";import{s as O}from"./index.463d26de.js";import"./viewer.8faa7f55.js";import"./index.c2523c05.js";const Le=S({name:"MenuItem"}),ze=S({...Le,props:{data:{type:Object,default:()=>{}}},emits:["click"],setup(e,{emit:t}){const n=o=>{t("click",o)};return(o,r)=>{const i=De,a=u("MenuItem",!0),d=u("a-sub-menu"),l=u("icon-unordered-list"),p=u("a-menu-item");return e.data.children&&e.data.children.length&&!e.data.meta.hidden?(h(),m(d,{key:e.data.name},{icon:c(()=>[e.data.meta.icon?(h(),m(i,{key:0,size:24,name:e.data.meta.icon},null,8,["name"])):A("",!0)]),title:c(()=>[F(T(e.data.meta.title),1)]),default:c(()=>[(h(!0),w(E,null,x(e.data.children,_=>(h(),m(a,{key:_.name,data:_,onClick:n},null,8,["data"]))),128))]),_:1})):(h(),w(E,{key:1},[e.data.meta.hidden?A("",!0):(h(),m(p,{key:e.data.name,onClick:r[0]||(r[0]=_=>n(e.data))},{icon:c(()=>[e.data.meta.icon?(h(),m(i,{key:0,size:24,name:e.data.meta.icon},null,8,["name"])):(h(),m(l,{key:1,size:20}))]),default:c(()=>[F(" "+T(e.data.meta.title),1)]),_:1}))],64))}}});function Ie(){const e=R(),t=j(()=>e.menuFromServer?e.asyncMenus:ke);return{menuTree:j(()=>{const o=JSON.parse(JSON.stringify(t.value));o.sort((i,a)=>(i.meta.order||0)-(a.meta.order||0));function r(i,a){return i?i.map(l=>{var _,v;if(((_=l.meta)==null?void 0:_.hideChildrenInMenu)||!l.children)return l.children=[],l;l.children=l.children.filter(f=>{var k;return((k=f.meta)==null?void 0:k.hideInMenu)!==!0});const p=r(l.children,a+1);return p.length||a>1?(l.children=p,l):((v=l.meta)==null?void 0:v.hideInMenu)===!1?l:null}).filter(Boolean):null}return r(o,0)})}}const Ne=S({name:"Asider"}),Re=S({...Ne,setup(e){const t=ne(),n=W(),{menuTree:o}=Ie(),r=l=>{const p=[];function _(v){v.forEach(f=>{var k;f.name&&p.push(f.name),(k=f.children)!=null&&k.length&&_(f.children)})}return _(l),p},i=D("Workplace"),a=r(o.value);se(()=>t.path,()=>{var l,p;console.log(t),a.includes(((l=t.name)==null?void 0:l.toString())||"")&&(i.value=((p=t.name)==null?void 0:p.toString())||"")},{immediate:!0});const d=l=>{i.value=l.name,l.name&&(l.name==="File"?n.push({name:l.name,query:{fileType:0}}):n.push({name:l.name}),a.includes(l.path)&&(i.value=l.name))};return(l,p)=>{const _=u("a-menu"),v=u("a-layout-sider");return h(),m(v,{collapsible:"",breakpoint:"xl",class:"asider"},{default:c(()=>[s(_,{"selected-keys":[i.value],"default-open-keys":["Workplace"],"auto-open-selected":!0,style:{width:"100%",height:"100%"}},{default:c(()=>[(h(!0),w(E,null,x(g(o),f=>(h(),m(ze,{key:f.name,data:f,onClick:d},null,8,["data"]))),128))]),_:1},8,["selected-keys"])]),_:1})}}});const Oe=B(Re,[["__scopeId","data-v-5826413b"]]);function je(){const e=D(!1),t=()=>{e.value=O.isFullscreen},n=()=>{O.toggle()};return ae(()=>{O.on("change",t)}),ie(()=>{O.off("change",t)}),{isFullScreen:e,onToggleFullScreen:n}}/*!
  * vue-color-kit v1.0.4
  * (c) 2021 
  * @license MIT
  */function H(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Ve(e):/rgb/.test(e)?t=oe(e):typeof e=="string"?t=oe(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:r,a:i}=t,{h:a,s:d,v:l}=Ke(t);return{r:n,g:o,b:r,a:i===void 0?1:i,h:a,s:d,v:l}}function U(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function K(e,t,n,o,r,i){const a=e==="l",d=t.createLinearGradient(0,0,a?n:0,a?0:o);d.addColorStop(.01,r),d.addColorStop(.99,i),t.fillStyle=d,t.fillRect(0,0,n,o)}function Pe({r:e,g:t,b:n},o){const r=a=>("0"+Number(a).toString(16)).slice(-2),i=`#${r(e)}${r(t)}${r(n)}`;return o?i.toUpperCase():i}function Ve(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function oe(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Ke({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),r=Math.min(e,t,n),i=o-r;let a=0;o===r?a=0:o===e?t>=n?a=60*(t-n)/i:a=60*(t-n)/i+360:o===t?a=60*(n-e)/i+120:o===n&&(a=60*(e-t)/i+240),a=Math.floor(a);let d=parseFloat((o===0?0:1-r/o).toFixed(2)),l=parseFloat(o.toFixed(2));return{h:a,s:d,v:l}}var q=S({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},emits:["selectSaturation"],data(){return{slideSaturationStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasSaturation,t=this.size,n=e.getContext("2d");e.width=t,e.height=t,n.fillStyle=this.color,n.fillRect(0,0,t,t),K("l",n,t,t,"#FFFFFF","rgba(255,255,255,0)"),K("p",n,t,t,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(e){const{top:t,left:n}=this.$el.getBoundingClientRect(),o=e.target.getContext("2d"),r=a=>{let d=a.clientX-n,l=a.clientY-t;d<0&&(d=0),l<0&&(l=0),d>this.size&&(d=this.size),l>this.size&&(l=this.size),this.slideSaturationStyle={left:d-5+"px",top:l-5+"px"};const p=o.getImageData(Math.min(d,this.size-1),Math.min(l,this.size-1),1,1),[_,v,f]=p.data;this.$emit("selectSaturation",{r:_,g:v,b:f})};r(e);const i=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",i)}}});const We={ref:"canvasSaturation"};function Ge(e,t,n,o,r,i){return h(),m("div",{class:"saturation",onMousedown:t[1]||(t[1]=G((...a)=>e.selectSaturation&&e.selectSaturation(...a),["prevent","stop"]))},[s("canvas",We,null,512),s("div",{style:e.slideSaturationStyle,class:"slide"},null,4)],32)}q.render=Ge;q.__file="src/color/Saturation.vue";var X=S({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectHue"],data(){return{slideHueStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasHue,t=this.width,n=this.height,o=e.getContext("2d");e.width=t,e.height=n;const r=o.createLinearGradient(0,0,0,n);r.addColorStop(0,"#FF0000"),r.addColorStop(.17*1,"#FF00FF"),r.addColorStop(.17*2,"#0000FF"),r.addColorStop(.17*3,"#00FFFF"),r.addColorStop(.17*4,"#00FF00"),r.addColorStop(.17*5,"#FFFF00"),r.addColorStop(1,"#FF0000"),o.fillStyle=r,o.fillRect(0,0,t,n)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(e){const{top:t}=this.$el.getBoundingClientRect(),n=e.target.getContext("2d"),o=i=>{let a=i.clientY-t;a<0&&(a=0),a>this.height&&(a=this.height),this.slideHueStyle={top:a-2+"px"};const d=n.getImageData(0,Math.min(a,this.height-1),1,1),[l,p,_]=d.data;this.$emit("selectHue",{r:l,g:p,b:_})};o(e);const r=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)}}});const Ue={ref:"canvasHue"};function qe(e,t,n,o,r,i){return h(),m("div",{class:"hue",onMousedown:t[1]||(t[1]=G((...a)=>e.selectHue&&e.selectHue(...a),["prevent","stop"]))},[s("canvas",Ue,null,512),s("div",{style:e.slideHueStyle,class:"slide"},null,4)],32)}X.render=qe;X.__file="src/color/Hue.vue";var J=S({props:{color:{type:String,default:"#000000"},rgba:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectAlpha"],data(){return{slideAlphaStyle:{},alphaSize:5}},watch:{color(){this.renderColor()},"rgba.a"(){this.renderSlide()}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasAlpha,t=this.width,n=this.height,o=this.alphaSize,r=U(o),i=e.getContext("2d");e.width=t,e.height=n,i.fillStyle=i.createPattern(r,"repeat"),i.fillRect(0,0,t,n),K("p",i,t,n,"rgba(255,255,255,0)",this.color)},renderSlide(){this.slideAlphaStyle={top:this.rgba.a*this.height-2+"px"}},selectAlpha(e){const{top:t}=this.$el.getBoundingClientRect(),n=r=>{let i=r.clientY-t;i<0&&(i=0),i>this.height&&(i=this.height);let a=parseFloat((i/this.height).toFixed(2));this.$emit("selectAlpha",a)};n(e);const o=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)}}});const Xe={ref:"canvasAlpha"};function Je(e,t,n,o,r,i){return h(),m("div",{class:"color-alpha",onMousedown:t[1]||(t[1]=G((...a)=>e.selectAlpha&&e.selectAlpha(...a),["prevent","stop"]))},[s("canvas",Xe,null,512),s("div",{style:e.slideAlphaStyle,class:"slide"},null,4)],32)}J.render=Je;J.__file="src/color/Alpha.vue";var Y=S({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data(){return{alphaSize:5}},watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const e=this.$el,t=this.width,n=this.height,o=this.alphaSize,r=U(o),i=e.getContext("2d");e.width=t,e.height=n,i.fillStyle=i.createPattern(r,"repeat"),i.fillRect(0,0,t,n),i.fillStyle=this.color,i.fillRect(0,0,t,n)}}});function Ye(e,t,n,o,r,i){return h(),m("canvas")}Y.render=Ye;Y.__file="src/color/Preview.vue";var Z=S({props:{suckerCanvas:{type:Object,default:null},suckerArea:{type:Array,default:()=>[]}},data(){return{isOpenSucker:!1,suckerPreview:null,isSucking:!1}},watch:{suckerCanvas(e){this.isSucking=!1,this.suckColor(e)}},methods:{openSucker(){this.isOpenSucker?this.keydownHandler({keyCode:27}):(this.isOpenSucker=!0,this.isSucking=!0,this.$emit("openSucker",!0),document.addEventListener("keydown",this.keydownHandler))},keydownHandler(e){e.keyCode===27&&(this.isOpenSucker=!1,this.isSucking=!1,this.$emit("openSucker",!1),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:t,clientY:n}=e,{top:o,left:r,width:i,height:a}=this.suckerCanvas.getBoundingClientRect(),d=t-r,l=n-o,_=this.suckerCanvas.getContext("2d").getImageData(Math.min(d,i-1),Math.min(l,a-1),1,1);let[v,f,k,$]=_.data;$=parseFloat(($/255).toFixed(2));const C=this.suckerPreview.style;Object.assign(C,{position:"absolute",left:t+20+"px",top:n-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${v}, ${f}, ${k}, ${$})`,zIndex:95}),this.suckerArea.length&&t>=this.suckerArea[0]&&n>=this.suckerArea[1]&&t<=this.suckerArea[2]&&n<=this.suckerArea[3]?C.display="":C.display="none"},suckColor(e){e&&e.tagName!=="CANVAS"||(this.suckerPreview=document.createElement("div"),this.suckerPreview&&document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",t=>{const{clientX:n,clientY:o}=t,{top:r,left:i,width:a,height:d}=e.getBoundingClientRect(),l=n-i,p=o-r,v=e.getContext("2d").getImageData(Math.min(l,a-1),Math.min(p,d-1),1,1);let[f,k,$,C]=v.data;C=parseFloat((C/255).toFixed(2)),this.$emit("selectSucker",{r:f,g:k,b:$,a:C})}))}}});const Ze=s("path",{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"},null,-1),Qe={key:1,class:"sucker",viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"},et=s("g",{fill:"none","fill-rule":"evenodd"},[s("g",{transform:"translate(1 1)","stroke-width":"4"},[s("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),s("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[s("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])],-1);function tt(e,t,n,o,r,i){return h(),m("div",null,[e.isSucking?A("v-if",!0):(h(),m("svg",{key:0,class:[{active:e.isOpenSucker},"sucker"],xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48",onClick:t[1]||(t[1]=(...a)=>e.openSucker&&e.openSucker(...a))},[Ze],2)),e.isSucking?(h(),m("svg",Qe,[et])):A("v-if",!0)])}Z.render=tt;Z.__file="src/color/Sucker.vue";var Q=S({props:{name:{type:String,default:""},color:{type:String,default:""}},emits:["inputColor"],setup(e,{emit:t}){return{modelColor:j({get(){return e.color||""},set(o){t("inputColor",o)}})}}});const ot={class:"color-type"},nt={class:"name"};function st(e,t,n,o,r,i){return h(),m("div",ot,[s("span",nt,T(e.name),1),Ce(s("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>e.modelColor=a),class:"value"},null,512),[[$e,e.modelColor]])])}Q.render=st;Q.__file="src/color/Box.vue";var ee=S({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,default:()=>[]},colorsHistoryKey:{type:String,default:""}},emits:["selectColor"],setup(e,{emit:t}){const n=D(),o=D([]),r=D();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),r.value=U(4).toDataURL(),ie(()=>{i(n.value)});function i(d){if(!d)return;const l=o.value||[],p=l.indexOf(d);p>=0&&l.splice(p,1),l.length>=8&&(l.length=7),l.unshift(d),o.value=l||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(l))}function a(d){t("selectColor",d)}return{setColorsHistory:i,colorsHistory:o,color:n,imgAlphaBase64:r,selectColor:a}}});const at={class:"colors"},it={key:0,class:"colors history"};function rt(e,t,n,o,r,i){return h(),m("div",null,[s("ul",at,[(h(!0),m(E,null,x(e.colorsDefault,a=>(h(),m("li",{key:a,class:"item",onClick:d=>e.selectColor(a)},[s("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),s("div",{style:{background:a},class:"color"},null,4)],8,["onClick"]))),128))]),e.colorsHistory.length?(h(),m("ul",it,[(h(!0),m(E,null,x(e.colorsHistory,a=>(h(),m("li",{key:a,class:"item",onClick:d=>e.selectColor(a)},[s("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),s("div",{style:{background:a},class:"color"},null,4)],8,["onClick"]))),128))])):A("v-if",!0)])}ee.render=rt;ee.__file="src/color/Colors.vue";var M=S({components:{Saturation:q,Hue:X,Alpha:J,Preview:Y,Sucker:Z,Box:Q,Colors:ee},emits:["changeColor","openSucker"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data(){return{hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}},computed:{isLightTheme(){return this.theme==="light"},totalWidth(){return this.hueHeight+(this.hueWidth+8)*2},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return Pe(this.rgba,!0)}},created(){Object.assign(this,H(this.color)),this.setText(),this.$watch("rgba",()=>{this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})})},methods:{selectSaturation(e){const{r:t,g:n,b:o,h:r,s:i,v:a}=H(e);Object.assign(this,{r:t,g:n,b:o,h:r,s:i,v:a}),this.setText()},selectHue(e){const{r:t,g:n,b:o,h:r,s:i,v:a}=H(e);Object.assign(this,{r:t,g:n,b:o,h:r,s:i,v:a}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},selectAlpha(e){this.a=e,this.setText()},inputHex(e){const{r:t,g:n,b:o,a:r,h:i,s:a,v:d}=H(e);Object.assign(this,{r:t,g:n,b:o,a:r,h:i,s:a,v:d}),this.modelHex=e,this.modelRgba=this.rgbaStringShort,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(e){const{r:t,g:n,b:o,a:r,h:i,s:a,v:d}=H(e);Object.assign(this,{r:t,g:n,b:o,a:r,h:i,s:a,v:d}),this.modelHex=this.hexString,this.modelRgba=e,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},openSucker(e){this.$emit("openSucker",e)},selectSucker(e){const{r:t,g:n,b:o,a:r,h:i,s:a,v:d}=H(e);Object.assign(this,{r:t,g:n,b:o,a:r,h:i,s:a,v:d}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},selectColor(e){const{r:t,g:n,b:o,a:r,h:i,s:a,v:d}=H(e);Object.assign(this,{r:t,g:n,b:o,a:r,h:i,s:a,v:d}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}});const lt={class:"color-set"};function ct(e,t,n,o,r,i){const a=u("Saturation"),d=u("Hue"),l=u("Alpha"),p=u("Preview"),_=u("Sucker"),v=u("Box"),f=u("Colors");return h(),m("div",{class:["hu-color-picker",{light:e.isLightTheme}],style:{width:e.totalWidth+"px"}},[s("div",lt,[s(a,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),s(d,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"]),s(l,{ref:"alpha",color:e.rgbString,rgba:e.rgba,width:e.hueWidth,height:e.hueHeight,onSelectAlpha:e.selectAlpha},null,8,["color","rgba","width","height","onSelectAlpha"])]),s("div",{style:{height:e.previewHeight+"px"},class:"color-show"},[s(p,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"]),e.suckerHide?A("v-if",!0):(h(),m(_,{key:0,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea,onOpenSucker:e.openSucker,onSelectSucker:e.selectSucker},null,8,["sucker-canvas","sucker-area","onOpenSucker","onSelectSucker"]))],4),s(v,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),s(v,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),s(f,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"]),A(" custom options "),Fe(e.$slots,"default")],6)}M.render=ct;M.__file="src/color/ColorPicker.vue";M.install=e=>{e.component(M.name,M)};const ut=[{label:"\u5361\u7247",value:"card"},{label:"\u95F4\u9694\u5361\u7247",value:"card-gutter"},{label:"\u5706\u89D2",value:"rounded"}],dt=[{label:"\u9ED8\u8BA4",value:"zoom-fade"},{label:"\u6ED1\u52A8",value:"fade-slide"},{label:"\u6E10\u53D8",value:"fade"},{label:"\u5E95\u90E8\u6ED1\u51FA",value:"fade-bottom"},{label:"\u7F29\u653E\u6D88\u9000",value:"fade-scale"}],L=e=>(re("data-v-f89fc13f"),e=e(),le(),e),ht=F("\u9879\u76EE\u914D\u7F6E"),pt=L(()=>b("span",{class:"title"},"\u7CFB\u7EDF\u4E3B\u9898",-1)),mt=L(()=>b("span",{class:"title"},"\u754C\u9762\u663E\u793A",-1)),_t=L(()=>b("span",{class:"label"},"\u9875\u7B7E\u663E\u793A",-1)),ft=L(()=>b("span",{class:"label"},"\u9875\u7B7E\u98CE\u683C",-1)),gt=L(()=>b("span",{class:"label"},"\u52A8\u753B\u663E\u793A",-1)),vt=L(()=>b("span",{class:"label"},"\u52A8\u753B\u5207\u6362\u7C7B\u578B",-1)),yt={class:"label"},St=F("\u83DC\u5355\u6765\u6E90\u4E8E\u540E\u53F0 "),bt=S({name:"SettingDrawer"}),kt=S({...bt,props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=R(),r=j({get:()=>n.modelValue,set:l=>t("update:modelValue",l)}),i=["#1890ff","#409EFF","#2d8cf0","#007AFF","#5ac8fa","#5856D6","#536dfe","#9c27b0","#AF52DE","#0096c7","#00C1D4","#34C759","#43a047","#7cb342","#c0ca33","#78DEC7","#e53935","#d81b60","#f4511e","#fb8c00","#ffb300","#fdd835","#6d4c41","#546e7a"];o.themeColor&&o.setThemeColor(o.themeColor);const a=l=>{!/^#[0-9A-Za-z]{6}/.test(l.hex)||o.setThemeColor(l.hex)},d=l=>{o.changeMenuFromServer(l),l&&o.getServerMenus()};return(l,p)=>{const _=u("a-divider"),v=u("a-row"),f=u("a-switch"),k=u("a-option"),$=u("a-select"),C=u("icon-question-circle-fill"),z=u("a-tooltip"),I=u("a-space"),N=u("a-drawer");return h(),m(N,{visible:g(r),"onUpdate:visible":p[3]||(p[3]=y=>we(r)?r.value=y:null),width:"300px","unmount-on-close":"",footer:!1},{title:c(()=>[ht]),default:c(()=>[s(I,{size:15,direction:"vertical",fill:""},{default:c(()=>[s(_,{orientation:"center"},{default:c(()=>[pt]),_:1}),s(v,{justify:"center"},{default:c(()=>[s(g(M),{theme:"dark",color:g(o).themeColor,"sucker-hide":!0,"colors-default":i,onChangeColor:a},null,8,["color"])]),_:1}),s(_,{orientation:"center"},{default:c(()=>[mt]),_:1}),s(v,{justify:"space-between",align:"center"},{default:c(()=>[_t,s(f,{size:"medium","model-value":g(o).tab,onChange:p[0]||(p[0]=y=>g(o).setTabVisible(Boolean(y)))},null,8,["model-value"])]),_:1}),s(v,{justify:"space-between",align:"center"},{default:c(()=>[ft,s($,{placeholder:"\u8BF7\u9009\u62E9","model-value":g(o).tabMode,disabled:!g(o).tab,style:{width:"120px"},"trigger-props":{autoFitPopupMinWidth:!0}},{default:c(()=>[(h(!0),w(E,null,x(g(ut),y=>(h(),m(k,{key:y.value,value:y.value,onClick:P=>g(o).setTabMode(y.value)},{default:c(()=>[F(T(y.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1}),s(v,{justify:"space-between",align:"center"},{default:c(()=>[gt,s(f,{size:"medium","model-value":g(o).animate,onChange:p[1]||(p[1]=y=>g(o).setAnimateVisible(Boolean(y)))},null,8,["model-value"])]),_:1}),s(v,{justify:"space-between",align:"center"},{default:c(()=>[vt,s($,{placeholder:"\u8BF7\u9009\u62E9","model-value":g(o).animateMode,disabled:!g(o).animate,style:{width:"120px"}},{default:c(()=>[(h(!0),w(E,null,x(g(dt),y=>(h(),m(k,{key:y.value,value:y.value,onClick:P=>g(o).setAnimateMode(y.value)},{default:c(()=>[F(T(y.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1}),s(v,{justify:"space-between",align:"center"},{default:c(()=>[b("span",yt,[St,s(z,{content:"\u5F02\u6B65\u83DC\u5355\u6CA1\u505A\u592A\u4ED4\u7EC6\uFF0C\u53EA\u662F\u7B80\u5355\u6284\u4E86\u4E0BArco Vue Pro\uFF0C\u5982\u6709\u9700\u6C42\u53EF\u81EA\u884C\u6269\u5C55..."},{default:c(()=>[s(C,{style:{color:"rgb(var(--warning-6))"}})]),_:1})]),s(f,{size:"medium","model-value":g(o).menuFromServer,onChange:p[2]||(p[2]=y=>d(Boolean(y)))},null,8,["model-value"])]),_:1})]),_:1})]),_:1},8,["visible"])}}});const Ct=B(kt,[["__scopeId","data-v-f89fc13f"]]),$t={class:"message"},Ft=F("\u901A\u77E5(1)"),wt=F("\u5173\u6CE8(1)"),Et=F("\u5F85\u529E(2)"),At=["src"],xt=S({name:"Message"}),Ht=S({...xt,setup(e){const t=[{name:"Socrates",datetime:"1\u5C0F\u65F6\u4E4B\u524D",content:"Comment body content.",avatar:"https://lolicode.gitee.io/scui-doc/demo/img/avatar2.gif"},{name:"\u6728\u6728\u7CD6\u9187",datetime:"2\u5C0F\u65F6\u4E4B\u524D",content:"\u5173\u6CE8\u4E86\u4F60",avatar:"https://s1.ax1x.com/2022/06/14/XhteeO.jpg"},{name:"\u5F90\u6B23",datetime:"2\u4E2A\u534A\u5C0F\u65F6\u4E4B\u524D",content:"\u6536\u85CF\u4E86\u4F60\u7684\u6587\u7AE0",avatar:"https://s1.ax1x.com/2022/06/14/XhtSwF.jpg"}];return(n,o)=>{const r=u("a-tab-pane"),i=u("a-tabs"),a=u("a-avatar"),d=u("a-comment");return h(),w("div",$t,[s(i,{"default-active-key":"1"},{default:c(()=>[s(r,{key:"1"},{title:c(()=>[Ft]),_:1}),s(r,{key:"2"},{title:c(()=>[wt]),_:1}),s(r,{key:"3"},{title:c(()=>[Et]),_:1})]),_:1}),b("section",null,[(h(),w(E,null,x(t,(l,p)=>s(d,{key:p,author:l.name,content:l.content,datetime:l.datetime},{actions:c(()=>[]),avatar:c(()=>[s(a,null,{default:c(()=>[b("img",{src:l.avatar},null,8,At)]),_:2},1024)]),_:2},1032,["author","content","datetime"])),64))])])}}});const Bt=B(Ht,[["__scopeId","data-v-433a0fee"]]),ue=e=>(re("data-v-2f2678d9"),e=e(),le(),e),Dt=ue(()=>b("img",{src:Te},null,-1)),Mt=ue(()=>b("span",{class:"gi_hover system-name"},"Admin Pro",-1)),Tt=[Dt,Mt],Lt=["src"],zt={class:"username"},It={class:"doption-icon",style:{background:"rgba(var(--primary-6))"}},Nt=F("\u4E2A\u4EBA\u4E2D\u5FC3"),Rt={class:"doption-icon",style:{background:"rgba(var(--success-6))"}},Ot=F("\u9879\u76EE\u5730\u5740"),jt={class:"doption-icon",style:{background:"rgba(var(--warning-6))"}},Pt=F("\u9000\u51FA\u767B\u5F55"),Vt=S({name:"Header"}),Kt=S({...Vt,setup(e){const t=W(),n=R(),o=Ee(),{isFullScreen:r,onToggleFullScreen:i}=je(),a=D(!1),d=()=>{t.push("/")},l=()=>{t.push("/system/user-center")},p=()=>{Ae.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",hideCancel:!1,onOk:()=>{o.logout(),n.clearServerMenu(),t.replace("/login")}})},_=()=>{window.open("https://gitee.com/lin0716/gi-demo")};return(v,f)=>{const k=u("icon-settings"),$=u("a-button"),C=u("a-tooltip"),z=u("icon-notification"),I=u("a-badge"),N=u("a-popover"),y=u("icon-fullscreen"),P=u("icon-fullscreen-exit"),de=Me,he=u("a-avatar"),pe=u("icon-down"),me=u("a-row"),_e=u("icon-user"),V=u("a-doption"),fe=u("icon-github"),ge=u("a-divider"),ve=u("icon-export"),ye=u("a-dropdown"),Se=u("a-space"),be=u("a-layout-header");return h(),m(be,null,{default:c(()=>[b("section",{class:"system-logo",onClick:d},Tt),s(Se,{class:"system-head",size:"medium"},{default:c(()=>[s(C,{content:"\u9879\u76EE\u914D\u7F6E",position:"bl"},{default:c(()=>[s($,{size:"mini",class:"gi_hover_btn",onClick:f[0]||(f[0]=te=>a.value=!a.value)},{icon:c(()=>[s(k,{size:18})]),_:1})]),_:1}),s(N,{position:"br",trigger:"click"},{content:c(()=>[s(Bt)]),default:c(()=>[s(I,{count:9,dot:""},{default:c(()=>[s($,{size:"mini",class:"gi_hover_btn"},{icon:c(()=>[s(z,{size:18})]),_:1})]),_:1})]),_:1}),s(C,{content:"\u5168\u5C4F\u5207\u6362",position:"bottom"},{default:c(()=>[s($,{size:"mini",class:"gi_hover_btn",onClick:g(i)},{icon:c(()=>[g(r)?(h(),m(P,{key:1,size:18})):(h(),m(y,{key:0,size:18}))]),_:1},8,["onClick"])]),_:1}),s(C,{content:"\u4E3B\u9898\u5207\u6362",position:"bottom"},{default:c(()=>[s(de)]),_:1}),s(ye,{trigger:"hover"},{content:c(()=>[s(V,{onClick:l},{icon:c(()=>[b("span",It,[s(_e)])]),default:c(()=>[Nt]),_:1}),s(V,{onClick:_},{icon:c(()=>[b("span",Rt,[s(fe)])]),default:c(()=>[Ot]),_:1}),s(ge,{style:{margin:"0"}}),s(V,{onClick:p},{icon:c(()=>[b("span",jt,[s(ve)])]),default:c(()=>[Pt]),_:1})]),default:c(()=>[s(me,{align:"center",class:"user"},{default:c(()=>[s(he,{size:32},{default:c(()=>[b("img",{src:g(o).userInfo.avatar},null,8,Lt)]),_:1}),b("span",zt,T(g(o).userName),1),s(pe)]),_:1})]),_:1})]),_:1}),s(Ct,{modelValue:a.value,"onUpdate:modelValue":f[1]||(f[1]=te=>a.value=te)},null,8,["modelValue"])]),_:1})}}});const Wt=B(Kt,[["__scopeId","data-v-2f2678d9"]]),Gt=S({name:"Main"}),Ut=S({...Gt,setup(e){const t=ce(),n=R();return(o,r)=>{const i=u("router-view"),a=u("a-layout");return h(),m(a,{class:"main"},{default:c(()=>[s(i,null,{default:c(({Component:d,route:l})=>[s(xe,{name:g(n).transitionName,mode:"out-in",appear:""},{default:c(()=>[(h(),m(He,{include:g(t).cacheList},[(h(),m(Be(d),{key:l.path}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})]),_:1})}}});const qt=B(Ut,[["__scopeId","data-v-0832c025"]]),Xt={key:0,class:"nav-tab"},Jt=F("\u5173\u95ED\u5F53\u524D\u9875\u7B7E"),Yt=F("\u5173\u95ED\u6240\u6709\u9875\u7B7E"),Zt=S({name:"NavTab"}),Qt=S({...Zt,setup(e){const t=ne(),n=W(),o=ce(),r=R();ae(()=>{i()}),se(()=>t.path,()=>{i()});const i=()=>{o.addTagItem({name:t.meta.title||"\u672A\u547D\u540D",path:t.path,componentName:t.name}),t.meta.keepAlive&&o.addCacheItem(String(t.name))},a=p=>{n.push({path:p.toString()})},d=p=>{const _=o.tagList.find(v=>v.path===p);o.removeTagItem(p.toString()),_!=null&&_.componentName&&o.removeCacheItem(_.componentName)},l=()=>{o.clearTagList()};return(p,_)=>{const v=u("a-tab-pane"),f=u("icon-settings"),k=u("a-button"),$=u("icon-minus-circle-fill"),C=u("a-doption"),z=u("icon-close-circle-fill"),I=u("a-dropdown"),N=u("a-tabs");return g(r).tab?(h(),w("div",Xt,[s(N,{editable:"","hide-content":"",size:"medium",type:g(r).tabMode,"active-key":g(t).path,onTabClick:a,onDelete:d},{extra:c(()=>[s(I,{trigger:"hover"},{content:c(()=>[s(C,{onClick:_[0]||(_[0]=y=>d(g(t).path))},{icon:c(()=>[s($,{size:20,style:{color:"#ff7d00"}})]),default:c(()=>[Jt]),_:1}),s(C,{onClick:l},{icon:c(()=>[s(z,{size:20,style:{color:"#f53f3f"}})]),default:c(()=>[Yt]),_:1})]),default:c(()=>[s(k,{type:"primary",size:"small",class:"extra-btn"},{icon:c(()=>[s(f,{size:18})]),_:1})]),_:1})]),default:c(()=>[(h(!0),w(E,null,x(g(o).tagList,y=>(h(),m(v,{key:y.path,title:y.name,closable:y.path!=="/home"},null,8,["title","closable"]))),128))]),_:1},8,["type","active-key"])])):A("",!0)}}});const eo=B(Qt,[["__scopeId","data-v-3f16050e"]]),to=S({__name:"index",setup(e){return(t,n)=>{const o=u("a-layout");return h(),m(o,{class:"layout"},{default:c(()=>[s(Oe),s(o,null,{default:c(()=>[s(Wt),s(eo),s(qt)]),_:1})]),_:1})}}});const lo=B(to,[["__scopeId","data-v-00d42dc3"]]);export{lo as default};

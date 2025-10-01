import{d as c,r as v,b as i,o as d,j as m,g as f,f as o,s as F,e as R,c as z,k as T,l as E,v as B,w as M,a0 as $,a9 as D,N as U,x as j,y as P,m as V}from"./vue.esm-bundler-CDO2oHXK.js";import{a as W}from"./utils-N9jxOpu3.js";import{c as G}from"./createContext-B-1E407x.js";import{b as A,i as S}from"./useForwardExpose-BfXw-hnz.js";import{P as y}from"./Primitive-BG2Gt-GN.js";import{c as H}from"./index-DZcI7uxW.js";const[q,J]=G("AvatarRoot");var K=c({__name:"AvatarRoot",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){return A(),J({imageLoadingStatus:v("idle")}),(a,s)=>(d(),i(o(y),{"as-child":a.asChild,as:a.as},{default:m(()=>[f(a.$slots,"default")]),_:3},8,["as-child","as"]))}}),O=K,Q=c({__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const a=e,s=q();A();const r=v(a.delayMs===void 0);return F(n=>{if(a.delayMs&&S){const l=window.setTimeout(()=>{r.value=!0},a.delayMs);n(()=>{window.clearTimeout(l)})}}),(n,l)=>r.value&&o(s).imageLoadingStatus.value!=="loaded"?(d(),i(o(y),{key:0,"as-child":n.asChild,as:n.as},{default:m(()=>[f(n.$slots,"default")]),_:3},8,["as-child","as"])):R("v-if",!0)}}),X=Q;function k(e,a){return e?a?(e.src!==a&&(e.src=a),e.complete&&e.naturalWidth>0?"loaded":"loading"):"error":"idle"}function Y(e,{referrerPolicy:a,crossOrigin:s}={}){const r=v(!1),n=v(null),l=z(()=>r.value?(!n.value&&S&&(n.value=new window.Image),n.value):null),p=v(k(l.value,e.value)),g=u=>()=>{r.value&&(p.value=u)};return T(()=>{r.value=!0,F(u=>{const t=l.value;if(!t)return;p.value=k(t,e.value);const h=g("loaded"),C=g("error");t.addEventListener("load",h),t.addEventListener("error",C),a!=null&&a.value&&(t.referrerPolicy=a.value),typeof(s==null?void 0:s.value)=="string"&&(t.crossOrigin=s.value),u(()=>{t.removeEventListener("load",h),t.removeEventListener("error",C)})})}),E(()=>{r.value=!1}),p}var Z=c({__name:"AvatarImage",props:{src:{type:String,required:!0},referrerPolicy:{type:null,required:!1},crossOrigin:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"img"}},emits:["loadingStatusChange"],setup(e,{emit:a}){const s=e,r=a,{src:n,referrerPolicy:l,crossOrigin:p}=B(s);A();const g=q(),u=Y(n,{referrerPolicy:l,crossOrigin:p});return M(u,t=>{r("loadingStatusChange",t),t!=="idle"&&(g.imageLoadingStatus.value=t)},{immediate:!0}),(t,h)=>$((d(),i(o(y),{role:"img","as-child":t.asChild,as:t.as,src:o(n),"referrer-policy":o(l)},{default:m(()=>[f(t.$slots,"default")]),_:3},8,["as-child","as","src","referrer-policy"])),[[D,o(u)==="loaded"]])}}),aa=Z;const b=c({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(e){const a=e;return(s,r)=>(d(),i(o(O),{class:U(o(W)(o(ea)({size:e.size,shape:e.shape}),a.class))},{default:m(()=>[f(s.$slots,"default")]),_:3},8,["class"]))}});b.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"sm"'}},{name:"shape",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"circle"'}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwindui.github.io/src/components/avatar/Avatar.vue"]};const N=c({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(e){const a=e;return(s,r)=>(d(),i(o(X),j(P(a)),{default:m(()=>[f(s.$slots,"default")]),_:3},16))}});N.__docgenInfo={exportName:"default",displayName:"AvatarFallback",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwindui.github.io/src/components/avatar/AvatarFallback.vue"]};const L=c({__name:"AvatarImage",props:{src:{},referrerPolicy:{},crossOrigin:{},asChild:{type:Boolean},as:{}},setup(e){const a=e;return(s,r)=>(d(),i(o(aa),V(a,{class:"h-full w-full object-cover"}),null,16))}});L.__docgenInfo={exportName:"default",displayName:"AvatarImage",description:"",tags:{},sourceFiles:["/Users/lord/Documents/asd/gwindui.github.io/src/components/avatar/AvatarImage.vue"]};const ea=H("inline-flex items-center justify-center text-black-50 select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-sm"}}}),ua={title:"Components/Avatar",component:b,tags:["autodocs"],argTypes:{size:{control:"select",options:["base","sm","lg"]},shape:{control:"select",options:["circle","square"]},src:{control:"text",description:"URL of the image to display in the avatar"}}},_={args:{size:"sm",shape:"circle",src:"https://github.com/unovue.png"},render:e=>({components:{Avatar:b,AvatarFallback:N,AvatarImage:L},setup(){return{args:e}},template:`
        <Avatar v-bind="args">
            <AvatarImage :src="args.src" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        `}),parameters:{docs:{source:{code:`
<template>
    <Avatar>
        <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
</template>
        `.trim()}}}};var I,w,x;_.parameters={..._.parameters,docs:{...(I=_.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: "sm",
    shape: "circle",
    src: "https://github.com/unovue.png"
  },
  render: (args: string) => ({
    components: {
      Avatar,
      AvatarFallback,
      AvatarImage
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Avatar v-bind="args">
            <AvatarImage :src="args.src" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <Avatar>
        <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
</template>
        \`.trim()
      }
    }
  }
}`,...(x=(w=_.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const ca=["Default"];export{_ as Default,ca as __namedExportsOrder,ua as default};

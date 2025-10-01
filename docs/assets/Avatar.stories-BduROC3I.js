import{d as u,r as m,b as i,o as d,j as v,g as f,f as o,s as x,e as $,c as R,k as T,l as E,x as B,w as M,a1 as j,aa as D,O as q,y as U,z as P,m as O}from"./vue.esm-bundler-DAoQZYEK.js";import{a as V}from"./utils-oDltpQaF.js";import{c as W}from"./index-BpnQ1vdY.js";import{c as G}from"./createContext-Ddb9PwdX.js";import{b as _,i as S}from"./useForwardExpose-D9aka3cn.js";import{P as b}from"./Primitive-Dw578XAm.js";const[L,H]=G("AvatarRoot"),J=u({__name:"AvatarRoot",props:{asChild:{type:Boolean},as:{default:"span"}},setup(e){return _(),H({imageLoadingStatus:m("idle")}),(a,t)=>(d(),i(o(b),{"as-child":a.asChild,as:a.as},{default:v(()=>[f(a.$slots,"default")]),_:3},8,["as-child","as"]))}}),K=u({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{default:"span"}},setup(e){const a=e,t=L();_();const r=m(a.delayMs===void 0);return x(n=>{if(a.delayMs&&S){const l=window.setTimeout(()=>{r.value=!0},a.delayMs);n(()=>{window.clearTimeout(l)})}}),(n,l)=>r.value&&o(t).imageLoadingStatus.value!=="loaded"?(d(),i(o(b),{key:0,"as-child":n.asChild,as:n.as},{default:v(()=>[f(n.$slots,"default")]),_:3},8,["as-child","as"])):$("",!0)}});function k(e,a){return e?a?(e.src!==a&&(e.src=a),e.complete&&e.naturalWidth>0?"loaded":"loading"):"error":"idle"}function Q(e,{referrerPolicy:a,crossOrigin:t}={}){const r=m(!1),n=m(null),l=R(()=>r.value?(!n.value&&S&&(n.value=new window.Image),n.value):null),p=m(k(l.value,e.value)),g=c=>()=>{r.value&&(p.value=c)};return T(()=>{r.value=!0,x(c=>{const s=l.value;if(!s)return;p.value=k(s,e.value);const A=g("loaded"),C=g("error");s.addEventListener("load",A),s.addEventListener("error",C),a!=null&&a.value&&(s.referrerPolicy=a.value),typeof(t==null?void 0:t.value)=="string"&&(s.crossOrigin=t.value),c(()=>{s.removeEventListener("load",A),s.removeEventListener("error",C)})})}),E(()=>{r.value=!1}),p}const X=u({__name:"AvatarImage",props:{src:{},referrerPolicy:{},crossOrigin:{},asChild:{type:Boolean},as:{default:"img"}},emits:["loadingStatusChange"],setup(e,{emit:a}){const t=e,r=a,{src:n,referrerPolicy:l,crossOrigin:p}=B(t);_();const g=L(),c=Q(n,{referrerPolicy:l,crossOrigin:p});return M(c,s=>{r("loadingStatusChange",s),s!=="idle"&&(g.imageLoadingStatus.value=s)},{immediate:!0}),(s,A)=>j((d(),i(o(b),{role:"img","as-child":s.asChild,as:s.as,src:o(n),"referrer-policy":o(l)},{default:v(()=>[f(s.$slots,"default")]),_:3},8,["as-child","as","src","referrer-policy"])),[[D,o(c)==="loaded"]])}}),y=u({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(e){const a=e;return(t,r)=>(d(),i(o(J),{class:q(o(V)(o(Y)({size:t.size,shape:t.shape}),a.class))},{default:v(()=>[f(t.$slots,"default")]),_:3},8,["class"]))}});y.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"sm"'}},{name:"shape",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"circle"'}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/avatar/Avatar.vue"]};const z=u({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{type:[String,Object,Function]}},setup(e){const a=e;return(t,r)=>(d(),i(o(K),U(P(a)),{default:v(()=>[f(t.$slots,"default")]),_:3},16))}});z.__docgenInfo={exportName:"default",displayName:"AvatarFallback",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/avatar/AvatarFallback.vue"]};const N=u({__name:"AvatarImage",props:{src:{},referrerPolicy:{},crossOrigin:{},asChild:{type:Boolean},as:{type:[String,Object,Function]}},setup(e){const a=e;return(t,r)=>(d(),i(o(X),O(a,{class:"h-full w-full object-cover"}),null,16))}});N.__docgenInfo={exportName:"default",displayName:"AvatarImage",description:"",tags:{},sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/avatar/AvatarImage.vue"]};const Y=W("inline-flex items-center justify-center text-black-50 select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-sm"}}}),na={title:"Components/Avatar",component:y,tags:["autodocs"],argTypes:{size:{control:"select",options:["base","sm","lg"]},shape:{control:"select",options:["circle","square"]},src:{control:"text",description:"URL of the image to display in the avatar"}}},h={args:{size:"sm",shape:"circle",src:"https://github.com/unovue.png"},render:e=>({components:{Avatar:y,AvatarFallback:z,AvatarImage:N},setup(){return{args:e}},template:`
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
        `.trim()}}}};var w,F,I;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(F=h.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const oa=["Default"];export{h as Default,oa as __namedExportsOrder,na as default};

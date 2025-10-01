import{d as p,J as u,M as B,g as m,n as F,f as s,O as g,o as f,c as E}from"./vue.esm-bundler-DAoQZYEK.js";import{a as v}from"./utils-oDltpQaF.js";import{c as U}from"./index-BpnQ1vdY.js";import{G as O}from"./GIcon-BnVbbYcM.js";import{G as W}from"./g-icon-cross-C_9ug1ue.js";const z={className:"absolute top-4 right-4 text-black-50 hover:text-black-60 focus:outline-hidden","aria-label":"Close"},d=p({__name:"Alert",props:{class:{},variant:{}},setup(e){const a=e;return(r,t)=>(f(),u("div",{class:g(s(v)(s(H)({variant:r.variant}),a.class)),role:"alert"},[B("button",z,[F(s(O),{icon:s(W),weight:"outline",class:"w-[18px] text-black-80 hover:cursor-pointer text-black-600"},null,8,["icon"])]),m(r.$slots,"default")],2))}});d.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"variant",required:!1,type:{name:"Exclude",elements:[{name:"TSIndexedAccessType"},{name:'"default"'}]}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert/Alert.vue"]};const q=p({__name:"AlertDescription",props:{class:{}},setup(e){const a=E(()=>({"text-sigma font-regular [&_p]:leading-relaxed":!0})),r=e;return(t,V)=>(f(),u("div",{class:g(s(v)(a.value,r.class))},[m(t.$slots,"default")],2))}});q.__docgenInfo={exportName:"default",displayName:"AlertDescription",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert/AlertDescription.vue"]};const G=p({__name:"AlertTitle",props:{class:{}},setup(e){const a=E(()=>({"mb-1 text-omicron font-bold leading-none tracking-tight":!0})),r=e;return(t,V)=>(f(),u("h5",{class:g(s(v)(a.value,r.class))},[m(t.$slots,"default")],2))}});G.__docgenInfo={exportName:"default",displayName:"AlertTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert/AlertTitle.vue"]};const H=U("relative text-black-800 w-full rounded-lg border p-4 [&>svg~*]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"border-lime-500 bg-lime-500 text-white",error:"border-red-500 bg-red-100",success:"border-lime-500 bg-lime-100",warning:"border-orange-500 bg-orange-100",info:"border-blue-500 bg-blue-100"}},defaultVariants:{variant:"default"}}),L={title:"Components/Alert",component:d,tags:["autodocs"],argTypes:{class:{control:"text"},variant:{control:"select",options:["default","error","success","warning","info"]}},args:{variant:"default",default:`
             <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        `},render:e=>({components:{Alert:d,AlertDescription:q,AlertTitle:G},setup(){return{args:e}},template:`
        <Alert v-bind="args">
           ${e.default}
        </Alert>
      `})},o={args:{variant:"default"}},n={args:{variant:"error"}},c={args:{variant:"success"}},l={args:{variant:"warning"}},i={args:{variant:"info"}};var _,b,A;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(A=(b=o.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var x,T,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "error"
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var h,D,S;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var w,I,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var k,$,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "info"
  }
}`,...(C=($=i.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const P=["Default","Error","Success","Warning","Info"];export{o as Default,n as Error,i as Info,c as Success,l as Warning,P as __namedExportsOrder,L as default};

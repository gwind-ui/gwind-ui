import{d as u,I as p,L as B,g as m,n as F,f as r,N as g,o as f,c as E}from"./vue.esm-bundler-CDO2oHXK.js";import{a as v}from"./utils-N9jxOpu3.js";import{c as U}from"./index-DZcI7uxW.js";import{G as W}from"./GIcon-BIWwU8Ge.js";import{G as z}from"./g-icon-cross-C_9ug1ue.js";const H={className:"absolute top-4 right-4 text-black-50 hover:text-black-60 focus:outline-hidden","aria-label":"Close"},d=u({__name:"Alert",props:{class:{},variant:{}},setup(e){const s=e;return(a,t)=>(f(),p("div",{class:g(r(v)(r(L)({variant:e.variant}),s.class)),role:"alert"},[B("button",H,[F(r(W),{icon:r(z),weight:"outline",class:"w-[18px] text-black-80 hover:cursor-pointer text-black-600"},null,8,["icon"])]),m(a.$slots,"default")],2))}});d.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"variant",required:!1,type:{name:"Exclude",elements:[{name:"TSIndexedAccessType"},{name:'"default"'}]}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert/Alert.vue"]};const q=u({__name:"AlertDescription",props:{class:{}},setup(e){const s=E(()=>({"text-sigma font-regular [&_p]:leading-relaxed":!0})),a=e;return(t,V)=>(f(),p("div",{class:g(r(v)(s.value,a.class))},[m(t.$slots,"default")],2))}});q.__docgenInfo={exportName:"default",displayName:"AlertDescription",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert/AlertDescription.vue"]};const G=u({__name:"AlertTitle",props:{class:{}},setup(e){const s=E(()=>({"mb-1 text-omicron font-bold leading-none tracking-tight":!0})),a=e;return(t,V)=>(f(),p("h5",{class:g(r(v)(s.value,a.class))},[m(t.$slots,"default")],2))}});G.__docgenInfo={exportName:"default",displayName:"AlertTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert/AlertTitle.vue"]};const L=U("relative text-black-800 w-full rounded-lg border p-4 [&>svg~*]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"border-lime-500 bg-lime-500 text-white",error:"border-red-500 bg-red-100",success:"border-lime-500 bg-lime-100",warning:"border-orange-500 bg-orange-100",info:"border-blue-500 bg-blue-100"}},defaultVariants:{variant:"default"}}),M={title:"Components/Alert",component:d,tags:["autodocs"],argTypes:{class:{control:"text"},variant:{control:"select",options:["default","error","success","warning","info"]}},args:{variant:"default",default:`
             <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        `},render:e=>({components:{Alert:d,AlertDescription:q,AlertTitle:G},setup(){return{args:e}},template:`
        <Alert v-bind="args">
           ${e.default}
        </Alert>
      `})},o={args:{variant:"default"}},n={args:{variant:"error"}},c={args:{variant:"success"}},l={args:{variant:"warning"}},i={args:{variant:"info"}};var b,A,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(_=(A=o.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var x,T,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "error"
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var h,D,I;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var S,w,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...(N=(w=l.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var k,$,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "info"
  }
}`,...(C=($=i.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const P=["Default","Error","Success","Warning","Info"];export{o as Default,n as Error,i as Info,c as Success,l as Warning,P as __namedExportsOrder,M as default};

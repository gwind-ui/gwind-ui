import{G as d}from"./GIcon-BIWwU8Ge.js";import{d as g,b as u,j as f,m as T,f as t,o as _,L as b,g as y}from"./vue.esm-bundler-CDO2oHXK.js";import{u as G}from"./useForwardPropsEmits-CrpZhFqP.js";import{T as h}from"./Toggle-BwkPMxNX.js";import{a as x}from"./utils-N9jxOpu3.js";import{G as n}from"./g-icon-delete-DAnkgtcP.js";import"./useFormControl-BLoef7eD.js";import"./useForwardExpose-BfXw-hnz.js";import"./Primitive-BG2Gt-GN.js";import"./VisuallyHiddenInput-DQJWHtI9.js";import"./usePrimitiveElement-DwTCBgzO.js";import"./VisuallyHidden-DXQQzpu6.js";import"./createContext-B-1E407x.js";import"./useDirection-Cqhzq67l.js";import"./ConfigProvider-DurQEXP4.js";import"./useSingleOrMultipleValue-DuO2FDXs.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./RovingFocusGroup-DWZ1mrh5.js";import"./Collection-Og8eIrJl.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";const B={class:"h-6 w-6"},r=g({__name:"Toggle",props:{defaultValue:{type:Boolean},modelValue:{type:[Boolean,null]},disabled:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue"],setup(e,{emit:s}){const a=e,p=G(a,s);return(c,V)=>(_(),u(t(h),T(t(p),{class:t(x)("hover:cursor-pointer text-black-600 flex py-2 px-2 items-center justify-center rounded bg-white border border-black-200","hover:bg-lime-100","data-[state=on]:bg-lime-100 data-[state=on]:border-lime-500 data-[state=on]:text-lime-500",a.class)}),{default:f(()=>[b("div",B,[y(c.$slots,"default")])]),_:3},16,["class"]))}});r.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/toggle/Toggle.vue"]};const R={title:"Components/Toggle/Single",component:r,tags:["autodocs"],argTypes:{},args:{modelValue:!1,default:`
       <GIcon :icon="icon"></GIcon>
        `}},o={render:e=>({components:{Toggle:r,GIcon:d,GIconDelete:n},setup(){return{args:e,icon:n}},template:`
    <Toggle v-model="args.modelValue" >
       ${e.default}
    </Toggle>
    `})};var l,m,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: {
    default: string;
  }) => ({
    components: {
      Toggle,
      GIcon,
      GIconDelete
    },
    setup() {
      const icon = GIconDelete;
      return {
        args,
        icon
      };
    },
    template: \`
    <Toggle v-model="args.modelValue" >
       \${args.default}
    </Toggle>
    \`
  })
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,R as default};

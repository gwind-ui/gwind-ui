import{G as d}from"./GIcon-BnVbbYcM.js";import{d as g,b as u,j as f,m as _,f as t,o as T,M as b,g as y}from"./vue.esm-bundler-DAoQZYEK.js";import{a as G}from"./utils-oDltpQaF.js";import{u as h}from"./useForwardPropsEmits-CKR2vMz0.js";import{_ as x}from"./Toggle-BzgEImqy.js";import{G as a}from"./g-icon-delete-DAnkgtcP.js";import"./useForwardExpose-D9aka3cn.js";import"./VisuallyHiddenInput-Bg8Cl6IS.js";import"./VisuallyHidden-B5XNmWwn.js";import"./Primitive-Dw578XAm.js";import"./usePrimitiveElement-BMNSglW7.js";import"./useSingleOrMultipleValue-YovYZ833.js";import"./isValueEqualOrExist-B5JO9E3o.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-DHF4M4F_.js";import"./createContext-Ddb9PwdX.js";import"./useDirection-CPl_s7F5.js";import"./ConfigProvider-DRoX-YQM.js";import"./useFormControl-D_hDJxiF.js";import"./RovingFocusGroup-DymR8pYx.js";import"./Collection-DofB2lS5.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";const B={class:"h-6 w-6"},r=g({__name:"Toggle",props:{defaultValue:{type:Boolean},modelValue:{type:[Boolean,null]},disabled:{type:Boolean},asChild:{type:Boolean},as:{type:[String,Object,Function]},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue"],setup(e,{emit:n}){const s=e,p=h(s,n);return(c,v)=>(T(),u(t(x),_(t(p),{class:t(G)("hover:cursor-pointer text-black-600 flex py-2 px-2 items-center justify-center rounded bg-white border border-black-200","hover:bg-lime-100","data-[state=on]:bg-lime-100 data-[state=on]:border-lime-500 data-[state=on]:text-lime-500",s.class)}),{default:f(()=>[b("div",B,[y(c.$slots,"default")])]),_:3},16,["class"]))}});r.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/toggle/Toggle.vue"]};const R={title:"Components/Toggle/Single",component:r,tags:["autodocs"],argTypes:{},args:{modelValue:!1,default:`
       <GIcon :icon="icon"></GIcon>
        `}},o={render:e=>({components:{Toggle:r,GIcon:d,GIconDelete:a},setup(){return{args:e,icon:a}},template:`
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

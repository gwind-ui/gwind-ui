import{d as m,b as u,j as d,m as c,f as o,o as f,g as h,L as y}from"./vue.esm-bundler-CDO2oHXK.js";import{u as g}from"./useForwardPropsEmits-CrpZhFqP.js";import{a as I}from"./Toggle-BwkPMxNX.js";import{a as C}from"./utils-N9jxOpu3.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as w}from"./ToggleGroupItem-mR2Iahnq.js";import"./useFormControl-BLoef7eD.js";import"./useForwardExpose-BfXw-hnz.js";import"./Primitive-BG2Gt-GN.js";import"./VisuallyHiddenInput-DQJWHtI9.js";import"./usePrimitiveElement-DwTCBgzO.js";import"./VisuallyHidden-DXQQzpu6.js";import"./createContext-B-1E407x.js";import"./useDirection-Cqhzq67l.js";import"./ConfigProvider-DurQEXP4.js";import"./useSingleOrMultipleValue-DuO2FDXs.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./RovingFocusGroup-DWZ1mrh5.js";import"./Collection-Og8eIrJl.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusItem-BRCYSeVJ.js";import"./useId-CodeILRg.js";const _=m({__name:"ChipsGroup",props:{rovingFocus:{type:Boolean},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},type:{},modelValue:{},defaultValue:{},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const p=g(e,t);return(v,V)=>(f(),u(o(I),c(o(p),{class:o(C)("flex gap-4 w-full overflow-x-scroll no-scrollbar")}),{default:d(()=>[h(v.$slots,"default",{},void 0,!0)]),_:3},16,["class"]))}}),b=x(_,[["__scopeId","data-v-b87801d6"]]);_.__docgenInfo={exportName:"default",displayName:"ChipsGroup",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwindui.github.io/src/components/chips/ChipsGroup.vue"]};const B={class:"h-6 w-fit min-w-[120px]"},G=m({__name:"ChipsGroupItem",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(e){const t=e,r=g(t);return(a,p)=>(f(),u(o(w),c(o(r),{class:o(C)("hover:cursor-pointer rounded-sm text-black-600 flex px-3 py-1 items-center justify-center border border-black-200 bg-white text-base focus:z-10","hover:bg-lime-100","data-[state=on]:bg-lime-100 data-[state=on]:border-lime-500 data-[state=on]:text-lime-500",t.class)}),{default:d(()=>[y("div",B,[h(a.$slots,"default")])]),_:3},16,["class"]))}});G.__docgenInfo={exportName:"default",displayName:"ChipsGroupItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwindui.github.io/src/components/chips/ChipsGroupItem.vue"]};const Z={title:"Components/Chips",component:b,tags:["autodocs"],argTypes:{type:{control:"options",options:["single","multiple"]},disabled:{control:"boolean"},name:{control:"text"},orientation:{control:"options",options:["horizontal","vertical"]},required:{control:"boolean"},modelValue:{control:"object"},defaultValue:{control:"object"}},args:{type:"single",orientation:"horizontal",modelValue:{},disabled:!1,name:"Example",required:!1,default:`
            <ChipsGroupItem value="gadai"> Gadai </ChipsGroupItem>
            <ChipsGroupItem value="cicilan"> Cicilan </ChipsGroupItem>
            <ChipsGroupItem value="pembiayaan"> Pembiayaan </ChipsGroupItem>
            <ChipsGroupItem value="transaksi"> Transaksi </ChipsGroupItem>
        `}},s={render:e=>({components:{ChipsGroup:b,ChipsGroupItem:G},setup(){return{args:e}},template:`<ChipsGroup v-model="args.modelValue" v-bind="args">
            ${e.default}
        </ChipsGroup>`})};var i,n,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: {
    default: string;
  }) => ({
    components: {
      ChipsGroup,
      ChipsGroupItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ChipsGroup v-model="args.modelValue" v-bind="args">
            \${args.default}
        </ChipsGroup>\`
  })
}`,...(l=(n=s.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const ee=["Default"];export{s as Default,ee as __namedExportsOrder,Z as default};

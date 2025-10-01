import{d as m,b as u,j as c,m as d,f as o,o as f,g as h,M as y}from"./vue.esm-bundler-DAoQZYEK.js";import{a as _}from"./utils-oDltpQaF.js";import{u as C}from"./useForwardPropsEmits-CKR2vMz0.js";import{a as x}from"./Toggle-BzgEImqy.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as w}from"./ToggleGroupItem-HPfbell7.js";import"./useForwardExpose-D9aka3cn.js";import"./VisuallyHiddenInput-Bg8Cl6IS.js";import"./VisuallyHidden-B5XNmWwn.js";import"./Primitive-Dw578XAm.js";import"./usePrimitiveElement-BMNSglW7.js";import"./useSingleOrMultipleValue-YovYZ833.js";import"./isValueEqualOrExist-B5JO9E3o.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-DHF4M4F_.js";import"./createContext-Ddb9PwdX.js";import"./useDirection-CPl_s7F5.js";import"./ConfigProvider-DRoX-YQM.js";import"./useFormControl-D_hDJxiF.js";import"./RovingFocusGroup-DymR8pYx.js";import"./Collection-DofB2lS5.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusItem-qd48XbOO.js";import"./useId-BGYOYX4b.js";const g=m({__name:"ChipsGroup",props:{rovingFocus:{type:Boolean},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{type:[String,Object,Function]},name:{},required:{type:Boolean},type:{},modelValue:{},defaultValue:{},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const p=C(e,t);return(v,V)=>(f(),u(o(x),d(o(p),{class:o(_)("flex gap-4 w-full overflow-x-scroll no-scrollbar")}),{default:c(()=>[h(v.$slots,"default",{},void 0,!0)]),_:3},16,["class"]))}}),b=I(g,[["__scopeId","data-v-b87801d6"]]);g.__docgenInfo={exportName:"default",displayName:"ChipsGroup",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/chips/ChipsGroup.vue"]};const B={class:"h-6 w-fit min-w-[120px]"},G=m({__name:"ChipsGroupItem",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{type:[String,Object,Function]},class:{}},setup(e){const t=e,r=C(t);return(a,p)=>(f(),u(o(w),d(o(r),{class:o(_)("hover:cursor-pointer rounded-sm text-black-600 flex px-3 py-1 items-center justify-center border border-black-200 bg-white text-base focus:z-10","hover:bg-lime-100","data-[state=on]:bg-lime-100 data-[state=on]:border-lime-500 data-[state=on]:text-lime-500",t.class)}),{default:c(()=>[y("div",B,[h(a.$slots,"default")])]),_:3},16,["class"]))}});G.__docgenInfo={exportName:"default",displayName:"ChipsGroupItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/chips/ChipsGroupItem.vue"]};const Z={title:"Components/Chips",component:b,tags:["autodocs"],argTypes:{type:{control:"options",options:["single","multiple"]},disabled:{control:"boolean"},name:{control:"text"},orientation:{control:"options",options:["horizontal","vertical"]},required:{control:"boolean"},modelValue:{control:"object"},defaultValue:{control:"object"}},args:{type:"single",orientation:"horizontal",modelValue:{},disabled:!1,name:"Example",required:!1,default:`
            <ChipsGroupItem value="gadai"> Gadai </ChipsGroupItem>
            <ChipsGroupItem value="cicilan"> Cicilan </ChipsGroupItem>
            <ChipsGroupItem value="pembiayaan"> Pembiayaan </ChipsGroupItem>
            <ChipsGroupItem value="transaksi"> Transaksi </ChipsGroupItem>
        `}},s={render:e=>({components:{ChipsGroup:b,ChipsGroupItem:G},setup(){return{args:e}},template:`<ChipsGroup v-model="args.modelValue" v-bind="args">
            ${e.default}
        </ChipsGroup>`})};var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const ee=["Default"];export{s as Default,ee as __namedExportsOrder,Z as default};

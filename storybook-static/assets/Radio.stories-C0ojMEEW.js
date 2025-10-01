import{_ as e}from"./RadioGroup-dTAvfwK2.js";import{_ as n}from"./Radio-VcNN4Okb.js";import"./vue.esm-bundler-CDO2oHXK.js";import"./useForwardPropsEmits-CrpZhFqP.js";import"./utils-N9jxOpu3.js";import"./createContext-B-1E407x.js";import"./useForwardExpose-BfXw-hnz.js";import"./RovingFocusItem-BRCYSeVJ.js";import"./useId-CodeILRg.js";import"./Primitive-BG2Gt-GN.js";import"./Collection-Og8eIrJl.js";import"./usePrimitiveElement-DwTCBgzO.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusGroup-DWZ1mrh5.js";import"./useDirection-Cqhzq67l.js";import"./ConfigProvider-DurQEXP4.js";import"./useFormControl-BLoef7eD.js";import"./VisuallyHiddenInput-DQJWHtI9.js";import"./VisuallyHidden-DXQQzpu6.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./Presence-D9vIVm08.js";const E={title:"Components/Radio/Default",component:e,tags:["autodocs"],argTypes:{},args:{disabled:!1,default:`
            <div v-for="(item, i) in RadioValue" :key="i">
            <Radio :id="'r' + (i+1)"  :value="item"/>
            {{ item }}
        </div>
        `}},o={render:r=>({components:{RadioGroup:e,Radio:n},setup(){return{args:r,RadioValue:["Pisang","Mangga","Apel"]}},template:`
      <RadioGroup v-bind="args">
        ${r.default}
      </RadioGroup>
    `})};var a,t,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: {
    default: string;
  }) => ({
    components: {
      RadioGroup,
      Radio
    },
    setup() {
      const RadioValue = ["Pisang", "Mangga", "Apel"];
      return {
        args,
        RadioValue
      };
    },
    template: \`
      <RadioGroup v-bind="args">
        \${args.default}
      </RadioGroup>
    \`
  })
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,E as default};

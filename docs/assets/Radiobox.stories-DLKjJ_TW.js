import{_ as r}from"./RadioGroup--WjX6BWR.js";import{_ as p}from"./RadioBox-EyaEUmtw.js";import"./vue.esm-bundler-CDO2oHXK.js";import"./useForwardPropsEmits-CrpZhFqP.js";import"./Radio-CR6wicOp.js";import"./createContext-B-1E407x.js";import"./useForwardExpose-BfXw-hnz.js";import"./RovingFocusItem-BRCYSeVJ.js";import"./useId-CodeILRg.js";import"./Primitive-BG2Gt-GN.js";import"./Collection-Og8eIrJl.js";import"./usePrimitiveElement-DwTCBgzO.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusGroup-DWZ1mrh5.js";import"./useDirection-Cqhzq67l.js";import"./ConfigProvider-DurQEXP4.js";import"./useFormControl-BLoef7eD.js";import"./VisuallyHiddenInput-DQJWHtI9.js";import"./VisuallyHidden-DXQQzpu6.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./Presence-D9vIVm08.js";import"./utils-N9jxOpu3.js";const E={title:"Components/Radio/RadioBox",component:r,tags:["autodocs"],argTypes:{},args:{default:`
            <RadioBox id="r3" :value="RadioValue[0]" :label="RadioValue[0]">
                <template #iconItem> 🍌 </template>
                <template #textItem>{{ RadioValue[0] }}</template>
            </RadioBox>
            <RadioBox id="r4" :value="RadioValue[1]" :label="RadioValue[1]">
                <template #iconItem> 🥭 </template>
                <template #textItem>{{ RadioValue[1] }}</template>
            </RadioBox>
            <RadioBox :label="RadioValue[2]" id="r5" :value="RadioValue[2]">
                <template #iconItem> 🍎 </template>
                <template #textItem>
                    {{ RadioValue[2] }}
                </template>
            </RadioBox>
        `,disabled:!1}},a={render:o=>({components:{RadioGroup:r,RadioBox:p},setup(){return{args:o,RadioValue:["Pisang","Mangga","Apel"]}},template:`
      <RadioGroup v-bind="args" class="flex flex-col gap-2">
        ${o.default}
      </RadioGroup>
    `})};var e,t,i;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: {
    default: string;
  }) => ({
    components: {
      RadioGroup,
      RadioBox
    },
    setup() {
      const RadioValue = ["Pisang", "Mangga", "Apel"];
      return {
        args,
        RadioValue
      };
    },
    template: \`
      <RadioGroup v-bind="args" class="flex flex-col gap-2">
        \${args.default}
      </RadioGroup>
    \`
  })
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const O=["Default"];export{a as Default,O as __namedExportsOrder,E as default};

import{_ as r}from"./RadioGroup-1Rkjn1U_.js";import{_ as p}from"./RadioBox-ChmrHs7e.js";import"./vue.esm-bundler-DAoQZYEK.js";import"./utils-oDltpQaF.js";import"./useForwardPropsEmits-CKR2vMz0.js";import"./Radio-CvXgY24P.js";import"./useForwardExpose-D9aka3cn.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./useFormControl-D_hDJxiF.js";import"./Primitive-Dw578XAm.js";import"./VisuallyHiddenInput-Bg8Cl6IS.js";import"./VisuallyHidden-B5XNmWwn.js";import"./usePrimitiveElement-BMNSglW7.js";import"./createContext-Ddb9PwdX.js";import"./useDirection-CPl_s7F5.js";import"./ConfigProvider-DRoX-YQM.js";import"./RovingFocusGroup-DymR8pYx.js";import"./Collection-DofB2lS5.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusItem-qd48XbOO.js";import"./useId-BGYOYX4b.js";import"./ohash.D__AXeF1-DHF4M4F_.js";import"./Presence-Dx3HIjvu.js";const E={title:"Components/Radio/RadioBox",component:r,tags:["autodocs"],argTypes:{},args:{default:`
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

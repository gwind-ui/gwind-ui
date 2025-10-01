import{_ as e}from"./RadioGroup-1Rkjn1U_.js";import{_ as n}from"./Radio-CvXgY24P.js";import"./vue.esm-bundler-DAoQZYEK.js";import"./utils-oDltpQaF.js";import"./useForwardPropsEmits-CKR2vMz0.js";import"./useForwardExpose-D9aka3cn.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./useFormControl-D_hDJxiF.js";import"./Primitive-Dw578XAm.js";import"./VisuallyHiddenInput-Bg8Cl6IS.js";import"./VisuallyHidden-B5XNmWwn.js";import"./usePrimitiveElement-BMNSglW7.js";import"./createContext-Ddb9PwdX.js";import"./useDirection-CPl_s7F5.js";import"./ConfigProvider-DRoX-YQM.js";import"./RovingFocusGroup-DymR8pYx.js";import"./Collection-DofB2lS5.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusItem-qd48XbOO.js";import"./useId-BGYOYX4b.js";import"./ohash.D__AXeF1-DHF4M4F_.js";import"./Presence-Dx3HIjvu.js";const E={title:"Components/Radio/Default",component:e,tags:["autodocs"],argTypes:{},args:{disabled:!1,default:`
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

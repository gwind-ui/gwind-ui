import{r as e}from"./vue.esm-bundler-DAoQZYEK.js";import{_ as a}from"./RangePicker-B96DCGbM.js";import"./Datepicker-DQuFU-Yu.js";import"./Drawer-DfBqbaQt.js";import"./createLucideIcon-DlNl0z72.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./utils-oDltpQaF.js";import"./GIcon-BnVbbYcM.js";import"./g-icon-cross-C_9ug1ue.js";import"./Label-CnOFvGpi.js";import"./Label-LBNU-JMy.js";import"./useForwardExpose-D9aka3cn.js";import"./Primitive-Dw578XAm.js";const v={title:"Components/DatePicker/DateRangePicker",component:a,tags:["autodocs"],argTypes:{startPlaceholder:{control:"text"},endPlaceholder:{control:"text"},startlabel:{control:"text"},endlabel:{control:"text"},sparator:{control:"text"},start:{control:"text"},end:{control:"text"},max:{control:"text"},min:{control:"text"},calendarPosition:{control:"select",options:["left","center","right"]},calendarPositionY:{control:"select",options:["top","bottom","auto"]},disabled:{control:"boolean"}},args:{startPlaceholder:"Pilih tanggal",endPlaceholder:"Pilih tanggal",startlabel:"Tanggal Mulai",endlabel:"Tanggal Selesai",start:"startModel",end:"endModel"}},t={render:s=>({components:{RangePicker:a},setup(){const l=e(""),c=e("");return{args:s,startDate:l,endDate:c}},template:`
      <RangePicker 
        v-bind="args" 
        v-model:start="startDate"
        v-model:end="endDate"
      />
    `})};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: string) => ({
    components: {
      RangePicker
    },
    setup() {
      const startDate = ref("");
      const endDate = ref("");
      return {
        args,
        startDate,
        endDate
      };
    },
    template: \`
      <RangePicker 
        v-bind="args" 
        v-model:start="startDate"
        v-model:end="endDate"
      />
    \`
  })
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,v as default};

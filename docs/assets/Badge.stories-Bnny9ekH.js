import{G as E}from"./GIcon-BIWwU8Ge.js";import{b as R,_ as g}from"./index-tLv2uxy-.js";import{G as i}from"./g-icon-cross-C_9ug1ue.js";import{r as T}from"./vue.esm-bundler-CDO2oHXK.js";import"./utils-N9jxOpu3.js";import"./index-DZcI7uxW.js";const H={title:"Components/Badge",component:g,tags:["autodocs"],argTypes:{class:{control:"text"},variant:{control:"select",options:["green","brocoli","orange","blue","red","outline"]},modelValue:{control:"boolean",description:"Controls the visibility of the badge"}},args:{variant:"green",modelValue:!0,default:"Badge"},render:e=>({components:{Badge:g,badgeVariants:R},setup(){return{args:e}},template:`
            <Badge v-bind="args" > {{args.default}} </Badge>
      `})},r={args:{variant:"green"}},a={args:{variant:"brocoli"}},n={args:{variant:"orange"}},o={args:{variant:"blue"}},s={args:{variant:"red"}},t={args:{variant:"outline"}},c={args:{rightIcon:`
                <GIcon @click="() => (badgeOpen = !badgeOpen)" class="w-1" :icon="GIconCross" weight="fill" class="ml-3 text-black-500 w-5 cursor"></GIcon>
        `},render:e=>({components:{Badge:g,badgeVariants:R,GIcon:E,GIconCross:i},setup(){const $=T(!0);return{args:e,badgeOpen:$,GIconCross:i}},template:`
            <Badge :model-value="badgeOpen"> {{args.default}} ${e.rightIcon} </Badge>
      `})};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "green"
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "brocoli"
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,I,B;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "orange"
  }
}`,...(B=(I=n.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var f,G,O;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "blue"
  }
}`,...(O=(G=o.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var h,C,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "red"
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,_,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(x=(_=t.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var k,V,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    rightIcon: \`
                <GIcon @click="() => (badgeOpen = !badgeOpen)" class="w-1" :icon="GIconCross" weight="fill" class="ml-3 text-black-500 w-5 cursor"></GIcon>
        \`
  },
  render: (args: {
    rightIcon: string;
  }) => ({
    components: {
      Badge,
      badgeVariants,
      GIcon,
      GIconCross
    },
    setup() {
      const badgeOpen = ref(true);
      return {
        args,
        badgeOpen,
        GIconCross
      };
    },
    template: \`
            <Badge :model-value="badgeOpen"> {{args.default}} \${args.rightIcon} </Badge>
      \`
  })
}`,...(y=(V=c.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};const J=["Green","Brocoli","Orange","Blue","Red","Outline","Icon"];export{o as Blue,a as Brocoli,r as Green,c as Icon,n as Orange,t as Outline,s as Red,J as __namedExportsOrder,H as default};

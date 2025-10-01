import{_ as u}from"./button-BUVIvCLT.js";import"./vue.esm-bundler-DAoQZYEK.js";import"./utils-oDltpQaF.js";import"./index-BpnQ1vdY.js";import"./Primitive-Dw578XAm.js";const Y={title:"Components/Button",component:u,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","destructive","outline","combobox","secondary","ghost","link","neutral","tertiary","icon"]},size:{control:"select",options:["sm","md","lg","xl","fab"]},disabled:{control:"boolean"},class:{control:"text"},asChild:{control:"boolean"}},args:{default:"Button",variant:"primary",size:"md",disabled:!1},render:(d,{slots:J})=>({components:{Button:u},setup(){return{args:d,slots:J}},template:`
      <Button v-bind="args">
        {{args.default}}
      </Button>
    `})},r={args:{variant:"default"}},a={args:{variant:"primary"}},e={args:{variant:"destructive"}},t={args:{variant:"outline"}},s={args:{variant:"combobox"}},o={args:{variant:"secondary"}},n={args:{variant:"ghost"}},i={args:{variant:"link"}},c={args:{variant:"neutral"}},l={args:{variant:"tertiary"}},m={args:{icon:!0,variant:"primary",size:"md",label:"ButtonIcon"},render:d=>({components:{Button:u},setup(){return{args:d}},template:`
      <Button v-bind="args" @click="args.onClick">
           {{args.label}}
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fill-rule='evenodd' clip-rule='evenodd' d='M18.0421 10.6771C18.3546 11.0448 18.7972 11.2747 19.2872 11.2747C19.4131 11.2747 19.5359 11.2595 19.6541 11.2307C19.4718 12.9019 19.0859 15.0111 18.2693 16.4454V16.4453H12.0001H5.73064V16.4453C4.91399 15.011 4.52812 12.902 4.34583 11.2309C4.46407 11.2596 4.58685 11.2748 4.71276 11.2748C5.20282 11.2748 5.64543 11.0449 5.95789 10.6771C6.47266 11.3167 7.22072 11.7199 8.05192 11.7199C9.39751 11.7199 10.5251 10.6633 10.798 9.25751C11.1075 9.59651 11.5321 9.806 12 9.806H12.0001V9.80615C12.4679 9.80608 12.8925 9.59662 13.2019 9.2577C13.4748 10.6634 14.6025 11.7199 15.9481 11.7199C16.7793 11.7199 17.5274 11.3167 18.0421 10.6771Z' fill='#FFC02E'/>
            <mask id='mask0_0_6437' style='mask-variant:alpha' maskUnits='userSpaceOnUse' x='3' y='6' width='18' height='13'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M12 6C11.0556 6 10.2872 6.85373 10.2872 7.90308C10.2872 8.43257 10.4829 8.91222 10.798 9.2575C10.5252 10.6633 9.39752 11.7199 8.05193 11.7199C7.22073 11.7199 6.47267 11.3167 5.9579 10.6771C6.24759 10.3361 6.4254 9.87657 6.4254 9.37173C6.4254 8.32239 5.65718 7.46866 4.71277 7.46866C3.76836 7.46866 3 8.32239 3 9.37173C3 10.2812 3.57714 11.0437 4.34583 11.2308C4.52813 12.902 4.914 15.011 5.73065 16.4453V18.2017C5.73065 18.527 5.96796 18.7907 6.26074 18.7907H12.0001H17.7393C18.032 18.7907 18.2693 18.527 18.2693 18.2017V16.4454C19.086 15.0111 19.4718 12.9019 19.6541 11.2307C20.4228 11.0436 21 10.2811 21 9.37173C21 8.32239 20.2316 7.46866 19.2872 7.46866C18.3428 7.46866 17.5746 8.32239 17.5746 9.37173C17.5746 9.87652 17.7524 10.3361 18.0421 10.6771C17.5274 11.3167 16.7793 11.7199 15.9481 11.7199C14.6025 11.7199 13.4748 10.6634 13.2019 9.25769C13.4383 8.9987 13.6075 8.66411 13.6773 8.28957C13.7005 8.16474 13.7128 8.03546 13.7128 7.90308C13.7128 7.60772 13.6519 7.32787 13.5434 7.07818C13.2663 6.44082 12.6787 6.00006 12.0001 6H12Z' fill='white'/>
            </mask>
            <g mask='url(#mask0_0_6437)'>
              <rect width='24' height='24' fill='currentColor'/>
            </g>
          </svg>
      </Button>
    `})};var p,C,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(g=(C=r.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var v,h,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,y,b;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,B,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(x=(B=t.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var S,_,H;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "combobox"
  }
}`,...(H=(_=s.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var V,O,z;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(z=(O=o.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var D,F,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(I=(F=n.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var M,U,Z;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "link"
  }
}`,...(Z=(U=i.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var E,T,G;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "neutral"
  }
}`,...(G=(T=c.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var L,N,P;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  }
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var j,q,A;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: true,
    variant: "primary",
    size: "md",
    label: "ButtonIcon"
  },
  render: (args: string) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args" @click="args.onClick">
           {{args.label}}
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fill-rule='evenodd' clip-rule='evenodd' d='M18.0421 10.6771C18.3546 11.0448 18.7972 11.2747 19.2872 11.2747C19.4131 11.2747 19.5359 11.2595 19.6541 11.2307C19.4718 12.9019 19.0859 15.0111 18.2693 16.4454V16.4453H12.0001H5.73064V16.4453C4.91399 15.011 4.52812 12.902 4.34583 11.2309C4.46407 11.2596 4.58685 11.2748 4.71276 11.2748C5.20282 11.2748 5.64543 11.0449 5.95789 10.6771C6.47266 11.3167 7.22072 11.7199 8.05192 11.7199C9.39751 11.7199 10.5251 10.6633 10.798 9.25751C11.1075 9.59651 11.5321 9.806 12 9.806H12.0001V9.80615C12.4679 9.80608 12.8925 9.59662 13.2019 9.2577C13.4748 10.6634 14.6025 11.7199 15.9481 11.7199C16.7793 11.7199 17.5274 11.3167 18.0421 10.6771Z' fill='#FFC02E'/>
            <mask id='mask0_0_6437' style='mask-variant:alpha' maskUnits='userSpaceOnUse' x='3' y='6' width='18' height='13'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M12 6C11.0556 6 10.2872 6.85373 10.2872 7.90308C10.2872 8.43257 10.4829 8.91222 10.798 9.2575C10.5252 10.6633 9.39752 11.7199 8.05193 11.7199C7.22073 11.7199 6.47267 11.3167 5.9579 10.6771C6.24759 10.3361 6.4254 9.87657 6.4254 9.37173C6.4254 8.32239 5.65718 7.46866 4.71277 7.46866C3.76836 7.46866 3 8.32239 3 9.37173C3 10.2812 3.57714 11.0437 4.34583 11.2308C4.52813 12.902 4.914 15.011 5.73065 16.4453V18.2017C5.73065 18.527 5.96796 18.7907 6.26074 18.7907H12.0001H17.7393C18.032 18.7907 18.2693 18.527 18.2693 18.2017V16.4454C19.086 15.0111 19.4718 12.9019 19.6541 11.2307C20.4228 11.0436 21 10.2811 21 9.37173C21 8.32239 20.2316 7.46866 19.2872 7.46866C18.3428 7.46866 17.5746 8.32239 17.5746 9.37173C17.5746 9.87652 17.7524 10.3361 18.0421 10.6771C17.5274 11.3167 16.7793 11.7199 15.9481 11.7199C14.6025 11.7199 13.4748 10.6634 13.2019 9.25769C13.4383 8.9987 13.6075 8.66411 13.6773 8.28957C13.7005 8.16474 13.7128 8.03546 13.7128 7.90308C13.7128 7.60772 13.6519 7.32787 13.5434 7.07818C13.2663 6.44082 12.6787 6.00006 12.0001 6H12Z' fill='white'/>
            </mask>
            <g mask='url(#mask0_0_6437)'>
              <rect width='24' height='24' fill='currentColor'/>
            </g>
          </svg>
      </Button>
    \`
  })
}`,...(A=(q=m.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const $=["Default","Primary","Destructive","Outline","Combobox","Secondary","Ghost","Link","Neutral","Tertiary","Icon"];export{s as Combobox,r as Default,e as Destructive,n as Ghost,m as Icon,i as Link,c as Neutral,t as Outline,a as Primary,o as Secondary,l as Tertiary,$ as __namedExportsOrder,Y as default};

import{d,c as h,I as g,o as u,n as _,j as m,g as f,m as v,f as n,G as w,b as A,x as R,y}from"./vue.esm-bundler-CDO2oHXK.js";import{b}from"./useForwardExpose-BfXw-hnz.js";import{P as x}from"./Primitive-BG2Gt-GN.js";var C=d({inheritAttrs:!1,__name:"AspectRatio",props:{ratio:{type:Number,required:!1,default:1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const a=e,{forwardRef:o}=b(),r=h(()=>1/a.ratio*100);return(t,B)=>(u(),g("div",{style:w(`position: relative; width: 100%; padding-bottom: ${r.value}%`),"data-reka-aspect-ratio-wrapper":""},[_(n(x),v({ref:n(o),"as-child":t.asChild,as:t.as,style:{position:"absolute",inset:"0px"}},t.$attrs),{default:m(()=>[f(t.$slots,"default",{aspect:r.value})]),_:3},16,["as-child","as"])],4))}}),q=C;const p=d({__name:"AspectRatio",props:{ratio:{},asChild:{type:Boolean},as:{}},setup(e){const a=e;return(o,r)=>(u(),A(n(q),R(y(a)),{default:m(()=>[f(o.$slots,"default")]),_:3},16))}});p.__docgenInfo={exportName:"default",displayName:"AspectRatio",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/aspect-ratio/AspectRatio.vue"]};const N={title:"Components/AspectRatio",component:p,tags:["autodocs"],argTypes:{ratio:{control:"number",description:"Aspect ratio of the container, e.g., 16/9 for wides"}},args:{ratio:16/9}},s={render:e=>({components:{AspectRatio:p},setup(){return{args:e}},template:`
        <div class="w-full sm:w-[300px] overflow-hidden rounded-lg shadow-sm">
            <AspectRatio :ratio="args.ratio">
            <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
                alt="Landscape photograph by Tobias Tullius"
            >
            </AspectRatio>
        </div>
        `})};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: string) => ({
    components: {
      AspectRatio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <div class="w-full sm:w-[300px] overflow-hidden rounded-lg shadow-sm">
            <AspectRatio :ratio="args.ratio">
            <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
                alt="Landscape photograph by Tobias Tullius"
            >
            </AspectRatio>
        </div>
        \`
  })
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const $=["Default"];export{s as Default,$ as __namedExportsOrder,N as default};

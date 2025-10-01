import{d,c as h,J as g,o as u,n as w,j as m,g as f,m as v,f as n,H as A,b as R,y as _,z as b}from"./vue.esm-bundler-DAoQZYEK.js";import{b as y}from"./useForwardExpose-D9aka3cn.js";import{P as C}from"./Primitive-Dw578XAm.js";const x=d({inheritAttrs:!1,__name:"AspectRatio",props:{ratio:{default:1},asChild:{type:Boolean},as:{}},setup(e){const a=e,{forwardRef:o}=y(),r=h(()=>1/a.ratio*100);return(s,B)=>(u(),g("div",{style:A(`position: relative; width: 100%; padding-bottom: ${r.value}%`),"data-reka-aspect-ratio-wrapper":""},[w(n(C),v({ref:n(o),"as-child":s.asChild,as:s.as,style:{position:"absolute",inset:"0px"}},s.$attrs),{default:m(()=>[f(s.$slots,"default",{aspect:r.value})]),_:3},16,["as-child","as"])],4))}}),i=d({__name:"AspectRatio",props:{ratio:{},asChild:{type:Boolean},as:{type:[String,Object,Function]}},setup(e){const a=e;return(o,r)=>(u(),R(n(x),_(b(a)),{default:m(()=>[f(o.$slots,"default")]),_:3},16))}});i.__docgenInfo={exportName:"default",displayName:"AspectRatio",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/aspect-ratio/AspectRatio.vue"]};const j={title:"Components/AspectRatio",component:i,tags:["autodocs"],argTypes:{ratio:{control:"number",description:"Aspect ratio of the container, e.g., 16/9 for wides"}},args:{ratio:16/9}},t={render:e=>({components:{AspectRatio:i},setup(){return{args:e}},template:`
        <div class="w-full sm:w-[300px] overflow-hidden rounded-lg shadow-sm">
            <AspectRatio :ratio="args.ratio">
            <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
                alt="Landscape photograph by Tobias Tullius"
            >
            </AspectRatio>
        </div>
        `})};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,j as default};

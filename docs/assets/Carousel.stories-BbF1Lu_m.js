import{r as x,c as W,w as v,k as G,l as z,I as a,L as n,e as s,g as m,M as o,J as g,K as w,G as N,N as p,o as t,O as H}from"./vue.esm-bundler-CDO2oHXK.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F={class:"relative overflow-hidden w-full"},J={key:0,class:"w-full flex-shrink-0"},X={class:"w-full min-h-98 flex flex-col items-center justify-center bg-black-200 rounded-lg relative"},T={class:"absolute left-4 bottom-16 text-left"},$={key:0,class:"font-bold text-zeta mb-1"},E={key:1,class:"text-black-800 mb-2"},I={class:"w-full min-h-98 flex flex-col items-center justify-center bg-black-200 rounded-lg relative"},L={class:"absolute left-4 bottom-16 text-left"},O={key:0,class:"font-bold text-zeta mb-1"},P={key:1,class:"text-black-800 mb-2"},U={key:1,class:"w-full flex-shrink-0"},K={class:"w-full min-h-98 flex flex-col items-center justify-center bg-black-200 rounded-lg relative"},Q={class:"absolute left-4 bottom-16 text-left"},R={key:0,class:"font-bold text-zeta mb-1"},Y={key:1,class:"text-black-800 mb-2"},_={key:0,class:"absolute lg:w-[20%] left-4 bottom-4 flex justify-between gap-2 z-10"},ee={key:1,class:"flex justify-end-safe gap-1 absolute w-full right-4 bottom-4"},ae=["onClick","aria-label"],Z={__name:"Carousel",props:{slides:{type:Array,required:!0,default:()=>["Satu","Dua","Tiga","Empat","Lima"]},header:{type:Array,default:()=>["Header 1","Header 2","Header 3","Header 4","Header 5"]},subHeader:{type:Array,default:()=>["Sub Header 1","Sub Header 2","Sub Header 3","Sub Header 4","Sub Header 5"]},modelValue:{type:Number,default:0},variant:{type:String,default:"arrow",validator:e=>["arrow","indicator","both"].includes(e)},autoplay:{type:Boolean,default:!1},interval:{type:Number,default:1e4}},emits:["update:modelValue"],setup(e,{emit:C}){const i=e,V=C,l=x(i.modelValue),u=x(!0),D=W(()=>l.value+1);function j(r){u.value=!0,l.value=r}v(()=>i.modelValue,r=>l.value=r),v(l,r=>V("update:modelValue",r));function B(){u.value=!0,l.value--}function h(){u.value=!0,l.value++}function A(){l.value<0?(u.value=!1,l.value=i.slides.length-1):l.value>=i.slides.length&&(u.value=!1,l.value=0)}let b;return G(()=>{i.autoplay&&(b=setInterval(()=>{h()},i.interval))}),z(()=>{b&&clearInterval(b)}),(r,te)=>(t(),a("div",F,[n("div",{class:p(["flex",{"transition-transform duration-500 ease-in-out":u.value}]),style:N({transform:`translateX(-${D.value*100}%)`}),onTransitionend:A},[e.slides.length?(t(),a("div",J,[n("div",X,[m(r.$slots,"default",{slide:e.slides[e.slides.length-1],index:e.slides.length-1},()=>[H(o(e.slides[e.slides.length-1]),1)],!0),n("div",T,[e.header&&e.header.length?(t(),a("div",$,o(e.header[e.header.length-1]),1)):s("",!0),e.subHeader&&e.subHeader.length?(t(),a("div",E,o(e.subHeader[e.subHeader.length-1]),1)):s("",!0)])])])):s("",!0),(t(!0),a(g,null,w(e.slides,(f,d)=>(t(),a("div",{key:d,class:"w-full flex-shrink-0"},[n("div",I,[m(r.$slots,"default",{slide:f,index:d},()=>[H(o(f),1)],!0),n("div",L,[e.header&&e.header.length?(t(),a("div",O,o(e.header[d]),1)):s("",!0),e.subHeader&&e.subHeader.length?(t(),a("div",P,o(e.subHeader[d]),1)):s("",!0)])])]))),128)),e.slides.length?(t(),a("div",U,[n("div",K,[m(r.$slots,"default",{slide:e.slides[0],index:0},()=>[H(o(e.slides[0]),1)],!0),n("div",Q,[e.header&&e.header.length?(t(),a("div",R,o(e.header[0]),1)):s("",!0),e.subHeader&&e.subHeader.length?(t(),a("div",Y,o(e.subHeader[0]),1)):s("",!0)])])])):s("",!0)],38),e.variant==="arrow"||e.variant==="both"?(t(),a("div",_,[n("button",{onClick:B,class:"p-2 rounded-full border border-black-400 w-10 h-10 bg-white cursor-pointer","aria-label":"Previous slide"},"←"),n("button",{onClick:h,class:"p-2 rounded-full border border-black-400 w-10 h-10 bg-white cursor-pointer","aria-label":"Next slide"},"→")])):s("",!0),e.variant==="indicator"||e.variant==="both"?(t(),a("div",ee,[(t(!0),a(g,null,w(e.slides,(f,d)=>(t(),a("button",{key:d,class:p(["w-8 h-2 rounded-full transition-all duration-300 focus:outline-none",[l.value===d?"bg-lime-500":"bg-black-400"]]),onClick:le=>j(d),"aria-label":`Go to slide ${d+1}`},null,10,ae))),128))])):s("",!0)]))}},k=q(Z,[["__scopeId","data-v-6879b443"]]);Z.__docgenInfo={exportName:"default",displayName:"Carousel",description:"",tags:{},props:[{name:"slides",type:{name:"array"},required:!0,defaultValue:{func:!1,value:'["Satu", "Dua", "Tiga", "Empat", "Lima"]'}},{name:"header",type:{name:"array"},defaultValue:{func:!1,value:'["Header 1", "Header 2", "Header 3", "Header 4", "Header 5"]'}},{name:"subHeader",type:{name:"array"},defaultValue:{func:!1,value:'["Sub Header 1", "Sub Header 2", "Sub Header 3", "Sub Header 4", "Sub Header 5"]'}},{name:"modelValue",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"arrow"'},values:["arrow","indicator","both"]},{name:"autoplay",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"interval",type:{name:"number"},defaultValue:{func:!1,value:"10000"}}],events:[{name:"update:modelValue"}],slots:[{name:"default",scoped:!0,bindings:[{name:"slide",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/lord/Documents/asd/gwindui.github.io/src/components/carousel/Carousel.vue"]};const de={title:"Components/Carousel",component:k,tags:["autodocs"],argsTypes:{slides:{control:"object"},header:{control:"object"},subHeader:{control:"object"},variant:{control:"select",options:["arrow","indicator","both"]},autoplay:{control:"boolean"},interval:{control:"number"}},args:{slides:[{src:"https://images.unsplash.com/photo-1752643719497-b91314d6d253?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",alt:"Slide 1"},{src:"https://images.unsplash.com/photo-1753545057755-aa9a7673b78f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",alt:"Slide 2"},{src:"https://images.unsplash.com/photo-1749302860502-35be67c058c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",alt:"Slide 3"}]}},c={args:{autoplay:!0,interval:3e3,variant:"both",header:["Header 1","Header 2","Header 3","Header 4","Header 5"],subHeader:["Sub Header 1","Sub Header 2","Sub Header 3","Sub Header 4","Sub Header 5"]},render:e=>({components:{Carousel:k},setup(){return{args:e}},template:`
        <Carousel v-bind="args" class="rounded-md" :slides="args.slides" v-slot="{ slide }">
            <img class="w-full h-[392px] object-cover" :src="slide.src" :alt="slide.alt" class="-z-10" />
        </Carousel>
        `}),parameters:{docs:{source:{code:`

<script setup lang="ts">
    const header = ["Header 1","Header 2","Header 3","Header 4","Header 5"];

    const slides = [
        {
            "src": "https://images.unsplash.com/photo-1752643719497-b91314d6d253?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
            "alt": "Slide 1"
        },
        {
            "src": "https://images.unsplash.com/photo-1753545057755-aa9a7673b78f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
            "alt": "Slide 2"
        },
        {
            "src": "https://images.unsplash.com/photo-1749302860502-35be67c058c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
            "alt": "Slide 3"
        }
    ];

    const subHeader = ["Sub Header 1","Sub Header 2","Sub Header 3","Sub Header 4","Sub Header 5"];
<\/script>

<template>
    <Carousel v-bind="args" class="rounded-md" :slides="args.slides" v-slot="{ slide }">
        <img class="w-full h-[392px] object-cover" :src="slide.src" :alt="slide.alt" class="-z-10" />
    </Carousel>
</template>
        `.trim()}}}};var y,S,M;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    autoplay: true,
    interval: 3000,
    variant: "both",
    header: ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5"],
    subHeader: ["Sub Header 1", "Sub Header 2", "Sub Header 3", "Sub Header 4", "Sub Header 5"]
  },
  render: (args: string) => ({
    components: {
      Carousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Carousel v-bind="args" class="rounded-md" :slides="args.slides" v-slot="{ slide }">
            <img class="w-full h-[392px] object-cover" :src="slide.src" :alt="slide.alt" class="-z-10" />
        </Carousel>
        \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`

<script setup lang="ts">
    const header = ["Header 1","Header 2","Header 3","Header 4","Header 5"];

    const slides = [
        {
            "src": "https://images.unsplash.com/photo-1752643719497-b91314d6d253?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
            "alt": "Slide 1"
        },
        {
            "src": "https://images.unsplash.com/photo-1753545057755-aa9a7673b78f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
            "alt": "Slide 2"
        },
        {
            "src": "https://images.unsplash.com/photo-1749302860502-35be67c058c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
            "alt": "Slide 3"
        }
    ];

    const subHeader = ["Sub Header 1","Sub Header 2","Sub Header 3","Sub Header 4","Sub Header 5"];
<\/script>

<template>
    <Carousel v-bind="args" class="rounded-md" :slides="args.slides" v-slot="{ slide }">
        <img class="w-full h-[392px] object-cover" :src="slide.src" :alt="slide.alt" class="-z-10" />
    </Carousel>
</template>
        \`.trim()
      }
    }
  }
}`,...(M=(S=c.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const ne=["Default"];export{c as Default,ne as __namedExportsOrder,de as default};

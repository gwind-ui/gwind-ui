import{d as u,v as U,b as p,o as m,j as d,g as c,f as e,r as q,c as f,w as Q,q as X,k as Z,n as V,m as x,e as ee,a6 as te,L as oe,N as L}from"./vue.esm-bundler-CDO2oHXK.js";import{u as ae,a as ne}from"./useForwardPropsEmits-CrpZhFqP.js";import{c as S}from"./createContext-B-1E407x.js";import{u as re}from"./useDirection-Cqhzq67l.js";import{u as se,b as h,k as ie}from"./useForwardExpose-BfXw-hnz.js";import{P as w}from"./Primitive-BG2Gt-GN.js";import{u as le}from"./useSingleOrMultipleValue-DuO2FDXs.js";import{a as k}from"./utils-N9jxOpu3.js";import{u as de}from"./useArrowNavigation-B5rxJs06.js";import{u as z}from"./useId-CodeILRg.js";import{G as ce}from"./g-icon-chevron-down-CYOVy53M.js";import{G as ue}from"./GIcon-BIWwU8Ge.js";import{P as pe}from"./Presence-D9vIVm08.js";import"./ConfigProvider-DurQEXP4.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";const[J,me]=S("CollapsibleRoot");var fe=u({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:open"],setup(n,{expose:s,emit:o}){const t=n,r=se(t,"open",o,{defaultValue:t.defaultOpen,passive:t.open===void 0}),{disabled:i,unmountOnHide:_}=U(t);return me({contentId:"",disabled:i,open:r,unmountOnHide:_,onOpenToggle:()=>{i.value||(r.value=!r.value)}}),s({open:r}),h(),(g,b)=>(m(),p(e(w),{as:g.as,"as-child":t.asChild,"data-state":e(r)?"open":"closed","data-disabled":e(i)?"":void 0},{default:d(()=>[c(g.$slots,"default",{open:e(r)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}}),ge=fe,ve=u({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["contentFound"],setup(n,{emit:s}){const o=n,t=s,a=J();a.contentId||(a.contentId=z(void 0,"reka-collapsible-content"));const r=q(),{forwardRef:i,currentElement:_}=h(),g=q(0),b=q(0),C=f(()=>a.open.value),v=q(C.value),A=q();Q(()=>{var l;return[C.value,(l=r.value)==null?void 0:l.present]},async()=>{await X();const l=_.value;if(!l)return;A.value=A.value||{transitionDuration:l.style.transitionDuration,animationName:l.style.animationName},l.style.transitionDuration="0s",l.style.animationName="none";const I=l.getBoundingClientRect();b.value=I.height,g.value=I.width,v.value||(l.style.transitionDuration=A.value.transitionDuration,l.style.animationName=A.value.animationName)},{immediate:!0});const y=f(()=>v.value&&a.open.value);return Z(()=>{requestAnimationFrame(()=>{v.value=!1})}),ie(_,"beforematch",l=>{requestAnimationFrame(()=>{a.onOpenToggle(),t("contentFound")})}),(l,I)=>(m(),p(e(pe),{ref_key:"presentRef",ref:r,present:l.forceMount||e(a).open.value,"force-mount":!0},{default:d(({present:B})=>{var P;return[V(e(w),x(l.$attrs,{id:e(a).contentId,ref:e(i),"as-child":o.asChild,as:l.as,hidden:B?void 0:e(a).unmountOnHide.value?"":"until-found","data-state":y.value?void 0:e(a).open.value?"open":"closed","data-disabled":(P=e(a).disabled)!=null&&P.value?"":void 0,style:{"--reka-collapsible-content-height":`${b.value}px`,"--reka-collapsible-content-width":`${g.value}px`}}),{default:d(()=>[!e(a).unmountOnHide.value||B?c(l.$slots,"default",{key:0}):ee("v-if",!0)]),_:2},1040,["id","as-child","as","hidden","data-state","data-disabled","style"])]}),_:3},8,["present"]))}}),Ae=ve,_e=u({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const s=n;h();const o=J();return(t,a)=>{var r,i;return m(),p(e(w),{type:t.as==="button"?"button":void 0,as:t.as,"as-child":s.asChild,"aria-controls":e(o).contentId,"aria-expanded":e(o).open.value,"data-state":e(o).open.value?"open":"closed","data-disabled":(r=e(o).disabled)!=null&&r.value?"":void 0,disabled:(i=e(o).disabled)==null?void 0:i.value,onClick:e(o).onOpenToggle},{default:d(()=>[c(t.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}}),be=_e;const[$,he]=S("AccordionRoot");var Ce=u({__name:"AccordionRoot",props:{collapsible:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},dir:{type:String,required:!1},orientation:{type:String,required:!1,default:"vertical"},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},type:{type:String,required:!1},modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1}},emits:["update:modelValue"],setup(n,{emit:s}){const o=n,t=s,{dir:a,disabled:r,unmountOnHide:i}=U(o),_=re(a),{modelValue:g,changeModelValue:b,isSingle:C}=le(o,t),{forwardRef:v,currentElement:A}=h();return he({disabled:r,direction:_,orientation:o.orientation,parentElement:A,isSingle:C,collapsible:o.collapsible,modelValue:g,changeModelValue:b,unmountOnHide:i}),(y,l)=>(m(),p(e(w),{ref:e(v),"as-child":y.asChild,as:y.as},{default:d(()=>[c(y.$slots,"default",{modelValue:e(g)})]),_:3},8,["as-child","as"]))}}),ye=Ce,N=(function(n){return n.Open="open",n.Closed="closed",n})(N||{});const[D,Ie]=S("AccordionItem");var qe=u({__name:"AccordionItem",props:{disabled:{type:Boolean,required:!1},value:{type:String,required:!0},unmountOnHide:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n,{expose:s}){const o=n,t=$(),a=f(()=>t.isSingle.value?o.value===t.modelValue.value:Array.isArray(t.modelValue.value)&&t.modelValue.value.includes(o.value)),r=f(()=>t.disabled.value||o.disabled),i=f(()=>r.value?"":void 0),_=f(()=>a.value?N.Open:N.Closed);s({open:a,dataDisabled:i});const{currentRef:g,currentElement:b}=h();Ie({open:a,dataState:_,disabled:r,dataDisabled:i,triggerId:"",currentRef:g,currentElement:b,value:f(()=>o.value)});function C(v){var I;const A=v.target;if(Array.from(((I=t.parentElement.value)==null?void 0:I.querySelectorAll("[data-reka-collection-item]"))??[]).findIndex(B=>B===A)===-1)return null;de(v,A,t.parentElement.value,{arrowKeyOptions:t.orientation,dir:t.direction.value,focus:!0})}return(v,A)=>(m(),p(e(ge),{"data-orientation":e(t).orientation,"data-disabled":i.value,"data-state":_.value,disabled:r.value,open:a.value,as:o.as,"as-child":o.asChild,"unmount-on-hide":e(t).unmountOnHide.value,onKeydown:te(C,["up","down","left","right","home","end"])},{default:d(()=>[c(v.$slots,"default",{open:a.value})]),_:3},8,["data-orientation","data-disabled","data-state","disabled","open","as","as-child","unmount-on-hide"]))}}),xe=qe,we=u({__name:"AccordionContent",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const s=n,o=$(),t=D();return h(),(a,r)=>(m(),p(e(Ae),{role:"region","as-child":s.asChild,as:a.as,"force-mount":s.forceMount,"aria-labelledby":e(t).triggerId,"data-state":e(t).dataState.value,"data-disabled":e(t).dataDisabled.value,"data-orientation":e(o).orientation,style:{"--reka-accordion-content-width":"var(--reka-collapsible-content-width)","--reka-accordion-content-height":"var(--reka-collapsible-content-height)"},onContentFound:r[0]||(r[0]=i=>e(o).changeModelValue(e(t).value.value))},{default:d(()=>[c(a.$slots,"default")]),_:3},8,["as-child","as","force-mount","aria-labelledby","data-state","data-disabled","data-orientation"]))}}),Be=we,Te=u({__name:"AccordionHeader",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h3"}},setup(n){const s=n,o=$(),t=D();return h(),(a,r)=>(m(),p(e(w),{as:s.as,"as-child":s.asChild,"data-orientation":e(o).orientation,"data-state":e(t).dataState.value,"data-disabled":e(t).dataDisabled.value},{default:d(()=>[c(a.$slots,"default")]),_:3},8,["as","as-child","data-orientation","data-state","data-disabled"]))}}),Re=Te,ke=u({__name:"AccordionTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const s=n,o=$(),t=D();t.triggerId||(t.triggerId=z(void 0,"reka-accordion-trigger"));function a(){const r=o.isSingle.value&&t.open.value&&!o.collapsible;t.disabled.value||r||o.changeModelValue(t.value.value)}return(r,i)=>(m(),p(e(be),{id:e(t).triggerId,ref:e(t).currentRef,"data-reka-collection-item":"",as:s.as,"as-child":s.asChild,"aria-disabled":e(t).disabled.value||void 0,"aria-expanded":e(t).open.value||!1,"data-disabled":e(t).dataDisabled.value,"data-orientation":e(o).orientation,"data-state":e(t).dataState.value,disabled:e(t).disabled.value,onClick:a},{default:d(()=>[c(r.$slots,"default")]),_:3},8,["id","as","as-child","aria-disabled","aria-expanded","data-disabled","data-orientation","data-state","disabled"]))}}),$e=ke;const O=u({__name:"Accordion",props:{collapsible:{type:Boolean},disabled:{type:Boolean},dir:{},orientation:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(n,{emit:s}){const a=ae(n,s);return(r,i)=>(m(),p(e(ye),x(e(a),{class:"flex flex-col gap-3"}),{default:d(()=>[c(r.$slots,"default")]),_:3},16))}});O.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/accordion/Accordion.vue"]};const H=u({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(n){const s=n,o=f(()=>{const{class:t,...a}=s;return a});return(t,a)=>(m(),p(e(Be),x(o.value,{class:"overflow-hidden px-3 !text-omicron text-black-600 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"}),{default:d(()=>[oe("div",{class:L(e(k)("pb-4 pt-0",s.class))},[c(t.$slots,"default")],2)]),_:3},16))}});H.__docgenInfo={exportName:"default",displayName:"AccordionContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/accordion/AccordionContent.vue"]};const F=u({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(n){const s=n,o=ne(s);return(t,a)=>(m(),p(e(xe),x(e(o),{class:e(k)("rounded-md bg-white border border-black-200 flex flex-col",s.class)}),{default:d(()=>[c(t.$slots,"default")]),_:3},16,["class"]))}});F.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/accordion/AccordionItem.vue"]};const M=u({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const s=f(()=>({"flex flex-1 items-center justify-between p-3 !text-omicron text-black-600 font-bold transition-all cursor-pointer data-[state=open]:text-lime-500 [&[data-state=open]>svg]:rotate-180":!0})),o=f(()=>({"w-[30px] text-black-60 shrink-0 transition-transform duration-200":!0})),t=n,a=f(()=>{const{class:r,...i}=t;return i});return(r,i)=>(m(),p(e(Re),{class:"flex"},{default:d(()=>[V(e($e),x(a.value,{class:e(k)(s.value,t.class)}),{default:d(()=>[c(r.$slots,"default"),c(r.$slots,"icon",{},()=>[V(e(ue),{class:L([e(k)(o.value),"w-6"]),icon:e(ce)},null,8,["class","icon"])])]),_:3},16,["class"])]),_:3}))}});M.__docgenInfo={exportName:"default",displayName:"AccordionTrigger",description:"",tags:{},slots:[{name:"default"},{name:"icon"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/accordion/AccordionTrigger.vue"]};const ze={title:"Components/Accordion",component:O,tags:["autodocs"]},T={args:{default:`
                  <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      `},render:n=>({components:{Accordion:O,AccordionContent:H,AccordionItem:F,AccordionTrigger:M},setup(){return{args:n}},template:`
        <Accordion type="single" collapsible v-bind="args">
             ${n.default}
        </Accordion>
      `})},R={args:{default:`
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      `},render:n=>({components:{Accordion:O,AccordionContent:H,AccordionItem:F,AccordionTrigger:M},setup(){return{args:n}},template:`
        <Accordion type="single" collapsible v-bind="args">
             ${n.default}
        </Accordion>
      `})};var E,W,Y;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    default: \`
                  <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      \`
  },
  render: (args: {
    default: string;
  }) => ({
    components: {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Accordion type="single" collapsible v-bind="args">
             \${args.default}
        </Accordion>
      \`
  })
}`,...(Y=(W=T.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var G,j,K;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    default: \`
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      \`
  },
  render: (args: {
    default: string;
  }) => ({
    components: {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Accordion type="single" collapsible v-bind="args">
             \${args.default}
        </Accordion>
      \`
  })
}`,...(K=(j=R.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};const Je=["Group","Single"];export{T as Group,R as Single,Je as __namedExportsOrder,ze as default};

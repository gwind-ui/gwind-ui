import{d as u,x as K,b as p,o as m,j as c,g as l,f as e,c as f,a7 as J,r as x,w as Q,q as X,k as Z,n as S,m as w,e as ee,M as te,O as U}from"./vue.esm-bundler-DAoQZYEK.js";import{u as oe,a as ne}from"./useForwardPropsEmits-CKR2vMz0.js";import{u as ae}from"./useSingleOrMultipleValue-YovYZ833.js";import{c as N}from"./createContext-Ddb9PwdX.js";import{u as se}from"./useDirection-CPl_s7F5.js";import{b as I,u as re,k as ie}from"./useForwardExpose-D9aka3cn.js";import{P as B}from"./Primitive-Dw578XAm.js";import{a as O}from"./utils-oDltpQaF.js";import{G as de}from"./g-icon-chevron-down-CYOVy53M.js";import{G as ce}from"./GIcon-BnVbbYcM.js";import{u as z}from"./useId-BGYOYX4b.js";import{u as le}from"./useArrowNavigation-B5rxJs06.js";import{P as ue}from"./Presence-Dx3HIjvu.js";import"./isValueEqualOrExist-B5JO9E3o.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-DHF4M4F_.js";import"./ConfigProvider-DRoX-YQM.js";const[R,pe]=N("AccordionRoot"),me=u({__name:"AccordionRoot",props:{collapsible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dir:{},orientation:{default:"vertical"},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(s,{emit:r}){const o=s,t=r,{dir:n,disabled:a,unmountOnHide:i}=K(o),v=se(n),{modelValue:g,changeModelValue:h,isSingle:C}=ae(o,t),{forwardRef:A,currentElement:b}=I();return pe({disabled:a,direction:v,orientation:o.orientation,parentElement:b,isSingle:C,collapsible:o.collapsible,modelValue:g,changeModelValue:h,unmountOnHide:i}),(_,d)=>(m(),p(e(B),{ref:e(A),"as-child":_.asChild,as:_.as},{default:c(()=>[l(_.$slots,"default",{modelValue:e(g)})]),_:3},8,["as-child","as"]))}}),[L,fe]=N("CollapsibleRoot"),ge=u({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:open"],setup(s,{expose:r,emit:o}){const t=s,a=re(t,"open",o,{defaultValue:t.defaultOpen,passive:t.open===void 0}),{disabled:i,unmountOnHide:v}=K(t);return fe({contentId:"",disabled:i,open:a,unmountOnHide:v,onOpenToggle:()=>{i.value||(a.value=!a.value)}}),r({open:a}),I(),(g,h)=>(m(),p(e(B),{as:g.as,"as-child":t.asChild,"data-state":e(a)?"open":"closed","data-disabled":e(i)?"":void 0},{default:c(()=>[l(g.$slots,"default",{open:e(a)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}}),[D,Ae]=N("AccordionItem"),ve=u({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},setup(s,{expose:r}){const o=s,t=R(),n=f(()=>t.isSingle.value?o.value===t.modelValue.value:Array.isArray(t.modelValue.value)&&t.modelValue.value.includes(o.value)),a=f(()=>t.disabled.value||o.disabled),i=f(()=>a.value?"":void 0),v=f(()=>n.value?"open":"closed");r({open:n,dataDisabled:i});const{currentRef:g,currentElement:h}=I();Ae({open:n,dataState:v,disabled:a,dataDisabled:i,triggerId:"",currentRef:g,currentElement:h,value:f(()=>o.value)});function C(A){var y;const b=A.target;if(Array.from(((y=t.parentElement.value)==null?void 0:y.querySelectorAll("[data-reka-collection-item]"))??[]).findIndex($=>$===b)===-1)return null;le(A,h.value,t.parentElement.value,{arrowKeyOptions:t.orientation,dir:t.direction.value,focus:!0})}return(A,b)=>(m(),p(e(ge),{"data-orientation":e(t).orientation,"data-disabled":i.value,"data-state":v.value,disabled:a.value,open:n.value,as:o.as,"as-child":o.asChild,"unmount-on-hide":e(t).unmountOnHide.value,onKeydown:J(C,["up","down","left","right","home","end"])},{default:c(()=>[l(A.$slots,"default",{open:n.value})]),_:3},8,["data-orientation","data-disabled","data-state","disabled","open","as","as-child","unmount-on-hide"]))}}),be=u({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["contentFound"],setup(s,{emit:r}){const o=s,t=r,n=L();n.contentId||(n.contentId=z(void 0,"reka-collapsible-content"));const a=x(),{forwardRef:i,currentElement:v}=I(),g=x(0),h=x(0),C=f(()=>n.open.value),A=x(C.value),b=x();Q(()=>{var d;return[C.value,(d=a.value)==null?void 0:d.present]},async()=>{await X();const d=v.value;if(!d)return;b.value=b.value||{transitionDuration:d.style.transitionDuration,animationName:d.style.animationName},d.style.transitionDuration="0s",d.style.animationName="none";const y=d.getBoundingClientRect();h.value=y.height,g.value=y.width,A.value||(d.style.transitionDuration=b.value.transitionDuration,d.style.animationName=b.value.animationName)},{immediate:!0});const _=f(()=>A.value&&n.open.value);return Z(()=>{requestAnimationFrame(()=>{A.value=!1})}),ie(v,"beforematch",d=>{requestAnimationFrame(()=>{n.onOpenToggle(),t("contentFound")})}),(d,y)=>(m(),p(e(ue),{ref_key:"presentRef",ref:a,present:d.forceMount||e(n).open.value,"force-mount":!0},{default:c(({present:$})=>{var P;return[S(e(B),w(d.$attrs,{id:e(n).contentId,ref:e(i),"as-child":o.asChild,as:d.as,hidden:$?void 0:e(n).unmountOnHide.value?"":"until-found","data-state":_.value?void 0:e(n).open.value?"open":"closed","data-disabled":(P=e(n).disabled)!=null&&P.value?"":void 0,style:{"--reka-collapsible-content-height":`${h.value}px`,"--reka-collapsible-content-width":`${g.value}px`}}),{default:c(()=>[!e(n).unmountOnHide.value||$?l(d.$slots,"default",{key:0}):ee("",!0)]),_:2},1040,["id","as-child","as","hidden","data-state","data-disabled","style"])]}),_:3},8,["present"]))}}),he=u({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(s){const r=s,o=R(),t=D();return I(),(n,a)=>(m(),p(e(be),{role:"region","as-child":r.asChild,as:n.as,"force-mount":r.forceMount,"aria-labelledby":e(t).triggerId,"data-state":e(t).dataState.value,"data-disabled":e(t).dataDisabled.value,"data-orientation":e(o).orientation,style:{"--reka-accordion-content-width":"var(--reka-collapsible-content-width)","--reka-accordion-content-height":"var(--reka-collapsible-content-height)"},onContentFound:a[0]||(a[0]=i=>e(o).changeModelValue(e(t).value.value))},{default:c(()=>[l(n.$slots,"default")]),_:3},8,["as-child","as","force-mount","aria-labelledby","data-state","data-disabled","data-orientation"]))}}),Ie=u({__name:"AccordionHeader",props:{asChild:{type:Boolean},as:{default:"h3"}},setup(s){const r=s,o=R(),t=D();return I(),(n,a)=>(m(),p(e(B),{as:r.as,"as-child":r.asChild,"data-orientation":e(o).orientation,"data-state":e(t).dataState.value,"data-disabled":e(t).dataDisabled.value},{default:c(()=>[l(n.$slots,"default")]),_:3},8,["as","as-child","data-orientation","data-state","data-disabled"]))}}),Ce=u({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(s){const r=s;I();const o=L();return(t,n)=>{var a,i;return m(),p(e(B),{type:t.as==="button"?"button":void 0,as:t.as,"as-child":r.asChild,"aria-controls":e(o).contentId,"aria-expanded":e(o).open.value,"data-state":e(o).open.value?"open":"closed","data-disabled":(a=e(o).disabled)!=null&&a.value?"":void 0,disabled:(i=e(o).disabled)==null?void 0:i.value,onClick:e(o).onOpenToggle},{default:c(()=>[l(t.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}}),_e=u({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{}},setup(s){const r=s,o=R(),t=D();t.triggerId||(t.triggerId=z(void 0,"reka-accordion-trigger"));function n(){const a=o.isSingle.value&&t.open.value&&!o.collapsible;t.disabled.value||a||o.changeModelValue(t.value.value)}return(a,i)=>(m(),p(e(Ce),{id:e(t).triggerId,ref:e(t).currentRef,"data-reka-collection-item":"",as:r.as,"as-child":r.asChild,"aria-disabled":e(t).disabled.value||void 0,"aria-expanded":e(t).open.value||!1,"data-disabled":e(t).dataDisabled.value,"data-orientation":e(o).orientation,"data-state":e(t).dataState.value,disabled:e(t).disabled.value,onClick:n},{default:c(()=>[l(a.$slots,"default")]),_:3},8,["id","as","as-child","aria-disabled","aria-expanded","data-disabled","data-orientation","data-state","disabled"]))}}),V=u({__name:"Accordion",props:{collapsible:{type:Boolean},disabled:{type:Boolean},dir:{},orientation:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{type:[String,Object,Function]},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(s,{emit:r}){const n=oe(s,r);return(a,i)=>(m(),p(e(me),w(e(n),{class:"flex flex-col gap-3"}),{default:c(()=>[l(a.$slots,"default")]),_:3},16))}});V.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/accordion/Accordion.vue"]};const F=u({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{type:[String,Object,Function]},class:{}},setup(s){const r=s,o=f(()=>{const{class:t,...n}=r;return n});return(t,n)=>(m(),p(e(he),w(o.value,{class:"overflow-hidden px-3 !text-omicron text-black-600 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"}),{default:c(()=>[te("div",{class:U(e(O)("pb-4 pt-0",r.class))},[l(t.$slots,"default")],2)]),_:3},16))}});F.__docgenInfo={exportName:"default",displayName:"AccordionContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/accordion/AccordionContent.vue"]};const M=u({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{type:[String,Object,Function]},class:{}},setup(s){const r=s,o=ne(r);return(t,n)=>(m(),p(e(ve),w(e(o),{class:e(O)("rounded-md bg-white border border-black-200 flex flex-col",r.class)}),{default:c(()=>[l(t.$slots,"default")]),_:3},16,["class"]))}});M.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/accordion/AccordionItem.vue"]};const H=u({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{type:[String,Object,Function]},class:{}},setup(s){const r=f(()=>({"flex flex-1 items-center justify-between p-3 !text-omicron text-black-600 font-bold transition-all cursor-pointer data-[state=open]:text-lime-500 [&[data-state=open]>svg]:rotate-180":!0})),o=f(()=>({"w-[30px] text-black-60 shrink-0 transition-transform duration-200":!0})),t=s,n=f(()=>{const{class:a,...i}=t;return i});return(a,i)=>(m(),p(e(Ie),{class:"flex"},{default:c(()=>[S(e(_e),w(n.value,{class:e(O)(r.value,t.class)}),{default:c(()=>[l(a.$slots,"default"),l(a.$slots,"icon",{},()=>[S(e(ce),{class:U([e(O)(o.value),"w-6"]),icon:e(de)},null,8,["class","icon"])])]),_:3},16,["class"])]),_:3}))}});H.__docgenInfo={exportName:"default",displayName:"AccordionTrigger",description:"",tags:{},slots:[{name:"default"},{name:"icon"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/accordion/AccordionTrigger.vue"]};const Ee={title:"Components/Accordion",component:V,tags:["autodocs"]},T={args:{default:`
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
      `},render:s=>({components:{Accordion:V,AccordionContent:F,AccordionItem:M,AccordionTrigger:H},setup(){return{args:s}},template:`
        <Accordion type="single" collapsible v-bind="args">
             ${s.default}
        </Accordion>
      `})},k={args:{default:`
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      `},render:s=>({components:{Accordion:V,AccordionContent:F,AccordionItem:M,AccordionTrigger:H},setup(){return{args:s}},template:`
        <Accordion type="single" collapsible v-bind="args">
             ${s.default}
        </Accordion>
      `})};var E,j,W;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(j=T.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var Y,G,q;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};const je=["Group","Single"];export{T as Group,k as Single,je as __namedExportsOrder,Ee as default};

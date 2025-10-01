import{d as p,r as T,v as te,g as d,f as e,k as U,b as f,o as u,j as n,n as O,m as D,e as ae,a2 as H,q as oe,x as C,y as k,c as F,aa as le,I as K,N as z}from"./vue.esm-bundler-CDO2oHXK.js";import{_ as h}from"./button-D3CkTnWD.js";import{b as w,u as P}from"./useForwardPropsEmits-CrpZhFqP.js";import{u as re,b as A}from"./useForwardExpose-BfXw-hnz.js";import{c as S}from"./createContext-B-1E407x.js";import{a as B}from"./utils-N9jxOpu3.js";import{P as $}from"./Primitive-BG2Gt-GN.js";import{P as j}from"./Presence-D9vIVm08.js";import{a as se,u as ne}from"./useHideOthers-DMIDK4jJ.js";import{g as N}from"./getActiveElement-FUKBWQwh.js";import{u as I}from"./useId-CodeILRg.js";import{D as ie}from"./DismissableLayer-Cuw9jd25.js";import{g as ue,F as de}from"./utils-UYXcBi_x.js";import{T as pe}from"./Teleport--u8J_9-Z.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DZcI7uxW.js";import"./ConfigProvider-DurQEXP4.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./utils-CiIgqHKy.js";const[y,ge]=S("DialogRoot");var fe=p({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,required:!1,default:void 0},defaultOpen:{type:Boolean,required:!1,default:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(l,{emit:a}){const t=l,o=re(t,"open",a,{defaultValue:t.defaultOpen,passive:t.open===void 0}),s=T(),_=T(),{modal:i}=te(t);return ge({open:o,modal:i,openModal:()=>{o.value=!0},onOpenChange:c=>{o.value=c},onOpenToggle:()=>{o.value=!o.value},contentId:"",titleId:"",descriptionId:"",triggerElement:s,contentElement:_}),(c,g)=>d(c.$slots,"default",{open:e(o),close:()=>o.value=!1})}}),_e=fe,me=p({__name:"DialogContentImpl",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(l,{emit:a}){const t=l,r=a,o=y(),{forwardRef:s,currentElement:_}=A();return o.titleId||(o.titleId=I(void 0,"reka-dialog-title")),o.descriptionId||(o.descriptionId=I(void 0,"reka-dialog-description")),U(()=>{o.contentElement=_,N()!==document.body&&(o.triggerElement.value=N())}),(i,c)=>(u(),f(e(de),{"as-child":"",loop:"",trapped:t.trapFocus,onMountAutoFocus:c[5]||(c[5]=g=>r("openAutoFocus",g)),onUnmountAutoFocus:c[6]||(c[6]=g=>r("closeAutoFocus",g))},{default:n(()=>[O(e(ie),D({id:e(o).contentId,ref:e(s),as:i.as,"as-child":i.asChild,"disable-outside-pointer-events":i.disableOutsidePointerEvents,role:"dialog","aria-describedby":e(o).descriptionId,"aria-labelledby":e(o).titleId,"data-state":e(ue)(e(o).open.value)},i.$attrs,{onDismiss:c[0]||(c[0]=g=>e(o).onOpenChange(!1)),onEscapeKeyDown:c[1]||(c[1]=g=>r("escapeKeyDown",g)),onFocusOutside:c[2]||(c[2]=g=>r("focusOutside",g)),onInteractOutside:c[3]||(c[3]=g=>r("interactOutside",g)),onPointerDownOutside:c[4]||(c[4]=g=>r("pointerDownOutside",g))}),{default:n(()=>[d(i.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),V=me,De=p({__name:"DialogContentModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(l,{emit:a}){const t=l,r=a,o=y(),s=w(r),{forwardRef:_,currentElement:i}=A();return se(i),(c,g)=>(u(),f(V,D({...t,...e(s)},{ref:e(_),"trap-focus":e(o).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:g[0]||(g[0]=m=>{var v;m.defaultPrevented||(m.preventDefault(),(v=e(o).triggerElement.value)==null||v.focus())}),onPointerDownOutside:g[1]||(g[1]=m=>{const v=m.detail.originalEvent,E=v.button===0&&v.ctrlKey===!0;(v.button===2||E)&&m.preventDefault()}),onFocusOutside:g[2]||(g[2]=m=>{m.preventDefault()})}),{default:n(()=>[d(c.$slots,"default")]),_:3},16,["trap-focus"]))}}),Ae=De,ve=p({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(l,{emit:a}){const t=l,o=w(a);A();const s=y(),_=T(!1),i=T(!1);return(c,g)=>(u(),f(V,D({...t,...e(o)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:g[0]||(g[0]=m=>{var v;m.defaultPrevented||(_.value||(v=e(s).triggerElement.value)==null||v.focus(),m.preventDefault()),_.value=!1,i.value=!1}),onInteractOutside:g[1]||(g[1]=m=>{var b;m.defaultPrevented||(_.value=!0,m.detail.originalEvent.type==="pointerdown"&&(i.value=!0));const v=m.target;((b=e(s).triggerElement.value)==null?void 0:b.contains(v))&&m.preventDefault(),m.detail.originalEvent.type==="focusin"&&i.value&&m.preventDefault()})}),{default:n(()=>[d(c.$slots,"default")]),_:3},16))}}),ye=ve,Ce=p({__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(l,{emit:a}){const t=l,r=a,o=y(),s=w(r),{forwardRef:_}=A();return(i,c)=>(u(),f(e(j),{present:i.forceMount||e(o).open.value},{default:n(()=>[e(o).modal.value?(u(),f(Ae,D({key:0,ref:e(_)},{...t,...e(s),...i.$attrs}),{default:n(()=>[d(i.$slots,"default")]),_:3},16)):(u(),f(ye,D({key:1,ref:e(_)},{...t,...e(s),...i.$attrs}),{default:n(()=>[d(i.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),ke=Ce,Be=p({__name:"DialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"p"}},setup(l){const a=l;A();const t=y();return(r,o)=>(u(),f(e($),D(a,{id:e(t).descriptionId}),{default:n(()=>[d(r.$slots,"default")]),_:3},16,["id"]))}}),Te=Be,Oe=p({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(l){const a=y();return ne(!0),A(),(t,r)=>(u(),f(e($),{as:t.as,"as-child":t.asChild,"data-state":e(a).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:n(()=>[d(t.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),he=Oe,qe=p({__name:"DialogOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(l){const a=y(),{forwardRef:t}=A();return(r,o)=>{var s;return(s=e(a))!=null&&s.modal.value?(u(),f(e(j),{key:0,present:r.forceMount||e(a).open.value},{default:n(()=>[O(he,D(r.$attrs,{ref:e(t),as:r.as,"as-child":r.asChild}),{default:n(()=>[d(r.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):ae("v-if",!0)}}}),Fe=qe,we=p({__name:"DialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h2"}},setup(l){const a=l,t=y();return A(),(r,o)=>(u(),f(e($),D(a,{id:e(t).titleId}),{default:n(()=>[d(r.$slots,"default")]),_:3},16,["id"]))}}),$e=we,be=p({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(l){const a=l,t=y(),{forwardRef:r,currentElement:o}=A();return t.contentId||(t.contentId=I(void 0,"reka-dialog-content")),U(()=>{t.triggerElement.value=o.value}),(s,_)=>(u(),f(e($),D(a,{ref:e(r),type:s.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(t).open.value||!1,"aria-controls":e(t).open.value?e(t).contentId:void 0,"data-state":e(t).open.value?"open":"closed",onClick:e(t).onOpenToggle}),{default:n(()=>[d(s.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),Ie=be;const[_t,Pe]=S("AlertDialogContent");var xe=p({__name:"AlertDialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(l,{emit:a}){const t=l,o=w(a);A();const s=T();return Pe({onCancelElementChange:_=>{s.value=_}}),(_,i)=>(u(),f(e(ke),D({...t,...e(o)},{role:"alertdialog",onPointerDownOutside:i[0]||(i[0]=H(()=>{},["prevent"])),onInteractOutside:i[1]||(i[1]=H(()=>{},["prevent"])),onOpenAutoFocus:i[2]||(i[2]=()=>{oe(()=>{var c;(c=s.value)==null||c.focus({preventScroll:!0})})})}),{default:n(()=>[d(_.$slots,"default")]),_:3},16))}}),Ee=xe,He=p({__name:"AlertDialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"p"}},setup(l){const a=l;return A(),(t,r)=>(u(),f(e(Te),C(k(a)),{default:n(()=>[d(t.$slots,"default")]),_:3},16))}}),Ne=He,Me=p({__name:"AlertDialogOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(l){const a=l;return A(),(t,r)=>(u(),f(e(Fe),C(k(a)),{default:n(()=>[d(t.$slots,"default")]),_:3},16))}}),Re=Me,Ge=p({__name:"AlertDialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(l){const a=l;return(t,r)=>(u(),f(e(pe),C(k(a)),{default:n(()=>[d(t.$slots,"default")]),_:3},16))}}),Ue=Ge,Ke=p({__name:"AlertDialogRoot",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1}},emits:["update:open"],setup(l,{emit:a}){const o=P(l,a);return A(),(s,_)=>(u(),f(e(_e),D(e(o),{modal:!0}),{default:n(i=>[d(s.$slots,"default",C(k(i)))]),_:3},16))}}),ze=Ke,Se=p({__name:"AlertDialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h2"}},setup(l){const a=l;return A(),(t,r)=>(u(),f(e($e),C(k(a)),{default:n(()=>[d(t.$slots,"default")]),_:3},16))}}),je=Se,Ve=p({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(l){const a=l;return A(),(t,r)=>(u(),f(e(Ie),C(k(a)),{default:n(()=>[d(t.$slots,"default")]),_:3},16))}}),Le=Ve;const x=p({__name:"AlertDialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean}},emits:["update:open"],setup(l,{emit:a}){const o=P(l,a);return(s,_)=>(u(),f(e(ze),C(k(e(o))),{default:n(()=>[d(s.$slots,"default")]),_:3},16))}});x.__docgenInfo={exportName:"default",displayName:"AlertDialog",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert-dialog/AlertDialog.vue"]};const L=p({__name:"AlertDialogAction",props:{asChild:{type:Boolean},as:{},class:{},variant:{}},setup(l){const a=l,t=F(()=>{const{class:r,...o}=a;return o});return(r,o)=>{const s=h;return u(),f(s,D(t.value,{class:e(B)(e(h),a.class),variant:t.value.variant,size:"md"}),{default:n(()=>[d(r.$slots,"default")]),_:3},16,["class","variant"])}}});L.__docgenInfo={exportName:"default",displayName:"AlertDialogAction",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert-dialog/AlertDialogAction.vue"]};const J=p({__name:"AlertDialogCancel",props:{asChild:{type:Boolean},as:{},class:{},variant:{}},setup(l){const a=l,t=F(()=>{const{class:r,...o}=a;return o});return(r,o)=>{const s=h;return u(),f(s,D(t.value,{class:e(B)(e(h),a.class),variant:t.value.variant||"secondary",size:"md"}),{default:n(()=>[d(r.$slots,"default")]),_:3},16,["class","variant"])}}});J.__docgenInfo={exportName:"default",displayName:"AlertDialogCancel",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert-dialog/AlertDialogCancel.vue"]};const Je=p({name:"AlertDialogContent"}),Q=p({...Je,__name:"AlertDialogContent",props:{forceMount:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(l,{emit:a}){const t=l,o=P(t,a);return(s,_)=>(u(),f(e(Ue),null,{default:n(()=>[O(e(Re),{class:"fixed inset-0 z-50 bg-black-800/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),O(le,{name:"fade-scale"},{default:n(()=>[O(e(Ee),D(e(o),{class:e(B)("rounded-md fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 bg-background p-4 drop-shadow-1 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t.class)}),{default:n(()=>[d(s.$slots,"default",{},void 0,!0)]),_:3},16,["class"])]),_:3})]),_:3}))}}),Qe=ce(Q,[["__scopeId","data-v-62c3bba4"]]);Q.__docgenInfo={exportName:"default",displayName:"AlertDialogContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert-dialog/AlertDialogContent.vue"]};const W=p({__name:"AlertDialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,t=F(()=>{const{class:r,...o}=a;return o});return(r,o)=>(u(),f(e(Ne),D(t.value,{class:e(B)("text-omicron text-black-50",a.class)}),{default:n(()=>[d(r.$slots,"default")]),_:3},16,["class"]))}});W.__docgenInfo={exportName:"default",displayName:"AlertDialogDescription",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert-dialog/AlertDialogDescription.vue"]};const X=p({__name:"AlertDialogFooter",props:{class:{}},setup(l){const a=l;return(t,r)=>(u(),K("div",{class:z(e(B)("flex flex-col-reverse gap-y-2 sm:flex-row sm:justify-end sm:gap-x-2",a.class))},[d(t.$slots,"default")],2))}});X.__docgenInfo={exportName:"default",displayName:"AlertDialogFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert-dialog/AlertDialogFooter.vue"]};const Y=p({__name:"AlertDialogHeader",props:{class:{}},setup(l){const a=l;return(t,r)=>(u(),K("div",{class:z(e(B)("flex flex-col gap-y-4 text-left sm:text-left",a.class))},[d(t.$slots,"default")],2))}});Y.__docgenInfo={exportName:"default",displayName:"AlertDialogHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert-dialog/AlertDialogHeader.vue"]};const Z=p({__name:"AlertDialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,t=F(()=>{const{class:r,...o}=a;return o});return(r,o)=>(u(),f(e(je),D(t.value,{class:e(B)("text-omicron font-bold",a.class)}),{default:n(()=>[d(r.$slots,"default")]),_:3},16,["class"]))}});Z.__docgenInfo={exportName:"default",displayName:"AlertDialogTitle",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert-dialog/AlertDialogTitle.vue"]};const ee=p({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(l){const a=l;return(t,r)=>(u(),f(e(Le),C(k(a)),{default:n(()=>[d(t.$slots,"default")]),_:3},16))}});ee.__docgenInfo={exportName:"default",displayName:"AlertDialogTrigger",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-ui/src/components/alert-dialog/AlertDialogTrigger.vue"]};const mt={title:"Components/AlertDialog",component:x,tags:["autodocs"]},q={args:{open:!1},render:l=>({components:{AlertDialog:x,AlertDialogTrigger:ee,AlertDialogContent:Qe,AlertDialogHeader:Y,AlertDialogTitle:Z,AlertDialogDescription:W,AlertDialogFooter:X,AlertDialogCancel:J,AlertDialogAction:L,GButton:h},setup(){const a=T(!1);return{args:l,open:a}},template:`
      <AlertDialog :open="args.open" @update:open="args.open = $event">
        <AlertDialogTrigger @click="open = true" as-child>
          <GButton>Hapus Akun</GButton>
        </AlertDialogTrigger>

        <AlertDialogContent class="max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat diurungkan. Ini akan menghapus akun Anda secara permanen dan menghapus data Anda dari server kami.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter class="gap-y-4">
            <AlertDialogCancel @click="args.open = false" variant="secondary">
              Tutup
            </AlertDialogCancel>
            <AlertDialogAction variant="destructive">
              Hapus Akun
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `}),parameters:{docs:{source:{code:`

<script setup lang="ts">
    import { ref } from "vue"
    import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialog
    , AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "../src/components/alert-dialog"
    import GButton from "../src/components/button/button.vue"

    const open = ref(false)
<\/script>

<template>
    <AlertDialog :open="open" @update:open="open = $event">
        <AlertDialogTrigger @click="open = true" as-child>
            <GButton>Hapus Akun</GButton>
        </AlertDialogTrigger>

        <AlertDialogContent class="max-w-sm">
            <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <AlertDialogDescription>
                Tindakan ini tidak dapat diurungkan. Ini akan menghapus akun Anda secara permanen dan menghapus data Anda dari server kami.
            </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter class="gap-y-4">
            <AlertDialogCancel @click="open = false" variant="secondary">
                Tutup
            </AlertDialogCancel>
            <AlertDialogAction variant="destructive">
                Hapus Akun
            </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
        `.trim()}}}};var M,R,G;q.parameters={...q.parameters,docs:{...(M=q.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: (args: string) => ({
    components: {
      AlertDialog,
      AlertDialogTrigger,
      AlertDialogContent,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogCancel,
      AlertDialogAction,
      GButton
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <AlertDialog :open="args.open" @update:open="args.open = $event">
        <AlertDialogTrigger @click="open = true" as-child>
          <GButton>Hapus Akun</GButton>
        </AlertDialogTrigger>

        <AlertDialogContent class="max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat diurungkan. Ini akan menghapus akun Anda secara permanen dan menghapus data Anda dari server kami.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter class="gap-y-4">
            <AlertDialogCancel @click="args.open = false" variant="secondary">
              Tutup
            </AlertDialogCancel>
            <AlertDialogAction variant="destructive">
              Hapus Akun
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`

<script setup lang="ts">
    import { ref } from "vue"
    import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialog
    , AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "../src/components/alert-dialog"
    import GButton from "../src/components/button/button.vue"

    const open = ref(false)
<\/script>

<template>
    <AlertDialog :open="open" @update:open="open = $event">
        <AlertDialogTrigger @click="open = true" as-child>
            <GButton>Hapus Akun</GButton>
        </AlertDialogTrigger>

        <AlertDialogContent class="max-w-sm">
            <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <AlertDialogDescription>
                Tindakan ini tidak dapat diurungkan. Ini akan menghapus akun Anda secara permanen dan menghapus data Anda dari server kami.
            </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter class="gap-y-4">
            <AlertDialogCancel @click="open = false" variant="secondary">
                Tutup
            </AlertDialogCancel>
            <AlertDialogAction variant="destructive">
                Hapus Akun
            </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
        \`.trim()
      }
    }
  }
}`,...(G=(R=q.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};const Dt=["Default"];export{q as Default,Dt as __namedExportsOrder,mt as default};

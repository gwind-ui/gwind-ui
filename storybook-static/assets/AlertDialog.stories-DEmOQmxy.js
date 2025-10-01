import{d,r as $,x as te,g as u,f as e,k as j,b as m,o as p,j as r,n as F,m as D,a3 as N,q as oe,y as C,z as k,e as ae,c as b,ab as ne,J as U,O as z}from"./vue.esm-bundler-DAoQZYEK.js";import{_ as O}from"./button-BUVIvCLT.js";import{b as T,u as E}from"./useForwardPropsEmits-CKR2vMz0.js";import{u as se,b as _}from"./useForwardExpose-D9aka3cn.js";import{c as K}from"./createContext-Ddb9PwdX.js";import{a as B}from"./utils-oDltpQaF.js";import{P as w}from"./Primitive-Dw578XAm.js";import{a as le,u as re}from"./useBodyScrollLock-D9FXyOB1.js";import{P as q}from"./Presence-Dx3HIjvu.js";import{_ as ie}from"./DismissableLayer-A7n_gjZN.js";import{g as pe,_ as ue}from"./FocusScope-QjoOSu8P.js";import{u as x}from"./useId-BGYOYX4b.js";import{g as M}from"./getActiveElement-FUKBWQwh.js";import{_ as de}from"./Teleport-oA6MiHP9.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BpnQ1vdY.js";import"./ConfigProvider-DRoX-YQM.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./utils-T_AZzJOL.js";const[y,ge]=K("DialogRoot"),me=d({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(n,{emit:o}){const t=n,a=se(t,"open",o,{defaultValue:t.defaultOpen,passive:t.open===void 0}),l=$(),f=$(),{modal:i}=te(t);return ge({open:a,modal:i,openModal:()=>{a.value=!0},onOpenChange:c=>{a.value=c},onOpenToggle:()=>{a.value=!a.value},contentId:"",titleId:"",descriptionId:"",triggerElement:l,contentElement:f}),(c,g)=>u(c.$slots,"default",{open:e(a),close:()=>a.value=!1})}}),V=d({__name:"DialogContentImpl",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:o}){const t=n,s=o,a=y(),{forwardRef:l,currentElement:f}=_();return a.titleId||(a.titleId=x(void 0,"reka-dialog-title")),a.descriptionId||(a.descriptionId=x(void 0,"reka-dialog-description")),j(()=>{a.contentElement=f,M()!==document.body&&(a.triggerElement.value=M())}),(i,c)=>(p(),m(e(ue),{"as-child":"",loop:"",trapped:t.trapFocus,onMountAutoFocus:c[5]||(c[5]=g=>s("openAutoFocus",g)),onUnmountAutoFocus:c[6]||(c[6]=g=>s("closeAutoFocus",g))},{default:r(()=>[F(e(ie),D({id:e(a).contentId,ref:e(l),as:i.as,"as-child":i.asChild,"disable-outside-pointer-events":i.disableOutsidePointerEvents,role:"dialog","aria-describedby":e(a).descriptionId,"aria-labelledby":e(a).titleId,"data-state":e(pe)(e(a).open.value)},i.$attrs,{onDismiss:c[0]||(c[0]=g=>e(a).onOpenChange(!1)),onEscapeKeyDown:c[1]||(c[1]=g=>s("escapeKeyDown",g)),onFocusOutside:c[2]||(c[2]=g=>s("focusOutside",g)),onInteractOutside:c[3]||(c[3]=g=>s("interactOutside",g)),onPointerDownOutside:c[4]||(c[4]=g=>s("pointerDownOutside",g))}),{default:r(()=>[u(i.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),fe=d({__name:"DialogContentModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:o}){const t=n,s=o,a=y(),l=T(s),{forwardRef:f,currentElement:i}=_();return le(i),(c,g)=>(p(),m(V,D({...t,...e(l)},{ref:e(f),"trap-focus":e(a).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:g[0]||(g[0]=A=>{var v;A.defaultPrevented||(A.preventDefault(),(v=e(a).triggerElement.value)==null||v.focus())}),onPointerDownOutside:g[1]||(g[1]=A=>{const v=A.detail.originalEvent,H=v.button===0&&v.ctrlKey===!0;(v.button===2||H)&&A.preventDefault()}),onFocusOutside:g[2]||(g[2]=A=>{A.preventDefault()})}),{default:r(()=>[u(c.$slots,"default")]),_:3},16,["trap-focus"]))}}),Ae=d({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:o}){const t=n,a=T(o);_();const l=y(),f=$(!1),i=$(!1);return(c,g)=>(p(),m(V,D({...t,...e(a)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:g[0]||(g[0]=A=>{var v;A.defaultPrevented||(f.value||(v=e(l).triggerElement.value)==null||v.focus(),A.preventDefault()),f.value=!1,i.value=!1}),onInteractOutside:g[1]||(g[1]=A=>{var I;A.defaultPrevented||(f.value=!0,A.detail.originalEvent.type==="pointerdown"&&(i.value=!0));const v=A.target;((I=e(l).triggerElement.value)==null?void 0:I.contains(v))&&A.preventDefault(),A.detail.originalEvent.type==="focusin"&&i.value&&A.preventDefault()})}),{default:r(()=>[u(c.$slots,"default")]),_:3},16))}}),De=d({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:o}){const t=n,s=o,a=y(),l=T(s),{forwardRef:f}=_();return(i,c)=>(p(),m(e(q),{present:i.forceMount||e(a).open.value},{default:r(()=>[e(a).modal.value?(p(),m(fe,D({key:0,ref:e(f)},{...t,...e(l),...i.$attrs}),{default:r(()=>[u(i.$slots,"default")]),_:3},16)):(p(),m(Ae,D({key:1,ref:e(f)},{...t,...e(l),...i.$attrs}),{default:r(()=>[u(i.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),[Ye,_e]=K("AlertDialogContent"),ve=d({__name:"AlertDialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:o}){const t=n,a=T(o);_();const l=$();return _e({onCancelElementChange:f=>{l.value=f}}),(f,i)=>(p(),m(e(De),D({...t,...e(a)},{role:"alertdialog",onPointerDownOutside:i[0]||(i[0]=N(()=>{},["prevent"])),onInteractOutside:i[1]||(i[1]=N(()=>{},["prevent"])),onOpenAutoFocus:i[2]||(i[2]=()=>{oe(()=>{var c;(c=l.value)==null||c.focus({preventScroll:!0})})})}),{default:r(()=>[u(f.$slots,"default")]),_:3},16))}}),ye=d({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{default:"p"}},setup(n){const o=n;_();const t=y();return(s,a)=>(p(),m(e(w),D(o,{id:e(t).descriptionId}),{default:r(()=>[u(s.$slots,"default")]),_:3},16,["id"]))}}),Ce=d({__name:"AlertDialogDescription",props:{asChild:{type:Boolean},as:{default:"p"}},setup(n){const o=n;return _(),(t,s)=>(p(),m(e(ye),C(k(o)),{default:r(()=>[u(t.$slots,"default")]),_:3},16))}}),ke=d({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean},as:{}},setup(n){const o=y();return re(!0),_(),(t,s)=>(p(),m(e(w),{as:t.as,"as-child":t.asChild,"data-state":e(o).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:r(()=>[u(t.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),Be=d({__name:"DialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const o=y(),{forwardRef:t}=_();return(s,a)=>{var l;return(l=e(o))!=null&&l.modal.value?(p(),m(e(q),{key:0,present:s.forceMount||e(o).open.value},{default:r(()=>[F(ke,D(s.$attrs,{ref:e(t),as:s.as,"as-child":s.asChild}),{default:r(()=>[u(s.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):ae("",!0)}}}),$e=d({__name:"AlertDialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const o=n;return _(),(t,s)=>(p(),m(e(Be),C(k(o)),{default:r(()=>[u(t.$slots,"default")]),_:3},16))}}),Fe=d({__name:"AlertDialogPortal",props:{to:{},disabled:{type:Boolean},defer:{type:Boolean},forceMount:{type:Boolean}},setup(n){const o=n;return(t,s)=>(p(),m(e(de),C(k(o)),{default:r(()=>[u(t.$slots,"default")]),_:3},16))}}),Oe=d({__name:"AlertDialogRoot",props:{open:{type:Boolean},defaultOpen:{type:Boolean}},emits:["update:open"],setup(n,{emit:o}){const a=E(n,o);return _(),(l,f)=>(p(),m(e(me),D(e(a),{modal:!0}),{default:r(i=>[u(l.$slots,"default",C(k(i)))]),_:3},16))}}),he=d({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{default:"h2"}},setup(n){const o=n,t=y();return _(),(s,a)=>(p(),m(e(w),D(o,{id:e(t).titleId}),{default:r(()=>[u(s.$slots,"default")]),_:3},16,["id"]))}}),be=d({__name:"AlertDialogTitle",props:{asChild:{type:Boolean},as:{default:"h2"}},setup(n){const o=n;return _(),(t,s)=>(p(),m(e(he),C(k(o)),{default:r(()=>[u(t.$slots,"default")]),_:3},16))}}),Te=d({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(n){const o=n,t=y(),{forwardRef:s,currentElement:a}=_();return t.contentId||(t.contentId=x(void 0,"reka-dialog-content")),j(()=>{t.triggerElement.value=a.value}),(l,f)=>(p(),m(e(w),D(o,{ref:e(s),type:l.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(t).open.value||!1,"aria-controls":e(t).open.value?e(t).contentId:void 0,"data-state":e(t).open.value?"open":"closed",onClick:e(t).onOpenToggle}),{default:r(()=>[u(l.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),we=d({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(n){const o=n;return _(),(t,s)=>(p(),m(e(Te),C(k(o)),{default:r(()=>[u(t.$slots,"default")]),_:3},16))}}),P=d({__name:"AlertDialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean}},emits:["update:open"],setup(n,{emit:o}){const a=E(n,o);return(l,f)=>(p(),m(e(Oe),C(k(e(a))),{default:r(()=>[u(l.$slots,"default")]),_:3},16))}});P.__docgenInfo={exportName:"default",displayName:"AlertDialog",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert-dialog/AlertDialog.vue"]};const L=d({__name:"AlertDialogAction",props:{asChild:{type:Boolean},as:{type:[String,Object,Function]},class:{},variant:{}},setup(n){const o=n,t=b(()=>{const{class:s,...a}=o;return a});return(s,a)=>{const l=O;return p(),m(l,D(t.value,{class:e(B)(e(O),o.class),variant:t.value.variant,size:"md"}),{default:r(()=>[u(s.$slots,"default")]),_:3},16,["class","variant"])}}});L.__docgenInfo={exportName:"default",displayName:"AlertDialogAction",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert-dialog/AlertDialogAction.vue"]};const J=d({__name:"AlertDialogCancel",props:{asChild:{type:Boolean},as:{type:[String,Object,Function]},class:{},variant:{}},setup(n){const o=n,t=b(()=>{const{class:s,...a}=o;return a});return(s,a)=>{const l=O;return p(),m(l,D(t.value,{class:e(B)(e(O),o.class),variant:t.value.variant||"secondary",size:"md"}),{default:r(()=>[u(s.$slots,"default")]),_:3},16,["class","variant"])}}});J.__docgenInfo={exportName:"default",displayName:"AlertDialogCancel",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert-dialog/AlertDialogCancel.vue"]};const Ie=d({name:"AlertDialogContent"}),Q=d({...Ie,__name:"AlertDialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{type:[String,Object,Function]},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:o}){const t=n,a=E(t,o);return(l,f)=>(p(),m(e(Fe),null,{default:r(()=>[F(e($e),{class:"fixed inset-0 z-50 bg-black-800/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),F(ne,{name:"fade-scale"},{default:r(()=>[F(e(ve),D(e(a),{class:e(B)("rounded-md fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 bg-background p-4 drop-shadow-1 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t.class)}),{default:r(()=>[u(l.$slots,"default",{},void 0,!0)]),_:3},16,["class"])]),_:3})]),_:3}))}}),xe=ce(Q,[["__scopeId","data-v-62c3bba4"]]);Q.__docgenInfo={exportName:"default",displayName:"AlertDialogContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert-dialog/AlertDialogContent.vue"]};const W=d({__name:"AlertDialogDescription",props:{asChild:{type:Boolean},as:{type:[String,Object,Function]},class:{}},setup(n){const o=n,t=b(()=>{const{class:s,...a}=o;return a});return(s,a)=>(p(),m(e(Ce),D(t.value,{class:e(B)("text-omicron text-black-50",o.class)}),{default:r(()=>[u(s.$slots,"default")]),_:3},16,["class"]))}});W.__docgenInfo={exportName:"default",displayName:"AlertDialogDescription",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert-dialog/AlertDialogDescription.vue"]};const X=d({__name:"AlertDialogFooter",props:{class:{}},setup(n){const o=n;return(t,s)=>(p(),U("div",{class:z(e(B)("flex flex-col-reverse gap-y-2 sm:flex-row sm:justify-end sm:gap-x-2",o.class))},[u(t.$slots,"default")],2))}});X.__docgenInfo={exportName:"default",displayName:"AlertDialogFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert-dialog/AlertDialogFooter.vue"]};const Y=d({__name:"AlertDialogHeader",props:{class:{}},setup(n){const o=n;return(t,s)=>(p(),U("div",{class:z(e(B)("flex flex-col gap-y-4 text-left sm:text-left",o.class))},[u(t.$slots,"default")],2))}});Y.__docgenInfo={exportName:"default",displayName:"AlertDialogHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert-dialog/AlertDialogHeader.vue"]};const Z=d({__name:"AlertDialogTitle",props:{asChild:{type:Boolean},as:{type:[String,Object,Function]},class:{}},setup(n){const o=n,t=b(()=>{const{class:s,...a}=o;return a});return(s,a)=>(p(),m(e(be),D(t.value,{class:e(B)("text-omicron font-bold",o.class)}),{default:r(()=>[u(s.$slots,"default")]),_:3},16,["class"]))}});Z.__docgenInfo={exportName:"default",displayName:"AlertDialogTitle",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert-dialog/AlertDialogTitle.vue"]};const ee=d({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean},as:{type:[String,Object,Function]}},setup(n){const o=n;return(t,s)=>(p(),m(e(we),C(k(o)),{default:r(()=>[u(t.$slots,"default")]),_:3},16))}});ee.__docgenInfo={exportName:"default",displayName:"AlertDialogTrigger",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/alert-dialog/AlertDialogTrigger.vue"]};const Ze={title:"Components/AlertDialog",component:P,tags:["autodocs"]},h={args:{open:!1},render:n=>({components:{AlertDialog:P,AlertDialogTrigger:ee,AlertDialogContent:xe,AlertDialogHeader:Y,AlertDialogTitle:Z,AlertDialogDescription:W,AlertDialogFooter:X,AlertDialogCancel:J,AlertDialogAction:L,GButton:O},setup(){const o=$(!1);return{args:n,open:o}},template:`
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
        `.trim()}}}};var R,S,G;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(S=h.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};const et=["Default"];export{h as Default,et as __namedExportsOrder,Ze as default};

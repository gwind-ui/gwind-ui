import{d as h,J as p,O as d,f as s,M as k,g as l,a as B,o as m,S as $,b as G,j as S,p as q,r as M}from"./vue.esm-bundler-DAoQZYEK.js";import{a as c}from"./utils-oDltpQaF.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as j}from"./Primitive-Dw578XAm.js";const O=["data-number"],U={key:1},_=h({__name:"ListItem",props:{class:{},item:{},index:{}},setup(n){const e=n,r=B("listType");return(t,T)=>(m(),p("li",{"data-number":s(r)==="ordered"?e.index+1:"•",class:d(s(c)("relative flex flex-row gap-4 text-omicron before:items-center before:flex before:justify-center before:w-6 before:h-6 ",s(r)==="ordered"?"ordered-item before:font-bold before:bg-lime-100 before:rounded-full before:text-lime-500":"unordered-item before:text-lime-500",t.$slots.customIcon&&"before:hidden",e.class))},[t.$slots.customIcon?(m(),p("div",{key:0,class:d(s(c)("flex flex-row gap-4 items-center"))},[k("div",{class:d(s(c)("w-6 h-6 rounded-full bg-lime-100 text-lime-500 flex items-center px-[4px]"))},[l(t.$slots,"customIcon",{},void 0,!0)],2),l(t.$slots,"default",{},void 0,!0)],2)):(m(),p("div",U,[l(t.$slots,"default",{},void 0,!0)]))],10,O))}}),f=N(_,[["__scopeId","data-v-b7ff20a4"]]);_.__docgenInfo={exportName:"default",displayName:"ListItem",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"item",required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"},{name:"number"}]}},{name:"index",required:!0,type:{name:"number"}}],slots:[{name:"customIcon"},{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/list/ListItem.vue"]};const u=h({__name:"ListGroup",props:{class:{},type:{}},setup(n){const e=n,r=$(e,"type");return q("listType",r),(t,T)=>(m(),G(s(j),{as:e.type==="ordered"?"ol":"ul",class:d(s(c)("flex flex-col gap-4"))},{default:S(()=>[l(t.$slots,"default")]),_:3},8,["as","class"]))}});u.__docgenInfo={exportName:"default",displayName:"ListGroup",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"ordered"'},{name:'"unordered"'}]}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/asd/gwind-vue/src/components/list/ListGroup.vue"]};const F={title:"Components/ListGroup",component:u,subcomponents:{ListItem:f},tags:["autodocs"],argTypes:{type:{control:"select",options:["ordered","unordered"]}},args:{type:"unordered",default:`
            <ListItem v-for="(item, index) in items" :key="index" :index="index">
          {{ item.label }}
        </ListItem>
        `},render:n=>({components:{ListGroup:u,ListItem:f},setup(){const e=M([{label:"Item 1",value:"item-1"},{label:"Item 2",value:"item-2"},{label:"Item 3",value:"item-3"}]);return{args:n,items:e}},template:`
      <ListGroup v-bind="args">
        ${n.default}
      </ListGroup>
    `})},o={args:{type:"ordered"}},i={args:{type:"unordered"}},a={args:{default:`
           <div v-for="(item, index) in items" :key="index">
                            <ListItem v-if="index < 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.4219 5.61269L20.2831 5.477C19.519 4.7986 18.3925 4.84383 17.6767 5.61269L9.65023 14.2353L6.32326 10.6612C5.56281 9.84431 4.33855 9.84431 3.57811 10.6612C2.8073 11.4893 2.8073 12.8393 3.57811 13.6674L7.75548 18.155C8.80431 19.2817 10.4961 19.2817 11.545 18.155L20.4219 8.61882C21.1445 7.84253 21.1897 6.60745 20.5574 5.77381L20.4219 5.61269Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>

                            <ListItem v-if="index === 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>
                        </div>
        `}};var L,v,x;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: "ordered"
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,C,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "unordered"
  }
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var w,y,I;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    default: \`
           <div v-for="(item, index) in items" :key="index">
                            <ListItem v-if="index < 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.4219 5.61269L20.2831 5.477C19.519 4.7986 18.3925 4.84383 17.6767 5.61269L9.65023 14.2353L6.32326 10.6612C5.56281 9.84431 4.33855 9.84431 3.57811 10.6612C2.8073 11.4893 2.8073 12.8393 3.57811 13.6674L7.75548 18.155C8.80431 19.2817 10.4961 19.2817 11.545 18.155L20.4219 8.61882C21.1445 7.84253 21.1897 6.60745 20.5574 5.77381L20.4219 5.61269Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>

                            <ListItem v-if="index === 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>
                        </div>
        \`
  }
}`,...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const P=["Ordered","Unordered","CustomList"];export{a as CustomList,o as Ordered,i as Unordered,P as __namedExportsOrder,F as default};

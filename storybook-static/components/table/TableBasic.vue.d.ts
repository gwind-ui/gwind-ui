import { HTMLAttributes } from 'vue';
type ColumnBase = {
    key: string;
    label: string;
    isAction?: boolean;
    showAction?: boolean;
    align?: string;
    sortable?: boolean;
    class?: string;
    [extra: string]: unknown;
};
type DataBase = {
    id: string | number;
    class?: string;
    [extra: string]: unknown;
};
type __VLS_Props = {
    class?: HTMLAttributes["class"];
    style?: HTMLAttributes["style"];
    data: DataBase[];
    columns: ColumnBase[];
    tableWidth?: "fixed" | "auto";
    noDataMessage?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<string, (_: {
        value: unknown;
        item: DataBase;
    }) => any>> & {
        'table-header'?(_: {}): any;
        tableAction?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    data: DataBase[];
    noDataMessage: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

import { ComboboxContentProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = ComboboxContentProps & {
    class?: HTMLAttributes["class"];
    open?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    open: (...args: any[]) => void;
    close: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOpen?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    sideOffset: number;
    align: "end" | "center" | "start";
    position: "inline" | "popper";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

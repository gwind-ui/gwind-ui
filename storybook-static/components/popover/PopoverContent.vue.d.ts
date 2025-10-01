import { HTMLAttributes } from 'vue';
import { PopoverContentProps } from 'reka-ui';
type __VLS_Props = PopoverContentProps & {
    class?: HTMLAttributes["class"];
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
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => any;
    focusOutside: (event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any;
    interactOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any;
    openAutoFocus: (event: Event) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => any) | undefined;
    onFocusOutside?: ((event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any) | undefined;
    onInteractOutside?: ((event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}>, {
    sideOffset: number;
    align: "end" | "center" | "start";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

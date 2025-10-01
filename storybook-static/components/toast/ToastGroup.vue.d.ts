import { HTMLAttributes } from 'vue';
import { ToastVariants } from '.';
import { ToastProviderProps, ToastRootProps } from 'reka-ui';
type __VLS_Props = ToastProviderProps & ToastRootProps & {
    class?: HTMLAttributes["class"];
    variant?: Exclude<ToastVariants["variant"], "default">;
    closeAble?: boolean;
    closeTapOutside?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        triggerToast?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    pause: () => any;
    "update:open": (value: boolean) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    resume: () => any;
    swipeStart: (event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any;
    swipeMove: (event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any;
    swipeCancel: (event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any;
    swipeEnd: (event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onPause?: (() => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onResume?: (() => any) | undefined;
    onSwipeStart?: ((event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any) | undefined;
    onSwipeMove?: ((event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any) | undefined;
    onSwipeCancel?: ((event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any) | undefined;
    onSwipeEnd?: ((event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any) | undefined;
}>, {
    closeAble: boolean;
    closeTapOutside: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

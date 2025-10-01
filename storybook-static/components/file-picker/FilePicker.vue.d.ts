interface Props {
    file?: File | string;
    imageOnly?: boolean;
    errorText?: string;
    uniqueKey: string;
    helperText?: string;
    showFileURL?: boolean;
    small?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
    };
    refs: {
        fileInput: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    fileDropped: (file: File, key: string) => any;
    fileRemoved: (key: string) => any;
    showUrlData: (url?: string | null | undefined) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onFileDropped?: ((file: File, key: string) => any) | undefined;
    onFileRemoved?: ((key: string) => any) | undefined;
    onShowUrlData?: ((url?: string | null | undefined) => any) | undefined;
}>, {
    small: boolean;
    imageOnly: boolean;
    errorText: string;
    helperText: string;
    showFileURL: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fileInput: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

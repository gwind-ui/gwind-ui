type __VLS_Props = {
    modelValue?: {
        value: string;
        label: string;
    } | null;
    options: Array<{
        value: string;
        label: string;
    }>;
    placeholder?: string;
    isOpen?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: {
        value: string;
        label: string;
    } | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: {
        value: string;
        label: string;
    } | null) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

type __VLS_Props = {
    start?: string;
    end?: string;
    min?: string;
    max?: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    startPlaceholder?: string;
    endPlaceholder?: string;
    sparator?: string;
    position?: "top" | "bottom";
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:start": (value: string) => any;
    "update:end": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:start"?: ((value: string) => any) | undefined;
    "onUpdate:end"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

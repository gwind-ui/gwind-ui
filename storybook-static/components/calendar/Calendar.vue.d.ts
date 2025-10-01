type __VLS_Props = {
    modelValue?: string | Date;
    min?: string | Date;
    max?: string | Date;
    yearClass?: string;
    yearClassContent?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    update: (payload: {
        date: Date;
        year: number;
        month: number;
        day: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onUpdate?: ((payload: {
        date: Date;
        year: number;
        month: number;
        day: number;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    contentCalendarRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;

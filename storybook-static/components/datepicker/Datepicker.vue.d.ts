type __VLS_Props = {
    modelValue?: string;
    placeholder?: string;
    calendarPosition?: "left" | "center" | "right";
    calendarPositionY?: "top" | "bottom" | "auto";
    min?: string;
    max?: string;
    disableTeleport?: boolean;
    disabled?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapperRef: HTMLDivElement;
    inputRef: HTMLInputElement;
    calendarRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;

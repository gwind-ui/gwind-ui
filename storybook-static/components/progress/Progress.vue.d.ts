import { ProgressIndicatorProps, ProgressRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = ProgressRootProps & ProgressIndicatorProps & {
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string[] | undefined) => any;
    "update:max": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string[] | undefined) => any) | undefined;
    "onUpdate:max"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

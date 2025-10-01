import { RadioGroupRootProps, RadioGroupItemProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = RadioGroupItemProps & RadioGroupRootProps & {
    class?: HTMLAttributes["class"];
    label: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (payload: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

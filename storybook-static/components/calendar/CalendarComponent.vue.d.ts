import { DateValue } from '@internationalized/date';
import { CalendarRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = CalendarRootProps & {
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (date: DateValue | undefined) => any;
    "update:placeholder": (date: DateValue) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((date: DateValue | undefined) => any) | undefined;
    "onUpdate:placeholder"?: ((date: DateValue) => any) | undefined;
}>, {
    modelValue: DateValue | DateValue[];
    placeholder: DateValue;
    weekdayFormat: import('reka-ui/date').WeekDayFormat;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

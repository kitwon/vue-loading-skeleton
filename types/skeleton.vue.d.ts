import { PropType } from "vue";
import "./style.css";
declare const _default: import("vue").DefineComponent<{
    prefix: {
        type: StringConstructor;
        default: string;
    };
    count: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    circle: BooleanConstructor;
    loading: {
        type: PropType<any>;
    };
}, unknown, unknown, {
    isLoading(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefix: {
        type: StringConstructor;
        default: string;
    };
    count: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    circle: BooleanConstructor;
    loading: {
        type: PropType<any>;
    };
}>>, {
    circle: boolean;
    prefix: string;
    tag: string;
    duration: number;
    count: number;
}>;
export default _default;

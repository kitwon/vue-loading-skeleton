export declare const DEFAULT_BACKGROUND = "#eeeeee";
export declare const DEFAULT_HIGHLIGHT = "#f5f5f5";
export declare const SkeletonStyle: {
    animation: string;
    backgroundColor: string;
    backgroundImage: string;
};
declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    highlight: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
}, unknown, {
    themeStyle: {
        animation: string;
        backgroundColor: string;
        backgroundImage: string;
    };
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    highlight: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    color: string;
    loading: boolean;
    tag: string;
    duration: number;
    highlight: string;
}>;
export default _default;

import { InjectionKey, ComputedRef } from "vue";
export declare const DEFAULT_BACKGROUND = "#eeeeee";
export declare const DEFAULT_HIGHLIGHT = "#f5f5f5";
export declare const SkeletonStyle: {
    animation: string;
    backgroundColor: string;
    backgroundImage: string;
};
export declare const ThemeStyleProviderKey: InjectionKey<ComputedRef<{
    animation: string;
    backgroundColor: string;
    backgroundImage: string;
}>>;
export declare const ThemeProviderKey: unique symbol;
export declare function createThemeProvider<T>(): InjectionKey<T>;

import { InjectionKey, ComputedRef } from "vue";

export const DEFAULT_BACKGROUND = '#eeeeee';
export const DEFAULT_HIGHLIGHT = '#f5f5f5';
export const SkeletonStyle = {
  animation: '',
  backgroundColor: DEFAULT_BACKGROUND,
  backgroundImage: `linear-gradient(
    90deg,
    ${DEFAULT_BACKGROUND},
    ${DEFAULT_HIGHLIGHT},
    ${DEFAULT_BACKGROUND}
  )`
};

export const ThemeStyleProvider = Symbol('themeStyle') as InjectionKey<ComputedRef<typeof SkeletonStyle>>
export function createThemeProvider<T>() {
  return Symbol('theme') as InjectionKey<T>
}


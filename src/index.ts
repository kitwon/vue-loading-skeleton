import PuSkeleton from './skeleton.vue';
import PuSkeletonTheme from './skeleton-theme.vue';
import { App } from 'vue';

export const Skeleton = PuSkeleton;
export const SkeletonTheme = PuSkeletonTheme;

export default {
  install(Vue: App) {
    Vue.component(Skeleton.name, Skeleton);
    Vue.component(SkeletonTheme.name, SkeletonTheme);
  }
};

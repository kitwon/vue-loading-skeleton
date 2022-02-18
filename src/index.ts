import Skeleton from './skeleton.vue';
import SkeletonTheme from './skeleton-theme.vue';
import { App } from 'vue';

export {
  Skeleton,
  SkeletonTheme
};

export default {
  install(Vue: App) {
    Vue.component(Skeleton.name, Skeleton);
    Vue.component(SkeletonTheme.name, SkeletonTheme);
  }
};

import Skeleton from './skeleton.vue';
import SkeletonTheme from './skeleton-theme.vue';

export {
  Skeleton,
  SkeletonTheme
};

export default {
  install(Vue) {
    Vue.component(Skeleton.name, Skeleton);
    Vue.component(SkeletonTheme.name, SkeletonTheme);
  }
};

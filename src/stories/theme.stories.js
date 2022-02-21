import Item from "./item.vue";
import { SkeletonTheme } from "../../dist/vue-loading-skeleton.es";

export default {
  title: "Skeleton Theme"
};

export const ChangeTheme = () => {
  return {
    components: { Item, SkeletonTheme },
    template: `
      <SkeletonTheme color="#e6f3fd" highlight="#eef6fd" :duration="2">
        <Item :data="{}" />
      </SkeletonTheme>
    `
  };
};

export const DisableAllAnimation = () => {
  return {
    components: { Item, SkeletonTheme },
    template: `
      <SkeletonTheme :duration="0">
        <Item :data="{}" />
        <Item :data="{}" />
      </SkeletonTheme>
    `
  };
};

export const ControlAllLoadingStatus = () => {
  return {
    components: { SkeletonTheme, Item },
    data() {
      return {
        loading: true
      };
    },
    computed: {
      itemData() {
        return Array(4).fill(0).map((_, i) => ({
          img: `./image${i}.png`,
          title: `Item Title ${i}`,
          body: `Make beautiful, animated loading skeletons that automatically adapt to your app ${i}.`
        }))
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    },
    template: `
      <SkeletonTheme :loading="loading" style="width: 500px">
        <Item v-for="(v, i) in itemData" :key="i" :data="v" />
      </SkeletonTheme>
    `
  };
};

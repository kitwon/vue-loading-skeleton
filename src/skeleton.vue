<script lang="ts">
/* eslint-disable vue/require-default-prop */
import { h, defineComponent, PropType, inject, computed, Slot } from "vue";
import { ThemeStyleProviderKey, SkeletonStyle } from "./composition/theme";
import { ThemeProvider } from "./skeleton-theme.vue";

import "./style.css";

const isEmptyVNode = (children: ReturnType<Slot> | undefined) => {
  if (!children) return true;

  const [firstNode] = children;
  let str = firstNode.children;

  return !firstNode.el && !str;
};

export default defineComponent({
  name: "PuSkeleton",
  props: {
    prefix: {
      type: String,
      default: "pu"
    },
    count: {
      type: Number,
      default: 1
    },
    duration: {
      type: Number,
      default: 1.5
    },
    tag: {
      type: String,
      default: "span"
    },
    width: {
      type: [String, Number],
      default: 0
    },
    height: {
      type: [String, Number],
      default: 0
    },
    circle: Boolean,
    loading: {
      type: [Boolean, Object, Array] as PropType<any>,
      default: undefined
    }
  },
  setup(props, { slots }) {
    const theme = inject(ThemeProvider, {});
    const themeStyle = inject(ThemeStyleProviderKey, {
      value: { ...SkeletonStyle }
    } as any);

    const isLoading = computed(() => {
      return typeof theme?.loading !== "undefined"
        ? theme.loading
        : props.loading;
    });
    const classes = computed(() => {
      return [`${props.prefix}-skeleton`];
    });

    const styles = computed(() => {
      if (!themeStyle) return {}

      const s: any = { ...themeStyle?.value };
      if (props.duration) {
        s.animation = `SkeletonLoading ${props.duration}s ease-in-out infinite`;
      } else {
        s.backgroundImage = "";
      }
      if (props.width) s.width = props.width;
      if (props.height) s.height = props.height;
      if (props.circle) s.borderRadius = "50%";

      return s;
    });

    return () => {
      const defaultSlot = slots.default?.();
      const showLoading =
        typeof isLoading.value !== "undefined"
          ? isLoading.value
          : isEmptyVNode(defaultSlot);

      const elements = Array(showLoading ? props.count : 0)
        .fill(0)
        .map((_, idx) => {
          return h("span", {
            key: idx,
            class: classes.value,
            style: styles.value,
            innerHTML: "&zwnj;"
          });
        });

      if (props.tag) {
        return h(props.tag, !showLoading ? defaultSlot : elements);
      }

      return !showLoading ? defaultSlot : h("span", elements);
    };
  }
});
</script>

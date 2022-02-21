<script lang="ts">
import { h, defineComponent, computed, provide } from "vue";
import {
  ThemeStyleProvider,
  createThemeProvider,
  DEFAULT_BACKGROUND,
  DEFAULT_HIGHLIGHT,
  SkeletonStyle
} from "./composition/theme";

export const ThemeProvider =
  createThemeProvider<typeof SkeletonTheme["props"]>();

const SkeletonTheme = defineComponent({
  name: "PuSkeletonTheme",
  props: {
    color: {
      type: String,
      default: DEFAULT_BACKGROUND
    },
    highlight: {
      type: String,
      default: DEFAULT_HIGHLIGHT
    },
    duration: {
      type: Number,
      default: 1.5
    },
    tag: {
      type: String,
      default: "div"
    },
    loading: {
      type: Boolean,
      default: undefined
    }
  },
  setup(props, { slots }) {
    const themeStyle = computed(() => {
      const { color, highlight, duration } = props;
      const style = { ...SkeletonStyle };
      style.backgroundColor = color;
      style.backgroundImage = `linear-gradient(
        90deg,
        ${color},
        ${highlight},
        ${color}
      )`;
      if (duration) {
        style.animation = `SkeletonLoading ${duration}s ease-in-out infinite`;
      } else {
        style.animation = "";
        style.backgroundImage = "";
      }
      return style;
    });

    provide(ThemeStyleProvider, themeStyle);
    provide(ThemeProvider, props);

    return () => {
      if (props.tag) {
        return h(props.tag, slots.default?.());
      }
      return slots.default?.()[0];
    };
  }
});

export default SkeletonTheme;
</script>

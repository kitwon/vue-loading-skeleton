var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { defineComponent, computed, provide, h, inject } from "vue";
const DEFAULT_BACKGROUND = "#eeeeee";
const DEFAULT_HIGHLIGHT = "#f5f5f5";
const SkeletonStyle = {
  animation: "",
  backgroundColor: DEFAULT_BACKGROUND,
  backgroundImage: `linear-gradient(
    90deg,
    ${DEFAULT_BACKGROUND},
    ${DEFAULT_HIGHLIGHT},
    ${DEFAULT_BACKGROUND}
  )`
};
const ThemeStyleProviderKey = Symbol("_themeStyle");
const ThemeProviderKey = Symbol("_theme");
function createThemeProvider() {
  return ThemeProviderKey;
}
const ThemeProvider = createThemeProvider();
const SkeletonTheme$1 = defineComponent({
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
      default: void 0
    }
  },
  setup(props, { slots }) {
    const themeStyle = computed(() => {
      const { color, highlight, duration } = props;
      const style2 = __spreadValues({}, SkeletonStyle);
      style2.backgroundColor = color;
      style2.backgroundImage = `linear-gradient(
        90deg,
        ${color},
        ${highlight},
        ${color}
      )`;
      if (duration) {
        style2.animation = `SkeletonLoading ${duration}s ease-in-out infinite`;
      } else {
        style2.animation = "";
        style2.backgroundImage = "";
      }
      return style2;
    });
    provide(ThemeStyleProviderKey, themeStyle);
    provide(ThemeProvider, props);
    return () => {
      var _a, _b;
      if (props.tag) {
        return h(props.tag, (_a = slots.default) == null ? void 0 : _a.call(slots));
      }
      return (_b = slots.default) == null ? void 0 : _b.call(slots)[0];
    };
  }
});
const _sfc_main$1 = SkeletonTheme$1;
var style = "";
const isEmptyVNode = (children) => {
  if (!children)
    return true;
  const [firstNode] = children;
  let str = firstNode.children;
  return !firstNode.el && !str;
};
const _sfc_main = defineComponent({
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
      type: [Boolean, Object, Array],
      default: void 0
    }
  },
  setup(props, { slots }) {
    const theme = inject(ThemeProvider, {});
    const themeStyle = inject(ThemeStyleProviderKey, {
      value: __spreadValues({}, SkeletonStyle)
    });
    const isLoading = computed(() => {
      return typeof (theme == null ? void 0 : theme.loading) !== "undefined" ? theme.loading : props.loading;
    });
    const classes = computed(() => {
      return [`${props.prefix}-skeleton`];
    });
    const styles = computed(() => {
      if (!themeStyle)
        return {};
      const s = __spreadValues({}, themeStyle == null ? void 0 : themeStyle.value);
      if (props.duration) {
        s.animation = `SkeletonLoading ${props.duration}s ease-in-out infinite`;
      } else {
        s.backgroundImage = "";
      }
      if (props.width)
        s.width = props.width;
      if (props.height)
        s.height = props.height;
      if (props.circle)
        s.borderRadius = "50%";
      return s;
    });
    return () => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const showLoading = typeof isLoading.value !== "undefined" ? isLoading.value : isEmptyVNode(defaultSlot);
      const elements = Array(showLoading ? props.count : 0).fill(0).map((_, idx) => {
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
const Skeleton = _sfc_main;
const SkeletonTheme = _sfc_main$1;
var index = {
  install(Vue) {
    Vue.component(Skeleton.name, Skeleton);
    Vue.component(SkeletonTheme.name, SkeletonTheme);
  }
};
export { Skeleton, SkeletonTheme, index as default };

<script lang="jsx">
export const DEFAULT_BACKGROUND = '#eeeeee';
export const DEFAULT_HIGHLIGHT = '#f5f5f5';
export const SkeletonStyle = {
  backgroundColor: DEFAULT_BACKGROUND,
  backgroundImage: `linear-gradient(
    90deg,
    ${DEFAULT_BACKGROUND},
    ${DEFAULT_HIGHLIGHT},
    ${DEFAULT_BACKGROUND}
  )`
};

export default {
  name: 'PuSkeletonTheme',
  provide() {
    return {
      _themeStyle: this.themeStyle,
      _skeletonTheme: this
    };
  },
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
      default: 'div'
    },
    loading: {
      type: Boolean,
      default: undefined
    }
  },
  data() {
    return {
      themeStyle: { ...SkeletonStyle }
    };
  },
  render(h) {
    const { color, highlight, duration } = this;
    this.themeStyle.backgroundColor = color;
    this.themeStyle.backgroundImage = `linear-gradient(
      90deg,
      ${color},
      ${highlight},
      ${color}
    )`;
    if (duration) {
      this.themeStyle.animation = `SkeletonLoading ${duration}s ease-in-out infinite`;
    } else {
      this.themeStyle.animation = '';
      this.themeStyle.backgroundImage = '';
    }

    if (this.tag) {
      return h(this.tag, this.$slots.default);
    }
    return this.$slots.default[0];
  }
};
</script>

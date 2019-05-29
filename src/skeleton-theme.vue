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
}

export default {
  name: 'PuSkeletonTheme',
  provide() {
    return {
      _themeStyle: this.themeStyle
    }
  },
  props: {
    color: {
      type: String,
      default: DEFAULT_BACKGROUND
    },
    highlight: {
      type: String,
      default: DEFAULT_HIGHLIGHT
    }
  },
  data() {
    return {
      themeStyle: { ...SkeletonStyle }
    }
  },
  render(h) {
    const { color, highlight } = this;
    this.themeStyle.backgroundColor = color;
    this.themeStyle.backgroundImage = `linear-gradient(
      90deg,
      ${color},
      ${highlight},
      ${color}
    )`;

    return this.$slots.default;
  }
}
</script>

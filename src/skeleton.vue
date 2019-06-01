<script lang="jsx">
import { SkeletonStyle } from './skeleton-theme.vue';

const isEmptyVNode = (children) => {
  if (!children) return true;

  const [firstNode] = children;
  let str = firstNode.text;
  if (str) {
    // remove all line-break and space character
    str = str.replace(/(\n|\r\n|\s)/g, '');
  }

  return typeof firstNode.tag === 'undefined' && !str;
};

export default {
  name: 'PuSkeleton',
  inject: {
    themeStyle: {
      from: '_themeStyle',
      default: SkeletonStyle
    },
    theme: {
      from: '_skeletonTheme',
      default: ({})
    }
  },
  props: {
    prefix: {
      type: String,
      default: 'pu'
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
      default: 'span'
    },
    width: [String, Number],
    height: [String, Number],
    circle: Boolean,
    loading: undefined
  },
  computed: {
    isLoading() {
      return typeof this.theme.loading !== 'undefined' ? this.theme.loading : this.loading;
    }
  },
  render(h) {
    const {
      width, height, duration, prefix, circle, count, tag, isLoading
    } = this;
    const classes = [`${prefix}-skeleton`];
    const elements = [];
    const styles = { ...this.themeStyle };

    if (duration) {
      styles.animation = `SkeletonLoading ${duration}s ease-in-out infinite`;
    } else {
      styles.backgroundImage = '';
    }
    if (width) styles.width = width;
    if (height) styles.height = height;
    if (circle) styles.borderRadius = '50%';

    for (let i = 0; i < count; i += 1) {
      elements.push(
        <span
          key={i}
          class={classes}
          style={styles}>
          &zwnj;
        </span>
      );
    }

    const showLoading = typeof isLoading !== 'undefined' ? isLoading : isEmptyVNode(this.$slots.default);
    if (tag) {
      return h(tag, !showLoading ? this.$slots.default : elements);
    }
    return (!showLoading ? this.$slots.default : <span>{ elements }</span>);
  }
};
</script>

<style>
.pu-skeleton {
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 3px;
  display: inline-block;
  line-height: 1;
  width: 100%;
  height: inherit;
}

@keyframes SkeletonLoading {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}
</style>

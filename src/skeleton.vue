<script lang="jsx">
import { SkeletonStyle } from './skeleton-theme.vue';

const isEmptyVNode = node => {
  let str = node.text;
  if (str) {
    // remove all line-break and space character
    str = node.text.replace(/(\n|\r\n|\s)/g, '');
  }

  return typeof node.tag === 'undefined' && !str;
}

export default {
  name: 'PuSkeleton',
  inject: {
    themeStyle: {
      from: '_themeStyle',
      default: SkeletonStyle
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
      default: 1.2
    },
    width: [String, Number],
    height: [String, Number],
    circle: Boolean,
    loading: undefined
  },
  render(h) {
    const { width, height, duration, prefix, loading, circle, count } = this;
    const classes = [`${prefix}-skeleton`];
    const elements = [];
    const styles = {
      animation: `SkeletonLoading ${duration}s ease-in-out infinite`
    }
    if (width) styles.width = width;
    if (height) styles.height = height;
    if (circle) styles.borderRadius = '50%';

    for (let i = 0; i < count; i += 1) {
      elements.push(
        <span
          key={i}
          class={classes}
          style={{ ...styles, ...this.themeStyle }}>
          &zwnj;
        </span>
      )
    }

    const showLoading = typeof loading !== 'undefined' ? loading : isEmptyVNode(this.$slots.default[0]);
    return (!showLoading ? this.$slots.default : <span>{ elements }</span>);
  }
};
</script>

<style lang="less">
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

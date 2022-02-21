<template>
  <div class="item">
    <div class="item__photo">
      <PuSkeleton circle height="50px" v-bind="$attrs">
        {{ data.img }}
      </PuSkeleton>
    </div>
    <div class="item__meta">
      <div class="item__title">
        <PuSkeleton v-bind="$attrs">{{ data.title }}</PuSkeleton>
      </div>
      <div class="item__info">
        <PuSkeleton :count="2" v-bind="$attrs">{{ data.body }}</PuSkeleton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Skeleton } from '../../dist/vue-loading-skeleton.es'
import '../../dist/style.css'
// import { Skeleton } from '../index'

export default {
  name: 'SkeletonItem',
  components: { PuSkeleton: Skeleton },
  props: {
    data: {
      type: Object as PropType<any>,
      required: true,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  color: #333;
  margin-bottom: 30px;
}

.item > * {
  display: inline-block;
}

.item__photo {
  margin-right: 15px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  color: transparent;
  background: #eee;
}

.item__meta {
  flex: 1;
}

.item__title {
  width: 10em;
  font-size: 24px;
  margin-bottom: 10px;
}

.item__info {
  line-height: 1.4;
}
</style>

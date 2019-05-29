<template functional>
  <div class="item">
    <div class="item__photo">
      <template v-if="props.data.img">
        {{ props.data.img }}
      </template>
      <PuSkeleton circle height="50px" v-else>
      </PuSkeleton>
    </div>
    <div class="item__meta">
      <div class="item__title">
        <template v-if="props.data.title">{{props.data.title}}</template>
        <PuSkeleton v-else />
      </div>
      <div class="item__info">
        <template v-if="props.data.body">{{props.data.body}}</template>
        <PuSkeleton v-else :count="2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      default: () =>  ({})
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  color: #333;
  margin-bottom: 30px;

  > * {
    display: inline-block;
  }

  &__photo {
    margin-right: 15px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    color: transparent;
    background: #eee;
  }

  &__meta {
    flex: 1;
  }

  &__title {
    width: 10em;
    font-size: 24px;
    margin-bottom: 10px;
  }

  &__info {
    line-height: 1.4;
  }
}
</style>

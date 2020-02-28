# 💅🏻 Vue-loading-skeleton

Make beautiful loading skeleton that automatically adapt your vue app.

[💡Demos of storybook](https://kitwon.github.io/vue-loading-skeleton/)

[📕中文文档](https://github.com/kitwon/vue-loading-skeleton/blob/master/README-CN.md)

## Base usage
Install by `npm`/`yarn` with vue-loading-skeleton

```jsx
import { Skeleton } from 'vue-loading-skeleton';

// In jsx template
<Skeleton />
<Skeleton count={5} />
```

Or register for global component

```jsx
import Vue from 'vue';
import Skeleton from 'vue-loading-skeleton';

Vue.use(Skeleton)

// In jsx template
<PuSkeleton />
<PuSkeleton count={5} />
```

## 🌈 Introduction

### Adapts to the styles you have defined
The `<Skeleton/>` component is design to used directly in your vue component. It can replace the main content while page still in loading. So you don't need to prepare a skeleton screen meticulously to match the `font-size`, `margin` or another style your content takes on, wrap the content with the `<Skeleton/>` component, it will automatically fill the correct dimensions.

For example:
```html
<div class="item">
  <div class="item__photo">
    <PuSkeleton circle height="50px">
      {{ props.data.img }}
    </PuSkeleton>
  </div>
  <div class="item__meta">
    <div class="item__title">
      <PuSkeleton>{{ props.data.title }}</PuSkeleton>
    </div>
    <div class="item__info">
      <PuSkeleton :count="2">{{ props.data.body }}</PuSkeleton>
    </div>
  </div>
</div>
```

### ⚠️ Notice
The skeleton component will check the `tag` and `text` in the first child node. If you find the component work is not in expect, you should use `v-if` or `loading props`, and report the issues to me.

## 📔Usage

### Base usage
```html
<div class="item">
  <Skeleton>
    {{ content }}
  </Skeleton>
</div>
```

### Use v-if
```html
<div class="item">
  <template v-if="content">{{ content }}</template>
  <Skeleton v-else />
</div>
```

### List Skeleton
In many cases, you need a skeleton list to fulfill a listing page. You can set the list data default to the number. Such as:

```html
<div class="item" v-for="(item, index) in data" :key="index">
  <Skeleton>
    {{ item.content }}
  </Skeleton>
</div>
```

```javascript
export default {
  data() {
    return {
      data: 10
    }
  },
  async created() {
    // some data fetch action
    const { data } = await fetchData();
    this.data = data;
  }
}
```

### Theming
Using the `<SkeletonTheme />` component, you can change the color, duration of all skeleton components below it:

```jsx
import { Skeleton, Skeleton } form 'vue-loading-skeleton';

<SkeletonTheme color="#e6f3fd" highlight="#eef6fd">
  <div class="item">
    <div class="item__photo">
      <PuSkeleton circle height="50px">
        {{ props.data.img }}
      </PuSkeleton>
    </div>
    <div class="item__meta">
      <div class="item__title">
        <PuSkeleton>{{ props.data.title }}</PuSkeleton>
      </div>
      <div class="item__info">
        <PuSkeleton :count="2">{{ props.data.body }}</PuSkeleton>
      </div>
    </div>
  </div>
</SkeletonTheme>
```

### Skeleton props
| props    | description                          | type    | default   |
| -------- | ------------------------------------ | ------- | --------- |
| count    | rows count of component              | number  | 1         |
| duration | animation duration time, 0 as close  | number  | 1.5       |
| width    | component width                      | string  |           |
| height   | component height                     | string  |           |
| circle   | make the skeleton look like a circle | boolean | false     |
| loading  | skeleton loading status              | boolean | undefined |

### SkeletonTheme props
| props     | description                             | type    | default   |
| --------- | --------------------------------------- | ------- | --------- |
| color     | skeleton background color               | string  | #eeeeee   |
| highlight | animation highlight color               | string  | #f5f5f5   |
| duration  | set duration of all skeleton            | number  | 1.5       |
| loading   | control loading status of all skeletons | boolean | undefined |
| tag       | theme container tag name                | string  | div       |

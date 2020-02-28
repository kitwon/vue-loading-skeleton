# 💅🏻 Vue-loading-skeleton

能自动适应外层样式的vue骨架屏组件。

[💡Demos of storybook](https://kitwon.github.io/vue-loading-skeleton/)

## 安装使用
`npm install vue-loading-skeleton -S`
or
`yarn add vue-loading-skeleton`

```jsx
import { Skeleton } from 'vue-loading-skeleton';

// In jsx template
<Skeleton />
<Skeleton count={5} />
```

或者在全局中注册组件

```jsx
import Vue from 'vue';
import Skeleton from 'vue-loading-skeleton';

Vue.use(Skeleton);

// In jsx template
<PuSkeleton />
<PuSkeleton count={5} />
```

## 🌈 Introduction

### 自动适应你定义的样式
`<Skeleton/>`设计目的是能直接在你的vue组件中嵌套使用，组件能在加载时候自动用骨架填充空白的内容，所以你不用特别地设计字体大小、边距或其他样式与页面一样专用的骨架屏，因为组件会自动用合适的尺寸填充元素。

举个🌰:
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

### ⚠️ 需要注意的地方
由于组件是使用子节点的`tag`和`text`判断内容是否为空，从而判断组件的加载状态。所以当组件表现异常时候，你可以用`v-if`或者用`loading props`去替代组件嵌套。并希望能把问题及时反馈给我。

## 📔Usage

### 一般使用
```html
<div class="item">
  <Skeleton>
    {{ content }}
  </Skeleton>
</div>
```

### 结合v-if使用
```html
<div class="item">
  <template v-if="content">{{ content }}</template>
  <Skeleton v-else />
</div>
```

### 列表骨架
很多时候，骨架都会以列表的形式出现，所以你可以在循环的时候使用数字作为列表数据的默认值。
️⚠️但是要注意，因为使用数字去循环生成列表，所以要确保列表里的组件在绑定值的时候都有空值判断，避免出现`ReferenceError`。

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

### 改变全局样式
使用 `<SkeletonTheme />` 组件设置所有子组件的样式:

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
| props    | description                                   | type    | default   |
| -------- | --------------------------------------------- | ------- | --------- |
| count    | 单个组件里面显示的数量                        | number  | 1         |
| duration | 动画过渡时间，0的时候为关闭动画               | number  | 1.5       |
| width    | 组件长度                                      | string  |           |
| height   | 组件高度                                      | string  |           |
| circle   | 设置为圆形                                    | boolean | false     |
| loading  | 组件加载状态，使用这个props时候不会检测子节点 | boolean | undefined |

### SkeletonTheme props
| props     | description                    | type    | default   |
| --------- | ------------------------------ | ------- | --------- |
| color     | 骨架的颜色                     | string  | #eeeeee   |
| highlight | 动画高亮颜色                   | string  | #f5f5f5   |
| duration  | 设置所有骨架组件的动画过渡时间 | number  | 1.5       |
| loading   | 控制所有骨架组件加载状态       | boolean | undefined |
| tag       | 容器标签                       | string  | div       |

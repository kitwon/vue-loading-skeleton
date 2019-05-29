/* eslint import/no-extraneous-dependencies: 0 */
/* eslint no-unused-vars: 0 */
import { storiesOf } from '@storybook/vue';
import Item from './item.vue';
import ItemWithIf from './item-with-if.vue';
import { SkeletonTheme } from '../src';

storiesOf('Skeleton Component', module)
  .add('Default', () => ({
    data() {
      return {
        itemData: {}
      };
    },
    mounted() {
      setTimeout(() => {
        this.itemData = {
          img: './image.png',
          title: 'Item Title',
          body: 'Make beautiful, animated loading skeletons that automatically adapt to your app.'
        };
      }, 1500);
    },
    render(h) {
      const { itemData } = this;
      return (<Item data={itemData} />);
    }
  }))

  .add('Use with v-if', () => ({
    data() {
      return {
        itemData: {}
      };
    },
    mounted() {
      setTimeout(() => {
        this.itemData = {
          img: './image.png',
          title: 'Item Title',
          body: 'Make beautiful, animated loading skeletons that automatically adapt to your app.'
        };
      }, 1500);
    },
    render(h) {
      const { itemData } = this;
      return (<ItemWithIf data={itemData} />);
    }
  }))

  .add('Change Theme', () => ({
    render: h => (
      <SkeletonTheme color="#e6f3fd" highlight="#eef6fd">
        <Item data={{}} />
      </SkeletonTheme>
    )
  }))

  .add('Use with list', () => ({
    components: {
      Item
    },
    template: `
      <div class="list" style="width: 500px">
        <Item v-for="(value, index) in itemData" :key="index" :data="value" />
      </div>
    `,
    data() {
      return {
        itemData: 4
      };
    },
    mounted() {
      const tempArr = [1, 2, 3, 4];

      setTimeout(() => {
        this.itemData = tempArr.map(i => (
          {
            img: `./image${i}.png`,
            title: `Item Title ${i}`,
            body: `Make beautiful, animated loading skeletons that automatically adapt to your app ${i}.`
          }
        ));
      }, 1500);
    }
  }));

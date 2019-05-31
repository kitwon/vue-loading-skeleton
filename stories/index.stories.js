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
  }))

  .add('Disable animation', () => ({
    render: h => <Item data={{}} duration={0} />
  }));

storiesOf('Skeleton Theme', module)
  .add('Change Theme', () => ({
    render: h => (
      <SkeletonTheme color="#e6f3fd" highlight="#eef6fd" duration={2}>
        <Item data={{}} />
      </SkeletonTheme>
    )
  }))
  .add('Disable all animation', () => ({
    render: h => (
      <SkeletonTheme duration={0}>
        <Item data={{}} />
        <Item data={{}} />
      </SkeletonTheme>
    )
  }))
  .add('Control all lodaing status', () => ({
    data() {
      return {
        loading: true,
        itemData: [1, 2, 3, 4]
      };
    },
    created() {
      this.itemData = this.itemData.map(i => (
        {
          img: `./image${i}.png`,
          title: `Item Title ${i}`,
          body: `Make beautiful, animated loading skeletons that automatically adapt to your app ${i}.`
        }
      ));
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    },
    render(h) {
      return (
        <SkeletonTheme loading={this.loading} style="width: 500px">
          {this.itemData.map((v, i) => (<Item key={i} data={v} />))}
        </SkeletonTheme>
      );
    }
  }));

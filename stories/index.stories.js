/* eslint import/no-extraneous-dependencies: 0 */
/* eslint no-unused-vars: 0 */
import { storiesOf } from '@storybook/vue';
import Item from './item.vue';
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
  .add('Change Theme', () => ({
    render: h => (
      <SkeletonTheme color="#e6f3fd" highlight="#eef6fd">
        <Item />
      </SkeletonTheme>
    )
  }));

import Item from "./item.vue";
import ItemWithIf from './item-with-if.vue';

export default {
  title: 'Skeleton'
}

export const Default = () => ({
    components: { Item },
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
    template: `<Item :data="itemData" />`
  })

export const UseWithVif = () => (
{
    components: { ItemWithIf },
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
    template: `<ItemWithIf :data="itemData" />`
  }
)

export const UseWithList = () => (
{
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
  }
)

export const DisableAnimation = () => {
  return {
    components: { Item },
    template: `<Item :data="{}" :duration="0" />`
  }
};



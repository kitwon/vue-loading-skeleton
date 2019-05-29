import { configure } from '@storybook/vue';
import Vue from 'vue';
import Skeleton from '../src';
Vue.use(Skeleton);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.jsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

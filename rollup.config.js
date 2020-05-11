/* eslint import/no-extraneous-dependencies: off */
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';

const r = p => path.join(__dirname, '.', p);

module.exports = {
  input: r('src/index.js'),
  output: {
    file: r('dist/vue-loading-skeleton.esm.js'),
    format: 'es'
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    vue(),
    babel({ exclude: r('node_modules/**') })
  ],
  external: ['dayjs']
};

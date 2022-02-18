/* eslint import/no-extraneous-dependencies: off */
import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";

const r = (p) => path.join(__dirname, ".", p);

module.exports = {
  input: r("src/index.js"),
  output: [
    {
      file: r("dist/vue-loading-skeleton.esm.js"),
      format: "es",
    },
    {
      file: r("dist/vue-loading-skeleton.cjs.js"),
      format: "cjs",
    },
    {
      file: r("dist/vue-loading-skeleton.umd.js"),
      format: "umd",
    },
  ],
  plugins: [
    resolve({
      moduleDirectories: ["node_modules"],
    }),
    css(),
    vue({
      css: false,
    }),
    babel({ exclude: r("node_modules/**") }),
  ],
};

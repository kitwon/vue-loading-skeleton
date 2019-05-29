const path = require('path');

module.exports = ({ config }) => {
  config.context = path.resolve(__dirname, '..');

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.less$/,
    use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
  });
  config.resolve.extensions.push('.css', '.less', '.html');
  return config;
};

module.exports = api => ({
  ...(api.env('test') && { plugins: ['require-context-hook'] }),
  presets: [
    ['@vue/app', {
      useBuiltIns: false
    }]
  ]
});

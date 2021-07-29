const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup').default;

module.exports = {
  rollup(config, options) {
    config.plugins = [
      url(),
      svgr({
        ref: true,
        memo: true,
        svgoConfig: {
          plugins: [
            { removeViewBox: false },
            { removeAttrs: { attrs: 'g:(stroke|fill):((?!^none$).)*' } }
          ],
        },
      }),
      ...config.plugins,
    ];
    return config;
  },
};
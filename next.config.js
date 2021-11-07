const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const { default: Carousel } = require('react-multi-carousel');
const withCarousel = require('react-multi-carousel')

const pluginAntdLess = withAntdLess({
  lessVarsFilePath: './src/styles/antd.less',
  modifyVars: './src/styles/antd.less'
});

const pluginCarousel = withCarousel
module.exports = withPlugins([[pluginAntdLess],new Carousel()], {
  webpack(config) {
    return config;
  },
});
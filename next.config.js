const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
import Carousel from 'react-multi-carousel';
const pluginAntdLess = withAntdLess({
  lessVarsFilePath: './src/styles/antd.less',
  modifyVars: './src/styles/antd.less'
});
module.exports = withPlugins([[pluginAntdLess,Carousel]], {
  webpack(config) {
    return config;
  },
});
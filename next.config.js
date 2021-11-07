const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const babel = require('')
const pluginAntdLess = withAntdLess({
  lessVarsFilePath: './src/styles/antd.less',
  modifyVars: './src/styles/antd.less'
});
module.exports = withPlugins([], {
  webpack(config) {
    return config;
  },
});
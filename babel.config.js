module.exports = function (api) {
    api.cache(true);
  
    return {
      presets: [['next/babel']],
      plugins: [
        ['antd', { libraryName: 'antd', style: true }],
        ['react-multi-carousel']
      ],
    };
  };
module.exports = function (api) {
    api.cache(true);
  
    return {
      presets: [['next/babel']],
      plugins: [
        ['import', { libraryName: 'antd', style: true }],
        ['react-multi-carousel', 'react-multi-carousel']
      ],
    };
  };
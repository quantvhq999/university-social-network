module.exports = function (api) {
    api.cache(true);
  
    return {
      presets: [['next/babel']],
      plugins: [
        ['antd',{ style: true }],
        ['react-multi-carousel']
      ],
    };
  };
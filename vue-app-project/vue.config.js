const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, './src'))
  },

  devServer: {
    proxy: {
      '/mmdb': {
        target: 'https://wx.maoyan.com',
        changeOrigin: true
      }
    }
  }
}
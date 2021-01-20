const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.join(__dirname, "./src"));
    config.resolve.alias.set("@home", path.join(__dirname, "./src/views/home"));
    config.resolve.alias.set("@sell", path.join(__dirname, "./src/views/sell"));
  },

  devServer: {
    proxy: {
      "/api": {
        target: "https://product.zhaoliangji.com",
        changeOrigin: true,
      },
      "/evaluate": {
        target: "https://jqa.zhaoliangji.com",
        changeOrigin: true,
      },
      // "/data": {
      //   target: "http://localhost:9000",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/data': ''
      //   }
      // },
      "/quality": {
        target: "https://jqa.zhaoliangji.com",
        changeOrigin: true,
      },
      "/pages": {
        target: "https://jqstatic.zhaoliangji.com",
        changeOrigin: true,
      },
      "/shop": {
        target: "https://h5.zhaoliangji.com",
        changeOrigin: true,
      },
    },
  },
};

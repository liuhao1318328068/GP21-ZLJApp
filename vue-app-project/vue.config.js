const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.join(__dirname, "./src"));
    config.resolve.alias.set("@home", path.join(__dirname, "./src/views/home"));
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
    },
  },
};

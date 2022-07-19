const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/20220630': {
        target: 'http://127.0.0.1:8090',
        changeOrigin: true,
        pathRewrite: {
          '^/20220630': ''
        }
      },
      // '/apimock': { //此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
      //   target: process.env.VUE_APP_API_BASE_URL,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/apimock': ''
      //   }
      // }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  }
})

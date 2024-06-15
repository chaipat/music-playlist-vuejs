const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Replace with your backend API endpoint
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};

const common = require('./webpack.config.js');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    proxy: {
      '/api': {
        target: 'http://51.158.151.96:8888/',
        // target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  },
}

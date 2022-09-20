const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.jsx',
  },
  context: path.join(__dirname, '.'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules)/,
        use: ['babel-loader', './loader/class2style.js'],
      },
      {
        test: /\.(svg|jpeg)$/i,
        use: 'file-loader',
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[local]-[hash:5]"
              }
            }
          },
        ]
      },
      {
        test: /\.md$/i,
        use: ['html-loader', 'markdown-loader'],
      }

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/template.html',
    }),
  ],
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};

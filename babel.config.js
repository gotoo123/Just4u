const path = require('path');

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      'react-css-modules',
      {
        context: path.join(__dirname, '.'),
        exclude: 'node_modules',
        generateScopedName: '[local]-[hash:5]',
      },
    ],
  ],
};

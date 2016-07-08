var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    oneComponent: './src/one-component.js',
    twoComponents: './src/two-components.js',
    simpleReact: './src/simple-react.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].entry.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
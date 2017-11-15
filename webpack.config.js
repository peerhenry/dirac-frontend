var webpack = require('webpack');
const {EnvironmentPlugin} = require("webpack");

module.exports = {

  context: __dirname,
  entry: './src/main',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
    alias: {}
  },

  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        //exclude: 'node_modules',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  devServer: {
    contentBase: './public',
    proxy: {
      '/ajax': {
        target: 'http://localhost:3004',
        secure: false
      }
    }
  },

  plugins: [
    new EnvironmentPlugin(['NODE_ENV'])
  ]
}
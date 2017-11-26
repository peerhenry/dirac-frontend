var webpack = require('webpack');

var PROD = (process.env.NODE_ENV === 'production')

module.exports = {

  context: __dirname,
  entry: './src/main',

  output: {
    path: __dirname + '/public',
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
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
    'react-dom': 'ReactDOM',
    'mobx': 'mobx',
    'mobx-react': 'mobxReact',
    'axios': 'axios'
  },

  devServer: {
    contentBase: './public',
    proxy: [
      {
        context: ['/testget', '/testpost', '/respond'],
        target: 'http://localhost:3003',
        secure: false
      }
    ]
  },

  plugins: PROD ? [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
}
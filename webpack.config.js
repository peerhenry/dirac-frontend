var webpack = require('webpack');

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
    'react-dom': 'ReactDOM',
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

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
}
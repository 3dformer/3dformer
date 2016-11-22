const production = process.argv[2] === '--production'
const webpack = require('webpack')

module.exports = {
  entry: './index.jsx',

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus?resolve url'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=./images/[name].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: production ? [
    new webpack.DefinePlugin({
      'process.env': {
         NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : []
}

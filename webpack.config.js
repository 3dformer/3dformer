// const production = process.argv[2] === '--production'
const production = process.env.NODE_ENV === 'production'
const webpack = require('webpack')

module.exports = {
  // context: __dirname,
  // devtool: debug ? 'inline-sourcemap' : null,
  entry: './index.js',

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
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

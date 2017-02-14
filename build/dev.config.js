var webpack = require('webpack')
module.exports = {
  watchPoll: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  // devtool: 'source-map',
  entry: [
    './index.js'
  ],
  output: {
    publicPath: '/assets/'
  },
  module: {
    loaders: require('./loaders.config').concat([
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: /example/,
        loader: 'style-loader!css-loader?modules!autoprefixer-loader!sass-loader'
      }
    ])
  },
  devServer: {
    publicPath: '/assets/',
    port: 9090,
    host: '0.0.0.0',
    historyApiFallback: true
  }
}

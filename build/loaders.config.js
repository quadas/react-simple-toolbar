module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel'
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
  {
    test: /\.scss$/,
    exclude: /(node_modules|example)/,
    loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader!autoprefixer-loader'
  },
  {
    test: /\.png$/,
    loader: 'url?mimetype=image/png'
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&minetype=application/font-woff&name=font/[name]-[hash:6].[ext]'
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader?name=font/[name]-[hash:6].[ext]'
  }
]

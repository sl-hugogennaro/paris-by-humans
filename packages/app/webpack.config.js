const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: './app.ts',
  devtool: 'cheap-module-source-map',
  externals: {
    "leaflet": "Leaflet"
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    library: 'app',
    libraryTarget: 'umd',
    filename: 'app.js',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')],
    watchContentBase: true,
    hot: true,
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};

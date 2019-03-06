const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true,
  },
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(devServerOptions.port, devServerOptions.host, () => {
  console.log('Starting server on http://localhost:8080');
});
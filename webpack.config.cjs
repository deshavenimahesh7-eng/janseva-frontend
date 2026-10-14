const path = require('path');
const webpack = require('webpack');

const documentResponse = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#10294f">
    <meta name="description" content="Janseva helps citizens discover government services and find the right department.">
    <title>Janseva — Government Service Access Platform</title>
  </head>
  <body>
    <div id="root"></div>
    <script defer src="/assets/main.js"></script>
  </body>
</html>`;

module.exports = (env, argv) => ({
  mode: argv.mode || 'development',
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/main.js',
    publicPath: '/',
    clean: true,
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:8080/api'),
    }),
  ],
  devServer: {
    port: 5173,
    hot: true,
    open: false,
    devMiddleware: { index: false },
    setupMiddlewares(middlewares, devServer) {
      middlewares.unshift({
        name: 'janseva-in-memory-document',
        path: '/',
        middleware: (req, res, next) => {
          if (req.method !== 'GET') return next();
          const pathname = (req.url || '/').split('?')[0];
          if (pathname.startsWith('/assets/') || pathname.startsWith('/webpack') ||
              pathname.startsWith('/sockjs-node')) return next();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(documentResponse);
        },
      });
      return middlewares;
    },
  },
  devtool: argv.mode === 'development' ? 'eval-source-map' : 'source-map',
});

const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  resolve: {
    extensions: [".js", ".jsx", "*.css", ".svg"],
    alias: {
      'assets': path.resolve(__dirname, 'assets')
    }
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
    library: "reactTabContentView",
    libraryTarget: "umd",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      }
    })
  ],
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'components'
            }
          }

        ]
      }
    ],
  },
  externals: [
    {
    // Don't bundle react or react-dom
    react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
    },
    "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
    },
  },
    /@material-ui\/.*/,
  ]
};

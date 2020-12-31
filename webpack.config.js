const path = require("path");
const { NODE_ENV, FILE_NAME } = process.env;
const filename = `${FILE_NAME}${NODE_ENV === "production" ? ".min" : ""}.js`;
module.exports = {
  mode: NODE_ENV || "development",
  entry: ["./src/index.js"],
  resolve: {
    extensions: [".js", ".jsx", ".svg"],
    fallback: {
      stream: false,
    },
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename,
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(gif|svg|jpg|png)$/,
      //   use: ['@svgr/webpack'],
      //   // include: [path.join(__dirname, "src/assets")],
      //   // loader: "file-loader?name=assets/[name].[ext]",
      // },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
            loader: 'svg-react-loader',
            options: {
                tag: 'symbol',
                attrs: {
                    title: 'example',
                },
                name: 'RefreshIcon',
            },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};

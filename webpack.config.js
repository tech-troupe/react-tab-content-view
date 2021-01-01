const path = require("path");
const { NODE_ENV, FILE_NAME } = process.env;
const filename = `${FILE_NAME}${NODE_ENV === "production" ? ".min" : ""}.js`;
module.exports = {
  mode: NODE_ENV || "development",
  entry: ["./src/index.js"],
  resolve: {
    extensions: [".js", ".jsx", ".svg"],
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

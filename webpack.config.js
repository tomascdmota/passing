const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  return {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css",
        chunkFilename: "[id].css",
      }),
    ],
  };
};

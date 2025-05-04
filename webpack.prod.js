const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: { drop_console: true },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
});

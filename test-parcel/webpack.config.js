const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "soldev",
    projectName: "test-parcel",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
        },
      ],
    },
  });
};

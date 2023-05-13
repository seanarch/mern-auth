import config from "./../config/config.js";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "./../webpack.config.client.js";

const compile = (app) => {
  if (config.env === "development") {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    });
  }
};

export default { compile };

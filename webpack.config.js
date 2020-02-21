const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = function(webpackEnv) {
  // Getting and setting environment from caller
  const isEnvDevelopment = webpackEnv === "development";
  const isEnvProduction = webpackEnv === "production";

  return {
    //setting up mode in which the webpack will be running.
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    // Stop compilation early in production
    bail: isEnvProduction,
    //This option controls if and how source maps are generated.
    // We don't want a source map gets generated in case of production environment.
    // But in case of development we would creat a source map of type `cheap-module-source-map`
    devtool: isEnvProduction
      ? "source-map"
      : isEnvDevelopment && "cheap-module-source-map",
    entry: { main: "./src/index.tsx" },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      chunkFilename: "[name].bundle.js",
      // we do not need this. as it is serving default behaviour
      pathinfo: isEnvDevelopment
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      },
      minimize: isEnvProduction,
      runtimeChunk: {
        name: entrypoint => `runtime.${entrypoint.name}`
      }
    },
    devServer: {
      port: 50052,
      compress: true,
      stats: "errors-only",
      open: true,
      watchContentBase: true,
      contentBase: path.join(__dirname, "dist")
    },
    resolve: {
      extensions: [".jsx", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        // First, run the linter.
        // It's important to do this before Babel processes the JS.
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: "pre",
          exclude: /node_modules/,
          use: [
            {
              options: {
                cache: true
              },
              loader: "eslint-loader"
            }
          ]
        },
        {
          oneOf: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  //plugins: ["transform-class-properties"],
                  presets: [
                    "@babel/preset-env",
                    "@babel/preset-typescript",
                    "@babel/preset-react"
                  ]
                }
              }
            },
            {
              test: /\.(css|sass|scss)$/,
              use: ["style-loader", "css-loader", "sass-loader"],
              exclude: /\.module\.css$/
            },
            {
              test: /\.css$/,
              use: [
                "style-loader",
                {
                  loader: "css-loader",
                  options: {
                    importLoaders: 1,
                    modules: true
                  }
                }
              ],
              include: /\.module\.css$/
            },

            {
              // Exclude `js` files to keep "css" loader working as it injects
              // its runtime that would otherwise be processed through "file" loader.
              // Also exclude `html` and `json` extensions so they get processed
              // by webpacks internal loaders.
              exclude: [
                /\.(js|mjs|jsx|ts|tsx)$/,
                /\.(css|scss|sass)$/,
                /\.html$/,
                /\.json$/
              ],
              use: "file-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      /**
       * All files inside webpack's output.path directory will be removed once, but the
       * directory itself will not be. If using webpack 4+'s default configuration,
       * everything under <PROJECT_DIR>/dist/ will be removed.
       * Use cleanOnceBeforeBuildPatterns to override this behavior.
       *
       * During rebuilds, all webpack assets that are not used anymore
       * will be removed automatically.
       *
       * See `Options and Defaults` for information
       */
      new CleanWebpackPlugin(),

      // Generates an `index.html` file with the <script> injected.
      new HtmlWebPackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: path.resolve(__dirname, "public/index.html"),
            filename: "index.html"
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true
                }
              }
            : undefined
        )
      )
    ]
  };
};

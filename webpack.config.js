const path = require('path');

module.exports = function(webpackEnv) {

  // Getting and setting environment from caller  
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  
 return { 
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        // Stop compilation early in production
        bail: isEnvProduction,
        //This option controls if and how source maps are generated.
        // We don't want a source map gets generated in case of production environment.
        // But in case of development we would creat a source map of type `cheap-module-source-map`
        devtool: isEnvProduction ? false : isEnvDevelopment && 'cheap-module-source-map',
        entry: './src/index.tsx',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
              {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              }
            ]
          },

    }
}
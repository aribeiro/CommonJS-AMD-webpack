const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
   entry: {
      index: './index.js',
    },
    output: {
        path: path.resolve(__dirname, "./"),
        filename: 'out.js',
        libraryTarget: 'umd',
        library: "cloudsponge"
    },

    plugins: [ new UglifyJsPlugin({test: /\.js($|\?)/i})]

    // Only for external libraries like jQuery, lodash, etc
    //externals: ['sentry']
};


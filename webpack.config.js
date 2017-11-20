var path = require('path');

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
    // Only for external libraries like jQuery, lodash, etc
    // externals: ['./src/csUtils.js']
};


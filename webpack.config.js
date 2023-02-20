const { template } = require('lodash');
const path = require('path');

module.exports = {
  mode: "development",
  entry: ['./src/hello.ts','./src/main.ts'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output:
  {
    // filename: 'user.js',filename: "test.js",
    path: path.resolve(__dirname, 'bin'),
    filename: 'bundle.js'
  }
};
const path = require('path');

module.exports = {
 entry: './index.js',
 output: {
   path: path.join(__dirname, "./dist"),
   filename: "index.js"
 },
 module: {
   rules: [{
     test: /\.(js|jsx)$/,
     use: "babel-loader?presets[]=react,presets[]=es2015",
     exclude: /node_modules/
   },
   {
     test: /\.(css|less)$/,
     use: ['style-loader', 'css-loader', 'less-loader'],
   }]
 },
 resolve: {
   extensions: [".js", ".jsx"]
 },
 devServer: {
   port: 3001
 }
};
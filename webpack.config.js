module.exports = {
  entry: {
    javascript: "./app/js/app.js"
  },
  output: {
    path: __dirname + "/public/js",
    filename: "./app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", 'babel?'+JSON.stringify(
          {
            presets: ['react', 'es2015'],
            "plugins": [
              "syntax-class-properties",
              "syntax-decorators",
              "syntax-object-rest-spread",

              "transform-class-properties",
              "transform-object-rest-spread"
            ]
          }
        )]
      }
    ]
  }
};

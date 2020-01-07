module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

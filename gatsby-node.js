exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [loaders.css({ camelCase: false })],
        },
      ],
    },
  })
}

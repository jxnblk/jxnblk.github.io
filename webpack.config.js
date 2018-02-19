module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /markdown/,
        use: 'babel-loader'
      },
      {
        test: /system\.json$/,
        use: 'system-loader'
      },
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          '@compositor/markdown-loader'
        ]
      }
    ]
  }
}

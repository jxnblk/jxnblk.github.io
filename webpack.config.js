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
        // type: 'javascript/auto',
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

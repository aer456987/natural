module.exports = {
  publicPath: '/natural/dist',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'Natural'
        return args
      })
  }
}
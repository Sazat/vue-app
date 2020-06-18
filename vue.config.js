module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-app/'
    : '/',

  lintOnSave: false,

  pwa: {
    name: 'Zaza App',
    themeColor: '#1E8F9D',
    msTileColor: '#fff'

  }

  }


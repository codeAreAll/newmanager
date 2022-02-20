const path = require('path')
module.exports = {
  outputDir: './bulid',
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      views: '@/views'
    }
  }
}

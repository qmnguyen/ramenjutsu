const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/financial-sciences': { page: '/financial-sciences' },
      '/unified': { page: '/unified' },
      '/abv-rpg': { page: '/abv-rpg' },
      '/abv-rpg/detail': { page: '/abv-rpg/detail' }
    }
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
}

const path = require("path")

module.exports = {
  // sets frontend build to static folder in backend
  outputDir: path.resolve(__dirname, "../server/src/main/resources/static/web"),
  // assetsDir: "../../static/SPA"

  // proxy all webpack dev-server requests starting with /api
  // to our Spring Boot backend (localhost:8088) using http-proxy-middleware
  // see https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    proxy: {
      '^/api': {
        context: () => true,
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        proxyRoot: true,
      },
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/web/'
    : '/'
}

module.exports = {
 publicPath: process.env.NODE_ENV === 'production'
     ? './'
     : '/',
 devServer: {
  port: 8080, // 端口号配置  //解决axios跨域问题	
 // autoOpenBrowser: true,
 // assetsSubDirectory: 'static',
 // assetsPublicPath: '/',
  proxy: {
              '': {
                  target: 'http://localhost:8080',
                  changeOrigin: true,
                  ws: true,
                  pathRewrite: {						
                  }
              }
          } 
 },
 configureWebpack: {
  externals: {
	'AMap': 'AMap', // 高德地图配置
	'Loca': 'Loca',
	'AMapUI': 'AMapUI',
	'$':'jquery',
	'jQuery':'jquery'
  }
 },
}
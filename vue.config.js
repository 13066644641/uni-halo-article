//vue.config.js
module.exports = {
	parallel: require('os').cpus().length > 1,
	devServer: {
		disableHostCheck: true,
		proxy: {
			"/apis": {
				target: '',
				changeOrigin: true,
				secure: true,
				pathRewrite: {
					"^/apis": "/apis"
				}
			}
		}
	}
}
